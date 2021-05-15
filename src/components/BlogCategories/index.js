import React from 'react'
import {
  BlogSec,
  BlogContainer,
  CategoriesPost,
  Img,
  CategoriesDetails,
  BorderLine,
} from "./BlogCategories.elements";

/* Blog Images */
import img1 from '../../assets/images/blog/cat-post/cat-post-1.jpg'
import img2 from '../../assets/images/blog/cat-post/cat-post-2.jpg'
import img3 from '../../assets/images/blog/cat-post/cat-post-3.jpg'

const BlogCategories = () => {
  return (
    <BlogSec>
      <BlogContainer>
        <CategoriesPost>
          <Img src={img3} alt="" />
          <CategoriesDetails>
            <h3>Social Life</h3>
            <BorderLine></BorderLine>
            <p>Enjoy your social life together</p>
          </CategoriesDetails>
        </CategoriesPost>
        <CategoriesPost>
          <Img src={img2} alt="" />
          <CategoriesDetails>
            <h3>Politics</h3>
            <BorderLine></BorderLine>
            <p>Be a part of politics</p>
          </CategoriesDetails>
        </CategoriesPost>
        <CategoriesPost>
          <Img src={img1} alt="" />
          <CategoriesDetails>
            <h3>Food</h3>
            <BorderLine></BorderLine>
            <p>Let the food be finished</p>
          </CategoriesDetails>
        </CategoriesPost>
      </BlogContainer>
    </BlogSec>
  );
}

export default BlogCategories
