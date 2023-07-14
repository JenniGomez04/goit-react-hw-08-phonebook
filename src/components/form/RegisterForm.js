import { useDispatch } from 'react-redux'; // Importa el hook useDispatch de 'react-redux'
import { register } from 'redux/auth/operations'; // Importa la acción register desde 'redux/auth/operations'
import { Label, Input, SubmitButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch(); // Obtiene la función de despacho de acciones useDispatch

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value, // Obtiene el valor del campo 'name' del formulario
        email: form.elements.email.value, // Obtiene el valor del campo 'email' del formulario
        password: form.elements.password.value, // Obtiene el valor del campo 'password' del formulario
      })
    );
    form.reset(); //para restablecer los campos del formulario después de enviarlo
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        User
        <Input
          type="text"
          name="name"
          required
          placeholder="Carlos Cross"
          minLength={3}
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
          placeholder="carloscross@gmail.com"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          required
          placeholder="*******"
        />
      </Label>
      <SubmitButton type="submit">Register</SubmitButton>
    </form>
  );
};

