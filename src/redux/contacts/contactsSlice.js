import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk, addContactsThunk, deleteContactsThunk } from './operationsContacts';

const initialState = {
  items: [], // Array de contactos
  isLoading: false, // Estado de carga
  error: null, // Error
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {}, // No hay reducers adicionales definidos aquí
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, (state) => {
        state.isLoading = true; // Establece isLoading a true en caso de una solicitud pendiente de obtener contactos
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false; // Establece isLoading a false en caso de una solicitud exitosa de obtener contactos
        state.error = null; // Establece el error a null
        state.items = action.payload; // Actualiza el array de contactos con los datos recibidos en la acción
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.isLoading = false; // Establece isLoading a false en caso de una solicitud rechazada de obtener contactos
        state.error = action.payload; // Establece el error con el mensaje de error recibido en la acción
      })
      .addCase(addContactsThunk.pending, (state) => {
        state.isLoading = true; // Establece isLoading a true en caso de una solicitud pendiente de agregar contacto
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false; // Establece isLoading a false en caso de una solicitud exitosa de agregar contacto
        state.error = null; // Establece el error a null
        state.items.push(action.payload); // Agrega el nuevo contacto al array de contactos
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.isLoading = false; // Establece isLoading a false en caso de una solicitud rechazada de agregar contacto
        state.error = action.payload; // Establece el error con el mensaje de error recibido en la acción
      })
      .addCase(deleteContactsThunk.pending, (state) => {
        state.isLoading = true; // Establece isLoading a true en caso de una solicitud pendiente de eliminar contacto
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false; // Establece isLoading a false en caso de una solicitud exitosa de eliminar contacto
        state.error = null; // Establece el error a null
        const index = state.items.findIndex((contact) => contact.id === action.payload.id); // Encuentra el índice del contacto que se va a eliminar
        state.items.splice(index, 1); // Elimina el contacto del array de contactos
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isLoading = false; // Establece isLoading a false en caso de una solicitud rechazada de eliminar contacto
        state.error = action.payload; // Establece el error con el mensaje de error recibido en la acción
      });
  },
});

export const contactsReducer = contactsSlice.reducer;


