import { configureStore } from "@reduxjs/toolkit";
// import { reducers } from "./reducers";
import productSlice from "./slices/prodcutSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});

export default store;
