import { configureStore } from '@reduxjs/toolkit';
import productListReducer from '../Features/ProductList/ProductListSlice';
import cartReducer from '../Features/Cart/CartSlice';

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch