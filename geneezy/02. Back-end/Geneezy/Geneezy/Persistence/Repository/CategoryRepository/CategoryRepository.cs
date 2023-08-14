using System.Linq;
using Geneezy.Data.Context;
using System.Threading.Tasks;
using System.Collections.Generic;
using Geneezy.Domain.Entity.Model;
using Microsoft.EntityFrameworkCore;

namespace Geneezy.Persistence.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DataContext _dataContext;

        public CategoryRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Category>> GetAllCategories()
        {
            IQueryable<Category> query = _dataContext.Category;

            query = query.AsNoTracking()
                         .OrderBy(e => e.Name);

            return await query.ToListAsync();
        }

        public async Task<Category> GetCategoryById(uint id)
        {
            IQueryable<Category> query = _dataContext.Category;

            query = query.AsNoTracking()
                         .Where(e => e.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<List<Category>> GetAllCategoriesByParentId(uint parentId)
        {
            IQueryable<Category> query = _dataContext.Category;

            query = query.AsNoTracking()
                         .Where(e => e.ParentCategoryId == parentId);

            return await query.ToListAsync();
        }

        public async Task InsertCategory(Category category)
        {
            _dataContext.Category.Add(category);
            await _dataContext.SaveChangesAsync();
        }

        public async Task UpdateCategory(Category category)
        {
            _dataContext.Category.Update(category);
            await _dataContext.SaveChangesAsync();
        }

        public void DeleteCategory(Category category)
        {
            _dataContext.Category.Remove(category);
        }

        public async Task SaveChangesAsync()
        {
            await _dataContext.SaveChangesAsync();
        }
    }
}
