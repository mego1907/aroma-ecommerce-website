import React from 'react';
import SubscribePosition from '../components/SubscribePosition'
import BannerArea from '../components/BannerArea'; 
import ShopProducts from "../components/ShopProducts"; 
import TopProduct from "../components/TopProduct"; 

const Shop = () => {
  return (
    <>
      <BannerArea title="Shop" />
      <ShopProducts />
      <TopProduct />
      <SubscribePosition />
    </>
  )
}

export default Shop
