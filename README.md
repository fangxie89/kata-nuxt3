# Nuxt Minimal Starter

## Project Overview

This project is a modern web application built with Nuxt 3, leveraging the latest Vue 3 ecosystem and best practices for maintainability, scalability, and performance.

### Project Structure

- `components/` — Reusable Vue components (common UI, home page sections, layout header)
- `composables/` — Reusable composable functions (e.g., API hooks)
- `layouts/` — Application layouts (if any)
- `middleware/` — Route middleware (if any)
- `pages/` — Application pages (route definitions)
- `plugins/` — Nuxt.js plugins (if any)
- `server/` — API routes and server-side logic
- `services/` — Service layer for API calls
- `stores/` — Pinia stores for state management
- `assets/` — Static assets (CSS, fonts, images)
- `public/` — Public static files
- `tests/` — Unit and component tests (Vitest, Vue Test Utils)

### Main Features

- Modern Nuxt 3 application structure
- Pinia for state management
- API data fetching with composables
- Modular, reusable component architecture
- Responsive and accessible UI
- ESLint and Prettier for code quality
- Unit/component testing with Vitest and Vue Test Utils
- Image optimization with `@nuxt/image-edge`
- Animations with GSAP

### Tech Stack

- [Nuxt 3](https://nuxt.com/) (Vue 3, Vite-powered)
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) (state management)
- [@nuxt/image-edge](https://image.nuxtjs.org/) (image optimization)
- [GSAP](https://greensock.com/gsap/) (animations)
- [Vitest](https://vitest.dev/) & [Vue Test Utils](https://test-utils.vuejs.org/) (testing)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) (linting & formatting)

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
