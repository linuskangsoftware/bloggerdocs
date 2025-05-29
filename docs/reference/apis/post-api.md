---
outline: deep
title: PostAPI
---

# PostAPI <Badge type="tip" text="v1.2" />

This API is for interfacing with blog posts, like for viewing recent posts, and accessing specific raw post ``HTML`` & ``.md`` contents as well as extra details.

## Authentication

No authentication is required for the following endpoints. IP addresses are logged in ``server.log`` for security reasons.

Ratelimiting is applied to prevent abuse. You can configure how sensitive it is in ``.env``.

## Error codes

The following error codes for all of the ``BlogAPI`` are listed below:

- ``404 Not Found``: Invalid page.
- ``500 Internal Server Error``: An error occured. Check the Blogger logs for an error message.

## `GET /api/posts`

Returns all of the blog’s posts.

### Usage

```bash
curl -X GET "http://yourblog.com/api/posts"
```

### Expected response

```json
[
  {
    "slug": "20-05-2025-first-post",
    "frontmatter": {
      "title": "Blog post title",
      "date": "20-05-2025",
      "last_updated": "25/05/2025",
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "desc": "Blog post description",
      "header": "/path/to/header.png",
      "read_time": "10min",
      "author": "Author name"
    },
    "content": "\u003Ch1\u003EHello this is the first blog post\u003C/h1\u003E\n\u003Cp\u003EWhat else is there to say?\u003C/p\u003E\n"
  },
  ...
]
```

## `GET /api/posts/[post_slug]`

Returns all the details about a blog post, including raw HTML.

### Usage

```bash
curl -X GET "http://yourblog.com/api/posts/[post_slug]"
```

### Expected response

```json
[
  {
    "slug": "20-05-2025-first-post",
    "frontmatter": {
      "title": "Blog post title",
      "date": "20-05-2025",
      "last_updated": "25/05/2025",
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "desc": "Blog post description",
      "header": "/path/to/header.png",
      "read_time": "10min",
      "author": "Author name"
    },
    "content": "\u003Ch1\u003EHello this is the first blog post\u003C/h1\u003E\n\u003Cp\u003EWhat else is there to say?\u003C/p\u003E\n"
  }
]
```

## `GET /api/posts/recent`

Returns all of the recent blog posts and their details.

### Usage

```bash
curl -X GET "http://yourblog.com/api/posts/recent"
```

### Expected response

```json
[
  {
    "slug": "20-05-2025-first-post",
    "frontmatter": {
      "title": "Blog post title",
      "date": "20-05-2025",
      "last_updated": "25/05/2025",
      "tags": [
        "tag1",
        "tag2",
        "tag3"
      ],
      "desc": "Blog post description",
      "header": "/path/to/header.png",
      "read_time": "10min",
      "author": "Author name"
    },
    "content": "\u003Ch1\u003EHello this is the first blog post\u003C/h1\u003E\n\u003Cp\u003EWhat else is there to say?\u003C/p\u003E\n"
  },
  ...
]
```

## `GET /api/posts/slugs`

Returns all of the blog post slugs.

### Usage

```bash
curl -X GET "http://yourblog.com/api/posts/slugs"
```

### Expected response

```json
[
  "20-05-2025-first-post.md",
  "21-05-2025-second-post.md",
  ...
]
```