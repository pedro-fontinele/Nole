using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;
using Geneezy.Persistence.Repository;

namespace Geneezy.Middleware.Services
{
    public class ClientService : IClientService
    {
        private readonly IMapper _imapper;
        private readonly IClientRepository _iclientRepository;

        public ClientService(IMapper imapper, IClientRepository iclientRepository)
        {
            _imapper = imapper;
            _iclientRepository = iclientRepository;
        }

        public async Task<List<ClientDto>> GetAllClients()
        {
            var returnedClient = await _iclientRepository.GetAllClients();
            return _imapper.Map<List<ClientDto>>(returnedClient);
        }

        public async Task<ClientDto> GetClientById(uint id)
        {
            var returnedClient = await _iclientRepository.GetClientById(id);
            return _imapper.Map<ClientDto>(returnedClient);
        }

        public async Task<ClientDto> InsertClient(ClientDto clientDto)
        {
            if (clientDto == null)
            {
                return null;
            }

            var client = _imapper.Map<Client>(clientDto);
            await _iclientRepository.InsertClient(client);
            return _imapper.Map<ClientDto>(client);
        }

        public async Task<ClientDto> UpdateClient(uint id, ClientDto clientDto)
        {
            if (clientDto == null)
            {
                return null;
            }

            var client = await _iclientRepository.GetClientById(id);
            if (client == null)
            {
                return null;
            }

            client = _imapper.Map<Client>(clientDto);
            await _iclientRepository.UpdateClient(client);
            return _imapper.Map<ClientDto>(client);
        }

        public async Task DeleteClient(uint id)
        {
            var client = await _iclientRepository.GetClientById(id);
            if(client != null)
            {
                await _iclientRepository.DeleteClient(client);
            }
        }
    }
}
