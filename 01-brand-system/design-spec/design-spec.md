# DESIGN SPEC

## Source of truth
Use the desktop reference JPGs in `00_DESIGN_REFERENCE/desktop/` as the definitive visual reference.
Do not invent new sections, decorative elements, copy, colours or layouts.

## Brand
- Site mark: `PAT`
- Primary background: white
- Primary text: black
- Accent red: `#DA291C`
- Secondary UI text: neutral grey, matched visually to the reference

## Typography
- Primary sans / display / UI: Instrument Sans
- Editorial body copy: Source Serif 4

Use the supplied font files from `01_BRAND_SYSTEM/fonts/`.
Match weights, tracking, line-height and sizing to the design references.

## Global visual rules
- Minimal white background.
- Black typography with restrained red accents.
- Large uppercase display headlines.
- Red underscore used as a recurring visual signature.
- Thin light-grey divider lines.
- Media has subtle rounded corners.
- Project galleries use tight, consistent gutters.
- White pill labels appear over project cards/media where shown.
- Red is used selectively: active navigation, arrows, accent underscore, selected labels and CTA details.

## Header
Left:
`PAT`

Right:
`HOME`
`ABOUT`
`CONTACT`

Behaviour:
- Keep the header consistent across all pages.
- Preserve the thin divider line below it.
- Show the active-page red underline where it appears in the references.
- `CONTACT` should navigate/scroll to the contact section on the About page.

## Home
Hero:
- `PATRICIA VILLAPALOS` + red underscore accent.
- `CREATIVE ART DIRECTOR & DESIGNER`
- `Madrid, España`

Project grid:
- Seven projects.
- Desktop composition must follow the design reference exactly.
- Project cards have rounded corners.
- Each card includes a white title pill, an arrow button, a client/market line and skill tags.
- Seeking the Spanish Sunshine includes the red award badge.

## Project pages
Shared structure:
1. Header
2. Top `← BACK TO HOME`
3. Large centred project title + red underscore accent
4. Centred editorial intro copy
5. Main visual/video and gallery
6. Bottom centred `← BACK TO HOME`
7. Global footer

Project hero videos:
- Autoplay
- Muted
- Loop
- `playsinline`
- No visible native controls unless explicitly required
- Use the supplied poster image while loading
- San Miguel Premium Tap remains static if the supplied final asset is an image

## About / Contact page
- About and Contact live on the same page.
- About text on the left, portrait on the right.
- `LET'S TALK! ↗` jumps to the contact section.
- Contact details appear above the form.
- Form fields use minimal underline styling.
- Submit button is black with white text and an up-right arrow.

## Footer
Left:
`LET’S MAKE`
`SOMETHING GOOD_`

Centre:
`patvillapalos@gmail.com`

Right:
`LINKEDIN ↗`
`EMAIL ↗`
`CV ↗`

Keep the footer structure identical across Home, About and project pages.

## Responsive
Desktop reference is the master design.
On smaller screens:
- Preserve hierarchy and whitespace rather than shrinking everything proportionally.
- Stack content logically.
- Keep project titles and media readable.
- Maintain the same copy and project order.
- Avoid adding horizontal scrolling.
