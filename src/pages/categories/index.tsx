import { graphql } from 'gatsby';
import React, { FC, useMemo } from 'react';
import queryString, { ParsedQuery } from 'query-string';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Header from '@components/Common/Header';
import Template from '@components/Common/Template';
import PostList, { PostType } from '@components/Main/PostList';
import { ProfileImageProps } from '@components/Main/ProfileImage';
import CategoryList, { CategoryListProps } from '@components/Main/CategoryList';

deckDeckGoHighlightElement();

interface CategoriesPageProps {
  location: {
    search: string;
  };
  data: {
    allMdx: {
      edges: PostType[];
    };
    file: {
      publicURL: string;
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

const CategoriesPage: FC<CategoriesPageProps> = ({
  location: { search },
  data: {
    allMdx: { edges },
    file: { publicURL },
    site: { siteMetadata },
  },
}: CategoriesPageProps) => {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category ? 'All' : parsed.category;

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories?.forEach((category) => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  );

  return (
    <Template
      title={siteMetadata.title}
      description={siteMetadata.description}
      url={siteMetadata.siteUrl}
      image={publicURL}
    >
      <Header />
      <CategoryList selectedCategory={selectedCategory} categoryList={categoryList} />
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Template>
  );
};
export default CategoriesPage;

export const getCategoriesList = graphql`
  query getCategoriesList {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      filter: { frontmatter: { categories: { ne: null } } }
    ) {
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
