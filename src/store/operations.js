import * as contactsApi from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const userPost = createAsyncThunk('user/auth', async user => {
  try {
    const { data } = await contactsApi.userAuth(user);
    console.log(data);
    return data;
  } catch (error) {}
});
export const login = createAsyncThunk('user/login', async user => {
  try {
    const { data } = await contactsApi.userLogin(user);
    console.log(data);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    return await contactsApi.userLogout();
  } catch (error) {}
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const res = await contactsApi.userRefresh();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const postContact = createAsyncThunk(
  'contacts/postContacts',
  async newContact => {
    try {
      const contact = await contactsApi.addContact(newContact);
      return contact.data;
    } catch (error) {}
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const contact = await contactsApi.deleteContact(id);
      return contact.data;
    } catch (error) {}
  }
);
