---
title: "[Javascript] Array - forEach()"
date: 2020-08-24 00:00:00 +0900
categories: [Javascript]
tags: [Javascript, Array, forEach]
toc: true
---

## forEach()

forEach(엘리먼트 값, 인덱스, 배열 전체)<br />
파라미터: 콜백 함수, this로 참조할 오브젝트

<br />
break, continue 사용 불가<br />
throw 사용 가능

즉, forEach 반복 중에 빠져나올 수 없다.

### 반복 처리 방법

```javascript
{% raw %}
// 1. 반복 처리 방법
var list = ["A", "B", "C"];
list.forEach(function(el, index, all) {
    console.log(`${el}: ${index}: ${all}`);
})
{% endraw %}
```

```
실행결과
A: 0: A,B,C
B: 1: A,B,C
C: 2: A,B,C
```

```
실행결과 설명
A: B: C: 는 배열의 엘리먼트 값
0: 1: 2: 는 배열의 인덱스
A,B,C 는 배열의 전체 엘리먼트
```

### 콜백 함수 분리 (코드 재사용, 방법 1번과 동일)

```javascript
{% raw %}
// 2. 콜백 함수 분리
var list = ["A", "B", "C"];
var fn = function(el, index, all) {
    console.log(`${el}: ${index}: ${all}`);
}

list.forEach(fn);
{% endraw %}
```

```
실행결과
A: 0: A,B,C
B: 1: A,B,C
C: 2: A,B,C
```

```
실행결과 설명
A: B: C: 는 배열의 엘리먼트 값
0: 1: 2: 는 배열의 인덱스
A,B,C 는 배열의 전체 엘리먼트
```

### this로 오브젝트 참조

```javascript
{% raw %}
// 3. this로 오브젝트 참조
var list = [1, 2];
var fn = function(el, index, all) {
    console.log(el + this.ten);
}

list.forEach(fn, { ten: 10 });
{% endraw %}
```

```
실행결과
11
12
```

```
실행결과 설명
{ ten: 10 }은 파라미터로 넘겨주진 않지만
 this로 해당 object를 참조할 수 있다.
```

<br /><br /><br />
참고 Link: [인프런 - 자바스크립트 비기너: 튼튼한 기본 만들기][link]<br />
지식공유자: 김영보

[link]: https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88 "Go"
