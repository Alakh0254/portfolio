     
name: Cyber-Organic
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#ccc4cd'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#968e97'
  outline-variant: '#4a454c'
  surface-tint: '#d6bee4'
  primary: '#d6bee4'
  on-primary: '#3a2a47'
  primary-container: '#0d011a'
  on-primary-container: '#857092'
  inverse-primary: '#6a5778'
  secondary: '#aad0ad'
  on-secondary: '#16371f'
  secondary-container: '#2d4e33'
  on-secondary-container: '#99be9d'
  tertiary: '#00e471'
  on-tertiary: '#003917'
  tertiary-container: '#000802'
  on-tertiary-container: '#008a42'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f2daff'
  primary-fixed-dim: '#d6bee4'
  on-primary-fixed: '#241531'
  on-primary-fixed-variant: '#52405f'
  secondary-fixed: '#c6ecc8'
  secondary-fixed-dim: '#aad0ad'
  on-secondary-fixed: '#00210b'
  on-secondary-fixed-variant: '#2d4e33'
  tertiary-fixed: '#63ff93'
  tertiary-fixed-dim: '#00e471'
  on-tertiary-fixed: '#00210b'
  on-tertiary-fixed-variant: '#005224'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 4rem
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.5rem
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 3rem
  xl: 5rem
  gutter: 1.5rem
  margin: 2rem
---

## Brand & Style

This design system explores the tension between high-tech precision and biological fluidity. It is designed for avant-garde technology platforms, immersive wellness apps, or creative portfolios that seek to evoke a sense of "digital nature." 

The brand personality is **mysterious, sophisticated, and pulsating with life.** The target audience appreciates a maximalist yet refined aesthetic that rejects standard corporate linearity. The UI should feel like an organism—breathing, glowing, and reacting to user interaction with fluid grace. The design style leans heavily into **Glassmorphism** combined with **Cyber-Organicism**, utilizing translucent layers that feel like cellular membranes and gradients that mimic deep-sea bioluminescence.

## Colors

The palette is anchored in a **midnight dark mode** to allow bioluminescent accents to pop.

- **Primary (Midnight Purple):** A deep, near-black violet used for the base background and deep shadows.
- **Secondary (Forest Shade):** A dark, saturated green used in gradients to provide depth and a "verdant" feel to the shadows.
- **Tertiary (Neon Chlorophyll):** A vibrant, glowing green used for critical actions and "living" UI elements.
- **Accent (Ethereal Violet):** A high-energy magenta-purple used for highlights and secondary interactions.
- **Gradients:** Use linear and radial "aurora" style gradients transitions between the Primary and Secondary colors to create a sense of moving light within the interface.

## Typography

This design system utilizes a high-contrast typographic pairing to reinforce the "Cyber-Organic" duality.

- **Headings (Newsreader):** Elegant, editorial serif fonts provide a sense of organic history and sophistication. They should be used for large titles with tight letter spacing.
- **Body & Technical (Space Grotesk):** A futuristic, geometric monospaced-leaning sans-serif. This provides the "cyber" aspect—precise, legible, and technical.
- **Stylistic Rule:** Never use the serif for labels or small body text. Never use the monospaced font for primary marketing headlines. The contrast between the "old world" serif and "new world" sans is the core of the identity.

## Layout & Spacing

The layout philosophy is **Fluid and Asymmetrical.** While a 12-column grid is used for core structure, elements should frequently break the grid or overlap with "floating" positioning to mimic biological growth.

- **The Grid:** Use a 12-column fluid grid for container alignment, but apply wide gutters (24px) to allow the "ethereal glow" of background elements to bleed between columns.
- **Padding:** Generous whitespace (using the `xl` spacing unit) is required to prevent the glassmorphic layers from feeling cluttered. 
- **The "Flow" Model:** Use negative margins and absolute positioning for decorative bioluminescent blobs behind content to create a sense of depth and movement.

## Elevation & Depth

Hierarchy is achieved through **transparency and light**, rather than traditional shadows.

- **Surface Tiers:** Backgrounds are deep and opaque. Containers (Cards/Modals) use a semi-transparent `rgba(255, 255, 255, 0.05)` backdrop with a high `backdrop-filter: blur(20px)`.
- **Bioluminescent Glow:** Interactive elements should emit a soft radial outer glow (`box-shadow`) using the Tertiary or Accent colors. This glow should feel like a light source under water.
- **Membrane Borders:** Use 1px solid borders with 20% opacity. For active states, use a linear gradient border that flows between purple and green.

## Shapes

The shape language is strictly **non-linear and organic.** 

- **Primary Shapes:** Standard containers use `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to avoid harsh corners.
- **Organic Blobs:** Use `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` (or similar irregular values) for background decorative elements and large image masks.
- **Buttons:** Buttons should feel like smooth pebbles—pill-shaped or highly rounded to encourage touch.

## Components

- **Buttons:** Primary buttons use a lush green-to-purple gradient with white `label-mono` text. On hover, the bioluminescent glow (box-shadow) should intensify.
- **Glass Cards:** Cards must have a 1px "frosted" top border and a significant backdrop blur. They should appear to float over the dark background gradients.
- **Input Fields:** Ghost-style inputs with a bottom-only border that pulses with a green glow when focused. 
- **Chips/Badges:** Small, pill-shaped elements with high-transparency backgrounds and colored text.
- **Bioluminescent Toggles:** Switches should look like glowing cells. When "On," the toggle thumb should emit a Tertiary green glow that spills into the surrounding track.
- **Progress Bars:** Use fluid, non-linear loading animations that look like liquid filling a vessel rather than a mechanical bar.