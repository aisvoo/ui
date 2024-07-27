import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extends: {
      colors: {
        primary: {
          // DEFAULT: 'hsl(var(--ai-primary-value))',
          // foreground: 'hsl(var(--ai-primary-foreground-value))',
          DEFAULT: '#dfcd12',
          foreground: '#ffffff',
        },
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    }
  },
  plugins: [],
};
export default config;
