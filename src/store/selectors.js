import { createSelector } from '@reduxjs/toolkit';

export const selectGetContacts = state => state.contacts.items;
export const selectGetFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectGetContacts, selectGetFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
