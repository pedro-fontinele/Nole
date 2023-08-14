import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CPFFormat'
})
export class CpfFormatPipe implements PipeTransform {
  transform(cpf: string): string {
    // Remover caracteres não numéricos do CPF
    cpf = cpf.toString().replace(/\D/g, '');

    // Adicionar a pontuação correta ao CPF
    return cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
