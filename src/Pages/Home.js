import React from 'react'
import BestSellers from '../components/BestSellers'
import Hero from '../components/Hero'
import LatestNews from '../components/LatestNews'
import Offer from '../components/Offer'
import SubscribePosition from '../components/SubscribePosition'
//import Slider from '../components/Slider'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Offer />
      <BestSellers />
      <LatestNews />
      <SubscribePosition />
    </>
  )
}

export default Home;
