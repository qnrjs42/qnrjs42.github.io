import React, { VFC } from 'react';

import {
  PostHeaderDate,
  PostHeaderTitle,
  PostHeaderSection,
  PostHeaderCategoryItem,
  PostHeaderCategoryContainer,
} from './styles';

interface IProps {
  title: string;
  date: string;
  categories: string[];
}
const PostHeader: VFC<IProps> = ({ title, date, categories }: IProps) => {
  return (
    <PostHeaderSection>
      <PostHeaderTitle>{title}</PostHeaderTitle>
      <PostHeaderDate>{date && date?.replace(/-/g, '.')}</PostHeaderDate>
      <PostHeaderCategoryContainer>
        {categories.map((category) => (
          <PostHeaderCategoryItem key={category}>{category}</PostHeaderCategoryItem>
        ))}
      </PostHeaderCategoryContainer>
    </PostHeaderSection>
  );
};

export default PostHeader;
