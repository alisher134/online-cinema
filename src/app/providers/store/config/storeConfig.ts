import { configureStore } from '@reduxjs/toolkit';

import { extraArgument } from './extraArgument';
import { reducers } from './reducers';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ExtraArgument = typeof extraArgument;
