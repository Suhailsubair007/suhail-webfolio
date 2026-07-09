/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black:           "#000000",
        white:           "#ffffff",
        icewhite:        "#ecfdf5",
        grey:            "#6b7280",
        lightblue:       "#22c55e",
        darkblue:        "#0f1f12",
        blackblue:       "#0a0f0a",
        orange:          "#f59e0b",
        tastycolor:      "#70B9BE",
        silentmooncolor: "#FFD5BD",
        instorcolor:     "#E3964A",
      },
    },
  },
  plugins: [],
};
