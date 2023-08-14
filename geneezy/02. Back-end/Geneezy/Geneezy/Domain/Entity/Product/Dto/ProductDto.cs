namespace Geneezy.Domain.Entity.Dto
{
    public class ProductDto
    {
        public uint Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public string Brand { get; set; }
        public uint CategoryId { get; set; }
        public string Supplier { get; set; }
        public string Sku { get; set; }
        public decimal Weight { get; set; }
        public decimal Height { get; set; }
        public decimal Width { get; set; }
        public decimal Length { get; set; }
        public string Ean { get; set; }
    }
}
