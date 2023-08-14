import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Category } from 'src/app/domain/entity/category/category';
import { CategoryValidator } from 'src/app/domain/validators/category/category-validator';
import { CategoryService } from 'src/app/service/layout/application/pages/structural/category/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  providers: [MessageService]
})
export class CategoryEditComponent implements OnInit {
  @ViewChild('formCategory', { static: true }) formCategory!: NgForm;

  public category = new Category();
  public loading: boolean = false;
  public parentCategoryName?: string;
  public parentCategoryId?: number;
  public isMainCategory: boolean = true;
  public urlSegment: string = '';
  
  public readonly dropdownItems: any = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ]
  
  public readonly categoryStructure: any = [
    { label: 'Categoria Principal', value: true },
    { label: 'Subcategoria', value: false }
  ]
  
  constructor(private activatedRoute: ActivatedRoute,
              public categoryService: CategoryService,
              public messageService: MessageService,
              public router: Router,
              public spinner: NgxSpinnerService) { }

  public ngOnInit(): void {
    this.setterIsMainCategory(null);
    this.getCategoryById();
  }

  public getCategoryById(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const parentId = this.activatedRoute.snapshot.queryParamMap.get('parentCategoryId');
    if (id){
      this.spinner.show();
      this.categoryService.getCategoryById(+id).subscribe({
        next: (response: Category) => {
          this.category = response;
          if (parentId) this.getParentCategoryById(+parentId);
          this.setterIsMainCategory(this.category.parentCategoryId);
        },
        error: () => {
          this.spinner.hide();
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta desta categoria.', life: 4500 });
        },
        complete: () => {
          this.spinner.hide();
        }
     })
    }  else if (parentId) {
      this.getParentCategoryById(+parentId);      
    }
  }

  public getParentCategoryById(parentId: number): void{
      this.categoryService.getCategoryById(parentId).subscribe({
        next: (response: Category) => {
          if (response) {
              this.parentCategoryName = response.name;
              this.parentCategoryId = response.id;
          }
        }
      })
  }

  public save(): void {
    if (this.formCategory?.value != null) {
      this.loading = true;
      this.spinner.show();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.category = { ...this.formCategory?.value };
      this.category.parentCategoryId = this.parentCategoryId;
      id ? this.putCategory(+id, this.category) : this.postCategory(this.category);
    }
  }

  public cancel(): void {
    this.formCategory?.reset();
    this.router.navigate(['/category']);
  }

  public putCategory(id: number, category: Category): void {
    category = CategoryValidator.CategoryValidatorEntity(id, category);
      this.categoryService.putCategory(id, category).subscribe(
        (response: any) => {
          this.spinner.hide();
          this.loading = false;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Categoria atualizada com sucesso!', life: 4500 });
          setTimeout(() => { 
           this.router.navigate(['/category'])
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

  public postCategory(category: Category): void {
    category = CategoryValidator.CategoryValidatorEntity(0, category);
      this.categoryService.postCategory(category).subscribe(
        (response: any) => {
          this.spinner.hide();
          this.loading = false;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Categoria cadastrada com sucesso!', life: 4500 });
          setTimeout(() => { 
            this.router.navigate(['/category'])
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

  public setterIsMainCategory(parentCategoryId: any): void{
    this.urlSegment = this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    if (this.urlSegment == 'new'){
      this.isMainCategory = true;
    } else if (this.urlSegment == 'new/subcategory') {
      this.isMainCategory = false;
    } else if (parentCategoryId == 0) {
      this.isMainCategory = true;
    } else if(parentCategoryId != 0){
      this.isMainCategory = false;
    }
  }
}
