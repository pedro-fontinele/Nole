import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ClientEditModule } from './client-edit/client-edit.module';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';
import { SharedPipesModule } from 'src/app/common/pipe/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    TagModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    ClientRoutingModule,
    ClientEditModule,
    SharedPipesModule
  ],
  declarations: [
    ClientComponent
  ],
  providers: [GlobalMetods]
})
export class ClientModule { }
