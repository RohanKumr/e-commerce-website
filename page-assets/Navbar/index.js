import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WindowContainer } from "../../components/commonStyles/styles";
import { Login, Nav, NavWrapper } from "./style";
import { logoutUser } from "../../redux/slices/userSlice";

export default function Navbar() {
  const { data, isLogged } = useSelector((state) => state.user).userData;
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

  return (
    <NavWrapper active={isScrolled}>
      <WindowContainer>
        <Nav>
          <h1 id="company-name" onClick={() => router.push("/")}>
            ARRIVALS
          </h1>
          <Login onClick={handleUserLogin} active={isScrolled}>
            {isLogged ? "Logout" : `Login`}
          </Login>
        </Nav>
      </WindowContainer>
    </NavWrapper>
  );
}
