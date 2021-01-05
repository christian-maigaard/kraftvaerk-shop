using Microsoft.EntityFrameworkCore;

namespace Kraftvaerk_shop_server.Models
{
    [Owned]
    public class OrderProduct 
    {
        public long ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string MediaUrl { get; set; }
    }
}
