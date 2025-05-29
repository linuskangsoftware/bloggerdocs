import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blogger",
  description: "The documentation site for setting up & configuring Blogger",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guides/getting-started' },
      {
        text: 'v1.0.6',
        items: [
          {
            items: [
              { text: 'Release Notes', link: '/releases/v1.0.6' },
              { text: 'Github Release', link: 'https://github.com/linuskangsoftware/blogger/releases/v1.0.6' }
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/guides/getting-started'},
          { text: 'Creating Posts', link: '/guides/creating-posts' }
        ]
      },
      {
        text: 'API Reference',
        collapsed: false,
        items: [
          { text: 'BlogAPI', link: '/reference/apis/blog-api'},
          { text: 'CommentAPI', link: '/reference/apis/comment-api'},
          { text: 'PostAPI', link: '/reference/apis/post-api'},
          { text: 'LegacyAPI', link: '/reference/apis/legacy-api'}
        ]
      },
      {
        text: 'Release Notes',
        collapsed: true,
        items: [
          { text: 'v1.0.6 (beta)', link: '/releases/v1.0.6'},
          { text: 'v1.0.5', link: '/releases/v1.0.5'},
          { text: 'v1.0.4', link: '/releases/v1.0.4'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linuskangsoftware/blogger' }
    ],
    footer: {
      message: 'Released under the Apache 2.0 license.',
      copyright: 'Copyright © 2025 Linus Kang. All Rights Reserved.'
    }
  }
})