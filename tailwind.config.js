/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-1": "#050505",
        "black-2": "#1F1F1F",
        "black-3": "#2D2D2D",
        "black-4": "#3A3A3A",
        "gray-1": "#3A3A3A",
        "gray-2": "#E9E9E9",
        "gray-3": "#F4F4F4",
        white: "#FFFFFF",
        purple: "#A445ED",
        orange: "#FF5252",
      },
    },
  },
  plugins: [],
};
