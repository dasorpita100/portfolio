# Orpita Das - Personal Portfolio

A personal portfolio website for **Orpita Das**, a final-year B.Tech CSE (Data Science major) student at Lovely Professional University, graduating in May 2027.

## Project Goal
To impress recruiters and Master's admissions reviewers (particularly in Germany) with a clean, high-performance, and visually striking portfolio. The design is built in small, iterative steps.

## Creative Concept: "Signal in the Noise"
The visual identity of the site is driven by a "Signal in the noise" theme:
- **Hero Canvas**: A background field of drifting data points that react to the cursor. Upon loading, they settle into the letters of Orpita's name.
- **Color Palette**: Near-black background, one electric teal accent color, and off-white text.
- **Typography**: A combination of one modern display font and one highly readable body font (Google Fonts: Outfit and Inter).

## Tech Stack & Architecture
- **Build Tool**: Vite
- **Language**: Vanilla JavaScript (No heavy frameworks like React/Vue)
- **Styling**: Plain CSS (No Tailwind) utilizing modern CSS variables for the design system.
- **Animations**: GSAP + ScrollTrigger for high-performance scroll effects.
- **Visuals**: Lightweight HTML5 Canvas API (No Three.js).

## Constraints & Requirements
- **Performance**: Must achieve a Lighthouse performance score of 90+. Content must be readable within 2 seconds, even before animations finish.
- **Accessibility**: Semantic HTML, proper `alt` text, full keyboard navigation, and a minimum 4.5:1 color contrast ratio.
- **Responsiveness**: Strictly mobile-first design.
- **Reduced Motion**: Respects the user's `prefers-reduced-motion` OS setting by disabling complex animations if requested.
- **Deployment**: Configured to deploy as a static site on GitHub Pages.
- **Content Management**: All site copy is centralized in a single `content.js` file, ensuring text can be updated without modifying any layout or styling code. No facts, metrics, or links are invented; missing data uses `[TODO]` placeholders.

## Local Development
To run this project locally, ensure you have Node.js installed, then run the following commands in your terminal:

```bash
# Install dependencies
npm install

# Start the local development server
npx vite
```

## Deployment
This project is built to be deployed as a static site on GitHub Pages. To build the production-ready site:
```bash
npx vite build
```
The output will be placed in the `dist` folder, which can be uploaded to your GitHub repository and served via GitHub Pages.
