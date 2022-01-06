import { createAction } from "@reduxjs/toolkit";

export const addContactsSuccess = createAction("contacts/addContactsSuccess");
export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsError = createAction("contacts/addContactsError");

export const deleteContactsSuccess = createAction(
  "contacts/deleteContactsSuccess"
);
export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const changeFilter = createAction("filter/change");
