using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Orders
{
    public class List
    {
        public class Query : IRequest<Result<List<Order>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Order>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Order>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Order>>.Success(await _context.Orders.ToListAsync(cancellationToken));
            }
        }
    }
}