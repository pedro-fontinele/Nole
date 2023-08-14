using AutoMapper;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;
using Geneezy.Persistence.Repository;

namespace Geneezy.Middleware.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _imapper;
        private readonly IProductRepository _productRepository;

        public ProductService(IMapper imapper, IProductRepository productRepository)
        {
            _imapper = imapper;
            _productRepository = productRepository;
        }

        public async Task<List<ProductDto>> GetAllProducts()
        {
            var product = await _productRepository.GetAllProducts();
            return _imapper.Map<List<ProductDto>>(product);
        }

        public async Task<ProductDto> GetProductById(uint id)
        {
            var product = await _productRepository.GetProductById(id);
            return _imapper.Map<ProductDto>(product);
        }

        public async Task<ProductDto> InsertProduct(ProductDto productDto)
        {
            if (productDto == null)
            {
                return null;
            }

            var product = _imapper.Map<Product>(productDto);
            await _productRepository.InsertProduct(product);
            return _imapper.Map<ProductDto>(product);
        }

        public async Task<ProductDto> UpdateProduct(uint id, ProductDto productDto)
        {
            if (productDto == null)
            {
                return null;
            }

            var product = await _productRepository.GetProductById(id);
            if (product == null)
            {
                return null;
            }

            product = _imapper.Map<Product>(productDto);
            await _productRepository.UpdateProduct(product);
            return _imapper.Map<ProductDto>(product);
        }

        public async Task DeleteProduct(uint id)
        {
            var product = await _productRepository.GetProductById(id);
            if (product != null)
            {
               await _productRepository.DeleteProduct(product);
            }
        }
    }
}
