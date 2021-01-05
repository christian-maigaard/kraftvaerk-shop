using Kraftvaerk_shop_server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kraftvaerk_shop_server
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new KraftvaerkContext(
                serviceProvider.GetRequiredService<DbContextOptions<KraftvaerkContext>>()))
            {
                if (context.Products.Any())
                {
                    return; 
                }           

                context.Products.AddRange(
                new Product
                {
                    ProductId = 1,
                    Name = "The Danish Defense",
                    MediaUrl = "https://stkraftvaerkcomprod.blob.core.windows.net/cache/2/1/0/7/b/b/2107bbf0fac11ea30d751f7b33924558d597f5b5.jpg",
                    Price = 149,
                    Description = "The Danish Defence Personnel organisation and Kraftvaerk have developed a career site that attracts more visitors. The secret weapon is better integration of data."
                },
                new Product
                {                       
                    ProductId = 2,
                    Name =  "HAY",
                    MediaUrl = "https://kraftvaerk.com/media/q45ec25i/hay.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446441416370000",
                    Price = 149,
                    Description = "Kraftvaerk has been chosen as partner for the migration project of HAY’s B2B e-commerce. This is part of a larger digitalisation process at the strong design brand."                    
                },
                new Product
                {
                    ProductId = 3,
                    Name = "Royal Greenland",
                    MediaUrl = "https://kraftvaerk.com/media/d4cdqykz/rg_case-header.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446440034000000",
                    Price = 399,
                    Description = "In co-operation with Kraftvaerk, Royal Greenland has implemented an online product catalog for industrial customers, which will help streamline the company's sales process."
                },
                new Product
                {
                    ProductId = 4,
                    Name = "Topdanmark",
                    MediaUrl = "https://kraftvaerk.com/media/lkyed3kg/topdanmark_dsc7965_vok.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446442160100000",
                    Price = 999,
                    Description = "Topdanmark is embarking on a major migration project, where all websites will be assembled on a new Java platform. Kraftvaerk is part of the project as development and implementation partner."
                },
                new Product
                {
                    ProductId = 5,
                    Name = "Resurs Bank",
                    MediaUrl = "https://kraftvaerk.com/media/3cki0vib/rb_header_ok-1.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446440038070000",
                    Price = 249,
                    Description = "Resurs Bank offers clever online loan applications to consumers and companies. Kraftvaerk maintains and develops functions to Resurs Bank's online loan solutions on the Danish market."
                }
                );
                context.SaveChanges();
            }
        }
    }
}
