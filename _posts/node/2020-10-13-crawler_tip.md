---
title: "[Node] puppeteer 크롤링 팁"
excerpt: "Array empty, Object empty"

toc: true
toc_sticky: true
toc_lable: "On This Page"
toc_icon: "cog"

categories:
  - Node
tags:
  - Node
  - puppeteer
last_modified_at: 2020-10-13T000:00:00-:00
---

```javascript
const puppeteer = require("puppeteer"); 

const crawler = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
    );
    await page.goto("https://unsplash.com");
    let result = [];
      const srcs = await page.evaluate(() => {
        let imgs = [];
        const imgEls = document.querySelectorAll(".nDTlD"); 
        if (imgEls.length) {
          imgEls.forEach((v) => {
            let img = v.querySelector("img._2zEKz");
            imgs.push(img);
          });
        }
        return imgs;
      });
    console.log(srcs);
    // await page.close();
    // await browser.close();
  } catch (e) {
    console.error(e);
  }
};

crawler();
```

## 1. console.log는 브라우저 콘솔에서...

현재 위에 코드를 보면 내가 지금 제대로 가지고 왔는지 테스트를 하고 싶은 코드이다.

하지만 저 코드를 그대로 실행하게 되면 node 환경에서 콘솔은 undefined가 출력된다.

테스트를 하고 싶으면 브라우저 콘솔에서 확인한다. 

page.evaluate() 메소드는<br />
브라우저 - 개발자 도구 - 콘솔이라 생각하면 된다.

아래 코드를 살펴보자.

```javascript
const srcs = await page.evaluate(() => {
  const imgEls = document.querySelectorAll(".nDTlD");
  // 여기서 .nDTlD 태그를 가져왔는지 확인하고 싶을 때
  console.log(imgEls);
}
```


브라우저 - 콘솔 이미지<br />
<img src="/assets/images/node/crawler-tip/img1.jpg" width="30%" height="35%" /><br/>
<br />


이번에는 한 단계 더 진입해서 img.src를 뽑아내 보자.

```javascript
const srcs = await page.evaluate(() => {
  const imgEls = document.querySelectorAll(".nDTlD");
  let imgs = [];
  if (imgEls.length) {
    imgEls.forEach((v) => {
      let img = v.querySelector("img._2zEKz");
      if (img && img.src) {
        imgs.push(img.src);
      }
    });
  }
  console.log(imgs);
}
```
<br />
브라우저 - 콘솔 이미지
<img src="/assets/images/node/crawler-tip/img2.jpg" width="100%" height="50%" /><br/>

node - 콘솔 이미지
<img src="/assets/images/node/crawler-tip/img3.jpg" width="100%" height="50%" /><br/>



## 2. 결론

```javascript
const srcs = await page.evaluate(() => {
  const imgEls = document.querySelectorAll(".nDTlD");
  console.log(imgEls);
})
```

내가 태그를 제대로 가져왔는지 확인하려면<br/>
node 콘솔이 아닌 브라우저 콘솔에서 확인해야 한다.

그리고 node 콘솔에서 확인하려면  page.evaluate() 메소드를 빠져나와 태그가 아닌 태그의 속성으로 출력해야 한다.

예를 들어 이미지는 img.src / a태그는 a.href 이런식으로 접근해야 한다.

page.evaluate() 메소드에서 가져온 태그 자체를 리턴하면 [], {}, null, undefined식으로 데이터가 없는 것처럼 출력이 된다.


코딩테스트할 때 크롤링 문제가 나왔는데 node 콘솔에서 태그를 제대로 가져왔는지 테스트하는데 계속 {}가 출력되어서 곤혹스러웠다.

