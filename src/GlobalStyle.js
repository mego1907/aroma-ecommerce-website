import styled, {createGlobalStyle} from 'styled-components';
import {Link} from 'react-router-dom'

/*==================*/
/*   Global Style  */
/*================*/
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;

/*===============*/
/*   Container  */
/*=============*/
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1200px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;


/*==================*/
/*   Main Button   */
/*================*/
export const MainBtn = styled(Link)`
  text-decoration: none;
  border: 1px solid #384aeb;
  border-radius: 25px;
  background-color: #384aeb;
  padding: 12px 41px;
  color: #fff;
  transition: all .3s linear;

  &:hover {
    background-color: transparent;
    color: #384aeb;;
  }
`;

/*==================*/
/* Sections Title  */
/*================*/
export const Title = styled.div`
  padding: 1.2rem;
  h5{
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
  }
  h2{
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.5;
    span{
      padding-bottom: 7px; 
      border-bottom: 2px solid #384aeb;
    }
  }
`;