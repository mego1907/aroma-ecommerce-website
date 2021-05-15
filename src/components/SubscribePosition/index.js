import React from 'react';
import {
  SubscribeSec,
  SubscribeContainer,
  SubscribeTitle,
  SubscribeForm,
  Input,
  SubscribeBtn,
} from "./Subscribe.elements";


const SubscribePosition = () => {
  return (
    <SubscribeSec>
      <SubscribeContainer>
        <SubscribeTitle>
          <h2>GET UPDATE FROM ANYWHERE</h2>
          <p>
            Bearing Void gathering light light his eavening unto dont afraid
          </p>
        </SubscribeTitle>
        <SubscribeForm>
          <Input type="email" name="Email" placeholder="Your Email Address" required />
          <SubscribeBtn type="submit">Subscribe Now</SubscribeBtn>
        </SubscribeForm>
      </SubscribeContainer>
    </SubscribeSec>
  );
}

export default SubscribePosition;
