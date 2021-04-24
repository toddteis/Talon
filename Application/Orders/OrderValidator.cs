using Domain;
using FluentValidation;

namespace Application.Orders
{
    public class OrderValidator : AbstractValidator<Order>
    {
        public OrderValidator()
        {
            RuleFor(x => x.Customer).NotEmpty();
            RuleFor(x => x.DateOrdered).NotEmpty();
            RuleFor(x => x.Product).NotEmpty();
            RuleFor(x => x.Amount).NotEmpty();
            RuleFor(x => x.DeliveryAddress).NotEmpty();
        }
    }
}