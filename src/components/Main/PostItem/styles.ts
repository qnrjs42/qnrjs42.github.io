import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { BlackColor, PurpleColor } from '@utils/utilColor';

export const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5em;
  font-weight: 700;
  color: ${BlackColor};
  margin-bottom: 8px;
`;

export const Date = styled.div`
  font-size: 0.875em;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 8px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CategoryItem = styled.div`
  color: ${PurpleColor};
  font-size: 0.75em;
  margin-bottom: 5px;

  background-color: rgb(241, 243, 245);
  border-radius: 1rem;
  padding: 5px 10px;
  margin-right: 10px;
`;

export const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1em;
  opacity: 0.8;
  margin: 16px 0px;
`;
