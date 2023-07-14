import { LoginForm } from 'components/form/LoginForm'; // Importa el componente LoginForm de 'components/form/authForms/LoginForm'
import { NavLink } from 'react-router-dom'; // Importa el componente NavLink de 'react-router-dom'
import { ContainerLogin, Title, Text } from './Login.styled'; // Importa los componentes ContainerLogin, Title y Text desde './Login.styled'
import LoginIcon from '../../Images/perfil-del-usuario.png';

const Login = () => {
  return (
    <ContainerLogin>
      <Title>Log In</Title> {/* Título del formulario de inicio de sesión */}
      <img src={LoginIcon} alt="Icono-Libreta" width={90}/>
      <LoginForm /> {/* Renderiza el componente LoginForm */}
      <Text>
        Don't have an account? <NavLink to="/register">Sign up</NavLink> {/* Enlace para registrarse utilizando el componente NavLink */}
      </Text>
    </ContainerLogin>
  );
};

export default Login; // Exporta el componente Login como componente por defecto
