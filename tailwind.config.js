/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* All theme colors come from CSS variables in src/index.css :root
           Change colors there — Tailwind classes update automatically */
        black:     "var(--black)",
        white:     "var(--white)",
        icewhite:  "var(--icewhite)",
        grey:      "var(--grey)",
        lightblue: "var(--lightblue)",
        darkblue:  "var(--darkblue)",
        blackblue: "var(--blackblue)",
        orange:    "var(--orange)",
        tastycolor:      "#70B9BE",
        silentmooncolor: "#FFD5BD",
        instorcolor:     "#E3964A",
      },
    },
  },
  plugins: [],
};
