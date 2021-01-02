---
title: "[Javascript] 배열 다수의 데이터 삭제하는 방법"
excerpt: "Array.filter(), Array.indexOf(), Array.includes(), Array.findIndex()"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - Javascript
tags:
  - Javascript
  - Array
  - filter
  - indexOf
  - includes
  - findIndex
last_modified_at: 2020-09-19T000:00:00-:00
---

## filter()와 indexOf() 이용

삭제하려는 데이터의 구조가 [1, 3, 7, 9]일 때

```javascript
{% raw %}
const list = [
  { id: 1, name: "asdasd1" },
  { id: 2, name: "asdasd2" },
  { id: 3, name: "asdasd3" },
  { id: 4, name: "asdasd4" },
  { id: 5, name: "asdasd5" },
  { id: 6, name: "asdasd6" },
  { id: 7, name: "asdasd7" },
  { id: 8, name: "asdasd8" },
  { id: 9, name: "asdasd9" },
  { id: 10, name: "asdasd10" },
];

const removeDataId = [1, 3, 7, 9];

const newlist = list.filter((listItem) => {
  return removeDataId.indexOf(listItem.id) === -1;
});

console.log(newlist);
{% endraw %}
```

```
실행결과
[
  { id: 2, name: "asdasd2" },
  { id: 4, name: "asdasd4" },
  { id: 5, name: "asdasd5" },
  { id: 6, name: "asdasd6" },
  { id: 8, name: "asdasd8" },
  { id: 10, name: "asdasd10" },
];
```

## filter()와 includes() 이용

삭제하려는 데이터의 구조가 [1, 3, 7, 9]일 때

```javascript
{% raw %}
const list = [
  { id: 1, name: "asdasd1" },
  { id: 2, name: "asdasd2" },
  { id: 3, name: "asdasd3" },
  { id: 4, name: "asdasd4" },
  { id: 5, name: "asdasd5" },
  { id: 6, name: "asdasd6" },
  { id: 7, name: "asdasd7" },
  { id: 8, name: "asdasd8" },
  { id: 9, name: "asdasd9" },
  { id: 10, name: "asdasd10" },
];

const removeDataId = [1, 3, 7, 9];

const newlist = list.filter((listItem) => {
  return !removeDataId.includes(listItem.id);
});

console.log(newlist);
{% endraw %}
```

```
실행결과
[
  { id: 2, name: "asdasd2" },
  { id: 4, name: "asdasd4" },
  { id: 5, name: "asdasd5" },
  { id: 6, name: "asdasd6" },
  { id: 8, name: "asdasd8" },
  { id: 10, name: "asdasd10" },
];
```

## filter()와 findIndex() 이용

삭제하려는 데이터의 구조가 [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 7 }]일 때

```javascript
{% raw %}
const list = [
  { id: 1, name: "asdasd1" },
  { id: 2, name: "asdasd2" },
  { id: 3, name: "asdasd3" },
  { id: 4, name: "asdasd4" },
  { id: 5, name: "asdasd5" },
  { id: 6, name: "asdasd6" },
  { id: 7, name: "asdasd7" },
  { id: 8, name: "asdasd8" },
  { id: 9, name: "asdasd9" },
  { id: 10, name: "asdasd10" },
];

const removeDataId = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 7 }];

const newlist = list.filter((listItem) => {
  return removeDataId.findIndex((rd) => {
      return rd.id === listItem.id) === -1
  };
});

console.log(newlist);
{% endraw %}
```

```
실행결과
[
  { id: 2, name: "asdasd2" },
  { id: 4, name: "asdasd4" },
  { id: 5, name: "asdasd5" },
  { id: 6, name: "asdasd6" },
  { id: 8, name: "asdasd8" },
  { id: 10, name: "asdasd10" },
];
```
