using Geneezy.Common.Helpers.Inteface;

namespace Geneezy.Domain.Entity.Model
{
    public class Category : IHasId<Category>
    {
        public uint Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public uint ParentCategoryId { get; set; }
    }
}
