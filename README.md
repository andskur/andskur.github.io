# andskur.com

The one-page site for the independent practice of Andrew Skurlatov: fractional
CTO, technical due diligence, and architecture or launch reviews.

Static HTML, CSS and JavaScript. No framework, no build step, no package
manager, no dependencies. Four files do the whole job.

Live at **https://andskur.com**, served by GitHub Pages. The custom domain is
set by `site/CNAME`, which has to stay in `site/` because publishing replaces
the whole `gh-pages` branch.

## Running it

```bash
cd site && python3 -m http.server 8080
```

Open http://localhost:8080. That is the entire toolchain. Paths are absolute
(`/app.css`, `/assets/…`) because this is a user site served from the domain
root, so opening `index.html` as a file will not work.

## Deploying

GitHub Pages publishes the **`gh-pages` branch root**. Source lives on
`rebuild`. The `main` branch still holds a retired Hugo project.

```bash
python3 tools/stamp.py        # always, see below
git add -A && git commit && git push origin rebuild

git worktree add -f /tmp/ghp gh-pages
cd /tmp/ghp && git rm -rq . && cp -R ../path/to/site/. .
git add -A && git commit -m "Publish: ..." && git push origin gh-pages
cd - && git worktree remove /tmp/ghp --force
```

**`tools/stamp.py` is not optional.** Pages serves assets with a ten-minute
cache, so without a content hash in the asset links a browser can pair the new
`index.html` with the old `app.js`. That shipped a silently broken contact form
once: the stale script looked for a selector the new markup had renamed, bound
nothing, and the form posted to a third-party page instead of confirming in
place.

When checking a deploy, wait for a Pages build whose **commit matches the one
you pushed**. For a minute afterwards the previous build is still the latest and
still reads `built`.

## What is in here

```
site/
  index.html     the whole page, one DOM for every width
  tokens.css     every design value: 104 tokens
  app.css        mobile-first base, then one min-width:1000px layer
  app.js         reveal, odometers, diagrams, menu, hero exit, Calendly, form
  assets/        marks, portrait, and the self-hosted IBM Plex family
tools/stamp.py   writes a content hash into the asset links
```

Plus four documents, each with a different job:

| | |
|---|---|
| **[AGENTS.md](AGENTS.md)** | The working notes, including the failure modes this codebase keeps producing. Written for an AI agent, useful to anyone. |
| **[DESIGN.md](DESIGN.md)** | The design system: palette, type, spacing, and the named rules that keep it coherent. |
| **[PRODUCT.md](PRODUCT.md)** | Who the page is for, the three buyer lanes, and what each must and must not see. |
| **[audit/copy-notes.md](audit/copy-notes.md)** | Where the words come from, and the factual conflicts still open. |

## How it is built

The page was originally a design-canvas export: three separate DOM trees, one
for desktop and two for phone, drawn at fixed 1440 and 390 pixel sizes and
scaled to fit with CSS `zoom`, with section heights hard-coded in pixels. It
looked right at exactly two widths and was unmaintainable at every other.

It was rebuilt in September 2026 as a single responsive page:

- **One DOM at every width.** Desktop and phone differ in CSS alone.
- **Fixed type, fluid layout.** Sizes step once, at 1000px. Nothing scales with
  the viewport.
- **No fixed section heights.** Sections are sized by their content. Where the
  desktop composition needs a panel to hold while its neighbour scrolls, it uses
  sticky positioning against a taller sibling.
- **Every design value in `tokens.css`.** No colour, size, radius or duration is
  written twice.

268KB of single-file export became 63KB of markup, 72KB of CSS and
38KB of JavaScript, with a design system you can actually change in
one place.

### The look

Dark, but warm: the ground is a brown-black rather than the usual neutral
charcoal, and the only cold things on the page are the deep navy sky behind it
and a single pale blue that marks whatever is live. Engineering schematics draw
themselves over blueprint grids. Corners are 3px or nothing, lines are one
pixel, and figures are set in a monospace so columns of numbers line up the way
they would in a report.

Type is the IBM Plex superfamily, self-hosted: the serif talks, the sans
explains, the mono counts. One family in three registers, from an engineering
company rather than a design trend.

`DESIGN.md` has the whole thing, including the rules that keep it honest.

## Content

**The words are not editable here.** Every number, price, client name and case
reference on this page comes from a separate record, the proof register, which
is the single source for anything public under Andrew's name. A conflict between
the page and the register gets reported, not quietly fixed.

Practical version: change layout, hierarchy, typography and motion freely.
Leave copy alone.

## Third-party pieces

Two, both deliberately quiet:

- **Calendly** in the contact panel, loaded only when the contact section comes
  within reach. Someone who never scrolls that far makes no third-party request
  and receives no cookie. The readers include compliance officers at funds and
  licensed entities, so this is a design decision rather than a performance one.
- **Formspree** for the contact form, using its plain form action so it works
  with JavaScript disabled, with a small handler on top that confirms in place
  instead of bouncing the visitor to someone else's thank-you page.

## Known issues

- The wordmark SVGs are outlined paths drawn in the previous serif, so the
  lockup does not match the page's type. Regenerating them is a small job.
- Two factual errors are live in the timeline, recorded in `audit/copy-notes.md`
  along with three smaller conflicts.
- The Formspree endpoint has no domain restriction, and its free tier allows 50
  submissions a month.
