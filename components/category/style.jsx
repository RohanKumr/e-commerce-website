import styled from "styled-components";

export const CategoryWrapper = styled.div`
  gap: 20px;
  padding: 8px 16px 24px;

  h2 {
    padding: 0 0 0 6px;
    text-transform: capitalize;
    cursor: pointer;
    :hover {
      text-decoration-line: underline;
    }
  }
`;
export const ProductsWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around; */

  display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: flex-start;
`;
