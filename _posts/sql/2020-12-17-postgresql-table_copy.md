---
title:  "[PostgreSQL] table data copy"
excerpt: "같은 데이터베이스 내에 테이블 데이터 복사"

categories:
  - SQL
tags:
  - SQL
  - PostgreSQL
  - table copy
last_modified_at: 2020-12-17T000:00:00-:00
---

```sql
-- 테이블은 이미 생성 및 구조화 되어있고 데이터만 복사할 때
INSERT INTO 붙여놓을테이블명 SELECT * FROM 복사할테이블명 [WHERE 절]

INSERT INTO review.naver_review SELECT * FROM dummy.naver_review;

/*
  dummy.naver_review 테이블에 있던 데이터들이 
  review.naver_review 테이블로 붙여넣기 된다.
*/
```

이 쿼리문은 같은 데이터베이스 내에 적용된다.

<br/>


자세한 정보는
참고 Link: [https://dmsrbdi123.tistory.com/12][link]

[link]: https://dmsrbdi123.tistory.com/12 "Go"