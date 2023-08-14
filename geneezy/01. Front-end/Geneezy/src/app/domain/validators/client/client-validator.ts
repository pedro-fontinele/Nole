import { Client } from "src/app/domain/entity/client/client";
import { GlobalValidator } from "../global/global-validator";
import { DateFormatPipe } from "src/app/common/pipe/date-format/date-format.pipe";

export abstract class ClientValidator {
    public static ClientValidatorEntity(id: number, client: Client): Client {      

      client.telephone = this.validatorClient(client.telephone);
      client.customer!.telephone = this.validatorClient(client.customer!.telephone);

      client.cpf = this.validatorClient(client.cpf);
      client.customer!.cnpj = this.validatorClient(client.customer!.cnpj);

      client.cep = this.validatorClient(client.cep);
      client.customer!.cep = this.validatorClient(client.customer!.cep);

      client.dateOfBirth = this.validatorClientDate(client.dateOfBirth);
      client.customer!.dateOfFoundation = this.validatorClientDate(client.customer!.dateOfFoundation);

      client.id = id;

      return client;
    }

    // metodo criado apenas para validar campos de numero que possue mascaras
    public static validatorClient(any: any): any{
      if (any?.toString() == '' || !any){
        return any = 0;
      }
      if (any) {
        return any = GlobalValidator.clearCharacters(any);
      }       
    }
    
    // metodo criado para validar datas e formatar para inserir no banco
    public static validatorClientDate(any: any): any{
      if (any){
        let dateFormatPipe = new DateFormatPipe('pt-BR', 'America/Sao_Paulo');
        return any = dateFormatPipe.transform(any);
      }
    }
}