/** @type {import('next').NextConfig} */
const nextConfig = {
  // APP_ID is read server-side via process.env.APP_ID (set per Vercel
  // project / per deploy target — see README "Launching a new app").
  reactStrictMode: true,
};

module.exports = nextConfig;
