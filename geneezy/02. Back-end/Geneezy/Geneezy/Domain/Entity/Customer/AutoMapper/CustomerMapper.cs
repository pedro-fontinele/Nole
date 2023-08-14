using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.AutoMapper
{
    public class CustomerMapper : Profile
    {
        public CustomerMapper()
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();
        }
    }
}
