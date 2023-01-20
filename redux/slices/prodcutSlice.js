import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProduct,
  getAllProductCategories,
  getSpecificCategoryProducts,
} from "../../services/product";

export const fetchAllCategoryProducts = createAsyncThunk(
  "product/getProducts",
  async ({ providedCategories }, { rejectWithValue }) => {
    try {
      const categories =
        providedCategories || (await getAllProductCategories());
      const fetchedCategoryProducts = categories
        ?.reverse()
        ?.map((category) =>
          getSpecificCategoryProducts({ category, limit: 4 })
        );
      return Promise.all(fetchedCategoryProducts);
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/getProduct",
  async ({ productId, singleProduct }, { rejectWithValue }) => {
    try {
      const data = singleProduct || (await getProduct(productId));
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const getSingleCategoryProducts = createAsyncThunk(
  "product/getSingleCategoryProducts",
  async ({ category, productsData }, { rejectWithValue }) => {
    try {
      const products =
        productsData || (await getSpecificCategoryProducts({ category }));
      return products;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const initialState = {
  currentProduct: {
    loading: false,
    isSuccess: false,
    message: "",
    data: [],
  },
  allProducts: {
    loading: false,
    isSuccess: false,
    message: "",
    data: [],
  },
  singleCategoryProducts: {
    loading: false,
    isSuccess: false,
    message: "",
    data: [],
  },
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { type, payload }) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoryProducts.pending, (state, { payload }) => {
        state.allProducts.loading = true;
      })
      .addCase(fetchAllCategoryProducts.fulfilled, (state, { payload }) => {
        state.allProducts.loading = false;
        state.allProducts.data = payload;
        state.allProducts.isSuccess = true;
      })
      .addCase(fetchAllCategoryProducts.rejected, (state, { payload }) => {
        state.allProducts.loading = false;
        state.allProducts.message = payload;
        state.allProducts.isSuccess = false;
      })
      .addCase(getSingleProduct.pending, (state, { payload }) => {
        state.currentProduct.loading = true;
        state.currentProduct.data = initialState.currentProduct;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.currentProduct.loading = false;
        state.currentProduct.data = payload;
        state.currentProduct.isSuccess = true;
      })
      .addCase(getSingleProduct.rejected, (state, { payload }) => {
        state.currentProduct.loading = false;
        state.currentProduct.message = payload;
        state.currentProduct.isSuccess = false;
      })
      .addCase(getSingleCategoryProducts.pending, (state, { payload }) => {
        state.singleCategoryProducts.loading = true;
      })
      .addCase(getSingleCategoryProducts.fulfilled, (state, { payload }) => {
        state.singleCategoryProducts.loading = false;
        state.singleCategoryProducts.data = payload;
        state.singleCategoryProducts.isSuccess = true;
      })
      .addCase(getSingleCategoryProducts.rejected, (state, { payload }) => {
        state.singleCategoryProducts.loading = false;
        state.singleCategoryProducts.message = payload;
        state.singleCategoryProducts.isSuccess = false;
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
