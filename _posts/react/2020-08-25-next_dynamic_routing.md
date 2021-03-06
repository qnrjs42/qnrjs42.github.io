---
title: "[React, Nextjs] Nextjs 동적 라우팅"
excerpt: "@loadable/component"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - React
tags:
  - React
  - Nextjs
  - loadable
  - useRouter
last_modified_at: 2020-08-25T000:00:00-:00
---

이 코드를 사용하게 된 계기는<br />
각각의 URL별로 4개의 컴포넌트 중 3개는 공유하지만 1개는 계속 바뀌는걸 구현해야했다.

정적으로만 생각하고 동적으로 생각을 안 해봤는데 다음 날 갑자기 동적 라우팅이 생각이 났다.

필요한 URL  
localhost:3000/user/index  
localhost:3000/user/manage_url  
...

즉, user 폴더 내에서 여러 컴포넌트들을 불러오는 것이다.

## 0. 모듈 설치하기

```react
{% raw %}
// 필요한 모듈
npm i @loadable/component
npm i next
{% endraw %}
```

## 1. 컴포넌트 메뉴에서 설정하기

```react
{% raw %}
// /front/components/SiderMenu.js

import Link from 'next/link';

<Link href="/user/[url]" as={`/user/index`}>
    <a><span>관리페이지</span></a>
</Link>

<Link href="/user/[url]" as={`/user/manage_url`}>
    <a><span>전체 링크 관리</span></a>
</Link>
{% endraw %}
```

```react
href="/user/[url]"에서 [url]은
 /front/pages/user/[url].js 라는 파일을 통해 동적 라우팅을 하겠다고 표시
 라우터에서의 폴더명과 파일명이 href 키워드에 매치해야함

as={`/user/index`}에서 as 키워드는
 라우터에게 넘겨줄 뒷자리 url를 뜻함

예)
as={`/user/index`}
localhost:3000/user/index

as={`/user/manage_url`}
localhost:3000/user/manager_url
```

## 2. 라우터에서 어떤 링크가 왔는지 검증

_파일 구조_
컴포넌트: /front/components/SiderMenu.js  
라우터: /front/pages/user/[url].js

```react
{% raw %}
// /front/pages/user/[url].js

import React from "react";
import { useRouter } from "next/router";
import loadable from "@loadable/component";

import UserLayout from "../../components/UserLayout";

const UserIndex = () => {
  const router = useRouter();

  // 초기 /user 진입했을 때 | null로 하면 에러 발생
  let UserComponent = loadable(() =>
    import("../../components/UserLayout/Dashboard/MainManageLayout")
  );

  console.log('router', router);

  // 컴포넌트에서 넘겨준 값 비교해서 알맞는 컴포넌트 할당
  switch (router.query.url) {
    case 'index':
      UserComponent = loadable(() =>
        import("../../components/UserLayout/Dashboard/MainManageLayout")
      );
      break;
    case 'manage_url':
      UserComponent = loadable(() =>
        import("../../components/UserLayout/Dashboard/LinkManageLayout")
      );
      break;
  }

  return (
    <>
      <UserLayout>
        <UserComponent />
      </UserLayout>
    </>
  );
};

export default UserIndex;

{% endraw %}
```

<br />

참고 Link: [https://github.com/gregberge/loadable-components][link]

[link]: https://github.com/gregberge/loadable-components "Go"

참고 Link: [https://jcon.tistory.com/m/128?category=798379][link2]

[link2]: https://jcon.tistory.com/m/128?category=798379 "Go"

참고 Link: [https://velog.io/@ansrjsdn/Next.js-%EB%9D%BC%EC%9A%B0%ED%8C%85][link3]

[link3]: https://velog.io/@ansrjsdn/Next.js-%EB%9D%BC%EC%9A%B0%ED%8C%85 "Go"
