import { MessageService, SelectItemGroup } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsSku } from 'src/app/common/helpers/options/sku/options-sku';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/domain/entity/product/product';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/service/layout/application/pages/structural/product/product.service';
import { ProductValidator } from 'src/app/domain/validators/product/product-validator';
import { SelectItemStructure } from 'src/app/common/helpers/interface/select-item-structure/select-item-structure';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  providers: [MessageService]
})
export class ProductEditComponent implements OnInit {
  @ViewChild('formProduct', { static: true }) formProduct!: NgForm;
  
  public category: SelectItemStructure[] = [];
  public selectedCategory?: string;

  public optionsSku = new OptionsSku;
  public sku: SelectItemGroup[] = this.optionsSku.defaultSku;
  public selectedSku?: string;
  
  public loading: boolean = false;
  public product = new Product();
  
  public readonly dropdownItems: any = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ]
  
  public ngOnInit(): void {
    this.getProductById();
  }

  constructor(private activatedRoute: ActivatedRoute,
              public productService: ProductService,
              public messageService: MessageService,
              public router: Router,
              public spinner: NgxSpinnerService) {
  }

  public getProductById(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.spinner.show();
      this.productService.getProductsById(+id).subscribe({
        next: (response: Product) => {
          this.product = response;
        },
        error: () => {
          this.spinner.hide();
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta deste produto', life: 4500 });
        },
        complete: () => {
          this.spinner.hide();
        }
     })
    }

    this.productService.getAllCategoriesInList().subscribe({
      next: (response: SelectItemStructure[]) => {
        this.category = response;
      }
    });
  }

  public save(): void {
    if (this.formProduct?.value != null) {
      this.loading = true;
      this.spinner.show();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.product = { ...this.formProduct?.value };
      id ? this.putProduct(+id, this.product) : this.postProduct(this.product);
    }
  }
  
  public cancel(): void {
    this.formProduct?.reset();
    this.router.navigate(['/product']);
  }

  public putProduct(id: number, product: Product): void {
    product = ProductValidator.ProductValidatorEntity(id, product);
    this.productService.putProducts(id, product).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto atualizado com sucesso!', life: 4500 });
        setTimeout(() => { 
         this.router.navigate(['/product'])
        }, 1000);
      },
      (error: any) => {
        console.log(error);
        this.spinner.hide();
        this.loading = false;
        if (error.status >= 400 && error.status <= 499) {
           const errors = error.error.errors;
           for (const key in errors) {
           if (errors.hasOwnProperty(key)) {
                let errorMessages = errors[key];
                this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: errorMessages, life: 4500 });
              }
           }
        } 
        if (error.status >= 500 && error.status <= 599) {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro interno em nosso servidor.', life: 4500 });
        }
      },
      () => {}
      )
  }

  public postProduct(product: Product): void {
    product = ProductValidator.ProductValidatorEntity(0, product);
    this.productService.postProducts(product).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto cadastrado com sucesso!', life: 4500 });
        setTimeout(() => { 
          this.router.navigate(['/product'])
        }, 1000);
      },
      (error: any) => {
        this.spinner.hide();
        this.loading = false;
        if (error.status >= 400 && error.status <= 499) {
          const errors = error.error.errors;
          for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
               let errorMessages = errors[key];
               this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: errorMessages, life: 4500 });
             }
          }
        } 
        if (error.status >= 500 && error.status <= 599) {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro interno em nosso servidor.', life: 4500 });
        }
      },
      () => {}
    )
  }
}
