import React from 'react'
import {
  Article,
  ArticleImg,
  ArticleDesc,
  DescTop,
  CommentIcon,
  ArticleTitle,
  ArticleText,
  ReadMoreBtn,
  ReadMoreIcon,
  AutherName,
  Comments,
} from "./LNewsArticle.elements";

const LNewsArticle = ({article}) => {
  return (
    <Article>
      <ArticleImg src={article.img} alt={article.title} />
      <ArticleDesc>
        <DescTop>
          <AutherName>
            By <span>{article.auther}</span>
          </AutherName>
          <Comments>
            <CommentIcon />
            <span>{article.comments}</span> Comments
          </Comments>
        </DescTop>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleText>{article.text}</ArticleText>
        <ReadMoreBtn to="">Read More <ReadMoreIcon /></ReadMoreBtn>
      </ArticleDesc>
    </Article>
  );
}

export default LNewsArticle;
