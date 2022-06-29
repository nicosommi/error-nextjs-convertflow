/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/start/:path*",
        destination:
          "https://caisse-enregistreuse.convertflowpages.com/business-partner-sumup-pos/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
