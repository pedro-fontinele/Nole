import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ClientEditComponent } from './client-edit.component';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    CommonModule,
    TabViewModule,
    DividerModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule
  ],
  declarations: [ClientEditComponent]
})
export class ClientEditModule { }
