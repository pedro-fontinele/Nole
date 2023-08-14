namespace Geneezy.Domain.Entity.Validator.ErrorMessage
{
    public static class PersonErrorMessage
    {
        // Fields
        public static string NameMustBeInformed = "O nome da pessoa deve ser informado.";
        public static string LastNameMustBeInformed = "O sobrenome da pessoa deve ser informado.";
        public static string CPFMustBeInformed = "O CPF da pessoa deve ser informado.";
        public static string TelephoneMustBeInformed = "O telefone da pessoa deve ser informado.";
        public static string MailMustBeInformed = "O email da pessoa deve ser informado.";
        public static string SexMustBeInformed = "O sexo da pessoa deve ser informado.";

        // Exceeded characters
        public static string ExceededNumberOfCharacters = "Número de caracteres excedido, máximo suportado {0}.";

        // Field null
        public static string FieldCannotBeNull = "O campo não pode ser nulo.";
    }
}
