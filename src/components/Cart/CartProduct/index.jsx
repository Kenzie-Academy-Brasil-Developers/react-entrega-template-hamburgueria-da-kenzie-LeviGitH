import React from "react";
import { StyleCartProduct } from "./style";

export const CartProduct = ({ product, currentSale, setCurrentSale }) => {
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
      <button
        onClick={() => {
          setCurrentSale(
            currentSale.filter((value) => {
              if (value == product.id) {
              } else {
                return value;
              }
            })
          );
        }}
      >
        Remover
      </button>
    </StyleCartProduct>
  );
};
