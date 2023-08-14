namespace Geneezy.Domain.Entity.Dto
{
    public class CategoryDto
    {
        public uint Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public uint ParentCategoryId { get; set; }
    }
}
