/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702305847/Ziara/heroImage_g2lbtd.png')",
        "collection-hover-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1704231270/Ziara/collection_1_jnkwyq.jpg')",
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
