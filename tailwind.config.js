/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: { silde: "slidein 100ms ease-linear " },
      keyframes: {
        slidein: {
          "0%": {
            transform: "translateX(100%) translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0%) translateY(-40px)",
            opacity: "1",
          },
        },
      },

      colors: {
        darkteal: "#05100e",
      },
      fontFamily: {
        logo: [`var(--font-Anton)`],
      },
    },
  },
  plugins: [],
};
