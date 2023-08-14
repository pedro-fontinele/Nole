import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService, TreeNode } from 'primeng/api';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';
import { Category } from 'src/app/domain/entity/category/category';
import { CategoryService } from 'src/app/service/layout/application/pages/structural/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [MessageService]
})
export class CategoryComponent implements OnInit {

  public categoryTreeNode: TreeNode[] = [];
  public rowsPerPageOptions = [5, 10, 20];
  public currentPageFooterTable: string = 'Mostrando {first} a {last} de {totalRecords} registros';
  public globalFilterFieldsColuns: Array<any> = ['id','name','isActive'];
    
  public readonly cols: any = [
    { field: 'name', header: 'Categoria' },
    { field: 'isActive', header: 'Status' }
  ]
   
  constructor(public categoryService: CategoryService,
              public messageService: MessageService,
              public spinner: NgxSpinnerService,
              public globalMethods: GlobalMetods,
              private router: Router) { 
  }

  public ngOnInit(): void {
    this.getAllCategory();
  }

  public getAllCategory(): void{
    this.spinner.show();
    this.categoryService.getAllCategorys().subscribe(
        (response: TreeNode<Category>[]) => {
          this.categoryTreeNode = response;
        },
        (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta da lista de categorias.' });
        },
        () => {
          this.spinner.hide();
        }
     )
  }

  public goToCategoryNew(): void{
    this.globalMethods.goToNew('/category/new');
  }

  public goToSubCategoryNew(category: any): void{
    const queryParams = { parentCategoryId: category.id };
    this.router.navigate(['/category/new/subcategory'], { queryParams });
  }

  public goToCategoryEdit(category: any): void{
    const queryParams = { parentCategoryId: category.parentCategoryId };
    this.router.navigate([`/${'category/edit'}/${category.id}`], { queryParams });
  }

  public deleteCategory(category: any): void{
    this.spinner.show();
    if (!category) return;

    this.categoryService.deleteCategoryById(category.id).subscribe({
        next: (response: any) => {
          this.spinner.hide();
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: response.message });
        },
        error: (error: any) => {
          this.spinner.hide();
          console.log(error);
          if (error.status >= 400 && error.status <= 499) {
            const errors = error.error.message;
            let errorMessages = errors;
            this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: errorMessages, life: 4500 });
          } 
          if (error.status >= 500 && error.status <= 599) {
              this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro interno em nosso servidor.', life: 6500 });
          }
        },
        complete: () => {
          setTimeout(() => {this.getAllCategory()}, 1000);
        }
    })
  }

  public getSeverity(isActive: boolean) {
    return isActive ? 'success' : 'danger';
  }

  public onGlobalFilter(table: any, event: Event) {
    this.globalMethods.onGlobalFilter(table, event);
  } 
}
