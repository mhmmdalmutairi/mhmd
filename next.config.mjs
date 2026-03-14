/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // مطلوب لو الموقع على github.io/repo-name بدلاً من دومين مخصص
  // basePath: '',
};

export default nextConfig;
