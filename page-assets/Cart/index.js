import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  CartContainer,
  CartItem,
  CloseButton,
  CheckoutOut,
} from "./styles";
import Image from "next/image";
import {
  toggleCart,
  removeFromCart,
  addToCart,
} from "../../redux/slices/userSlice";

export default function Cart(props) {
  const { cart, dispatch } = props;
  // const { cart } = useSelector((state) => state.user);

  const handleCart = () => dispatch(toggleCart({}));
  const numberOfItemsInCart = () => {
    if (cart.data.length)
      return <div className="cart-total-items">{cart.data.length}</div>;
    return null;
  };
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <CartContainer isOpen={cart.isOpen}>
      <Header>
        <h1>🛒 CART {numberOfItemsInCart()}</h1>
        <CloseButton onClick={() => handleCart()}>X</CloseButton>
      </Header>
      {cart.data.length == 0 && <h3>Your Cart is empty.</h3>}
      {cart.data.map((product) => (
        <CartItem key={product.title}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              flexDirection: "row-reverse",
            }}
          >
            <Image
              height="100"
              width="100"
              // loading="lazy"
              style={
                {
                  // position: "absolute",
                  // objectFit: "contain",
                }
              }
              // fill={true}
              src={product.image}
            />
            <div className="title">{product.title}</div>
          </div>

          <div className="quantity">
            <div>Qty:</div>
            <span
              className="quantity-operations"
              onClick={() =>
                dispatch(removeFromCart({ id: product.id, action: "quantity" }))
              }
            >
              -
            </span>
            <div className="qty">{product.quantity}</div>
            <span
              className="quantity-operations"
              onClick={() => dispatch(addToCart({ product }))}
            >
              +
            </span>
          </div>
          <div className="price"> Price : ${product.price}</div>
          <div
            className="remove-item"
            onClick={() => handleRemoveItemFromCart(product.id)}
          >
            Delete
          </div>
        </CartItem>
      ))}
      <CheckoutOut>
        Total : $
        {cart.data
          .reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
          .toFixed(2)}
      </CheckoutOut>
    </CartContainer>
  );
}
