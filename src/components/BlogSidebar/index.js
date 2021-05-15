import React from 'react'
import {
  Sidebar
} from "./BlogSidebar.elements";


import Search from "./Search";
import Auther from "./Auther";
import PopularPosts from "./PopularPosts";
import Ads from "./Ads";
import PostCategories from "./PostCategories";
import Newsletter from './Newsletter';
import TagClouds from './TagClouds';



const BlogSidebar = () => {
  return (
    <Sidebar>
      {/* Search Widget */}
      <Search />
      {/* Auther Widget */}
      <Auther />
      {/* Popular Post Widget */}
      <PopularPosts />
      {/* Ads Widget */}
      <Ads />
      {/* Post Categories Widget */}
      <PostCategories />
      {/* Newsletter Widget */}
      <Newsletter />
      {/* Tag Clouds Widget */}
      <TagClouds />
      
    </Sidebar>
  );
}

export default BlogSidebar
