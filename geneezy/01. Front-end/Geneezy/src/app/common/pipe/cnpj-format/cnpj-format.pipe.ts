import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CNPJFormat'
})
export class CnpjFormatPipe implements PipeTransform {

  transform(cnpj: string): string {
    cnpj = cnpj.toString().replace(/\D/g, '');
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }
}
