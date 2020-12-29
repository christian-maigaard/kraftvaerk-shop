using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kraftvaerk_shop_server.Models
{
    public class OrderDetails
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Company { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string AreaCode { get; set; }
        public string Telephone { get; set; }
    }
}
