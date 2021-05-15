import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Box = styled.div`
  width: 50%;
  height: 600px;
  background-color: #4c5ced;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 400px;
    order: 2;
  }
`;

export const BoxBody = styled.div`
  text-align: center;
  h3 {
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
  }

  p {
    color: #fff;
    line-height: 1.5;
    max-width: 50ch;
    margin: 15px 0 2rem;

    @media screen and (max-width: 767px){
      font-size: 0.9rem;
    }
  }
`;

export const BoxBtn = styled(Link)`
  color: #fff;
  text-decoration: none;
  border: 1px solid #adb4f5;
  padding: 10px 35px;
  border-radius: 25px;
  transition: all 0.3s linear;

  &:hover {
    background-color: #c5322d;
    border: 1px solid #c5322d;;
  }
`;