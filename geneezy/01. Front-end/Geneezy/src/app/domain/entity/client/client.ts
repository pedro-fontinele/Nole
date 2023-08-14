import { Customer } from 'src/app/domain/entity/customer';

export class Client {	
    public id?: number;
    public name?: string;
    public lastName?: string;
    public cpf?: number;
    public dateOfBirth?: string;
    public dateOfRegister?: string;
    public isActive?: boolean;
    public isBusiness?: boolean;
    public customer?: Customer;
    public positionInTheCompany?: string;
    public telephone?: number;
    public mail?: string;
    public sex?: string;
    public country?: string;
    public state?: string;
    public city?: string;
    public neighborhood?: string;
    public street?: string;
    public residentialNumber?: number;
    public complementAddress?: string;
    public cep?: number;
    public observation?: string;
}