using AutoMapper;
using System.Threading.Tasks;
using Geneezy.Domain.Entity.Dto;
using System.Collections.Generic;
using Geneezy.Domain.Entity.Model;
using Geneezy.Persistence.Repository;
using Geneezy.Common.Helpers.Class;
using Geneezy.Middleware.Utils.Builder;
using System.Net;
using System.Linq;

namespace Geneezy.Middleware.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IMapper _imapper;
        private readonly ICategoryRepository _icategoryRepository;
        private readonly IProductRepository _iproductRepository;
        private readonly IBuilderHierarchyTreeTable<Category> _ibuilderHierarchyTreeTable;
        private readonly IBuilderListSelectItem<Category> _ibuilderHierarchySelectItem;

        public CategoryService(IMapper imapper,
                               ICategoryRepository icategoryRepository,
                               IBuilderHierarchyTreeTable<Category> ibuilderHierarchyTreeTable,
                               IBuilderListSelectItem<Category> ibuilderHierarchySelectItem,
                               IProductRepository productRepository)
        {
            _imapper = imapper;
            _icategoryRepository = icategoryRepository;
            _ibuilderHierarchyTreeTable = ibuilderHierarchyTreeTable;
            _ibuilderHierarchySelectItem = ibuilderHierarchySelectItem;
            _iproductRepository = productRepository;
        }

        public async Task<List<TreeTableStructure<CategoryDto>>> GetAllCategories()
        {
            var returnedCategory = await _icategoryRepository.GetAllCategories();
            var builderHierarchy = _ibuilderHierarchyTreeTable.BuilderHierarchy(returnedCategory);
            return _imapper.Map<List<TreeTableStructure<CategoryDto>>>(builderHierarchy);
        }

        public async Task<CategoryDto> GetCategoryById(uint id)
        {
            var returnedCategoryById = await _icategoryRepository.GetCategoryById(id);
            return _imapper.Map<CategoryDto>(returnedCategoryById);
        }

        public async Task<List<SelectItemStructure<CategoryDto>>> GetAllCategoriesInList()
        {
            var returnedCategory = await _icategoryRepository.GetAllCategories();
            var builderHierarchy = _ibuilderHierarchySelectItem.BuilderHierarchy(returnedCategory);
            return _imapper.Map<List<SelectItemStructure<CategoryDto>>>(builderHierarchy);
        }

        public async Task<CategoryDto> InsertCategory(CategoryDto categoryDto)
        {
            if (categoryDto == null)
            {
                return null;
            }

            var category = _imapper.Map<Category>(categoryDto);
            await _icategoryRepository.InsertCategory(category);
            return _imapper.Map<CategoryDto>(category);
        }

        public async Task<CategoryDto> UpdateCategory(uint id, CategoryDto categoryDto)
        {
            if (categoryDto == null)
            {
                return null;
            }

            var category = await _icategoryRepository.GetCategoryById(id);
            if (category == null)
            {
                return null;
            }

            category = _imapper.Map<Category>(categoryDto);
            await _icategoryRepository.UpdateCategory(category);
            return _imapper.Map<CategoryDto>(category);
        }

        public async Task<ApiResponse<CategoryDto>> DeleteCategory(uint id)
        {
            var category = await _icategoryRepository.GetCategoryById(id);
            if (category == null)
            {
                return new ApiResponse<CategoryDto>((int)HttpStatusCode.NotFound, GlobalMessage.RegisterNotFound);
            }

            var allProducts = await _iproductRepository.GetAllProductsByCategoryId(id);
            if (allProducts.Count > 0)
            {
                string categoryNotBeDeleted = CategoryMessage.CategoryNotBeDeleted(category.Name);
                return new ApiResponse<CategoryDto>((int)HttpStatusCode.BadRequest, categoryNotBeDeleted);
            }

            var childCategories = new List<Category>();
            await CollectChildCategories(id, childCategories);

            foreach (var childCategory in childCategories)
            {
                var allProductChild = await _iproductRepository.GetAllProductsByCategoryId(childCategory.Id);
                if (allProductChild.Count > 0)
                {
                    string categoryNotBeDeleted = CategoryMessage.CategoryNotBeDeleted(childCategory.Name);
                    return new ApiResponse<CategoryDto>((int)HttpStatusCode.BadRequest, categoryNotBeDeleted);
                }

                _icategoryRepository.DeleteCategory(childCategory);
            }

            _icategoryRepository.DeleteCategory(category);

            await _icategoryRepository.SaveChangesAsync();

            return new ApiResponse<CategoryDto>((int)HttpStatusCode.OK, GlobalMessage.RegisterSuccessfullyDeleted);
        }

        private async Task CollectChildCategories(uint parentId, List<Category> childCategories)
        {
            var subCategories = await _icategoryRepository.GetAllCategoriesByParentId(parentId);
            if (subCategories != null && subCategories.Any())
            {
                childCategories.AddRange(subCategories);
                foreach (var subCategory in subCategories)
                {
                    await CollectChildCategories(subCategory.Id, childCategories);
                }
            }
        }

    }
}