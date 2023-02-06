import React from "react";
import { StyleCartTotal } from "./style";

export const CartTotal = ({ cartValues }) => {
  const total = cartValues.reduce((result, current) => {
    return result + current;
  });

  return (
    <StyleCartTotal className="CartTotal">
      <div className="cartDiv__Total">
        <h2>Total</h2>
        <h1>R${total}</h1>
      </div>
      <button>Remover todos</button>
    </StyleCartTotal>
  );
};
