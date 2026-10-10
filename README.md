# Gagan KM Portfolio

A premium multi-page portfolio built with Next.js App Router and TypeScript. The site includes verified details from the provided resume and deliberately avoids fictional projects, certifications, or achievements.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push this project to a GitHub repository.
2. Import the repository into Vercel.
3. Set the environment variable `NEXT_PUBLIC_SITE_URL` to the production URL, for example: `https://your-domain.vercel.app`.
4. Deploy the project.

## Resume replacement

Place a new PDF in `public/resume/Gagan_KM_Resume.pdf` to replace the current resume. The `Download Resume PDF` button uses that file automatically.

## Add future projects

Update the `projects` array in `data/projects.ts` with real project entries. Each project includes a `slug`, `title`, `description`, technologies, and optional links. The detail page will automatically render for matching slugs.

## Contact form

This portfolio is frontend-only and has no backend. The contact form validates its fields and then opens a pre-filled draft in the visitor’s default email app addressed to `ifeelthskyyy@gmail.com`. The visitor sends the message from that app; the website does not claim to submit or deliver messages itself.
