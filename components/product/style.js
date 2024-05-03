import styled from "styled-components";

export const ProductContainer = styled.div`
  border-radius: 8px;
  width: 300px;
  padding: 16px;
  box-shadow: rgb(31 42 85 / 8%) 0px 12px 32px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .img-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      object-fit:cover;
    }
    
  }
  transition:300ms ease-in-out;
  :hover {
    transform:scale(1.05);
    img {
      object-fit:scale-down;
    }
  }

`;
export const Title = styled.div`
  color: rgba(31, 42, 85, 0.6);
  font-size: 12px;
`;

export const LimitedDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 16px 6px 0px;

  .price-section {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Add = styled.button`
  border: 1px solid black;
  font-size: 13px;
  background: black;
  color: white;
  padding: 3px 10px;
  border-radius: 4px;
  :hover {
    border: 1px solid rgba(31, 42, 85, 0.2);
    background: white;
    color: black;
  }
`;
