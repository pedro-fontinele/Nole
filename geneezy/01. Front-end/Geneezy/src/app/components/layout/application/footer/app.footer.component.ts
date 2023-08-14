import { Component } from '@angular/core';
import { LayoutService } from 'src/app/service/layout/app.layout.service';


@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) { }
}
