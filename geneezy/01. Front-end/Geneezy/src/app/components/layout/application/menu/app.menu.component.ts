import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/service/layout/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    public model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    public ngOnInit(): void {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Estrutural',
                items: [
                    {
                        label: 'Cadastro',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Produto',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/product']
                            },
                            {
                                label: 'Cliente',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['/client']
                            },
                            {
                                label: 'Fornecedor',
                                icon: 'pi pi-fw pi-truck',
                                routerLink: ['/supplier']
                            },
                            {
                                label: 'Categoria',
                                icon: 'pi pi-fw pi-sitemap',
                                routerLink: ['/category']
                            },
                            {
                                label: 'Empresa',
                                icon: 'pi pi-fw pi-building',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Usuário',
                                icon: 'pi pi-fw pi-user',
                                routerLink: ['/pages/crud']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Precificação',
                items: [
                    {
                        label: 'Gerenciamento de preços',
                        icon: 'pi pi-fw pi-chart-bar',
                        items: [
                            {
                                label: 'Precificação',
                                icon: 'pi pi-fw pi-tag',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Promoção',
                                icon: 'pi pi-fw pi-percentage',
                                routerLink: ['/pages/crud']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Estoque',
                items: [
                    {
                        label: 'Controle de estoque',
                        icon: 'pi pi-fw pi-th-large',
                        items: [
                            {
                                label: 'Lançamento de estoque',
                                icon: 'pi pi-fw pi-table',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Movimentação',
                                icon: 'pi pi-fw pi-arrow-right-arrow-left',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Inventario',
                                icon: 'pi pi-fw pi-spinner',
                                routerLink: ['/pages/crud']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Parametrização',
                items: [
                    {
                        label: 'Configurações',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            {
                                label: 'Geral',
                                icon: 'pi pi-fw pi-desktop',
                                routerLink: ['/pages/crud']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Faturamento',
                items: [
                    {
                        label: 'Vendas',
                        icon: 'pi pi-fw pi-shopping-cart',
                        items: [
                            {
                                label: 'Pedido de venda',
                                icon: 'pi pi-fw pi-shopping-bag',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Financeiro',
                                icon: 'pi pi-fw pi-money-bill',
                                routerLink: ['/pages/crud']
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Relatorios',
                items: [
                    {
                        label: 'Análise ABC',
                        icon: 'pi pi-fw pi-chart-line',
                        items: [
                            {
                                label: 'Análise ABC Produto',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Análise ABC Cliente',
                                icon: 'pi pi-fw pi-id-card',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Análise ABC Estoque',
                                icon: 'pi pi-fw pi-th-large',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Análise ABC Precificação',
                                icon: 'pi pi-fw pi-tag',
                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Análise ABC Venda',
                                icon: 'pi pi-fw pi-shopping-cart',
                                routerLink: ['/pages/crud']
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
