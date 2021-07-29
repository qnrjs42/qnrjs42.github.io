import React, { VFC } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { PostContentSection } from './styles';

interface IProps {
  body: string;
}

const PostContent: VFC<IProps> = ({ body }: IProps) => {
  return (
    <PostContentSection>
      <MDXRenderer>{body}</MDXRenderer>
    </PostContentSection>
  );
};

export default PostContent;
