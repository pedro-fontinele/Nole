import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierEditComponent } from './supplier-edit.component';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { PersonComponent } from './person/person.component';

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
    InputMaskModule,
    TableModule,
    TagModule,
    RippleModule
  ],
  declarations: [
    SupplierEditComponent,
    PersonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SupplierEditModule { }
