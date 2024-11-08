import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">BriSphere</NavLink>
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavMenu>
    </HeaderContainer>
  );
}

export default Header;
