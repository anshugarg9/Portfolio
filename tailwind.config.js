/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        "background-secondary": "#12121A",
        "background-tertiary": "#1A1A2E",
        foreground: "#E4E4E7",
        "foreground-muted": "#A1A1AA",
        accent: "#6366F1",
        "accent-cyan": "#22D3EE",
        "accent-purple": "#A855F7",
        border: "#27272A"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.25)",
        glass: "0 10px 40px rgba(10, 10, 15, 0.35)"
      }
    }
  },
  plugins: []
};
