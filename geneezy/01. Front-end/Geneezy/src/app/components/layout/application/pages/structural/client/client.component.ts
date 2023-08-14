import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/domain/entity/client/client';
import { Table } from 'primeng/table';
import { ClientService } from 'src/app/service/layout/application/pages/structural/client/client.service';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  providers: [MessageService]
})
export class ClientComponent implements OnInit {

  public client: Array<Client> = [];
  public clientSelected: Array<Client> = [];
  public rowsPerPageOptions = [5, 10, 20];
  public currentPageFooterTable: string = 'Mostrando {first} a {last} de {totalRecords} registros';
  public globalFilterFieldsColuns: Array<any> = ['id','name','lastName', 'CPF', 'telephone',  'mail', 'isActive'];

  public readonly cols: any = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nome' },
    { field: 'lastName', header: 'Sobrenome' },
    { field: 'telephone', header: 'Telefone' },
    { field: 'CPF', header: 'CPF' },
    { field: 'mail', header: 'Email' },
    { field: 'isActive', header: 'Status' }
  ]

  constructor(public clientService: ClientService,
              public messageService: MessageService,
              public spinner: NgxSpinnerService,
              private globalMethods: GlobalMetods) {
  }

  public getSeverity(isActive: boolean) {
    return isActive ? 'success' : 'danger';
  }

  public ngOnInit(): void {
    this.getAllClients();
  }

  public getAllClients(): void{
    this.spinner.show();
    this.clientService.getAllClients().subscribe({
        next: (response: Client[]) => {
          this.client = response;
        },
        error: (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na consulta da lista de clientes.' });
        },
        complete: () => {
          this.spinner.hide();
        }
     })
  }

  public goToClientNew(): void{
    this.globalMethods.goToNew('/client/new');
  }

  public goToClientEdit(): void{
    this.globalMethods.goToEdit('client/edit', this.clientSelected);
  }

  public deleteClientSelected(): void{
    this.spinner.show();
    if (!this.clientSelected) {
        return;
    }
    
    const clientSelected = this.clientSelected.find(client => client.id);
    if (!clientSelected) {
        return;
    }
    
    let id = clientSelected.id;
    if (!id) {
        return;
    }

    this.clientService.deleteClientById(id).subscribe({
        next: () => {},
        error: (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro na exclusão deste cliente.' });
        },
        complete: () => {
          this.spinner.hide();
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente excluido com sucesso!' });
          setTimeout(() => { 
            this.getAllClients();
          }, 1000);
        }
    })

    this.clientSelected = []
  }

  public disableNewButton(): boolean{
      return this.globalMethods.disableNewButton(this.clientSelected, this.client);
  }

  public disableEditOrDeleteButton(): boolean{
      return this.globalMethods.disableEditOrDeleteButton(this.clientSelected);
  }

  public onGlobalFilter(table: Table, event: Event) {
    this.globalMethods.onGlobalFilter(table, event);
  }    
}