import React from 'react';
/* import Title */
import {Title} from '../../GlobalStyle'
import {
  TopProductSec,
  TopContainer,
  Products,
  Product,
  ProductDesc,
  ProductName,
  ProductPrice,
} from "./TopProduct.elements";

import Data from './Data'

const TopProduct = () => {
  return (
    <TopProductSec>
      <TopContainer>
        <Title>
          <h5>Popular Item in the market</h5>
          <h2>
            Top <span>Product</span>
          </h2>
        </Title>
        <Products>
          {
            Data.map(prod => 
              <Product key={prod.id}>
                <img src={prod.img} alt={prod.name}/>
                <ProductDesc>
                  <ProductName>{prod.name}</ProductName>
                  <ProductPrice>{prod.price}$</ProductPrice>
                </ProductDesc>
              </Product>
            )
          }
        </Products>
      </TopContainer>
    </TopProductSec>
  );
}

export default TopProduct
