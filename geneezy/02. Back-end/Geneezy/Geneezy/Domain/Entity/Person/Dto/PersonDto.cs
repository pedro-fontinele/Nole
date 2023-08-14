namespace Geneezy.Domain.Entity.Dto
{
    public class PersonDto
    {
        public uint Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public ulong CPF { get; set; }
        public string DateOfBirth { get; set; }
        public string DateOfRegister { get; set; }
        public bool isActive { get; set; }
        public ulong Telephone { get; set; }
        public string Mail { get; set; }
        public char Sex { get; set; }
        public string Observation { get; set; }
        public uint SupplierId { get; set; }
    }
}
