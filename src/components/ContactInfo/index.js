import React from 'react'
import {
  ContactSec,
  ContactContainer,
  Info,
  ContactInner,
  Content,
  AddressIcon,
  CallIcon,
  EmailIcon,
  ContactForm,
  FormContent,
  Inputs,
  Input,
  Button,
} from "./ContactInfo.elements";

const ContactInfo = () => {
  return (
    <ContactSec>
      <ContactContainer>
        <Info>
          <ContactInner>
            <AddressIcon />
            <Content>
              <h4>California United States</h4>
              <p>Santa monica bullevard</p>
            </Content>
          </ContactInner>
          <ContactInner>
            <CallIcon />
            <Content>
              <h4>
                <a href="tel:00 (440) 9865 562">00 (440) 9865 562</a>
              </h4>
              <p>Mon to Fri 9am to 6pm</p>
            </Content>
          </ContactInner>
          <ContactInner>
            <EmailIcon />
            <Content>
              <h4>
                <a href="mailto:support@support.com">support@support.com</a>
              </h4>
              <p>Send us your query anytime!</p>
            </Content>
          </ContactInner>
        </Info>
        <ContactForm>
          <FormContent>
            <Inputs>
              <Input type="text" placeholder="Enter Your Name" />
              <Input type="email" placeholder="Enter Email Address" />
              <Input type="text" placeholder="Enter Subject" />
            </Inputs>
            <textarea cols="30" rows="5" placeholder="Enter Message"/>
          </FormContent>
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContainer>
    </ContactSec>
  );
}

export default ContactInfo
