/** @type {import('tailwindcss').Config} */

// detect environment
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: isDev
    ? [
      { pattern: /.*/ }, // ✅ keep ALL classes in dev
    ]
    : [
      // ✅ production-only safelist (add more if needed)
      { pattern: /.*/ }, // arbitrary background utilities
      // sizes for dropdown avatar & svg
        "w-2.5",
        "h-2.5",
        "w-8",
        "h-8",
        "ms-3",
        "me-3",

        // paddings that collapsed in prod
        "px-2",
        "px-3",
        "px-4",
        "py-2",
        "py-3",
        "p-4",

        // navbar/footer backgrounds & shadows
        "bg-slate-800",
        "bg-slate-900",
        "shadow",
        "shadow-md",
        "shadow-lg",

        // text colors you use in navbar/footer
        "text-white",
        "dark:text-white",
        "text-gray-900",

        // rounding for avatars/buttons
        "rounded-full",
        "rounded-md",
        "absolute",
        "inset-0",
        "fixed"
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

