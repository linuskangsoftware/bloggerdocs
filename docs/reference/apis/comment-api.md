---
outline: deep
title: CommentAPI
---

# CommentAPI <Badge type="tip" text="v1.0" />

This API is for interfacing the commenting API for creating, editing, and viewing blog comments.

## Authentication

No authentication is required for the following endpoints accept for the deleting endpoint. It uses the ``API_KEY`` in ``.env``. IP addresses are logged in ``server.log`` for security reasons.

Ratelimiting is applied to prevent abuse. You can configure how sensitive it is in ``.env``.

## Error codes

The following error codes for all of the ``CommentAPI`` are listed below:

- ``403 Forbidden``: You do not have access to the resource.
- ``500 Internal Server Error``: An error occured. Check the Blogger logs for an error message.

## `GET /api/comments/[post_slug]`

Returns all of the comments from a specific blog post in ``id`` order.

### Usage

```bash
curl -X GET "http://yourblog.com/api/comments/[post_slug]" \
```

### Expected response

```json
[
  {
    "id": 1,
    "post_slug": "21-05-2025-first-blog-post",
    "name": "Linus",
    "email": "email@linus.id.au",
    "ip": "192.168.8.43",
    "content": "This is a test comment from curl.",
    "created_at": "2025-05-29T09:49:57.000Z"
  }
  ...
]
```

## `GET /api/comments`

Returns all comments that have been posted on your blog.

### Usage

```bash
curl -X GET "http://yourblog.com/api/comments"
```

### Expected response

```json
[
  {
    "id": 1,
    "post_slug": "21-05-2025-first-blog-post",
    "name": "Linus",
    "email": "email@linus.id.au",
    "ip": "192.168.8.43",
    "content": "This is a test comment from curl.",
    "created_at": "2025-05-29T09:49:57.000Z"
  },
  {
    "id": 2,
    "post_slug": "21-05-2025-second-blog-post",
    "name": "Someone",
    "email": "email@someone.com",
    "ip": "192.168.2.56",
    "content": "This is another test comment from curl.",
    "created_at": "2025-03-29T09:49:57.000Z"
  }
  ...
]
```

## `POST /api/comments/add/[id]`

Posts a comment to a blog post slug.

### Usage

```bash
curl -X POST http://localhost:3000/api/comments/add \
  -H "Content-Type: application/json" \
  -d '{
    "post_slug": "my-first-post",
    "name": "Linus",
    "email": "linus@example.com",
    "content": "This blog is amazing!"
  }'
```

### Expected response

```json
{ "success":true }
```

## `DELETE /api/comments/delete/[id]`

Returns all of the comments from a specific blog post in ``id`` order.

### Usage

```bash
curl -X DELETE "http://yourblog.com/api/comments/delete/[id]"
  -H "Authorization: Bearer your_api_key"
```

### Expected response

```json
{ "success":true }
```