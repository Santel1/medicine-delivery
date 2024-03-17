import styled from "styled-components";

export const ListItemCartStyle = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  .cartImg {
    width: 240px;
    border-radius: 30px;
  }
  .cartName {
  }
  .cartPrice {
  }
  .cartInput {
    width: 100px;
    padding: 5px;
    border-radius: 10px;
    border: blue solid 1px;
  }
  .cartBtn {
    padding: 10px 20px;
    border-radius: 10px;
    /* background-color: #0077cc; */
    background-color: #33cc33;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      /* background-color: #005599; */
      background-color: #29a329;
    }
  }
  .inputWrapper {
    display: flex;
    gap: 10px;
  }
  .quantityBtn {
    padding: 10px 20px;
    border-radius: 10px;
    /* background-color: #0077cc; */
    background-color: #33cc33;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      /* background-color: #005599; */
      background-color: #29a329;
    }
    &.min {
      transition: all 0.3s;
      &:hover {
        background-color: red;
      }
    }
  }
`;
