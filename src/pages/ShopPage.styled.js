import styled from "styled-components";

export const ShopPageStyled = styled.div`
  display: flex;
  padding: 0px 20px;

  .shopList {
    display: grid;
    justify-items: center;
    height: 700px;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    padding: 0 20px;
    overflow: auto;
  }
  .shopList::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .shopList::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom right, #0077cc 0%, #33cc33 100%);
    border-radius: 5px;
  }

  .shopList::-webkit-scrollbar-track {
    background-color: #ddd;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .sidebarFilter {
  }
  .sidebarList {
    display: flex;
    width: 300px;
    flex-direction: column;
    gap: 10px;
    margin-right: 50px;
  }
  .sidebarItem {
  }
  .sidebarBtn {
    width: 100%;
    padding: 20px 50px;
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
`;
