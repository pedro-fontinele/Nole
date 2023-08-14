using Geneezy.Domain.Entity.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Geneezy.Middleware.Services
{
    public interface IPersonService
    {
        // Consult
        Task<PersonDto> GetPersonById(uint id);
        Task<List<PersonDto>> GetAllPersonByIdSupplier(uint id);

        // Action
        Task<PersonDto> InsertPerson(PersonDto personDto);
        Task<PersonDto> UpdatePerson(uint id, PersonDto personDto);
        Task DeletePerson(uint id);
    }
}
