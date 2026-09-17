# Linkly Frontend

A sleek, responsive frontend for **Linkly**, a URL-shortening application. Built with Next.js and Tailwind CSS, it provides a focused interface for turning long URLs into clean, shareable links.

**Live demo:** [url-shortener-project-frontend-gray.vercel.app](https://url-shortener-project-frontend-gray.vercel.app/)

## Features

- Responsive, dark-themed interface with a clean grid background
- URL submission form with client-side loading and error states
- Displays the generated short URL and its original URL
- One-click copy-to-clipboard support
- Clickable short link for immediate testing
- Compact navigation and footer with portfolio links
- Environment-based backend API configuration

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

Replace the value with your deployed backend URL when deploying the frontend.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint checks |

## Project Structure

```text
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind setup
│   ├── layout.js         # App metadata and root layout
│   └── page.js           # Landing page
└── components/
    ├── Footer.js         # Footer and social links
    ├── Navbar.js         # Navigation bar
    └── UrlForm.js        # URL-shortening form and result state
```

## Author

**Akhilendra Ojha**

- [GitHub](https://github.com/code-bunnyy)
- [LinkedIn](https://www.linkedin.com/in/akhilendra-ojha-7b487a3b2/)
- [LeetCode](https://leetcode.com/u/ojha_akhil/)
