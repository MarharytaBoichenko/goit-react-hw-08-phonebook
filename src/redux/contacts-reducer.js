import { createReducer } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";

export const contactReducer = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => {
    console.log(action.payload);
    return action.payload;
  },
  [addContacts.fulfilled]: (state, action) => {
    console.log(action.payload);
    return [...state, action.payload];
  },

  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const ErrorReducer = createReducer(null, {
  [addContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
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
});
