import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/domain/entity/person/person';
import { NgForm } from '@angular/forms';
import { PersonService } from 'src/app/service/layout/application/pages/structural/supplier/person/person.service';
import { PersonValidator } from 'src/app/domain/validators/person/person-validator';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  providers:[MessageService]
})
export class PersonComponent implements OnInit {
  @ViewChild('formPerson', { static: true }) formPerson!: NgForm;

  public showForm: boolean = false;
  public personNull = new Person();
  public person: any;
  public personSelected: Array<Person> = [];
  public rowsPerPageOptions = [5, 10, 20];
  public currentPageFooterTable: string = 'Mostrando {first} a {last} de {totalRecords} registros';
  public globalFilterFieldsColuns: Array<any> = ['id','name','lastName', 'cpf', 'telephone',  'mail', 'isActive'];

  public readonly cols: any = [
    { field: 'id', header: 'ID' },
    { field: 'companyName', header: 'Nome' },
    { field: 'corporateSocialName', header: 'Sobrenome' },
    { field: 'cpf', header: 'CPF' },
    { field: 'telephone', header: 'Telefone' },
    { field: 'mail', header: 'Email' },
    { field: 'isActive', header: 'Status' }
  ]

  public loading: boolean = false;
  public personForm = new Person();

  public readonly dropDownSex: any = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' }
  ]

  public readonly dropDownIsActive: any = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ]

  constructor(public activatedRoute: ActivatedRoute,
              public personService: PersonService,
              public messageService: MessageService,
              public router: Router,
              public spinner: NgxSpinnerService) {
  }

  public ngOnInit(): void {
    this.getPersonByIdSupplier();
  }

  public save(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.personSelected = [];
      if (!this.personForm.id){
        this.postPerson(+id, this.personForm);
      }
      else{
        this.putPerson(this.personForm.id, +id, this.personForm)
      }
   }
  }

  public cancel(): void {
    this.personSelected = [];
    this.showForm = false;
    this.personForm = this.personNull;
  }

  public getPersonsById(id: number): void {
    this.personService.getPersonsById(+id).subscribe(
      (response: Person) => {
        this.personForm = response;
      },
      (error: Error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta deste fornecedor.', life: 4500 });
      },
      () => {}
    )
  }

  public putPerson(id: number,  supplierId: number, person: Person): void {
    person = PersonValidator.PersonValidatorEntity(id, supplierId, person);
    this.personService.putPerson(id, person).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pessoa atualizada com sucesso!', life: 4500 });
        setTimeout(() => { 
          this.getPersonByIdSupplier();
          this.showForm = false;
          this.personForm = this.personNull;
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

  public postPerson(supplierId: number , person: Person): void {
    person = PersonValidator.PersonValidatorEntity(0, supplierId, person);
    this.personService.postPerson(person).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pessoa cadastrada com sucesso!', life: 4500 });
        setTimeout(() => { 
          this.getPersonByIdSupplier();
          this.showForm = false;
          this.personForm = this.personNull;
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


  public getPersonByIdSupplier(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.spinner.show();
      this.personService.getPersonByIdSupplier(+id).subscribe({
          next: (response: Person[]) => {
            this.person = response;
          },
          error: (error: any) => {
            this.spinner.hide();
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta da lista de fornecedores.' });
          },
          complete: () => {
            this.spinner.hide();
          }
      })
    }
  }

  public goToPersonNew(): void{
    this.showForm = true;
  }

  public goToPersonEdit(): void{
    if(this.personSelected){
      const person = this.personSelected.find(person => person.id);
      if (person?.id){
        this.showForm = true;
        this.getPersonsById(person.id);
      }
    }
  }

  public deletePersonSelected(): void{
    this.spinner.show();
    if (!this.personSelected) {
        return;
    }
    
    const personSelected = this.personSelected.find(person => person.id);
    if (!personSelected) {
        return;
    }
    
    let id = personSelected.id;
    if (!id) {
        return;
    }

    this.personService.deletePersonById(id).subscribe({
        next: () => {},
        error: (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na exclusão deste fornecedor.' });
        },
        complete: () => {
          this.spinner.hide();
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Fornecedor excluido com sucesso!' });
          setTimeout(() => { 
             this.getPersonByIdSupplier();
          }, 1000);
        }
    })
    this.personSelected = [];
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
}
