using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kraftvaerk_shop_server.Models
{
    public class Product
    {
        public long ProductId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public string MediaUrl { get; set; }
    }
}
