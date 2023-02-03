import React from "react";
import foto from "../../../assets/teste.svg";
import { StyleProduct } from "./style";

export const Product = () => {
  return (
    <StyleProduct>
      <div>
        <img src={foto} alt="" />
      </div>
      <h1>Hamburguer</h1>
      <span>Sanduiches</span>
      <h2>R$ 14.00</h2>
      <button type="button">Adicionar</button>
    </StyleProduct>
  );
};
