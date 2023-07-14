import styled from 'styled-components';


export const ContactLi = styled.li`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;


export const ContactText = styled.p`
  font-size: 18px;
  ::first-letter {
    color: ${p => p.rgb};
  }
  span {
  margin-left: 10px;
  }
`;

export const ContactDelete = styled.button`
  margin-left: auto;
  border: none;
  border-radius: 5px;
  height: 30px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: red;


  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: red;
    cursor: pointer;
  }
`;
