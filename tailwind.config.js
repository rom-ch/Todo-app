export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-dark": "url('/src/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('/src/images/bg-mobile-light.jpg')",
        "desktop-dark": "url('/src/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/src/images/bg-desktop-light.jpg')",
      },
    },
  },
};
