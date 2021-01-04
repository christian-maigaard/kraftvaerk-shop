using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kraftvaerk_shop_server.Models
{
    public class Order
    {
        public long Id { get; set; }
        public ICollection<Product> Products { get; set; }
        public OrderDetails Orderdetails { get; set; }
    }
}
