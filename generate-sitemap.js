import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://eammu.com';

const sitemap = new SitemapStream({
  hostname: BASE_URL
});

/**
 * 🔥 ROUTES DIRECTLY MATCHED WITH main.jsx
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
  '/activities',

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
  '/visa-services/usa-visa-application',
  '/visa-services/uk-visa-application',
  '/visa-services/europe-visa-application',
  '/visa-services/canada-visa-application',
  '/visa-services/australia-visa-application',
  '/visa-services/germany-visa-application',
  '/visa-services/portugal-visa-application',
  '/visa-services/armenia-visa-application',
  '/visa-services/georgia-visa-application',
  '/visa-services/albania-visa-application',
  '/visa-services/dubai-visa-application',
  '/visa-services/qatar-visa-application',
  '/visa-services/japan-visa-application',
  '/visa-services/china-visa-application',
  '/visa-services/south-korea-visa-application',
  '/visa-services/spain-visa-application',
  '/visa-services/kosovo-visa-application',
  '/visa-services/serbia-visa-application',
  '/visa-services/thailand-visa-application',
  '/visa-services/singapore-visa-application',
  '/visa-services/malaysia-visa-application',
  '/visa-services/turkey-visa-application',
  '/visa-services/indonesia-visa-application',
  '/visa-services/india-visa-application',
  '/visa-services/saudi-arabia-visa-application',
  '/visa-services/morocco-visa-application',
  '/visa-services/brazil-visa-application',
  '/visa-services/south-africa-visa-application',
  '/visa-services/azerbaijan-visa-application',
  '/visa-services/cyprus-visa-application',
  '/visa-services/srilanka-visa-application',
  '/visa-services/russia-visa-application',
  '/visa-services/montenegro-visa-application',

  // ===== VISA CATEGORIES =====
  '/visa-services/tourist-visa-application-from-bangladesh',
  '/visa-services/student-visa-application-from-bangladesh',
  '/visa-services/work-visa-application-from-bangladesh',

  // ===== TIIC & STORE =====
  '/target-ielts-and-immigration-center',
  '/eammu-store',
  '/eammu-social-responsibility'
];


// 🔁 WRITE ROUTES
routes.forEach(route => {
  sitemap.write({
    url: route,
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: new Date().toISOString()
  });
});

sitemap.end();


// SAVE FILE
streamToPromise(sitemap)
  .then(xml => {
    const filePath = resolve('./public/sitemap.xml');
    writeFileSync(filePath, xml.toString());
    console.log('✅ Sitemap generated successfully:', filePath);
  })
  .catch(err => {
    console.error('❌ Sitemap generation failed:', err);
  });