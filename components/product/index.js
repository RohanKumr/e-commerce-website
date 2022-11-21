import React from "react";
import { ProductContainer, Title } from "./style";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Product(props) {
  const { limited, product } = props;
  const { title, image, category, description, price, id } = product;
  const router = useRouter();
  const goToProductPage = () => router.push(`/product/${id}`);

  if (limited) {
    return (
      <ProductContainer onClick={goToProductPage}>
        {imageComponent(image, title)}
        <Title>{title}</Title>
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
