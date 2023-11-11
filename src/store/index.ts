import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import * as actions from './actions';
import * as thunks from './thunks';
import userSlice from './slices/userSlice.ts';
import albumsApi from './apis/albumsApi.ts';
import photosApi from './apis/photosApi.ts';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  }
});

setupListeners(store.dispatch);

export const actionCreators = {
  ...userSlice.actions,
  ...actions,
  ...thunks
};

//https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
