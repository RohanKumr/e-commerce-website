import Loader from "../../../components/Loader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  WindowContainer,
  QuantityButton,
} from "../../../components/commonStyles/styles";
import withNavAndFooter from "../../../hooks/withNavAndFooter";
import {
  getSingleCategoryProducts,
  getSingleProduct,
} from "../../../redux/slices/prodcutSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Category from "../../../components/category";
import {
  getProduct,
  getSpecificCategoryProducts,
} from "../../../services/product";
import { addToCart } from "../../../redux/slices/userSlice";

export const ProductPageWrapper = styled.div`
  min-height: 100vh;
`;

export const ProductDisplay = styled.div`
  display: flex;
  padding: 80px 16px;
  gap: 20px;
  img{
    object-fit:scale-down;
  }
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
  const {
    params: { productId },
    singleProduct,
    allSpecificCategoryProducts,
  } = props;
  // const { currentProduct } = useSelector((state) => state.product);
  // const { singleCategoryProducts } = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  function quantityHandler(operation) {
    if(operation == "+") {
      if(quantity === 10) return;
      setQuantity((prev) => ++prev);
    }
    if(operation == "-") {
      if(quantity === 1) return;
      setQuantity((prev) => --prev);
    }
  }

  // useEffect(() => {
  //   dispatch(getSingleProduct({ singleProduct, productId }));
  // }, [productId]);

  // useEffect(() => {
  //   dispatch(
  //     getSingleCategoryProducts({
  //       productsData: allSpecificCategoryProducts,
  //       category: currentProduct?.data?.category,
  //     })
  //   );
  // }, [currentProduct.data || productId]);

  const handleCart = () => {
    dispatch(
      addToCart({
        product: { ...(singleProduct || currentProduct?.data), quantity },
      })
    );
  };
  const { title, description, image, price, category } =
    singleProduct || currentProduct?.data;
  return (
    <WindowContainer>
      <ProductPageWrapper>
        <ProductDisplay>
          <div>
            { image && (
              <Image
                src={ image }
                alt={ title }
                height={ 400 }
                width={ 400 }
                priority
              />
            ) }
          </div>
          <div>
            <div className="category">{ category }</div>
            <br />
            <div className="title">{ title }</div>
            <br />
            <div className="description">{ description }</div>
            <br />
            <div className="price">$ { (price * quantity).toFixed(2) }</div>
            <br />
            <div>Quantity : { quantity }</div>
            <br />
            <QuantityButton onClick={ () => quantityHandler("-") }>
              -
            </QuantityButton>
            <QuantityButton onClick={ () => quantityHandler("+") }>
              +
            </QuantityButton>
            <QuantityButton onClick={ () => handleCart() }>
              ADD TO CART
            </QuantityButton>
          </div>
        </ProductDisplay>

        <Category
          products={ allSpecificCategoryProducts
            .filter((product) => product.id != productId)
            .slice(0, 4) }
        />
      </ProductPageWrapper>
    </WindowContainer>
  );
}

export async function getServerSideProps(context) {
  const singleProduct = await getProduct(context.params.productId);
  const allSpecificCategoryProducts = await getSpecificCategoryProducts({
    category: singleProduct.category,
  });
  return {
    props: {
      params: context.params,
      singleProduct,
      allSpecificCategoryProducts,
    },
  };
}

export default withNavAndFooter(ProductPage);
