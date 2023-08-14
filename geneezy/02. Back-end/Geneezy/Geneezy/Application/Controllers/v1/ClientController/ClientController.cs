using Geneezy.Middleware.Services;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Geneezy.Domain.Entity.Dto;

namespace Geneezy.Application.Controllers.v1
{
    [ApiController]
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class ClientController : ControllerBase
    {
        private readonly IClientService _iclientService;

        public ClientController(IClientService iclientService)
        {
            _iclientService = iclientService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var client = await _iclientService.GetAllClients();
            return Ok(client);
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> Get([FromRoute] uint id)
        {
            var client = await _iclientService.GetClientById(id);
            return Ok(client);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ClientDto clientDto)
        {
            var client = await _iclientService.InsertClient(clientDto);
            return Ok(client);
        }

        [HttpPut("id/{id}")]
        public async Task<IActionResult> Put ([FromRoute] uint id, [FromBody] ClientDto clientDto)
        {
            var client = await _iclientService.UpdateClient(id, clientDto);
            return Ok(client);
        }

        [HttpDelete("id/{id}")]
        public async Task Delete([FromRoute] uint id)
        {
            await _iclientService.DeleteClient(id);
        }
    }
}
