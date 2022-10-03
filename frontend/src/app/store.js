import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import closetItemsReducer from '../features/closetItems/closetItemSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    closetItems: closetItemsReducer
  },
});
