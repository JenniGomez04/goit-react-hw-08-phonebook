import { useSelector, useDispatch } from 'react-redux'; // Importa los hooks useSelector y useDispatch de 'react-redux'
import { deleteContactsThunk } from 'redux/contacts/operationsContacts'; // Importa la operación deleteContactsThunk desde 'redux/contacts/operationsContacts'
import { selectContacts, selectContactsFilter } from '../../redux/contacts/selectorsContacts'; // Importa los selectores selectContacts y selectContactsFilter desde '../../redux/contacts/selectorsContacts'
import { ContactLi, ContactText, ContactDelete } from './ContactList.styled'; // Importa los componentes ContactsList, ContactItem, ContactIcon, ContactText y ContactDelete desde './ContactList.styles';

export function ContactList() {
  const contacts = useSelector(selectContacts); // Obtiene los contactos del estado utilizando el selector selectContacts
  const filterValue = useSelector(selectContactsFilter).toLowerCase(); // Obtiene el valor del filtro del estado utilizando el selector selectContactsFilter y lo convierte a minúsculas
  const dispatch = useDispatch(); // Obtiene la función de despacho de acciones useDispatch

  const handleDelete = evt => {
    dispatch(deleteContactsThunk(evt.currentTarget.id)); // Despacha la acción deleteContactsThunk pasando el ID del contacto como argumento
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts; // Retorna todos los contactos si no hay un filtro aplicado
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    ); // Retorna los contactos cuyo nombre coincide con el filtro aplicado (ignorando mayúsculas y minúsculas)
  };

  const visibilityContacts = getVisibilityContacts(); // Obtiene los contactos visibles según el filtro

  return (
    <ul>
      {visibilityContacts.map(contact => (
        <ContactLi key={contact.id}>
          <ContactText>
            {contact.name} <span>{contact.number}</span> {/* Nombre y número del contacto */}
          </ContactText>
          <ContactDelete type="button" id={contact.id} onClick={handleDelete}> X </ContactDelete>
        </ContactLi>
      ))}
    </ul>
  );
}
