import React from "react";
import drugImg from "../images/p-logo.png";
import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNavigation className="nav">
      <a href="http://localhost:3000/medicine-delivery" className="logo">
        <img width={40} src={drugImg} alt="" />
        <p>Medicine delivery</p>
      </a>
      <NavLink className="headerLink" to="/">
        Shop
      </NavLink>
      <NavLink className="headerLink" to="/cart">
        Cart
      </NavLink>
    </StyledNavigation>
  );
};

export default Navigation;
