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
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Cart(props) {
  const { cart, dispatch } = props;
  // const { cart } = useSelector((state) => state.user);
  console.log({ cart });
  const handleCart = () => dispatch(toggleCart({}));
  const numberOfItemsInCart = () => {
    if(cart.data.length)
      return <div className="cart-total-items">{ cart.data.length }</div>;
    return null;
  };
  const handleRemoveItemFromCart = (id) => {
    dispatch(removeFromCart({ id }));
    toast.error("Removed from Cart!");
    cart.data.length == 0 && dispatch(toggleCart({}));
  };

  // useEffect(() => {
  //   cart.data.length == 0 && dispatch(toggleCart({}));
  // }, [cart]);
  if(cart.isOpen && cart.data.length == 0)
    setTimeout(() => dispatch(toggleCart({})), 1000);

  return (
    <CartContainer isOpen={ cart.isOpen }>
      <div style={ { display: "flex", flexDirection: "column" } }>
        <Header>
          <h1> 🛒 CART { numberOfItemsInCart() }</h1>
          <CloseButton onClick={ () => handleCart() }>X</CloseButton>
        </Header>
        { cart.data.length == 0 && <h3>Your Cart is empty.</h3> }
        { cart.data.map((product) => (
          <CartItem key={ product.title }>
            <div
              style={ {
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                flexDirection: "row-reverse",
              } }
            >
              <Image
                height="100"
                width="100"
                alt={ product.title }
                // loading="lazy"
                style={
                  {
                    // position: "absolute",
                    // objectFit: "contain",
                  }
                }
                // fill={true}
                src={ product.image }
              />
              <div className="title">{ product.title }</div>
            </div>

            <div className="quantity">
              <div>Qty:</div>
              <span
                className="quantity-operations"
                onClick={ () =>
                  dispatch(
                    removeFromCart({ id: product.id, action: "quantity" })
                  )
                }
              >
                -
              </span>
              <div className="qty">{ product.quantity }</div>
              <span
                className="quantity-operations"
                onClick={ () => dispatch(addToCart({ product })) }
              >
                +
              </span>
            </div>
            <div className="price"> Price : ${ product.price }</div>
            <div
              className="remove-item"
              onClick={ () => handleRemoveItemFromCart(product.id) }
            >
              Delete
            </div>
          </CartItem>
        )) }
      </div>
      <CheckoutOut>
        Total : $
        { cart.data
          .reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
          .toFixed(2) }
      </CheckoutOut>
    </CartContainer>
  );
}
