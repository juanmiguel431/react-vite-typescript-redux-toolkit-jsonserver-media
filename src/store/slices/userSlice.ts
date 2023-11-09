import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';
import { getUsers, addUser, deleteUser } from '../thunks/userThunk.ts';

type State = {
  loading: boolean;
  items: User[];
  error: any;
};
const initialState: State = {
  loading: true,
  items: [],
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
      state.error = null;
    });

    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter(p => p.id !== action.payload.id)
      state.error = null;
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  }
});

export default userSlice;
