import React, { VFC } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 0.875em;
  text-align: center;
  line-height: 1.5;
`;

const Footer: VFC = () => {
  return <FooterWrapper>© CHOI BOO 2021</FooterWrapper>;
};

export default Footer;
