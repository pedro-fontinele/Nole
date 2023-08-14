using Geneezy.Middleware.Services;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System;

namespace Geneezy.Application.Controllers.v1
{
    [ApiController]
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _icategoryService;

        public CategoryController(ICategoryService icategoryService)
        {
            _icategoryService = icategoryService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var category = await _icategoryService.GetAllCategories();
            return Ok(category);
        }

        [HttpGet("list")]
        public async Task<IActionResult> GetAll()
        {
            var category = await _icategoryService.GetAllCategoriesInList();
            return Ok(category);
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> Get([FromRoute] uint id)
        {
            var category = await _icategoryService.GetCategoryById(id);
            return Ok(category);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CategoryDto categoryDto)
        {
            var category = await _icategoryService.InsertCategory(categoryDto);
            return Ok(category);
        }

        [HttpPut("id/{id}")]
        public async Task<IActionResult> Put([FromRoute] uint id, [FromBody] CategoryDto categoryDto)
        {
            var category = await _icategoryService.UpdateCategory(id, categoryDto);
            return Ok(category);
        }

        [HttpDelete("id/{id}")]
        public async Task<IActionResult> Delete([FromRoute] uint id)
        {
            try
            {
                var response = await _icategoryService.DeleteCategory(id);

                switch (response.StatusCode)
                {
                    case (int)HttpStatusCode.OK:
                        return Ok(response);
                    case (int)HttpStatusCode.BadRequest:
                        return BadRequest(response);
                    case (int)HttpStatusCode.NotFound:
                        return NotFound(response);
                    default:
                        return StatusCode((int)response.StatusCode);
                }
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "Ocorreu um erro ao processar a solicitação de exclusão: " + ex.Message);
            }
        }
    }
}
