/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "",
    domains: [
      "storage.googleapis.com",
      "lh1.googleusercontent.com",
      "lh2.googleusercontent.com",
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com",
      "firebasestorage.googleapis.com",
      "localhost",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
