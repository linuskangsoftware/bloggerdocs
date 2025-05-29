---
outline: deep
title: Getting Started
---

# Getting started <Badge type="tip" text="v1.0.6" />

This guide covers the simplest and quickest way to get started using Blogger.

## Setting up Blogger

Start by cloning the repository and running the setup script:

```bash
git clone https://github.com/linuskangsoftware/blogger.git
cd blogger
sudo bash setup.sh
```

Next, create the ``.env`` file in the root directory with the following variables:

```bash
ADMIN_EMAIL=blogger@email.com
ADMIN_PASSWORD=YourSecurePasswordHere
ADMIN_API_KEY=YourSuperSecretKey

DATABASE_HOST=localhost
DATABASE_USER=UserHere
DATABASE_USERPASSWORD=PasswordHere
DATABASE_NAME=NameHere

BLOG_NAME="A Blogger Blog"
BLOG_DESCRIPTION="A very cool blog powered by Blogger"
ENABLE_COMMENTS=true

DISCORD_WEBHOOK_URL=https://your.discord.webhook/
```

## Configuring mySQL

::: tip

Ensure you have the ``mysql-server`` package installed for the database!

:::

Create the database using ``mysql-server``. You can just paste the following commands to quickly setup your database.

```bash
sudo mysql
use mysql
create database blogger;
use blogger;
```

Paste this to create the ``comments`` table:

```bash
CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  post_slug VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  ip VARCHAR(45),
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Now, you'll need a **mySQL User** to interface your database. Paste these commands in the mySQL terminal:

```bash
CREATE USER 'BloggerDataAdmin'@'localhost' IDENTIFIED BY 'YourPasswordHere';
GRANT ALL PRIVILEGES ON *.* TO 'BloggerDataAdmin'@'localhost';
FLUSH PRIVILEGES;
exit;
```

::: tip

Make sure the credentials you enter for the user are the same as your ``.env`` file.

:::

Your done! Start the server using ``npm``:

```bash
npm run dev -- -p 3000
```

Access Blogger at ``http://your_ip:3000``. You should be able to see the example post!