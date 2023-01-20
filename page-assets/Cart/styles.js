import styled from "styled-components";

export const CartContainer = styled.div`
  /* display: ${({ isOpen }) => (isOpen ? "block" : "none")}; */
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : "-350px")};
  transition: 300ms;
  width: 350px;
  height: 100%;
  z-index: 99;
  background: white;
  padding: 0 20px 20px;
  box-shadow: rgb(0 0 0 / 32%) 0px 2px 10px 0px;

  .cart-total-items {
    /* position: absolute;
    top: -3px;
    right: -21px; */
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: red;
    width: 20px;
    height: 20px;
    color: white;
    font-size: 13px;
  }
  overflow: scroll;
`;
export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  background: white;
  z-index: 99;
  h1 {
    display: flex;
  }
`;
export const CartItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  .title {
    font-weight: bold;
  }
  .remove-item {
    color: blue;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 16px;
  }
  .price {
    font-weight: bold;
    padding-top: 4px;
  }
  .quantity {
    display: flex;
    align-items: center;

    .qty {
      width: 26px;
      display: flex;
      margin: 0 1px;
      font-size: 14px;
      padding: 2px 0;
      border-radius: 2px;
      justify-content: center;
      background: black;
      color: white;
    }
    .quantity-operations {
      background: rgba(31, 42, 85, 0.1);
      /* font-size: 18px; */
      /* font-weight: bold; */
      /* margin: 0 2px; */
      padding: 0px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
      :first-of-type {
        margin-left: 6px;
        /* border-radius: 4px 0 0 4px; */
        border-radius: 50% 0 0 50%;
      }
      :last-of-type {
        border-radius: 0 50% 50% 0;
      }
      :hover {
        color: white;
        background: black;
      }
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: black;
  color: white;
  width: 30px;
  height: 30px;
  font-size: 20px;
  margin: 28px 0;
  cursor: pointer;
`;

export const CheckoutOut = styled.div`
  position: sticky;
  bottom: -20px;
  left: 0;
  padding: 16px;
  margin: 0 -20px -36px;
  background: orange;
  font-weight: 600;
`;
