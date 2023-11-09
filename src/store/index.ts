import { configureStore } from '@reduxjs/toolkit';
import * as actions from './actions';
import * as thunks from './thunks';
import userSlice from './slices/userSlice.ts';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }
});

export const actionCreators = {
  ...userSlice.actions,
  ...actions,
  ...thunks
};

//https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
