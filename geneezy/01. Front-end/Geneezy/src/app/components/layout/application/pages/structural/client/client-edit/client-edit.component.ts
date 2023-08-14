import { Customer } from 'src/app/domain/entity/customer';
import { NgForm } from '@angular/forms'; 
import { MessageService, SelectItemGroup } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/domain/entity/client/client';
import { OptionsPositionInTheCompany } from 'src/app/common/helpers/options/position-in-the-company/options-position-in-the-company';
import { OptionsState } from 'src/app/common/helpers/options/state/options-state';
import { OptionsBusinessSegment } from 'src/app/common/helpers/options/business-segment/options-business-segment';
import { OptionsCity } from 'src/app/common/helpers/options/city/options-city';
import { ClientService } from 'src/app/service/layout/application/pages/structural/client/client.service';
import { ClientValidator } from 'src/app/domain/validators/client/client-validator';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  providers:[MessageService]
})
export class ClientEditComponent implements OnInit {
  @ViewChild('formClient', { static: true }) formClient!: NgForm;

  public filteredCities: any[] = OptionsCity.defaultCitys;  
  public position: SelectItemGroup[] = OptionsPositionInTheCompany.defaultPositionInTheCompany;
  public state: SelectItemGroup[] = OptionsState.defaultStates;
  public city: SelectItemGroup[] = OptionsCity.defaultCitys;
  public positionBusinessSegment: SelectItemGroup[] = OptionsBusinessSegment.defaultBusinessSegment;
  public loading: boolean = false;
  public client = new Client();
  public customer = new Customer();

  public readonly dropDownIsActive: any = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ]

  public readonly dropDownIsBusiness: any = [
    { label: 'Não', value: false },
    { label: 'Sim', value: true }
  ]

  public readonly dropDownSex: any = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' }
  ]

  constructor(public activatedRoute: ActivatedRoute,
              public clientService: ClientService,
              public messageService: MessageService,
              public router: Router,
              public spinner: NgxSpinnerService) { }

  public ngOnInit(): void {
    this.getClientById();
  }

  public getClientById(): void{
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id){
      this.spinner.show();
      this.clientService.getClientById(+id).subscribe(
        (response: Client) => {
          this.client = response;
          this.filterCitiesByState();
          if (response.customer) this.customer = response.customer;
        },
        (error: Error) => {
          this.spinner.hide();
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta deste cliente', life: 4500 });
        },
        () => {
          this.spinner.hide();
        }
      )
    }
  }

  public save(): void {
    if (this.formClient?.value != null) {
      this.loading = true;
      this.spinner.show();
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      const client = { ...this.formClient.value, customer: this.customer };
      id ? this.putClient(+id, client) : this.postClient(client);
    }    
  }  

  public cancel(): void {
    this.formClient?.reset();
    this.router.navigate(['/client']);
  }

  public putClient(id: number, client: Client): void {
    client = ClientValidator.ClientValidatorEntity(id, client);
    this.clientService.putClient(id, client).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente atualizado com sucesso!', life: 4500 });
        setTimeout(() => { 
         this.router.navigate(['/client'])
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

  public postClient(client: Client): void {
    client = ClientValidator.ClientValidatorEntity(0, client);
    this.clientService.postClient(client).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente cadastrado com sucesso!', life: 4500 });
        setTimeout(() => { 
          this.router.navigate(['/client'])
        }, 1000);
      },
      (error: any) => {
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

  public filterCitiesByState(): any{
    for (var i = 0; i < this.state.length; i++) {
        var items = this.state[i].items;
        for (var j = 0; j < items.length; j++) {
          if (items[j].value == this.client.state) {
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
