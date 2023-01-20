import React from "react";
import { ProductContainer, Title, LimitedDetails, Add } from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { addToCart } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Product(props) {
  const { limited, product } = props;
  const { title, image, category, description, price, id } = product;
  const router = useRouter();
  const dispatch = useDispatch();

  const goToProductPage = (e) => {
    router.push(`/product/${id}`);
  };

  const handleCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ product }));
    toast("Added to Cart!");
  };
  if (limited) {
    return (
      <ProductContainer onClick={goToProductPage}>
        {imageComponent(image, title)}
        <LimitedDetails>
          <Title>{title}</Title>
          <div className="price-section">
            <div className="price">$ {price.toFixed(2)}</div>
            <Add onClick={handleCart}>Add</Add>
          </div>
        </LimitedDetails>
      </ProductContainer>
    );
  }

  return (
    <ProductContainer>
      {imageComponent(image, title)}
      <Title>{title}</Title>
      <div>Category: {category}</div>
      <div>description: {description}</div>
      <div>price: {price}</div>
    </ProductContainer>
  );
}

const imageComponent = (image, title) => (
  <div className="img-wrapper">
    <Image
      priority
      width={200}
      height={200}
      alt={title}
      // Layout="fill"
      // ObjectFit="contain"
      src={image}
    />
  </div>
);
