using Microsoft.EntityFrameworkCore;

namespace Kraftvaerk_shop_server.Models
{
    [Owned]
    public class OrderDetails
    {
        public string Email { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Company { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string Telephone { get; set; }
    }
}
