---
title: "[Javascript, Typescript] Convert Date"
excerpt: "3분 전, 2시간 전, 3일 전을 현재 시간과 비교하여 Date 포맷으로 컨버트"

categories:
  - Javascript
tags:
  - Javascript
  - Typescript
  - Convert Date
last_modified_at: 2020-12-18T000:00:00-:00
---

3분 전, 2시간 전, 3일 전을 현재 시간과 비교하여 날짜 구하는 방법

예시로 현재 날짜: 2020-12-18 16시 00분

'3분 전' 문자열이 들어오면 리턴 값은 2020-12-18 15시 57분이 된다.

파라미터 값 포맷: string<br/>
리턴 값 포맷: Date

### 구현된 로직
- 0분 전
- 0시간 전
- 0일 전
- 이외에는 올바른 리턴 값을 보내지 않습니다.

---

## Typescript

```ts
// 3분 전, 10분 전, 2시간 전, 2일 전
const convertDateFunc = (value: string) => {
  const valueDate: Date = new Date(value);

  // 날짜 형태가 아니라면
  if(isNaN(valueDate.getDate())) {
    const valueDateSplit: string[] = value.split('');
    const valueDateFilter: string[] = valueDateSplit.filter((v: string) => {
      if(v === ' ' || v === '전') return false;
      else return true;
    });

    let date: Date = new Date();

    if(valueDateFilter.indexOf('일') !== -1) {
      // 일
      const numberDate: string[] = valueDateFilter.filter((v) => {
        if(v === '일') return false;
        else return true;
      });
      const time: number = parseInt(numberDate.join(''), 10);
      date.setDate(date.getDate() - time);
    } else if(valueDateFilter.indexOf('시') !== -1) {
      // 시간
      const numberDate: string[] = valueDateFilter.filter((v) => {
        if(v === '시' || v === '간') return false;
        else return true;
      });
      const time: number = parseInt(numberDate.join(''), 10);
      date.setHours(date.getHours() - time);
    } else if(valueDateFilter.indexOf('분') !== -1) {
      // 분
      const numberDate: string[] = valueDateFilter.filter((v) => {
        if(v === '분') return false;
        else return true;
      });
      const time: number = parseInt(numberDate.join(''), 10);
      date.setMinutes(date.getMinutes() - time);
    }
    return date;
  }
  return valueDate;
}
```

<br/>

---

## Javascript

```js
const convertDateFunc = (value) => {
  const valueDate = new Date(value);

  // 날짜 형태가 아니라면
  if(isNaN(valueDate.getDate())) {
    const valueDateSplit = value.split('');
    const valueDateFilter = valueDateSplit.filter((v) => {
      if(v === ' ' || v === '전') return false;
      else return true;
    });

    let date = new Date();

    if(valueDateFilter.indexOf('일') !== -1) {
      // 일
      const numberDate = valueDateFilter.filter((v) => {
        if(v === '일') return false;
        else return true;
      });
      const time = parseInt(numberDate.join(''), 10);
      date.setDate(date.getDate() - time);
    } else if(valueDateFilter.indexOf('시') !== -1) {
      // 시간
      const numberDate = valueDateFilter.filter((v) => {
        if(v === '시' || v === '간') return false;
        else return true;
      });
      const time = parseInt(numberDate.join(''), 10);
      date.setHours(date.getHours() - time);
    } else if(valueDateFilter.indexOf('분') !== -1) {
      // 분
      const numberDate = valueDateFilter.filter((v) => {
        if(v === '분') return false;
        else return true;
      });
      const time = parseInt(numberDate.join(''), 10);
      date.setMinutes(date.getMinutes() - time);
    }
    return date;
  }
  return valueDate;
}
```


출처: 내 머리