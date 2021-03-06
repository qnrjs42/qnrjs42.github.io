---
title: "[Redux] Nextjs와 Redux-saga"
date: 2020-09-17 00:00:00 +0900
categories: [Redux]
tags: [Redux, Redux, redux-saga]
---

## 필요한 모듈

```react
redux-saga
next-redux-saga
```

### 제너레이터 함수는 중단점이 있는 함수

```javascript
const gen = function* () {
  console.log(1);
  yield; // 멈춤
  console.log(2);
  yield; // 멈춤
  console.log(3);
  yield; // 멈춤
};
const generator = gen();

generator.next(); // 1 | done: false
generator.next(); // 2 | done: false
generator.next(); // 3 | done: false
generator.next(); // done: true
```

금기 되어있는 무한루프 코드<br />
하지만 제너레이터 함수에서는 중단점이 있어서 유용

```javascript
const gen = function* () {
    let i = 0;
  while (true) {
    yield i++;
  }
};

const generator = gen();

generator.next(); // value: 0, done: false
generator.next(); // value: 1, done: false
generator.next(); // value: 2, done: false
generator.next(); // value: 3, done: false
generator.next(); // value: 4, done: false
...
...

```

```javascript
// pages/_app.js

import withReduxSaga from "next-redux-saga";

export default wrapper.withRedux(withReduxSaga(NodeBird));
```

```javascript
// sagas/user.js

import { all, fork, call, take, put } from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    // 성공 결과: result.data
    // 실패 결과: err.response.data

    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}

export default function* rootSaga() {
  yield all([fork(watchLogIn)]);
}
```

**all([fork(watchLogin), fork(watchLogOut)])**<br />
**all([])** : 배열에 들어있는 코드를 동시에 실행

**fork(watchLogin**)<br />
**fork()** : 파라미터의 함수를 실행 (비동기 함수 호출) 결과 상관없이 다음 코드 실행

**call(watchLogin)**<br />
**call()** : 파라미터의 함수를 실행 (동기 함수 호출) 결과를 기다린 후 다음 코드 실행

**function\* logIn() {}**<br />
**yield take('LOG_IN', logIn);**<br />
**take()** : 'LOG_IN'이라는 액션이 실행될 때까지 기다림, 하지만 한 번만 실행하면 끝나버림<br />
액션이 실행되면 logIn이라는 제너레이터 함수 실행

**function loginAPI(data) {}**<br />
**call(loginAPI, action.data)** : 이부분만 제너레이터 함수가 아닌 일반 함수 사용<br />
첫 번째 파라미터는 함수<br />
두 번째 파라미터부터는 함수의 매개변수로 전달

**put()**: dispatch라고 보면 된다

**take('LOG_IN_REQUEST', logIn)**: 일회성 동작<br />
**takeEvery('LOG_IN_REQUEST', logIn)**: 비동기 동작<br />
**takeLeading('LOG_IN_REQUEST', logIn)**: 클릭 실수로 두 번했을 때 처음 클릭만 동작<br />
**takeLatest('LOG_IN_REQUEST', logIn)**: 클릭 실수로 두 번했을 때 마지막 클릭만 동작<br />
**throttle('LOG_IN_REQUEST', logIn, 2000)**: 2초 동안은 한 번만 동작

**delay(1000)** : 1초 동안 대기, 비동기

# 동작 순서

## 1. 코드 동시 실행

```javascript
yield all([fork(watchLogIn)]);
```

-> all([]) 배열에 있는 코드 동시 실행

## 2. REQUEST 액션 감지

```javascript
function\* watchLogIn() {
    yield take("LOG_IN_REQUEST", logIn);
}
```

-> "LOG_IN_REQUEST"이라는 액션이 실행될 때까지 기다림,
액션이 실행되면 logIn 제너레이터 함수 실행

## 3. logIn 제너레이터 함수 실행

```javascript
function\* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        // 성공 결과: result.data
        // 실패 결과: err.response.data
        yield put({
            type: "LOG_IN_SUCCESS",
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: "LOG_IN_FAILURE",
            data: err.response.data,
        });
    }
}
```

-> action 매개변수는 "LOG_IN_REQUEST"이라는 요청과 함께 같이 보내온 data

## 4. call() 동기적 함수, 서버에 결과 값 받을 때까지 대기

```javascript
const result = yield call(logInAPI, action.data);
```

-> logInAPI이라는 함수를 실행하나 결과 값을 받을 때까지 기다림

## 5. 서버에 로그인 data 전송

```javascript
function logInAPI(data) {
  return axios.post("/api/login", data);
}
```

## 6. 서버에서 데이터를 가져온 결과

    성공 결과: result.data
    실패 결과: err.response.data

## 7. 성공 했을 때

```javascript
yield put({
    type: "LOG_IN_SUCCESS",
    data: result.data,
 });
```

## 8. 실패 했을 때

```javascript
yield put({
    type: "LOG_IN_FAILURE",
    data: err.response.data,
});
```
