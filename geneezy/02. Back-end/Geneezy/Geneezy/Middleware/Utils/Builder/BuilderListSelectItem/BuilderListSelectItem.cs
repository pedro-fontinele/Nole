using Geneezy.Common.Helpers.Inteface;
using Geneezy.Common.Helpers.Class;
using System.Collections.Generic;
using System.Linq;

namespace Geneezy.Middleware.Utils.Builder
{
    public class BuilderListSelectItem<T> : IBuilderListSelectItem<T> where T : IHasId<T>
    {
        public List<SelectItemStructure<T>> BuilderHierarchy(List<T> hierarchy)
        {
            Dictionary<uint, SelectItemStructure<T>> hierarchyMap = new Dictionary<uint, SelectItemStructure<T>>();

            List<SelectItemStructure<T>> hierarchical = new List<SelectItemStructure<T>>();

            foreach (T model in hierarchy)
            {
                hierarchyMap[model.Id] = new SelectItemStructure<T>
                {
                    Label = model.Name,
                    Value = model.Id
                };
            }

            foreach (T model in hierarchy)
            {
                SelectItemStructure<T> node = hierarchyMap[model.Id];
                hierarchical.Add(node);
            }

            return hierarchical.OrderBy(e => e.Label).ToList();
        }
    }
}