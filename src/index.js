import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// Crear el punto de montaje para la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/*Modo estricto de React para detectar posibles problemas en el código */}
    <BrowserRouter basename="/goit-react-hw-08-phonebook"> {/* Configuración del enrutador de navegación para la aplicación */}
      <Provider store={store}> {/* Proveedor de Redux para proporcionar el estado global a los componentes */}
        <PersistGate loading={null} persistor={persistor}> {/* Componente de puerta de enlace de persistencia para cargar y almacenar el estado persistente */}
          <App /> {/* Componente raíz de la aplicación */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
