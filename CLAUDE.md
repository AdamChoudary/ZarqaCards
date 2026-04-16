# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZarqaCards is a brand portfolio web app for invitation cards. The Next.js app lives in the `zarqacards/` subdirectory.

## Commands

All commands must be run from inside `zarqacards/`:

```bash
cd zarqacards
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests configured yet.

## Critical: Next.js Version

This project uses **Next.js 16.2.3**, which has breaking changes from earlier versions. APIs, conventions, and file structure may differ from common training data. **Read `zarqacards/node_modules/next/dist/docs/` before writing any Next.js-specific code.** Heed deprecation notices.

## Architecture

- **Framework**: Next.js 16 App Router (files under `zarqacards/app/`)
- **Styling**: Tailwind CSS v4 — configured via `@import "tailwindcss"` in `globals.css` and `postcss.config.mjs`. The v4 `@theme inline` block is used to wire CSS variables to Tailwind tokens.
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`, exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) on `<html>`.
- **TypeScript**: Strict mode. Path alias `@/*` maps to the `zarqacards/` root.
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

## Key Conventions

- Dark mode is handled via `prefers-color-scheme` media query with CSS variables in `globals.css`.
- The root layout (`app/layout.tsx`) sets `h-full` on `<html>` and `min-h-full flex flex-col` on `<body>` so pages can use `flex-1` to fill the viewport.
