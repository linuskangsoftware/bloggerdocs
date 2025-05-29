---
outline: deep
title: Getting Started
---

# Creating blog posts <Badge type="tip" text="v1.0.6" />

This guide covers the essentials of creating blog posts.

## 📆 Creating a post

Create a new ``.md`` file at ``blogger/public/posts``. Name it whatever you want.

::: tip

The post ``slug`` sub url will be named whatever you name the ``.md`` file.

It is recommended to name your ``.md`` file to: ``DD-MM-YYYY-YOUR-BLOG-POST-TITLE.md``.

:::

Next, paste the example structure for your post and edit to your liking:

```md
---
title: "Blog post title"
date: "20-05-2025"
last_updated: "25/05/2025"
tags: ["tag1", "tag2", "tag3"]
desc: "Blog post description"
header: "/path/to/header.png"
read_time: "10min"
author: "Author name"
---

# Hello this is the first blog post you've made! How cool is that!

## First sub heading here..

More info here...
```

Blogger supports all markdown features like headings, codeblocks, images, and even HTML! You can put all of this into your post file.

Save your post file and refresh to view the changes on your blog! It should dynamically update by itself.