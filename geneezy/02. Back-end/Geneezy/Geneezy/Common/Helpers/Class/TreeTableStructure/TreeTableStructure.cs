using System.Collections.Generic;

namespace Geneezy.Common.Helpers.Class
{
    public class TreeTableStructure<T>
    {
        #region Resume Class
        // Class created to use data in a tree model, following the component tree patterns PrimeNG
        // TreeTable - https://primeng.org/treetable
        #endregion
        public T Data { get; set; }
        public List<TreeTableStructure<T>> Children { get; set; }
    }
}
