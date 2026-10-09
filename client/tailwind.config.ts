import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        institutional: {
          navy: "#0B192C",
          navyLight: "#1E3A8A",
          sapphire: "#2563EB",
          gold: "#C9A24B",
          goldLight: "#E4C97E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
