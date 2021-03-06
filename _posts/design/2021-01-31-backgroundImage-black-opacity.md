---
title: "[Design] React Native BackgroundImage Black Opacity And Text Center"
excerpt: "React Native Style"

categories:
  - Design
tags:
  - Design
  - React Native
  - React
last_modified_at: 2021-01-31T012:00:00-:00
---

디자인을 할 때 보면 이미지가 너무 밝아서 투명도를 조절할 때가 있다.

그러다가 이미지에 opacity를 조절해야하는데 검정 opacity를 줘야하는데 하얀 opacity로만 나오는 현상이 발생했다.

보다 쉽게(정말 간단함) 검정색 opacity를 줄 수 있는 방법을 아래의 코드를 통해 봐보자.

```react
{% raw %}
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={styles.imageBackgroundContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://www.ggilbo.com/news/photo/202101/824541_653770_1352.jpg',
            }}
          />
          <View style={styles.imageOnContainer}>
            <Text style={styles.imageOnText}>IU Celebrity</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // 배경색 지정 (여기서 검정색으로 하지 않아도 된다), 이미지 크기를 설정
  imageBackgroundContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: 300,
  },
  // 이미지 크기는 무조건 100%, 투명도 조절, position absolute
  image: {
    position: 'absolute',
    opacity: 0.8,
    width: '100%',
    height: '100%',
  },
  // 이미지 위에 텍스트 컨테이너 크기는 flex로 줘도 된다
  imageOnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 이미지 위에 있는 텍스트 스타일
  imageOnText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Search;
{% endraw %}
```

---

### opacity: 0.8

<img src="/assets/images/design/backgroundImage-black-opacity/1.png" width="50%" />

### opacity: 0.5

<img src="/assets/images/design/backgroundImage-black-opacity/2.png" width="50%" />