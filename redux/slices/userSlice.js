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
        loginUserAsync({ username, password, id }),
        getAllUsersAsync(),
      ]);
      if (token) {
        const user = await users.filter((user) => user.username === username);
        return { ...user[0], token };
      }
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      return {};
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const createNewUser = createAsyncThunk(
  "user/isCreatedUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { id } = await createUserAsync(arg);
      if (id) return { ...arg, id };
    } catch (err) {
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
  cart: [],
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
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
