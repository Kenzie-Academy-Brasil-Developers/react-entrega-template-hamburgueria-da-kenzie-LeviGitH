import React from "react";
import { Product } from "./Product";
import { StyleProductsList } from "./style";

const ProductsList = ({ products, filteredProducts }) => {
  const teste = true;

  if (filteredProducts.length > 0) {
  }

  return (
    <StyleProductsList>
      {products.length > 0 && filteredProducts.length == 0
        ? products.map((product, index) => {
            return <Product key={index} product={product} />;
          })
        : undefined}
      {filteredProducts.length > 0
        ? filteredProducts.map((product, index) => {
            return <Product key={index} product={product} />;
          })
        : undefined}
    </StyleProductsList>
  );
};

export default ProductsList;
