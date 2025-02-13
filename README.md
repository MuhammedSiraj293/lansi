This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



siraj 

## Features

## Dynamic Meta Tags & Open Graph Optimization

Created globally in (lib seo.js) for dynamically calling all pages 

Change all data in metadata.js pages and it calls in page.js 

## Structured Data (JSON-LD)

Course Schema (@type: Course) for upskilling programs.

FAQ Schema (@type: FAQPage) for frequently asked questions.

JobPosting Schema (@type: JobPosting) for nursing job listings.

Breadcrumb Schema (@type: BreadcrumbList) for clear navigation.

Created all json-ld in component > schemas file and call it needed place 

## Multi-Location SEO & hreflang Implementation
Local SEO metadata for city-specific pages (e.g., /locations/bangalore, /locations/kochi).
hreflang tags implemented for future multilingual support.
Created in languages herflang.js and called in layout js

## XML & HTML Sitemap Generation
Dynamic XML sitemap generation for key pages:
Courses: /courses/german-b2, /courses/german-a2, etc.
City-specific pages: /locations/bangalore, /locations/kochi, etc.
Blog articles & testimonials.
For dynamic data from db or api (for now created a data in lib>placement.js called it has a sample)


## Robots.txt & Meta Robots Implementation
Proper robots.txt configuration to block indexing of non-SEO-friendly pages like /admin /dashbord /api

Allow indexing of essential pages like course pages, blog posts, and success stories.

## Lazy loading images (next/image)

 <Image src="/path/to/image.jpg" alt="Optimized Image" width={500} height={500} loading="lazy" />

## Preloading critical resources (<link rel="preload">)
<link rel="preload" href="/path/to/important.js" as="script"> 
<link rel="preload" href="/path/to/important.css" as="style">
 <link rel="preload" href="/path/to/font.woff2" as="font" type="font/woff2" crossorigin="anonymous">

## Minimizing CLS (Cumulative Layout Shift) by defining image sizes

<img src="/path/to/image.jpg" alt="description" width="500" height="300" />

If we need to optimize better we can use image srcset

## Optimizing fonts & reducing unused CSS/JS
FAQ
Q.How can I learn German for nursing? 

We offer courses that will help you pass the German proficiency tests required for nursing jobs in Germany.

## New packages 
next-seo package for SEO optimizations

next-sitemap for dynamic sitemap generation


