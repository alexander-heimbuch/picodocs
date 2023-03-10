---
layout: page
title: Overview
navigation: 1
---

# Picodocs Theme

Simple documentation theme for Jekyll featuring [Picocss framework](https://picocss.com/), [PrismJS syntax highlighter](http://prismjs.com/) and [LunrJS search](https://lunrjs.com/).

One of the core features is a full text client side search and full responsiveness. It has zero dependencies with other gems and should be easily build with Github.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "picodocs"
```

Adapt your Jekyll site config `_config.yml`:

```yaml
  title: My Docs Page Title
  description: MY description
  url: "https://base/url/site"
  theme: picodocs

  markdown: kramdown
  kramdown:
    syntax_highlighter_opts:
      disable : true

  exclude:
    - Gemfile
    - Gemfile.lock
    - README.md
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install picodocs

## Available Layouts

This theme is made for _pages_ only and doesn't support _posts_ by default. So the only available layouts are `default` and `page`.
