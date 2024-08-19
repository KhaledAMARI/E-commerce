import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      //@ts-expect-error typescript error
      state.push(action.payload);
  },
    removeProduct: (state, action) => {
      state.forEach((item, index) => {
      //@ts-expect-error typescript error
        if (item.id === action.payload) {
            state.splice(index, 1);
        }
      });
  }
},
});

// this is for dispatch
export const { addProduct, removeProduct } = cartSlice.actions;

// this is for configureStore
export default cartSlice.reducer;
