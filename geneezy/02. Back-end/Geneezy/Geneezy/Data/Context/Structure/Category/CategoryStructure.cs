using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Geneezy.Data.Context.Structure
{
    public class CategoryStructure : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(e => e.Id);

            entityTypeBuilder.Property(e => e.Id).HasColumnName("Id").IsRequired();
            entityTypeBuilder.Property(e => e.Name).HasColumnName("Name");
            entityTypeBuilder.Property(e => e.IsActive).HasColumnName("IsActive");
            entityTypeBuilder.Property(e => e.ParentCategoryId).HasColumnName("ParentCategoryId");

            entityTypeBuilder.ToTable("Category");
        }
    }
}
