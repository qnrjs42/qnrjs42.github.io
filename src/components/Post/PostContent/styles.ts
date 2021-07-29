import styled from '@emotion/styled';
import { BlackColor, PurpleColor } from '@utils/utilColor';

export const PostContentSection = styled.section`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0;
  word-break: break-all;
  color: ${BlackColor};

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  deckgo-highlight-code {
    margin: 10px 0 20px 0;
  }

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2 {
    margin-top: 60px;
  }

  * + h3 {
    margin-top: 30px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 1.875em;
  }

  h2 {
    font-size: 1.5625em;
  }

  h3 {
    font-size: 1.25em;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    /* padding: 30px 0; */
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: ${PurpleColor};
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px;
    line-height: 1.6;
    font-size: 14px;

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;
