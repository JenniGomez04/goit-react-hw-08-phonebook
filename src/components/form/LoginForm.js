import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ContainerLogin, Label, Input, LoginButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch(); // Hook useDispatch para obtener la función de despacho de acciones
  const errorLogin = useSelector(state => state.error); // Hook useSelector para obtener el valor de error del estado

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ); // Despachar la acción de inicio de sesión (logIn) con los valores del formulario (email y password)

    form.reset();
  };

  return (
    <ContainerLogin>
      {errorLogin && <div>Error login</div>} {/* Mostrar mensaje de error si existe el valor de errorLogin */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <LoginButton type="submit">Log In</LoginButton>
      </form>
    </ContainerLogin>
  );
};

