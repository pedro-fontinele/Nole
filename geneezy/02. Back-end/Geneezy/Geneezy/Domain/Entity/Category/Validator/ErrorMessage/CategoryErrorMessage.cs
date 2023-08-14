namespace Geneezy.Domain.Entity.Validator.ErrorMessage
{
    public class CategoryErrorMessage
    {
        // Fields
        public static string NameMustBeInformed = "O nome da categoria deve ser informado.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "O campo não pode ser nulo.";
    }
}
