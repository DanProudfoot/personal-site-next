const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js"
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug"
      }
    ];
  }
});
