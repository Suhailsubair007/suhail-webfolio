/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black:           "var(--black)",
        white:           "var(--white)",
        icewhite:        "var(--icewhite)",
        grey:            "var(--grey)",
        lightblue:       "var(--lightblue)",
        darkblue:        "var(--darkblue)",
        blackblue:       "var(--blackblue)",
        orange:          "var(--orange)",
        tastycolor:      "#70B9BE",
        silentmooncolor: "#FFD5BD",
        instorcolor:     "#E3964A",
      },
    },
  },
  plugins: [],
};
