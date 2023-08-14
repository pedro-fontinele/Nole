using Geneezy.Middleware.Services;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Geneezy.Application.Controllers.v1
{
    [ApiController]
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var product = await _productService.GetAllProducts();
            return Ok(product);
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> Get([FromRoute] uint id)
        {
            var product = await _productService.GetProductById(id);
            return Ok(product);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ProductDto productDto)
        {
            var product = await _productService.InsertProduct(productDto);
            return Ok(product);
        }

        [HttpPut("id/{id}")]
        public async Task<IActionResult> Put([FromRoute] uint id, [FromBody] ProductDto productDto)
        {
            var product = await _productService.UpdateProduct(id, productDto);
            return Ok(product);
        }

        [HttpDelete("id/{id}")]
        public async Task Delete([FromRoute] uint id)
        {
            await _productService.DeleteProduct(id);
        }
    }
}
