import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://eammu.com';

const sitemap = new SitemapStream({
  hostname: BASE_URL
});

/**
 * 🔥 SINGLE SOURCE OF TRUTH
 * These routes are copied directly from main.jsx
 * No guessing. No missing pages.
 */
const routes = [
  // ===== MAIN =====
  '/',
  '/about',
  '/contact',
  '/blogs',

  // ===== SERVICES =====
  '/our-services',
  '/visa-services',
  '/air-tickets',
  '/tour-packages',
  '/offers',

  // ===== IMMIGRATION =====
  '/immigration-services',
  '/usa-visa-interview-prep',

  // ===== GROUP WEBSITES =====
  '/eammufashion',
  '/eammumarketing',
  '/eammuevent',
  '/eammudairy',
  '/eammutextile',
  '/flyzoo',

  // ===== TRUST / LINKS =====
  '/newsfeeds',
  '/careers',
  '/testimonials',
  '/why-choose-eammu',
  '/message-from-leadership',
  '/terms-and-conditions',

  // ===== AUTH =====
  '/signup',
  '/login',

  // ===== CEO =====
  '/naeem-hossen',

  // ===== COUNTRY PAGES =====
  '/travel-agency-bangladesh',
  '/travel-agency-dubai',
  '/travel-agency-armenia',
  '/travel-agency-georgia',

  // ===== VISA PAGES =====
  '/usa-visa-application',
'/uk-visa-application',
'/europe-visa-application',
'/canada-visa-application',
'/australia-visa-application',
'/germany-visa-application',
'/portugal-visa-application',
'/armenia-visa-application',
'/georgia-visa-application',
'/albania-visa-application',
'/dubai-visa-application',
'/qatar-visa-application',
'/japan-visa-application',
'/china-visa-application',
'/south-korea-visa-application',
'/spain-visa-application',
'/kosovo-visa-application',
'/serbia-visa-application',
'/thailand-visa-application',
'/singapore-visa-application',
'/malaysia-visa-application',
'/turkey-visa-application',
'/indonesia-visa-application',
'/india-visa-application',
'/saudi-arabia-visa-application',
'/morocco-visa-application',
'/brazil-visa-application',
'/south-africa-visa-application',
'/azerbaijan-visa-application',
'/cyprus-visa-application',
'/srilanka-visa-application',
'/russia-visa-application',
'/montenegro-visa-application',

  // ===== VISA CATEGORIES =====
  '/tourist-visa-application-from-bangladesh',
  '/student-visa-application-from-bangladesh',
  '/work-visa-application-from-bangladesh',

  // ===== TIIC & STORE =====
  '/target-ielts-and-immigration-center',
  '/eammu-store',
  '/eammu-social-responsibility'
];

// 🔁 WRITE ALL ROUTES
routes.forEach(route => {
  sitemap.write({
    url: route,
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: new Date().toISOString()
  });
});

// END STREAM
sitemap.end();

// SAVE FILE TO /public
streamToPromise(sitemap)
  .then(xml => {
    const filePath = resolve('./public/sitemap.xml');
    writeFileSync(filePath, xml.toString());
    console.log('✅ Sitemap generated successfully:', filePath);
  })
  .catch(err => {
    console.error('❌ Sitemap generation failed:', err);
  });
