# Blog System

A modern markdown-based blog built with React, Tailwind CSS, Framer Motion, and GSAP.

## Adding New Blog Posts

To add a new blog post, simply create a new `.md` file in the `src/posts/` directory:

1. **Create a new markdown file** in `src/posts/` with a descriptive filename (e.g., `my-new-post.md`)

2. **Add frontmatter** at the top of your markdown file:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2025-01-08"
tags: ["React", "JavaScript", "Web Development"]
author: "Your Name"
readTime: "5 min read"
image: "https://images.pexels.com/photos/your-image.jpeg"
excerpt: "A brief description of your post..."
featured: false
---

# Your Post Title

Your markdown content goes here...
```

3. **Save the file** and your blog will automatically update with the new post!

## Markdown Features Supported

- **Headers** (# ## ###)
- **Bold and italic text** (**bold**, *italic*)
- **Inline code** (`code`)
- **Code blocks with syntax highlighting** (```javascript)
- **Lists** (ordered and unordered)
- **Links** ([text](url))
- **Images** (![alt](url))
- **Tables** (GitHub Flavored Markdown)
- **Horizontal rules** (---)
- **Blockquotes** (> quote)

## Project Structure

```
src/
├── posts/                    # Markdown blog files (.md)
├── utils/
│   └── getMarkdownPosts.js   # Utility to read markdown files
├── components/
│   ├── BlogCard.jsx          # Individual blog post card
│   └── BlogPost.jsx          # Single blog post page
├── pages/
│   └── Blog.jsx              # Main blog listing page
└── ...
```

## Technical Features

- **Automatic Discovery**: New `.md` files are automatically detected and displayed
- **Frontmatter Parsing**: Uses `gray-matter` to parse YAML frontmatter
- **Markdown Rendering**: Uses `react-markdown` with syntax highlighting
- **SEO Optimized**: Dynamic meta tags based on frontmatter
## Features

- ✅ Responsive design
- ✅ Dark/light theme
- ✅ Search functionality
- ✅ Tag filtering
- ✅ SEO optimization
- ✅ Smooth animations
- ✅ Featured posts
- ✅ Markdown support