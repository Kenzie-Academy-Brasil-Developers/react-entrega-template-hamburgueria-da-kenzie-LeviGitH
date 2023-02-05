import React from "react";
import { StyleProduct } from "./style";

export const Product = ({ product, handleClick }) => {
  return (
    <StyleProduct>
      <div>
        <img src={product.img} alt="" />
      </div>
      <h1>{product.name}</h1>
      <span>{product.category}</span>
      <h2>R$ {product.price}</h2>
      <button
        type="button"
        onClick={handleClick}
        id={product.id}
        price={product.price}
      >
        Adicionar
      </button>
    </StyleProduct>
  );
};
