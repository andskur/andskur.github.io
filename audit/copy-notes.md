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
