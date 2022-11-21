import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WindowContainer } from "../../components/commonStyles/styles";
import { Login, Nav, NavWrapper } from "./style";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => setIsScrolled(window.scrollY > 0 ? true : false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 0 ? true : false);
    const x = window.addEventListener("scroll", handleScroll);
    return () => x;
  }, []);

  return (
    <NavWrapper active={isScrolled}>
      <WindowContainer>
        <Nav>
          <h1 id="company-name" onClick={() => router.push("/")}>
            ARRIVALS
          </h1>
          <Login active={isScrolled}>Login</Login>
        </Nav>
      </WindowContainer>
    </NavWrapper>
  );
}
