import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CategoryEditComponent } from './category-edit.component';
import { TreeModule } from 'primeng/tree';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    DividerModule,
    InputNumberModule,
    ButtonModule,
    ToastModule,
    TreeModule
  ],
  declarations: [CategoryEditComponent]
})
export class CategoryEditModule { }
