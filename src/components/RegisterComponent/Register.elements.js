import styled from 'styled-components';
// import Container from GlobalStyle
import {Container} from '../../GlobalStyle';
// import Button from Login.elements
import {Button} from '../LoginComponent/Login.elements'


export const RegisterSec = styled.section`
  margin: 4rem 0;
`;

export const RegisterContainer = styled(Container)`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;

  h3 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const RegisterBtn = styled(Button)`
  border-radius: 0;
  background-color: #c5322d;
  border: 1px solid #c5322d;

  &:hover {
    background-color: transparent;
    border: 1px solid #c5322d;
    color: #c5322d;
  }
  ${Button}
`;