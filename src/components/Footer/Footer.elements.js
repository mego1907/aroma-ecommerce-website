import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../../GlobalStyle';


export const FooterSec = styled.footer`
  background-color: #002347;
  padding: 3rem 0;
  margin-top: 2rem;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.div`
  width: 25%;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.div`
  color: rgba(255,255,255,0.4);
  line-height: 1.2;
  padding: 10px 0;
`;

export const FooterLinks = styled.div`
  text-align: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  padding: 8px 0;
  color: rgba(255,255,255,0.4);
  transition: all 0.3s linear;

  &:hover{
    color: #3549ec;
  }
`;

export const FooterGallery = styled.div`
  width: 16%;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const GalleryImgs = styled.div`
  img {
    padding: 5px;
  }
`;

export const FooterContact = styled.div`
  .contact__icon {
    width: 25px;
    height: 25px;
    color: #fff;
    margin: -2px 10px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ContactDesc = styled.div``;

export const ContactTitle = styled.h5`
  color: #fff;
  font-size: 1rem;
  color: #fff;
`;

export const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.4);
  padding: 5px 0;
`;