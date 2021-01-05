using System.Collections.Generic;

namespace Kraftvaerk_shop_server.Models
{
    public class Order
    {
        public long OrderId { get; set; }
        public ICollection<OrderProduct> OrderProducts { get; set; }
        public OrderDetails OrderDetails { get; set; }
    }
}
