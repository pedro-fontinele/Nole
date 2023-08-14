using Geneezy.Middleware.Services;
using Geneezy.Domain.Entity.Dto;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Geneezy.Application.Controllers.v1
{
    [ApiController]
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class SupplierController : ControllerBase
    {
        private readonly ISupplierService _isupplierService;

        public SupplierController(ISupplierService isupplierService)
        {
            _isupplierService = isupplierService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var supplier = await _isupplierService.GetAllSuppliers();
            return Ok(supplier);
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> Get([FromRoute] uint id)
        {
            var supplier = await _isupplierService.GetSupplierById(id);
            return Ok(supplier);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] SupplierDto supplierDto)
        {
            var supplier = await _isupplierService.InsertSupplier(supplierDto);
            return Ok(supplier);
        }

        [HttpPut("id/{id}")]
        public async Task<IActionResult> Put([FromRoute] uint id, [FromBody] SupplierDto supplierDto)
        {
            var supplier = await _isupplierService.UpdateSupplier(id, supplierDto);
            return Ok(supplier);
        }

        [HttpDelete("id/{id}")]
        public async Task Delete([FromRoute] uint id)
        {
            await _isupplierService.DeleteSupplier(id);
        }
    }
}
