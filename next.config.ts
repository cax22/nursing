/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Replace with your GitHub username and repository name
  basePath: "/nursing",
  assetPrefix: "/nursing",

  // Optional: Add trailingSlash for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
