/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#DCAC36",
        secondary: "#0D0D0D",
        gray: "rgba(255, 255, 255, 0.75)",
        lightGray: "#161616",
      },
    },
  },
  plugins: [],
};
