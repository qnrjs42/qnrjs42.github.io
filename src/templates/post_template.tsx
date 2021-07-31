import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';

import React, { FunctionComponent } from 'react';

import Header from '@components/Common/Header';
import Template from '@components/Common/Template';
import PostHeader from '@components/Post/PostHeader';
import PostContent from '@components/Post/PostContent';
import CommentWidget from '@components/Post/CommentWidget';

export interface PostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

interface PostTemplateProps {
  data: {
    mdx: {
      id: string;
      slug: string;
      body: string;
      frontmatter: {
        title: string;
        summary: string;
        date: string;
        categories: string[];
      };
    };
    file: {
      publicURL: string;
    };
  };
  children: React.ReactNode;
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, summary, date, categories },
    },
    file: { publicURL },
  },
  children,
}: PostTemplateProps) => {
  const location = useLocation();

  return (
    <Template title={title} description={summary} image={publicURL} url={location.href}>
      <Header />
      <PostHeader title={title} date={date} categories={categories} />
      {children}
      <PostContent body={body} />
      <CommentWidget />
    </Template>
  );
};

export default PostTemplate;

export const queryPostTemplate = graphql`
  query($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      body
      slug
      frontmatter {
        title
        summary
        date
        categories
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`;
