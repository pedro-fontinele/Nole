import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/entity/product/product';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';
import { ProductService } from 'src/app/service/layout/application/pages/structural/product/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    providers: [MessageService]
})

export class ProductComponent implements OnInit {

    public product: Array<Product> = [];
    public productSelected: Array<Product> = [];
    public rowsPerPageOptions = [5, 10, 20];
    public currentPageFooterTable: string = 'Mostrando {first} a {last} de {totalRecords} registros';
    public globalFilterFieldsColuns: Array<any> = ['id','name','description', 'brand', 'sku', 'isActive'];

    public readonly cols: any = [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Nome' },
        { field: 'description', header: 'Descrição' },
        { field: 'brand', header: 'Marca' },
        { field: 'sku', header: 'Embalagem' },
        { field: 'isActive', header: 'Status' }
    ]

    public getSeverity(isActive: boolean) {
        return isActive ? 'success' : 'danger';
    }

    constructor(private productService: ProductService, 
                public messageService: MessageService,
                private spinner: NgxSpinnerService,
                private globalMethods: GlobalMetods){
    }

    public ngOnInit():void {
        this.getAllProducts();
    }
    
    public getAllProducts(): void {
      this.spinner.show();
      this.productService.getAllProducts().subscribe({
          next: (response: Product[]) => {
            this.product = response;
          },
          error: (error: any) => {
            this.spinner.hide();
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta da lista de produto.' });
          },
          complete: () => {
            this.spinner.hide();
          }
       })
    }

    public goToProductNew(): void {
        this.globalMethods.goToNew('/product/new');
    } 

    public goToProductEdit(): void {
        this.globalMethods.goToEdit('product/edit', this.productSelected);
    }

    public deleteProductSelected(): void {
        this.spinner.show();
        if (!this.productSelected) {
            return;
        }
        
        const productSelected = this.productSelected.find(product => product.id);
        if (!productSelected) {
            return;
        }
        
        let id = productSelected.id;
        if (!id) {
            return;
        }

        this.productService.deleteProductById(id).subscribe({
            next: () => { },
            error: (error: any) => {
              this.spinner.hide();
              console.log(error);
              this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na exclusão deste produto.' });
            },
            complete: () => {
              this.spinner.hide();
              this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Produto excluido com sucesso!' });
              setTimeout(() => { 
                  this.spinner.show();
                  location.reload();
              }, 1000);
            }
        })         
    }
    
    public disableNewButton(): boolean {
        return this.globalMethods.disableNewButton(this.productSelected, this.product);
    }

    public disableEditOrDeleteButton(): boolean {
        return this.globalMethods.disableEditOrDeleteButton(this.productSelected);
    }

    public onGlobalFilter(table: Table, event: Event): void{
        this.globalMethods.onGlobalFilter(table, event);
    }
}
