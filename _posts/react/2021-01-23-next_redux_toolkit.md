---
title: "[React, Nextjs, Redux] Nextjs + Redux-Toolkit + Typescript (with Hooks)"
excerpt: "get[Static, ServerSide]Props는 아직 제외. 추후에 추가 예정"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - React
  - Redux
tags:
  - React
  - Nextjs
  - Redux
  - Redux-Toolkit
  - Typescript
last_modified_at: 2021-03-31T000:00:00-:00
---

> 21.03.31 수 업데이트
>
> > useSelector 타입추론 추가 (공식문서 참고)

redux는 꽤나 typescript를 적용하는데 애를 먹었다.

지금 막 테스트를 해본거라 서버도 없으니(귀찮) get[Static, ServerSide]Props는 나중에 추가할 것이다.

`dispatch`까지 알아보겠다.

redux-toolkit에 대한 설명은 아래 링크에서

참고 Link: [https://github.com/qnrjs42/redux_toolkit_mobx][link]

[link]: https://github.com/qnrjs42/redux_toolkit_mobx "Go"

**버전에 따라 달라질 수 있으니 유의해야한다!!!!!**

## 필요한 모듈

```
npm i react-redux next-redux-wrapper @reduxjs/toolkit
npm i -D @types/react-redux typescript
```

```json
// package.json
{
  "name": "next-front",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next"
  },
  "author": "qnrjs42",
  "license": "ISC",
  "dependencies": {
    "@ant-design/icons": "^4.4.0",
    "@reduxjs/toolkit": "^1.5.0",
    "antd": "^4.10.3",
    "next": "^10.0.5",
    "next-redux-wrapper": "^6.0.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-redux": "^7.2.2",
    "styled-components": "^5.2.1"
  },
  "devDependencies": {
    "@types/node": "^14.14.21",
    "@types/react": "^17.0.0",
    "@types/react-redux": "^7.1.16",
    "@types/styled-components": "^5.1.7",
    "eslint": "^7.18.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "typescript": "^4.1.3"
  }
}
```

---

## store.ts

```ts
import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import slice from "../slices";

const devMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: slice,
  middleware: [...getDefaultMiddleware()],
  devTools: devMode,
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore = (context) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

// 21.03.31 추가
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default wrapper;
```

---

## interface

### user.ts

```ts
export interface IUser {
  isLoggedIn: boolean;
  user: any;
  signUpdata?: any;
  loginData?: any;
}
```

### post.ts

```ts
// 예시로 들었기 때문에 posts는 그냥 뼈대만 있는거라고 생각하면 된다.
export interface IPost {}
```

---

## slices/index.ts

```ts
import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import users from "./users";
import posts from "./posts";
import { IUser } from "../interface/user";
import { IPost } from "../interface/post";

export interface State {
  users: IUser;
  posts: IPost;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        users,
        posts,
      });
      return combineReducer(state, action);
    }
  }
};
// 21.03.31 제거
// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
```

### slice/users.ts

```ts
import { createSlice } from "@reduxjs/toolkit";

import { logInAction, logOutAction } from "../actions/users";
import { IUser } from "../interface/user";

const initialState: IUser = {
  isLoggedIn: false,
  user: null,
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
      .addCase(logInAction.pending, (state, action) => {})
      .addCase(logInAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logInAction.rejected, (state, action) => {})

      .addCase(logOutAction.pending, (state, action) => {})
      .addCase(logOutAction.fulfilled, (state, action) => {})
      .addCase(logOutAction.rejected, (state, action) => {})
      .addDefaultCase(() => {}),
});

export default users.reducer;
```

### slice/posts.ts

```ts
// 예시로 들었기 때문에 posts는 그냥 뼈대만 있는거라고 생각하면 된다. (users 복사본)

import { createSlice } from "@reduxjs/toolkit";

import { logInAction } from "../actions/users";
import { IPost } from "../interface/post";

const initialState: IPost = {};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      // builder의 addCase는 typescript의 타입 추론 사용할 때 편하다.
      .addCase(logInAction.pending, (state, action) => {})
      .addCase(logInAction.fulfilled, (state, action) => {})
      .addCase(logInAction.rejected, (state, action) => {})

      .addDefaultCase(() => {}),
});

export default posts.reducer;
```

---

## hooks/useSelector.ts

- 21.03.31 추가

```ts
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

## actions/users.ts

```ts
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from "../interface/user";

interface rejectMessage {
  errorMessage: string;
}

// 아무것도 없음
export const logOutAction = createAsyncThunk(
  "user/logOut",
  async (data, thnukAPI) => {}
);

export const logInAction = createAsyncThunk<
  IUser,
  any,
  { rejectValue: rejectMessage }
>("user/logIn", async (data) => {
  console.log(data, "logIn action");

  return data;
});
```

---

## pages/\_app.tsx

```tsx
{% raw %}
import React from 'react';
import Head from 'next/head';
import { AppContext } from "next/app";
import 'antd/dist/antd.css';

import wrapper from '../store';

const App = ({ Component }: AppContext) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>App</title>
      </Head>
      <Component />
    </>
  );
}

export default wrapper.withRedux(App);
{% endraw %}
```

---

## components/AppLayout.tsx

- 21.03.31 변경

```tsx
{% raw %}
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Menu, Input, Row, Col } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { IUser } from '../interface/user';
import { useAppSelector } from '../hooks/useSelector';

interface IProps {
  children: React.ReactNode;
}

const SearchInput = styled(Input.Search)`
  vertical-align: 'middle';
`;

const AppLayout = ({ children }: IProps) => {
  // 21.03.31 추가
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  // 21.03.31 제거
  // const isLoggedIn = useSelector<RootState, boolean>((state) => state.users.isLoggedIn);

  console.log('>>>', isLoggedIn);

  return (
    <>
    <Menu mode="horizontal">
      <Menu.Item><Link href="/"><a>홈</a></Link></Menu.Item>
      <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
      <Menu.Item>
        <SearchInput enterButton />
      </Menu.Item>
      <Menu.Item>
        <Link href="/signup"><a>회원가입</a></Link>
      </Menu.Item>
    </Menu>
    <Row gutter={8}>
      <Col xs={24} md={6}>
        {isLoggedIn ? <UserProfile /> : <LoginForm />}
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6}>
        <a href="https://github.com/qnrjs42" target="_blank" rel="noreferrer noopener">Made by Choi Boo</a>
      </Col>
    </Row>
    </>
  )
}

export default AppLayout;
{% endraw %}
```

---

## components/LoginForm.tsx

```tsx
{% raw %}
import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { logInAction } from '../actions/users';


const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

interface IProps {}

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(logInAction({
      id, password
    }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
      <div></div>
    </FormWrapper>
  )
}


export default LoginForm;
{% endraw %}
```

---

## 이미지로 상태 변화 보기

### 처음 실행했을 때

- 크롬-개발자 도구-콘솔에서 처음 실행했을 때 해당 로그가 출력되어야 `next-redux-wrapper`가 제대로 실행된걸 알 수 있다.

<img src="/assets/images/nextjs-redux-toolkit/1.png" width="100%" />

### 로그인폼에 아이디/패스워드 입력

<img src="/assets/images/nextjs-redux-toolkit/2.png" width="50%" />

### 로그인 성공

<img src="/assets/images/nextjs-redux-toolkit/3.png" width="50%" />

### 로그인 성공 후 로그

- 1 line log: `components/LoginForm.tsx`에서 `dispatch`하기 전
- 2 line log: `actions/users.ts`에서 `logInAction`안에서
- 3 line log: `components/AppLayout.tsx`에서 `useSelector`로 `isLoggedIn`가져온 후

<img src="/assets/images/nextjs-redux-toolkit/4.png" width="100%" />

### redux 상태 변화 / State / pending

<img src="/assets/images/nextjs-redux-toolkit/5.png" width="100%" />

### redux 상태 변화 / Diff / pending

<img src="/assets/images/nextjs-redux-toolkit/6.png" width="100%" />

### redux 상태 변화 / Diff / fulfilled

<img src="/assets/images/nextjs-redux-toolkit/7.png" width="100%" />

### redux 상태 변화 / State/ fulfilled

<img src="/assets/images/nextjs-redux-toolkit/8.png" width="100%" />

---

## 참고 링크

- [https://redux-toolkit.js.org/usage/usage-with-typescript][link2]

[link2]: https://redux-toolkit.js.org/usage/usage-with-typescript "Go"

- [https://stackoverflow.com/questions/64139344/how-to-use-typescript-next-redux-wrapper-getserversideprops][link3]

[link3]: https://stackoverflow.com/questions/64139344/how-to-use-typescript-next-redux-wrapper-getserversideprops "Go"

- [https://maruzzing.github.io/study/react/Redux-toolkit%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-1/][link4]

[link4]: https://maruzzing.github.io/study/react/Redux-toolkit%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-1/ "Go"

- [https://github.com/qnrjs42/UrlCut_Project/tree/master/front][link5]

[link5]: https://github.com/qnrjs42/UrlCut_Project/tree/master/front "Go"
