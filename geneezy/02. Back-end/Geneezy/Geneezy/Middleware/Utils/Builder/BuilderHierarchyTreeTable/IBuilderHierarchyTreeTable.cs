using Geneezy.Common.Helpers.Class;
using System.Collections.Generic;

namespace Geneezy.Middleware.Utils.Builder
{
    public interface IBuilderHierarchyTreeTable<T>
    {
        List<TreeTableStructure<T>> BuilderHierarchy(List<T> hierarchy);
    }
}
