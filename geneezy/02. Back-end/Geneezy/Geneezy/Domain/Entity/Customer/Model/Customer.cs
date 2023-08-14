namespace Geneezy.Domain.Entity.Model
{
    public class Customer
    {
        public uint Id { get; set; }
        public string CompanyName { get; set; }
        public string CorporateSocialName { get; set; }
        public ulong Telephone { get; set; }
        public string Mail { get; set; }
        public ulong CNPJ { get; set; }
        public bool isActive { get; set; }
        public string BusinessSegment { get; set; }
        public string DateOfFoundation { get; set; }
        public string DateOfRegister { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Neighborhood { get; set; }
        public string Street { get; set; }
        public uint ResidentialNumber { get; set; }
        public string ComplementAddress { get; set; }
        public uint CEP { get; set; }
        public string Observation { get; set; }
    }
}
