# Personal Website & Blog

A simple static website that uses markdown files for content, built with vanilla HTML, CSS, and JavaScript.

## Project Structure
/
├── index.html              # Main HTML template
├── content/               # All markdown content
│   ├── pages/            # Static pages
│   │   ├── about.md
│   │   └── faq.md
│   └── blog/             # Blog posts
│       ├── first-post.md
│       └── second-post.md
├── assets/               # Static assets
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── markdown.js   # Markdown parser
│       └── main.js       # Main JavaScript
└── templates/           # HTML templates
    └── post-template.html

## Features
- Simple markdown-based content management
- Blog with markdown posts
- Static pages in markdown
- ConvertKit newsletter integration
- Contact form

## Development
1. Write content in markdown files
2. Run `node build.js` to generate HTML
3. Deploy static files to any hosting service

## Dependencies
- marked (for markdown parsing)