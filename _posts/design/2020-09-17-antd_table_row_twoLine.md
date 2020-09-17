---
title: "[Design] antd table row two line(multi line)"
excerpt: "rowspan 사용 안 함"

categories:
  - Design
tags:
  - Design
  - Antd
last_modified_at: 2020-09-17T012:00:00-:00
---

antd table에서 rowspan을 사용하려는데 테이블의 데이터가 <br />
아래 row data가 무시되고 rowspan이 적용된다.
이런 식으로 사용하면 사용할 1번 row, 무시될 2번 row를 작성해야 한다.

그래서 다른 방법으로 접근해서 1번 row, 1번 column의 데이터에
여러 데이터를 합칠 수 있다.

```react
const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (text, row, index) => {
      // text: name의 data [String]
      // row: 하나의 row data [Object]
      // index: row index [Number]
      console.log(text, row, index);
      return (
        <>
          {text}
          <br />
          <h2>{row.age}</h2>
        </>
        /*
            예상 결과값
            김철수
            (h2태그가 적용된 age) 20
        */
      );
    },
  },
  {
    title: "age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "생성일",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "nickname",
    dataIndex: "nickname",
    key: "nickname",
  },
];
```

```javascript
// 해당 코드는 Array.map()처럼 작동한다고 보면 된다.
render: (text, row, index) => {};
```
