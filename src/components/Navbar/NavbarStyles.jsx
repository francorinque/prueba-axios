import styled from "styled-components";

export const NavbarStyled = styled.header`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  & a {
    color: #222;
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;
