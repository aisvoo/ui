// import sharedConfig from "@repo/tailwind-config";

// const config: Pick<Config, "prefix" | "presets" | "content"> = {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   prefix: "",
//   presets: [sharedConfig],
// };

// export default withTV(config);


import type { Config } from "tailwindcss";
import { withTV } from 'tailwind-variants/transformer'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--ai-primary-value))',
          foreground: 'hsl(var(--ai-primary-foreground-value))',
        },
      }
    },
  },
  plugins: [],
};

export default withTV(config);
