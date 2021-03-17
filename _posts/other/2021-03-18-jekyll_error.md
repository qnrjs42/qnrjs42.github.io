---
title: "mac jekyll Failed to build gem native extension. 해결방법 (with zshrc)"
excerpt: "Make sure that `gem install http_parser.rb -v '0.6.0' --source 'https://rubygems.org/'` succeeds before bundling."

categories:
  - other
tags:
  - Jekyll
last_modified_at: 2021-03-18T000:00:00-:00
---

<br />

루비 설정이 잘못 되어서 그렇습니다.

## Error

```shell
# failed
bundle exec jekyll serve --future

-> bundle install
```

```shell
# failed
bundle install

ERROR Make sure that `gem install http_parser.rb -v '0.6.0' --source 'https://rubygems.org/'` succeeds before bundling.
```

```shell
# failed
gem install http_parser.rb -v '0.6.0' --source 'https://rubygems.org/'

ERROR Failed to build gem native extension.
```

## Solution

```shell
brew install ruby
```

```shell
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

```shell
# cd my_project
bundle install

bundle exec jekyll serve --future
```





참고 Link: [https://pjs21s.github.io/rbenv-shims-in-path-not-found/][link]

[link]: https://pjs21s.github.io/rbenv-shims-in-path-not-found/ "Go"
