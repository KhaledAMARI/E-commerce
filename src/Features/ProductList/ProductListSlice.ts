import { createSlice } from '@reduxjs/toolkit';
import productImg from "../../assets/images/product.svg";


export const productListSlice = createSlice({
  name: 'productList',
  initialState: [
    {
      id: "1",
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      id: "2",
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      id: "3",
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      id: "4",
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
  }
},
});

// this is for dispatch
export const { addProduct } = productListSlice.actions;

// this is for configureStore
export default productListSlice.reducer;
