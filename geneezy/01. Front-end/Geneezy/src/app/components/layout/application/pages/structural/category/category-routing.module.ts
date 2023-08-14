import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CategoryComponent },
		{ path: 'new', component: CategoryEditComponent },
		{ path: 'new/subcategory', component: CategoryEditComponent },
		{ path: 'edit/:id', component: CategoryEditComponent }
		
	])],
	exports: [RouterModule]
})
export class CategoryRoutingModule { }
