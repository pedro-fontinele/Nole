import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProductComponent },
		{ path: 'new', component: ProductEditComponent },
		{ path: 'edit/:id', component: ProductEditComponent }
		
	])],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
