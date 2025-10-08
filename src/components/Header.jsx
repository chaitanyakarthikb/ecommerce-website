import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img alt="navlink--img-logo" src="/images/logo.png" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
