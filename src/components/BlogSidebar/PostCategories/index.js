import React from 'react'
import styled from "styled-components";

import {Title} from '../BlogSidebar.elements'

const PostCategories = () => {
  return (
    <PostCategoriesSec>
        <Title>Post Catgories</Title>
        <ul>
          <li>
            <a href="#">
              <p>Technology</p>
              <p>37</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Lifestyle</p>
              <p>20</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Fashion</p>
              <p>45</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Art</p>
              <p>77</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Food</p>
              <p>47</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Architecture</p>
              <p>91</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>Adventure</p>
              <p>11</p>
            </a>
          </li>
        </ul>
      </PostCategoriesSec>
  )
}

export default PostCategories


const PostCategoriesSec = styled.aside`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  ul {
    list-style: none;
    li {
      padding: 10px 0;
      a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        color: #222;

        &:hover {
          color: #5b6bf0;
        }
      }
    }
  }
`;
