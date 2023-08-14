using AutoMapper;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.AutoMapper
{
    public class ProductMapper : Profile
    {
        public ProductMapper()
        {
            CreateMap<Product, ProductDto>().ReverseMap();
        }
    }
}
