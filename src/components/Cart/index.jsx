import React from "react";
import { StyleCart } from "./style";

const Cart = () => {
  return (
    <StyleCart>
      <header>
        <h1>Carrinho de compras</h1>
      </header>
      <div>
        <h2>Sua sacola está vazia</h2>
        <span>Adicione itens</span>
      </div>
    </StyleCart>
  );
};

export default Cart;
