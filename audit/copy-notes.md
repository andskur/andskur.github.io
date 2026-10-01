# Copy notes

Moved out of `PRODUCT.md` on 29 September 2026. Impeccable does not act on anything in this file. Copy is checked separately with `/andskur-check`; claims enter the register through `/proof`.

## Content authority

Every word, number, price and name on this site comes from the `andskur-core` plugin: `core-facts.md`, `voice-and-editorial.md`, `career-and-proof.md` (the proof register), `offer-card.md` and `brand-spine.md`, in that order of precedence. Impeccable **must not rewrite copy, numbers, prices or names**. Copy observations go into the critique report as suggestions for Andrew, never into the file. A conflict between the site and the register is reported to Andrew with the file and the line; nothing is patched in either direction.

## Prices

Prices are in USD from 26 September 2026 and live only in `offer-card.md`. The site shows the retainer at $8k to $12k a month for one day and $14k to $20k for two; due diligence "From $10k" with the red-flag, standard and regulated bands; the review at $12k to $25k and the single decision at $4k to $8k. The site shows no floor, no VAT line, no add-on, no minimum term, no on-call line and no margin, recusal or referral line. **A price on the site that differs from the card is a site error; fix the site, not the card.**

## Naming and voice rules

- **No client names on the site.** Seven systems areas, none named. This holds even where the register would permit a name, because the site as built uses each row's Default wording.
- **The business partner is not named anywhere on the site.**
- **Felag** appears only as an engineering studio Andrew co-owns, in the background paragraph and the 2026 timeline chapter, with no disclosure line. Felag is a separate legal entity and the practice never uses "we" to mean Felag. Felag's records, proof and client lists are never read into this project.
- **Gateway.fm is a former employer, not Andrew's company.** Uddug was *acquired by* Gateway.fm in June 2024, never "sold". Never imply Gateway endorses, refers or partners with the practice, and never describe Gateway.fm or Felag as Netherlands-based.
- **Voice**, per `voice-and-editorial.md`: first person singular, plain, results-led, flowing full sentences. Take a position. Say what you saw. Uneven paragraph lengths. No slogans, no headline stacks, no adjective lists, no "not X, but Y", no closing sentence that restates the opening.
- **Never in any copy: em dashes.** Use commas, "to" for ranges, or restructure. The current export is clean; keep it that way. Also banned: "passionate", "cutting-edge", "world-class", "seamless", "leverage", "unlock", "empower", "game-changing", "10x", "20x", "solutions" as a noun, exclamation marks, emojis.
- Dates written in full (1 July 2026). Currency: USD with $ for the practice's prices on this site.
- The spine is a locked 64-character sentence: "Independent CTO and technical due diligence for complex systems." **No domain line follows the spine on any surface.**

## Evidence on Hand

**The proof register in `career-and-proof.md` is the only source of numbers, client names and case references.** Anything not in the register is not proof. Numbers are copied exactly, never rounded or reworded: "140k+", "50 ms", "$1B+", "$10M+", "$100M+", "15+ years", "10+", "20+". New claims enter only through `/proof`.

Rows on this page, as recorded in the register under "andskur.com, as built": the numbers strip runs rows 3, 9, 24, 30 and 32; the seven systems areas run rows 1, 3, 9, 10, 31, 14 (unnamed) and 21 to 24; the timeline draws on the register's Timeline table plus rows 14, 19, 20, 24, 25 and 26.

Standing wording rules that any change to this page must respect:
- Never "MiCA-compliant" or "DORA-compliant". Say "built for MiCA alignment" and state the limits.
- Never present token price, FDV or locked value as a delivery result. $1B+ locked is a point-in-time figure; $140M+ FDV is a launch-day figure; $10M+ and $2M+ are at-launch figures.
- "served", not "sustained", for 140k+ RPS. 50 ms is the average on one request class, not a p99.
- Row 9 reads "I led the department that ran the infrastructure", never "I ran the infrastructure".
- Row 1's "L2BEAT-listed" never appears in a headline, bio line or first sentence, and the L2BEAT link is not on this site.
- Productivity multipliers are BLOCKED as numbers until the method is published.

**Absences that must not be filled by invention:** no testimonials, no client quotes, no client logos, no published case studies, no DD sample, no press, no named references. The live OTC-desk due diligence is BLOCKED and must never surface here in any form.

**Known conflicts between the current export and the register.** All five were resolved with Andrew on 29 September 2026; the resolutions are recorded under each. The site edits are pending his approval of the diffs.

1. The timeline's 2024 chapter reads "Gateway.fm acquires Uddug. I become VP of Platform and Yield." The register has **VP of DLT** from June 2024 and **VP of Platform and Yield** only from October 2025.
2. The timeline's 2021 chapter reads "Joined early; designed the RPC proxy at 140k+ RPS; Head of Backend." The register has Andrew joining June 2021 as **Go Team Lead**, Head of Backend in **2023**, and the 140k+ RPS figure in **2022**.
3. Desktop and phone copy diverge, against the stated parity rule. Examples: the hero routes ("Funds and acquirers ... ten business days" against "Funds ... ten days"; "a two-week architecture or launch review" against "a two-week review"); the numbers-strip captions ("locked in staking on infrastructure my department ran" against "locked in staking my department ran"); the offer cards swap eyebrow and title order; the engagement steps reorder the duration chip.
4. Andrew named DeepNode, Snark.art and Arsnl.art as clients who may be named. The register supports DeepNode (row 14, CLEAR) and Arsnl.art (row 23, CLEAR, as an Uddug build rather than a client of the practice). **Snark.art has no register row**; it appears in the Timeline table as a 2019 to 2020 employment, not an engagement. Naming it externally would be a claim outside the register.
5. The site says "studying at Moscow State University"; `core-facts.md` has "studied Geography at Lomonosov Moscow State University until 2012", with no degree claim.

## Resolutions, 29 September 2026

1. **2024 chapter.** Corrected to VP of DLT; VP of Platform and Yield carried into the 2025 chapter.
   - `Gateway.fm acquires Uddug. I become VP of DLT, running ~25 people across two departments.`
   - 2025 chapter gains: `At Gateway.fm, VP of Platform and Yield from October 2025.`
2. **2021 chapter.** Corrected in place, one chapter retained.
   - `Joined June 2021 as Go Team Lead; designed the RPC proxy, later at 140k+ RPS; Head of Backend from 2023.`
3. **Desktop and phone parity.** Text parity applied; the two order swaps stay as they are.
   - Phone hero: `Funds:` becomes `Funds and acquirers:`; `ten days` becomes `ten business days`; `a two-week review` becomes `a two-week architecture or launch review`.
   - Phone numbers strip: `requests per second, in production` becomes `requests per second, the RPC proxy in production`; `locked in staking my department ran` becomes `locked in staking on infrastructure my department ran`.
   - The offer-card header order (buyer before title on phone) and the engagement-step order (label before illustration on phone) are layout adaptations to a narrow column, not content-order differences. The desktop offer title lives in the tab strip, which the phone does not have; the phone step order keeps the step text above its 110px illustration. Andrew's decision, 29 September 2026: keep both.
4. **Snark.art.** A register row is to be added through `/proof`. Draft below; Andrew decides the permission level and pastes it.
5. **Moscow State University.** `Lomonosov` added; the subject is not added, and the line still claims no degree.
   - `First websites, built while studying at Lomonosov Moscow State University.`

## Draft register row for /proof, pending Andrew

Snark.art appears in the Timeline table as Jul 2019 to Jul 2020, technical lead, team of 5, which is employment rather than a client engagement. Andrew described it as a customer; the row below follows the Timeline table, and the description needs his correction if the Timeline entry understates the relationship. New rows start at CHECK unless a public artefact is attached.

| # | Item | Tag | Evidence | Permission | Responsibility | Default wording, use now | Named wording, only at CLEAR | Public artefact | Do not say |
|---|---|---|---|---|---|---|---|---|---|
| 33 | Snark.art NFT launch platform | REAL | STATED | CHECK (employment, not a practice engagement; client-side consent not confirmed) | Technical lead, team of 5, on the launch platform for established artists | "I was technical lead on an NFT launch platform for established artists, running a team of five." | "... at Snark.art." | To confirm; Snark.art release pages carry the platform but not Andrew's role | Sales, raise or volume figures; the work as an Uddug or practice engagement, it was employment; folding it into the $100M+ aggregate in row 24, which is Uddug era and the sum of rows 21 to 23; any artist named without that artist's own row |

## Applied to the live page, 30 September 2026

The 2024 timeline chapter, at Andrew's direction. The chapter title already
reads "Uddug acquired", so the description was repeating it and naming
Gateway a second time.

- was: `Gateway.fm acquires Uddug. I become VP of Platform and Yield, leading two departments, ~25 people.`
- now: `Uddug has been acquired. I become VP of DLT, running ~25 people across two departments.`

This also lands resolution 1 above: the register has VP of DLT from June 2024
and VP of Platform and Yield only from October 2025. The companion half of
that resolution, carrying the October 2025 promotion into the 2025 chapter,
is NOT applied: the agreed wording named Gateway, which this edit removes.
Open for Andrew.

Gateway.fm still appears twice on the page and was left alone:
- the Background paragraph, "Gateway.fm acquired it in 2024 and I ran two departments there";
- the 2021 timeline chapter, whose title is "Gateway.fm".

## Structure change, 1 October 2026

The standalone email link under the contact form was removed at Andrew's
direction. It duplicated the footer's Email column, and with Calendly now
in the panel the section had three routes to the same person.

This departs from `brand-spine.md`, which records the contact section as
"One field ... and the email address". The address is still on the page,
in the footer and in the form's failure message. Reported, not patched.

## Structure change, 1 October 2026: the phone first screen

Acting on outside feedback that the mark delayed the offer and pushed the
call to action below the fold. Measured first: the mark took 26 to 33 per
cent of the viewport, the headline did not begin until 370px, and the
button sat below the fold on every common size except the largest.

- The mark is 140px on phone, down from 220. The headline now begins at 266.
- The hero's rhythm is tighter. Nothing is reordered: the three lane routes
  stay above the button, because they are the qualifying step and a fund
  partner should see "ten business days" before booking.
- The bar carries a standing "Book a call" on phone. It previously existed
  only inside the disclosure menu, so the first screen offered no way to act.
- To make room, the phone bar shows the mark alone rather than the full
  lockup. The hero's own eyebrow reads "Andrew Skurlatov" directly beneath
  it. `brand-spine.md` does not specify the bar's treatment at phone width;
  reported, not patched.

Not solved: 375x667 (iPhone SE and 8) still ends with the button 121px below
the fold. Reaching it would mean a mark small enough to lose the first
screen's character for everyone else.

## Structure change: the system areas' spec block (1 October 2026)

`.kv` under `.entry` became a two-column table. Area 1, Card programme
chains, is the first to carry the full set, at Andrew's instruction:

| Row | Value |
|---|---|
| Role | Architect |
| Client | **Wirex**, linking to `https://www.wirexapp.com` |
| Constraint | A live card programme on an L2 chain. |

Amended the same day, at Andrew's instruction: the link moved from a separate
Evidence row to the client's own name, and the L2BEAT row went. The URL
resolves; the bare host redirects to the `www` form, which is what the page
carries.

De-duplication in the same change, approved in the instruction: "built for
MiCA alignment" appeared three times in this one area, in the paragraph, in
the Constraint row and in the diagram's settlement caption. The paragraph is
register wording and was not touched. The other two dropped the phrase; the
caption also returned to the one-word form every other caption in that
diagram uses.

The remaining six areas keep the single Constraint row until Andrew supplies
their role, client and link material.

### Conflicts raised by this change, for Andrew to decide

Reported, not patched. Both are live on the page now.

1. **"Role: Architect" is not what row 1 records.** The register's
   Responsibility column for row 1 reads "Led the department that delivered
   it end to end as VP of DLT". The register does use "architected" where it
   applies, on row 11 for the oracles, which makes "Architect" on row 1 a
   different claim from the one on file rather than a shorter wording of it.
   Either the register's row 1 needs amending through `/proof`, or the row
   should read the title the register holds.

2. **Naming Wirex and linking L2BEAT reverses two recorded decisions.**
   `brand-spine.md` records "Seven areas, no client named" and "no L2BEAT
   link" as Andrew's decisions of 25 September 2026. `PRODUCT.md` carries the
   same rule under Brand Commitments, and `AGENTS.md` states it as "No client
   is named on this page, even where the register would permit it". The
   instruction of 1 October supersedes all three for this area; the documents
   still say the old thing and need updating if the new rule is to hold.
   The second half of this conflict is closed: the L2BEAT link is gone, so
   row 1's do-not-say rule against presenting that listing as an endorsement
   is no longer in play. Naming the client is still the open question.

## Structure change: area 2, the RPC proxy (2 October 2026)

Andrew's instruction: make clear it is a blockchain RPC proxy and not an
abstract one, and record the role, the company and the firms whose traffic it
carried.

| Element | Before | After |
|---|---|---|
| Heading | Smart proxy system | Blockchain RPC proxy |
| Prose | "I designed a smart proxy system, with a cache layer and rate limiting, that served 140k+ requests per second in production for a browser wallet and a DEX aggregator." | "I designed the RPC proxy, a smart proxy system with a cache layer and rate limiting, that served 140k+ requests per second in production for Opera and 1inch." |
| Spec rows | Constraint only | Role, Company, Clients, Constraint |
| Diagram | Client / Browser wallet; Client / DEX aggregator; "Smart proxy system, in production" | One client box, "Clients" over all four names; "RPC proxy, in production" |

Every word of the new prose is register text. "the RPC proxy, a smart proxy
system with a cache layer and rate limiting" is the Jun 2021 timeline line
verbatim; "served 140k+ requests per second in production for Opera and
1inch" is row 3's Named wording. Joining them is deliberate: row 3's do-not-say
list forbids presenting the smart proxy and the RPC proxy as two different
systems, and a heading reading "RPC proxy" above prose reading "smart proxy
system" would invite exactly that reading. The apposition states they are one
system in the register's own words.

Naming Opera and 1inch is covered: row 3 Permission is "CLEAR for naming Opera
and 1inch, 18 September 2026, Andrew's decision (exit deal; client-side terms
checked)". The diagram keeps the anonymous descriptions as the caption slot
and puts the firm in the value slot, so no fact is lost in the rename.

### Conflicts raised by this change, for Andrew to decide

1. **Gnosis and the Ethereum Foundation are on the page ahead of the
   register.** Raised on 2 October 2026 that neither appears anywhere in
   `career-and-proof.md`, so neither held a permission state. Andrew
   reaffirmed the same day, "we can add Gnosis and Ethereum Foundation, they
   used this RPC", and both were added. Row 3 still needs amending through
   `/proof` so the register records what the page says.

   One point for that entry. Row 3's Permission reads "CLEAR for naming Opera
   and 1inch, 18 September 2026, Andrew's decision (exit deal; client-side
   terms checked)". The parenthetical is the substance: naming those two
   followed a check of the exit deal and the client-side terms. The two new
   names have not had that check, which is a different question from whether
   the fact is true.

   The prose no longer names anyone. Row 3's named wording ties the 140k+
   figure to Opera and 1inch specifically, and the 2022 timeline line does the
   same, so extending that figure to all four would claim more than the
   register holds. Ending the sentence at "in production" states less than the
   register's own default wording, which is safe in a way that naming four
   firms beside the peak figure would not be. The full list appears in the
   spec block and in the diagram's client box instead.

2. **"Head of Backend" does not match the register for this system.** Row 3's
   Responsibility column reads "Designed and built it with a team of 6", and
   the timeline puts that at Jun 2021, where the role is **Go Team Lead, one
   of the first hires**. Head of Backend is the 2023 line, with about 15
   people and 100K+ RPS. The 140k+ figure on this row is the 2022 line, which
   is also before the Head of Backend title. So the role as shown is a year or
   two later than the work the row describes. Either the row reads Go Team
   Lead, or it is split, or row 3's Responsibility is amended through `/proof`.

3. **The heading leaves the name recorded in `brand-spine.md`.** That file
   lists the area as "the smart proxy system (row 3 ...)". The page now says
   Blockchain RPC proxy. The register supports the name; the spine still
   records the old one and should be updated to match.

Carried forward from area 1 and still open: the "no client named" rule in
`brand-spine.md`, `PRODUCT.md` and `AGENTS.md` is now contradicted by two
areas, not one.
