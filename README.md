# Geleta Shelema — Professional Portfolio

A responsive personal portfolio built with Next.js 14, React, TypeScript, Tailwind CSS, and Lucide React icons. The layout and content are customized for Geleta Shelema’s professional profile.

## 1. Requirements

- Node.js 20 LTS or later
- npm
- Git (recommended)
- A GitHub account and a Vercel account for deployment

## 2. Run locally on Windows

1. Extract the ZIP file.
2. Open the `geleta-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3001 in your browser. Check the portfolio, admin pages, and links before publishing.

## 3. Check the production build

```bash
npm run build
```

The project is a standard Next.js app, so Vercel detects the framework and build settings automatically. No `vercel.json` or static-export configuration is needed.

## 4. Push this project to GitHub

Open a terminal in this project folder and review what will be published:

```bash
git status
git diff
git diff --cached
```

Make sure `.env.local` and any other secrets are not staged. `.env.local` is excluded by `.gitignore`; do not force-add it.

This local `main` branch and GitHub's `main` have both moved forward independently, so synchronize after committing and before pushing. For the README change in this checkout:

```bash
git add README.md
git diff --cached
git commit -m "Document GitHub and Vercel deployment"
git pull --rebase origin main
git push -u origin main
```

If you also made other changes, review and stage those files by name as well. If the rebase reports conflicts, resolve them, stage the resolved files, and run `git rebase --continue`; do not force-push. If you are unsure how to resolve a conflict, stop and ask for help before continuing.

The `origin` remote is already set to `https://github.com/gelatashel-dot/portfolio.git`. Future updates can be published with:

```bash
git add .
git status
git commit -m "Describe your change"
git push -u origin main
```

Before using `git add .`, review `git status` and confirm it will not include secrets or unrelated files.

## 5. Deploy with Vercel

1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Select **Add New → Project**, then import `gelatashel-dot/portfolio`.
3. Keep the detected framework as **Next.js** and leave the build and output settings at their defaults.
4. Before deploying, add these under **Environment Variables**:
   - `ADMIN_SECRET`: a long, unique secret used to protect the admin area. Generate one locally with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` and paste the output into Vercel. Do not commit it.
   - `NEXT_PUBLIC_SITE_URL`: the full site URL, for example `https://your-project.vercel.app`. After the first deployment, set this to the actual assigned URL and redeploy if it was not known beforehand.
5. Select **Deploy**. Vercel provides a free `*.vercel.app` address on its Hobby plan.
6. Open the deployed site and test it. Future pushes to `main` will trigger deployments automatically.

## 6. Important notes

- Never use the default development admin secret in production. Set `ADMIN_SECRET` in Vercel before sharing the site.
- `.env.local` is for local development only and must never be pushed to GitHub.
- The contact button opens the visitor's email application using a `mailto:` link; it does not send or store messages through a website backend.