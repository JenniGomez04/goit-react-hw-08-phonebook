import { useDispatch, useSelector } from 'react-redux'; // Importación de Redux
import { addContactsThunk } from '../../redux/contacts/operationsContacts'; // Importación de una operación de Redux
import { toast } from 'react-toastify'; // Importación de la biblioteca react-toastify
import { selectContacts } from '../../redux/contacts/selectorsContacts'; // Importación de un selector de Redux
import { FormContainer, Name, Input, AddButton } from './ContactForm.styled'; // Importación de componentes estilizados

const ContactForm = () => {
  const dispatch = useDispatch(); // Obtiene la función 'dispatch' de Redux
  const contacts = useSelector(selectContacts); // Obtiene el estado de los contactos del store de Redux

  function handlerSubmit(evt) {
    evt.preventDefault(); // Previene el comportamiento predeterminado del formulario
    const form = evt.target; // Obtiene el formulario actual
    const name = form.name.value; // Obtiene el valor del campo 'name' del formulario
    const number = form.number.value; // Obtiene el valor del campo 'number' del formulario

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.warn(`${name} is already in contacts.`); // Muestra una notificación si el contacto ya existe
    }

    dispatch(addContactsThunk({ name, number })); // Llama a la operación 'addContactsThunk' para agregar un nuevo contacto

    form.reset(); // Restablece el formulario a su estado inicial
  }

  return (
    <FormContainer>
      <form onSubmit={handlerSubmit}>
        <ul>
          <li>
            <Name>Name</Name>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder=' Santiago Bogan'
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </li>
          <li>
            <Name>Contact</Name>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder='668-471-1380'
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </li>
        </ul>

        <AddButton type="submit">
         + Add contact
        </AddButton>
      </form>
    </FormContainer>
  );
};

export default ContactForm; // Exporta el componente ContactForm


