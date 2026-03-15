import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://eammu.com';

// =================== Sitemap Stream ===================
const sitemap = new SitemapStream({
  hostname: BASE_URL
});

// =================== ROUTES ===================
const routes = [

  // ===== MAIN =====
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.9, changefreq: 'weekly' },
  { url: '/blogs', priority: 0.9, changefreq: 'weekly' },

  // ===== SERVICES =====
  { url: '/our-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/visa-services', priority: 0.9, changefreq: 'weekly' },
  { url: '/air-tickets', priority: 0.9, changefreq: 'weekly' },
  { url: '/tour-packages', priority: 0.9, changefreq: 'weekly' },
  { url: '/offers', priority: 0.8, changefreq: 'weekly' },
  { url: '/activities', priority: 0.8, changefreq: 'weekly' },

  // ===== IMMIGRATION =====
  { url: '/immigration-services', priority: 0.8, changefreq: 'weekly' },
  { url: '/usa-visa-interview-prep', priority: 0.8, changefreq: 'weekly' },

  // ===== GROUP WEBSITES =====
  { url: '/eammufashion', priority: 0.8, changefreq: 'weekly' },
  { url: '/eammumarketing', priority: 0.8, changefreq: 'weekly' },
  { url: '/eammuevent', priority: 0.8, changefreq: 'weekly' },
  { url: '/eammudairy', priority: 0.8, changefreq: 'weekly' },
  { url: '/eammutextile', priority: 0.8, changefreq: 'weekly' },
  { url: '/flyzoo', priority: 0.8, changefreq: 'weekly' },

  // ===== TRUST / LINKS =====
  { url: '/newsfeeds', priority: 0.8, changefreq: 'weekly' },
  { url: '/careers', priority: 0.8, changefreq: 'weekly' },
  { url: '/testimonials', priority: 0.8, changefreq: 'weekly' },
  { url: '/why-choose-eammu', priority: 0.8, changefreq: 'weekly' },
  { url: '/message-from-leadership', priority: 0.8, changefreq: 'weekly' },
  { url: '/terms-and-conditions', priority: 0.8, changefreq: 'weekly' },

  // ===== AUTH =====
  { url: '/signup', priority: 0.8, changefreq: 'weekly' },
  { url: '/login', priority: 0.8, changefreq: 'weekly' },

  // ===== CEO =====
  { url: '/naeem-hossen', priority: 0.8, changefreq: 'weekly' },

  // ===== COUNTRY PAGES =====
  { url: '/travel-agency-bangladesh', priority: 0.8, changefreq: 'weekly' },
  { url: '/travel-agency-dubai', priority: 0.8, changefreq: 'weekly' },
  { url: '/travel-agency-armenia', priority: 0.8, changefreq: 'weekly' },
  { url: '/travel-agency-georgia', priority: 0.8, changefreq: 'weekly' },

  // ===== VISA PAGES =====
  ...[
    'usa','uk','europe','canada','australia','germany','portugal','armenia','georgia','albania',
    'dubai','qatar','japan','china','south-korea','spain','kosovo','serbia','thailand','singapore',
    'malaysia','turkey','indonesia','india','saudi-arabia','morocco','brazil','south-africa','azerbaijan',
    'cyprus','srilanka','russia','montenegro'
  ].map(v => ({ url: `/visa-services/${v}-visa-application`, priority: 0.8, changefreq: 'weekly' })),

  // ===== VISA CATEGORIES =====
  ...[
    'tourist-visa-application-from-bangladesh',
    'student-visa-application-from-bangladesh',
    'work-visa-application-from-bangladesh'
  ].map(v => ({ url: `/visa-services/${v}`, priority: 0.8, changefreq: 'weekly' })),

  // ===== TIIC & STORE =====
  { url: '/target-ielts-and-immigration-center', priority: 0.8, changefreq: 'weekly' },
  { url: '/eammu-store', priority: 0.8, changefreq: 'weekly' },
  { url: '/eammu-social-responsibility', priority: 0.8, changefreq: 'weekly' },
];

// =================== WRITE ROUTES TO SITEMAP ===================
routes.forEach(route => {
  sitemap.write({
    url: route.url,
    priority: route.priority,
    changefreq: route.changefreq,
    lastmod: new Date().toISOString()
  });
});

sitemap.end();

// =================== SAVE FILE ===================
streamToPromise(sitemap)
  .then(xml => {
    const filePath = resolve('./public/sitemap.xml');
    writeFileSync(filePath, xml.toString());
    console.log('✅ Sitemap generated successfully:', filePath);
  })
  .catch(err => {
    console.error('❌ Sitemap generation failed:', err);
  });