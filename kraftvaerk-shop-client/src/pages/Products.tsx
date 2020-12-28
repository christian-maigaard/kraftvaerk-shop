import React from "react";
import { ProductCard } from "./../components/ProductCard";
import { Product } from "./../models/Product.d";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

const products: Product[] = [
  {
    name: "The Danish Defense",
    mediaUrl:
      "https://stkraftvaerkcomprod.blob.core.windows.net/cache/2/1/0/7/b/b/2107bbf0fac11ea30d751f7b33924558d597f5b5.jpg",
    price: 42,
    description:
      "The Danish Defence Personnel organisation and Kraftvaerk have developed a career site that attracts more visitors. The secret weapon is better integration of data.",
  },
  {
    name: "HAY",
    mediaUrl:
      "https://kraftvaerk.com/media/q45ec25i/hay.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446441416370000",
    price: 150,
    description:
      "Kraftvaerk has been chosen as partner for the migration project of HAY’s B2B e-commerce. This is part of a larger digitalisation process at the strong design brand.",
  },
  {
    name: "Royal Greenland",
    mediaUrl:
      "https://kraftvaerk.com/media/d4cdqykz/rg_case-header.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446440034000000",
    price: 399,
    description:
      "In co-operation with Kraftvaerk, Royal Greenland has implemented an online product catalog for industrial customers, which will help streamline the company's sales process and increase...",
  },
  {
    name: "Topdanmark",
    mediaUrl:
      "https://kraftvaerk.com/media/lkyed3kg/topdanmark_dsc7965_vok.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446442160100000",
    price: 1000,
    description:
      "Topdanmark is embarking on a major migration project, where all websites will be assembled on a new Java platform. Kraftvaerk is part of the project as development and implementation partner.",
  },
  {
    name: "Resurs Bank",
    mediaUrl:
      "https://kraftvaerk.com/media/3cki0vib/rb_header_ok-1.jpg?anchor=center&mode=crop&width=1050&height=787&rnd=132446440038070000",
    price: 240,
    description:
      "Resurs Bank offers clever online loan applications to consumers and companies. Kraftvaerk maintains and develops functions to Resurs Bank's online loan solutions on the Danish market.",
  },
];

export const Products: React.FC = () => {
  return (
    <Container>
      <CardDeck>
        <div className="d-flex flex-wrap">
          {products.map((product, index) => (
            <ProductCard key={product.name + index} product={product} />
          ))}
        </div>
      </CardDeck>
    </Container>
  );
};
