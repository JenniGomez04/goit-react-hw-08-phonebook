import { createSlice } from '@reduxjs/toolkit';

const initialStateFilters = { filter: '' }; // Estado inicial de los filtros

// Creación del slice de filtros utilizando createSlice de @reduxjs/toolkit
const filterSlice = createSlice({
  name: 'filters', // Nombre del slice
  initialState: initialStateFilters, // Estado inicial de los filtros
  reducers: {
    // Reducer para establecer el filtro de contactos
    setFilterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

// Exportar la acción "setFilterContacts" del slice
export const { setFilterContacts } = filterSlice.actions;

// Exportar el reducer del slice
export const filtersReducer = filterSlice.reducer;

