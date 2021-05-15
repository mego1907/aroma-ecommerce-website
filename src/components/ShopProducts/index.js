import React from 'react';
import {
  ProductsSec,
  ProductsContainer,
  Products,
  ProductsTitle,
} from "./ShopProducts.elements";
// import Product 
import Product from '../Product';
// import react redux hooks
import {useSelector} from 'react-redux'




const ShopProducts = () => {
  const shopItems = useSelector((state) => state.shop.shopItems);
  
  return (
    <ProductsSec>
      <ProductsContainer>
        {/* Products Title */}
        <ProductsTitle>
          <h2>OUR PRODUCTS</h2>
        </ProductsTitle>
        {/* All Products */}
        <Products>
          {shopItems.map((prod) => (
            <Product product={prod} key={prod.id} />
          ))}
        </Products>
      </ProductsContainer>
    </ProductsSec>
  );
}

export default ShopProducts
