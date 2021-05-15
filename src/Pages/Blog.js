import React from 'react'
import BannerArea from '../components/BannerArea'
import BlogCategories from '../components/BlogCategories'
import BlogArea from '../components/BlogArea'

const Blog = () => {
  return (
    <>
      <BannerArea title="Blog" />
      <BlogCategories />
      <BlogArea />
    </>
  )
}

export default Blog
