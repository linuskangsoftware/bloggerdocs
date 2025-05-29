---
outline: deep
title: BlogAPI
---

# BlogAPI <Badge type="tip" text="v1.1" />

This API is for interfacing with blog details, like the name, description, and other  metadata of the blog.

## Authentication

All methods below require you to use a ``api_key`` to interface the API's for security reasons.

You can set the API key inside of the ``.env`` file. It is labelled as ``API_KEY``.

## Error codes

The following error codes for all of the ``BlogAPI`` are listed below:

- ``401 Unauthorized``: Invalid/missing ``API_KEY``.
- ``403 Forbidden``: You do not have access to the resource.
- ``500 Internal Server Error``: An error occured. Check the Blogger logs for an error message.

## `GET /api/blog/name`

Returns the blog’s name as a plain string.

### Usage

```bash
curl -X GET "http://yourblog.com/api/blog/name" \
  -H "Authorization: Bearer your_api_key"
```

### Expected response

```json
{
    "name": "Your blog name"
}
```

## `GET /api/blog/description`

Returns the blog’s description as a plain string.

### Usage

```bash
curl -X GET "http://yourblog.com/api/blog/description" \
  -H "Authorization: Bearer your_api_key"
```

### Expected response

```json
{
    "description": "Your blog description"
}
```