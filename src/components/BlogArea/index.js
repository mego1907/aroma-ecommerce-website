import React from 'react'
import styled from 'styled-components'
import {Container} from '../../GlobalStyle'
import BlogSidebar from '../BlogSidebar'
import BlogPosts from '../BlogPosts'

const BlogArea = () => {
  return (
    <BlogSec>
      <BlogContainer>
        <BlogPosts />
        <BlogSidebar />
      </BlogContainer>
    </BlogSec>
  )
}

export default BlogArea

const BlogSec = styled.section`
  padding: 3rem 0;
`;

const BlogContainer = styled(Container)`
  display: flex;

  @media screen and (max-width: 767px){
    flex-direction: column;
  }
`;