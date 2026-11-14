# Developer Portfolio & Blog

A personal developer portfolio and blogging application built with React.

This project was created for **Lab Variant 9 — Blogging / Portfolio App**.

The application showcases programming projects, technical skills, and blog articles about software development.

## Technologies

- React
- JavaScript (JSX)
- Vite
- HTML5
- CSS3
- Git / GitHub

## Features

- Personal developer introduction
- Technical skills section
- Dynamic project cards
- GitHub repository links
- Blog articles
- Search articles by title
- Filter articles by category
- Expand and collapse articles
- Light and dark themes
- Responsive design for desktop and mobile devices

## Installation

Requirements:
- Node.js
- npm
- Git

Clone the repository:

```bash
git clone https://github.com/DizzyWaters/portfolio-blog.git
cd portfolio-blog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address displayed by Vite, usually:

`http://localhost:5173/`

## Production Build

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── projects.js
│   └── posts.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## How It Works

The application is built using reusable React components.

Project information is stored in `src/data/projects.js` and displayed dynamically using `map()`.

Blog articles are stored in `src/data/posts.js`.

The blog uses React's `useState` hook to manage searching, filtering, and article selection.

The application also uses React state to switch between light and dark themes.

Blog content is currently managed directly in JavaScript files. There is no backend or database.

## Testing

The application can be checked manually using the following tests:

1. Verify that all website sections are displayed.
2. Check project links.
3. Search for blog articles.
4. Filter articles by category.
5. Open and close articles.
6. Switch between light and dark themes.
7. Check the layout on different screen sizes.
8. Run `npm run build` to verify the production build.

## GitHub Repository

https://github.com/DizzyWaters/portfolio-blog

## Deployment

The application can be deployed to Vercel.

Live website: **Add deployment URL here**

## License

The application source code is licensed under the MIT License.

Original blog articles, personal writing, and images
are not covered by the MIT License.

Copyright (c) 2026 DizzyWaters.
All rights reserved for original blog content.


## Author

GitHub: [DizzyWaters](https://github.com/DizzyWaters)
