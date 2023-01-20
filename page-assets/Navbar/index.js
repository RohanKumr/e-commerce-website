import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WindowContainer } from "../../components/commonStyles/styles";
import { Login, Nav, NavWrapper, CartButton } from "./style";
import { logoutUser, toggleCart } from "../../redux/slices/userSlice";
import dynamic from "next/dynamic";
// import Cart from "";
const Cart = dynamic(
  import("../Cart" /* webpackChunkName: "chunk-error-pop" */),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Navbar() {
  const { data, isLogged } = useSelector((state) => state.user).userData;
  const { cart } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => setIsScrolled(window.scrollY > 0 ? true : false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 0 ? true : false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToLoginPage = () => {
    router.push("/login");
  };
  const logout = () => {
    console.log("logout");
    dispatch(logoutUser());
  };

  const handleUserLogin = () => {
    isLogged ? logout() : goToLoginPage();
  };

  const handleCart = () => {
    dispatch(toggleCart({}));
  };
  const numberOfItemsInCart = () => {
    if (cart.data.length)
      return <div className="cart-total-items">{cart.data.length}</div>;
    return null;
  };
  return (
    <>
      <NavWrapper active={isScrolled}>
        <WindowContainer>
          <Nav>
            <div className="left-nav">
              <h1 id="company-name" onClick={() => router.push("/")}>
                ARRIVALS
              </h1>
            </div>
            <div className="right-nav">
              <Login onClick={handleUserLogin} active={isScrolled}>
                {isLogged ? "Logout" : `Login`}
              </Login>
              <CartButton onClick={() => handleCart()}>
                {" "}
                🛒 CART {numberOfItemsInCart()}
              </CartButton>
            </div>
          </Nav>
        </WindowContainer>
      </NavWrapper>
      <Cart dispatch={dispatch} cart={cart} />
    </>
  );
}
