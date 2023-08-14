namespace Geneezy.Domain.Entity.Validator.ErrorMessage
{
    public static class SupplierErrorMessage
    {
        // Fields
        public static string CompanyNameMustBeInformed = "O nome fantasia do fornecedor deve ser informado.";
        public static string CorporateSocialNameMustBeInformed = "A razão social do fornecedor deve ser informado.";
        public static string CNPJMustBeInformed = "O CNPJ do fornecedor deve ser informado.";
        public static string TelephoneMustBeInformed = "O telefone do fornecedor deve ser informado.";
        public static string MailMustBeInformed = "O email do fornecedor deve ser informado.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "O campo não pode ser nulo.";
    }
}
