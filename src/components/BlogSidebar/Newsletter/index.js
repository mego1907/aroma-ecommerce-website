import React from 'react'
import styled from 'styled-components'
import { Title } from '../BlogSidebar.elements'

const Newsletter = () => {
  return (
    <NewsletterSec>
      <Title>Newsletter</Title>
      <p>
        Here, I focus on a range of items and features that we use in life
        without giving them a second thought.
      </p>
      <Form>
        <input type="text" placeholder="Enter email" />
        <button type="button">Subscribe</button>
        
      </Form>
    </NewsletterSec>
  );
}

export default Newsletter;

const NewsletterSec = styled.aside`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  p{
    line-height: 1.5;
    color: rgba(0,0,0,0.7);
  }
`;

const Form = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
  input {
    padding: 10px;
    border: 1px solid #00000063;
    outline: none;
    width: 100%;
  }
  button {
    padding: 11px;
    border: none;
    background-color: #5b6bf0;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
`;


