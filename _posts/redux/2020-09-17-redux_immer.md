---
title: "Redux 불변성 편하게 지키기"
excerpt: "immer"

categories:
  - Redux
tags:
  - Redux
last_modified_at: 2020-09-17T012:00:00-:00
---

```javascript
// reducers/user.js

import produce from 'immer';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

        ...
    }
  });
};
```
