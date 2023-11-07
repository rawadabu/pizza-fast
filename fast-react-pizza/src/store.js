import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/UserSlice';
import cartSlice from './features/cart/CartSlice';

const store = configureStore({
  reducer: { user: userReducer, cart: cartSlice },
});

export default store;
