import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

// Componente de ruta restringida que redirige al usuario si está autenticado
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // Obtener el estado de autenticación del Redux store
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Verificar si el usuario está autenticado. Si está autenticado, se utiliza el componente Navigate
  // de react-router-dom para redireccionar al usuario a la ruta especificada en 'redirectTo'.
  // Si no está autenticado, se muestra el componente proporcionado.
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
