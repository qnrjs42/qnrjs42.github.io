import { graphql } from 'gatsby';
import React, { FC } from 'react';
import queryString, { ParsedQuery } from 'query-string';

import Header from '@components/Common/Header';
import Template from '@components/Common/Template';
import PostList, { PostType } from '@components/Main/PostList';
import { ProfileImageProps } from '@components/Main/ProfileImage';

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    allMdx: {
      edges: PostType[];
    };
    file: {
      publicURL: string;
      childImageSharp: {
        fluid: ProfileImageProps['profileImage'];
      };
    };
    site: {
      siteMetadata: {
        title: string;
        siteUrl: string;
        description: string;
      };
    };
  };
}

const IndexPage: FC<IndexPageProps> = ({
  location: { search },
  data: {
    allMdx: { edges },
    file: {
      publicURL,
      childImageSharp: { fluid },
    },
    site: { siteMetadata },
  },
}: IndexPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category;

  return (
    <Template
      title={siteMetadata.title}
      description={siteMetadata.description}
      url={siteMetadata.siteUrl}
      image={publicURL}
    >
      <Header />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};
export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMdx(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;
