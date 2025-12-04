/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  
  // مهم جدًا لتصدير Static HTML
  output: "export",

  // اسم الريبو على GitHub Pages
  basePath: isProd ? "/flutter-basics-website" : "",
  assetPrefix: isProd ? "/flutter-basics-website/" : "",
};

export default nextConfig;
