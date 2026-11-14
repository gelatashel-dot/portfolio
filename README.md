# Geleta Shelema — Professional Portfolio

A responsive personal portfolio built with Next.js 14, React, TypeScript, Tailwind CSS and Lucide icons. The design is inspired by the reference portfolio's information architecture, but uses an original layout and your professional profile.


## 1. Requirements

- Node.js 20 LTS or later
- npm
- Git (recommended)
- A GitHub account and Vercel account for deployment


## 2. Run locally on Windows

1. Extract the ZIP file.
2. Open the `geleta-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3001 in your browser.

To create a production build:

```bash
npm run build
npm start
```

## 3. Personalize before publishing

Search the project for these placeholders and update them:

- `YOUR_EMAIL@example.com` — your professional email address.
- `https://www.linkedin.com/` — your LinkedIn profile URL.
- `https://github.com/` — your GitHub profile URL.
- `https://example.com` in `app/layout.tsx` — your final website domain.
- Certification section — replace broad learning labels with the exact certificate names and credential URLs you hold.

Review all education details, dates, job titles, project descriptions and skill levels for accuracy. Add only projects you can demonstrate or explain. The project cards currently describe professional focus areas and are not represented as independently verified public case studies.

## 4. Deploy to Vercel (free Hobby plan)

1. Create a GitHub repository, for example `geleta-portfolio`.
2. Upload or push the contents of this project folder to that repository.
3. Sign in at https://vercel.com/ using GitHub.
4. Select **Add New → Project** and import `geleta-portfolio`.
5. Keep the detected framework as **Next.js**.
6. Leave the build command as `npm run build` and output settings at their defaults.
7. Select **Deploy**.
8. After deployment, open the generated `*.vercel.app` URL and test all links on desktop and mobile.

For future updates, commit and push changes to the connected GitHub branch. Vercel will automatically create a new deployment.

## 5. Project structure

```text
geleta-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── section-heading.tsx
│   └── site-header.tsx
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## 6. Important notes

- The contact button currently opens the visitor's email application using a `mailto:` link. It does not store or send messages through a website backend.
- The initial version does not include an admin dashboard, blog CMS, authentication or database. Those require a backend/database and security configuration.
- The profile card uses initials instead of a portrait. Add a professional headshot later if you want one.
- Do not publish private company data, internal screenshots, client details or confidential work information.
