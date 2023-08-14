using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Geneezy.Data.Context.Structure
{
    public class CustomerStructure : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(e => e.Id);

            entityTypeBuilder.Property(e => e.Id).HasColumnName("Id").IsRequired();
            entityTypeBuilder.Property(e => e.CompanyName).HasColumnName("CompanyName"); ;
            entityTypeBuilder.Property(e => e.CorporateSocialName).HasColumnName("CorporateSocialName");
            entityTypeBuilder.Property(e => e.Telephone).HasColumnName("Telephone");
            entityTypeBuilder.Property(e => e.Mail).HasColumnName("Mail");
            entityTypeBuilder.Property(e => e.CNPJ).HasColumnName("CNPJ");
            entityTypeBuilder.Property(e => e.isActive).HasColumnName("isActive");
            entityTypeBuilder.Property(e => e.BusinessSegment).HasColumnName("BusinessSegment");
            entityTypeBuilder.Property(e => e.DateOfFoundation).HasColumnName("DateOfFoundation");
            entityTypeBuilder.Property(e => e.DateOfRegister).HasColumnName("DateOfRegister");
            entityTypeBuilder.Property(e => e.Country).HasColumnName("Country");
            entityTypeBuilder.Property(e => e.State).HasColumnName("State");
            entityTypeBuilder.Property(e => e.City).HasColumnName("City");
            entityTypeBuilder.Property(e => e.Neighborhood).HasColumnName("Neighborhood");
            entityTypeBuilder.Property(e => e.Street).HasColumnName("Street");
            entityTypeBuilder.Property(e => e.ResidentialNumber).HasColumnName("ResidentialNumber");
            entityTypeBuilder.Property(e => e.ComplementAddress).HasColumnName("ComplementAddress");
            entityTypeBuilder.Property(e => e.CEP).HasColumnName("CEP");
            entityTypeBuilder.Property(e => e.Observation).HasColumnName("Observation");

            entityTypeBuilder.ToTable("Customer");
        }
    }
}
