# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Scope and Constraints

**Scope: design only.** Impeccable does not change, check or audit copy, numbers, prices or names; copy is checked separately with `/andskur-check`. Leave all text on the page exactly as it is.

**Constraints:** desktop and phone carry the same content in the same order; the footer stays as built; no em dashes in anything Impeccable writes.

Technical constraints on the surface itself:

- Single-page static site, no backend, no analytics, no CMS.
- The page is **one responsive tree** (`site/index.html`) with its tokens in `site/tokens.css`, layout in `site/app.css` and behaviour in `site/app.js`. Desktop and phone differences are CSS only. Rebuilt from the canvas export on 29 September 2026; the original is kept at `site/index.canvas.html.bak`.
- Scheduling is live: Calendly at `https://calendly.com/and-skur/30min`, embedded in the contact panel and loaded only on click. Every "Book a call" CTA still resolves to the contact section, where the form and the booking panel sit side by side.
- Deploy is unresolved (see `## Stack`). Nothing currently publishes to `andskur.com`.
- Not on the site yet, and to be added under Offers or as a fifth navigation item when they exist: the public DD framework download and the redacted DD sample. **Do not add a separate proof page.**

`brand-spine.md` in the `andskur-core` plugin, under "andskur.com structure", is the built spec for this page: first screen, numbers strip, offers selector, how an engagement runs, seven systems areas, background, contact, footer, and what is deliberately left off. Read it before changing any section.

## Stack

Hand-authored static, confirmed by the user as the going-forward choice: `site/index.html` with `tokens.css`, `app.css` and `app.js` alongside it, self-hosted fonts and SVG/raster assets under `site/assets/`, no build step and no framework. Published via GitHub Pages from the `andskur.github.io` repository.

The current file is the export of the Claude Design canvas "andskur.com build", which Andrew built on 25 and 26 September 2026 (commit `46686f6`).

Open technical gap: the canonical URL is `https://andskur.com/`, but the repository has no `CNAME` file and no deploy workflow (the Hugo workflow was removed in `f4c40d1`). Nothing publishes. Publishing is unresolved, not decided against.

## Users

Three buyer lanes, one identity, never three personas. Sales effort is not equal: founders and funds first, banks through partners.

- **Founders, including protocol teams.** Trigger: a raise closed, a CTO gap, pre-TGE, pre-listing, a regulatory build, stalled delivery. They need senior technical ownership without a full-time hire. They must not be shown an 80-page DD methodology.
- **Funds and acquirers.** Trigger: a term sheet, exclusivity, an announced acquisition, a licence or listing process. They need the memo format, the red-flag list, the turnaround, and a sample they can inspect before a call. They must not be shown token-launch war stories that read as promotion.
- **Banks, licensed entities and enterprises.** Trigger: a MiCA or DORA evidence gap, a GENIUS build, a custody or L2 choice, a resilience question on a regulated stack. Reached through partners, not direct. They must not be shown anything that looks like a token accelerator.

The lanes are buyer types, not domains. A fund buying a payments company and a fund buying a logistics platform enter the same lane and get the same memo. All three readers are senior, technical and time-poor, and judge credibility in seconds.

Each lane has its own proof order, set in `career-and-proof.md` under "Ordering for the practice site and profiles". Where one page serves every lane, as this one does, the first screen leads with the offer and each lane's route opens with that lane's first row.

## Product Purpose

`andskur` is the independent practice of Andrew Skurlatov, operating from the Netherlands. It sells three SKUs: fractional CTO at one or two days a week, technical due diligence for funds and acquirers, and a two-week architecture or launch review.

The site is the practice's only surface. It has one action: "Book a call". Success is a qualified enquiry that names what needs doing. The site does not educate, rank or build an audience.

## Positioning

The differentiator is operator evidence, not advisory credentials: Andrew has built systems of the kind each buyer is evaluating. The engagements are also sold on shape, not just expertise: fixed fee, fixed date, named artefacts, written terms before the start. Due diligence is explicitly not a penetration test and not a formal audit. Review work is walled from implementation.

The practice is not limited to one domain. The proof is mostly regulated crypto and payments infrastructure and appears as proof, never as the boundary of the offer.

For design, the consequence is that the systems section carries the credibility load and must read as evidence rather than as a portfolio, and that nothing on the page may frame the offer as industry-specific.

## Operating Context

Every engagement runs four steps: a 30-minute first call to agree what needs doing and what it has to achieve; written terms fixing the fee, the named artefacts, the dates and the access required before the start; the work; the deliverable and a debrief. The page renders these as four steps on a drawn track.

The three offers sit in one selector that steps through them as the page scrolls. Each shows the buyer, the trigger, the work, the shape and the price.

Contact has two doors. The form is one field, "What needs doing", which opens the visitor's email app addressed to Andrew, plus the email address shown. Beside it the blueprint panel offers "Pick a time", which loads the Calendly 30-minute event inline. The calendar opens by itself as the contact section comes within reach, so nobody has to press anything; the button remains for browsers without an IntersectionObserver, and as the no-JavaScript fallback. Calendly's script and cookies load only at that point, so a visitor who never scrolls to contact makes no third-party request.

## Brand Commitments

- Committed assets in `site/assets/`: `as-mark-reversed.svg`, `as-short-reversed.svg`, `as-lockup-reversed.svg`, the favicon set (SVG, 16, 32, 180 Apple touch), `as-avatar-400.png` (OG image), `portrait.webp`.
- Self-hosted typefaces, committed as woff2: **IBM Plex Serif** (serif), **IBM Plex Sans** (sans), **IBM Plex Mono**. Replaced Newsreader / Geist / Geist Mono on 30 September 2026, chosen from five rendered options.
- The footer stays as built: the lockup, the four profiles in a row (LinkedIn, GitHub, X, email), the single practice line and the year. No registration numbers, no availability line, no disclosure line, no conflict statement.
- The Background section carries the portrait, one paragraph and an animated timeline from 2011 to now in ten chapters.
- The Systems section carries seven areas, each with its sentence, a constraint and a diagram. No client is named in any of them.

## Product Principles

1. **Design may change form, never facts.** Layout, hierarchy, typography, motion and structure are Impeccable's to improve. Copy, numbers, prices and names are Andrew's, checked with `/andskur-check`.
2. **Sell the shape, not just the skill.** Fixed fee, fixed date, named artefacts, explicit exclusions. Design should make the shape of an engagement as legible as its price.
3. **One surface, one action.** The page exists to produce a qualified 30-minute call. Anything that does not move a founder, a fund or a banks-via-partners reader toward that call is not earning its place.
4. **Three lanes, one identity.** Each buyer finds their own path quickly, in the proof order set for their lane, without reading the other two. Never three personas.
5. **Restraint is the register.** The audience is senior and technical. Understatement, precision and stated limits read as credibility; decoration that outpaces the evidence reads as sales.

## Accessibility & Inclusion

No product-specific standard has been established. Baseline web accessibility applies as craft. One structural note: the desktop and mobile dual-tree implementation duplicates section IDs, headings and landmarks across both trees, which is a correctness risk for assistive technology and a hazard for any in-page anchor. Any change in this area must account for it.
