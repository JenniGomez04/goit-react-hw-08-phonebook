import { useDispatch } from 'react-redux'; // Importa el hook useDispatch de react-redux
import { FilterLabel } from './Filter.styled'; // Importa el componente FilterLabel desde el archivo Filter.styled.js
import { setFilterContacts } from '../../redux/contacts/filterSlice'; // Importa la acción setFilterContacts desde el slice de filtro de contactos

export function Filter() {
  const dispatch = useDispatch(); // Inicializa la función dispatch utilizando el hook useDispatch

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value)); // Despacha la acción setFilterContacts con el nuevo valor del campo de texto como argumento
  };

  return (
    <FilterLabel>
      Find contact by the name
      <input type="text" name="filter" onChange={handlerFilter} placeholder='🔎 Search' /> {/* Campo de texto para filtrar por nombre */}
    </FilterLabel>
  );
}


