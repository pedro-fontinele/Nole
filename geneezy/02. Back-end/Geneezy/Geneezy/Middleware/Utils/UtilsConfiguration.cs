using Geneezy.Domain.Entity.Model;
using Geneezy.Middleware.Utils.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Geneezy.Middleware.Utils
{
    public static class UtilsConfiguration
    {
        public static void AddUtilsConfiguration(this IServiceCollection service)
        {
            service.AddScoped(typeof(IBuilderHierarchyTreeTable<Category>), typeof(BuilderHierarchyTreeTable<Category>));
            service.AddScoped(typeof(IBuilderListSelectItem<Category>), typeof(BuilderListSelectItem<Category>));
        }
    }
}
