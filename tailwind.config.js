/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      s0: "12px",
      s1: "15px",
      s2: "18px",
      s3: "20px",
      s4: "24px",
      s5: "36px",
    },
    screens: {
      xs: "0",
      md: "992px",
    },
    colors: {
      bkground: "#f1f1f1",
      white: "#ffffff",
      black: "#000000",
      lightblk: "#666666",
      lightgrey: "#818181",
      darkgrey: "#616161",
      hovergrey: "#cccccc",
      grey: "#444444",
      textgrey: "#909090",
    },
  },
  plugins: [],
};
