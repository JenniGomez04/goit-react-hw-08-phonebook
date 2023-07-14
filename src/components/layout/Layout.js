import { Suspense } from 'react'; // Importación de React
import { Outlet } from 'react-router-dom'; // Importación del componente Outlet de react-router-dom
import { Container, Header, PageContainer } from './Layout.styled'; // Importación de componentes estilizados
import Navigation from 'components/navigation/Navigation'; // Importación del componente Navigation

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation /> {/* Renderiza el componente Navigation dentro del encabezado */}
      </Header>

      <PageContainer>
        <Suspense fallback={null}> {/* Muestra un fallback (valor por defecto) mientras se carga el contenido */}
          {}
          <Outlet /> {/* Renderiza el componente Outlet proporcionado por react-router-dom */}
        </Suspense>
      </PageContainer>


    </Container>
  );
};

export default Layout; // Exporta el componente Layout

