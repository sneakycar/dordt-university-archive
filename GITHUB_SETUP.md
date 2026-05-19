# Create the GitHub repo (one-time)

The project is already a git repo with an initial commit. `gh` was not available in the build environment, so create the remote manually:

## Option 1 — GitHub website

1. Go to https://github.com/new
2. Repository name: **`dordt-university-archive`** (or `dordt`)
3. **Do not** add README, .gitignore, or license (this folder already has them)
4. Create repository
5. In Terminal:

```bash
cd /path/to/dordt-archive
git remote add origin https://github.com/dustyaltena/dordt-university-archive.git
git push -u origin main
```

## Option 2 — GitHub CLI

```bash
cd /path/to/dordt-archive
gh repo create dordt-university-archive --public --source=. --remote=origin --push
```

## Connect Vercel

1. Vercel → **dordt** project → **Settings → Git**
2. Connect **`dustyaltena/dordt-university-archive`** (not makeawesome-baseball)
3. **Root Directory:** leave blank (repo root is the app)
4. Deploy
5. **Domains** → `dordt.dustyaltena.com`
