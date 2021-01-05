using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Kraftvaerk_shop_server.Models;


namespace Kraftvaerk_shop_server.Models
{
    public class KraftvaerkContext : DbContext
    {
        public KraftvaerkContext(DbContextOptions<KraftvaerkContext> options)
             : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Order> Order { get; set; }

    }
}





