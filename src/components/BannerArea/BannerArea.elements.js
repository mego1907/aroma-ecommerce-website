import styled from 'styled-components';
import {Container} from '../../GlobalStyle';

export const BannerSec = styled.section`
  height: 500px;
  width: 100%;
  background-color: #f1f6f7;
  margin-top: 80px;

  @media screen and (max-width: 767px) {
    height: 200px;
  }
`;

export const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const BannerTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #222;
`;

export const BannerDesc = styled.div`
  ul{
    display: flex;
    list-style: none;
    position: relative;
    li{
      padding: 10px;
    }

    &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 60px;
    width: 5px;
    height: 2px;
    background-color: #222;
  }
  }
`;