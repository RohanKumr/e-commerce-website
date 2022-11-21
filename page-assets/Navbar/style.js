import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: ${(props) => (props.active ? "black" : "")};
  color: ${(props) => (props.active ? "white" : "")};
  /* box-shadow: rgb(31 42 85 / 8%) 0px 12px 32px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  top: 0;
  transition: 300ms;
  position: sticky;
  width: 100%;
  z-index: 99;
`;
export const Nav = styled.nav`
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
`;

export const Login = styled.button`
  color: ${(props) => (props.active ? "white" : "")};
  background: none;
  font-size: 20px;
  border: none;
  letter-spacing: 1.5;
  cursor: pointer;
`;
