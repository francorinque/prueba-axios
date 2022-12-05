import React from "react";
import { NavLink } from "react-router-dom";
import { MenuStyled, NavbarStyled } from "./NavbarStyles";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div>LOGO</div>
      <MenuStyled>
        <NavLink to="/">Index</NavLink>
      </MenuStyled>
    </NavbarStyled>
  );
};

export default Navbar;
