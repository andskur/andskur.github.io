---
name: andskur
description: A night-sky drafting surface where engineering schematics draw themselves in starlight over warm ink-dark ground.
colors:
  night-ground: "#17140f"
  surface-raised: "#1f1b15"
  hairline: "#2f2921"
  hairline-strong: "#75695b"
  warm-chalk: "#ede7db"
  chalk-dim: "#a89e90"
  starlight: "#8db4dc"
  starlight-bright: "#a8c7e8"
  on-starlight: "#17140f"
  deep-nebula: "#0f3556"
  nebula-line: "#2f5379"
  on-nebula: "#e8f0f8"
typography:
  display:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "56px"
    fontWeight: 500
    lineHeight: "60px"
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "IBM Plex Serif, Georgia, serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: "46px"
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "56px"
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums lining-nums"
  lead:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "26px"
  body:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
    fontFeature: "tabular-nums lining-nums"
  label:
    fontFamily: "IBM Plex Sans, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "22px"
  tag:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.02em"
rounded:
  edge: "3px"
  circle: "50%"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "28px"
  section: "80px"
  gutter-phone: "24px"
  gutter: "80px"
components:
  button-primary:
    backgroundColor: "{colors.starlight}"
    textColor: "{colors.on-starlight}"
    typography: "{typography.label}"
    rounded: "{rounded.edge}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.starlight-bright}"
    textColor: "{colors.on-starlight}"
    rounded: "{rounded.edge}"
  button-primary-compact:
    backgroundColor: "{colors.starlight}"
    textColor: "{colors.on-starlight}"
    rounded: "{rounded.edge}"
    padding: "0 20px"
    height: "40px"
  input-field:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.warm-chalk}"
    rounded: "{rounded.edge}"
    padding: "0 12px"
    height: "44px"
  tag:
    textColor: "{colors.starlight}"
    typography: "{typography.tag}"
    rounded: "{rounded.edge}"
    padding: "0 8px"
    height: "22px"
  node:
    backgroundColor: "{colors.night-ground}"
    size: "9px"
  node-live:
    backgroundColor: "{colors.starlight}"
    size: "9px"
---

# Design System: andskur

## Overview

**Creative North Star: "The Night Blueprint"**

The page is a drafting surface seen at night. Its ground is not the neutral charcoal of a dark theme but a warm brown-black (#17140f), the colour of ink rather than of a screen, and on it sit two cold things: a deep navy sky that drifts behind everything, and a pale blue light that marks whatever is live. Graph paper appears where work is being shown, fading in at the edges of a section and fading out again. Schematics draw themselves, stroke by stroke, and then light moves along the lines they made.

The personality is an engineer's, not a marketer's. Nothing is soft: corners are 3px or nothing, lines are one pixel, labels are set in a monospace at 12px, and numbers are tabular so that columns of figures line up as they would in a report. The density is generous rather than tight; sections breathe at 80px of gutter and 80 to 96px of top padding, because the reader is senior and time-poor and the page is asking them to take one thing at a time.

What makes the system distinctive is that its decoration is all evidence. The nebulae, the star field and the grain are atmosphere, but the diagrams are the argument: seven system areas, each drawn as nodes and wires with a constraint written beside it. The animation exists to make the drawing feel authored, not to entertain. A wire draws in 1.1s and then a pulse travels it on a slow loop, which reads as a system that is running.

**Key Characteristics:**
- Warm ink-dark ground, never neutral grey-blue.
- A single pale blue accent that means "live", used sparingly.
- Blueprint navy as structure: nebulae behind, 40px graph paper masked to fade at its edges.
- Three typefaces with three jobs: a serif that speaks, a sans that explains, a mono that measures.
- 3px corners, 1px lines, no fills that are not either ground, raised surface, or light.
- Depth by emitted light, not by shadow.
- Motion that draws and then flows, with a full reduced-motion path.

## Colors

A warm dark ground carrying one cold accent, with a deep navy reserved entirely for structure and atmosphere.

### Primary
- **Starlight** (#8db4dc): The single accent. It appears on links, on the primary button, on the hairline that slides under a hovered navigation item or footer link, on the leading dash before each hero route, on the pulse travelling a wire, and on a node the moment it goes live. It is a pale desaturated blue, cold against the warm ground, and it is the only colour in the system that signals state.
- **Starlight Bright** (#a8c7e8): The hover and focus step. Used for link hover, button hover, and the brighter edge of a glow. Never used at rest.
- **On Starlight** (#17140f): Text and iconography sitting on a Starlight fill. It is the ground colour reused, which is why a primary button reads as a hole punched through to the page beneath.

### Secondary
- **Deep Nebula** (#0f3556): Structure and atmosphere only, never text and never a control. It is the body of the drifting nebulae behind the page, the wash behind a diagram, and the base of the blueprint grid.
- **Nebula Line** (#2f5379): The graph-paper rule. Drawn at 1px on a 40px pitch and radially masked so the grid dissolves toward the edges of its container rather than ending at a hard boundary.
- **On Nebula** (#e8f0f8): The cool near-white reserved for text that sits on a nebula-backed surface, where Warm Chalk would read muddy.

### Neutral
- **Night Ground** (#17140f): The page. A brown-black rather than a blue-black; it is the warmth of this value that keeps the system from reading as a generic dark theme.
- **Surface Raised** (#1f1b15): The one step up from the ground. Input fields sit on it. It is a tonal step, not a card colour; it never receives a shadow.
- **Warm Chalk** (#ede7db): Primary text. A warm off-white that behaves like chalk on a dark board rather than white on black.
- **Chalk Dim** (#a89e90): Secondary text, section eyebrows, navigation links at rest, and every caption under a number. Roughly 55% of the way from ground to Warm Chalk, which is enough separation to read as a second level without becoming grey noise.
- **Hairline** (#2f2921): Divider rules inside quiet regions.
- **Hairline Strong** (#75695b): The drawn line. It is the stroke of every wire in every diagram and the border of every input and unlit node. This is the pencil.

### Named Rules

**The Starlight Means Live Rule.** Starlight is state, never decoration. If an element is a link, a control, a focused field, an active node or a travelling pulse, it may be Starlight. If it is a surface, a heading, a rule or a caption, it may not. The accent's scarcity is what makes a lit node read as ignition rather than as styling.

**The Warm Ground Rule.** Every dark value in the system steps warm (#17140f, #1f1b15, #2f2921). The only cool values are Deep Nebula behind the page and Starlight on top of it. A new dark surface that is neutral or blue-shifted breaks the world, because the warmth is what distinguishes ink from screen.

**The Nebula Stays Behind Rule.** Deep Nebula and Nebula Line never carry text, never fill a control and never sit above content in the stacking order. They are sky and graph paper. On Nebula exists only for the rare case where a label must sit on a nebula-washed panel.

## Typography

**Display Font:** IBM Plex Serif (with Georgia, Times New Roman, serif)
**Body Font:** IBM Plex Sans (with Helvetica Neue, Helvetica, Arial, sans-serif)
**Label / Mono Font:** IBM Plex Mono (with ui-monospace, Menlo, monospace)

IBM Plex Sans is self-hosted as a variable woff2; IBM Plex Serif ships as three static weights (400, 500, 600) and IBM Plex Mono as two (400, 500). All preloaded, latin subset, 112KB for the family set.

Replaced Newsreader, Geist and Geist Mono on 30 September 2026, at the user's choice, after five pairings were rendered on the real ground and compared. That trio is the default pairing of a great deal of generated work, and on a practice selling independent judgement it read as a template.

Plex is one superfamily, so the serif, sans and mono share skeletons: that is why the system holds at 12px and 56px alike, and why a mono label beside a sans caption beside a serif heading reads as one voice in three registers rather than three fonts. Its origin is an engineering company rather than a design trend, which suits a practice selling technical judgement. The known trade is that Plex is recognisable; some readers will clock it.

**Character:** One engineering superfamily in three registers: the serif talks, the sans explains, the mono counts. IBM Plex Serif is set at 500 with -0.01em tightening: sturdy, slab-leaning, authoritative without turning into a display face, and it never appears below headline size. The pairing reads as a written document rather than a product page, which is the point: the reader is being handed an argument, not a feature list.

### Hierarchy
- **Display** (Newsreader 500, 56px / 60px, -0.01em): The name at the top of the page. One instance. Drops to 32px / 38px on phone.
- **Headline** (Newsreader 500, 40px / 46px, -0.01em): Section headings. Drops to 28px / 34px on phone.
- **Numeral** (Geist Mono 500, 48px / 56px, -0.01em, tabular lining): The five counters in the numbers strip, animated as odometers. Drops to 36px / 44px on phone. Digits are tabular so the strip does not jitter while counting.
- **Lead** (Geist 400, 17px / 26px): The three hero routes. One step above body, used only where a line must be read before the body is.
- **Body** (Geist 400, 16px / 26px, tabular lining): Everything else. Tabular figures are set globally on `body`, so an inline number inside a sentence stays aligned with the strip above it.
- **Label** (Geist 500, 14px / 22px): Navigation links, form labels, footer links.
- **Tag** (Geist Mono 500, 12px / 16px, +0.02em): Section eyebrows and the bordered capsules that name a node's role in a diagram ("Product", "Edge", "Upstream").

### Named Rules

**The Three Voices Rule.** IBM Plex Serif speaks, IBM Plex Sans explains, IBM Plex Mono measures. A sentence never appears in the mono, and a figure that carries weight never appears in the sans. Where a number sits inside prose, the body's tabular figures already handle it; do not reach for the mono mid-sentence.

**The Serif Stays Large Rule.** IBM Plex Serif appears at headline size or above, and nowhere else. It has no body, label or caption role. The moment the serif is used small, the document register collapses into decoration.

## Layout

The page is a single scroll with a fixed 72px header on desktop and a 64px header on phone, both with a blurred translucent ground that only engages once the page has scrolled.

**Gutters** are 80px on desktop and 24px on phone, applied once on the section wrapper. **Section rhythm** is 80 to 96px of top padding on desktop and 36 to 72px on phone. **Internal spacing** runs a fine scale: 4, 8, 12, 16, 24 and 28px, with 64 and 80px reserved for the gaps between major column groups.

**One responsive tree.** The page is a single DOM at every width. The layer that changes is CSS: a mobile-first base plus one `@media (min-width: 1000px)` block that re-lays the same markup as a desktop composition. There is no second tree, no template clone and no viewport switch in markup.

**Type is fixed, the layout reflows.** Sizes come from tokens and step once at 1000px; they do not scale with the viewport. The container is 1440px with 80px gutters on desktop (a 1280px content box, which is the width the composition was designed at) and 24px gutters below 1000px. Nothing is `zoom`-scaled.

**No fixed section heights.** Every section is sized by its content. Where the desktop composition needs a held panel, it uses `position: sticky` against a taller sibling column rather than a fixed scroll length: the Systems diagram pins beside its entry list, and the whole section grows with the entries.

**Section rhythm** is `--section-gap` between sections (96px desktop, 72px phone) and `scroll-margin-top` of nav height plus 24px so in-page anchors never land under the fixed header.

**Reveal behaviour:** sections carry an `.inview` state that gates their animations, so a diagram does not draw until its section is on screen and paused animations do not burn frames above and below the fold.

### Named Rules

**The One Tree Rule.** There is one DOM. A difference between desktop and phone is expressed in CSS, never by duplicating markup. If a change seems to need a second copy of an element, the layout is wrong, not the rule.

**The Content Sizes It Rule.** Nothing carries a fixed height that content should determine. A panel that must hold while its neighbour scrolls uses `position: sticky` against a taller sibling, so the section grows with its content instead of being told how tall to be.

## Elevation & Depth

This system has no conventional elevation. Surfaces are flat and separated tonally: ground (#17140f) to raised surface (#1f1b15) is the entire vertical range, and it is used for exactly one thing, input fields. Everything else sits on the ground and is bounded by a 1px line rather than lifted off it.

Depth instead comes from **emitted light**. A node that goes live gains an 18px Starlight halo. The primary button carries a 40px downward Starlight bloom at rest and a 54px one on hover. There is a single conventional drop shadow in the system (`0 40px 80px -50px rgba(0,0,0,.9)`), used where an element genuinely must lift off the page rather than glow.

Atmospheric depth is carried by the sky layer behind everything: a vertical gradient from #0b0d14 at the top of the page to #17140f by 5200px, six drifting nebula ellipses on 40 to 92 second loops, a star field, and a 96px grain tile over the whole thing.

### Shadow Vocabulary
- **Node ignition** (`box-shadow: 0 0 18px color-mix(in srgb, var(--accent) 60%, transparent)`): A diagram node that has gone live.
- **Node ignition, small** (`box-shadow: 0 0 12px color-mix(in srgb, var(--accent) 50%, transparent)`): Timeline markers and smaller nodes.
- **Button bloom** (`box-shadow: 0 14px 40px -12px color-mix(in srgb, var(--accent) 65%, transparent)`): The primary button at rest.
- **Button bloom, hover** (`box-shadow: 0 22px 54px -12px color-mix(in srgb, var(--accent) 85%, transparent)`): Paired with a 2px lift.
- **Focus ring** (`box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 35%, transparent)`): Input focus, paired with a Starlight border.
- **Deep ambient** (`box-shadow: 0 40px 80px -50px rgba(0,0,0,.9)`): The one true shadow.

### Named Rules

**The Light, Not Shadow Rule.** Elevation is expressed as light emitted in Starlight, never as a grey drop shadow. A glow means the element is live or active. A dark shadow is a foreign body in this system, and the single deep ambient shadow that exists is the exception that should not be multiplied.

## Shapes

The form language is near-square and drawn. **Every corner in the system is either 3px or a full circle (50%), with nothing in between**: buttons, inputs, tags and panels all take 3px; only avatars and round markers take 50%.

Lines are the primary form-giving device. Borders are 1px throughout, in Hairline Strong (#75695b) where a line is meant to read as drawn, and in a `color-mix` of Warm Chalk at 10 to 14% where a rule is meant to divide quietly. Diagram wires are 1px strokes in the same Hairline Strong; pulses are 1.5px in Starlight.

Diagram nodes are 9px squares with a 1px border, growing to 13px for a primary node. They are squares, not dots, which is what keeps the diagrams reading as schematics rather than as network graphs.

Grids are drawn at a 40px pitch in Nebula Line at 40 to 45% opacity and always radially masked, so the graph paper dissolves toward the edges of its container instead of terminating at a boundary.

### Named Rules

**The 3px Rule.** 3px or a circle. A 6px, 8px or 12px corner does not exist in this system, and a rounded-lg reflex will read as another product immediately.

**The Grid Always Fades Rule.** Blueprint grids are never shown with a hard edge. Every grid carries a radial mask that takes it to transparent well before its container ends.

## Components

The component register is deliberately quiet and technical: hairline strokes, near-square corners, monospace labels, nothing soft. Controls recede so that the diagrams and the evidence lead.

### Buttons
- **Shape:** Near-square (3px radius), 48px tall, 1px transparent border reserving the space a border would take.
- **Primary:** Starlight fill with Night Ground text (#8db4dc on #17140f), 24px horizontal padding, Geist 500 at 15px with -0.005em. Carries a Starlight bloom at rest.
- **Hover:** Steps to Starlight Bright, lifts 2px, and the bloom deepens. All properties transition together over 0.35s on the house easing.
- **Compact:** In the header the same button drops to 40px tall with 20px padding. On phone it goes full width at 48px with 20px padding.
- There is no secondary or ghost button in the system. Where a second action exists, it is a text link with a sliding Starlight underline, not a button.

### Inputs / Fields
- **Style:** Surface Raised fill, 1px Hairline Strong border, 3px radius, 44px tall for single-line and 120px for the textarea, 12px horizontal padding.
- **Focus:** Border becomes Starlight and a 2px 35%-opacity Starlight ring appears outside it, over 0.3s. Native outline is suppressed and replaced, not removed.
- **Phone:** Font size steps from 15px to 16px, which is deliberate: it prevents iOS from zooming the viewport on focus.
- **Labels:** Geist 500 at 14px / 22px, sitting above the field.

### Tags
- **Style:** 22px capsule, 3px radius, 1px Starlight border, transparent fill, Starlight text in Geist Mono 12px with +0.02em.
- **Role:** Naming a node's function inside a diagram ("Product", "Edge", "Hot path", "Upstream") and marking a constraint. Self-aligned to flex-start so it never stretches to its container.

### Navigation
- **Desktop:** 72px fixed bar, 80px side padding, links in Geist 500 14px at Chalk Dim. Each link carries a Starlight hairline 6px below it that scales in from the left over 0.35s on hover while the label steps up to Warm Chalk. The bar's translucent blurred ground and its border only appear once `.scrolled` is set.
- **Phone:** 64px bar with the blur always on, and a disclosure menu whose items are 17px, full width, divided by 1px Hairline rules.

### Signature: the blueprint diagram
The defining component. Each of the seven system areas is drawn as an SVG schematic: 9px square nodes in Night Ground with Hairline Strong borders, connected by 1px wires in the same colour, over a masked 40px blueprint grid. On entering view the wires draw themselves using a `stroke-dasharray` sweep over 1.1s, nodes fade in, and then a 1.5px Starlight pulse (`stroke-dasharray: 8 92`) travels each wire on a 2.4 to 3.2s linear loop while live nodes ignite with an 18px halo. Every node is labelled with a Tag above its name. Animations are gated on the section's `.inview` state and paused otherwise.

### Signature: the odometer counters
Five figures in the numbers strip. Each digit is a 56px clipped window (44px on phone) holding a column of 0 to 9 in Geist Mono, translated upward to land on its target, with a glow pass at 1.9s. Tabular figures keep the strip from reflowing mid-count, and the window height is locked to the numeral line height so the roll never shifts the baseline. Each figure carries a Chalk Dim caption beneath it that qualifies it.

### Signature: the timeline
A 340px horizontal ruler running 2011 to 2026, drawn as a 1px track in Warm Chalk at 12% with a 30px band of ticks beneath it. On reveal the ruler fills: a Starlight line with a 12px glow scales in from the left over 2.6s while the tick band is uncovered by a matching `clip-path` sweep on the same curve, so the measure and its graduations arrive together. Chapters are 210px blocks alternating above and below the line, each fading and rising in over 0.9s, headed by a year in Geist Mono 12px Starlight. The final chapter is closed by a hand-drawn Starlight check mark (1.5px, round caps) that draws itself over 0.7s once the fill has finished.

### Named Rules

**The Draw Then Flow Rule.** Diagram motion happens in two beats and one order: the structure draws itself first, then light moves through it. A pulse that runs before its wire exists, or a wire that appears fully formed, breaks the conceit that the page is being authored in front of the reader.

**The Gated Animation Rule.** Every animation is gated on its section's `.inview` state and every motion path has a `prefers-reduced-motion` branch. A new animated element inherits both, or it is not finished.

## Do's and Don'ts

### Do:
- **Do** keep every new dark value warm. Ground #17140f, raised #1f1b15, hairline #2f2921. Cool darks belong to Deep Nebula alone.
- **Do** reserve Starlight for state: links, controls, focus, live nodes, travelling pulses. Its scarcity is what makes it read as ignition.
- **Do** use 3px or 50%. Nothing between.
- **Do** draw with 1px lines. Hairline Strong (#75695b) where the line should read as drawn; Warm Chalk at 10 to 14% where it should divide quietly.
- **Do** set figures in IBM Plex Mono with tabular lining numerals whenever they carry weight, and let the body's global tabular figures handle numbers inside sentences.
- **Do** mask every blueprint grid radially so it dissolves rather than ends.
- **Do** express every desktop and phone difference in CSS on the one tree, and verify at both 1440px and 390px.
- **Do** reach for tokens in `tokens.css` rather than literals; the stylesheet carries no raw hex and no raw font size.
- **Do** give every new animation an `.inview` gate and a `prefers-reduced-motion` branch.
- **Do** replace native focus outlines rather than remove them: Starlight border plus a 2px 35% ring, as the inputs already do.

### Don't:
- **Don't** introduce a drop shadow. Elevation in this system is emitted light, and the one deep ambient shadow that exists is not a precedent.
- **Don't** put text, a control or a fill in Deep Nebula or Nebula Line. They are sky and graph paper, and they stay behind the content.
- **Don't** set IBM Plex Serif below headline size. It has no body, label or caption role.
- **Don't** set a sentence in IBM Plex Mono. The mono measures; it does not narrate.
- **Don't** add a rounded corner between 3px and a circle, or a soft-filled card, or a glassy panel. Surfaces are flat, bounded by a line, and sit on the ground.
- **Don't** drift toward crypto or web3 visual language: neon gradients, glitch treatments, hexagon motifs, pumped saturation. The readers include compliance officers and fund partners.
- **Don't** drift toward terminal or hacker language: monospace as atmosphere, phosphor green, scanlines, ASCII. The mono is for numbers and labels only.
- **Don't** drift toward corporate consultancy language: stock photography, pill buttons, testimonial carousels, logo walls. The page carries no logos and no testimonials by design.
- **Don't** let a pulse animate before its wire has drawn.
- **Don't** add a second accent colour. The system has one, and one is the argument.
