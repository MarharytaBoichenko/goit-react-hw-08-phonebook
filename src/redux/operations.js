import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// https://connections-api.herokuapp.com/users/signup

// axios.defaults.baseURL = 'https://61b7b24c64e4a10017d18c66.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContactsStatus',
  async () => {
    // const response = await axios.get("/contacts");
    // return response.data;
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      console.log(err);
      //   return rejectWithValue(err.response.data);
    }
  },
);

export const addContacts = createAsyncThunk(
  'contacts/addContactsStatus',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = { name, number };
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const replaceContacts = createAsyncThunk(
  'contacts/replaceContactsStatus',
  async ({ id, name, number }, { rejectWithValue }) => {
    const contact = { name: name, number: number };
    try {
      const response = await axios.patch(`/contacts/${id}`, contact);
      console.log(response);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContactsStatus',
  async (id, { rejectWithValue }) => {
    try {
      ///axios не возвращает ничего  при удалении  delete
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  },
);
