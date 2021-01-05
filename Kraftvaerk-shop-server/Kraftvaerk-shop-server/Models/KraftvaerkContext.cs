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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product 
                { 
                    Id = 1, Name= "The Danish Defense", 
                    MediaUrl = "https://stkraftvaerkcomprod.blob.core.windows.net/cache/2/1/0/7/b/b/2107bbf0fac11ea30d751f7b33924558d597f5b5.jpg", 
                    Price = 49,
                    Description= "The Danish Defence Personnel organisation and Kraftvaerk have developed a career site that attracts more visitors. The secret weapon is better integration of data."}
                );
        }
    }
}





