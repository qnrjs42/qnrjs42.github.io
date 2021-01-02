---
title: "[React] Typescript useInput hooks"
date: 2020-10-06 00:00:00 +0900
categories: [React]
tags: [React, Typescript, hooks]
---

```tsx
// hooks/useInput.ts

import { useState, useCallback, ChangeEvent } from "react";

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const useInput = (initValue = "") => {
  const [value, setValue] = useState(initValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};

export default useInput;
```

```tsx
{% raw %}
// pages/login.tsx

import useInput from "../hooks/useInput";

const logIn = () => {
const [Email, onChangeEmail, setEmail] = useInput("");

 return (
    <Input
        name="email"
        id="email"
        size="large"
        placeholder="이메일"
        type="id"
        value={Email}
        onChange={onChangeEmail}
    />
 )
}
export default logIn;
{% endraw %}
```

참고 Link: [Stackoverflow Go][link]

[link]: https://stackoverflow.com/questions/61694400/react-typescript-type-error-between-passing-props-to-hooks "Go"
