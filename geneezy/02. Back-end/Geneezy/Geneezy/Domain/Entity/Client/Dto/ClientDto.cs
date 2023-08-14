using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.Dto
{
    public class ClientDto
    {
        public uint Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public ulong CPF { get; set; }
        public string DateOfBirth { get; set; }
        public string DateOfRegister { get; set; }
        public bool isActive { get; set; }
        public bool isBusiness { get; set; }
        public Customer Customer { get; set; }
        public string PositionInTheCompany { get; set; }
        public ulong Telephone { get; set; }
        public string Mail { get; set; }
        public char Sex { get; set; }
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
