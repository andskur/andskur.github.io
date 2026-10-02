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

## Structure change: area 3, staking infrastructure (2 October 2026)

Andrew's instruction: Gateway Yield; Lido, Gnosis, Stelar, Canton; "i was the
department head".

| Element | Before | After |
|---|---|---|
| Heading | Staking infrastructure | unchanged |
| Prose | Row 9 Default wording | unchanged |
| Spec rows | Constraint only | Role, Company, Product, Protocols, Constraint |
| Diagram | Three identical "Validator / Signing node" boxes | Four boxes, "Protocol" over each name |

Role reads **VP of Platform and Yield**, which is row 9's Responsibility column
verbatim and says the same thing as "department head" with the title attached.
Spelling corrected to **Stellar**. The diagram needed a fourth node in a row
the canvas drew with three, so `.x7`, `.w7`, `.w8`, `.p7` and `.p8` joined the
animation classes in `app.css`; the three repeated validator boxes carried one
fact between them and now carry four.

The prose is untouched. Row 9's do-not-say list forbids "I ran the
infrastructure", and both the sentence and the diagram's bottom caption keep
the department as the subject.

### Conflicts raised by this change, for Andrew to decide

1. **Row 9 records that there is no client to name.** Its Permission column
   reads "CLEAR (no client to name; on-chain reference to confirm)". The page
   now names four protocols against it. None of the four is recorded against
   row 9: Lido and Stellar appear nowhere in `career-and-proof.md`; Gnosis
   appears nowhere either, having been added to area 2 the same day under the
   same gap; Canton appears only at **row 17**, which is the CIP-0084 talk to
   the super-validators, a different claim from running staking infrastructure
   for the network. Row 9 needs amending through `/proof`.

2. **The diagram now implies the $1B+ is spread across those four.** It reads
   top to bottom: locked value, then the four protocols, then the
   infrastructure. Row 9 records "$1B+ locked in staking" with no breakdown
   and its do-not-say list already rules out "my TVL" and any return figure. If
   the four are not the whole of the locked value, the arrangement overstates
   what is recorded.

3. **"Gateway Yield" is not in the register.** The product name appears in no
   reference file. Row 9 calls the area "Yield and staking infrastructure".

Carried forward: "Head of Backend" on area 2 is still the 2023 title against a
2021 system, and the "no client named" rule in `brand-spine.md`, `PRODUCT.md`
and `AGENTS.md` is now contradicted by three areas.

## Structure change: area 4, shared ZK proving (2 October 2026)

Andrew's instruction: under Gateway, for customers and protocols Polygon
zkEVM, erigon-cdk zk L2 chains, Miden, Iden3; "i was the bp of platform and
yield".

| Element | Before | After |
|---|---|---|
| Heading, prose | Row 10 Default wording | unchanged |
| Spec rows | Constraint only | Role, Company, Protocols, Constraint |
| Diagram | Three "Ecosystem" boxes: a zkEVM rollup, a zkVM chain, a privacy rollup | Four boxes, the anonymous description as the caption over each name |

Read as VP of Platform and Yield and cdk-erigon, which is the project's own
name. The anonymous descriptions became the captions rather than being
discarded, so each box still says what kind of system it is: zkEVM rollup /
Polygon zkEVM, zk L2 chains / cdk-erigon, zkVM chain / Miden, ZK identity /
Iden3. That arrangement also works against row 10's do-not-say rule, which
forbids presenting the prover as zkEVM only; four kinds of ZK system make the
point better than the sentence alone.

Much of this is already permitted. Row 10's Permission reads "CLEAR for EY
Nightfall, Hermez, Miden, 18 September 2026", so Miden is covered outright.

### Conflicts raised by this change, for Andrew to decide

1. **Polygon zkEVM is on the page under a name the register does not use.**
   Row 10 clears **Hermez**. Polygon Hermez was renamed Polygon zkEVM and the
   repository moved from `0xPolygonHermez` to `0xPolygon`, so this was read as
   the same project under its current name. If that reading is wrong, the name
   has no permission at all.

2. **Iden3 and cdk-erigon are not in the register.** Neither appears in any
   reference file. cdk-erigon sits inside the Polygon CDK and Hermez
   lineage that row 10 does clear, but it is not named there.

3. **EY Nightfall has been dropped, and it was the one name the register asks
   for.** Row 10's Named wording is Add "including EY Nightfall", and Permission
   clears it explicitly. The diagram's third box, "a privacy rollup", was
   almost certainly Nightfall in anonymous form, so naming the others while
   removing that box takes the one CLEAR name off the page. It was left off
   only because the instruction did not list it; it can go back at no
   permission cost.

4. **The role may be early for the work.** Row 10's Responsibility column says
   only "Department delivery" and names no title. The timeline puts VP of
   Platform and Yield at **October 2025**, while the shared prover sits in the
   2025 line without a month. If the prover predates October 2025, the title
   on this row is ahead of the work, as "Head of Backend" is on area 2.

## The spec block's last row, all seven areas (2 October 2026)

Andrew: "we have doubled info in the blocks ... we don't need the exact text
doubled in the single block", naming the 140k+ figure, the $1B+ figure and the
autoscaling line.

The audit found it in six of the seven, not three. Every Constraint row was a
compression of the sentence directly above it, and areas 2, 3, 4, 5 and 7
repeated whole phrases verbatim; area 3 said "$1B+ locked" three times over,
counting the diagram.

Rather than delete the row, each one now states a limit its own sentence does
not, taken from that row's do-not-say column in `career-and-proof.md`. The
label reads **Limit** where the content is a limitation and stays
**Constraint** on area 2, which is the one area with a real performance
constraint left once the duplication went.

| Area | Row | Reads | From |
|---|---|---|---|
| 1 Card programme chains | Limit | Not a compliance certification. | Row 1 forbids "MiCA-compliant" |
| 2 Blockchain RPC proxy | Constraint | 50 ms average latency on the heavy requests. | Row 3 Default wording, verbatim |
| 3 Staking infrastructure | Limit | A point-in-time figure, not a managed total. | Row 9 forbids "$1B managed", "my TVL" |
| 4 Shared ZK proving | Limit | No cost saving claimed; none was measured. | Row 10 forbids cost-saving percentages |
| 5 App kits for fintech | Limit | No revenue or volume figures claimed. | Row 31 forbids revenue or volume figures |
| 6 AI network token launch | Limit | One launch; no token price outcome claimed. | Row 14 forbids token price outcomes |
| 7 NFT launch platforms | Limit | No sales figure claimed for the platform itself. | Row 24 forbids the total as sales Andrew ran |

No new claim enters this way: every line is the negation of something its row
already forbids, so none of them can overstate. It also puts the page's own
principle to work, that stated limits read as credibility to a senior reader,
in the one slot that was carrying nothing.

## Spec rows across all seven areas (2 October 2026)

Andrew supplied material for every area. Most went up as given. Three items
were held and put to him first, because each is named in its own row's
do-not-say column, which makes it a decision he had already taken rather than
a gap in the record.

| Area | Held item | Rule | His decision |
|---|---|---|---|
| 1 | 6M users | Row 1: "any TVL or user figure not on L2BEAT" | Reword without a number. Reads "Built for consumer scale." |
| 4 | 30% cost saving | Row 10: "Cost-saving percentages, none measured" | State the architecture instead. Reads "One shared prover across every protocol, not one per chain." |
| 6 | $140M FDV, all major CEXs | Row 14: "FDV or RPS as fact without a source" | Put both up as stated. |

Area 6's Limit row read "One launch; no token price outcome claimed", which
the new Outcome row contradicts outright, so it now reads "One launch; FDV at
listing, not a current valuation". The qualifier is doing the work the old
line did, against a figure that is now on the page.

### Open, for Andrew

1. **Row 14 needs amending through `/proof`, with a source.** Its Permission
   already says "Citable source still required by the Named wording" and its
   artefact is the KuCoin announcement of 7 and 9 January 2026. The FDV is on
   the page without one. "All major CEXs" is also a larger claim than the
   single "exchange listing" the row's own wording records.

2. **Snark.art is in area 7's Clients row.** Row 33 forbids presenting
   Snark.art as "Uddug or practice work". Area 7's sentence opens "With Uddug,
   which I co-founded", so a name in its Clients row reads as Uddug work and
   as a client rather than the employer it was. Raised twice on 2 October 2026
   and settled by Andrew both times: first "you forget to add snark.art", then
   "just add snark.art to Clients, without this 'as technical lead...'". It is
   listed plainly alongside OG:Crystals and Arsnl.art.

   Two things row 33 records are therefore not on the page: the technical lead
   title and the team of five. The row's ban on "Founder, co-founder or CTO of
   Snark.art" is not breached, since no title is shown at all. Row 33 needs
   amending through `/proof` to match what the page now says.

3. **No Role row on area 7.** Rows 21 to 24 record responsibility only as
   "Uddug launch", "Uddug build" and "Uddug era", with no title. "Co-founder"
   is already in the sentence, and the technical-lead title belongs to row 33,
   which is a different engagement.

4. **99% uptime is unrecorded, and reads low.** Row 9's evidence is STATED and
   its artefact is "To confirm". Nothing forbids an uptime figure on that row,
   unlike row 3. Worth noting that 99% is about three and a half days of
   downtime a year, which a technical reader will take as a modest number
   rather than a strong one.

5. **"15+ NFT projects" is a different claim from row 32.** That row records
   "20+ projects launched" across everything, not a count of NFT projects.
   It is not a larger number, so it does not break row 32's rule against one,
   but it is not recorded either.

6. **Arsnl.art is not linked.** The site returned 502 and 530 on 2 October
   2026. The name is on the page as plain text.

## Rewrite: the Background paragraph (2 October 2026)

Andrew: "the text just duplicated what we have on the timeline. it is not
good, please rewrite the big text to something different and powerful".

He is right about the extent of it. The old paragraph repeated the 2018
chapter (co-founded, 15 people), the 2024 chapter (acquired, two departments)
and the 2026 chapter (Felag and the practice) almost phrase for phrase, and
its middle clause restated the whole Systems section and four of the five
numbers in the strip above it. Nothing in it was unavailable elsewhere on the
page.

Before: "I co-founded Uddug and grew it to 15 people; Gateway.fm acquired it
in 2024 and I ran two departments there. Along the way: a live card-programme
chain, RPC at 140k+ requests per second, $1B+ in staking, a token launch
through to its listing, and NFT projects that raised $100M+. In 2026 I started
again: Felag, an engineering studio, and this practice."

After: "What I sell is judgement under time pressure. It comes from having
been wrong in production and having had to fix it on a Sunday, which is a
different education from reading the architecture back afterwards. Most of the
systems I have been handed were competently built. They were built for a
company that had changed shape by the time I saw them, and nobody had been
given a week to go back and say so. That gap is where the work is now: a term
sheet that needs a technical read before anyone signs, a licence application
with an evidence hole in it, a launch date that will not move."

It carries no proof, no number and no name, so it adds no claim to check. What
it adds is the one thing the page had nowhere: a position, in the voice
`voice-and-editorial.md` asks for. That file wants a stated opinion, says to
admit being wrong ahead of hedging, bans the "not X, but Y" shape, the
rule-of-three adjective, the closing line that restates the opening, and warns
that evenly balanced prose reads as generated; the five sentences run 8, 28,
11, 29 and 35 words. The closing three name the trigger for each buyer lane
without naming a persona: the fund at a term sheet, the licensed entity at an
evidence gap, the founder at a launch date.

### Conflicts raised by this change, for Andrew to decide

1. **`brand-spine.md` specifies the paragraph this replaced.** Under
   "Background, 'Fifteen years of building.'" it reads: "one paragraph telling
   the Uddug story (co-founded, grown to 15 people, acquired by Gateway.fm in
   2024, two departments run there, then Felag and the practice in 2026) with
   the outcomes in register wording". That is the duplication, written into
   the spec. The spine needs rewriting to match the page.

2. **Felag is named once on the site now, not twice.** The same spine entry
   says "Felag is named in the paragraph, as an engineering studio, and in the
   2026 chapter". Only the 2026 chapter carries it. Putting it back in the
   paragraph would repeat that chapter, which is what this change undid.

3. **The Uddug acquisition is now only in the timeline.** It is in the 2024
   chapter and nowhere else. If that story should carry more weight than one
   chapter gives it, the place for it is the chapter, not a second telling
   above.

## Background paragraph, settled (2 October 2026)

Three rewrites were rejected before the brief was pinned down by asking
rather than drafting. Andrew's answers: the paragraph exists to establish
**that he is senior enough**; the voice is **warm and personal**, not the
terse operator register of the earlier attempts; it names **nothing specific**,
no domain, number, company or role; and it runs to **one short paragraph**.

Live text: "I have been writing software since I was a student and I have
never wanted to do anything else. What keeps me here now is the moment a
system that could have failed quietly does not, because somebody asked the
right question early enough."

44 words, two sentences of 19 and 25. The constraint worth recording is that
seniority normally rests on facts, and this brief rules facts out, so the rank
has to come from bearing: the length of the run is implied rather than counted,
and the thing he says he values is a system not failing rather than a system
being clever, which is a thing only someone a long way in tends to say.

It carries no claim, so nothing here needs clearing. The conflicts with
`brand-spine.md` recorded above still stand: the spine still specifies the
Uddug paragraph this replaced, and still expects Felag to be named here.
