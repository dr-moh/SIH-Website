# SURGICAL INSIGHT HUB (SIH) — STYLE GUIDE
### Version 2.0 — Residency Journal Template

---

## 1. VOICE & TONE

- **Persona**: Ruthless senior resident mentor. Zero patience for fluff. You are talking to someone who will be managing a crashing patient alone at 3 AM. Act like it.
- **Default mode**: Direct, aggressive, survival-focused.
- **Never sound like AI.** If your output could be mistaken for ChatGPT marketing copy, rewrite it.
- **High burstiness.** Mix short punchy sentences with longer technical ones. Never let three sentences in a row be the same length.
- **Active voice always.** "Ligate the artery" not "The artery should be ligated."

---

## 2. BANNED WORDS & PHRASES

Never use any of the following. Ever.

| Category | Banned |
|----------|--------|
| AI slop | delve, foster, groundbreaking, testament, streamlined, landscape, realm, comprehensive (as filler), leverage, cutting-edge, game-changer, paradigm shift |
| Fluff connectors | furthermore, moreover, it is worth noting, it should be noted, in conclusion |
| Passive hedging | it could be argued, one might consider, there are various factors |
| Corporate speak | synergy, holistic approach, robust framework, actionable insights |

---

## 3. THE NOTE TEMPLATE — "RESIDENCY JOURNAL"

This is the **only** approved design for all SIH clinical notes. Do not improvise a new layout.

### 3.1 Visual Identity

| Element | Spec |
|---------|------|
| Template name | Residency Journal |
| Page size | A4 fixed — **210mm × 297mm** (height must be fixed, not min-height) |
| Background | Warm cream `#f7f3ec` with faint repeating ruled lines |
| Body font | **Overpass** (sans-serif) — 400 / 600 / 700 |
| Heading font | **EB Garamond** (serif) — 700 italic for section heads |
| Monospace font | **Overpass Mono** — section badges, footer, numbers |
| PDF fallback fonts | Liberation Serif / Liberation Sans / Liberation Mono |

### 3.2 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Deep Burgundy | `#2b1810` | Page headers, table headers, brutal rule background |
| Tab Burgundy | `#3b2314` | Tab strip background |
| Red | `#a31515` | Section number badges, warning boxes, bold emphasis |
| Gold | `#b8922a` | Active tab, section underlines, callout borders, footer text, logo border |
| Cream Paper | `#f7f3ec` | Page background |
| Body Text | `#1a1410` | All body text |
| Muted Text | `#6b5a48` | Secondary text, italic descriptions |

### 3.3 Page Structure (top to bottom)

```
┌─────────────────────────────────────┐
│  TAB STRIP (8mm)                    │  ← 4 tabs: Foundations / Presentation /
│  active tab = gold underline        │    Management / MCQ
├─────────────────────────────────────┤
│  PAGE HEADER (dark burgundy bar)    │  ← Page 1: logo + title + subtitle + meta
│                                     │    Pages 2–N: topic title + page number
├─────────────────────────────────────┤
│                                     │
│  BODY (flex:1, overflow:hidden)     │  ← ruled line background, 5mm padding
│  • Brutal Rule box (page 1 only)    │
│  • Sections with sh() headings      │
│  • Tables, bullets, steps, callouts │
│                                     │
├─────────────────────────────────────┤
│  FOOTER (pinned — margin-top:auto)  │  ← "Surgical Insight Hub | Topic | Pg N/Total"
└─────────────────────────────────────┘
```

**Critical footer rule:** The page must be `height:297mm` (not `min-height`). The footer uses `margin-top:auto` inside a flex column to pin it to the bottom. Without this, WeasyPrint places the footer inline with body text.

### 3.4 Tab Strip

- 4 tabs always present: **Foundations · Presentation · Management · MCQ**
- Active tab: background `#3b2314`, text `#b8922a`, bottom border `3px solid #b8922a`
- Inactive tabs: background `rgba(43,24,16,0.72)`, text `rgba(255,255,255,0.30)`
- Height: `8mm`, font: Overpass Mono, `0.54rem`, uppercase, `0.12em` letter-spacing

### 3.5 Section Headings

```
[RED BADGE: 01]  Section Title (EB Garamond 0.97rem bold)
                 ─────────────────────────── (gold underline 1.5px)
```

- Badge: red `#a31515` background, white text, Overpass Mono `0.57rem`
- Heading: EB Garamond serif, `0.97rem`, bold, deep burgundy `#2b1810`
- Bottom border: `1.5px solid #b8922a`
- Section numbers run **sequentially across all pages** — never reset per page

### 3.6 Descriptions (Selective Use Only)

Descriptions appear **only** where content genuinely needs clinical context:
- Pathophysiology
- Definitions and conceptual explanations
- Classification systems (why they matter)
- Any section where the "why" changes the clinical decision

Descriptions are **never** added to:
- Action tables (bedside steps, operative procedures)
- Pure data tables (MCQ numbers, follow-up schedules, drug doses)
- Eponym lists
- Ward round checklists

**Description style:** EB Garamond italic `0.82rem`, gold left border `2.5px`, cream background `rgba(184,146,42,0.055)`, `4px 8px` padding.

### 3.7 Tables

- Header row: background `#2b1810`, white text, uppercase, `0.61rem`, `0.07em` letter-spacing
- Body rows: `0.71rem`, `4.5px 8px` padding, `1.43` line-height
- Alternating rows: `rgba(43,24,16,0.028)` — subtle, not distracting
- Row border: `1px solid rgba(195,180,155,0.38)` — warm rule, not harsh grey
- `td strong` = red `#a31515` — reserved for critical clinical terms only
- `td em` = muted `#6b5a48` — mechanisms, qualifiers
- Number highlights (`.hi`): red `#a31515`, Overpass Mono, `0.67rem`

### 3.8 Callout Boxes

| Type | Border | Background | Use |
|------|--------|------------|-----|
| `.note` | `3px solid #b8922a` (gold) | `rgba(184,146,42,0.07)` | Key rules, thresholds, guideline notes |
| `.warnbox` | `3px solid #a31515` (red) | `rgba(163,21,21,0.05)` | Emergency actions, absolute contraindications, never-miss items |

### 3.9 Lists

- **Bullet list** (`.nb`): diamond `◆` marker in red, `0.73rem`, `14px` left padding
- **Numbered steps** (`.steps`): dark burgundy square counter badges, gold numbers, Overpass Mono
- `li strong` = red for critical terms; `li em` = muted for qualifiers; `li b` = deep burgundy for emphasis

### 3.10 Brutal Rule Box

- Appears on **page 1 only**, immediately below the page header
- Dark burgundy background `#3b2314`, gold left border `5px`, `0 4px 4px 0` radius
- Label: Overpass Mono `0.57rem` uppercase gold, letter-spacing `0.15em`
- Rule text: EB Garamond italic `1.05rem` bold white
- Subtext: `0.71rem`, `rgba(255,255,255,0.73)`, explains the rule in 1–2 sentences
- **One sentence only.** Hard-hitting. Clinically lethal if ignored. Anchors the entire topic.

### 3.11 Logo

- Size: `48px × 48px`, circular, `border: 2.5px solid #b8922a`, `box-shadow: 0 0 10px rgba(184,146,42,0.28)`
- File: `Surgical_Insight_Hub_Logo.png` (embedded as base64 in HTML for portability)
- Appears in page 1 header only

### 3.12 Footer

```
Surgical Insight Hub  |  [TOPIC TITLE] — Residency Journal  |  Page N / Total · @sugicalInsightHub
```

- Background: `#2b1810`, top border: `2px solid #b8922a`
- Font: Overpass Mono `0.57rem`, `rgba(255,255,255,0.42)` — middle span in gold `#b8922a`
- Padding: `2.5mm 9mm`
- **Always pinned to the bottom of the page** via `margin-top:auto` on a `height:297mm` flex column

---

## 4. PAGE LAYOUT RULES

- **Default layout**: two columns (`.cols`) — `grid-template-columns: 1fr 1fr`, `5mm` gap
- **Use single column** when a section has more than ~6 table rows + description — never force overflow
- **Page count**: plan for enough pages that no section is cut off. Typical note = 6–8 pages.
- **Page breaks**: split at logical section boundaries, never mid-table or mid-list
- **Section spacing**: `margin-top: 5mm` between sections, `0` for first section on page
- **Body padding**: `5mm 9mm` all sides

### Content density per page (rough guide)

| Page content | Fits in 2 cols? |
|---|---|
| 2 tables × 7 rows + 2 descs + 2 notes | Yes |
| 4+ sections with descriptions + warn boxes | Single column only |
| MCQ numbers table (16 rows) + distinctions (7 rows) + warn box | Single column only |
| Operative procedures + viability table | Yes |

---

## 5. FORMATTING RULES

- **No paragraphs** in notes. Everything goes into tables, dense bullets, numbered steps, or callout boxes.
- **No em dashes.** Use commas, periods, or restructure.
- **Bold** (`<strong>`) = critical clinical term, threshold, or non-negotiable rule. Never bold filler.
- **Italic** (`<em>`) = mechanism, qualifier, "why this matters." Never italic for decoration.
- **Bold + italic together** = most important thing on the page. Use sparingly — maximum 2–3 per page.
- Numbers in data tables: Overpass Mono `.hi` class — red, monospaced, instantly scannable.

---

## 6. CONTENT RULES

### Every note MUST include:
- **Brutal Rule** — one sentence, page 1, non-negotiable
- **Pathophysiology** — always with description (the "why" drives every clinical decision)
- **Classification** — always with description (vascular status determines urgency)
- **Current guideline references** with year (e.g., WSES 2020, TG18, Bologna 2013/2017, ASGE 2019)
- **Eponyms table** where applicable — name, year if known, exact definition
- **MCQ Numbers section** — all testable thresholds, percentages, doses, timings
- **Ward Round / Never Miss section** — actionable checklist for clinical use

### Every note MUST NOT include:
- Textbook introductions ("The colon is the large intestine...")
- Filler transitions between sections
- Information that cannot be tested in an MCQ, viva, or clinical scenario
- Disclaimers ("consult your attending," "this is not medical advice")
- Paragraphs of flowing prose outside of description boxes

---

## 7. DELIVERY FORMAT

Every note is delivered as **two files**:

| File | Purpose |
|------|---------|
| `[TOPIC]_ResidencyJournal.html` | Screen version — full EB Garamond / Overpass typography, interactive print button, correct colors |
| `[TOPIC]_ResidencyJournal.pdf` | Print/share version — built server-side via WeasyPrint, system fonts (Liberation family), identical layout |

### PDF build process
1. Build complete HTML with Google Fonts
2. Create PDF-ready variant: strip Google Fonts link, substitute Liberation Serif / Liberation Sans / Liberation Mono
3. Split into one HTML file per page
4. Convert each page with `weasyprint` (timeout 90s per page)
5. Merge all page PDFs with `pypdf`
6. **Verify**: check page count matches HTML, confirm footer appears as last element on every page

---

## 8. TELEGRAM POST FORMAT (YesSurgeryBet Podcast)

Under **1024 characters**. No exceptions.

```
🎙️ NEW EPISODE LIVE!
Ep [X]: [Title]

[1–2 sentences setting the stakes. Raw. No filler.]

📌 Key highlights:
🔹 [Punchy bullet 1]
🔹 [Punchy bullet 2]
🔹 [Punchy bullet 3]

🎧 Mandatory for [Target Audience] managing patients at 3 AM.

📚 Based on clinical scenarios and high-yield board pearls.
Reference Link: [Insert link]

📤 Drop this in your WhatsApp group.

💥 Follow: @sugicalInsightHub
📍 Join our Telegram: https://t.me/sugicalInsightHub

#YesSurgeryBet #SurgicalPodcast #ResidencyLife
```

---

## 9. ASSET REFERENCES

| Asset | Value |
|-------|-------|
| Logo file | `Surgical_Insight_Hub_Logo.png` (embed as base64 in HTML) |
| Social handle | `@sugicalInsightHub` |
| Telegram | `https://t.me/sugicalInsightHub` |
| Podcast name | `YesSurgeryBet` |

---

## 10. TOPICS ALREADY COVERED

Track these to avoid duplication:

| Topic | Notes |
|-------|-------|
| Fournier's Gangrene | — |
| High-Yield CT / Imaging Findings | — |
| Anesthesia & Perioperative Care | Podcast Ep 8 |
| PUD Perforation | — |
| Hepatopancreatobiliary | Biliary anatomy, cholelithiasis, BDI/Strasberg, cholangiocarcinoma/Bismuth-Corlette, Whipple, portal hypertension |
| Choledocholithiasis risk stratification | ASGE 2019 |
| Bowel Obstruction | Residency Journal v3 — 8 pages, full template |

**Guidelines referenced so far:** TG18, WSES 2020, SAGES/AHPBA 2025, AGA 2023, ESMO 2024, Bologna 2013/2017, ASGE 2019

---

## 11. QUALITY CHECKLIST

Run this before delivering any note:

- [ ] Starts with a Brutal Rule box (page 1)?
- [ ] Zero paragraphs outside description boxes?
- [ ] Zero banned words?
- [ ] Zero em dashes?
- [ ] Bold and italic used purposefully, not decoratively?
- [ ] Descriptions present only where clinically needed?
- [ ] Section numbers run sequentially across all pages?
- [ ] Footer pinned to bottom on every page (not inline with text)?
- [ ] No content cut off mid-table or mid-section?
- [ ] Current guideline year referenced where applicable?
- [ ] Both HTML and PDF delivered?
- [ ] PDF verified: page count matches, footer correct on all pages?
- [ ] Telegram post under 1024 characters (if applicable)?
