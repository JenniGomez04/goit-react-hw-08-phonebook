import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, // Aquí podrías agregar tus propios reducers personalizados si es necesario
  extraReducers: builder => {
    builder
      // Reducer para la acción 'register.fulfilled'
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user; // Actualiza el campo 'user' del estado con los datos del usuario provenientes de 'action.payload.user'
        state.token = action.payload.token; // Actualiza el campo 'token' del estado con el token proveniente de 'action.payload.token'
        state.isLoggedIn = true; // Establece el campo 'isLoggedIn' del estado como 'true' para indicar que el usuario ha iniciado sesión
      })
      // Reducer para la acción 'logIn.fulfilled'
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user; // Actualiza el campo 'user' del estado con los datos del usuario provenientes de 'action.payload.user'
        state.token = action.payload.token; // Actualiza el campo 'token' del estado con el token proveniente de 'action.payload.token'
        state.isLoggedIn = true; // Establece el campo 'isLoggedIn' del estado como 'true' para indicar que el usuario ha iniciado sesión
      })
      // Reducer para la acción 'logOut.fulfilled'
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null }; // Restablece el campo 'user' del estado con valores nulos para indicar que no hay usuario autenticado
        state.token = null; // Restablece el campo 'token' del estado como nulo para indicar que no hay token de autenticación
        state.isLoggedIn = false; // Establece el campo 'isLoggedIn' del estado como 'false' para indicar que el usuario ha cerrado sesión
      })
      // Reducer para la acción 'refreshUser.pending'
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true; // Establece el campo 'isRefreshing' del estado como 'true' para indicar que se está actualizando la información del usuario
      })
      // Reducer para la acción 'refreshUser.fulfilled'
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload; // Actualiza el campo 'user' del estado con los nuevos datos del usuario provenientes de 'action.payload'
        state.isLoggedIn = true; // Establece el campo 'isLoggedIn' del estado como 'true' para indicar que el usuario sigue autenticado
        state.isRefreshing = false; // Establece el campo 'isRefreshing' del estado como 'false' para indicar que se ha completado la actualización de la información del usuario
      })
      // Reducer para la acción 'refreshUser.rejected'
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false; // Establece el campo 'isRefreshing' del estado como 'false' para indicar que se ha producido un error al actualizar la información del usuario
      });
  },
});

export const authReducer = authSlice.reducer;
