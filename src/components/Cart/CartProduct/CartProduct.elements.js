import styled from 'styled-components';
import {AiTwotoneDelete} from 'react-icons/ai';

export const ProductInCart = styled.div`
  padding: 20px 0;
  display: flex;

  @media screen and (max-width: 767px){
    flex-direction: column;
    border-bottom: 1px solid #c3bdbd6e;
  }
`;

export const CartProdName = styled.div`
  display: flex;
  align-items: center;
  width: 53%;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  
  
  @media screen and (max-width: 767px){
    width: 100%;
    flex-direction: column;
  }
`;
export const ImgContainer = styled.div`
  width: 100px;
  margin-right: 20px;

  img{
    width: 100%;
  }

  
`;


export const CartProdPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;

  p {
    font-weight: 500;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    padding: 10px 0;
  }
`;

export const CartProdQty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;

  input {
    width: 80px;
    padding: 10px;
  }

  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

export const CartProdTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14%;

  p {
    font-weight: 500;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    padding: 10px 0;
  }
`;

export const CartDeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  cursor: pointer;
  transition: all 0.3s linear;
  color: #222222c7;

  &:hover {
    color: red;
    transform: scale(1.2);
  }

  @media screen and (max-width: 767px){
    width: 100%;
  }
`;
export const DeleteBtn = styled(AiTwotoneDelete)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  
`;