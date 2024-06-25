/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./grain.css",
  ],
  safelist: ["grain"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        white: "#ffffff",
        gray1: "#f2f2f2",
        gray2: "#e6e6e6",
        gray3: "#d9d9d9",
        gray4: "#666666",
        gray5: "#4d4d4d",
        gray6: "#262626",
        dark: "#0e0e0c",
        light1: "#f0faf9",
        light2: "#e8e8e3",
        light3: "#ddddd5",
        light4: "#d1d1c7",
        light5: "#aeae9d",
        light6: "#8c8c73",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cabinet: ["CabinetGrotesk-Regular", "Cabinet Grotesk", "sans-serif"],
        "cabinet-thin": [
          "CabinetGrotesk-Thin",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-extralight": [
          "CabinetGrotesk-Extralight",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-light": [
          "CabinetGrotesk-Light",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-medium": [
          "CabinetGrotesk-Medium",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-bold": [
          "CabinetGrotesk-Bold",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-extrabold": [
          "CabinetGrotesk-Extrabold",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-black": [
          "CabinetGrotesk-Black",
          "Cabinet Grotesk",
          "sans-serif",
        ],
        "cabinet-variable": [
          "CabinetGrotesk-Variable",
          "Cabinet Grotesk",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
