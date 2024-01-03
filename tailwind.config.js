/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1702305847/Ziara/heroImage_g2lbtd.png')",
        "home-hover-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1704281898/Ziara/accessories2_hjg4qg.jpg')",
        "collection-hover-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1704231270/Ziara/collection_1_jnkwyq.jpg')",
        "accessories-hover-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1704282902/Ziara/accessories4_z82xbp.jpg')",
        "footwears-hover-background":
          "url('https://res.cloudinary.com/dhuoa5mmo/image/upload/v1704282396/Ziara/footwears_rlk7iw.jpg')",
      },
      colors: {
        "background-color": "#D9D9D9",
        "footer-text-primary-color": "#4a4a4a",
        "brand-name-dark-color": "#282828",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        sliding: "slide 0s linear infinite",
      },
    },
  },
  plugins: [],
};
