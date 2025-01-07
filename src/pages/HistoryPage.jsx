import React, { useEffect } from "react";
import { HistoryPageStyled } from "./HistoryPage.styled";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { selectDrugsIsLoading, selectOrders } from "../redux/drugsSelectors";
import { requestOrders } from "../redux/drugsSlice";
import { toast } from "react-toastify";
import { fetchOrders } from "../services/api";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const isLoading = useSelector(selectDrugsIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(requestOrders());
    }
  }, [dispatch, orders]);

  console.log(orders);

  const handleOnSubmit = (order) => {
    if (orders.length === 0) {
      toast.error("User not found!");
      return;
    }

    if (isNaN(order.phone)) {
      toast.warning("Phone must contain only numbers.");
      return;
    }

    dispatch(fetchOrders(order));
    toast.success("Thank you for order!");
    reset();
  };
  const isOneFieldFilled = watch("email") || watch("phone");
  return (
    <HistoryPageStyled>
      <div className="formWrapper">
        <form className="historyForm" onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="inputForm">
            <label htmlFor="phone">Phone:</label>
            <input
              className={`input ${errors.phone && errors.email ? "error" : ""}`}
              type="tel"
              id="phone"
              {...register("phone", {
                required: !isOneFieldFilled,
              })}
            />
          </div>
          <div className="inputForm">
            <label htmlFor="email">E-mail:</label>
            <input
              className={`input ${errors.email && errors.phone ? "error" : ""}`}
              type="email"
              id="email"
              {...register("email", {
                required: !isOneFieldFilled,
              })}
            />
          </div>
          {errors.email && errors.phone && (
            <p>At least one field is required</p>
          )}
          <button type="submit" className="cartBtn">
            Search
          </button>
        </form>
      </div>
      <div></div>
    </HistoryPageStyled>
  );
};

export default HistoryPage;
