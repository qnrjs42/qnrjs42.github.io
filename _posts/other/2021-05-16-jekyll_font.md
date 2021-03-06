---
title: "jekyll theme font 쉽게 바꾸는 방법 (구글 웹 폰트)"
excerpt: "jekyll minimal-mistakes theme"

categories:
  - other
tags:
  - Jekyll
last_modified_at: 2021-05-16T000:00:00-:00
---

### theme : jekyll minimal-mistakes

<br />

구글 웹 폰트: [https://fonts.google.com/specimen/Noto+Sans+KR][link]

[link]: https://fonts.google.com/specimen/Noto+Sans+KR "Go"

```scss
//  /assets/css.main.scss
---
# Only the main Sass file needs front matter (the dashes are enough)
---

@charset "utf-8";

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}"; // skin
@import "minimal-mistakes"; // main partials
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"); // 이 부분 복사 붙혀넣기
```

```scss
//  _sass/minimal-mistakes/_variables.scss
/* system typefaces */
$serif: Georgia, Times, serif !default;
$sans-serif: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",
  "Helvetica Neue", "Lucida Grande", Arial, sans-serif !default;
$monospace: "Noto Sans KR", Monaco, Consolas, "Lucida Console", monospace !default;
```

- $serif: 이 변수는 뭔지 잘 모르기때문에 건드리지 않습니다.
- $sans-serif: 이 변수가 모든 font-family가 됩니다. (css의 \*{} 라고 보면 됩니다.)
- $monospace: 이 변수는 코드블럭 내에 font-family가 됩니다.

저장하고 보면 달라진게 느껴집니다. 개발자 도구로도 확인 해보세요.

또한 똑같이 했는데 되질 않는다면 테마 호환성이 맞질 않아서 그럴 가능성이 있습니다.

어떤 테마가 똑같이 안 된다면 댓글 남겨주세요.
