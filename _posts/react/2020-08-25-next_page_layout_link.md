---
title: "[React, Nextjs] Nextjs 컴포넌트 공유"
excerpt: "const UserLayout = ({children}) => {}"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - React
tags:
  - React
  - Nextjs
  - page
  - layout
  - link
  - 컴포넌트 공유
last_modified_at: 2020-08-25T000:00:00-:00
---

nextjs에서 한 페이지에서 여러 컴포넌트를 공유할 때 여러가지 방법이 있는데  
react - prop을 이용한 방법으로 컴포넌트를 라우터에게 전달하는 방법을 이용하겠다.

## 1. 컴포넌트에서 prop 전달

```react
{% raw %}
// /front/components/AppLayout.js

import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>홈</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/blog"><a>블로그</a></Link>
            </div>

            {children}
        </div>
    )
}

// prop 데이터 타입 검증
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
{% endraw %}
```

## 2. 라우터에서 렌더링

```react
{% raw %}
// /front/pages/index.js

import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    )
}

export default Home;
{% endraw %}
```

```react
<AppLayout>
    <div>Hello, Next!</div>
</AppLayout>

<div>Hello, Next!</div>
-> 이 부분이 AppLayout.js에서의 {children}이 된다.
```

<br />

참고 Link: [인프런 - [리뉴얼] React로 NodeBird SNS 만들기][link]

[link]: https://www.inflearn.com/course/%EB%85%B8%EB%93%9C%EB%B2%84%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%89%B4%EC%96%BC "Go"
