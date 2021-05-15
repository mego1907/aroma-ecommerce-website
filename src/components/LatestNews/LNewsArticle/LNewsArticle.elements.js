import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsArrowRightShort} from 'react-icons/bs';
import {FaRegCommentDots} from 'react-icons/fa'


export const Article = styled.article`
  margin: 20px 10px;
  width: 350px;

  &:hover h4{
    color: #384aeb;
  }
`;

export const ArticleImg = styled.img`
  width: 100%;
`;

export const ArticleDesc = styled.div`
`;

export const DescTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 5px;
`;

export const AutherName = styled.p`
  color: rgba(0, 0, 0, 0.5);
  span {
    padding-left: 2px;
    color: #384aeb;
  }
`;

export const Comments = styled.p`
  color: rgba(0, 0, 0, 0.6)
`;

export const CommentIcon = styled(FaRegCommentDots)`
  margin: 0 8px;
`;

export const ArticleTitle = styled.h4`
  font-size: 1.2rem;
  padding-bottom: 13px;
`;

export const ArticleText = styled.p`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  padding-bottom: 15px;
`;

export const ReadMoreIcon = styled(BsArrowRightShort)`
  margin: -6px 0px;
  font-size: 1.3rem;
  transition: all 0.3s linear;
`;

export const ReadMoreBtn = styled(Link)`
  text-decoration: none;
  color: #384aeb;
  
  &:hover ${ReadMoreIcon} {
    margin-left: 8px;
    color: red;
  }
`;