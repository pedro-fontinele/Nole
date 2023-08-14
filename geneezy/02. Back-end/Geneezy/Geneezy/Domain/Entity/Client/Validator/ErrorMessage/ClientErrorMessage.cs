namespace Geneezy.Domain.Entity.Validator.ErrorMessage
{
    public static class ClientErrorMessage
    {
        // Fields
        public static string NameMustBeInformed = "O nome do cliente deve ser informado.";
        public static string LastNameMustBeInformed = "O sobrenome do cliente deve ser informado.";
        public static string CPFMustBeInformed = "O CPF do cliente deve ser informado.";
        public static string TelephoneMustBeInformed = "O telefone do cliente deve ser informado.";
        public static string MailMustBeInformed = "O email do cliente deve ser informado.";
        public static string SexMustBeInformed = "O sexo do cliente deve ser informado.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "O campo não pode ser nulo.";
    }
}
