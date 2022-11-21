import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  min-height: 100vh;
`;

export const ProductDisplay = styled.div`
  display: flex;
  padding: 80px 16px;
  gap: 20px;

  .price,
  .title {
    font-weight: bold;
  }
  .description {
    color: var(--faded-text);
  }
  .category {
    width: fit-content;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px;
    border-radius: 8px;
    color: var(--faded-text);
  }
`;
