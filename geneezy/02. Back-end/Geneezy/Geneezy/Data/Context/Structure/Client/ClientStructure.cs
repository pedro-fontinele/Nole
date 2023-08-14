using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Geneezy.Data.Context.Structure
{
    public class ClientStructure : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(e => e.Id);

            entityTypeBuilder.Property(e => e.Id).HasColumnName("Id").IsRequired();
            entityTypeBuilder.Property(e => e.Name).HasColumnName("Name");
            entityTypeBuilder.Property(e => e.LastName).HasColumnName("LastName");
            entityTypeBuilder.Property(e => e.CPF).HasColumnName("CPF");
            entityTypeBuilder.Property(e => e.DateOfBirth).HasColumnName("DateOfBirth");
            entityTypeBuilder.Property(e => e.DateOfRegister).HasColumnName("DateOfRegister");
            entityTypeBuilder.Property(e => e.isActive).HasColumnName("isActive");
            entityTypeBuilder.Property(e => e.isBusiness).HasColumnName("isBusiness");
            entityTypeBuilder.Property(e => e.CustomerId).HasColumnName("CustomerId");
            entityTypeBuilder.Property(e => e.PositionInTheCompany).HasColumnName("PositionInTheCompany");
            entityTypeBuilder.Property(e => e.Telephone).HasColumnName("Telephone");
            entityTypeBuilder.Property(e => e.Mail).HasColumnName("Mail");
            entityTypeBuilder.Property(e => e.Sex).HasColumnName("Sex");
            entityTypeBuilder.Property(e => e.Country).HasColumnName("Country");
            entityTypeBuilder.Property(e => e.State).HasColumnName("State");
            entityTypeBuilder.Property(e => e.City).HasColumnName("City");
            entityTypeBuilder.Property(e => e.Neighborhood).HasColumnName("Neighborhood");
            entityTypeBuilder.Property(e => e.Street).HasColumnName("Street");
            entityTypeBuilder.Property(e => e.ResidentialNumber).HasColumnName("ResidentialNumber");
            entityTypeBuilder.Property(e => e.ComplementAddress).HasColumnName("ComplementAddress");
            entityTypeBuilder.Property(e => e.CEP).HasColumnName("CEP");
            entityTypeBuilder.Property(e => e.Observation).HasColumnName("Observation");

            entityTypeBuilder.ToTable("Client");

        }
    }
}
