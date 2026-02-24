module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
  fadeIn: "fadeIn 1.2s ease-in-out",
},
keyframes: {
  fadeIn: {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
},

      colors: {
        primary: "#1E293B",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [],
};
