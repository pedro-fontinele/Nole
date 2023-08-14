import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/layout/application/app.layout.component';
import { NotfoundComponent } from './components/layout/application/pages/exception/notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./components/layout/application/pages/home/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'product', loadChildren: () => import('./components/layout/application/pages/structural/product/product.module').then(m => m.ProductModule) },
                    { path: 'client', loadChildren: () => import('./components/layout/application/pages/structural/client/client.module').then(m => m.ClientModule) },
                    { path: 'supplier', loadChildren: () => import('./components/layout/application/pages/structural/supplier/supplier.module').then(m => m.SupplierModule) },
                    { path: 'category', loadChildren: () => import('./components/layout/application/pages/structural/category/category.module').then(m => m.CategoryModule) }
                ]
            },
            { path: 'login', loadChildren: () => import('./components/layout/auth/login/login.module').then(m => m.LoginModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
    