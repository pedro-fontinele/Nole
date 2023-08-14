using System.Linq;
using Geneezy.Data.Context;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Geneezy.Persistence.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly DataContext _dataContext;

        public ClientRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Client>> GetAllClients()
        {
            IQueryable<Client> query = _dataContext.Client;

            query = query.AsNoTracking()
                         .Include(e => e.Customer)
                         .OrderByDescending(e => e.Id);

            return await query.ToListAsync();
        }

        public async Task<Client> GetClientById(uint id)
        {
            IQueryable<Client> query = _dataContext.Client;

            query = query.AsNoTracking()
                         .Where(e => e.Id == id)
                         .Include(e => e.Customer);

            return await query.FirstOrDefaultAsync();
        }

        public async Task InsertClient(Client client)
        {
            _dataContext.Client.Add(client);
            await _dataContext.SaveChangesAsync();
        }

        public async Task UpdateClient(Client client)
        {
            _dataContext.Client.Update(client);
            await _dataContext.SaveChangesAsync();
        }

        public async Task DeleteClient(Client client)
        {
            _dataContext.Client.Remove(client);
            await _dataContext.SaveChangesAsync();
        }
    }
}
