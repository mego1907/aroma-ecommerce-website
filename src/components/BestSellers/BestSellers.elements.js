import styled from 'styled-components';
import {Container} from '../../GlobalStyle';

export const BSellersSec = styled.section`
  padding: 2rem 0;
`;

export const BSellersContainer = styled(Container)``;

export const BSellersProducts = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
  .slick-slider {
    overflow: hidden;
    cursor: grab;
    .slick-track {
      display: flex;
    }
  }
`;