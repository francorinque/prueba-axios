import React from "react";
import Navbar from "../Navbar/Navbar";
import { LayoutStyled } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      <div>{children}</div>
    </LayoutStyled>
  );
};

export default Layout;
