import React, { useState } from "react";
import { StyleInputSearch } from "./style";

export const InputSearch = ({ products, setFilteredProducts }) => {
  const [filterword, setFilterword] = useState("");

  return (
    <StyleInputSearch>
      <input
        type="search"
        placeholder="Digitar Pesquisa"
        onChange={(event) => {
          setFilterword(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(filterword.toLowerCase())
          );
          setFilteredProducts(filtered);
        }}
      >
        Pesquisar
      </button>
    </StyleInputSearch>
  );
};
