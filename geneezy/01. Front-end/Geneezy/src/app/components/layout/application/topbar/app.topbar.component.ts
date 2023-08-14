import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/service/layout/app.layout.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Seu perfil',
                items: [
                    {
                        label: 'Perfil',
                        icon: 'pi pi-user',
                        command: () => {
                            
                        }
                    },
                    {
                        label: 'Sair',
                        icon: 'pi pi-sign-in',
                        command: () => {
                       
                        }
                    }
                ]
            },
            {
                label: 'Duvidas',
                items: [
                    {
                        label: 'Documentação',
                        icon: 'pi pi-book',
                        url: 'http://angular.io'
                    },
                    {
                        label: 'Suporte',
                        icon: 'pi pi-comments',
                        url: 'http://angular.io'
                    }
                ]
            }
        ];
    }
}
