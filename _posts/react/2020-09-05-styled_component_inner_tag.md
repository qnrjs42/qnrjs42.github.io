---
title: "[React] styled-components 태그 안에 태그 적용하는 방법"
excerpt: "styled(Button) span{ }"

categories:
  - React
tags:
  - React
  - Antd
  - Styled-components
last_modified_at: 2020-09-05T000:00:00-:00
---

버튼 안에 span 태그로 감싸진 텍스트를 색상 줘야할 때 사용한다.

span 태그로 스타일을 적용하는 방법도 있지만 태그안에 태그를 적용할 필요가 있을 때 사용한다.

```react
{% raw %}
import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled(Button)`
    // 기본 배경 색
    background-color: red;

    // 마우스 올라갔을 때
    &:hover: {
        background-color: blue;
    }

    // Button 안에 span
    span {
        color: green;

        // Button 안에 span 안에 pre
        pre {
            color: yellow;
        }
    }
`;

const HomeLayout = () => {

    return (
        <>
            /* 실제 코드 */
            <ButtonWrapper>제출하기</ButtonWrapper>

            /* 크롬 개발자 도구로 봤을 때 구조
             <ButtonWrapper>
                 <span>제출하기</span>
             </ButtonWrapper>
            */


           /* 태그 안에 태그 안에 태그 */
           <ButtonWrapper>
            <span>
                Tag1
                <pre>Tag2</pre>
            </span>
           </ButtonWrapper>

           /* 크롬 개발자 도구로 봤을 때 구조
             <ButtonWrapper>
                <span>
                    Tag1
                    <pre>Tag2</pre>
                </span>
             </ButtonWrapper>
        </>
    )

}

export default HomeLayout;
{% endraw %}
```
