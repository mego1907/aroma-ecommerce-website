import styled from 'styled-components'

export const Sidebar = styled.aside`
  width: 30%;
  border: 1px solid #eee; 
  margin-top: 18px;
  padding: 0 2rem;

  @media screen and (max-width: 767px){
    width: 100%;
    padding: 0;
  }
`;

export const Title = styled.h3`
  color: #fff;
  background-color: #5b6bf0;
  text-align: center;
  padding: 10px;
  margin-bottom: 2rem;
`;