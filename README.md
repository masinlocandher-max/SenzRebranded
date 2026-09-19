# SENZ Rebranded

Approved cinematic one-page rebrand website for **SENZ Strategic Communications and Digital Solutions**.

## Experience

The site translates the approved SENZ visual DNA into a scroll-driven 3D world instead of reproducing social pubmats as flat sections.

1. **Influence Through Clarity** — luminous white architecture with a monumental cobalt SENZ sculpture.
2. **Strategy Meets Execution** — an optical-blue communication ribbon moving through glass strategy nodes.
3. **Technology That Amplifies** — deep-navy AI and automation core with chrome, glass, laptop geometry, and an abstract robotic hand.
4. **Build More Under Your Brand** — modular white-label products expanding around a central glass platform.

## Brand direction

- Deep navy: `#07142B`
- SENZ blue: `#2451D9`
- Electric blue: `#0878FF`
- Icy cyan: `#8FD3FF`
- White, optical glass, chrome, brushed silver
- Core line: **INFLUENCE THROUGH CLARITY**
- Positioning: **We make brands clearer, sharper, and harder to ignore.**

## Implementation

The current build is intentionally self-contained in `index.html`.

- Semantic HTML for navigation, copy, CTAs, and accessibility
- Three.js for the continuous spatial 3D world
- Scroll-linked scene transitions
- Desktop and mobile responsive behavior
- `prefers-reduced-motion` support
- No screenshot-as-interface implementation
- No fake metrics or generic agency card-stack template

Three.js is loaded as an ES module from jsDelivr and Manrope from Google Fonts.

## Run locally

Serve the repository over HTTP, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Primary contact

partnerships@senzpr.com
