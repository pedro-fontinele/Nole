import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryService } from './service/legado/country.service';
import { EventService } from './service/legado/event.service';
import { IconService } from './service/legado/icon.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NotfoundComponent } from './components/layout/application/pages/exception/notfound/notfound.component';
import { AppLayoutModule } from './components/layout/application/app.layout.module';
import { ProductService } from './service/layout/application/pages/structural/product/product.service';
import { ClientService } from './service/layout/application/pages/structural/client/client.service';


registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserAnimationsModule, 
        NgxSpinnerModule.forRoot(),
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, EventService, IconService, ProductService, ClientService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
