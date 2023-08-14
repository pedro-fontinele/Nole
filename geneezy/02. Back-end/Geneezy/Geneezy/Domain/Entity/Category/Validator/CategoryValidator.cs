using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Validator.ErrorMessage;

namespace Geneezy.Domain.Entity.Validator
{
    public class CategoryValidator : AbstractValidator<CategoryDto>
    {
        public CategoryValidator()
        {
            RuleFor(e => e.Name).NotEmpty().WithMessage(CategoryErrorMessage.NameMustBeInformed)
                                .NotNull().WithMessage(ClientErrorMessage.FieldCannotBeNull)
                                .MaximumLength(60).WithMessage(ClientErrorMessage.ExceededNumberOfCharacters);
        }
    }
}
