import React from 'react'
import {
  FooterSec,
  FooterContainer,
  FooterText,
  Title,
  Desc,
  FooterLinks,
  FooterItems,
  FooterLink,
  FooterGallery,
  GalleryImgs,
  FooterContact,
  ContactWrapper,
  ContactDesc,
  ContactTitle,
  ContactText,
} from "./Footer.elements";


import { IoLocationOutline } from "react-icons/io5";
import { BiEnvelope, BiPhone } from "react-icons/bi";

/*==================*/
/* Gallery Images */
/*==============*/
import img1 from '../../assets/images/r1.jpg'
import img2 from '../../assets/images/r2.jpg'
import img3 from '../../assets/images/r3.jpg'
import img4 from '../../assets/images/r5.jpg'
import img5 from '../../assets/images/r7.jpg'
import img6 from '../../assets/images/r8.jpg'

const Footer = () => {
  return (
    <FooterSec>
      <FooterContainer>
        <FooterText>
          <Title>Our Mission</Title>
          <Desc>
            So seed seed green that winged cattle in. Gathering thing made fly
            you're no divided deep moved us lan Gathering thing us land years
            living.
          </Desc>
          <Desc>
            So seed seed green that winged cattle in. Gathering thing made fly
            you're no divided deep moved
          </Desc>
        </FooterText>
        <FooterLinks>
          <Title>Quick Links</Title>
          <FooterItems>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/shop">Shop</FooterLink>
            <FooterLink to="/cart">Cart</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterItems>
        </FooterLinks>
        <FooterGallery>
          <Title>Gallery</Title>
          <GalleryImgs>
            <img src={img1} alt="image1" />
            <img src={img2} alt="image2" />
            <img src={img3} alt="image3" />
            <img src={img4} alt="image4" />
            <img src={img5} alt="image5" />
            <img src={img6} alt="image6" />
          </GalleryImgs>
        </FooterGallery>
        <FooterContact>
          <Title>Contact Us</Title>
          <ContactWrapper>
            <IoLocationOutline className="contact__icon" />
            <ContactDesc>
              <ContactTitle> Head Office</ContactTitle>
              <ContactText>123, Main Street, Your City</ContactText>
            </ContactDesc>
          </ContactWrapper>
          <ContactWrapper>
            <BiPhone className="contact__icon" />
            <ContactDesc>
              <ContactTitle> Phone Number</ContactTitle>
              <ContactText>+123 456 7890</ContactText>
              <ContactText>+123 456 7890</ContactText>
            </ContactDesc>
          </ContactWrapper>
          <ContactWrapper>
            <BiEnvelope className="contact__icon" />
            <ContactDesc>
              <ContactTitle> Email</ContactTitle>
              <ContactText>free@infoexample.com</ContactText>
              <ContactText>www.infoexample.com</ContactText>
            </ContactDesc>
          </ContactWrapper>
        </FooterContact>
      </FooterContainer>
    </FooterSec>
  );
}

export default Footer
