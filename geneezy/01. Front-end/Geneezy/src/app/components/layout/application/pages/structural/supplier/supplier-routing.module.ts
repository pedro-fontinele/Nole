import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SupplierComponent } from "./supplier.component";
import { SupplierEditComponent } from "./supplier-edit/supplier-edit.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SupplierComponent },
        { path: 'new', component: SupplierEditComponent },
        { path: 'edit/:id', component: SupplierEditComponent}
    ])],
    exports:[RouterModule]
})
export class SupplierRoutingModule{

}