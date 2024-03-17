import React from "react";
import drugImg from "../images/drugs-img.jpg";
import { ListItemCartStyle } from "./ListItemCart.styled";

const ListItemCart = ({
  drug,
  handleClickInput,
  handleDeleteCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  return (
    <ListItemCartStyle>
      <img src={drugImg} alt={drug.name} className="cartImg" />
      <p className="cartName">{drug.name}</p>
      <p className="cartPrice">Total: {drug.price * drug.quantity}</p>
      <div className="inputWrapper">
        <button
          onClick={() => handleIncreaseQuantity(drug)}
          className="quantityBtn"
        >
          +
        </button>
        <input
          type="text"
          value={drug.quantity}
          onChange={handleClickInput(drug)}
          className="cartInput"
        />
        <button
          onClick={() => handleDecreaseQuantity(drug)}
          className="quantityBtn min"
        >
          -
        </button>
      </div>
      <button onClick={() => handleDeleteCart(drug)} className="cartBtn">
        Delete from Cart
      </button>
    </ListItemCartStyle>
  );
};

export default ListItemCart;
