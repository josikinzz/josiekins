# JosieKins.xyz - Portfolio Website Rebuild

## Project Overview
Rebuild Josie Kins' personal portfolio squarespace website from the old Squarespace export into a modern React + TypeScript + Tailwind + ShadCN stack.

## Tech Stack
- **React 18.3.1** with TypeScript 5.6
- **Vite 6.0.5** for build tooling
- **Tailwind CSS 3.4.19** for styling
- **ShadCN/UI** for component library (Radix primitives)
- **React Router DOM 7.13.0** for navigation
- **@iconify/react 6.0.2** for tabler icons (header/footer navigation)
- **Lucide React** for additional icons

## Design Principles
- Match the old Squarespace site's look and feel exactly
- Reference `old site/` folder for all content, images, and design details
- Do not write new copy - use exact text from the original site, copy paste it as needed.
- Wherever possible, use a copy first approach during this refactor, copying the original code first and then editing it as needed. We really are trying to exactly duplicate this website down to every little detail.

## Source Reference
The `old site/` folder contains the exported Squarespace site with HTML files and `_files` folders containing images/assets.

## Project Structure
```
src/
├── main.tsx                    # React entry point
├── App.tsx                     # Root app component
├── router.tsx                  # Route definitions (26+ routes)
├── index.css                   # Global styles & Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Icon-based nav header
│   │   ├── Footer.tsx          # Icon-based footer
│   │   └── Layout.tsx          # Master layout wrapper
│   ├── ui/                     # ShadCN components
│   ├── Section.tsx             # Reusable page section
│   ├── ImageGallery.tsx        # Lightbox gallery
│   ├── ProjectCard.tsx         # Portfolio project card
│   └── GalleryGrid.tsx         # Gallery thumbnail grid
├── pages/
│   ├── Home.tsx                # Home page with hero
│   ├── Misc.tsx                # Miscellaneous links
│   ├── galleries/              # 8 gallery pages
│   ├── articles/               # 3 article pages
│   ├── prototheism/            # 10 prototheism pages
│   ├── llm-comics/             # LLM Dashboard + components + data
│   └── glitch/                 # Glitch dialog system + tenet routes
└── lib/utils.ts                # Utility functions

public/images/
├── shared/                     # Logos, avatars, backgrounds
├── galleries/                  # Gallery images by collection
├── articles/                   # Article images
├── prototheism/                # Tenet hero images & banners
└── llm-comics/                 # 62 AI model images (5 models)
```

## Routes
- `/` - Home
- `/misc` - Miscellaneous
- `/ai-psychedelia` - AI Psychedelia hub
- `/ai-psychedelia/magnific` - Magnific gallery
- `/ai-psychedelia/mjv4` - MJ-V4 Initial gallery
- `/ai-psychedelia/mjv4-improved` - MJ-V4 Improved gallery
- `/ai-psychedelia/mjv5` - MJ-V5 gallery
- `/ai-psychedelia/mjv52` - MJ-V5.2 gallery
- `/ai-psychedelia/stylegan2` - StyleGAN2 page
- `/ai-psychedelia/stylegan3` - StyleGAN3 gallery
- `/deeper-learning` - Deeper Learning book
- `/dmt-field-guide` - DMT Field Guide book
- `/mckenna-syndrome` - McKenna Syndrome article
- `/llm-comics` - LLM Self-Models Dashboard
- `/prototheism` - Prototheism main hub
- `/prototheism/creation` through `/prototheism/suffering` - 9 tenet pages
- `/glitch` - Glitch dialog system (interactive dialogue tree with multiple exit paths)
- `/glitch/{tenet}` - Tenet pages accessed via glitch (hides back navigation)

---

## Task Tracker

### How to Use This Tracker
1. **Status Legend**:
   - `[ ]` = Not started
   - `[~]` = In progress
   - `[x]` = Complete

2. **Maintenance Rules**:
   - Update task status immediately when starting or completing work
   - Add new tasks as they're discovered
   - Keep "Current Status" section updated after each work session
   - Note any blockers or decisions made
   - Update this task tracker as needed.

---

### Phase 1: Project Setup
- [x] Initialize Vite + React + TypeScript project
- [x] Install and configure Tailwind CSS
- [x] Install and configure ShadCN/UI
- [x] Set up React Router
- [x] Create base folder structure (components, pages, assets)
- [x] Copy image assets from `old site/` to `public/`

### Phase 2: Core Layout & Components
- [x] Analyze old site HTML for exact styling/colors
- [x] Create global styles (colors, fonts, spacing)
- [x] Build Header/Navigation component
- [x] Build Footer component
- [x] Create reusable Section component
- [x] Create ProjectCard component
- [x] Create ImageGallery component

### Phase 3: Pages
- [x] Home page
- [x] Misc page (with links to sub-pages)
- [x] Gallery pages (AI Psychedelia, Magnific, MJ-V4, MJ-V5, StyleGAN3, etc.)
- [x] Article pages (Deeper Learning, McKenna Syndrome, DMT Field Guide)
- [x] Prototheism section (main + 9 sub-pages)
- [x] LLM Comics Dashboard (5 AI models with bios, traits, comic images, metrics)

### Phase 4: Polish & Verification
- [x] All pages render without errors
- [x] Navigation works correctly
- [x] Images load properly
- [x] Responsive design works
- [x] Build completes successfully
- [x] Dark background images on all sections (matching old site)
- [x] Section gradient fades (top/bottom 20% fade to black)
- [x] Footer with background image
- [x] Transparent header with white text
- [x] Prototheism banner on home page
- [x] Prototheism tenet pages have hero images (non-circular)
- [x] Main Prototheism page images are natural shape (not circular)
- [x] Prototheism main page has Etymology and Source sections
- [x] McKenna Syndrome banner on all Prototheism pages
- [x] All tenet page content matches old site exactly

### Phase 5: Content Parity Fixes (from 2026-01-26 audit)

**Pages verified COMPLETE (10):**
- [x] Miscellaneous
- [x] MJ-V5.2
- [x] McKenna Syndrome
- [x] Death (tenet)
- [x] God (tenet)
- [x] Identity (tenet)
- [x] Morality (tenet)
- [x] Purpose (tenet)
- [x] Reverence (tenet)
- [x] Suffering (tenet)

**Pages with missing content (11) - ALL FIXED:**
- [x] Home: Change "/r/Replications" to "/r/Replications Subreddit"
- [x] AI Psychedelia: MJ-V4 improved already in hub gallery grid (was false positive)
- [x] Magnific: Add YouTube video embed (ID: 626uwO113pQ), date (~April 2024) - images were complete
- [x] MJ-V4 Improved: Add date (~January 2023) - images were complete (42 gallery images, others were UI)
- [x] MJ-V4 Initial: Add date stamp (~December 2022)
- [x] MJ-V5: Add date stamp (~March 2023)
- [x] StyleGAN3: (pagination links - skipped, optional UX enhancement)
- [x] Deeper Learning: Fix Amazon link to eBook edition (B0CQL5HS6M)
- [x] Prototheism Main: Convert 2 GitHub placeholder texts to actual hyperlinks
- [x] Creation (tenet): Add missing phrase "However, this scientific explanation is not spiritually satisfying on its own, so"
- [x] Faith (tenet): Add missing opening paragraph defining faith

### Phase 6: Second Content Audit (2026-01-26)

**Pages verified COMPLETE (17):**
- [x] Home
- [x] Miscellaneous
- [x] AI Psychedelia
- [x] Magnific
- [x] MJ-V4 Improved
- [x] MJ-V4 Initial
- [x] MJ-V5
- [x] Deeper Learning
- [x] Prototheism Main
- [x] Creation (tenet)
- [x] Faith (tenet)
- [x] God (tenet)
- [x] Identity (tenet)
- [x] Morality (tenet)
- [x] Purpose (tenet)
- [x] Reverence (tenet)
- [x] Suffering (tenet)

**Pages with missing content (4) - ALL FIXED:**
- [x] Death (tenet): HIGH - Added introductory paragraph defining death and discussing time structure
- [x] MJ-V5.2: LOW - Added date stamp "~November 2023"
- [x] StyleGAN3: MEDIUM - Fixed YouTube video ID to `d6gofPAru34`
- [x] McKenna Syndrome: MEDIUM - Added back arrow image, McKenna Syndrome banner, and footer icon link

**Cannot verify (1):**
- StyleGAN2: No old site HTML file exists in export - cannot compare

---

## Current Status

**Last Updated**: 2026-01-30

**Current Phase**: Phase 7 - New Features & Enhancements

**Notes**: Squarespace rebuild is complete. Now adding new content and features beyond the original site.

**Key Features Implemented:**
- Dark psychedelic background images on all sections with 70% overlay
- Gradient fades at top (80% black) and bottom (80-100% black) of sections
- Footer with background image and 85% overlay
- Icon-based navigation (tabler icons: home, spiral, github) in header and footer
- Full-width avatar on home page hero with animated floating eyecon overlay
- Prototheism banner linking to /prototheism
- Accent purple color (#a855f7) for titles and links

**Pages (26 total):**
- Home page (hero with animated eyecon, MY WORK, PROJECTS, COLLABORATORS + Prototheism banner)
- Misc page (4 card links)
- 8 Gallery pages (AI Psychedelia hub, Magnific, MJ-V4 Initial/Improved, MJ-V5, MJ-V5.2, StyleGAN2, StyleGAN3)
- 3 Article pages (Deeper Learning, McKenna Syndrome, DMT Field Guide)
- 10 Prototheism pages (main hub + 9 tenets)
- 1 Dashboard page (LLM Comics - AI model self-concepts)
- 1 Interactive page (Glitch Dialog - cryptic dialogue tree with 10 exit destinations)

**Glitch Dialog System (`/glitch`):**
Interactive dialogue tree with cryptic messages, corruption effects, and multiple exit destinations:
- `exit_llm` → `/llm-comics` (decode path: layer1→5 → ENTER)
- `exit_psychedelia` → `/ai-psychedelia` (from abyss → "SEE")
- `exit_faerun` → PDF (rare alchemy symbol `⚗◊⚗` at converge1)
- `exit_dmt_guide` → `/dmt-field-guide` (from void_deep → "GREET")
- `exit_deeper_learning` → `/deeper-learning` (from static → "LEARN")
- `exit_github` → `github.com/josikinzz` (from grid → "SOURCE")
- `exit_wikipedia` → `en.wikipedia.org/wiki/Josie_Kins` (from aware_1 → "RECORD")
- `exit_mckenna` → `/mckenna-syndrome` (from chaos_1 → "DIAGNOSE")
- `exit_standard` → `/` (most common paths)
- `exit_tenet_*` → `/glitch/{tenet}` (streak-based routing)

**Recent Updates (2026-01-28 to 2026-01-30):**
- Added Glitch Dialog system (/glitch) - interactive dialogue tree with:
  - Cryptic messages with corruption effects (none, light, heavy, maximum)
  - Hidden text reveals on hover
  - 10 exit destinations linking to various site pages and external URLs
  - Streak-based tenet routing for prototheism pages
- Added LLM Comics Dashboard (/llm-comics) - comprehensive page with 5 AI models:
  - ChatGPT 4o, DeepSeek R1, Gemini 2.5 Pro, Claude 3.7, Grok 3
  - Model bios, personality traits, comic image galleries, metrics tables
  - ~4227 lines of components and data
  - 62 image assets
- Added DMT Field Guide page (/dmt-field-guide) with 8 book page images
- Refactored header/footer to use icon-based navigation (tabler icons via @iconify/react)
- Added animated floating eyecon overlay to home hero section
- Fixed Safari positioning bug for floating animation (uses calc() offsets)
- Removed unused CSS variables for cleaner build

**Prototheism Content Updates (2026-01-26):**
- Added large hero images to all 9 tenet pages (Creation, Death, Faith, God, Identity, Morality, Purpose, Reverence, Suffering)
- Removed circular cropping from main Prototheism page (logo and tenet images now natural shape)
- Added Etymology and Source sections to main Prototheism page
- Added McKenna Syndrome banner (josie+and+emily+it+came+to+me+in+a+trip.png) to all 10 Prototheism pages
- Updated all tenet page content to match old site exactly

Build verified working: 1773 modules, ~17KB GlitchDialog chunk, 59KB CSS

**Blockers**: None

**Known Issues:**
- Bundle size warning: JS chunk is 660KB (exceeds 500KB recommendation) - consider code splitting

---

## Old Site Pages Reference
Located in `old site/` folder:
- JosieKins.xyz.html (Home)
- Miscellaneous. — JosieKins.xyz.html
- AI Psychedelia — JosieKins.xyz.html
- Magnific — JosieKins.xyz.html
- MJ-V4 (improved prompt) — JosieKins.xyz.html
- MJ-V4 (initial attempts) — JosieKins.xyz.html
- MJ-V5 — JosieKins.xyz.html
- MJ-V5.2 — JosieKins.xyz.html
- StyleGAN3 — JosieKins.xyz.html
- Deeper Learning With Psychedelics — JosieKins.xyz.html
- mckenna syndrome — JosieKins.xyz.html
- PROTOTHEISM (V0.1) — JosieKins.xyz.html
- CREATION, DEATH, FAITH, GOD, IDENTITY, MORALITY, PURPOSE, REVERENCE, SUFFERING — JosieKins.xyz.html

---

## Exit Conditions
Project is complete when:
- All tasks marked `[x]`
- `npm run dev` runs without errors
- `npm run build` succeeds
- Site visually matches old Squarespace design
- All pages functional and navigable

___

## Future Tasks
- [ ] Add clinical trial to the resume
- [ ] Add password protection for prototheism
- [ ] Add video reps to the AI psychedelia section
- [ ] Add interactive calculated timeline to the reverence section (% timeline visualization)
- [ ] Make it clearer in the resume that Josie doesn't support PsychonautWiki
- [x] Add LLM Comics Dashboard (DONE - /llm-comics with 5 AI models)
- [ ] Add D&D PDF page (psychoactive-substances-of-faerun.pdf exists in public/)
- [ ] Add t3.consensus
- [ ] Fix external links icon sizing in media reference cards
- [ ] Move McKenna Syndrome title out of its own section
- [ ] Code splitting to reduce bundle size (currently 660KB, recommend <500KB)

---

## D&D Homebrew Rebuild Strategy

**Goal:** Complete the last few pages of "The Psychoactive Substances of Faerûn" without rebuilding the entire 40-page PDF.

**Current State:**
- Final PDF exists at `public/psychoactive-substances-of-faerun.pdf` (40 pages, 9.6 MB)
- Source files: `HB-ThePsychoactiveSubstancesofFaerun-AnEncyclopedicGuide.txt`
- Chapter 7 additions: `homebrewery-additions.txt` / `psychoactive-substances-faerun-additions.md`

**Strategy:**
1. Write Homebrewery markup for only the new/updated last pages
2. Render those pages on homebrewery.naturalcrit.com
3. Export as PDF (just the new pages)
4. Use PDF tools to join new pages onto the existing PDF

**Why this approach:**
- Avoids image reassembly issues from full rebuild
- Preserves existing 40 pages with correct formatting
- Only need to focus on new content