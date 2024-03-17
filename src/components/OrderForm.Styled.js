import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  text-align: start;
  gap: 20px;
  margin-right: 50px;
  .cartBtn {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #0077cc;
    /* background-color: #33cc33; */
    color: #fff;
    transition: all 0.3s;
    &:hover {
      background-color: #005599;
      /* background-color: #29a329; */
    }
  }
  .input {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    border: 1px solid #0077cc;
    border-radius: 10px;
    resize: none;
    outline: none;
    &:hover,
    &:focus {
      border: 1px solid #29a329;
    }
    &.error {
      border: 1px solid red;
    }
  }
`;
