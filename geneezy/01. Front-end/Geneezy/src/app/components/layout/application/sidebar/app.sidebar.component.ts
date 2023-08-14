import { Component, ElementRef } from '@angular/core';
import { LayoutService } from 'src/app/service/layout/app.layout.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
