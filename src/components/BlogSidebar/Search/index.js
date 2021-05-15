import React from 'react'
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";


const Search = () => {
  return (
    <SearchSec>
      <input type="text" placeholder="Search Posts" />
      <button type="button">
        <SearchIcon />
      </button>
    </SearchSec>
  );
}

export default Search

const SearchSec = styled.aside`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;

  input {
    width: 100%;
    padding: 8px 15px;
    border: 1px solid #333;
    border-radius: 25px;
    outline: none;
  }

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    right: 7px;
    padding: 6px;
    cursor: pointer;
  }
`;

const SearchIcon = styled(GoSearch)``;

