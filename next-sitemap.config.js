/** @type {import('next-sitemap').IConfig} */
const { getPlacementData } = require("./lib/placement");

module.exports = {
  siteUrl: 'https://www.lanstitut.com', 
  generateRobotsTxt: true, 
  sitemapSize: 10000, 
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/admin/**', '/dashboard/**', '/api/**'], 
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: ['/'] }, 
      { userAgent: '*', disallow: ['/admin/', '/dashboard/', '/api/'] }, 
    ],
  },
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const placementData = await getPlacementData();

    const staticPaths = [
      { loc: '/locations/bangalore', changefreq: 'weekly', priority: 0.8 },
      { loc: '/locations/kochi', changefreq: 'weekly', priority: 0.8 },
      { loc: '/locations/mumbai', changefreq: 'weekly', priority: 0.8 },
      { loc: '/blog/german-certification-guide', changefreq: 'weekly', priority: 0.8 },
      { loc: '/blog/nursing-job-tips', changefreq: 'weekly', priority: 0.8 },
      { loc: '/testimonials/nursing-success-story', changefreq: 'weekly', priority: 0.8 },
      { loc: '/testimonials/german-language-achiever', changefreq: 'weekly', priority: 0.8 },
    ];

    const categoryPaths = placementData.categories.map((category) => ({
      loc: `/placements/${category.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    }));

    const allPaths = [...staticPaths, ...categoryPaths];

   
    console.log("All Paths for Sitemap: ", allPaths);

    return allPaths.map((path) => ({
      loc: path.loc,
      changefreq: path.changefreq || 'weekly',
      priority: path.priority || 0.8,
    }));
  },
};
