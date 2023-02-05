import React from "react";
import { StyleCartTotal } from "./style";

export const CartTotal = ({ cartTotal }) => {
  const teste = cartTotal;

  return (
    <StyleCartTotal className="CartTotal">
      <div className="cartDiv__Total">
        <h2>Total</h2>
        <h1>R${"" + teste}</h1>
      </div>
      <button
        onClick={() => {
          console.log(teste);
        }}
      >
        Remover todos
      </button>
    </StyleCartTotal>
  );
};
