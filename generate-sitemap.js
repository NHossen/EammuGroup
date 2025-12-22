import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const sitemap = new SitemapStream({ hostname: 'https://eammu.com' });

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.85 },
  { url: '/contact', changefreq: 'weekly', priority: 0.85 },
  { url: '/our-services', changefreq: 'monthly', priority: 0.85 },
  { url: '/visa-services', changefreq: 'weekly', priority: 0.85 },
  { url: '/air-tickets', changefreq: 'weekly', priority: 0.85 },
  { url: '/tour-packages', changefreq: 'weekly', priority: 0.85 },
  { url: '/offers', changefreq: 'weekly', priority: 0.85 },
  { url: '/immigration-services', changefreq: 'weekly', priority: 0.85 },
  { url: '/eammufashion', changefreq: 'monthly', priority: 0.85 },
  { url: '/eammumarketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/eammuevent', changefreq: 'monthly', priority: 0.85 },
  { url: '/eammudairy', changefreq: 'monthly', priority: 0.85 },
  { url: '/eammutextile', changefreq: 'monthly', priority: 0.85 },
  { url: '/flyzoo', changefreq: 'monthly', priority: 0.75 },
  { url: '/usa-visa-interview-prep', changefreq: 'monthly', priority: 0.75 },
  { url: '/newsfeeds', changefreq: 'weekly', priority: 0.7 },
  { url: '/careers', changefreq: 'weekly', priority: 0.75 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.75 },
  { url: '/message-from-leadership', changefreq: 'monthly', priority: 0.7 },
  { url: '/why-choose-eammu', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms-and-conditions', changefreq: 'monthly', priority: 0.7 },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.7 },
  { url: '/signup', changefreq: 'monthly', priority: 0.5 },
  { url: '/login', changefreq: 'monthly', priority: 0.5 },
];

// Add lastmod automatically
pages.forEach(page => sitemap.write({ ...page, lastmod: new Date().toISOString() }));
sitemap.end();

// Generate sitemap.xml in public folder at build time
streamToPromise(sitemap).then(data => {
  const path = resolve('./public/sitemap.xml');
  writeFileSync(path, data);
  console.log(`✅ Sitemap generated at ${path}`);
});
