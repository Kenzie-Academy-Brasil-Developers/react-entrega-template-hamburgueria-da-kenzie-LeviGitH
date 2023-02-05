import React from "react";
import { Product } from "./Product";
import { StyleProductsList } from "./style";

const ProductsList = ({ products, filteredProducts, handleClick }) => {
  const teste = true;

  if (filteredProducts.length > 0) {
  }

  return (
    <StyleProductsList>
      {products.length > 0 && filteredProducts.length == 0
        ? products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleClick={handleClick}
              />
            );
          })
        : undefined}
      {filteredProducts.length > 0
        ? filteredProducts.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleClick={handleClick}
              />
            );
          })
        : undefined}
    </StyleProductsList>
  );
};

export default ProductsList;
