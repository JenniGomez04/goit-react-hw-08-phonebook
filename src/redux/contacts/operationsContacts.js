import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Configuración global de la URL base para las peticiones
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Thunk asincrónico para obtener todos los contactos
export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll', // Nombre de la acción generada
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data; // Devolver los datos obtenidos
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!'); // Mostrar un mensaje de error
      return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
    }
  }
);

// Thunk asincrónico para agregar un contacto
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact', // Nombre de la acción generada
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success(`${name} is added to the contact list!`); // Mostrar un mensaje de éxito
      return response.data; // Devolver los datos obtenidos
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!'); // Mostrar un mensaje de error
      return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
    }
  }
);

// Thunk asincrónico para eliminar un contacto
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact', // Nombre de la acción generada
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.info(`This contact is deleted from your phonebook!`); // Mostrar un mensaje informativo
      return response.data; // Devolver los datos obtenidos
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!'); // Mostrar un mensaje de error
      return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
    }
  }
);

