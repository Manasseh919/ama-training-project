import { configureStore } from '@reduxjs/toolkit';
import productRequestsReducer from './features/product-requests.js/productRequestsSlice';

export const store = configureStore({
   reducer: {
      productRequests: productRequestsReducer,
   },
});