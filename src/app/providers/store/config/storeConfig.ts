import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@/entities/auth';

const reducers = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
