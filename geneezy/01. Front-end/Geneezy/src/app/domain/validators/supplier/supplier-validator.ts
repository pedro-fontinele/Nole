import { DateFormatPipe } from "src/app/common/pipe/date-format/date-format.pipe";
import { GlobalValidator } from "../global/global-validator";
import { Supplier } from "src/app/domain/entity/supplier/supplier";

export class SupplierValidator{
    public static SupplierValidatorEntity(id: number, supplier: Supplier): Supplier {      

        supplier.telephone = this.validatorSupplier(supplier.telephone);
        
        supplier.cnpj = this.validatorSupplier(supplier.cnpj);
        
        supplier.cep = this.validatorSupplier(supplier.cep);
        
        supplier.dateOfFoundation = this.validatorSupplierDate(supplier.dateOfFoundation);

        if (supplier.person){
          for (let i = 0; i < supplier.person!.length; i++) {
            supplier.person![i].supplierId = id;
            supplier.person![i].telephone = this.validatorSupplier(supplier.person![i].telephone);
            supplier.person![i].cpf = this.validatorSupplier(supplier.person![i].cpf);
            supplier.person![i].dateOfBirth! = this.validatorSupplierDate(supplier.person![i].dateOfBirth);
          }   
        }
  
        supplier.id = id;
  
        return supplier;
      }
  
      // metodo criado apenas para validar campos de numero que possue mascaras
      public static validatorSupplier(any: any): any{
        if (any?.toString() == '' || !any){
          return any = 0;
        }
        if (any) {
          return any = GlobalValidator.clearCharacters(any);
        }       
      }
      
      // metodo criado para validar datas e formatar para inserir no banco
      public static validatorSupplierDate(any: any): any{
        if (any){
          let dateFormatPipe = new DateFormatPipe('pt-BR', 'America/Sao_Paulo');
          return any = dateFormatPipe.transform(any);
        }
      }
}