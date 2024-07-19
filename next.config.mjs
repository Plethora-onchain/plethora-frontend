/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.hashnode.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn-images-1.medium.com',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://plethora-frontend.vercel.app',
            },
        ];
    },
};

export default nextConfig;