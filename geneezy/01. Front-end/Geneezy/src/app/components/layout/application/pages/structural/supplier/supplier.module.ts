import { TagModule } from 'primeng/tag';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SupplierEditModule } from './supplier-edit/supplier-edit.module';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';
import { SharedPipesModule } from 'src/app/common/pipe/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SupplierEditModule,
    ToastModule,
    TableModule,
    TagModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    SharedPipesModule
    
  ],
  declarations: [
    SupplierComponent
  ],
  providers: [GlobalMetods]
})
export class SupplierModule { }
