# Dordt University Digital Archive

A standalone museum-style digital history exhibit for Dordt University (Sioux Center, Iowa). Portfolio project — not affiliated with the university.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new) (no monorepo root directory needed).
2. Framework: **Next.js** (auto-detected).
3. **Settings → Domains** → add `dordt.dustyaltena.com` (or your custom domain).
4. At your DNS host for `dustyaltena.com`, add:

| Type | Name | Value |
|------|------|--------|
| CNAME | `dordt` | `cname.vercel-dns.com` (or value Vercel shows) |

## Stack

- Next.js 16 · React 19 · TypeScript
- Static content in `lib/dordt/` (timeline, artifacts, campus media)
- No database or external APIs required

## License

Content cites public sources (dordt.edu, Wikimedia Commons, etc.). Code: use as you like for portfolio purposes.
