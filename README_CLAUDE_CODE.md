# Surgical Insight Hub (SIH) — Claude Code Context

## Live Site
https://surgicalinsighthub.pages.dev

## GitHub Repo
https://github.com/dr-moh/surgical-insight-hub

## Deployment
Cloudflare Pages — auto-deploys on every push to main branch.

## File Map
| File | Purpose |
|------|---------|
| `index.html` | Home page — hero, features, MCQ bento, podcast, Telegram feed, leaderboard, testimonials, CTA |
| `notes.html` | Notes library with filter by specialty |
| `podcast.html` | YesSurgeryBet podcast episodes |
| `about.html` | About Dr. Abdulmalik Moh — surgical resident |
| `mcq.html` | Full MCQ Practice Arena — setup, questions, SHARP debrief, global leaderboard |
| `review.html` | AI High-Yield Review — streams Claude AI content for surgical topics |
| `colorectal_Notebook.html` | SIH Monograph: Colorectal & Anal Surgery |
| `anestesia_with_mono.html` | SIH Monograph: Anesthesia & Perioperative Care |
| `BO_ResidencyJournal_v3.html` | Residency Journal: Bowel Obstruction (A4 printable note) |
| `Surgical_Insight_Hub_Logo.png` | SIH logo — referenced in all pages |
| `STYLE_GUIDE.md` | Brand style guide v2.0 |

## Brand Colors
- Burgundy: #2b1810 (headers, dark elements)
- Gold: #b8922a (accents, borders)
- Gold light: #f0d080 (text on dark)
- Red: #a31515 (section badges)
- Cream: #faf7f2 (background)
- Text: #1a1208

## Backend Services
| Service | Purpose | Credentials |
|---------|---------|-------------|
| Supabase | Database (testimonials, mcq_scores) | URL: https://sxushsvvmyokoknnsbuj.supabase.co |
| Forminit | Email signups form | Form ID: 8fcbo3pg7br |
| Cloudflare Pages | Hosting | Auto-deploy from GitHub |

## Supabase Tables
- `testimonials` — approved=false by default, set to true to show publicly
- `mcq_scores` — name, school, specialty, topic, score, total, percentage, time_taken

## Navbar Order (all pages)
Home · Podcast · Notes · MCQ Arena · AI Review · About
+ Mobile hamburger (☰ Menu) slides up a bottom sheet

## Key Features Status
- [x] Home page with hero, floating cards, MCQ preview, podcast, Telegram feed
- [x] Global MCQ leaderboard on home page (live from Supabase)
- [x] Testimonials with Supabase storage + Forminit notifications
- [x] MCQ Arena: 20 questions, SHARP debrief, global leaderboard
- [x] AI Review: streams Claude API for any surgical topic
- [x] Colorectal monograph with collapsible sidebar + surgical art
- [x] Anesthesia monograph with collapsible sidebar + surgical art
- [x] Logo watermark on all pages
- [x] Mobile hamburger nav on all pages
- [x] Mobile-responsive CSS on all note pages

## Pending / To Add
- [ ] More MCQ questions (currently 20 — target 200+)
- [ ] ARM (Anorectal Malformation) Residency Journal note
- [ ] More Residency Journal notes (Fournier's, PUD, Choledocholithiasis, HPB)
- [ ] data.json integration for notes library
- [ ] Telegram feed (currently shows fallback — RSS blocked by CORS)

## Notes on AI Review (review.html)
Uses direct Claude API call from browser with:
`'anthropic-dangerous-direct-browser-access': 'true'`
Model: claude-sonnet-4-20250514
Max tokens: 4000
Streams SSE events and renders markdown into structured sections.

## SHARP Debrief Format (mcq.html)
S — Set the Stage (correct answer + accuracy)
H — Highlight Excellence (why correct answer is right)
A — Address Gaps (explain each wrong option)
R — Review Guidelines (2024-2026 guidelines reference)
P — Plan (one take-home message)
