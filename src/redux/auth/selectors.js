export const selectIsLoggedIn = state => state.auth.isLoggedIn; // Selector para acceder al estado de inicio de sesión, isLoggedIn dentro del slice auth
export const selectUser = state => state.auth.user; // Selector para acceder a los datos del usuario, user dentro del slice auth
export const selectIsRefreshing = state => state.auth.isRefreshing; // Selector para acceder al estado de actualización de usuario, isRefreshing dentro del slice auth
