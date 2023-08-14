import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/domain/entity/supplier/supplier';
import { SupplierService } from 'src/app/service/layout/application/pages/structural/supplier/supplier.service';
import { GlobalMetods } from 'src/app/common/global-metods/global-metods';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  providers: [MessageService]
})
export class SupplierComponent implements OnInit {

  public supplier: Array<Supplier> = [];
  public supplierSelected: Array<Supplier> = [];
  public rowsPerPageOptions = [5, 10, 20];
  public currentPageFooterTable: string = 'Mostrando {first} a {last} de {totalRecords} registros';
  public globalFilterFieldsColuns: Array<any> = ['id','companyName','corporateSocialName', 'cnpj', 'telephone',  'mail', 'isActive'];

  public readonly cols: any = [
    { field: 'id', header: 'ID' },
    { field: 'companyName', header: 'Nome fantasia' },
    { field: 'corporateSocialName', header: 'Razão Social' },
    { field: 'telephone', header: 'Telefone' },
    { field: 'cnpj', header: 'CNPJ' },
    { field: 'mail', header: 'Email' },
    { field: 'isActive', header: 'Status' }
  ]

  constructor(public supplieService: SupplierService,
              public messageService: MessageService,
              public router: Router,
              public spinner: NgxSpinnerService,
              public globalMetods: GlobalMetods) { }

  public ngOnInit(): void {
    this.getAllSuppliers()
  }

  public getAllSuppliers(): void{
    this.spinner.show();
    this.supplieService.getAllSuppliers().subscribe({
        next: (response: Supplier[]) => {
          this.supplier = response;
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

  public disableNewButton(): boolean{
    return this.globalMetods.disableNewButton(this.supplierSelected, this.supplier);
  }

  public disableEditOrDeleteButton(): boolean{
    return this.globalMetods.disableEditOrDeleteButton(this.supplierSelected);
  }

  public goToSupplierNew(): void{
    this.globalMetods.goToNew('/supplier/new');
  }

  public goToSupplierEdit(): void{
    this.globalMetods.goToEdit('supplier/edit', this.supplierSelected);
  }

  public deleteSupplierSelected(): void{
    this.spinner.show();
    if (!this.supplierSelected) {
        return;
    }
    
    const supplierSelected = this.supplierSelected.find(supplier => supplier.id);
    if (!supplierSelected) {
        return;
    }
    
    let id = supplierSelected.id;
    if (!id) {
        return;
    }

    this.supplieService.deleteSupplierById(id).subscribe({
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
              location.reload();
          }, 1000);
        }
    })      
  }

  public getSeverity(isActive: boolean) {
    return isActive ? 'success' : 'danger';
  }

  public onGlobalFilter(table: Table, event: Event) {
    this.globalMetods.onGlobalFilter(table, event);
  }   
}
