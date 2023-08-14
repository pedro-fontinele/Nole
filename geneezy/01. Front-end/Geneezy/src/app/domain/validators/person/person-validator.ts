import { Person } from "src/app/domain/entity/person/person";
import { GlobalValidator } from "../global/global-validator";
import { DateFormatPipe } from "src/app/common/pipe/date-format/date-format.pipe";

export class PersonValidator{
    public static PersonValidatorEntity(id: number, supplierId: number, person: Person): Person {      

        person.telephone = this.validatorSupplier(person.telephone);
        
        person.cpf = this.validatorSupplier(person.cpf);
        
        person.dateOfBirth = this.validatorSupplierDate(person.dateOfBirth);
        
        person.id = id;

        person.supplierId = supplierId;
  
        return person;
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
        if(!any) return null;
      }

}