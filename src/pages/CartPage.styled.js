import styled from "styled-components";

export const CartPageStyled = styled.div`
  display: flex;
  padding: 0px 20px;
  .cartList {
    display: grid;
    justify-items: center;
    height: 700px;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    padding: 0 20px;
    overflow: auto;
  }

  .cartList::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .cartList::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom right, #0077cc 0%, #33cc33 100%);
    border-radius: 5px;
  }

  .cartList::-webkit-scrollbar-track {
    background-color: #ddd;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
