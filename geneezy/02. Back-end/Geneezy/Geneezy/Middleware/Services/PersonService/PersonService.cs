using AutoMapper;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;
using Geneezy.Persistence.Repository;
using System.Collections.Generic;

namespace Geneezy.Middleware.Services
{
    public class PersonService : IPersonService
    {
        private readonly IMapper _imapper;
        private readonly IPersonRepository _ipersonRepository;

        public PersonService(IMapper imapper, IPersonRepository ipersonRepository)
        {
            _imapper = imapper;
            _ipersonRepository = ipersonRepository;
        }

        public async Task<PersonDto> GetPersonById(uint id)
        {
            var person = await _ipersonRepository.GetPersonById(id);
            return _imapper.Map<PersonDto>(person);
        }

        public async Task<List<PersonDto>> GetAllPersonByIdSupplier(uint id)
        {
            var person = await _ipersonRepository.GetAllPersonByIdSupplier(id);
            return _imapper.Map<List<PersonDto>>(person);
        }

        public async Task<PersonDto> InsertPerson(PersonDto personDto)
        {
            if (personDto == null)
            {
                return null;
            }

            var person = _imapper.Map<Person>(personDto);
            await _ipersonRepository.InsertPerson(person);
            return _imapper.Map<PersonDto>(person);
        }

        public async Task<PersonDto> UpdatePerson(uint id, PersonDto personDto)
        {
            if (personDto == null)
            {
                return null;
            }

            var person = await _ipersonRepository.GetPersonById(id);
            if (person == null)
            {
                return null;
            }

            person = _imapper.Map<Person>(personDto);
            await _ipersonRepository.UpdatePerson(person);
            return _imapper.Map<PersonDto>(person);
        }

        public async Task DeletePerson(uint id)
        {
            var person = await _ipersonRepository.GetPersonById(id);
            if (person != null)
            {
                await _ipersonRepository.DeletePerson(person);
            }
        }
    }
}
