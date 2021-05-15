import styled from 'styled-components';

export const HeroSec = styled.header`
  background-color: #f1f6f7;
  margin-top: 80px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const HeroImg = styled.div`
  img{
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const HeroDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.5rem;

  h6 {
    font-size: 1.5rem;
    font-family: "Teko", sans-serif;
    font-weight: 500;
    color: rgba(0,0,0,0.7);
  }
  h2 {
    font-size: 3rem;
    padding: 0 0 15px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 20px;
    h6 {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const HeroBtn = styled.div`
  padding: 2.5rem 0;
`;