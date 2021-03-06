---
title: "[React] 자식 컴포넌트에서 부모 컴포넌트 함수 호출 with props"
excerpt: "자식 컴포넌트 - 부모 컴포넌트 데이터 전달"

categories:
  - React
tags:
  - React
  - props
last_modified_at: 2020-09-01T000:00:00-:00
---

자식 컴포넌트에서 부모 컴포넌트의 함수 호출 방법

```react
{% raw %}
// ParentComponent.js

import React, { useState, useCallback } from "react";
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [CreateModal, setCreateModal] = useState(false); // 모달 생성 유무

    // 모달 On
    const onModalDisplay = useCallback(() => {
        setCreateModal(true);
    });

    return (
        <>
            // props로 메소드 전달 | [전달할 props 이름]={[전달할 메소드]}
            <ChildComponent
                onModalDisplay={onModalDisplay}
            />
        </>
    )
  });
}

export default ParentComponent;
{% endraw %}
```

```react
{% raw %}
// ChildComponent.js

import React from "react";

// 부모 컴포넌트에서 전달한 props 이름으로 받음
const ChildComponent = ({ onModalDisplay }) => {

    return (
        <>
            <Button onClick={() => onModalDisplay()}> // 버튼 클릭 시 모달 On
                모달 생성
            </Button>
        </>
    )
  });
}

export default ChildComponent;
{% endraw %}
```
