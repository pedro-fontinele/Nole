using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Validator.ErrorMessage;

namespace Geneezy.Domain.Entity.Validator
{
    public class SupplierValidator : AbstractValidator<SupplierDto>
    {
        public SupplierValidator()
        {
            RuleFor(e => e.CompanyName).NotEmpty().WithMessage(SupplierErrorMessage.CompanyNameMustBeInformed)
                                       .NotNull().WithMessage(SupplierErrorMessage.FieldCannotBeNull)
                                       .MaximumLength(80).WithMessage(SupplierErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.CorporateSocialName).NotEmpty().WithMessage(SupplierErrorMessage.CorporateSocialNameMustBeInformed)
                                               .NotNull().WithMessage(SupplierErrorMessage.FieldCannotBeNull)
                                               .MaximumLength(80).WithMessage(SupplierErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.CNPJ).NotEmpty().WithMessage(SupplierErrorMessage.CNPJMustBeInformed)
                                .NotNull().WithMessage(SupplierErrorMessage.FieldCannotBeNull);

            RuleFor(e => e.Telephone).NotEmpty().WithMessage(SupplierErrorMessage.TelephoneMustBeInformed)
                                     .NotNull().WithMessage(SupplierErrorMessage.FieldCannotBeNull);

            RuleFor(e => e.Mail).NotEmpty().WithMessage(SupplierErrorMessage.MailMustBeInformed)
                                .NotNull().WithMessage(SupplierErrorMessage.FieldCannotBeNull)
                                .MaximumLength(60).WithMessage(SupplierErrorMessage.ExceededNumberOfCharacters);
        }
    }
}
