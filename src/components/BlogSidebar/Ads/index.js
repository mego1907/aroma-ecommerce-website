import React from 'react'
import styled from 'styled-components'
/* Ads Img */
import adsImg from '../../../assets/images/blog/add.jpg'


const Ads = () => {
  return (
    <AdsSec>
      <a href="#">
        <img src={adsImg} alt="Ads" />
      </a>
    </AdsSec>
  );
}

export default Ads;

const AdsSec = styled.aside`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  a{
    img{
      width: 100%;
    }
  }
`;
