# Create the GitHub repo (one-time)

Standalone copy (not inside makeawesome-baseball):

**`/Users/dust/Downloads/dev/dordt-university-archive`**

## Fastest — one script

```bash
cd /Users/dust/Downloads/dev/dordt-university-archive
./scripts/publish-to-github.sh
```

Creates **`dustyaltena/dordt-university-archive`** on GitHub and pushes `main`.

## Manual — GitHub website

1. https://github.com/new → name **`dordt-university-archive`**
2. Do **not** add README / .gitignore / license
3. Create, then:

```bash
cd /Users/dust/Downloads/dev/dordt-university-archive
git remote add origin https://github.com/dustyaltena/dordt-university-archive.git
git push -u origin main
```

## Connect Vercel

1. Vercel → **dordt** project → **Settings → Git**
2. Connect **`dustyaltena/dordt-university-archive`** (not makeawesome-baseball)
3. **Root Directory:** leave blank (repo root is the app)
4. Deploy
5. **Domains** → `dordt.dustyaltena.com`
