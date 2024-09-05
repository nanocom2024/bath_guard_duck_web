/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const pwaConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    // output: "export",
    images: {
        unoptimized: true,
    },
    ...pwaConfig,
    reactStrictMode: false,
};

export default nextConfig;

