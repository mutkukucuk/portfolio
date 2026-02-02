# Website Editing Guide

This website is built with **Next.js**, which means the content is managed directly within the code files. You do not need a separate admin panel. This gives you full control and ensures the site stays incredibly fast.

Here is how to edit each section:

## 1. Profile Picture
To add your real photo:
1.  Save your photo (e.g., `me.jpg`) inside the `public/` folder of your project.
2.  Open `components/home/hero.tsx`.
3.  Find the `div` that has the "UK" placeholder.
4.  Replace the placeholder `div` with a Next.js Image component:

```tsx
// At the top of the file
import Image from "next/image"

// Inside the component, replace the placeholder div:
<div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-2xl">
  <Image 
    src="/me.jpg" 
    alt="Utku Kucuk" 
    fill 
    className="object-cover" 
    priority
  />
</div>
```

## 2. Social Links & About Info
Your social links and "About Me" grid are located in **`components/home/bento-grid.tsx`**.
- Search for "GitHub", "LinkedIn", or "Email" in that file to change the URLs.

## 3. Experience & Timeline
Your work history is in **`components/home/experience.tsx`**.
- Look for the `const experience = [...]` array at the top of the file.
- Edit the objects inside that array to update your roles, companies, and descriptions.

## 4. Skills
Your skills are in **`components/home/tech-stack.tsx`**.
- Look for `const skillCategories = [...]`.
- Add or remove strings from the `skills` arrays (e.g., "Frontend", "Backend").

## 5. Projects
Your projects list is in **`app/projects/page.tsx`**.
- Edit the `projects` array to add/remove cards.
- **New Feature**: Add a `slug` field (e.g., `slug: "my-project"`) to link a card to a detailed case study page.
- **Reference**: I added a "Project Styles & Assets" card which opens a Style Guide (`content/projects/style-guide.mdx`). Use this to copy-paste code for headers, images, etc.

## 6. Project Case Studies (Detail Pages)
To create a rich detail page for a project:
1.  Ensure the project in step 5 has a `slug` (e.g., `slug: "my-project"`).
2.  Create a new file: `content/projects/my-project.mdx`.
3.  Use this Frontmatter at the top:

```mdx
---
title: "Project Name"
description: "Short description..."
date: "2024-01-01"
tags: ["React", "Node.js"]
image: "/projects/my-project.jpg"
githubUrl: "https://github.com..."
liveUrl: "https://mysite.com"
---

# The Challenge
Write your case study here...
```

## 7. Blog Posts
Your blog posts are located in the **`posts/`** folder.
- To add a new post, create a new file ending in `.mdx` (e.g., `my-new-post.mdx`).
- Use the following format at the top of the file (Frontmatter):

```mdx
---
title: "My New Post Title"
date: "2024-03-20"
excerpt: "A short summary of the post..."
---

# Hello World

Write your post content here using Markdown!
```

## 7. Resume Download
To update your resume:
1.  Place your PDF file (e.g., `resume.pdf`) in the `public/` folder.
2.  Open `components/home/hero.tsx`.
3.  Find the "Download CV" link and ensure the `href` points to your file: `href="/resume.pdf"`.
