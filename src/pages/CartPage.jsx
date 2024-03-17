import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectDrugsIsLoading } from "../redux/drugsSelectors";
import {
  addNewOrder,
  deleteCart,
  refreshCart,
  updateCart,
} from "../redux/drugsSlice";
import ListItemCart from "../components/ListItemCart";
import { CartPageStyled } from "./CartPage.styled";
import { toast } from "react-toastify";
import OrderForm from "../components/OrderForm";
import { Loader } from "../components/Loader";
import { useForm } from "react-hook-form";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartDrugs = useSelector(selectCart);
  const isLoading = useSelector(selectDrugsIsLoading);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (newOrder) => {
    if (cartDrugs.length === 0) {
      toast.error(
        "Your cart is empty. Please add items before placing an order."
      );
      return;
    }

    if (isNaN(newOrder.phone)) {
      toast.warning("Phone must contain only numbers.");
      return;
    }
    const orderData = {
      ...newOrder,
      totalPrice: calculateTotalPrice(),
      drugs: cartDrugs,
    };

    dispatch(addNewOrder(orderData));
    toast.success("Thank you for order!");
    reset();
    dispatch(refreshCart());
  };

  const handleDeleteCart = (drug) => {
    dispatch(deleteCart(drug));
    toast.success("Drug deleted from cart");
  };

  const handleClickInput = (drug) => (event) => {
    const newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity)) {
      dispatch(updateCart({ drug, quantity: 0 }));
    } else {
      dispatch(updateCart({ drug, quantity: newQuantity }));
    }
  };

  const handleIncreaseQuantity = (drug) => {
    const newQuantity = drug.quantity + 1;
    dispatch(updateCart({ drug, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = (drug) => {
    const newQuantity = Math.max(1, drug.quantity - 1);
    dispatch(updateCart({ drug, quantity: newQuantity }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartDrugs.forEach((drug) => {
      totalPrice += drug.price * drug.quantity;
    });
    return totalPrice;
  };

  return (
    <CartPageStyled>
      <OrderForm
        calculateTotalPrice={calculateTotalPrice}
        cartDrugs={cartDrugs}
        handleOnSubmit={handleOnSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        errors={errors}
      />
      {isLoading ? (
        <Loader />
      ) : cartDrugs.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cartList">
          {cartDrugs &&
            cartDrugs.map((drug) => (
              <ListItemCart
                key={drug._id}
                drug={drug}
                handleDeleteCart={handleDeleteCart}
                handleClickInput={handleClickInput}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            ))}
        </ul>
      )}
    </CartPageStyled>
  );
};

export default CartPage;
