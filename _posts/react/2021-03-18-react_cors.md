---
title: "[React] 다른 도메인 axios cors 해결방법"
excerpt: "react other domain axios cors"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - React
tags:
  - React
  - cors
  - axios
last_modified_at: 2021-05-15T000:00:00-:00
---

<br />

> 21.05.15 토 업데이트
>
> > 1. 프록시로 해결할 수 있는 방법에 대해
> > 2. 게시글 내용 수정
> > 3. 여러가지 상황 속에서 해결했던 방법

Link: [Prxoy로 CORS 문제 해결하기][go2]

[go2]: https://open-support.tistory.com/entry/CORS%EB%9E%80-CORS-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0?fbclid=IwAR1L2pitoL_Q7B8gdke_Qto2IVHhoxEOA1nG2Fw7Jrlg61UchbLebZ-bJXE "Go"

Link: [React에서 CORS에러 삽질 이야기][go]

[go]: https://velog.io/@cush_wa/React%EC%97%90%EC%84%9C-CORS%EC%97%90%EB%9F%AC-%EC%82%BD%EC%A7%88-%EC%9D%B4%EC%95%BC%EA%B8%B0 "Go"

CORS 해결하는 방법은 여러가지 방법이 있지만 제가 해봤던 방법으로 설명 드리겠습니다.(사실 몇 개 없음)

설명 드리는 내용은 개발 모드일 때이고, 배포 모드일 때는 도메인만 바꿔주면 되니 별 문제 없을 겁니다.

## 외부 API를 사용하려고 할 때

(여기서 다른 도메인이란 백엔드 서버를 가리키는게 아닌 네이버나 구글 도메인같은 아무 도메인을 말함)

준비한 그림으로 설명하겠습니다.

<img src="/assets/images/react/react-cors.png" width="100%" />

그래서

프론트 서버(요청) -> 백엔드 서버(요청) -> API 서버(전달) -> 백엔드 서버(전달) -> 프론트 서버

```js
// front (localhost:3000)
import axios from "axios";

axios.defaults.withCredentials = true;

const data = { id: 1 };
const headers = {};
const response = await axios.post("http://localhost:3030", data, headers);
```

```js
// back (localhost:3030)
import cors from "cors";
import axios from "axios";
import express from "express";

const app = express();

const getApi = async (data) => {
  const response = await axios.post("http://123.12.1.0", data);

  return response.data;
};

app.use(express.static(__dirname));
app.use(cors({ origin: true, credentials: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  const result = getApi(req.body);

  res.status(200).send(result);
});
```

---

## 프론트-백엔드 서버 IP 혹은 Port가 서로 다를 때

위와 똑같은데 안 되는 경우가 간혹 있습니다.

그러면 아래와 같이 origin에 직접 도메인(IP + Port)을 넣어주시면 됩니다.

```js
// back (localhost:3030)
import cors from "cors";
import axios from "axios";
import express from "express";

const app = express();

app.use(express.static(__dirname));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.post("/", (req, res) => {
  console.log(req.body);

  res.status(200).send("good");
});
```

눈치채신 분들은 알 겁니다.

"아니 서버에서 cors 설정 제외하고 react에서 하는 게 없는데?"

맞습니다. 한 가지만 해준다면요

```js
axios.defaults.withCredentials = true;
```

제가 경험한 바로는 react에서 할 건 없고 서버에서 처리해줘야 하더라고요
