import React from "react";
import { SInputSearch } from "./InputSearch.js";

const InputSearch = () => {
  return (
    <SInputSearch>
      <input type="search" placeholder="Digitar Pesquisa" />;
      <button>Pesquisar</button>
    </SInputSearch>
  );
};

export default InputSearch;
