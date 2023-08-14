using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Geneezy.Data.Context.Structure
{
    public class PersonStructure : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(e => e.Id);

            entityTypeBuilder.Property(e => e.Id).HasColumnName("Id").IsRequired();
            entityTypeBuilder.Property(e => e.Name).HasColumnName("Name");
            entityTypeBuilder.Property(e => e.LastName).HasColumnName("LastName");
            entityTypeBuilder.Property(e => e.CPF).HasColumnName("CPF");
            entityTypeBuilder.Property(e => e.DateOfBirth).HasColumnName("DateOfBirth");
            entityTypeBuilder.Property(e => e.DateOfRegister).HasColumnName("DateOfRegister");
            entityTypeBuilder.Property(e => e.isActive).HasColumnName("isActive");
            entityTypeBuilder.Property(e => e.Telephone).HasColumnName("Telephone");
            entityTypeBuilder.Property(e => e.Mail).HasColumnName("Mail");
            entityTypeBuilder.Property(e => e.Sex).HasColumnName("Sex");
            entityTypeBuilder.Property(e => e.Observation).HasColumnName("Observation");
            entityTypeBuilder.Property(e => e.SupplierId).HasColumnName("SupplierId");

            entityTypeBuilder.ToTable("Person");
        }
    }
}
