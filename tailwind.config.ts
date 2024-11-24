import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "85/110": "85 / 110",
      },
      height: {
        "full-minus-3.5rem": "calc(100% - 3.5rem)",
        "screen-minus-4rem": "calc(100vh - 4rem)",
      },
      minWidth: {
        16: "4rem",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
