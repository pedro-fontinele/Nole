import { SelectItemGroup } from "primeng/api";

export abstract class OptionsState{
    public static defaultStates: SelectItemGroup[] = [
          {
            label: 'Centro-Oeste',
            items: [
              { label: 'Distrito Federal', value: 'DF' },
              { label: 'Goiás', value: 'GO' },
              { label: 'Mato Grosso', value: 'MT' },
              { label: 'Mato Grosso do Sul', value: 'MS' }
            ]
          },
          {
            label: 'Nordeste',
            items: [
              { label: 'Alagoas', value: 'AL' },
              { label: 'Bahia', value: 'BA' },
              { label: 'Ceará', value: 'CE' },
              { label: 'Maranhão', value: 'MA' },
              { label: 'Paraíba', value: 'PB' },
              { label: 'Pernambuco', value: 'PE' },
              { label: 'Piauí', value: 'PI' },
              { label: 'Rio Grande do Norte', value: 'RN' },
              { label: 'Sergipe', value: 'SE' }
            ]
          },
          {
            label: 'Norte',
            items: [
              { label: 'Acre', value: 'AC' },
              { label: 'Amapá', value: 'AP' },
              { label: 'Amazonas', value: 'AM' },
              { label: 'Pará', value: 'PA' },
              { label: 'Rondônia', value: 'RO' },
              { label: 'Roraima', value: 'RR' },
              { label: 'Tocantins', value: 'TO' }
            ]
          },
          {
            label: 'Sudeste',
            items: [
              { label: 'Espírito Santo', value: 'ES' },
              { label: 'Minas Gerais', value: 'MG' },
              { label: 'Rio de Janeiro', value: 'RJ' },
              { label: 'São Paulo', value: 'SP' }
            ]
          },
          {
            label: 'Sul',
            items: [
              { label: 'Paraná', value: 'PR' },
              { label: 'Rio Grande do Sul', value: 'RS' },
              { label: 'Santa Catarina', value: 'SC' }
            ]
          }
    ]
}