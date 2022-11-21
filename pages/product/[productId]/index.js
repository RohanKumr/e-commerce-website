import Loader from "../../../components/Loader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { WindowContainer } from "../../../components/commonStyles/styles";
import withNavAndFooter from "../../../hooks/withNavAndFooter";
import { getSingleProduct } from "../../../redux/slices/prodcutSlice";
import { useDispatch, useSelector } from "react-redux";
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

function ProductPage(props) {
  const { productId } = props.params;
  const { currentProduct } = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function quantityHandler(operation) {
    if (operation == "+") {
      if (quantity === 10) return;
      setQuantity((prev) => ++prev);
    }
    if (operation == "-") {
      if (quantity === 1) return;
      setQuantity((prev) => --prev);
    }
  }

  useEffect(() => {
    dispatch(getSingleProduct({ productId }));
  }, []);

  if (currentProduct.loading) return <Loader />;
  const { title, description, image, price, category } = currentProduct.data;
  return (
    <WindowContainer>
      <ProductPageWrapper>
        <ProductDisplay>
          <div>
            <Image
              priority
              height={400}
              width={400}
              objectfit="cover"
              alt={title}
              src={image}
            />
          </div>
          <div>
            <div className="category">{category}</div>
            <br />
            <div className="title">{title}</div>
            <br />
            <div className="description">{description}</div>
            <br />
            <div className="price">$ {price * quantity}</div>
            <br />
            <div>Quantity : {quantity}</div>
            <br />
            <button onClick={() => quantityHandler("-")}> - </button>{" "}
            <button onClick={() => quantityHandler("+")}> + </button>
          </div>
        </ProductDisplay>
        <div>InsertSimilarProductsHere</div>
      </ProductPageWrapper>
    </WindowContainer>
  );
}

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default withNavAndFooter(ProductPage);
