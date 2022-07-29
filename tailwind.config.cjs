/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
    },
    fontFamily: {
      sans: ['"Kumbh Sans"', "sans-serif"],
    },
    colors: {
      fem: {
        "ligh-grayish-blue": "hsl(240, 5%, 91%)",
        "dark-grayish-blue": "hsl(240, 6%, 50%)",
        "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
      },
    },
  },
  plugins: [],
};
