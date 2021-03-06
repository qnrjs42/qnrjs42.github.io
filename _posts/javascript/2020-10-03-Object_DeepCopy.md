---
title: "[Javascript] Object - DeepCopy"
excerpt: "for (const [key, value] of Object.entries(obj))"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - Javascript
tags:
  - Javascript
  - Object
  - DeepCopy
last_modified_at: 2020-10-03T000:00:00-:00
---

## Object.entries(obj)

참고 Link: [Object.entries() - MDN][link]<br />

[link]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries "Go"

[key, value] 쌍의 배열을 반환

### 1. Javascript

```javascript
const deepCopy = (obj) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    console.log(`key: ${key}, value: ${value}`);
    newObj[key] = value;
  }
  return newObj;
};

const obj = {
    id: 1,
    name: '김철수',
    age: '107',
    bank: '국민은행',
    smartDevice: {
        phone: 'iPhone 100',
        laptop: 'MacBook Pro 100',
        tablet: 'iPad Pro 100',
    },
    brand: {
        nike: {
            shoes: ['에어 포스 1', '에어 테일윈드 79'],
            wear: '스포츠웨어 클럽 플리스 크루 탑',
        },
        adidas: {
            shoes: ['슈퍼스타', '울트라부스트'],
            wear: '파이어버드 트랙탑',
        }
    }
}
console.time('DeepCopy');
console.log(deepCopy(obj));
console.timeEnd('DeepCopy');
```

```json
실행 결과 (크롬 브라우저)
{
    age: "107"
    bank: "국민은행"
    brand: {nike: {…}, adidas: {…}}
        adidas: {shoes: Array(2), wear: "파이어버드 트랙탑"}
            shoes: (2) ["슈퍼스타", "울트라부스트"]
                0: "슈퍼스타"
                1: "울트라부스트"
                length: 2
                __proto__: Array(0)
            wear: "파이어버드 트랙탑"
        nike: {shoes: Array(2), wear: "스포츠웨어 클럽 플리스 크루 탑"}
            shoes: (2) ["에어 포스 1", "에어 테일윈드 79"]
                0: "에어 포스 1"
                1: "에어 테일윈드 79"
                length: 2
                __proto__: Array(0)
            wear: "스포츠웨어 클럽 플리스 크루 탑"
        __proto__: Object
    id: 1
    name: "김철수"
    smartDevice: {phone: "iPhone 100", laptop: "MacBook Pro 100", tablet: "iPad Pro 100"}
        laptop: "MacBook Pro 100"
        phone: "iPhone 100"
        tablet: "iPad Pro 100"
        __proto__: Object
    __proto__: Object
}

실행 속도
DeepCopy: 0.549072265625 ms
```

### 2. Typescript
```typescript
interface copyObjTypes {
  [key: string]: string | object;
}

const deepCopy = (obj: object) => {
  const newObj: copyObjTypes = {};
  for (const [key, value] of Object.entries(obj)) {
    console.log(`key: ${key}, value: ${value}`);
    newObj[key] = value;
  }
  return newObj;
};

const obj = {
    id: 1,
    name: '김철수',
    age: '107',
    bank: '국민은행',
    smartDevice: {
        phone: 'iPhone 100',
        laptop: 'MacBook Pro 100',
        tablet: 'iPad Pro 100',
    },
    brand: {
        nike: {
            shoes: ['에어 포스 1', '에어 테일윈드 79'],
            wear: '스포츠웨어 클럽 플리스 크루 탑',
        },
        adidas: {
            shoes: ['슈퍼스타', '울트라부스트'],
            wear: '파이어버드 트랙탑',
        }
    }
}
console.log(deepCopy(obj));
```
