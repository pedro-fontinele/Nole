namespace Geneezy.Domain.Entity.Validator.ErrorMessage
{
    public static class ProductErrorMessage
    {
        // Fields
        public static string NameMustBeInformed = "O nome do produto deve ser informado.";
        public static string DescriptionMustBeInformed = "A descrição do produto deve ser informada.";
        public static string BrandMustBeInformed = "A marca do produto deve ser informada.";
        public static string SupplierMustBeInformed = "O fornecedor do produto deve ser informada.";
        public static string SkuMustBeInformed = "A embalagem do produto deve ser informada.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "O campo não pode ser nulo.";
    }
}
