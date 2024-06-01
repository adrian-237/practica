/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        custom: "10px",
      },
      width: {
        nav: "80%",
        button: "220px",
        feature: "300px",
        content: "80%",
        twenty: "20%",
      },
      maxWidth: {
        feature: "30%",
      },
      height: {
        nav: "60px",
        banner: "60vh",
        discount: "90vh",
        button: "50px",
      },
      fontSize: {
        logo: "25px",
      },
      colors: {
        primary: "#B81414",
        background2: "#F5F5F5",
        secondary: "#D0D0D0",
      },
      fontFamily: {
        body: ['"Outfit", sans serif'],
      },
      container: {
        screens: {
          sm: "100%",
          md: "80%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1580px",
        },
        padding: {
          DEFAULT: "0.875rem",
          sm: "1.125rem",
          md: "1.125rem",
          lg: "0.625rem",
          xl: "0.625rem",
          "2xl": "0.625rem",
        },
      },
    },
  },
  plugins: [],
};
