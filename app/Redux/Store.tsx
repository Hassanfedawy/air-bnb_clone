// Redux/Store.ts
import { configureStore } from '@reduxjs/toolkit';
import guestsReducer from './Slices/Guests';
import { useDispatch } from 'react-redux';

// Define the RootState and AppDispatch types
export const store = configureStore({
  reducer: {
    guests: guestsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export typed `useAppDispatch` hook
export const useAppDispatch: () => AppDispatch = useDispatch;
