import styled from 'styled-components';
import {Container} from '../../GlobalStyle'


export const SubscribeSec = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 4px;
  padding: 3rem 0;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const SubscribeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubscribeTitle = styled.div`
  text-align: center;
  padding: 20px 0 2.5rem;

  h2{
    font-size: 2.3rem;
    margin-bottom: 10px;
  }
  p{
    color: rgba(0,0,0,0.5);
    font-size: 1.2rem;
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 40%;
  outline: none;
  border: 1px solid #ddd;
  padding: 15px 20px;
  border-radius: 25px;

  &:focus {
    border: 1px solid #384aeb;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const SubscribeBtn = styled.button`
  text-decoration: none;
  border: 1px solid #384aeb;
  border-radius: 25px;
  background-color: #384aeb;
  padding: 12px 41px;
  color: #fff;
  transition: all 0.3s linear;
  margin-left: 20px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 10px 0;
  }
`;