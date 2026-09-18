# SENZ Higgsfield 3D Brand Core

Project: https://higgsfield.ai/3d-jutsu/5e348971-4110-47de-889d-9026b2531b34

Current committed revision: 3

## Purpose

This scene is the motion reference and production source for the SENZ one-page website hero and closing sequence.

The current revision replaces the earlier interpreted ribbon with geometry traced from the supplied official SENZ master icon so the front-facing silhouette stays brand-faithful.

The asset contains:

- Official SENZ ribbon silhouette traced from the supplied master icon
- Official diamond proportion traced from the supplied master icon
- Controlled darker crossover/fold accent
- Subtle diamond highlight
- Three orbital rings
- Three signal nodes
- Six-second restrained looping motion at 30fps
- SENZ navy / electric blue / ice cyan material system

## Fidelity rule

The front-facing silhouette is the source of truth. Motion, bevel, lighting, and depth may add dimensionality, but must not materially change the official SENZ proportions, notch, crossover, lower diagonal tail, or diamond relationship.

## Integration rule

Do not hard-code a temporary Higgsfield signed GLB download URL into production because it expires.

For production, export the approved GLB from Higgsfield and store it as a versioned site asset, then load it lazily. The HTML/CSS SENZ core remains the accessible and low-power fallback.

## Performance requirements

- 3D must not contain essential copy or CTAs
- Lazy-load after critical hero HTML
- Provide static/CSS fallback when WebGL fails
- Respect prefers-reduced-motion
- Disable or simplify the live model on low-power/mobile conditions when necessary
- Keep the commercial page fully usable without the GLB
