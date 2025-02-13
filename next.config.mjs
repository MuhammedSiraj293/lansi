/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/old-course-url',
          destination: '/courses/new-course',
          permanent: true,
        },
        // Add more redirects as needed
      ];
    },
  
    images: {
      domains: ['your-image-domain.com'], // Add image domains if needed
    },
  
    reactStrictMode: true,
  
    // Add custom headers if required
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Custom-Header',
              value: 'my-custom-header-value',
            },
          ],
        },
      ];
    },
  
  };
  
  export default nextConfig;
  