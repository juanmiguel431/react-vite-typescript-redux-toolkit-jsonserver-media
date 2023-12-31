import { createAsyncThunk } from '@reduxjs/toolkit';
import jsonServer from '../../apis/jsonServer.ts';
import { User } from '../../models';

export const getUsers = createAsyncThunk(
  'users/get',
  async () => {
    const response = await jsonServer.get<User[]>('/users');
    return response.data;
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async (user: Omit<User, 'id'>) => {
    const response = await jsonServer.post<User>('/users', user);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (user: User) => {
    await jsonServer.delete(`/users/${user.id}`);
    return user;
  }
);
