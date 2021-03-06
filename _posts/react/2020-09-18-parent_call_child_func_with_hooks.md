---
title: "[React] 부모 컴포넌트에서 자식 컴포넌트 함수 호출과 데이터 가져오기 with hooks(useRef)"
excerpt: "useRef, forwardRef, useImperativeHandle"

categories:
  - React
tags:
  - React
  - props
  - hooks
last_modified_at: 2020-09-19T000:00:00-:00
---

[20-09-19 업데이트]

자식 함수, 데이터 -> 부모

```react
{% raw %}
// ParentComponent.js

import React, { useRef, useCallback } from "react";
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const childRef = useRef();

    const callChildFunc = useCallback(() => {
        console.log(childRef.current.getAlert()); // 자식 컴포넌트 함수 호출
        console.log(childRef.current.getRowId()); // 자식 컴포넌트 데이터 가져오기
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

import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef((props, ref) => {
  const [RowId, setRowId] = useState({});

  useEffect(() => {
    setRowId({id: 5});
  }, [RowId])

  useImperativeHandle(ref, () => ({

    getRowId: () => RowId, // 데이터 보내기
    getAlert() { // 함수 보내기
      alert("getAlert from Child");
    },

  }));

  return <h1>Hi</h1>;
});

export default ChildComponent;
{% endraw %}
```
