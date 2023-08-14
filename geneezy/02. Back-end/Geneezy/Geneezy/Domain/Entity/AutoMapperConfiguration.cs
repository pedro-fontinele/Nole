using AutoMapper;
using Geneezy.Domain.Entity.AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Geneezy.Domain.Entity
{
    public static class AutoMapperConfiguration
    {
        public static void AddAutoMapperConfiguration (this IServiceCollection services)
        {
            var config = new MapperConfiguration(add =>
            {
                add.AddProfile<ProductMapper>();
                add.AddProfile<ClientMapper>();
                add.AddProfile<CustomerMapper>();
                add.AddProfile<SupplierMapper>();
                add.AddProfile<PersonMapper>();
                add.AddProfile<CategoryMapper>();
            });
            IMapper mapper = config.CreateMapper();
            services.AddSingleton(mapper);
        }
    }
}
