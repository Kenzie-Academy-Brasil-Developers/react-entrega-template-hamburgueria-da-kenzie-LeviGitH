import React from "react";
import { StyleProduct } from "./style";

export const Product = ({ product }) => {
  return (
    <StyleProduct>
      <div>
        <img src={product.img} alt="" />
      </div>
      <h1>{product.name}</h1>
      <span>{product.category}</span>
      <h2>R$ 14.00</h2>
      <button type="button">Adicionar</button>
    </StyleProduct>
  );
};
