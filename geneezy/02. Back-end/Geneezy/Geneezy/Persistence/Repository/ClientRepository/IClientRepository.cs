using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;

namespace Geneezy.Persistence.Repository
{
    public interface IClientRepository
    {
        // Consult
        Task<List<Client>> GetAllClients();
        Task<Client> GetClientById(uint id);

        // Action
        Task InsertClient(Client client);
        Task UpdateClient(Client client);
        Task DeleteClient(Client client);
    }
}
