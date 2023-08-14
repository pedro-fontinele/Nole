using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Validator.ErrorMessage;

namespace Geneezy.Domain.Entity.Validator
{
    public class ProductValidator : AbstractValidator<ProductDto>
    {
        public ProductValidator()
        {
            RuleFor(e => e.Name).NotEmpty().WithMessage(ProductErrorMessage.NameMustBeInformed)
                                .NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                                .MaximumLength(100).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Description).NotEmpty().WithMessage(ProductErrorMessage.DescriptionMustBeInformed)
                                       .NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                                       .MaximumLength(350).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Brand).NotEmpty().WithMessage(ProductErrorMessage.BrandMustBeInformed)
                                 .NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                                 .MaximumLength(70).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Supplier).NotEmpty().WithMessage(ProductErrorMessage.SupplierMustBeInformed)
                                    .NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                                    .MaximumLength(80).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);

            RuleFor(e => e.Sku).NotEmpty().WithMessage(ProductErrorMessage.SkuMustBeInformed)
                               .NotNull().WithMessage(ProductErrorMessage.FieldCannotBeNull)
                               .MaximumLength(80).WithMessage(ProductErrorMessage.ExceededNumberOfCharacters);
        }
    }
}
