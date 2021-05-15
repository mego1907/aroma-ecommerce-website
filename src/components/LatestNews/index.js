import React from 'react'
import { Title } from '../../GlobalStyle'
import { LNewsArticles, LNewsContainer, Articles } from "./LatestNews.elements";

import Data from './Data'
import LNewsArticle from './LNewsArticle';

const LatestNews = () => {
  return (
    <LNewsArticles>
      <LNewsContainer>
        <Title>
          <h5>Popular Item in the market</h5>
          <h2>
            Latest <span>News</span>
          </h2>
        </Title>
        <Articles>
          {Data.map(item =>
            <LNewsArticle article={item} key={item.id} />
            )}
        </Articles>
      </LNewsContainer>
    </LNewsArticles>
  );
}

export default LatestNews
