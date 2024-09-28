import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'serif'],
        euclid: ["euclid circular a", 'serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "500": "#A20E0E",
          '400': "#EF4439",
          "300": "#C85108",
          "200": "#DC810B",
          "220": "#dc810b20",
          "210": "#DC810B10",
          "100": "#E29C68",
          "75": "#FDEEEB",
          "50": "#F3F0D1",
          "text": "#887965",
        },
        secondary: {
          "900": "#0A0C0B",
          "700": "#1B1A00",
          "550": "#2D5D00",
          "500": "#6DAD05",
          "300": "#719905",
          "210": "#007ddd10",
          "100": "#C3E512",
        },
        tetiary: {
          "500": "",
          "300": "",
          "100": "",
          "50": "",
        },
        grey: {
          "600": "#6f6d6d",
          "510": "#52525210",
          "500": '#525252',
          "475": "#d9d9d920",
          "450": "#d7d7d710",
          "400": "#c4c4c4",
          "375":"#c4c4c420",
          "350": "#c4c4c415",
          "31": "#313131",
          "300": "#3c3c3c",
          "275": "#2c2c2c",
          "250": "#272d2f",
          "240": "#7a7a7a40",
          "210": "#82899810",
          "200": "#7a7a7a",
          "100": "#f3f3f3",
          "bg": "707070"
        },
        dark40: "#00000040"
      },
    },
  },
  plugins: [],
};
export default config;
