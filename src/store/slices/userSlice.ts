import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';

type State = {
  items: User[];
};
const initialState: State = {
  items: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
  },
});

export default userSlice;
