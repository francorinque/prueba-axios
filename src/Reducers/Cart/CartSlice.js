import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productsList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      (state.productsList = [...state, action.payload]),
        (state.totalCount += 1);
    },
  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
