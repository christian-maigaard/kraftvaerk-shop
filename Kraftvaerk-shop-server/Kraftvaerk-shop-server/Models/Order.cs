using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Kraftvaerk_shop_server.Models
{
    public class Order
    {
        public long OrderId { get; set; }
        public ICollection<OrderProduct> OrderProducts { get; set; }
        public OrderDetails OrderDetails { get; set; }
    }
}
