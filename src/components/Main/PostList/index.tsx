import React, { FC } from 'react';

import useInfiniteScroll, { useInfiniteScrollType } from '@hooks/useInfiniteScroll';

import PostItem from '@components/Main/PostItem';

import { PostListWrapper } from './styles';

export type PostType = {
  node: {
    id: string;
    slug: string;
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
    };
  };
};

interface PostListProps {
  selectedCategory: string;
  posts: PostType[];
}

const PostList: FC<PostListProps> = ({ selectedCategory, posts }) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList?.map(({ node: { id, slug, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link={slug} key={id} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
