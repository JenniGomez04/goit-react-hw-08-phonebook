import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectors';

// Componente de ruta privada que redirige al usuario si no está autenticado
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // Obtener el estado de autenticación del Redux store
  const isLoggedIn = useSelector(selectIsLoggedIn); 
  const isRefreshing = useSelector(selectIsRefreshing);

  // Verificar si se debe redirigir al usuario
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  // Si se debe redirigir, se usa el componente Navigate de react-router-dom para redireccionar al usuario
  // a la ruta especificada en 'redirectTo'. Si no se debe redirigir, se muestra el componente proporcionado.
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};


