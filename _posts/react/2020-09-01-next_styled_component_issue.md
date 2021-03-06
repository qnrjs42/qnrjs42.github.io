---
title: "[React, Nextjs] Nextjs와 styled-component 초기 렌더링 문제"
excerpt: "[20-09-02 수정] styled-compoent 적용 전에 렌더링이 끝나버리는 문제점"

categories:
  - React
tags:
  - React
  - Nextjs
  - styled-component
last_modified_at: 2020-09-01T000:00:00-:00
---

Nextjs에서와 styled-component 같이 사용 하던 중 <br />
styled-component가 적용되기 전에 next 렌더링이 끝나버리는 현상으로
style이 제대로 안 먹혀버린다.

> 구글링 결과 -> pages/\_document.js 파일에서 해당 코드를 적용하면 된다.

### 20-09-02 수정<br />

개발 모드에서는 문제가 없었으나 배포 모드에서 문제가 발생<br />

> 문제점: 초기에 버튼에 스타일이 문제 없었는데 버튼 클릭 시 스타일이 풀려버림<br />

> 해결: .babelrc 추가 및 \_document.js 코드 수정, polyfill 추가

polyfill은 사이트로 이동

참고 Link: [https://polyfill.io/v3/url-builder/][link]

[link]: https://polyfill.io/v3/url-builder/ "Go"

페이지 중간에 Available Polyfills 부분을 체크해야 함<br />
체크할 부분: default, es2015 ~ es2019 또는 필요한 부분 체크

그리고 위에 URL 즉, js URL를 복사하고 \_document.js 파일 처럼 붙여넣기

```javascript
{% raw %}
// /front

npm i babel-plugin-styled-components
{% endraw %}
```

```javascript
{% raw %}
// /front/.babelrc

{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": true
      }
    ]
  ]
}
{% endraw %}
```

```react
{% raw %}
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
{% endraw %}
```

<br />

참고 Link: [https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68][link2]

[link2]: https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68 "Go"
