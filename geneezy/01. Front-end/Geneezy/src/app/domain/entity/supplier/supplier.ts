import { Person } from "../person/person";

export class Supplier{
    public id?: number;
    public companyName?: string;
    public corporateSocialName?: string;
    public telephone?: number;
    public mail?: string;
    public cnpj?: number;
    public isActive?: boolean;
    public person?: Person[];
    public businessSegment?: string;
    public dateOfFoundation?: string;
    public dateOfRegister?: string;
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