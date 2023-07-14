
export const selectContacts = state => state.contacts.items; // Selector para obtener el array de contactos del estado
export const selectIsLoading = state => state.contacts.isLoading; // Selector para obtener el estado de carga del estado
export const selectError = state => state.contacts.error; // Selector para obtener el valor de error del estado
export const selectContactsFilter = state => state.filters.filter; // Selector para obtener el valor del filtro del estado

