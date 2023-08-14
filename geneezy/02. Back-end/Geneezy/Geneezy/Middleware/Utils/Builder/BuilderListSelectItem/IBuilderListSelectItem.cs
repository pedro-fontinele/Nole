using System.Collections.Generic;
using Geneezy.Common.Helpers.Class;

namespace Geneezy.Middleware.Utils.Builder
{
    public interface IBuilderListSelectItem<T>
    {
        List<SelectItemStructure<T>> BuilderHierarchy(List<T> hierarchy);
    }
}
