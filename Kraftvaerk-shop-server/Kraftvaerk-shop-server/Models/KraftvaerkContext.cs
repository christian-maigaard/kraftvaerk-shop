using Microsoft.EntityFrameworkCore;

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





