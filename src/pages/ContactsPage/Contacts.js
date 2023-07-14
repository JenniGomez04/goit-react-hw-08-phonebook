import { useSelector, useDispatch } from 'react-redux'; // Importa los hooks useSelector y useDispatch de 'react-redux'
import { useEffect } from 'react'; // Importa el hook useEffect de 'react'
import { getContactsThunk } from '../../redux/contacts/operationsContacts'; // Importa la operación getContactsThunk desde '../../redux/contacts/operationsContacts'
import { ContactList } from 'components/contacts/ContactList'; // Importa el componente ContactList desde 'components/contacts/ContactList'
import { Filter } from 'components/filter/Filter'; // Importa el componente Filter desde 'components/filter/Filter'
import ContactForm from 'components/form/ContactForm'; // Importa el componente ContactForm desde 'components/form/ContactForm'
import { selectIsLoading, selectError } from '../../redux/contacts/selectorsContacts'; // Importa los selectores selectIsLoading y selectError desde '../../redux/contacts/selectorsContacts'
import { Title } from './Contacts.styled'; // Importa el componente Title desde './Contacts.styled'

const Contacts = () => {
  const dispatch = useDispatch(); // Obtiene la función de despacho de acciones useDispatch
  const isLoading = useSelector(selectIsLoading); // Obtiene el valor de isLoading del estado utilizando el selector selectIsLoading
  const error = useSelector(selectError); // Obtiene el valor de error del estado utilizando el selector selectError

  useEffect(() => {
    dispatch(getContactsThunk()); // Despacha la acción getContactsThunk para obtener los contactos al montar el componente
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Title>Phonebook 📲</Title> {/* Título de la lista de contactos */}
      <ContactForm /> {/* Renderiza el componente ContactForm para agregar nuevos contactos */}
      <Filter /> {/* Renderiza el componente Filter para filtrar los contactos */}
      <ContactList /> {/* Renderiza el componente ContactList para mostrar la lista de contactos */}
    </div>
  );
};

export default Contacts; // Exporta el componente Contacts como componente por defecto
