using Geneezy.Common.Helpers.Class;
using Geneezy.Common.Helpers.Inteface;
using System.Collections.Generic;

namespace Geneezy.Middleware.Utils.Builder
{
    public class BuilderHierarchyTreeTable<T> : IBuilderHierarchyTreeTable<T> where T : IHasId<T>
    {
        public List<TreeTableStructure<T>> BuilderHierarchy(List<T> hierarchy)
        {
            Dictionary<uint, TreeTableStructure<T>> hierarchyMap = new Dictionary<uint, TreeTableStructure<T>>();

            List<TreeTableStructure<T>> hierarchical = new List<TreeTableStructure<T>>();

            foreach (T model in hierarchy)
            {
                hierarchyMap[model.Id] = new TreeTableStructure<T>
                {
                    Data = model,
                    Children = new List<TreeTableStructure<T>>()
                };
            }

            foreach (T model in hierarchy)
            {
                if (model.ParentCategoryId == 0)
                {
                    TreeTableStructure<T> node = hierarchyMap[model.Id];
                    hierarchical.Add(node);
                }
                else
                {
                    if (hierarchyMap.TryGetValue(model.ParentCategoryId, out TreeTableStructure<T> parentNode))
                    {
                        TreeTableStructure<T> node = hierarchyMap[model.Id];
                        parentNode.Children.Add(node);
                    }
                }
            }

            return hierarchical;
        }
    }
}
