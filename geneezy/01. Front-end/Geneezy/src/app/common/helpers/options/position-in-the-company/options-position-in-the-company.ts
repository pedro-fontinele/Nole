import { SelectItemGroup } from "primeng/api";

export abstract class OptionsPositionInTheCompany{
    public static defaultPositionInTheCompany: SelectItemGroup[] = [
          {
            label: 'Diretoria',
            items: [
              { label: 'Fundador', value: 'founder' },
              { label: 'Diretor', value: 'director'},
              { label: 'Gerente', value: 'manager' },
              { label: 'Coordenador', value: 'coordinator'}
            ]
          },
          {
            label: 'Comercial',
            items: [
                { label: 'Diretor de vendas', value: 'sales_director' },
                { label: 'Gerente de vendas', value: 'sales_manager' },
                { label: 'Representante de vendas', value: 'sales_representative' }
              ]
          },
          {
            label: 'Financeiro',
            items: [
              { label: 'Diretor financeiro', value: 'financial_director' },
              { label: 'Gerente financeiro', value: 'financial_manager' },
              { label: 'Analista financeiro', value: 'financial_analyst' }
            ]
          },
          {
            label: 'Operação',
            items: [
              { label: 'Diretor de operações', value: 'financial_director' },
              { label: 'Gerente de operações', value: 'financial_manager' },
              { label: 'Analista de operações', value: 'operations_supervisor' }
            ]
          },
          {
            label: 'Suporte',
            items: [
              { label: 'Gerente de suporte', value: 'suport_manager' },
              { label: 'Analista de suporte', value: 'suport_analyst' }
            ]
          }
    ]
}