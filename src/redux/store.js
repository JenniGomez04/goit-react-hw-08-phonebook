import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filtersReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/slice';

// Configuración de persistencia para el estado de autenticación
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Creación del store de Redux utilizando configureStore de @reduxjs/toolkit
export const store = configureStore({
  // Configuración de los reducers
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), // Reducer de autenticación con persistencia
    contacts: contactsReducer, // Reducer de contactos
    filters: filtersReducer, // Reducer de filtros
  },
  // Configuración del middleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Configuración de la comprobación de serialización para ignorar acciones específicas
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Creación del persistor para almacenar el estado persistente
export const persistor = persistStore(store);
