using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using System.Collections.Generic;
using Geneezy.Common.Helpers.Class;
using System.Net.Http;

namespace Geneezy.Middleware.Services
{
    public interface ICategoryService
    {
        // Consult
        Task<List<TreeTableStructure<CategoryDto>>> GetAllCategories();
        Task<List<SelectItemStructure<CategoryDto>>> GetAllCategoriesInList();
        Task<CategoryDto> GetCategoryById(uint id);

        // Action
        Task<CategoryDto> InsertCategory(CategoryDto categoryDto);
        Task<CategoryDto> UpdateCategory(uint id, CategoryDto categoryDto);
        //Task<HttpResponseMessage> DeleteCategory(uint id);
        Task<ApiResponse<CategoryDto>> DeleteCategory(uint id);
    }
}
