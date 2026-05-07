export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-main": "#091517",
        "card-bg": "#101e22",
        "accent": "#00d2d3",
        "accent-dark": "#009c9d",
        "text-main": "#ffffff",
        "text-muted": "#94a3b8",
        "code-bg": "#0f172a",
        "code-header": "#1e293b",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "mono": ["Roboto Mono", "monospace"],
        "heading": ["Outfit", "sans-serif"],
      }
    },
  },
  plugins: [],
}
