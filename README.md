# Begovac Spedition

Marketing site for Begovac Spedition d.o.o. — international road freight and forwarding.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY to enable the contact form
npm run dev
```

The site runs at http://localhost:3000.

## Environment variables

All are read server-side only, in `src/app/api/kontakt/route.ts`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes, in production | Authenticates against the Resend API to deliver contact-form enquiries. |
| `CONTACT_INBOX` | no | Recipient address. Defaults to `info@spedition-begovac.com`. |
| `CONTACT_FROM` | no | Sender identity, must use a Resend-verified domain. |

If `RESEND_API_KEY` is missing the endpoint responds `503 not_configured` and the
form surfaces the phone number and e-mail address instead of claiming the message
was sent. This is deliberate — a silently swallowed enquiry is a lost customer.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with Turbopack. |
| `npm run build` | Production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | ESLint. |

## Structure

```
src/
  app/            routes; each page pairs a server component (metadata) with a *Client.tsx
  components/     home/ layout/ contact/ ui/
  contexts/       ThemeContext (light/dark), LanguageContext (sl/en/de/es)
  lib/
    i18n.ts       every user-facing string, keyed by locale
    site-images.ts single source of truth for image paths
public/images/    optimised photography, grouped by fleet category
```

## Conventions

- **Copy lives in `src/lib/i18n.ts`.** Adding a string means adding it to all four
  locales — the types enforce this.
- **Image paths live in `src/lib/site-images.ts`,** never inline in components.
- **Next.js 16 image loading:** `preload` belongs on the LCP hero image only.
  Other above-the-fold images use `loading="eager"` with `fetchPriority="high"`.
  The `priority` prop is deprecated.
- Theme is applied by a blocking inline script in `layout.tsx` before paint, so
  dark mode does not flash. `<html>` carries `suppressHydrationWarning` for that reason.
