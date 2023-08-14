using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;

namespace Geneezy.Persistence.Repository
{
    public interface IProductRepository
    {
        // Consult
        Task<List<Product>> GetAllProducts();
        Task<Product> GetProductById(uint id);
        Task<List<Product>> GetAllProductsByCategoryId(uint categoryId);

        // Action
        Task InsertProduct(Product product);
        Task UpdateProduct(Product product);
        Task DeleteProduct(Product product);
    }
}
