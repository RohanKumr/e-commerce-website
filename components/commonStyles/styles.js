import styled from "styled-components";

export const WindowContainer = styled.div`
  margin: auto;
  max-width: 1400px;
  width: 100%;
  scroll-behavior:smooth;
`;

export const QuantityButton = styled.button`
  border: none;
  font-size: 30px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: none;
  display: inline;
  margin-right: 10px;
  transition-duration: 300ms;
  :hover {
    color: white;
    background: black;
  }
`;
