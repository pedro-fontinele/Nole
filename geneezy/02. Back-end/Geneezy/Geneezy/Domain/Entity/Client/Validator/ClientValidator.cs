using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Validator.ErrorMessage;

namespace Geneezy.Domain.Entity.Validator
{
    public class ClientValidator : AbstractValidator<ClientDto>
    {
        public ClientValidator()
        {
            RuleFor(e => e.Name).NotEmpty().WithMessage(ClientErrorMessage.NameMustBeInformed)
                                .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull)
                                .MaximumLength(50).WithMessage(ClientErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.LastName).NotEmpty().WithMessage(ClientErrorMessage.LastNameMustBeInformed)
                                    .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull)
                                    .MaximumLength(70).WithMessage(ClientErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.CPF).NotEmpty().WithMessage(ClientErrorMessage.CPFMustBeInformed)
                               .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull);

            RuleFor(e => e.Telephone).NotEmpty().WithMessage(ClientErrorMessage.TelephoneMustBeInformed)
                                     .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull);

            RuleFor(e => e.Mail).NotEmpty().WithMessage(ClientErrorMessage.MailMustBeInformed)
                                .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull)
                                .MaximumLength(60).WithMessage(ClientErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Sex).NotEmpty().WithMessage(ClientErrorMessage.SexMustBeInformed)
                               .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull);

            When(e => e.isBusiness, () =>
            {
                RuleFor(e => e.Customer.CompanyName).NotEmpty().WithMessage(CustomerErrorMessage.CompanyNameMustBeInformed)
                                    .NotNull().WithMessage(CustomerErrorMessage.FieldCannotBeNull)
                                    .MaximumLength(80).WithMessage(CustomerErrorMessage.ExceededNumberOfCharacters);

                RuleFor(e => e.Customer.CorporateSocialName).NotEmpty().WithMessage(CustomerErrorMessage.CorporateSocialNameMustBeInformed)
                                                            .NotNull().WithMessage(CustomerErrorMessage.FieldCannotBeNull)
                                                            .MaximumLength(80).WithMessage(CustomerErrorMessage.ExceededNumberOfCharacters);

                RuleFor(e => e.Customer.CNPJ).NotEmpty().WithMessage(CustomerErrorMessage.CNPJMustBeInformed)
                                            .NotNull().WithMessage(CustomerErrorMessage.FieldCannotBeNull);

                RuleFor(e => e.Customer.Telephone).NotEmpty().WithMessage(CustomerErrorMessage.TelephoneMustBeInformed)
                                                  .NotNull().WithMessage(CustomerErrorMessage.FieldCannotBeNull);

                RuleFor(e => e.Customer.Mail).NotEmpty().WithMessage(CustomerErrorMessage.MailMustBeInformed)
                                             .NotNull().WithMessage(CustomerErrorMessage.FieldCannotBeNull)
                                             .MaximumLength(60).WithMessage(CustomerErrorMessage.ExceededNumberOfCharacters);
            });
        }
    }
}
