import { RegisterForm } from 'components/form/RegisterForm'; // Importa el componente RegisterForm desde 'components/form/RegisterForm'
import { NavLink } from 'react-router-dom'; // Importa el componente NavLink de 'react-router-dom'
import RegisterIcon from '../../Images/Registro.png'; // Importa el icono de registro desde '../../Images/Registro.png'
import { RegisterContainer, Title, ImageContainer, Text } from './Register.styled'; // Importa los componentes RegisterContainer, Title, ImageContainer y Text desde './Register.styled'

const Register = () => {
  return (
    <RegisterContainer>
      <Title>Registration</Title> {/* Título de la página de registro */}
      <ImageContainer>
        <img src={RegisterIcon} alt="Icono-Libreta" width={90} /> {/* Muestra el icono de registro */}
      </ImageContainer>
      <RegisterForm /> {/* Renderiza el componente RegisterForm */}
      <Text>
        Already registered? <NavLink to={'/login'}>Log In</NavLink> {/* Enlace para iniciar sesión utilizando el componente NavLink */}
      </Text>
    </RegisterContainer>
  );
};

export default Register; // Exporta el componente Register como el componente por defecto

