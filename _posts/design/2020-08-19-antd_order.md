---
title:  "[Design] antd col order"
excerpt: "order"

categories:
  - Design
tags:
  - Design
  - CSS
  - Antd
  - Order
last_modified_at: 2020-08-19T000:00:00-:00
---


반응형 웹 구현 시
첫 번째 인덱스와 두 번째 인덱스가 화면이 작아질 때
보통 첫 번째 인덱스가 위에, 두 번째 인덱스가 아래에 배치되는데

antd order를 사용하면 두 번째 인덱스가 위에, 첫 번째 인덱스가 아래로 향하게 할 수 있다.

```javascript
{% raw %}
<Row>
  <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
    1 col-order-responsive
  </Col>
  <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
    2 col-order-responsive
  </Col>
  <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
    3 col-order-responsive
  </Col>
  <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
    4 col-order-responsive
  </Col>
</Row>
{% endraw %}
```



Link: [ant.design][link]

링크타고 'order' 검색

[link]: https://ant.design/components/grid/ "Go"