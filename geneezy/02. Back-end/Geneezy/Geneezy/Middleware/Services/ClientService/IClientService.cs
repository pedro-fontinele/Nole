using Geneezy.Domain.Entity.Dto;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Geneezy.Middleware.Services
{
    public interface IClientService
    {
        // Consult
        Task<List<ClientDto>> GetAllClients();
        Task<ClientDto> GetClientById(uint id);

        // Action
        Task<ClientDto> InsertClient(ClientDto clientDto);
        Task<ClientDto> UpdateClient(uint id, ClientDto clientDto);
        Task DeleteClient(uint id);
    }
}
