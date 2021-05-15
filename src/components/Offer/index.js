import React from 'react'
import { MainBtn } from '../../GlobalStyle'
import { OfferSec, OfferContainer, OfferDesc } from "./Offer.elements";

const Offer = () => {
  return (
    <OfferSec>
      <OfferContainer>
        <OfferDesc>
          <h2>Up To 50% Off</h2>
          <h4>Winter Sale</h4>
          <p>Him she'd let them sixth saw light</p>
          <MainBtn to="/shop">Shop Now</MainBtn>
        </OfferDesc>
      </OfferContainer>
    </OfferSec>
  );
}

export default Offer
