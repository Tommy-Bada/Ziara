/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702305847/Ziara/heroImage_g2lbtd.png')",
      },
      colors: {
        "background-color": "#D9D9D9",
        "footer-text-primary-color": "#4a4a4a",
        "brand-name-dark-color": "#282828",
      },
    },
  },
  plugins: [],
};
