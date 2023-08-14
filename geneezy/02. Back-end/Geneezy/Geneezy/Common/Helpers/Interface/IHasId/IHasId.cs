namespace Geneezy.Common.Helpers.Inteface
{
    public interface IHasId<T>
    {
        public uint Id { get; set; }
        public string Name { get; set; }
        public uint ParentCategoryId { get; set; }
    }
}
