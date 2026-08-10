# Del Studio Architects — Email Programme

**Twelve HTML emails in three tracks**, plus a presentation-grade preview tool with a
live image picker. Goal throughout: a complimentary consultation with
Donald E. Lipscomb, Jr., AIA.

---

## Live

**Preview / client demo — [tdethomaz10.github.io/delstudio-emails](https://tdethomaz10.github.io/delstudio-emails/)**

Send Don that link. It opens the full preview tool: all twelve emails, the image
picker, the section builder, Present mode. Nothing to install.

| | |
|---|---|
| Repo | [github.com/TDEThomaz10/delstudio-emails](https://github.com/TDEThomaz10/delstudio-emails) |
| Asset host | `https://tdethomaz10.github.io/delstudio-emails/assets/…` |
| Hosted guide PDF | [`/assets/docs/renovation-process-guide.pdf`](https://tdethomaz10.github.io/delstudio-emails/assets/docs/renovation-process-guide.pdf) — use this for `{{GUIDE_URL}}` |

### ⚠️ It is public

GitHub Pages on a free account cannot be access-restricted. `robots.txt` and a
`noindex` meta keep it out of search engines, and the raw client folders are
gitignored — but **anyone with the URL can view the images.** Don't post the link
anywhere public, and take the repo private (or delete it) once the demo is done:

```bash
gh repo edit TDEThomaz10/delstudio-emails --visibility private --accept-visibility-change-consequences
```

Note that doing so also takes the asset host offline, which breaks image loading in
any email already sent.

### Redeploying

```bash
git add -A && git commit -m "…" && git push      # live in ~60s
```

### emails/ vs emails-production/

`emails/` uses relative paths (`../assets/…`) so the local preview works.
`emails-production/` is the same twelve emails with absolute HTTPS URLs baked in —
**that is the folder you paste into your ESP.** Regenerate after any edit:

```bash
python3 build-production.py                       # uses the GitHub Pages URL
python3 build-production.py https://your-cdn.com  # or point at your own host
```

---

## Run the preview locally

```bash
cd "/Users/tdethomaz/Desktop/html emails"
./preview.command
```

Or double-click **`preview.command`**. Manual: `python3 -m http.server 8347 --bind 127.0.0.1`
then open **http://127.0.0.1:8347/preview/**

> **Never use port 8080 on this machine.** Docker Desktop holds `*:8080` on IPv6, so
> `localhost:8080` hits Docker and returns `{"detail":"Not Found"}`.

### The preview tool

| Control | What it does |
|---|---|
| Rail / `1`–`0`,`-` / arrows | Switch emails. The rail is just the list of emails you can use — no dates on it |
| Desktop · Tablet · Mobile | 700 / 480 / 375px. **Desktop is 700px on purpose** — the email is 600px wide and its mobile breakpoint is 620px, so previewing at exactly 600 would show you the phone layout |
| Fit · 50% · 75% · 100% | Scale down to see a whole 5,000px email at once |
| **Images** | Opens the picker — see below |
| **Isolate image** (`I`) | Fades every image except the selected one, so you can judge one photo at a time |
| **Present** (`P`) | Strips all UI chrome. A red **Exit present mode** button sits top-right; `Esc` also works |
| **Edit text** | Click any text in the email and type. Edits persist as you move between emails and are included in Export |
| **Revert** | Discards text edits and image swaps for the current email |
| Merge filled / raw | Toggle `{{FirstName}}` against a sample value |
| Export | Downloads the current email with your chosen images baked in |

### Choosing images

Click **Images**. The right panel lists **every image slot in the current email** with a
thumbnail, filename and real pixel size. Click a slot — it gets outlined in red in the
email — then click any image in the library below to swap it in **live**. Filter the
library by group (Waterfront Estate, Campaign Creative, Diagrams, Process Imagery…).

**65 images** are in the library. Combine with **Isolate** to audition one photo at a
time without the rest of the email competing. When you're happy, hit **Export** to
download that email with your picks baked into the HTML.

### Building sections

The same panel has a **Sections** tab. It lists every section of the current email, and
below it a library of **21 pre-built blocks** you can insert:

| Group | Blocks |
|---|---|
| **Portfolio grids** | Full-bleed image · Framed image + caption · Two-up grid · Three-up strip · Four-up mosaic · Feature + two small · Image + text beside |
| **Text** | Eyebrow + headline · Headline + red subhead · Body paragraphs · Tinted list |
| **Hooks & quotes** | Dark callout · Pull quote · Stat row · Dark project band |
| **Calls to action** | Red button + note · Dark CTA band · Image CTA |
| **Structure** | Divider rule · Spacer · Sign-off |

Select a section, then click a block to insert it below. Use **Up / Down / Duplicate /
Delete** to rearrange. Blocks arrive filled with real estate photography so they look
right immediately — then swap any image from the **Images** tab, and rewrite the copy
with **Edit text**. Every block is email-safe (tables, inline styles, stacks on mobile).

New blocks live in `preview/blocks.js` — one `<tr>` each, easy to extend.

---

## The three tracks

### Re-warm sequence
Suggested cadence: day 0, 3, 7, 12.
For leads who enquired and went quiet. Each email kills one reason renovation leads stall.

| # | Email | | Hook | CTA |
|---|---|---|---|---|
| 1 | Two Questions | — | The client's own discovery doc, verbatim. A question, not a pitch | **Reply** |
| 2 | The Process Guide | — | The contractor doesn't appear until Step 3 — and everyone starts there | **Download** |
| 3 | The Cottage | — | "Small projects are not simpler. They are less forgiving." | **Portfolio** |
| 4 | The Invitation | — | "Nobody has ever been charged for the first conversation" | **Book** |

### Nurture sequence
Suggested cadence: roughly monthly.
Architecture has a long decision cycle. Most leads aren't slow, they're early.

| # | Email | | Hook | CTA |
|---|---|---|---|---|
| 5 | Renovate or Move? | Month 1 | Moving costs 8–10% of the home's value and buys zero new space | **Reply** |
| 6 | What It Costs | Month 2 | Publishing real numbers is the strongest trust signal a design firm has | **Book** |
| 7 | What Your Lot Allows | Month 3 | "Send me your address and I'll tell you what your lot allows" | **Reply** |
| 8 | Forty Years | Month 4 | A house is the hardest building type, not the easiest | **Portfolio** |
| 9 | Why Winter | Month 5 | Everyone calls in April. April is already late | **Book** |
| 10 | Should I Stop? | Month 6 | The permission close — the highest-reply email in any sequence | **Reply 1/2/3** |

### Showpiece

| # | Email | Role |
|---|---|---|
| 11 | **The Estate** | Eleven frames of the Cruikshank estate, inside and out. Aspiration and scale |
| 12 | **Inside** | Seven rooms of one house. "Nobody lives on the elevation." Interiors convert better than exteriors for residential leads |

**Schedule Email 9 to land Oct–Jan** — it argues design must start in winter to build in
spring. It makes no sense arriving in June.

---

## What the new material changed

Two things in `DEL Studio Architects copy/DELSTUDIOAI/` resolved open questions and are
now corrected throughout all eleven emails:

1. **The consultation is complimentary.** Their own advert reads *"BOOK A COMPLIMENTARY
   CONSULTATION NOW."* That was on my VERIFY list — it's now stated as fact.
2. **The service area is "Maryland. District. Virginia."** — not the three counties I'd
   inferred. Every county reference has been removed.

Two taglines from that creative are now in use: **"Designed once. Lived in forever."**
(footer of Email 11, rail of the preview) and **"Forty years of practice."**

### Their creative, rebuilt at email width

You asked for sections that look exactly like the material he sent. Three of his
campaign pieces are recreated at 600px in `assets/creative/`:

| File | Source | Used in |
|---|---|---|
| `hero-designed-once.jpg` | `DelstudioAI.jpeg` — "Designed Once. Lived in forever." over the dusk aerial | Email 8 hero |
| `band-forty-years.jpg` | `23.jpeg` — "FORTY YEARS of practice", Est. 1986, MD·DC·VA | Email 11 |
| `cta-custom-home.jpg` | `24.jpeg` — "Want to build a custom home?" + the red consultation band | Email 4 — the whole image is the button |

The three originals are also in the library at 600×600 (`*-square.jpg`) if you'd rather
drop them in unchanged.

---

## ⚠️ Verify before sending

### The estate photography
- **Project name and location.** The source folder implies "Terhorst"; I have
  deliberately not printed a client surname anywhere. Confirm what Don wants it called.
- **Scope.** Email 11's descriptions are written from what is *visible* in the photos
  (main house, guest cottage, carriage barn, port cochère, pool). Confirm that matches
  the actual commission.
- **Publication rights.** Every frame carried a **BrightMLS** watermark, which I cropped
  off. That watermark means the shoot was commissioned by a listing agent, not the
  architect. Confirm Don may publish them.

### Still unconfirmed (tagged `<!-- VERIFY: -->` in the files)
| Email | Claim |
|---|---|
| 4 | "About 45 minutes" · "office or a call, your choice" · "you leave with a written outline of scope" |
| 5 | The 8–10% transaction-cost rule of thumb |
| 6 | The design-fee paragraph — replace with Don's actual structure |
| 7 | **The free zoning check offer.** Strongest hook in the programme, but ~20 min of Don's time per reply. He has to want it |
| 9 | Timeline durations are labelled illustrative |

### Phone number conflict
Website says **410-923-0922**; the 2020 and 2018 project sheets say **410-923-0828**.
I used **0922**.

### The website's portfolio page
Ten images on `delstudioarchitects.com/portfolio/` carry a visible **THE MLS.com**
watermark, and several are Southern-California mid-century houses — not Maryland work.
None are used here. Worth raising before this campaign drives traffic there.

---

## Email 3 was rebuilt

You didn't like the Catonsville photographs, and they were the weakest imagery in the
set — overcast, low-resolution, a hose across the patio. Email 3 is now **The Cottage**,
built on the estate's two-bedroom guest cottage.

That choice is deliberate: leading a modest homeowner with a large estate risks
"too expensive for me." The cottage is roughly the size of the addition most people
write in about, so it reads as attainable — and its size becomes the argument:
*"Small projects are not simpler. They are less forgiving."*

The original is preserved at `emails/alternates/03-catonsville-transformation.html`,
and the Catonsville photographs are still in the image library if you want them back.

## Imagery — 161 images in 11 groups

```
assets/estate/       31  Cruikshank estate exteriors + site panorama
assets/interiors/    48  Cruikshank interiors — kitchen, library, sun room, barn
assets/habeck/       18  Habeck residence
assets/commercial/   14  Dick's, TIAA-CREF, casino, Bobby Van's
assets/civic/        14  Union Station, VRE terminal, townhouses, KFC tower
assets/images/       11  Catonsville project + archive
assets/creative/      6  the client's campaign artwork + email-width rebuilds
assets/graphics/      3  custom diagrams (cost chart, setbacks, timeline)
assets/stock/         8  CC0 / public-domain process imagery (Openverse)
assets/placeholders/  6  spec'd slots still to be shot
assets/brand/         2  logo, both variants
```

**The estate is the Cruikshank Residence.** Two of the client's own folders name it, so
that is almost certainly what the firm calls it. The email copy still says only "a
waterfront estate in Maryland" — switch it once Don confirms he'll publish the client's
name.

Watermarks cropped off every frame: **BrightMLS** on the Cruikshank photography,
**© 2013 MRIS** on Habeck. The commercial, civic and architect-shot Cruikshank images
(`gazebo`, `kitchen-arch`, `library-ceiling`, `barn-arch`, `site-panorama`) carry no
watermark at all — those have the cleanest provenance.

Run `python3 preview/build-manifest.py` after adding any new assets to refresh the picker.

**The rule that matters:** never put a stock photo of someone else's *house* in an
architect's email — readers assume every building shown is your work. Drawings, tools
and materials carry the craft without making a false portfolio claim. That's exactly the
trap the website fell into, so `assets/stock/` is process subjects only.

### Still placeholders
| Slot | Subject | Where |
|---|---|---|
| `IMG-E04-01` | **Portrait of Donald E. Lipscomb, Jr., AIA** | Email 4 — **required** |
| `IMG-E03-04` | Interior of the Catonsville four-season room | Email 3 |
| `IMG-E02-02`, `IMG-E04-02` | Field survey; the Gambrills studio | spare |

The portrait is the one that matters — Email 4 asks for the meeting, and a real face
carries it.

---

## Before you send

1. **Merge fields** — `{{FirstName}}`, `{{BOOKING_URL}}` (your Calendly),
   `{{GUIDE_URL}}`, `{{UnsubscribeURL}}`.
2. **Re-point image paths.** They're relative so the preview works. One find-and-replace
   per file: `../assets/` → `https://yourcdn.com/delstudio/assets/`, then upload
   `assets/`.
3. **Work the VERIFY list** with Don.
4. **Seed-test** in Gmail web, Gmail iOS, Apple Mail and Outlook desktop.

### Benchmarks
Measure **replies and booked consultations, not opens** — Apple Mail preloads tracking
pixels, so open rate is close to meaningless. Warm re-engagement should land **10–25%
meaningful reply rate** on a tight list. Wednesday 7–11am is the strongest send window.

---

## Technical

- Table-based, inline-styled, 600px container, XHTML transitional.
- Mobile breakpoint 620px. **Verified: no horizontal overflow at 320 / 375 / 480 / 700px
  across all 11; zero broken images; zero missing alt text.**
- `color-scheme: light` is deliberate so dark-mode clients don't invert the black bands.
- Outlook: MSO conditional wrapper, `mso-line-height-rule:exactly`, `mso-padding-alt`.
- Georgia + Arial only. No webfonts, no JavaScript, no external CSS.
- `preview/images.json` is the library manifest — regenerate it if you add assets.

```
emails/                 the eleven deliverables
assets/                 all imagery, by category
preview/index.html      preview + image picker + present mode
preview/images.json     image library manifest
preview/qa-widths.html  overflow / broken-image / alt-text checker
preview.command         double-click to launch
```
