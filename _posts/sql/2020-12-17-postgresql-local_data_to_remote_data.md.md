---
title:  "[PostgreSQL] local data to remote data"
excerpt: "로컬 DB 데이터를 원격 DB 테이블에 복사 붙여넣기"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - SQL
tags:
  - SQL
  - PostgreSQL
  - local data to remote data
  - pg_dump
  - pg_restore
last_modified_at: 2020-12-17T000:00:00-:00
---

해당 명령어는 로컬에 있는 데이터들을 원격 DB 테이블에 복사하기 위해 사용된다.

실무에선 꼭 테스트를 하고 사용하는걸 권장합니다.

<br/>

### 실행 OS: mac
### 실행 프로그램: iTerm

<br/>

## 1. pg_dump

```
// 먼저 로컬 DB 테이블의 데이터들을 덤프 파일로 생성한다.

// example
$> pg_dump -v -d <dbname> -t <tablename> -a -h <hostname> -U <username> -F t > my_dump.tar

// exec
$> pg_dump -v -d testdb -t public.real_table -a -h localhost -U root -F t > my_dump.tar
```

- -v: 로그 출력
- -d: 데이터베이스명
- -t: 스키마명.테이블명
- -a: 데이터만 (data-only)
- -h: 호스트명
- -U: 유저명
- -F: 파일 포맷
- t: tar파일
- \> my_dump.tar: 해당 파일로 덤프 파일 생성

```
// pg_dump processing

pg_dump: reading extensions
pg_dump: identifying extension members
pg_dump: reading schemas
pg_dump: reading user-defined tables
pg_dump: reading user-defined functions
pg_dump: reading user-defined types
pg_dump: reading procedural languages
pg_dump: reading user-defined aggregate functions
...
...

로그가 나오지 않는다면 명령어가 잘못되었으니 다시 확인하여 재실행.
```

```
$> ls
my_dump.tar

해당 파일이 잘 생성되었는지 확인.
```

<br/>

---

## 2. pg_restore

```
// 덤프 파일이 있는 폴더에서 실행한다.

// example
$> pg_restore -v -h <hostname> -p <portname> -U <username> -a -d <dbname> -t <tablename> -F t ./my_dump.tar

// exec
$> pg_restore -v -h myaws.rds.amazonaws.com -p 5432 -U human -a -d realdb -t real_table -F t ./my_dump.tar
```

- -v: 로그 출력
- -h: 호스트명
- -p: 포트명
- -U: 유저명
- -a: 데이터만 (data-only)
- -d: 데이터베이스명
- -t: 테이블명
- -F: 파일 포맷
- t: tar파일
- \> ./my_dump.tar: 현재 폴더에 있는 해당 파일로 덤프 파일로 복원



```
// 위의 명령어를 실행하면 아래와 같이 패스워드가 있는 원격 데이터베이스는 패스워드를 물어본다.
pg_restore: connecting to database for restore
Password:

pg_restore: processing data for table "public.real_table"


// 여기서도 로그가 나오지 않는다면 명령어를 재점검하여 재실행한다.
// 그래도 로그가 나오지 않는다면 스크롤 아래에 '3. 주의해야할 점'을 본다.
```

```sql
-- 제대로 들어갔는지 확인.
SELECT COUNT(1) FROM realdb.public.real_table;

SELECT * FROM realdb.public.real_table;
```

<br/>

---

## 3. 주의해야할 점 (환경)

<br/>

### 테스트 해본 것

```
// 1.
// 스키카명은 다르고 테이블명이 같을 때
local schema (public) !== remote schema (private)
local table (real_table) === remote table (real_table)
->

pg_restore: connecting to database for restore
Password:
pg_restore: processing data for table "public.real_table"
pg_restore: while PROCESSING TOC:
pg_restore: from TOC entry 3262; 0 19559 TABLE DATA real_table root
pg_restore: error: could not execute query: ERROR:  relation "public.real_table" does not exist
...

// 에러 출력
```

```
// 2.
// 스키마명은 같고 테이블명이 다를 때
local schema (public) === remote schema (public)
local table (local_table) !== remote table (real_table)
->

pg_restore: connecting to database for restore
Password:

// 패스워드 입력한 후 다음 로그가 나오질 않음.
```

<br/>

### 정상적

```
local database: testdb
remote database: realdb

local Schemas: public
remote Schemas: public

local Tables: real_table
remote Tables: real_table

local schema (public) === remote schema (public)
local table (real_table) === remote table (real_table)

// 스키마명과 테이블명이 모두 같아야 한다.
```

<br/>


자세한 정보는
참고 Link: [https://browndwarf.tistory.com/12][link]

[link]: https://browndwarf.tistory.com/12 "Go"

PostgreSQL pg_dump Link: [https://www.postgresql.org/docs/9.1/app-pgdump.html][link2]

[link2]: https://www.postgresql.org/docs/9.1/app-pgdump.html "Go"

PostgreSQL pg_restore Link: [https://www.postgresql.org/docs/9.2/app-pgrestore.html][link2]

[link2]: https://www.postgresql.org/docs/9.2/app-pgrestore.html "Go"