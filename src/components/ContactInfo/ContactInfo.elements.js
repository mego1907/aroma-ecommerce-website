import styled from 'styled-components';
// import Container from GlobalStyle
import {Container} from '../../GlobalStyle';
// import Icons from ReactIcons
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";



export const ContactSec = styled.section``;

export const ContactContainer = styled(Container)`
  display: flex;

  @media screen and (max-width: 767px){
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 25%;

  @media screen and (max-width: 767px){
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ContactInner = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
`;

export const Content = styled.div`
  padding-left: 1rem;
  h4 {
    color: #222;
    font-size: 1rem;
    padding-bottom: 5px;

    a {
      color: #222;
      text-decoration: none;
    }
  }
  p {
    color: #222222b3;
  }
`;

export const AddressIcon = styled(AiOutlineHome)`
  font-size: 1.6rem;
  color: #384aeb;
`;

export const CallIcon = styled(FiHeadphones)`
  font-size: 1.6rem;
  color: #384aeb;
`;

export const EmailIcon = styled(AiOutlineMail)`
  font-size: 1.6rem;
  color: #384aeb;
`;

export const ContactForm = styled.form`
  width: 75%;
  margin-left: 4rem;

  @media screen and (max-width: 767px){
    width: 100%;
    margin-left: 0;
  }
`;

export const FormContent = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  textarea {
    width: 50%;
    height: 8.2rem;
    border: 1px solid #22222269;
    outline: none;
    padding: 10px;
    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 14px;
    }

    &:focus {
      border: 1px solid #384aeb;
      &::placeholder {
        color: #384aeb;
      }
    }

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border: 1px solid #22222269;
  outline: none;

  &:focus {
    border: 1px solid #384aeb;
    &::placeholder{
      color: #384aeb;
    }
  }
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  border: 1px solid #384aeb;
  background-color: #384aeb;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: #384aeb;
    background-color: transparent;
  }
`;