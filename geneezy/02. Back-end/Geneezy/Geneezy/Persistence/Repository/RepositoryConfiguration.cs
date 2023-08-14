using Microsoft.Extensions.DependencyInjection;

namespace Geneezy.Persistence.Repository
{
    public static class RepositoryConfiguration
    {
        public static void AddRepositoryConfiguration(this IServiceCollection servicea)
        {
            servicea.AddTransient<IProductRepository, ProductRepository>();
            servicea.AddTransient<IClientRepository, ClientRepository>();
            servicea.AddTransient<ISupplierRepository, SupplierRepository>();
            servicea.AddTransient<IPersonRepository, PersonRepository>();
            servicea.AddTransient<ICategoryRepository, CategoryRepository>();
        }
    }
}
