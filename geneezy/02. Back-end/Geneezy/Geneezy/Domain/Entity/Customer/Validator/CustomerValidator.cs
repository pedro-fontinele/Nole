using FluentValidation;
using Geneezy.Domain.Entity.Dto;
using Geneezy.Domain.Entity.Validator.ErrorMessage;

namespace Geneezy.Domain.Entity.Validator
{
    public class CustomerValidator : AbstractValidator<CustomerDto>
    {
        public CustomerValidator()
        {
        }
    }
}
