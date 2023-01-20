import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: ${(props) => (props.active ? "black" : "")};
  color: ${(props) => (props.active ? "white" : "")};
  /* box-shadow: rgb(31 42 85 / 8%) 0px 12px 32px; */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.5); */
  top: 0;
  transition: 1000ms;
  position: sticky;
  width: 100%;
  z-index: 99;
`;
export const Nav = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  #company-name {
    margin: 0;
    font-size: 50px;
    letter-spacing: -3px;
    font-style: italic;
    cursor: pointer;
  }
  .right-nav {
    display: flex;
    gap: 20px;
  }
  .cart-total-items {
    position: absolute;
    top: -3px;
    right: -21px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: red;
    width: 20px;
    height: 20px;
    color: white;
    font-size: 13px;
  }
`;

export const Login = styled.button`
  color: ${(props) => (props.active ? "white" : "")};
  background: none;
  font-size: 20px;
  border: none;
  letter-spacing: 1.5;
  cursor: pointer;
`;
export const CartButton = styled.h1`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;
