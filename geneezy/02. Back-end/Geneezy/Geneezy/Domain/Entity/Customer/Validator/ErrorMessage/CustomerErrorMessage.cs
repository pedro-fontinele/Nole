namespace Geneezy.Domain.Entity.Validator.ErrorMessage
{
    public static class CustomerErrorMessage
    {

        // Fields
        public static string CompanyNameMustBeInformed = "O nome da empresa deve ser informado.";
        public static string CorporateSocialNameMustBeInformed = "A razão social deve ser informado.";
        public static string CNPJMustBeInformed = "O CNPJ da empresa deve ser informado.";
        public static string TelephoneMustBeInformed = "O telefone da empresa deve ser informado.";
        public static string MailMustBeInformed = "O email da empresa deve ser informado.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "O campo não pode ser nulo.";
    }
}
