import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  products: [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialData,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.pPrice);
    },
    deleteR: (state, action) => {
      state.cart = state.cart.filter(
        (i, index) => index !== action.payload.index
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { purchase, deleteR } = productSlice.actions;
export default productSlice.reducer;
