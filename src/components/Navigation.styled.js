import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;

  .logo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 20px;
  }
  .headerLink {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #0077cc;
    /* background-color: #33cc33; */
    color: #fff;
    transition: all 0.3s;
    &.active {
      border: 1px solid white;
      background-color: #005599;
      outline: none;
    }
    &:hover {
      background-color: #005599;
      /* background-color: #29a329; */
    }
  }
`;
