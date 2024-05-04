import React, { useEffect } from "react";
import Navbar from "../page-assets/Navbar";
import Category from "../components/category";
import { WindowContainer } from "../components/commonStyles/styles";
import Footer from "../page-assets/Footer";
import Loader from "../components/Loader";
import { fetchAllCategoryProducts } from "../redux/slices/prodcutSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductCategories,
  getSpecificCategoryProducts,
} from "../services/product";
import { SimpleSlider } from "../components/simpleSlider";
import { HompageCardsLoader } from "../components/contentLoaders";


export default function Home(props) {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(
      fetchAllCategoryProducts({ providedCategories: props?.categories })
    );
  }, []);
  // if (allProducts.loading && allProducts.data.length === 0) {
  //   return <Loader />;
  // }

  return (
    <div>

      <Navbar />
      <WindowContainer>
        <SimpleSlider />
        { allProducts.loading && allProducts.data.length === 0
          ? props?.categories.map((category) => (
            <div key={ category }>
              <h2>{ category.charAt(0).toUpperCase() + category.slice(1) }</h2>
              <div
                style={ { display: "flex", marginTop: "40px", gap: "20px" } }
              >
                { [1, 2, 3, 4].map((i) => (
                  <HompageCardsLoader key={ i + 2 } />
                )) }
              </div>
            </div>
          ))
          : allProducts.data.map((products, i) => (
            <Category key={ i } products={ products } />
          )) }
      </WindowContainer>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // const categories = await getAllProductCategories();
  return {
    props: {
      categories: [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
      ],
    },
  };
}
