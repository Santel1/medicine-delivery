import React from "react";
import { StyledForm } from "./OrderForm.Styled";

const OrderForm = ({
  calculateTotalPrice,
  handleOnSubmit,
  register,
  handleSubmit,
  errors,
  reset,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="inputForm">
        <label htmlFor="name">
          Name:
          {errors.name && (
            <span className="errorMessage">This field is required</span>
          )}
        </label>
        <input
          className={`input ${errors.name ? "error" : ""}`}
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="inputForm">
        <label htmlFor="phone">
          Phone:
          {errors.phone && (
            <span className="errorMessage">This field is required</span>
          )}
        </label>
        <input
          className={`input ${errors.phone ? "error" : ""}`}
          type="tel"
          id="phone"
          {...register("phone", { required: true })}
        />
      </div>
      <div className="inputForm">
        <label htmlFor="email">
          E-mail:
          {errors.email && (
            <span className="errorMessage">This field is required</span>
          )}
        </label>
        <input
          className={`input ${errors.email ? "error" : ""}`}
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="inputForm">
        <label htmlFor="address">
          Address:{" "}
          {errors.address && (
            <span className="errorMessage">This field is required</span>
          )}
        </label>
        <textarea
          className={`input ${errors.address ? "error" : ""}`}
          id="address"
          {...register("address", { required: true })}
        />
      </div>
      <p>
        Total Cart Price:
        <span>{calculateTotalPrice()}</span>
      </p>
      <button type="submit" className="cartBtn">
        Buy
      </button>
    </StyledForm>
  );
};

export default OrderForm;
