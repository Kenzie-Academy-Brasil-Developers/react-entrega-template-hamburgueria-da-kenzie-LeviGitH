import React from "react";
import { Logo } from "./Logo";
import { InputSearch } from "./InputSearch";
import { StyleHeader } from "./style";

const Header = () => {
  return (
    <StyleHeader>
      <Logo />
      <InputSearch />
    </StyleHeader>
  );
};

export default Header;
