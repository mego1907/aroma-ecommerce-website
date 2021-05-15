import styled from 'styled-components';
/* import Container */
import { Container } from "../../GlobalStyle";

export const ProductsSec = styled.section`
  margin: 1rem 0;
`;

export const ProductsContainer = styled(Container)`
  overflow: hidden;
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductsTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    background-color: #fff;
    padding: 2rem 15px;
    z-index: 3;
    color: #222222a6;
  }
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #22222240;
    position: absolute;
    top: 50%;
    right: 50%;
  }

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #22222240;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
