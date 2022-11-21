import React from "react";
import { CategoryWrapper, ProductsWrapper } from "./style";
import Product from "../product";
import { useRouter } from "next/router";

export default function Category(props) {
  const { products } = props;
  const router = useRouter();

  const goToCategoryPage = () => router.push(`/${products[0].category}`);
  return (
    <CategoryWrapper>
      <h2 onClick={goToCategoryPage}>{products[0]?.category}</h2>
      <ProductsWrapper>
        {products?.map((product) => (
          <Product key={product.id} limited product={product} />
        ))}
      </ProductsWrapper>
    </CategoryWrapper>
  );
}
