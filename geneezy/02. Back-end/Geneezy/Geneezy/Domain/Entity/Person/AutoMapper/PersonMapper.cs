using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.AutoMapper
{
    public class PersonMapper : Profile
    {
        public PersonMapper()
        {
            CreateMap<Person, PersonDto>().ReverseMap();
        }
    }
}
