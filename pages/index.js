import React, { useEffect } from "react";
import Navbar from "../page-assets/Navbar";
import Category from "../components/category";
import { WindowContainer } from "../components/commonStyles/styles";
import Footer from "../page-assets/Footer";
import Loader from "../components/Loader";
import { fetchAllCategoryProducts } from "../redux/slices/prodcutSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchAllCategoryProducts());
  }, []);

  if (allProducts.loading && allProducts.data.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <WindowContainer>
        {allProducts.data.map((products, i) => (
          <Category key={i} products={products} />
        ))}
      </WindowContainer>
      <Footer />
    </div>
  );
}
