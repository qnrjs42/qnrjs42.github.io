---
title: "[Git, SourceTree] 깃허브 2차인증(2fa) 후 토큰으로 소스트리 로그인 실패 했을 때 (윈도우)"
date: 2020-12-19 00:00:00 +0900
categories: [Git]
tags: [Git, SourceTree, 2차인증(2fa)]
toc: true
---

## 어휴 윈도우

상황설명: 여태껏 1차 패스워드만 사용하다가 깃허브에서 보안 강화하라는 메일이 날라와 2차 인증을 도입하기로 했다.

맥 소스트리에서 계정 정보 업데이트할 때 발급받은 토큰으로 로그인을하면 아무런 에러 없이 깔끔하게 계정 정보가 업데이트 되었다.

하지만 윈도우는 깔끔하지 못했다.

***** 준비물: push 가능한 repository<br/>
없으면 깃허브가서 테스트용 repository를 빠르게 만든다.<br/>
repository를 만들고 로컬에서 폴더 생성하고 아무 파일이나 만든다.

### 로컬 커밋

```
먼저 로컬에서 커밋을 완료한다.

원격으로 push하려해도 패스워드가 올바르지 않다고 psuh failed한다.
```

### 원격 로그인 실패 확인

```s
# 한국어
# 소스트리 오류 나는 부분

'소스트리' - '도구' - '옵션' - '인증' - '계정 추가'

- Host
호스팅 서비스: 'GitHub'
선호 프로토콜: 'HTTPS'

- Credentials
인증: 'Basic'
사용자명: 'qnrjs42'
비밀번호 새로고침 클릭
암호: <깃허브에서 발급받은 토큰>
```

```s
# 인증 실패
Failed to check login for user.
또는
user/emails was not found.
```

<br/>

---

## 소스트리 종료하고 자격증명에서 git 관련된 정보 모두 제거

참고 Link: [https://skuld2000.tistory.com/147][link]<br />

[link]: https://skuld2000.tistory.com/147 "Go"

```s
'윈도우 검색' - '자격 증명 관리자' - 'Windows 자격 증명'
'일반 자격 증명'

git으로 들어간 이름들 선택해서 제거한다.
```

<br/>

---


## 명령 프롬프트(cmd) 창 열기

참고 Link: [https://qastack.kr/programming/17659206/git-push-results-in-authentication-failed][link2]<br />

[link2]: https://qastack.kr/programming/17659206/git-push-results-in-authentication-failed "Go"

- 해당 링크에 현재 날짜 기준(2020-12-19)으로 따봉이 1200개 이상인 답변자의 답변 게시글을 집중한다.
- 답변자의 댓글 중에 현재 날짜 기준(2020-12-19)으로 좋아요가 80개 이상인 댓글을 집중한다.

```s
// push 가능한 폴더로 이동

1. 'git remote -v'
origin  https://github.com/qnrjs42/qnrjs42.github.io.git (fetch)
origin  https://github.com/qnrjs42/qnrjs42.github.io.git (push)

2. 'git remote remove origin'

3. 'git remote add origin https://qnrjs42:my-access-token@github.com/qnrjs42/qnrjs42.github.io.git'

4. 'git push'

5. git push 대신 'git push upstream master' 이런 형태의 명령어를 입력하라고 출력한다. (모르고 cmd창을 종료해서 로그가 없어졌지만 저런 형태 명령어를 입력하라고 뜬다.)

6. 'git push upstream master'
로그 쫘르르르륵
로그 쫘르르르륵
로그 쫘르르르륵

7. 'git push'
로그 쫘르르르륵

8. '성공'
```

github repository 페이지로 가면 push가 된걸 확인할 수 있다.

<br/>

---

## 소스트리에서 확인

```s
'소스트리' - '도구' - '옵션' - '인증'

Git 저장된 비밀번호
- github.com
- qnrjs42@github.com
- qnrjs42@github.com/
```

내 기준으로 3개가 작성되었다.
꼭 3개가 아니더라도 테스트로 만든 폴더 안에 파일을 생성해서 커밋하고 푸쉬를 해보자.

그러면 문제 없을 것이다.

끝.