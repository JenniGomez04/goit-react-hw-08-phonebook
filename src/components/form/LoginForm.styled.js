import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 // height: 80vh;
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 280px;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
`;

export const LoginButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 20px;
  background-color: #4d94d0;
  color: white;
  border: none;
  cursor: pointer;
`;
