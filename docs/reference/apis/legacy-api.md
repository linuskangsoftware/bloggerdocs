---
outline: deep
title: LegacyAPI
---

# LegacyAPI <Badge type="warning" text="v1.0.0 - v1.0.4" />

This API serves the legacy endpoints for versions ``v1.0.0 - v1.0.4`` of Blogger.

::: danger

This API has been deprecated and is no longer supported in newer versions of Blogger (``v1.0.5^``).

:::

## ``GET /post/[post_slug]``

Used to render a blog post's contents.

::: warning

This endpoint is reserved for Blogger's internal scripts. You should avoid using this endpoint in your own scripts.

:::

## ``GET /name``

Endpoint to fetch the blog's name.

### Usage

```bash
curl -X GET "http://yourblog.com/name"
```

### Expected response

```json
{ "name": "Your blog name" }
```