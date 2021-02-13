module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slidex: {
          "0%": { transform: "translateX(-24rem)", opacity: 0 },
          "100%": { transform: "translateX(0rem)", opacity: 1 },
        },
      },
      animation: {
        slidex: "slidex .3s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
