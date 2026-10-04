# AGENTS.md

Working notes for an AI agent on this repository. Read this before changing
anything. The second half is the part that matters: this codebase has a
specific history, and it produces a specific family of bugs that are easy to
ship and hard to see.

## What this is

The one-page site for **andskur**, the independent practice of Andrew
Skurlatov: fractional CTO, technical due diligence, and architecture or launch
reviews. Static HTML, CSS and JavaScript. No framework, no build step, no
package manager, no dependencies.

Live at **https://andskur.com** (custom domain, set by `site/CNAME`), and at
`andskur.github.io`, which serves the same build.

## Run it

```bash
cd site && python3 -m http.server 8080
```

Then open http://localhost:8080. Absolute paths (`/app.css`, `/assets/…`) are
correct: this is a user site served from the domain root.

## Deploy it

GitHub Pages serves the **`gh-pages` branch root** (legacy build, not Actions).
Source lives on `rebuild`. `main` still holds the retired Hugo project and is
not used.

```bash
# 1. always stamp first, or a deploy can be half-applied (see Gotchas)
python3 tools/stamp.py

# 2. commit the source
git add -A && git commit && git push origin rebuild

# 3. publish site/ to the gh-pages root
git worktree add -f /tmp/ghp gh-pages
cd /tmp/ghp && git rm -rq . && cp -R /path/to/repo/site/. .
git add -A && git commit -m "Publish: ..." && git push origin gh-pages
cd - && git worktree remove /tmp/ghp --force && git worktree prune
```

**Verifying a deploy:** poll until the latest Pages build is `built` *and its
commit matches the one you just pushed*. Checking status alone is wrong: for a
minute after a push the previous build is still "the latest" and still reads
`built`, so you will measure the old site and believe your change failed.

```bash
gh api repos/andskur/andskur.github.io/pages/builds/latest
```

## The files

| Path | What it is |
|---|---|
| `site/index.html` | The whole page. One DOM for every width. |
| `site/tokens.css` | Every design value. 104 tokens. The only place colours, type, space, form, depth and motion are defined. |
| `site/app.css` | Mobile-first base, then one `@media (min-width: 1000px)` layer. |
| `site/app.js` | Reveal, odometers, diagrams, menu, hero exit, Calendly, the form. |
| `tools/stamp.py` | Writes a content hash into the asset links and the date into `sitemap.xml`. Run before every publish. |
| `site/robots.txt` | Allows everything, assistants included, and points at the sitemap. |
| `site/sitemap.xml` | One URL. The anchors are not URLs and must stay out of it. |
| `DESIGN.md` | The design system, with named rules. `.impeccable/design.json` is its machine-readable sidecar. |
| `PRODUCT.md` | Product and design context, the buyer lanes, and the scope rules. |
| `audit/copy-notes.md` | Copy authority, the proof-register rules, and open factual conflicts. |
| `audit/index.canvas.html.bak` | The original canvas export. The reference for anything that looks lost. |

## Who owns what

**Do not change copy, numbers, prices or names.** Every word on this page comes
from the `andskur-core` plugin, installed at
`~/.claude/plugins/synced/*/andskur-core/`, in this order of precedence:

1. `core-facts.md`: who Andrew is, the entities, the exit terms
2. `voice-and-editorial.md`: voice, and the hard wording rules
3. `career-and-proof.md`: the proof register: the only source of numbers, client names and case references
4. `offer-card.md`: the only source of prices
5. `brand-spine.md`: the spec for *this page*, section by section

A conflict between the site and the register is **reported, never patched**.
Copy is checked with `/andskur-check`; claims enter through `/proof`.

Layout, hierarchy, typography, motion and structure are yours to improve. Words
are not.

**Never in any copy: em dashes.** Also banned: "passionate", "cutting-edge",
"world-class", "seamless", "leverage", "unlock", "empower", "game-changing",
"10x", "20x", "solutions" as a noun, exclamation marks, emoji. Prices are USD.
No client is named on this page, even where the register would permit it.

## How it is built

- **One DOM at every width.** Desktop and phone differ in CSS only.
- **Fixed type, fluid layout.** Sizes step once at 1000px. No `zoom`, no scaling.
- **No fixed section heights.** Where the desktop composition needs a held
  panel it uses `position: sticky` against a taller sibling.
- **Full bleed for the hero and footer**, content centred on a 1440px container
  via `padding-inline: max(--gutter, calc((100vw - --container) / 2 + --gutter))`.
  Anything with a background that stops at the container draws a visible seam on
  wide screens.
- **No raw design values in `app.css`.** No colour hex, no font sizes, no radii.
  If you need a value that does not exist, add a token. The only literals left
  are `#000` inside `mask-image` stops, where it means full opacity rather than
  a colour.

## The history, and the bugs it causes

This page was a **Claude Design canvas export**: three DOM trees (one desktop,
two phone fragments) rendered as a fixed 1440/390 canvas scaled with CSS `zoom`,
with section heights hard-coded in pixels. It was rebuilt into one responsive
tree on 29 September 2026.

The rebuild took the **phone** tree as its base and discarded the desktop tree.
Almost every defect since has come from that one decision. Expect these:

**1. Phone values inherited where desktop needs its own.**
A rule written for the phone tree now applies at every width unless the desktop
layer overrides it. Found this way: the nav kept the phone's permanent blur; the
hero's halo and pool rendered at roughly half size; the in-page scroll offset was
the phone bar's 64px against a 72px desktop bar; the vignette was the phone's.
When something looks subtly wrong on desktop, diff it against
`audit/index.canvas.html.bak`, not against your expectations.

**2. The two phone roots collided when both became `.page`.**
The export styled `.page-home-phone` and `.page-home-phone2` separately, and the
prefix rewrite pointed both at the same element.
- In CSS the later rule silently won. `.night` lost its entire sky gradient this
  way and rendered as a flat fill.
- In JS **both inits run against the same element**, so every listener is bound
  twice. Order-sensitive code breaks: `classList.toggle('menu-open')` fired twice
  per tap, so the mobile menu opened and shut instantly. Toggles that pass an
  explicit boolean are safe. **Guard any new binding**, as `.mbtn` now does with
  `data-wired`.

**3. Desktop-only work that the phone tree never had.**
The timeline's year ruler, ticks, connectors and travelling pulse; the hero light
rig; the contact panel; the rune's handover to the header. All were ported back.
If something looks poorer than the original, it probably lived only in the
desktop tree. Check the backup.

**4. Stale assets.**
GitHub Pages serves `cache-control: max-age=600`. Without a cache-busting stamp a
browser can hold the old `app.js` against the new `index.html` for ten minutes.
That shipped a silently broken contact form once: the old script queried a
selector the new markup had renamed, bound nothing, and the form posted natively
to a third-party page. **Run `tools/stamp.py` before every publish.**

## Verify by measuring

Looking at a screenshot is not verification. Several defects here passed visual
checks and were caught only by measurement. Playwright is available globally
(`/opt/homebrew/lib/node_modules/playwright`), with Chromium installed.

Useful checks, all of which have caught real bugs:

- **Diff computed styles against the original.** Serve
  `audit/index.canvas.html.bak` on a second port and compare the same classes at
  1440. This found the dead sky gradient.
- **Watch the class attribute**, not the rendering. A `MutationObserver` on
  `.page` found the double-bound menu toggle: the class was applied correctly,
  then removed a millisecond later.
- **Ask the widget**, do not guess. Calendly posts the height it needs; a fixed
  panel height was scrolling because nobody asked.
- **Check from a cold cache.** Playwright always starts cold, which is why it
  passed while the real browser failed.
- **Count third-party requests on load.** It must be zero before the contact
  section is reached.

## Third-party integrations

**Calendly** (`calendly.com/and-skur/30min`), in the contact panel.
- Loads **only** when the contact section comes within 600px, via
  `IntersectionObserver`. A visitor who never scrolls there makes no third-party
  request and gets no cookie. This is deliberate: the readers include compliance
  officers at funds and licensed entities. Do not move it to page load.
- The button is a real link, so it works with no JavaScript.
- Calendly injects its iframe as a **direct child** of the parent element. There
  is no `.calendly-inline-widget` wrapper, contrary to their docs, so the iframe
  is what you size.
- It posts `calendly.page_height` with the height it needs and
  `calendly.event_type_viewed` when its content is up. The panel takes both.
- The white flash during load belongs to Calendly's own document inside the
  frame. No stylesheet of ours can reach it; we cover the frame instead.
- Themed from our tokens via `background_color`, `text_color`, `primary_color`.
  The green availability circles and the "Powered by Calendly" ribbon need their
  paid tier.

**Formspree** (`formspree.io/f/mnpnrwgw`), the contact form.
- Their plain `action`/`method`, so it posts without JavaScript, plus our own
  handler for the in-page confirmation. **Not** `@formspree/ajax`: it loads a
  script from unpkg on every page view and would break the zero-third-party
  rule above for no gain.
- `_next` returns a native post to `?sent=1#contact`, which the script reads on
  load to show the same confirmation. It is an **absolute URL** and must change
  with the domain.
- Free tier is 50 submissions a month. The endpoint has no domain restriction,
  so anyone can post to it.
- Honeypot is `_gotcha`, which Formspree also filters server-side.

## Open items

- `site/CNAME` holds the custom domain. It **must** live in `site/`: the deploy
  wipes the `gh-pages` branch, so a `CNAME` written by GitHub's settings page
  would be removed on the next publish and the domain would break.
- The lockup SVGs (`as-lockup-reversed.svg`) are outlined paths drawn in the
  **old** serif. The page is IBM Plex; the wordmark is not.
- Five factual conflicts between the page and the proof register are recorded in
  `audit/copy-notes.md`. Two are live and wrong: the 2021 timeline chapter's role
  and the Lomonosov naming.
- `.cal` and `.calgrid` in `app.css` are orphaned, left from the canvas's dashed
  calendar placeholder.
- **An entrance that fades from exactly `opacity: 0` destroys LCP.** Chrome
  does not accept an element first painted at zero opacity as a
  largest-contentful-paint candidate, and does not reconsider it later. The
  hero text faded in, so it never qualified at any width: above 1000px the
  metric fell through to the header button, and below 1000px that button is
  `display: none`, so PageSpeed returned NO_LCP. The threshold is **zero, not
  low**: measured on this page, `opacity: 0` loses the `h1` to a link on
  phones and an image on desktop, while `opacity: .05` keeps the `h1` as the
  candidate at about 180ms. The hero fades from `.05`, which is invisible on
  this ground and costs nothing. Never start an LCP candidate at a flat 0.
- **The root class is shared, so add to it, never assign.** Both `app.js` and
  the inline fit script in `<head>` used `documentElement.className = ...`, and
  the later one silently erased the earlier. That is what made the hero reveal
  look static: its `js` cue was wiped before the stylesheet could act on it.
  Both use `classList` now, and the root carries `js m-desk as revealed`
  together. Neither `as` nor `m-desk`/`m-phone` is referenced in any stylesheet.
- **Wrapping a heading's words in spans moves its LCP.** Chrome measures text
  LCP from an element's own text nodes, so once every word sits in a `.w` span
  the `h1` is left holding only the spaces and stops being the candidate. The
  word cascade costs exactly that: on phones the metric moves to the supporting
  paragraph and from about 50ms to about 180ms. Both are far inside target, and
  the word opacity makes no difference to it, so do not go hunting there.
- **Prices are deliberately absent from the JSON-LD.** `offer-card.md` is the
  only place prices live and the site is the only copy of them; a third copy in
  structured data would be a fourth thing to keep in step and would contradict
  the page the first time a band moved. The markup carries the entity and the
  service catalogue, nothing priced. `knowsAbout` is absent for the same kind of
  reason: `brand-spine.md` rejects any positioning that lists domains.
- `aria-label` on a `<span>` does nothing. ARIA does not name a generic
  element, so the attribute is inert and the subtree stays exposed. The five
  counters carried one each and still put 440 single-digit nodes into the
  accessibility tree: a browse-mode reader walked "0123456789...k+requests per
  second". Decoration needs `aria-hidden`, and the real value needs to be real
  text, which is what `.vh` is for.
- Four of the five primary buttons are `<a>`, not `<button>`: the header CTA
  on each width, the hero CTA and the booking panel's "Pick a time". A rule
  written for links reaches all four and a rule written for buttons reaches
  none of them. `.page a:hover` had been repainting them at 1.24:1 this way.
  Check any new link-as-button in hover, focus-visible and active.
- Spacing set only inside the desktop grid leaves phone with none. Three blocks
  ran together this way: the Background portrait against its own eyebrow, the
  timeline against the paragraph's last line, and the booking panel against the
  Send button. When a gap comes from `gap`, `column-gap` or a grid row in the
  `min-width: 1000px` layer, phone needs its own rule.
