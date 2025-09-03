/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // apply CSP globally
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob:;
              connect-src 'self'
                https://api.github.com
                https://github.com
                https://accounts.google.com
                https://api.razorpay.com;
              frame-src 'self'
                https://github.com
                https://accounts.google.com
                https://checkout.razorpay.com;
            `.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
