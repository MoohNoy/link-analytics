import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // รูปโปรไฟล์ที่ได้จาก GitHub OAuth
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
