import Slider from 'react-slick';
import React from 'react';
import {
  BSellersSec,
  BSellersContainer,
  BSellersProducts,
} from "./BestSellers.elements";
import {Title} from '../../GlobalStyle';
import Data from './Data'

/* import Product Component */
import Product from '../Product';

const BestSellers = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BSellersSec>
      <BSellersContainer>
        <Title>
          <h5>Popular Item in the market</h5>
          <h2>
            Best <span>Sellers</span>
          </h2>
        </Title>
        <BSellersProducts>
          <Slider {...settings}>
            {Data.map((prod) => (
              <Product product={prod} key={prod.id} />
            ))}
          </Slider>
        </BSellersProducts>
      </BSellersContainer>
    </BSellersSec>
  );
}

export default BestSellers
