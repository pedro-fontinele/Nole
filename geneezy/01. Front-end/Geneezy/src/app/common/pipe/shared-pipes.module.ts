import { NgModule } from '@angular/core';
import { TelephoneFormatPipe } from './telephone-format/telephone-format.pipe';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { CpfFormatPipe } from './cpf-format/cpf-format.pipe';
import { CnpjFormatPipe } from './cnpj-format/cnpj-format.pipe';

@NgModule({
  declarations: [
    TelephoneFormatPipe,
    DateFormatPipe,
    CpfFormatPipe,
    CnpjFormatPipe
  ],
  exports: [
    TelephoneFormatPipe,
    DateFormatPipe,
    CpfFormatPipe,
    CnpjFormatPipe
  ]
})
export class SharedPipesModule { }