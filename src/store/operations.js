import * as contactsList from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await contactsList.fetchContacts();
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
      const contact = await contactsList.addContact(newContact);
      return contact.data;
    } catch (error) {}
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const contact = await contactsList.deleteContact(id);
      return contact.data;
    } catch (error) {}
  }
);
