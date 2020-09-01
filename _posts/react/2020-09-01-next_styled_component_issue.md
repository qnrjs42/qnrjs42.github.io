---
title: "[React, Nextjs] Nextjs와 styled-component 초기 렌더링 문제"
excerpt: "styled-compoent 적용 전에 렌더링이 끝나버리는 문제점"

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

구글링 결과 -> pages/\_document.js 파일에서 해당 코드를 적용하면 된다.

```react
{% raw %}
// pages/_document.js

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
{% endraw %}
```

<br />

참고 Link: [https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68][link]

[link]: https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68 "Go"
