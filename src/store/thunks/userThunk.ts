import { createAsyncThunk } from '@reduxjs/toolkit';
import jsonServer from '../../apis/jsonServer.ts';
import { User } from '../../models';

export const getUsers = createAsyncThunk(
  'users/get',
  async () => {
    await new Promise(r => setTimeout(r, 3000));
    const response = await jsonServer.get<User[]>('/users');
    return response.data;
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async (user: Omit<User, 'id'>) => {
    await new Promise(r => setTimeout(r, 3000));
    // throw new Error('JMPC');
    const response = await jsonServer.post<User>('/users', user);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (user: User) => {
    await new Promise(r => setTimeout(r, 3000));
    await jsonServer.delete(`/users/${user.id}`);
    return user;
  }
);
