import React from "react";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import { StyleHeader } from "./style";

const Header = ({ products, setFilteredProducts }) => {
  return (
    <StyleHeader>
      <Logo />
      <InputSearch
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    </StyleHeader>
  );
};

export default Header;
