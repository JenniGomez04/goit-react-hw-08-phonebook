import { useSelector } from 'react-redux'; // Importación de React Redux
import { selectIsLoggedIn } from '../../redux/auth/selectors'; // Importación de un selector de Redux

import UserMenu from 'components/userMenu/UserMenu'; // Importación del componente UserMenu
import { Nav, NavAuthBox, NavBox } from './Navigation.styled'; // Importación de componentes estilizados

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Obtiene el estado de inicio de sesión del store de Redux

  return (
    <>
      <NavBox>
        <Nav to="/">Home</Nav>
        {isLoggedIn ? (
          <Nav to="/contacts">Contacts</Nav>
        ) : (
          <NavAuthBox>
              <Nav to="/register">Register</Nav>
              <Nav to="/login">Log In</Nav>
          </NavAuthBox>
        )}
        {}
      </NavBox>

      {isLoggedIn && <UserMenu />} {/* Renderiza el componente UserMenu si el usuario ha iniciado sesión */}
    </>
  );
};

export default Navigation;
