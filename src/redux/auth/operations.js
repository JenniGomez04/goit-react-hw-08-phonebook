import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Configuración global de la URL base para las peticiones
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Función para establecer el encabezado de autenticación con el token
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Función para limpiar el encabezado de autenticación
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Thunk asincrónico para el registro de un usuario
export const register = createAsyncThunk(
  'auth/register', // Nombre de la acción generada
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token); // Establecer el encabezado de autenticación
      toast.success('Welcome to phonebook!'); // Mostrar un mensaje de éxito
      return response.data; // Devolver los datos obtenidos
    } catch (error) {
      toast.error(`${error.message}`); // Mostrar un mensaje de error
      return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
    }
  }
);

// Thunk asincrónico para el inicio de sesión de un usuario
export const logIn = createAsyncThunk(
  'auth/login', // Nombre de la acción generada
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token); // Establecer el encabezado de autenticación
      toast.success('Welcome back!'); // Mostrar un mensaje de éxito
      return response.data; // Devolver los datos obtenidos
    } catch (error) {
      toast.error('Wrong password or email. Please try again!'); // Mostrar un mensaje de error
      return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
    }
  }
);

// Thunk asincrónico para el cierre de sesión de un usuario
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader(); // Limpiar el encabezado de autenticación
  } catch (error) {
    toast.error(`${error.message}`); // Mostrar un mensaje de error
    return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
  }
});

// Thunk asincrónico para actualizar la información del usuario
export const refreshUser = createAsyncThunk(
  'auth/refresh', // Nombre de la acción generada
  async (_, thunkAPI) => {
    // Leer el token del estado utilizando getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user'); // Rechazar la acción con un mensaje de error
    }
    setAuthHeader(persistedToken); // Establecer el encabezado de autenticación
    try {
      const res = await axios.get('/users/current');
      return res.data; // Devolver los datos obtenidos
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // Rechazar la acción con el valor del error
    }
  }
);
