import React from "react";
import { StyleInputSearch } from "./style";

export const InputSearch = () => {
  return (
    <StyleInputSearch>
      <input type="search" placeholder="Digitar Pesquisa" />;
      <button type="submit">Pesquisar</button>
    </StyleInputSearch>
  );
};
