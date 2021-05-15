import styled from "styled-components";
import {Link} from "react-router-dom";


export const PostSec = styled.div`
  display: flex;

  @media screen and (max-width: 767px){
    flex-direction: column;
  }
`;

export const BlogInfo = styled.div`
  width: 20%;
  padding: 2.5rem 15px;

  @media screen and (max-width: 767px){
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 15px;
  }
`;

export const PostTag = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled(Link)`
  text-decoration: none;
  line-height: 1.5;
  color: #085f5f;
  font-size: 0.9rem;
  padding: 0 3px;

  &:hover{
    color: #ea4993;
  }
`;

export const BlogMeta = styled.ul`
  list-style: none;
  margin-top: 20px;
  

  li{
    display: flex;
    justify-content: space-between;
    padding: 7px 0;
    a {
      text-decoration: none;
      font-size: 0.9rem;
      color: #777;
      

      &:hover{
        color: #3549eccf;
      }
    }

    .icon{
      font-size: 1.2rem;
      color: #222;
    }
  }

  
`;

export const BlogPost = styled.div`
  width: 80%;
  padding: 0 20px;
  margin: 1.2rem 0;
  img{
    width: 100%;
  }

  @media screen and (max-width: 767px){
    width: 100%;
    margin-top: 1.5rem;
  }
`;

export const BlogDetails = styled.div`
  margin: 15px 0;
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: #222;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s linear;

  &:hover{
    color: #3549eccf;
  }
`;

export const Desc = styled.p`
  padding: 10px 0 28px;
  font-size: 1rem;
  line-height: 1.3;
  color: #000000bd;
`;

export const PostBtn = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  color: #222;
  letter-spacing: 1px;
  font-size: 1rem;
  border: 1px solid #eee;
  transition: all 0.3s linear;

  &:hover{
    background-color: #3549eccf;
    color: #fff;
  }
`;
