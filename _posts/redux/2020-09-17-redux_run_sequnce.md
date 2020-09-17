---
title: "Redux, Redux-Saga 동작 순서"
excerpt: ""

categories:
  - Redux
tags:
  - Nextjs
  - Redux
  - Redux-Saga
last_modified_at: 2020-09-17T012:00:00-:00
---

## 1. components/LoginForm.js

```javascript
dispatch(loginRequestAction(data));
```

## 2. reducers/users.js

```javascript
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
```

## 3. reducer/users.js

```javascript
case "LOG_IN_REQUEST":
return {
  ...state,
  isLoggingIn: true,
};
```

## 4. sagas/user.js

```javascript
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
```

## 5. sagas/user.js

```javascript
function* logIn(action) {
  yield put({
    type: "LOG_IN_SUCCESS",
    data: action.data,
  });
}
```

## 6. reducers/user.js

```javascript
case "LOG_IN_SUCCESS":
return {
  ...state,
  isLoggingIn: false,
  isLoggedIn: true,
  me: { ...action.data, nickname: "zerocho" },
};
```
