import React from "react";
import drugImg from "../images/drugs-img.jpg";
import { ListItemStyle } from "./ListItemShop.styled";

const ListItemShop = ({ drug, handleAddToCart, isAdded }) => {
  return (
    <ListItemStyle>
      <img className="shopImg" src={drugImg} alt={drug.name} />
      <p className="shopName">{drug.name}</p>
      <p className="shopPrice">Price: {drug.price}</p>
      <button
        onClick={() => handleAddToCart(drug)}
        className={`shopBtn ${isAdded ? "added" : ""}`}
        disabled={isAdded}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </ListItemStyle>
  );
};

export default ListItemShop;
