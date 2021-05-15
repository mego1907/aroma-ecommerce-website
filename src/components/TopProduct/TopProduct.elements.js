import styled from 'styled-components';
/* import Container */
import {Container} from '../../GlobalStyle';

export const TopProductSec = styled.section`
  margin: 2rem 0,
`;

export const TopContainer = styled(Container)``;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductName = styled.h4`
  padding: 10px;
  color: #222;
  font-size: 1rem;
`;

export const Product = styled.div`
  display: flex;
  padding: 10px 30px;
  margin: 4px;
  border: 1px solid #eee;
  cursor: pointer;

  &:hover ${ProductName} {
    color: #384aeb;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`;

export const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export const ProductPrice = styled.p`
  color: #333333ad;
  font-size: 1rem;
  font-weight: bold;
`;