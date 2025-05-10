import { configureStore } from '@reduxjs/toolkit';
import deliveriesReducer from '../features/deliverySlice';
import deliveryModalSlice from '../features/deliveryModalSlice';
export const store = configureStore({
  reducer: {
    deliveries: deliveriesReducer,
    deliveryModal: deliveryModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
