import React from 'react'
import { Container, MainBtn } from "../../GlobalStyle";
import { HeroSec, Row, HeroImg, HeroDesc, HeroBtn } from "./Hero.elements";
import Img from "../../assets/images/home/hero-banner.png";

const Hero = () => {
  return (
    <HeroSec>
      <Container>
        <Row>
          <HeroImg>
            <img src={Img} alt="HeroImg" />
          </HeroImg>
          <HeroDesc>
            <h6>Shop is fun</h6>
            <h2>
              BROWSE OUR
              <br /> PREMIUM PRODUCT
            </h2>
            <p>
              Us which over of signs divide dominion deep fill bring they're
              meat beho upon own earth without morning over third. Their male
              dry. They are great appear whose land fly grass.
            </p>
            <HeroBtn>
              <MainBtn to="/shop">Browse Now</MainBtn>
            </HeroBtn>
          </HeroDesc>
        </Row>
      </Container>
    </HeroSec>
  );
}

export default Hero
