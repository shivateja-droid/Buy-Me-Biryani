/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: blob: https://*;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self'
                https://api.github.com
                https://github.com
                https://accounts.google.com
                https://api.razorpay.com
                https://lumberjack.razorpay.com;
              frame-src 'self'
                https://github.com
                https://accounts.google.com
                https://checkout.razorpay.com
                https://api.razorpay.com;
            `.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
