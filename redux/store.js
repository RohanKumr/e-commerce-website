import { configureStore } from "@reduxjs/toolkit";
// import { reducers } from "./reducers";
import productSlice from "./slices/prodcutSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
