using System;

namespace Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public string Customer { get; set; }
        public DateTime DateOrdered { get; set; }
        public DateTime DateShipped { get; set; }
        public string Product { get; set; }
        public int Amount { get; set; }
        public string DeliveryAddress { get; set; }
    }
}