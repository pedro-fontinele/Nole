using Geneezy.Middleware.Services;
using Geneezy.Domain.Entity.Dto;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Geneezy.Application.Controllers.v1
{
    [ApiController]
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _ipersonService;

        public PersonController(IPersonService ipersonService)
        {
            _ipersonService = ipersonService;
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> Get([FromRoute] uint id)
        {
            var person = await _ipersonService.GetPersonById(id);
            return Ok(person);
        }

        [HttpGet("supplier/{id}")]
        public async Task<IActionResult> GetAllPersonByIdSupplier([FromRoute] uint id)
        {
            var person = await _ipersonService.GetAllPersonByIdSupplier(id);
            return Ok(person);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PersonDto personDto)
        {
            var person = await _ipersonService.InsertPerson(personDto);
            return Ok(person);
        }

        [HttpPut("id/{id}")]
        public async Task<IActionResult> Put([FromRoute] uint id, [FromBody] PersonDto personDto)
        {
            var person = await _ipersonService.UpdatePerson(id, personDto);
            return Ok(person);
        }

        [HttpDelete("id/{id}")]
        public async Task Delete([FromRoute] uint id)
        {
            await _ipersonService.DeletePerson(id);
        }
    }
}
