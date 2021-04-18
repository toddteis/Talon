using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Orders.Any()) return;
            
            var orders = new List<Order>
            {
                new Order
                {
                    Customer = "Jill Taylor",
                    DateOrdered = DateTime.Now.AddMonths(-5),
                    DateShipped = DateTime.Now.AddMonths(-4),
                    Product = "Peg wooden type-IV unpainted",
                    Amount = 2000,
                    DeliveryAddress = "100 Smith Road Smithfield",

                },

                new Order
                {
                    Customer = "Bobby Dazzler",
                    DateOrdered = DateTime.Now.AddMonths(-4),
                    DateShipped = DateTime.Now.AddMonths(-3),
                    Product = "Peg wooden type-IV painted blue",
                    Amount = 5000,
                    DeliveryAddress = "50 Jones Street Jonesville",

                },

                new Order
                {
                    Customer = "Dwayne Pipe",
                    DateOrdered = DateTime.Now.AddMonths(-4),
                    DateShipped = DateTime.Now.AddMonths(-3),
                    Product = "Peg wooden type-III unpainted",
                    Amount = 3000,
                    DeliveryAddress = "200 Green Avenue Greensburg",

                },

                new Order
                {
                    Customer = "Jill Taylor",
                    DateOrdered = DateTime.Now.AddMonths(-3),
                    DateShipped = DateTime.Now.AddMonths(-2),
                    Product = "Peg wooden type-IV painted green",
                    Amount = 2500,
                    DeliveryAddress = "100 Smith Road Smithfield",

                },

                new Order
                {
                    Customer = "Customer four",
                    DateOrdered = DateTime.Now.AddMonths(-2),
                    DateShipped = DateTime.Now.AddMonths(-1),
                    Product = "Peg wooden type-III painted red",
                    Amount = 1000,
                    DeliveryAddress = "65 Winter Crescent Winter Town",

                },

                new Order
                {
                    Customer = "Bobby Dazzler",
                    DateOrdered = DateTime.Now.AddMonths(-2),
                    DateShipped = DateTime.Now.AddMonths(-1),
                    Product = "Peg wooden type-IV unpainted",
                    Amount = 3500,
                    DeliveryAddress = "50 Jones Street Jonesville",

                }
            };

            await context.Orders.AddRangeAsync(orders);
            await context.SaveChangesAsync();
        }
    }
}