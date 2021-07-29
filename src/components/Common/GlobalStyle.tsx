import { Global, css } from '@emotion/react';
import React, { FunctionComponent } from 'react';

const defaultStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard, -apple-system, 'Apple SD Gothic Neo', 'Nanum Myeongjo', sans-serif;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle: FunctionComponent = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
