---
title: "[SourceTree] 소스트리 실행 후 종료됐을 때 해결방법 (윈도우)"
excerpt: "맥은 잘 되는데 윈도우가 꼭 안 되더라2"

categories:
  - Git
tags:
  - Git
  - SourceTree
last_modified_at: 2020-12-19T000:00:00-:00
---

내 증상: 소스트리를 실행시키고 저장소 선택하는 화면까지 뜨자마자 종료되는 현상.

왜?: 소스트리에서 git push가 제대로 안 돼서 이것저것 만지다가 프로그램이 꼬임.

그리고 소스트리 제거했다가 재설치할 때 뭐 선택하지도 않고

```
download an embedded version of mercurial for sourtree alone to use.
```

위의 문구가 뜨면서 설치하라고 한다. 설치해도 똑같이 종료 됨.

참고 Link: [https://qnrjs42.github.io/git/Github_2fa_Login_Failed/][link2]<br />

[link2]: https://qnrjs42.github.io/git/Github_2fa_Login_Failed/ "Go"

```html
1. 소스트리 제거
2. 컴퓨터 재부팅 (권장)
3. C:\Users\<UserName>\AppData\Local\Atlassian 제거
4. C:\Users\<UserName>\AppData\Local\SquirrelTemp 제거 (안 해도 될 수도)
5. C:\Users\<UserName>\AppData\Local\SourceTree 제거
6. C:\Users\<UserName>\AppData\Local\Temp 제거
7. C:\Users\<UserName>\AppData\Roaming\Atlassian 제거
8. 컴퓨터 재부팅
9. 소스트리 설치
10. 끝
```


참고 Link: [https://community.atlassian.com/t5/Sourcetree-questions/remote-Invalid-username-or-password/qaq-p/859375][link]<br />

[link]: https://community.atlassian.com/t5/Sourcetree-questions/remote-Invalid-username-or-password/qaq-p/859375 "Go"
