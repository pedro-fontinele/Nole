using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Validator.ErrorMessage;

namespace Geneezy.Domain.Entity.Validator
{
    public class PersonValidator : AbstractValidator<PersonDto>
    {
        public PersonValidator()
        {
            RuleFor(e => e.Name).NotEmpty().WithMessage(PersonErrorMessage.NameMustBeInformed)
                                .NotNull().WithMessage(PersonErrorMessage.FieldCannotBeNull)
                                .MaximumLength(50).WithMessage(PersonErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.LastName).NotEmpty().WithMessage(PersonErrorMessage.LastNameMustBeInformed)
                                    .NotNull().WithMessage(PersonErrorMessage.FieldCannotBeNull)
                                    .MaximumLength(70).WithMessage(PersonErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.CPF).NotEmpty().WithMessage(PersonErrorMessage.CPFMustBeInformed)
                               .NotNull().WithMessage(PersonErrorMessage.FieldCannotBeNull);

            RuleFor(e => e.Telephone).NotEmpty().WithMessage(PersonErrorMessage.TelephoneMustBeInformed)
                                     .NotNull().WithMessage(PersonErrorMessage.FieldCannotBeNull);

            RuleFor(e => e.Mail).NotEmpty().WithMessage(PersonErrorMessage.MailMustBeInformed)
                                .NotNull().WithMessage(PersonErrorMessage.FieldCannotBeNull)
                                .MaximumLength(60).WithMessage(PersonErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Sex).NotEmpty().WithMessage(PersonErrorMessage.SexMustBeInformed)
                               .NotNull().WithMessage(PersonErrorMessage.FieldCannotBeNull);
        }
    }
}
