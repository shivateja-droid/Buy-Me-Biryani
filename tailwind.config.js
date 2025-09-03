/** @type {import('tailwindcss').Config} */

// detect environment
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: isDev
    ? [
      { pattern: /.*/ }, // ✅ keep ALL classes in dev
    ]
    : [
      // ✅ production-only safelist (add more if needed)
      { pattern: /bg-\[.*\]/ }, // arbitrary background utilities
      "bg-slate-800",
      "bg-slate-900",
      "bg-gradient-to-r",
      "bg-gradient-to-br",
      "from-red-400",
      "to-red-600",
      "text-white",
      "text-yellow-400",
      "shadow-lg",
      "rounded-lg",
      "object-cover",
      "absolute",
      "inset-0",
    ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

