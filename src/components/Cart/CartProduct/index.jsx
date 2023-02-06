import React from "react";
import { StyleCartProduct } from "./style";

export const CartProduct = ({ product, currentSale }) => {
  return (
    <StyleCartProduct className="productCart">
      <div className="productDiv__Perfil">
        <div className="productDiv__Image">
          <img src={product.img} alt="" />
        </div>
        <div className="productDiv__Text">
          <h1>{product.name}</h1>
          <span>{product.category}</span>
        </div>
      </div>
      <button>Remover</button>
    </StyleCartProduct>
  );
};
