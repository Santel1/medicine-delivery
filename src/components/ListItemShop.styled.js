import styled from "styled-components";

export const ListItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  .shopImg {
    width: 240px;
    border-radius: 30px;
  }
  .shopName {
  }
  .shopPrice {
  }
  .shopBtn {
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
    &.added {
      background-color: #0077cc;
      cursor: default;
    }
  }
`;
