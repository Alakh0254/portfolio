name: AS.DEV Premium (Cyber-Organic)
colors:
  bg-main: '#091517'
  card-bg: '#101e22'
  accent: '#00d2d3'
  accent-dark: '#009c9d'
  text-main: '#ffffff'
  text-muted: '#94a3b8'
  code-bg: '#0f172a'
  code-header: '#1e293b'
typography:
  heading:
    fontFamily: Outfit
    fontWeight: '800'
    lineHeight: '1.1'
  sans:
    fontFamily: Inter
    fontWeight: '400'
    lineHeight: '1.6'
  mono:
    fontFamily: Roboto Mono
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px


## Brand & Style

**AS.DEV Premium** is a design system that blends high-performance software aesthetics with a "Cyber-Organic" teal-tinted dark mode. It is designed for software developers and engineers who want to project a sense of precision, technical depth, and modern elegance.

The brand personality is **precise, futuristic, and sophisticated.** It avoids standard corporate blues in favor of deep teals and bioluminescent cyans. The UI emphasizes **Glassmorphism** and **Technical Realism**, featuring components that look like premium dev tools and IDE interfaces integrated into a fluid, responsive environment.

## Colors

The palette is built on a deep teal foundation with high-energy cyan accents.

- **Background (Deep Teal/Black):** `#091517` - The primary canvas, providing a sense of infinite depth.
- **Surface (Card BG):** `#101e22` - Used for containers and glass panels to create subtle contrast.
- **Accent (Bioluminescent Cyan):** `#00d2d3` - Used for highlights, interactive states, and glowing indicators.
- **Accent Dark:** `#009c9d` - Used for secondary states and hovered borders.
- **Text:** White (`#ffffff`) for high contrast and Slate (`#94a3b8`) for muted metadata.
- **Code Syntax:** A curated palette for the "IDE Window" components, using soft purples, greens, and blues for readability.

## Typography

The system uses three distinct font families to balance readability and technical identity.

- **Headings (Outfit):** A bold, geometric sans-serif that feels modern and authoritative. Used for primary section titles.
- **Body (Inter):** The gold standard for UI readability. Used for all descriptive text.
- **Technical (Roboto Mono):** Used for code snippets, metadata labels, and the signature hero "IDE Window."

## Elevation & Depth

Hierarchy is achieved through **transparency, borders, and light.**

- **Glass Panels:** Containers use the `card-bg` with low opacity and a 1px `white/5` border. On hover, they gain a subtle cyan glow and intensified borders.
- **Bioluminescent Glow:** Key interactive elements (like the "Available for Hire" pill) use a soft pulsing glow to draw attention.
- **IDE Windows:** Deeply layered components with a custom header (`code-header`) and shadow to simulate a window floating over the interface.

## Components

- **The "IDE Window":** A signature component featuring macOS-style window controls, a custom header, and syntax-highlighted code.
- **Glass Cards:** Cards with 1px borders and backdrop blurs that appear to float over the dark teal void.
- **Action Pills:** Small, bordered badges with pulsing status indicators.
- **Buttons:** High-contrast buttons with solid cyan backgrounds for primary actions and bordered "ghost" styles for secondary actions.
- **Academic Tables:** Structured, minimalist tables with horizontal dividers and subtle hover states for tabular data.