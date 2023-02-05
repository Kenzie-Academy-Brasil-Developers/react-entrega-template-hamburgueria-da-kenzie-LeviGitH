import React from "react";
import { StyleCartTotal } from "./style";

export const CartTotal = () => {
  return (
    <StyleCartTotal className="CartTotal">
      <div className="cartDiv__Total">
        <h2>Total</h2>
        <h1>R$</h1>
      </div>
      <button>Remover todos</button>
    </StyleCartTotal>
  );
};
