import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/domain/entity/person/person';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, SelectItemGroup } from 'primeng/api';
import { Supplier } from 'src/app/domain/entity/supplier/supplier';
import { OptionsState } from 'src/app/common/helpers/options/state/options-state';
import { OptionsBusinessSegment } from 'src/app/common/helpers/options/business-segment/options-business-segment';
import { Table } from 'primeng/table';
import { OptionsCity } from 'src/app/common/helpers/options/city/options-city';
import { SupplierService } from 'src/app/service/layout/application/pages/structural/supplier/supplier.service';
import { PersonService } from 'src/app/service/layout/application/pages/structural/supplier/person/person.service';
import { SupplierValidator } from 'src/app/domain/validators/supplier/supplier-validator';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  providers:[MessageService]
})
export class SupplierEditComponent implements OnInit {
  @ViewChild('formSupplier', { static: true }) formSupplier!: NgForm;

  public filteredCities: any[] = OptionsCity.defaultCitys;
  public city: SelectItemGroup[] = OptionsCity.defaultCitys;
  public state: SelectItemGroup[] = OptionsState.defaultStates;
  public positionBusinessSegment: SelectItemGroup[] = OptionsBusinessSegment.defaultBusinessSegment;
  public loading: boolean = false;
  public supplier = new Supplier();
  public showForm: boolean = false;
  public person: any;
  public personSelected: Array<Person> = [];

  public readonly dropDownIsActive: any = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ]

  public validatorTab(id: number): boolean {
     return id != null ? true : false;
  }
  
  constructor(public activatedRoute: ActivatedRoute,
              public supplierService: SupplierService,
              public personService: PersonService,
              public messageService: MessageService,
              public router: Router,
              public spinner: NgxSpinnerService) { }

  public ngOnInit(): void {
    this.getSupplierById();
  }

  public getSupplierById(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.spinner.show();
      this.supplierService.getSuppliersById(+id).subscribe(
        (response: Supplier) => {
          this.supplier = response;
          this.filterCitiesByState();
          if (response.person) this.person = response.person;
        },
        (error: Error) => {
          console.log(error);
          this.spinner.hide();
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta deste fornecedor.', life: 4500 });
        },
        () => {
          this.spinner.hide();
        }
      )
    }
  }

  public save(): void {
    if (this.formSupplier?.value != null) {
      this.loading = true;
      this.spinner.show();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      const supplier = { ...this.formSupplier.value, person: this.person };
      id ? this.putSupplier(+id, supplier) : this.postSupplier(supplier);
    }    
  }  

  public cancel(): void {
    this.formSupplier?.reset();
    this.router.navigate(['/supplier']);
  }

  public putSupplier(id: number, supplier: Supplier): void {
    supplier = SupplierValidator.SupplierValidatorEntity(id, supplier);
    this.supplierService.putSupplier(id, supplier).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Fornecedor atualizado com sucesso!', life: 4500 });
        setTimeout(() => { 
         this.router.navigate(['/supplier'])
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

  public postSupplier(supplier: Supplier): void {
    supplier = SupplierValidator.SupplierValidatorEntity(0, supplier);
    this.supplierService.postSupplier(supplier).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Fornecedor cadastrado com sucesso!', life: 4500 });
        setTimeout(() => { 
          this.router.navigate(['/supplier'])
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

  public disableNewButton(): boolean{
    return this.personSelected.find(product => product.id) ? true : false;
  }

  public disableEditOrDeleteButton(): boolean{
    if (this.personSelected.length == 0) return true;
    return this.personSelected.filter(product => product.id).length > 1 ? true : false;
  }

  public getSeverity(isActive: boolean) {
    return isActive ? 'success' : 'danger';
  }
  
  public onGlobalFilter(table: Table, event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.trim();
  
    if (inputValue.toLowerCase() === 'ativo') {
      table.filterGlobal('true', 'equals');
    } else if (inputValue.toLowerCase() === 'inativo') {
      table.filterGlobal('false', 'equals');
    } else {
      table.filterGlobal(inputValue, 'contains');
    }
  }

  public filterCitiesByState(): any{
    for (var i = 0; i < this.state.length; i++) {
        var items = this.state[i].items;
        for (var j = 0; j < items.length; j++) {
          if (items[j].value == this.supplier.state) {
            for (var k = 0; k < this.city.length; k++) {
              if (this.city[k].label == items[j].label){
                return this.filteredCities = this.city.filter(e => e.label == items[j].label);
            }
          }
        }
      }
    }
  }
}
