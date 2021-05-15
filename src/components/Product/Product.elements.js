import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const TrProduct = styled.div`
  margin: 20px 5px;

  &:hover {
    h3 {
      color: #384aeb;
    }
  }
`;

export const TrImg = styled.img`
  width: 100%;
`;

export const TrDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

`;

export const ProductType = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0,0,0,0.6);
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  padding: 10px 0;
`;

export const ProductPrice = styled.h5`
  font-size: 1.2rem;
  color: #ff0a9d;
  padding-bottom: 15px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddBtn = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  margin: 10px;
  border: 1px solid #384aeb;
  color: #384aeb;
  background: transparent;
  transition: all 0.3s linear;
  white-space: nowrap;

  &:hover {
    background-color: #384aeb;
    color: #fff;
  }
`;

export const DetailsBtn = styled(Link)`
  text-decoration: none;
  padding: 10px;
  margin: 10px;
  white-space: nowrap;
  color: #384aeb9e;

  &:hover {
    color: #384aeb;
  }
`;
