using System.Collections.Generic;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Persistence.Repository
{
    public interface IPersonRepository
    {
        // Consult
        Task<Person> GetPersonById(uint id);
        Task<List<Person>> GetAllPersonByIdSupplier(uint id);

        // Action
        Task InsertPerson(Person person);
        Task UpdatePerson(Person person);
        Task DeletePerson(Person person);
    }
}
