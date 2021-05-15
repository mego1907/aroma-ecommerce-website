import React from 'react'
import styled from 'styled-components'

/* Icons */
import { FaFacebookF, FaBehance } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

/* Images */
import autherImg from '../../../assets/images/blog/author.png'

const Auther = () => {
  return (
    <AutherSec>
      <img src={autherImg} alt="Auther" />
      <h4>Charlie Barber</h4>
      <Desc>Senior blog writer</Desc>
      <SocialIcon>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <AiOutlineTwitter />
        </a>
        <a href="#">
          <AiOutlineGithub />
        </a>
        <a href="#">
          <FaBehance />
        </a>
      </SocialIcon>
      <Desc>
        Boot camps have its supporters andit sdetractors. Some people do not
        understand why you should have to spend money on boot camp when you can
        get. Boot camps have itssuppor ters andits detractors.
      </Desc>
    </AutherSec>
  );
}

export default Auther

const AutherSec = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;

  img{
    width: 100px;
    margin: 0 auto 18px;
  }
`;


const SocialIcon = styled.div`
  margin: 10px;

  a{
    margin: 10px;
    color: #5b6bf0;

    &:hover{
      color: #f00;
    }
  }
`;

const Desc = styled.p`
  line-height: 1.5;
  color: rgba(0,0,0,0.6)
`;