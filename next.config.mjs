/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      customKey: 'my-value',
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
           hostname: "**",
          port: '',
          pathname: '/**',
        },
       
      ],
  },
  
};

export default nextConfig;
