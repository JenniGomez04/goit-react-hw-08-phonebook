import React from 'react'; // Importación de React
import { ContainerHome, Title, Parragraph, Texth3 } from './Home.styled'; // Importación de componentes estilizados
import iconImage from '../../Images/Icono-Libreta.png'; // Importación de una imagen
import iconImagePhone from '../../Images/telefono.png'; // Importación de otra imagen

const Home = () => {

  return (
    <ContainerHome>
      <Title>Libreta de Contactos</Title> {/* Título principal */}
      <img src={iconImage} alt="Icono-Libreta" width={90}/> {/* Imagen con un ícono de libreta */}
      <Parragraph>
        Nuestra plataforma te ofrece una libreta de contactos segura, pero su mayor beneficio se obtiene
        cuando los usuarios se registran o inician sesión así
        podrán desbloquear todas sus funcionalidades.
      </Parragraph> {/* Párrafo de descripción */}
      <img src={iconImagePhone} alt="Icono-Libreta" width={90}/> {/* Imagen con un ícono de teléfono */}
      <Texth3>Descubre una forma más inteligente de gestionar tus contactos</Texth3> {/* Título secundario */}

    </ContainerHome>
  );
};

export default Home; // Exporta el componente Home
