import { Helmet } from 'react-helmet';
import React, { FC, ReactNode } from 'react';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import Footer from '@components/Common/Footer';
import GlobalStyle from '@components/Common/GlobalStyle';

import { Container } from './styles';

deckDeckGoHighlightElement();

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({
  title,
  description,
  url,
  image,
  children,
}: TemplateProps) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={url} />
        <meta property='og:site_name' content={title} />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:site' content='qnrjs42' />
        <meta name='twitter:creator' content='qnrjs42' />

        <meta
          name='google-site-verification'
          content='SNuvF6-Q8t7OSIkEfA5n8w6J79pGFEKAX9FlruNT2fA'
        />
        <meta name='naver-site-verification' content='77569c0695cbd152717f2e7b1cb6721ab1372ae9' />
        <html lang='ko' />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;
