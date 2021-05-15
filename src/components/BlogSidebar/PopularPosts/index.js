import React from 'react'
import styled from 'styled-components'

/* import Titel from BlogSidebar.elements */
import {Title} from '../BlogSidebar.elements'

/* Images */
import post1 from '../../../assets/images/blog/popular-post/post1.jpg'
import post2 from '../../../assets/images/blog/popular-post/post2.jpg'
import post3 from '../../../assets/images/blog/popular-post/post3.jpg'
import post4 from '../../../assets/images/blog/popular-post/post4.jpg'

const PopularPosts = () => {
  return (
    <PopularPostsSec>
      <Title>Popular Posts</Title>
      <MediaPosts>
        <PostItem>
          <img src={post1} alt="post item" />
          <PostBody>
            <h5>Space The Final Frontier</h5>
            <p>02 Hours ago</p>
          </PostBody>
        </PostItem>
        <PostItem>
          <img src={post2} alt="post item" />
          <PostBody>
            <h5>The Amazing Hubble</h5>
            <p>02 Hours ago</p>
          </PostBody>
        </PostItem>
        <PostItem>
          <img src={post3} alt="post item" />
          <PostBody>
            <h5>Astronomy Or Astrology</h5>
            <p>02 Hours ago</p>
          </PostBody>
        </PostItem>
        <PostItem>
          <img src={post4} alt="post item" />
          <PostBody>
            <h5>Asteroids telescope</h5>
            <p>02 Hours ago</p>
          </PostBody>
        </PostItem>
      </MediaPosts>
    </PopularPostsSec>
  );
}

export default PopularPosts

const PopularPostsSec = styled.aside`
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`;

const MediaPosts = styled.ul`
  list-style: none;
`;

const PostItem = styled.li`
  display: flex;
  align-items: center;
  padding: 13px 0;
`;

const PostBody = styled.div`
  margin-left: 15px;

  h5{
    font-size: 14px;
  }

  p {
    font-size: 0.8rem;
    color: #000000b3;
    margin-top: 7px;
  }
`;