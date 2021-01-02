---
title: "[Javascript] Array - filter()"
date: 2020-08-24 00:00:00 +0900
categories: [Javascript]
tags: [Javascript, Array, filter]
toc: true
---

## filter()

forEach()처럼 시맨틱 접근
forEach()처럼 사용

참고 Link: [Choi Boo - Array_forEach()][linkcb]<br />

[linkcb]: https://qnrjs42.github.io/javascript/Array_ForEach/ "Go"

배열의 엘리먼트를 하나씩 읽어가면서
콜백 함수에서 true 반환하면 현재 읽은 엘리먼트를 반환한다.

조건에 맞는 엘리먼트를 추려낼 때 유용하다.

### true일 때 엘리먼트 반환

```javascript
{% raw %}
var value = [10, 20, 30, 40];
var fn = function(el, index, all) {
    return el > 15;
}
var result = value.filter(fn);
console.log(result);
{% endraw %}
```

```
실행결과
[20, 30, 40]
```

```
실행결과 설명
fn 콜백 함수 리턴 값 중
el이 15보다 클 경우 true를 반환하기 때문에
true가 되면 현재 엘리먼트를 반환한다.
```

<br /><br /><br />
참고 Link: [인프런 - 자바스크립트 비기너: 튼튼한 기본 만들기][link]<br />
지식공유자: 김영보

[link]: https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88 "Go"
