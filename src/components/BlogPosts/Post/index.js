import React from 'react'
import {
  PostSec,
  BlogInfo,
  PostTag,
  Tag,
  BlogMeta,
  BlogPost,
  BlogDetails,
  Title,
  Desc,
  PostBtn,
} from './Post.elements'

import PostImg from "../../../assets/images/blog/main-blog/m-blog-1.jpg";

/* Icons */
import {AiOutlineUser} from 'react-icons/ai'
import {GoCalendar} from 'react-icons/go'
import {FaRegEye, FaRegComment} from 'react-icons/fa'


const Post = () => {
  return (
    <PostSec>
      <BlogInfo>
        <PostTag>
          <Tag to="/blog">Food,</Tag>
          <Tag to="/blog">Technology,</Tag>
          <Tag to="/blog">Politics,</Tag>
          <Tag to="/blog">Lifestyle</Tag>
        </PostTag>
        <BlogMeta>
          <li>
            <a href="#">Mark wiens </a>
            <AiOutlineUser className="icon"/>
          </li>
          <li>
            <a href="#">12 Dec, 2017 </a>
            <GoCalendar className="icon"/>
          </li>
          <li>
            <a href="#">1.2M Views </a>
            <FaRegEye className="icon"/>
          </li>
          <li>
            <a href="#">06 Comments </a>
            <FaRegComment className="icon"/>
          </li>
        </BlogMeta>
      </BlogInfo>
      <BlogPost>
        <img src={PostImg} alt="Blog Image"/>
        <BlogDetails>
          <Title to="/blog">Astronomy Binoculars A Great Alternative</Title>
          <Desc>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</Desc>
          <PostBtn to="/blog">
            View More
          </PostBtn>
        </BlogDetails>
      </BlogPost>
    </PostSec>
  )
}

export default Post
