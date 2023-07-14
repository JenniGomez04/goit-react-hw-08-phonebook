import { useSelector, useDispatch } from 'react-redux'; // Importación de React Redux
import { logOut } from '../../redux/auth/operations'; // Importación de una operación de Redux
import { selectUser } from '../../redux/auth/selectors'; // Importación de un selector de Redux
import { UserTitle } from './UserMenu.styled'; // Importación de componentes estilizados

const UserMenu = () => {
  const dispatch = useDispatch(); // Obtiene la función 'dispatch' de Redux
  const user = useSelector(selectUser); // Obtiene el estado del usuario del store de Redux

  return (
    <UserTitle>
      <p>Welcome {user.name}</p> {/* Muestra el nombre del usuario */}
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> {/* Botón para cerrar sesión, al hacer clic se llama a la operación 'logOut' */}
    </UserTitle>
  );
};

export default UserMenu; // Exporta el componente UserMenu

