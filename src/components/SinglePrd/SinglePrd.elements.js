import styled from 'styled-components';
import {Container} from '../../GlobalStyle'; 

export const SinglePrdSec = styled.section`
  margin: 4rem 0;

  @media screen and (max-width: 767px) {
    margin: 80px 0 0;
  }
`;

export const SinglePrdContainer = styled(Container)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Prd = styled.div`
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const PrdInfo = styled.div`
  margin-left: 3rem;

  @media screen and (max-width: 767px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const PrdTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const PrdPrice = styled.h2`
  font-size: 1.7rem;
  color: #384aeb;
  padding: 10px 0 ;
  margin-bottom: 20px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;

  p{
    color: rgba(0,0,0,0.6);
    padding-bottom: 10px;
  }
`;

export const Desc = styled.p`
  margin: 2.5rem 0 2rem;
  line-height: 1.5;
  color: rgba(0,0,0,0.6);
`;


export const Button = styled.button`
  padding: 15px 50px;
  font-size: 15px;
  border-radius: 25px;
  border: 1px solid #384aeb;
  background-color: #384aeb;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover{
    color: #384aeb;
    background-color: transparent;
  }
`;
