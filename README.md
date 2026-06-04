# CutPilot Sync — Website

Landing page for CutPilot Sync Descktop APP, an AI-powered desktop video editor.

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite 6**
- **Tailwind CSS v3**
- **shadcn/ui** primitives (Button, Card, Progress)
- **Lucide React** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment Variables

Create a `.env` file at the root (already in `.gitignore`):

```env
VITE_APP_VERSION=0.0.5
VITE_GITHUB_REPO=SimaoJuliao/cutpilot-sync
```

| Variable | Description |
|---|---|
| `VITE_APP_VERSION` | Fallback version shown if the GitHub API is unavailable |
| `VITE_GITHUB_REPO` | GitHub repo slug used for download URLs and release fetching |

> At runtime the site fetches the latest release from the GitHub API and updates the version automatically. If the fetch fails, `VITE_APP_VERSION` is used as fallback. If either variable is missing, the UI sections that depend on it are hidden gracefully.

## Build & Deploy

```bash
npm run build   # outputs to dist/
```

**Netlify settings:**

| Field | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Environment variables | `VITE_APP_VERSION`, `VITE_GITHUB_REPO` |

Every push to `main` triggers an automatic redeploy.

## Project Structure

```
src/
  components/         # One folder per component (view + hook + index)
    ui/               # shadcn/ui primitives
  hooks/              # App-level hooks (useLocale, useAppVersion)
  i18n/               # Locale strings (pt.ts default, en.ts)
  lib/                # Utilities (cn, APP_VERSION)
  types/              # Domain types
```

## i18n

Default locale is **Portuguese (PT)**. Switch to English via the language dropdown in the navbar. The active locale is persisted in `localStorage`.

To add a new language:
1. Create `src/i18n/<locale>.ts` typed as `Strings`
2. Add it to the `localeMap` in `src/hooks/useLocale.tsx`
3. Add it to the `locales` array in `src/components/Navbar/Navbar.tsx`
