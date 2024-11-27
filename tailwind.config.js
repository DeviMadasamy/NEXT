/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: "rgb(8, 66, 67)",
        customsec_bg:"rgb(208, 247, 191)",
        shadow :"0 2px 8px rgba(0, 0, 0, 0.1);",
        border_bottom:"1px solid #dee2e6;",
        calcbutton:"rgb(188,235,209)"
      },
    },
  },
  plugins: [],
};
