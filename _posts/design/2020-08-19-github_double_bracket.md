---
title:  "[Design] github markdown 이중 중괄호"
excerpt: "이중 중괄호"

categories:
  - Design
tags:
  - Design
  - Github Markdwon-이중 중괄호
last_modified_at: 2020-08-19T000:00:00-:00
---


Github Markdown 이중 중괄호 사용 방법

raw라는 태그 사용하면 된다.

{ }와 %는 붙여서 사용한다.

<p>
{ % raw % }
{ % endraw % }
</p>

```
{% raw %}
Hello, my name is {{name}}.
{% endraw %}
```

Link: [github_markdwon_double_bracket][link]

링크타고 'order' 검색

[link]: https://www.it-swarm.dev/ko/markdown/jekyll%EC%9D%98-%EB%A7%88%ED%81%AC-%EB%8B%A4%EC%9A%B4-%EC%BD%94%EB%93%9C-%EB%B8%94%EB%A1%9D-%EC%95%88%EC%97%90%EC%84%9C-%EC%9D%B4%EC%A4%91-%EC%A4%91%EA%B4%84%ED%98%B8%EB%A5%BC-%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84-%EC%B2%98%EB%A6%AC/1047233674/ "Go"