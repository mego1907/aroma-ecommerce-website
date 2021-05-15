import React from 'react';
import {
  BannerSec,
  BannerContainer,
  BannerTitle,
  BannerDesc,
} from "./BannerArea.elements";

const bannerArea = ({title}) => {
  return(
    <BannerSec>
      <BannerContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerDesc>
          <ul>
            <li>Home</li>
            <li>{title}</li>
          </ul>
        </BannerDesc>
      </BannerContainer>
    </BannerSec>
  )
}

export default bannerArea;