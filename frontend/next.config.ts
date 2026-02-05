import type { NextConfig } from "next";

const nextConfig: NextConfig = { 
 
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.107:3000", 
  ],
  async rewrites() {
    
    return [
      {
        source: '/api/auth/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*` 
      }
    ];
  }


};

export default nextConfig;
