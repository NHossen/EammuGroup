const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const sitemap = new SitemapStream({ hostname: 'https://eammu.com' });

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.85 },
  { url: '/contact', changefreq: 'weekly', priority: 0.85 },
  { url: '/ourServices', changefreq: 'monthly', priority: 0.6 },
  { url: '/visaservices', changefreq: 'weekly', priority: 0.85 },
  { url: '/airtickets', changefreq: 'weekly', priority: 0.85 },
  { url: '/tourpackages', changefreq: 'weekly', priority: 0.85 },
  { url: '/offer', changefreq: 'weekly', priority: 0.8 },
  { url: '/eammuimmigrationservices', changefreq: 'weekly', priority: 0.85 },
  { url: '/eammufashion', changefreq: 'monthly', priority: 0.85 },
  { url: '/eammumarketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/eammuevent', changefreq: 'monthly', priority: 0.85 },
  { url: '/eammudairy', changefreq: 'monthly', priority: 0.85 },
  { url: '/eammutextile', changefreq: 'monthly', priority: 0.85 },
  { url: '/flyzoo', changefreq: 'monthly', priority: 0.75 },
  { url: '/targetusavisainterview', changefreq: 'monthly', priority: 0.75 },
  { url: '/eammunewsfeeds', changefreq: 'weekly', priority: 0.7 },
  { url: '/eammucareers', changefreq: 'weekly', priority: 0.75 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.75 },
  { url: '/messagefromleadingteam', changefreq: 'monthly', priority: 0.7 },
  { url: '/eammuterms', changefreq: 'monthly', priority: 0.6 },
  { url: '/testimonials', changefreq: 'monthly', priority: 0.7 },
  { url: '/signup', changefreq: 'monthly', priority: 0.5 },
  { url: '/login', changefreq: 'monthly', priority: 0.5 },
];

pages.forEach((page) => sitemap.write({ ...page, lastmod: new Date().toISOString() }));
sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream(resolve(__dirname, './public/sitemap.xml')).end(data)
);
