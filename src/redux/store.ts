import { configureStore } from '@reduxjs/toolkit';
import deliveriesReducer from '../features/usersSlice';
import userModalSlice from '../features/userModalSlice';
export const store = configureStore({
  reducer: {
    deliveries: deliveriesReducer,
    deliveryModal: userModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
