---
title: "Nextjs와 Redux"
excerpt: "Nextjs와 Redux"

categories:
  - Redux
tags:
  - Nextjs
  - Redux
last_modified_at: 2020-09-17T012:00:00-:00
---

### next와 redux

## 1. 필요한 모듈

```react
next-redux-wrapper
redux
react-redux
redux-devtools-extension
```

## 2. React - Redux에서는

```react
// React에서의 코드
<Provider store={store}>
// Next에서는 해당 코드 작성하지 않아도 됨
```

## 3. Redux에 대해

redux 코드 중에
...state는 바뀌지 않는 데이터는 참조관계로 남고,
바뀌는 데이터만 새롭게 만들어낸다 그러므로 메모리 성능에 효과적

```javascript
{
    ...state,   // 바뀌지 않는 데이터는 재사용
    name: action.data, // 바뀐 데이터는 새로 만듦
}
```

배포 모드에서는 히스토리 모드가 필요없어서 메모리 정리는 계속 하기 때문에 메모리 문제가 일어나지 않는다
