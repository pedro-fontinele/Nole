namespace Geneezy.Common.Helpers.Class
{
    public static class CategoryMessage
    {
        public static string CategoryNotBeDeleted(string categoryName)
        {
            return $"A categoria {categoryName} não pode ser excluída pois ja está vinculada a um produto.";
        }
    }
}
