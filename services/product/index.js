import { getRequestAsync } from "../apiInstance";
import apiConfig from "../../config/apiConfig";

const getAllProductCategories = () => {
  return getRequestAsync({
    url: `${apiConfig.api_endpoint}/products/categories`,
  });
};
const getProduct = (productId) => {
  return getRequestAsync({
    url: `${apiConfig.api_endpoint}/products/${productId}`,
  });
};

const getSpecificCategoryProducts = ({
  category,
  limit = 10,
  sort = "asc",
}) => {
  //sort = asc|desc
  return getRequestAsync({
    url: `${apiConfig.api_endpoint}/products/category/${category}?limit=${limit}&sort=${sort}`,
  });
};

export { getAllProductCategories, getSpecificCategoryProducts, getProduct };
