import React from 'react';
import Data from './Data'
import {Title} from '../../GlobalStyle';
import {TrendingSec, TrContainer, TrProducts} from './Trending.elements'

import Product from '../Product';

const Trending = () => {
  return (
    <TrendingSec>
      <TrContainer>
        <Title>
          <h5>Popular Item in the market</h5>
          <h2>
            Trending <span>Product</span>
          </h2>
        </Title>
        <TrProducts>
          {Data.map((prod) => (
            <Product product={prod} key={prod.id} />
          ))}
        </TrProducts>
      </TrContainer>
    </TrendingSec>
  );
}

export default Trending;