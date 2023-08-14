using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.AutoMapper
{
    public class SupplierMapper : Profile
    {
        public SupplierMapper()
        {
            CreateMap<Supplier, SupplierDto>().ReverseMap();
        }
    }
}