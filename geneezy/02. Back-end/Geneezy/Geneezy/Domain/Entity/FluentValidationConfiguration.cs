using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using FluentValidation.AspNetCore;
using Geneezy.Domain.Entity.Validator;
using Microsoft.Extensions.DependencyInjection;

namespace Geneezy.Domain.Entity
{
    public static class FluentValidationConfiguration
    {
        public static void AddFluentValidationConfiguration (this IServiceCollection services)
        {
            services.AddFluentValidationAutoValidation();
            services.AddScoped<IValidator<ProductDto>, ProductValidator>();
            services.AddScoped<IValidator<ClientDto>, ClientValidator>();
            services.AddScoped<IValidator<CustomerDto>, CustomerValidator>();
            services.AddScoped<IValidator<SupplierDto>, SupplierValidator>();
            services.AddScoped<IValidator<PersonDto>, PersonValidator>();
            services.AddScoped<IValidator<CategoryDto>, CategoryValidator>();
        }
    }
}
