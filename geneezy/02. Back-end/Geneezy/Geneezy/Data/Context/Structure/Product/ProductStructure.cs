using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Geneezy.Data.Context.Structure
{
    public class ProductStructure : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(e => e.Id);

            entityTypeBuilder.Property(e => e.Id).HasColumnName("Id").IsRequired();
            entityTypeBuilder.Property(e => e.Name).HasColumnName("Name");
            entityTypeBuilder.Property(e => e.Description).HasColumnName("Description");
            entityTypeBuilder.Property(e => e.IsActive).HasColumnName("IsActive");
            entityTypeBuilder.Property(e => e.Brand).HasColumnName("Brand");
            entityTypeBuilder.Property(e => e.Supplier).HasColumnName("Supplier");
            entityTypeBuilder.Property(e => e.Sku).HasColumnName("Sku");
            entityTypeBuilder.Property(e => e.Weight).HasColumnName("Weight");
            entityTypeBuilder.Property(e => e.Height).HasColumnName("Height");
            entityTypeBuilder.Property(e => e.Width).HasColumnName("Width");
            entityTypeBuilder.Property(e => e.Length).HasColumnName("Length");
            entityTypeBuilder.Property(e => e.Ean).HasColumnName("Ean");

            entityTypeBuilder.ToTable("Product");
        }
    }
}
