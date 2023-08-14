using Geneezy.Domain.Entity.Model;
using Geneezy.Data.Context.Structure;
using Microsoft.EntityFrameworkCore;

namespace Geneezy.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Product> Product { get; set; }
        public DbSet<Client> Client { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Supplier> Supplier { get; set; }
        public DbSet<Person> Person { get; set; }
        public DbSet<Category> Category { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductStructure());
            modelBuilder.ApplyConfiguration(new ClientStructure());
            modelBuilder.ApplyConfiguration(new CustomerStructure());
            modelBuilder.ApplyConfiguration(new SupplierStructure());
            modelBuilder.ApplyConfiguration(new PersonStructure());     
            modelBuilder.ApplyConfiguration(new CategoryStructure());     
        }
    }
}
