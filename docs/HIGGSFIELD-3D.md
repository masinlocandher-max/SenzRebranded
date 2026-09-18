# SENZ Higgsfield 3D Brand Core

Project: https://higgsfield.ai/3d-jutsu/5e348971-4110-47de-889d-9026b2531b34

Current committed revision: 1

## Purpose

This scene is the motion reference and production source for the SENZ one-page website hero and closing sequence.

The asset contains:

- Two interlocking SENZ-inspired blue ribbon forms
- Floating cyan diamond node
- Three orbital rings
- Three signal nodes
- Six-second looping motion at 30fps
- SENZ navy / electric blue / ice cyan material system

## Integration rule

Do not hard-code the temporary Higgsfield signed GLB download URL into production. It expires.

For production, export the approved GLB from Higgsfield and store it as a versioned site asset, then load it lazily. The HTML/CSS SENZ core remains the accessible and low-power fallback.

## Performance requirements

- 3D must not contain essential copy or CTAs
- Lazy-load after critical hero HTML
- Provide static/CSS fallback when WebGL fails
- Respect prefers-reduced-motion
- Disable or simplify the live model on low-power/mobile conditions when necessary
- Keep the commercial page fully usable without the GLB
