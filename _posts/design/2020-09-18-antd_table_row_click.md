---
title: "[Design] antd table row click"
excerpt: "onRow={onRow}"

categories:
  - Design
tags:
  - Design
  - Antd
last_modified_at: 2020-09-18T012:00:00-:00
---

row 위에 마우스를 갖다 대면 mouse hover 효과는 나타나지 않는다.<br />
row 전체에 마우스를 갖다 대면 mouse hover 효과나 나타나는 코드가 있다면 공유 바랍니다.

다른 해결책으로는 텍스트에 'a' 태그를 선언해서 mouse hover 효과를 만들어 냈다.

```react
{% raw %}
const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    width: "30%",
    ellipsis: true,
    render: (nameColData, row, index) => {
      // console.log(nameColData, row, index);
      return (
        <>
          <a>
            <Text>{nameColData}</Text>
            <br />

            <Text type="secondary">
              <LinkOutlined />
              &nbsp;
              {row.newName}
            </Text>
          </a>
        </>
      );
    },
  },
  ...
];


...

const onRow = (record, rowIndex) => {
  return {
    onClick: (event) => {
        // record: row의 data
        // rowIndex: row의 index
        // event: event prototype
      console.log(record, rowIndex, event);
    },
  };
};

...
...
...

<Table
  columns={columns}
  dataSource={DataSource}
  onRow={onRow}
/>

{% endraw %}
```
