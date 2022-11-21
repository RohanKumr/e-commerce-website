import Loader from "../../components/Loader";
import React, { useEffect } from "react";
import Category from "../../components/category";
import { WindowContainer } from "../../components/commonStyles/styles";
import withNavAndFooter from "../../hooks/withNavAndFooter";
import { CategoryPageWrapper } from "./style";
import { getSingleCategoryProducts } from "../../redux/slices/prodcutSlice";
import { useDispatch, useSelector } from "react-redux";

function CategoryPage(props) {
  const dispatch = useDispatch();
  const { category } = props.params;
  const { singleCategoryProducts } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getSingleCategoryProducts({ category }));
  }, []);

  if (singleCategoryProducts?.loading) return <Loader />;
  return (
    <CategoryPageWrapper>
      <WindowContainer>
        <Category products={singleCategoryProducts?.data} />
      </WindowContainer>
    </CategoryPageWrapper>
  );
}

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default withNavAndFooter(CategoryPage);
