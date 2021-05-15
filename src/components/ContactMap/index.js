import React from 'react'
import styled from 'styled-components';
import {Container} from '../../GlobalStyle';


const ContactMap = () => { 
  return (
    <MapSec>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244126.39403961593!2d-117.2967271299391!3d61.44343468703198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53c52924bc181df5%3A0xa0824eb5c96c8384!2zRm9ydCBQcm92aWRlbmNlLCDYpdmC2YTZitmFINin2YTYo9ix2LbZiiDYp9mE2LTZhdin2YTZitipINin2YTYutix2KjZitip2Iwg2YPZhtiv2Kc!5e0!3m2!1sar!2sus!4v1619909318807!5m2!1sar!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </MapContainer>
    </MapSec>
  );
}

export default ContactMap;

const MapSec = styled.section`
  margin: 4rem 0;
`;

const MapContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  iframe{
    border: 1px solid #fff;
  }
`;
