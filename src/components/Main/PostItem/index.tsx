import React, { FunctionComponent } from 'react';

import {
  PostItemContent,
  PostItemWrapper,
  Title,
  Date,
  Summary,
  CategoriesContainer,
  CategoryItem,
} from './styles';

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  link: string;
}

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  summary,
  categories,
  link,
}) {
  return (
    <PostItemWrapper to={`/${link}`}>
      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <CategoriesContainer>
          {categories?.map((category) => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </CategoriesContainer>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
