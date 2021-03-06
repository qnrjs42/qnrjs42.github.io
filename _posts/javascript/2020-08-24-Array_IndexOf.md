---
title: "[Javascript] Array - indexOf()"
excerpt: "Array.indexOf('C', -2)"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - Javascript
tags:
  - Javascript
  - Array
  - indexOf
last_modified_at: 2020-08-24T000:00:00-:00
---

## indexOf()란

파라미터 값과 같은 엘리먼트의 인덱스를 반환한다.<br />
왼쪽에서 오른쪽으로 검색한다.

여기서 엘리먼트란.<br />
배열의 형태를 [123, "ABC", "가나다"]<br />
배열의 엘리먼트 또는 요소를 123, "ABC", "가나다"라고 한다.

또한 엘리먼트의 위치를 인덱스라고 한다.

### 1. 같은 값 찾기

```javascript
{% raw %}
// 1. 값이 같은 엘리먼트가 있으면 검색 종료
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5)); // 2

// 찾으려는 엘리먼트가 2번 인덱스에 있어 2를 반환
{% endraw %}
```

### 2. 데이터 타입이 다를 때

```javascript
{% raw %}
// 2. 데이터 타입까지 체크
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf("5")); // -1

// 찾으려는 엘리먼트가 문자 "5", 배열의 엘리먼트는 숫자 5
// 데이터 타입이 달라 같은 값이 없으면 -1를 반환
{% endraw %}
```

### 3. 두 번째 파라미터 입력했을 때

```javascript
{% raw %}
// 3. 두 번째 파라미터의 인덱스부터 검색
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5, 3)); // 4

// 3번 인덱스부터 5를 검색
{% endraw %}
```

### 4. String.indexOf()

```javascript
{% raw %}
// 4. String.indexOf()
console.log("ABCBC".indexOf("C", -2)); // 2

// String Object는 -2를 무시하고 0으로 간주하여 처음부터 검색
{% endraw %}
```

### 5. Array.indexOf()

```javascript
{% raw %}
// 5. Array.indexOf()
var list = ["A", "B", "C", "B", "C"];
console.log(list.indexOf("C", -2)); // 4

// length(5) + -2 = 3, 3번 인덱스부터 "C" 검색
{% endraw %}
```

<br /><br /><br />
참고 Link: [인프런 - 자바스크립트 비기너: 튼튼한 기본 만들기][link]<br />
지식공유자: 김영보

[link]: https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B8%B0%EB%84%88 "Go"
