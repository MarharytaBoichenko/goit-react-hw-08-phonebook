import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  replaceContacts,
} from './operations';

export const contactReducer = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => {
    return action.payload;
  },
  [addContacts.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },

  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [replaceContacts.fulfilled]: (state, action) => {
    return [...state].map(contact => {
      console.log(action.payload);
      if (contact.id === action.payload.id) {
        return action.payload;
      }
      return contact;
    });
  },
  //   console.log(action.payload);
  //   console.log(state);
  //   return action.payload;
  // },
});

export const ErrorReducer = createReducer(null, {
  [addContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [replaceContacts.rejected]: (state, action) => action.payload,
});

export const loadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
  [replaceContacts.pending]: () => true,
  [replaceContacts.rejected]: () => false,
  [replaceContacts.fulfilled]: () => false,
});
