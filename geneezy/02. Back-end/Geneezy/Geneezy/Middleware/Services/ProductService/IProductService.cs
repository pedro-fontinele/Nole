using Geneezy.Domain.Entity.Dto;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Geneezy.Middleware.Services
{
    public interface IProductService
    {
        // Consult
        Task<List<ProductDto>> GetAllProducts();
        Task<ProductDto> GetProductById(uint id);

        // Action
        Task<ProductDto> InsertProduct(ProductDto productDto);
        Task<ProductDto> UpdateProduct(uint id, ProductDto productDto);
        Task DeleteProduct(uint id);
    }
}
