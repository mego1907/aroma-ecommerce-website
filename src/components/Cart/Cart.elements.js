import styled from 'styled-components';
import {Container} from '../../GlobalStyle'

export const CartSec = styled.section`
  min-height: 100vh;
`;

export const CartContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  margin-top: 80px;

  h2{
    font-size: 4rem;

    @media screen and (max-width: 767px){
      font-size: 3rem;
    }
  }
`;

export const CartProducts = styled.div`
  border-bottom: 1px solid #000;
`;

export const ProductTitle = styled.div`
  display: flex;
  border-bottom: 1px solid #c3bdbd6e;
  padding: 15px 0;
`;

export const Name = styled.h5`
  width: 53%;
  font-size: 1.2rem;
  color: #3333339c;

  @media screen and (max-width: 767px){
    width: 100%;
    text-align: center;
  }
`;
export const Price = styled.h5`
  width: 14%;
  font-size: 1.1rem;
  color: #3333339c;
  text-align: center;

  @media screen and (max-width: 767px){
    display: none;
  }
`;

export const Quntity = styled.h5`
  width: 14%;
  font-size: 1.1rem;
  color: #3333339c;
  text-align: center;

  @media screen and (max-width: 767px){
    display: none;
  }
`;

export const Total = styled.h5`
  width: 14%;
  font-size: 1.1rem;
  color: #3333339c;
  text-align: center;
  
  @media screen and (max-width: 767px){
    display: none;
  }
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;

  h4{
    padding: 20px 0;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
`;


export const ClearBtn = styled.button`
  padding: 15px 25px;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 3rem auto;
  cursor: pointer;
  background-color: #a70d0d;
  color: #fff;
  border: 1px solid #a70d0d;
  letter-spacing: 2px;

  &:hover {
    border: 1px solid #a70d0d;
    background-color: transparent;
    color: #a70d0d;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px){
    img{
      width: 100%;
    }
  }
`;