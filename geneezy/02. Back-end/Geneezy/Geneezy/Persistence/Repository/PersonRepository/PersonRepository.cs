using System.Linq;
using Geneezy.Data.Context;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Geneezy.Persistence.Repository
{
    public class PersonRepository : IPersonRepository
    {
        private readonly DataContext _dataContext;

        public PersonRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<Person> GetPersonById(uint id)
        {
            IQueryable<Person> query = _dataContext.Person;

            query = query.AsNoTracking()
                         .Where(e => e.Id == id)
                         .OrderByDescending(e => e.Id);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<List<Person>> GetAllPersonByIdSupplier(uint id)
        {
            IQueryable<Person> query = _dataContext.Person;

            query = query.AsNoTracking()
                         .Where(e => e.SupplierId == id)
                         .OrderByDescending(e => e.Id);

            return await query.ToListAsync();
        }

        public async Task InsertPerson(Person person)
        {
            _dataContext.Person.Add(person);
            await _dataContext.SaveChangesAsync();
        }

        public async Task UpdatePerson(Person person)
        {
            _dataContext.Person.Update(person);
            await _dataContext.SaveChangesAsync();
        }

        public async Task DeletePerson(Person person)
        {
            _dataContext.Person.Remove(person);
            await _dataContext.SaveChangesAsync();
        }
    }
}
