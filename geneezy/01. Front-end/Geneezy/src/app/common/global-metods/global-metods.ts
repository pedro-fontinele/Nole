import { Table } from "primeng/table";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class GlobalMetods {

    constructor(private router: Router){
    }

    public goToNew(urlToNew: string): void {
        this.router.navigate([urlToNew]);
    }

    public goToEdit (urlToEdit: string, entitySelected: Array<any>): void {
        if (entitySelected) {
            const entityFound = entitySelected.find((entity: any) => entity.id);
            if (entityFound) {
                this.router.navigate([`/${urlToEdit}/${entityFound.id}`]);
            }
        }
    }

    public disableNewButton(entitySelected: Array<any>, entity: any): boolean {
        return entitySelected.find((entity: any) => entity.id) ? true : false;
    }

    public disableEditOrDeleteButton(entitySelected: any): boolean {
        if (entitySelected.length == 0) return true;
        return entitySelected.filter((entity: any) => entity.id).length > 1 ? true : false;
    }

    public onGlobalFilter (table: Table, event: Event): void{
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