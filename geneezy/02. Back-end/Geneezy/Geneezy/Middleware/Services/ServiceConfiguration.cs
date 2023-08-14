using Microsoft.Extensions.DependencyInjection;

namespace Geneezy.Middleware.Services
{
    public static class ServiceConfiguration
    {
        public static void AddServiceConfiguration(this IServiceCollection service)
        {
            service.AddScoped<IProductService, ProductService>();
            service.AddScoped<IClientService, ClientService>();
            service.AddScoped<ISupplierService, SupplierService>();
            service.AddScoped<IPersonService, PersonService>();
            service.AddScoped<ICategoryService, CategoryService>();
        }
    }
}
