import styled from 'styled-components';
import {Container} from '../../GlobalStyle';
import offerImg from "../../assets/images/home/parallax-bg.png";

export const OfferSec = styled.section`
  height: 400px;
  background-image: url(${offerImg});
  background-size: cover;
  background-position: center center;
  margin: 2rem 0;
`;

export const OfferContainer = styled(Container)`
  display: flex;
`;

export const OfferDesc = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    padding-bottom: 1.5rem;
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    padding-bottom: 0.7rem;
  }
  p {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    padding-bottom: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    h2{
      font-size: 2.5rem;
    }
  }
`;