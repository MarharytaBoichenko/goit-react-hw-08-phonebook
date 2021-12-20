import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    // const filter = getFilter(state);
    // const contacts = getContacts(state);
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    if (!contacts) {
      return;
    }
    return contacts.filter((contact) =>
      contact.name.toString().toLowerCase().includes(normalizedFilter)
    );
  }
);

// const getVisibleContact = () => {
//   const normalizedFilter = filter.toLowerCase();
//   console.log(contacts);
//   if (!contacts) {
//     return;
//   }
//   return contacts.filter((contact) =>
//     contact.name.toString().toLowerCase().includes(normalizedFilter)
//   );
// };

// const visibleContacts = getVisibleContact();
