import styled from 'styled-components';
import {Container} from '../../GlobalStyle'

export const BlogSec = styled.section`
  margin: 2rem 0;
  overflow: hidden;
`;

export const BlogContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1225px) {
    justify-content: center;
  }
`;

export const CategoriesPost = styled.div`
  position: relative;
  height: 100%;
  
  @media screen and (max-width: 1225px) {
    margin: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const CategoriesDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  height: 80%;
  border: 4px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-color: rgba(0,0,0,0.5);
  transition: all 0.3s linear;
  cursor: pointer;

  h3{
    font-size: 1.3rem;
  }

  &:hover{
    width: 100%;
    height: 100%;
  }
`;

export const BorderLine = styled.div`
  width: 40%;
  height: 1px;
  background-color: #fff;
  margin: 0.4rem auto;
`;