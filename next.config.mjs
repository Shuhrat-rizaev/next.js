/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig = {};
const intlPlagen =createNextIntlPlugin()
export default intlPlagen(nextConfig);
