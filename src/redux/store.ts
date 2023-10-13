import { configureStore } from '@reduxjs/toolkit';
import { projectSlice } from './projectSlice';
import { portfolioSlice } from './portfolioSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    projects: projectSlice.reducer,
    portfolio: portfolioSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()