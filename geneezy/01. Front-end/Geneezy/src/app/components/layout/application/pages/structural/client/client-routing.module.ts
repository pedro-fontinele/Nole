import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientEditComponent } from "./client-edit/client-edit.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ClientComponent },
        { path: 'new', component: ClientEditComponent },
        { path: 'edit/:id', component: ClientEditComponent }
    ])],
    exports: [RouterModule]
})
export class ClientRoutingModule {

}