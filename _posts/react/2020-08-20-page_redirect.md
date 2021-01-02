---
title:  "[React, Nextjs] 페이지 이동 후 새로고침"
excerpt: "document.location.href = '/'"

categories:
  - React
tags:
  - React
  - Nextjs
  - 페이지 이동
last_modified_at: 2020-08-20T000:00:00-:00
---


Nextjs의 'Link - href', 'Router - push'같은 경우 페이지 이동 후 새로고침을 하지 않는다.

document.location.href = '/'를 사용할 경우 페이지 이동 후 새로고침을 한다.

하지만 Nextjs에서 필요한 코드는 아닌 것 같다.

새로고침이 된 후 Redux state를 보니 정보가 없어졌다. 이 점 참고하여 사용을 해야할 필요가 있다.

```javascript
{% raw %}
// link_project - pages - login 중에서...
document.location.href = "/user";
{% endraw %}
```



참고 Link: [lemontia.tistory.com][link]

[link]: https://lemontia.tistory.com/926 "Go"