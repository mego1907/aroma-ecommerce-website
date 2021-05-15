import React from 'react'
import styled from  'styled-components'

// import Title from BlogSidebar.elements
import {Title} from "../BlogSidebar.elements";

const TagClouds = () => {
  return (
    <TagCloudsSec>
      <Title>Tag Clouds</Title>
      <ul>
        <li>Technology</li>
        <li>Fashion</li>
        <li>Architecture</li>
        <li>Fashion</li>
        <li>Food</li>
        <li>Technology</li>
        <li>Lifestyle</li>
        <li>Art</li>
        <li>Adventure</li>
        <li>Food</li>
        <li>Lifestyle</li>
        <li>Adventure</li>
      </ul>
    </TagCloudsSec>
  );
}

export default TagClouds;

const TagCloudsSec = styled.aside`
  padding: 1rem 0;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    li {
      padding: 5px;
      font-size: 12px;
      background-color: #fff;
      color: #222;
      border: 1px solid #eee;
      transition: all 0.3s linear;
      margin: 5px;
      cursor: pointer;

      &:hover {
        background-color: #5b6bf0;
        color: #fff;
        border: 1px solid #5b6bf0;
      }
    }
  }
`;


