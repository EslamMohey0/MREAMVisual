import { Config } from "tailwindcss";
import { tailwindBasicConfig } from "@tot/ui/dist/settings";
const config: Config = {
  content: ["./src/**/*.tsx", "./node_modules/@tot/ui/dist/**/*.js"],
  theme: {
    ...tailwindBasicConfig,
    extend: {
      colors: {
        tertiary: "var(--color-tertiary)",
        "gray-150": "var(--color-gray-150)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;