# SENZ Website QA

Last verified: 2026-09-19

## Browser verification

The current `main` build was served over HTTP and tested in headless Chromium with Playwright.

Desktop viewport:
- 1440 × 900
- 4 main narrative scenes detected
- Hero visible
- WebGL canvas visible
- No horizontal overflow
- No page or console errors
- Scroll state changes correctly to scene 03
- In-page navigation resolves correctly
- SENZ contact mail links are present

Mobile viewport:
- 390 × 844
- No horizontal overflow
- Hero visible
- Header CTA visible
- All six service items remain in the DOM
- No page or console errors

## Fidelity ledger

| Check | Approved concept | Current implementation | Status |
| --- | --- | --- | --- |
| Hero hierarchy | Large black headline with cobalt emphasis, copy at left, SENZ sculpture at right | Same hierarchy and emphasis; code-native copy over a live 3D scene | Matched |
| Palette | True white, cobalt/electric blue, icy cyan, chrome, deep navy | Same primary palette and white → navy → white scene cadence | Matched |
| Navigation | Home, Services, Solutions, Approach, About, Contact, plus Let's Talk | Navigation updated to the same visible labels; Let's Talk retained | Matched |
| Scene 02 | Strategy/communications expressed through a blue ribbon and transparent nodes | Live blue 3D spline passes through optical-glass nodes plus six service categories | Matched in structure |
| Scene 03 | Deep navy technology core, glass cube, laptop, robotic hardware language | Live dark WebGL environment with glass intelligence cube, abstract laptop and articulated chrome hand | Matched in structure |
| Scene 04 | White-label growth represented by modular transparent branded products | Live modular glass blocks, central customizable product form and white-label CTA | Matched in structure |
| Typography | Clean bold geometric sans serif with tight headline tracking | Manrope 800 headlines with restrained body/UI typography | Closely matched |
| Responsive behavior | Desktop-led cinematic composition | Responsive 390 px mobile layout with no overflow and reduced visual density | Verified |
| Motion | Scroll-driven transition through one continuous SENZ world | Scene state, camera position, parallax, opacity and environment tone respond to scroll | Verified |

## Intentional production deviation

The approved design reference has photorealistic rendered architecture and object detail. The current repository implements those scenes as real-time Three.js geometry so the website is genuinely spatial and scroll-responsive rather than a sequence of flat screenshots.

The final photoreal asset pass originally planned for Nano Banana Pro in Higgsfield is still blocked by the connected Higgsfield workspace having zero image-generation credits. When that becomes available, the four scene environments can be upgraded without changing the information architecture or interaction model.

## Copy lock

Above the fold:
- SENZ / Strategic Communications
- Home
- Services
- Solutions
- Approach
- About
- Contact
- Let's Talk
- INFLUENCE THROUGH CLARITY
- BRANDS MOVE PEOPLE. WE MAKE IT HAPPEN.
- Strategic communications, digital solutions, and white-label technology for a clearer, sharper, and more visible tomorrow.
- Start a Conversation
- Explore Our Work

No extra hero badges, fake metrics, dashboard jargon, or testimonial filler were introduced.
