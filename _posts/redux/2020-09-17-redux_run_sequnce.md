---
title: "[Redux]  Redux-Saga 동작 순서"
date: 2020-09-17 00:00:00 +0900
categories: [Redux]
tags: [Redux, Nextjs, redux-saga]
---

## components/LoginForm.js

```javascript
dispatch(loginRequestAction(data));
```

## reducers/users.js

```javascript
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
```

## reducer/users.js

```javascript
case "LOG_IN_REQUEST":
return {
  ...state,
  isLoggingIn: true,
};
```

## sagas/user.js

```javascript
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
```

## sagas/user.js

```javascript
function* logIn(action) {
  yield put({
    type: "LOG_IN_SUCCESS",
    data: action.data,
  });
}
```

## reducers/user.js

```javascript
case "LOG_IN_SUCCESS":
return {
  ...state,
  isLoggingIn: false,
  isLoggedIn: true,
  me: { ...action.data, nickname: "zerocho" },
};
```
