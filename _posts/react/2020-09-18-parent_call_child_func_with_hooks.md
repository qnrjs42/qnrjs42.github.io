---
title: "[React] 부모 컴포넌트에서 자식 컴포넌트 함수 호출 with hooks"
excerpt: "부모 컴포넌트 - 자식 컴포넌트 함수 호출"

categories:
  - React
tags:
  - React
  - props
  - hooks
last_modified_at: 2020-09-18T000:00:00-:00
---

```react
{% raw %}
// ParentComponent.js

import React, { useState, useRef, useCallback } from "react";
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const childRef = useRef();

    const callChildFunc = useCallback(() => {
        childRef.current.getAlert(); // 자식 컴포넌트 함수 호출
    });

    return (
        <>
            <ChildComponent ref={childRef} />
            <button onClick={callChildFunc}></button>
        </>
    )
}

export default ParentComponent;
{% endraw %}
```

```react
{% raw %}
// ChildComponent.js

import React, { forwardRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({

    getAlert() {
      alert("getAlert from Child");
    }

  }));

  return <h1>Hi</h1>;
});

export default ChildComponent;
{% endraw %}
```
