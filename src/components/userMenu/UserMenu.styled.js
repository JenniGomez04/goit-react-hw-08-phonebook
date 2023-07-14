import styled from 'styled-components';

export const UserTitle = styled.div`
  display: flex;
  justify-content:center;
  gap: 20px;
  align-items: center;

  p {
    font-size: 20px;
    &::first-letter {
      color: blue;
    }
  }

  button {
    padding: 10px;
    background-color: #7e6bc1;
    border: none;
    border-radius: 5px;
    color: white;
    &:hover,
    &:focus {
      background-color: #0fa3cb;
      color: #fff;
      cursor: pointer;
    }
  }
`;
