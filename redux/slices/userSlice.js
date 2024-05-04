// import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserAsync,
  getAllUsersAsync,
  loginUserAsync,
} from "../../services/user";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ username, password, id }, { rejectWithValue }) => {
    try {
      const [{ token }, users] = await Promise.all([
        loginUserAsync({ username: 'johnd', password: "m38rmF$", id }),
        getAllUsersAsync(),
      ]);
      if(token) {
        const user = await users.filter((user) => user.username === username);
        return { ...{ username, password, ...user[0] }, token };
      }
    } catch(err) {
      rejectWithValue(err);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      return {};
    } catch(err) {
      rejectWithValue(err);
    }
  }
);

export const createNewUser = createAsyncThunk(
  "user/isCreatedUser",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await setTimeout(() => {
        return arg;
      }, 1000);;
      const { name, username, password } = data;
      return { name, username, password };
    } catch(err) {
      rejectWithValue(err);
    }
  }
);

export const addToCart = createAsyncThunk(
  "user/addToCart",
  async ({ product }, { rejectWithValue }) => {
    try {
      return product;
    } catch(err) {
      rejectWithValue(err);
    }
  }
);
export const removeFromCart = createAsyncThunk(
  "user/removeFromCart",
  async ({ id, action }, { rejectWithValue }) => {
    try {
      return { id, action };
    } catch(err) {
      rejectWithValue(err);
    }
  }
);

export const toggleCart = createAsyncThunk(
  "user/toggleCart",
  async ({ toggleCart }, { rejectWithValue }) => {
    try {
      return true;
    } catch(err) {
      rejectWithValue(err);
    }
  }
);

const initialState = {
  userData: {
    isLogged: false,
    loading: false,
    message: null,
    isSuccess: false,
    data: [],
  },
  cart: {
    isOpen: false,
    data: [],
  },
  isCreatedUser: {
    loading: false,
    isSuccess: false,
    message: "",
    data: [],
  },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setUser: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state, { payload }) => {
        state.isCreatedUser.loading = true;
      })
      .addCase(createNewUser.fulfilled, (state, { payload }) => {
        state.isCreatedUser.loading = false;
        state.isCreatedUser.isSuccess = true;
        state.isCreatedUser.data = payload;
      })
      .addCase(createNewUser.rejected, (state, { payload }) => {
        state.isCreatedUser.loading = false;
        state.isCreatedUser.message = payload;
        state.isCreatedUser.isSuccess = false;
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.userData.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.userData.loading = false;
        state.userData.isLogged = true;
        state.userData.isSuccess = true;
        state.userData.data = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.userData.loading = false;
        state.userData.message = payload;
        state.userData.isSuccess = false;
      })
      .addCase(logoutUser.pending, (state, { payload }) => {
        state.userData.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.userData = initialState.userData;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.userData.loading = false;
        state.userData.message = payload;
        state.userData.isSuccess = false;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        const matchingIndex = state.cart.data.findIndex(
          (prod) => prod.id == payload.id
        );

        if(matchingIndex !== -1) {
          if(state.cart.data[matchingIndex].quantity == 10) return state;
          state.cart.data[matchingIndex].quantity++;
        } else state.cart.data.push({ ...payload, quantity: 1 });
      })
      .addCase(toggleCart.fulfilled, (state, { payload }) => {
        state.cart.isOpen = !state.cart.isOpen;
      })
      .addCase(removeFromCart.fulfilled, (state, { payload }) => {
        if(payload.action == "quantity") {
          const matchingIndex = state.cart.data.findIndex(
            (prod) => prod.id == payload.id
          );
          if(state.cart.data[matchingIndex].quantity <= 1)
            state.cart.data[matchingIndex].quantity = 1;
          else state.cart.data[matchingIndex].quantity--;
        } else {
          state.cart.data = state.cart.data.filter(
            (prod) => prod.id != payload.id
          );
        }
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
