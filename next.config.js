module.exports = {
  reactStrictMode: false,
  basePath: '/Promotions',

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.

    // ignoreDuringBuilds: true,
    "rules": {
      // Other rules
      "@next/next/no-img-element": "off"
    }
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/auto-loan': { page: '/auto-loan'/* , query: { title: 'auto-loan'} */ },
      '/deferred-shares': { page: '/deferred-shares'/* , query: { title: 'deferred-shares'} */ },
      '/home-equity-loan': { page: '/home-equity-loan'/* , query: { title: 'home-equity-loan'} */ },
      '/loan-for-home': { page: '/loan-for-home' /* , query: { title: 'loan-for-home'} */ },
      '/mortgage': { page: '/mortgage'/* , query: { title: 'mortgage'}  */ },
      '/mortgage-refinance': { page: '/mortgage-refinance'/* , query: { title: 'mortgage-refinance'} */  },
      '/unsecured-loan': { page: '/unsecured-loan'/* , query: { title: 'unsecured-loan'} */ },
      
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
  trailingSlash: true,
  
}
