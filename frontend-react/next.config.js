/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    async rewrites() {
        return [{
            source: '/assets/:path*',
            destination: 'https://brandonslade.me/assets/:path*'
        }, {
            source: '/api/:path*',
            destination: 'https://brandonslade.me/api/:path*'
        }];
    }
};

module.exports = nextConfig;
