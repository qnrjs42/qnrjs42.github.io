---
title: "[Javascript] Array - reduce()"
excerpt: "Array.reduce(function(){})"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - Javascript
tags:
  - Javascript
  - Array
  - reduce
last_modified_at: 2020-08-24T000:00:00-:00
---

## reduce()

forEach()처럼 시맨틱 접근

배열 끝까지 콜백 함수 호출<br />
파라미터 작성 여부에 따라 처리가 다르다.

### 1. 첫 번째 파라미터(콜백 함수)만 작성했을 때

```javascript
{% raw %}
var value = [1, 3, 5, 7];
var fn = function(prev, curr, index, all) {
	console.log(prev + ", " + curr);

	return prev + curr;
}

var result = value.reduce(fn);
console.log("결과: ", result);
{% endraw %}
```

```
실행결과
1, 3
4, 5
9, 7
결과: 16
```

```
실행결과 설명

reduce() 첫 번째 파라미터만 작성한 경우

처음 콜백 함수 호출 시
 prev : 인덱스 [0]의 값
 curr : 인덱스 [1]의 값
 index : 1

두 번째 콜백 함수 호출 시
 콜백 함수에서 반환된 값을 직전 값에 설정
 prev : 처음 콜백 함수에서 반환된 값
 curr : 인덱스 [2]의 값
 index : 2
 - 반복

마지막으로 반환된 값을 result에 할당
```

### 2. 두 번째 파라미터까지 작성했을 때

```javascript
{% raw %}
var value = [1, 3, 5];
var fn = function(prev, curr, index, all) {
	console.log(prev + ", " + curr);

	return prev + curr;
}

var result = value.reduce(fn, 7);
console.log("결과: ", result);
{% endraw %}
```

```
실행결과
7, 1
8, 3
11, 5
결과: 16
```

```
실행결과 설명

reduce() 두 번째 파라미터를 작성한 경우

처음 콜백 함수 호출 시
 prev : 두 번째 파라미터 값
 curr : 인덱스 [0]의 값
 index : 0

두 번째 콜백 함수 호출 시
 prev : 처음 콜백 함수에서 반환된 값
 curr : 인덱스 [1]의 값
 index : 1
 - 반복

마지막으로 반환된 값을 result에 할당
```

<br /><br /><br />
참고 Link: [인프런 - 자바스크립트 비기너: 튼튼한 기본 만들기][link]<br />
지식공유자: 김영보

[link]: https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88 "Go"
