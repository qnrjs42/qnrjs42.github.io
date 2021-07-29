import { graphql } from 'gatsby';
import React, { FC } from 'react';

import Header from '@components/Common/Header';
import Template from '@components/Common/Template';

interface CategoriesPageProps {
  data: {
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
  data: {
    file: { publicURL },
    site: { siteMetadata },
  },
}: CategoriesPageProps) => {
  return (
    <Template
      title={siteMetadata.title}
      description={siteMetadata.description}
      url={`${siteMetadata.siteUrl}/about`}
      image={publicURL}
    >
      <Header />
    </Template>
  );
};
export default CategoriesPage;

export const getAbout = graphql`
  query getAbout {
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
