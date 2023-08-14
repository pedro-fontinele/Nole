using System.Threading.Tasks;
using System.Collections.Generic;
using Geneezy.Domain.Entity.Model;

namespace Geneezy.Persistence.Repository
{
    public interface ICategoryRepository
    {
        // Consult
        Task<List<Category>> GetAllCategories();
        Task<Category> GetCategoryById(uint id);
        Task<List<Category>> GetAllCategoriesByParentId(uint parentId);

        // Action
        Task InsertCategory(Category category);
        Task UpdateCategory(Category category);
        void DeleteCategory(Category category);
        Task SaveChangesAsync();
    }
}
