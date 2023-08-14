using AutoMapper;
using Geneezy.Common.Helpers.Class;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Domain.Entity.AutoMapper
{
    public class CategoryMapper : Profile
    {
        public CategoryMapper()
        {
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<TreeTableStructure<Category>, TreeTableStructure<CategoryDto>>().ReverseMap();
            CreateMap<SelectItemStructure<Category>, SelectItemStructure<CategoryDto>>().ReverseMap();
        }
    }
}
