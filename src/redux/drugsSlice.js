import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToOrder, fetchDrugsAll } from "../services/api";

export const requestDrugs = createAsyncThunk(
  "drugs/get",
  async (_, thunkApi) => {
    try {
      const drugsData = await fetchDrugsAll();
      return drugsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addNewOrder = createAsyncThunk(
  "order/add",
  async (newOrder, thunkApi) => {
    try {
      const orderData = await addToOrder(newOrder);
      console.log(orderData);
      return orderData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  drugsData: [],
  cart: [],
  isLoading: false,
  error: null,
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteCart(state, action) {
      state.cart = state.cart.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
    },
    updateCart(state, action) {
      const { drug, quantity } = action.payload;

      const updatedCart = state.cart.map((item) => {
        if (item._id === drug._id) {
          return { ...item, quantity };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    },
    refreshCart(state, cart) {
      state.cart = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(requestDrugs.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDrugs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.drugsData.push(...action.payload.drugs);
      })
      .addCase(requestDrugs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewOrder.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addToCart, deleteCart, setCart, updateCart, refreshCart } =
  drugsSlice.actions;

export const drugsReducer = drugsSlice.reducer;
