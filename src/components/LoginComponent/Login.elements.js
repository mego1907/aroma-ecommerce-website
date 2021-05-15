import styled from 'styled-components';
import {Container} from '../../GlobalStyle'

export const LoginSec = styled.section`
  display: flex;
  margin: 4rem 0;
`;

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const LoginForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  
`;

export const Input = styled.input`
  padding: 12px 10px;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.5);
  width: 20rem;
  margin: 10px;
  outline: none;
  font-size: 16px;


  @media screen and  (max-width: 767px){
    width: 100%;
  }
`;

export const Button = styled.button`
  margin: 24px 10px;
  color: #fff;
  padding: 10px 35px;
  background-color: #384aeb;
  border: 1px solid #384aeb;
  border-radius: 25px;
  transition: all 0.3s linear;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;


  &:hover{
    border: 1px solid #384aeb;
    color: #384aeb;
    background-color: transparent;
  }
`;