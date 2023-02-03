import React from "react";
import { Product } from "./Product";
import { StyleProductsList } from "./style";

const ProductsList = () => {
  return (
    <StyleProductsList>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </StyleProductsList>
  );
};

export default ProductsList;
