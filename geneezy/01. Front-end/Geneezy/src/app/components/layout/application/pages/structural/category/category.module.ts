import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryEditModule } from './category-edit/category-edit.module';
import { CategoryRoutingModule } from './category-routing.module';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { TreeModule } from 'primeng/tree';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CategoryEditModule,
    ToastModule,
    TreeTableModule,
    TreeModule,
    ButtonModule,
    TagModule,
    InputTextModule
  ],
  declarations: [CategoryComponent],
  providers: [
    GlobalMetods
  ],
  bootstrap: [CategoryComponent]
})
export class CategoryModule { }
