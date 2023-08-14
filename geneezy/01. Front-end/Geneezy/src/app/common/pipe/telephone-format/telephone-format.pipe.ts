import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TelephoneFormat'
})
export  class TelephoneFormatPipe implements PipeTransform {
  transform(telefone: string): string {
    telefone = telefone.toString().replace(/\D/g, '');
    return telefone.toString().replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}
