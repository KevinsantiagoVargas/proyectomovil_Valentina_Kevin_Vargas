/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3B1A", // Un verde oscuro para el fondo
        secondary: {
          DEFAULT: "#4CAF50", // Verde vibrante
          100: "#43A047", // Variación de verde más oscuro
          200: "#388E3C", // Verde más apagado
        },
        black: {
          DEFAULT: "#000",
          100: "#0D1E0D", // Verde muy oscuro, casi negro
          200: "#1C3B1C", // Otra variación de verde oscuro
        },
        gray: {
          100: "#A9B9A9", // Gris verdoso suave
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

