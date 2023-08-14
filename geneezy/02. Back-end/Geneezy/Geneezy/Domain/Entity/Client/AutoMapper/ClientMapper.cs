using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.AutoMapper
{
    public class ClientMapper : Profile
    {
        public ClientMapper()
        {
            CreateMap<Client, ClientDto>().ReverseMap();
        }
    }
}
