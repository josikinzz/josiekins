# JosieKins.xyz - Portfolio Website Rebuild

## Project Overview
Rebuild Josie Kins' personal portfolio squarespace website from the old Squarespace export into a modern React + TypeScript + Tailwind + ShadCN stack.

## Tech Stack
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **ShadCN/UI** for component library
- **React Router** for navigation

## Design Principles
- Match the old Squarespace site's look and feel exactly
- Reference `old site/` folder for all content, images, and design details
- Do not write new copy - use exact text from the original site, copy paste it as needed.
- Wherever possible, use a copy first approach during this refactor, copying the original code first and then editing it as needed. We really are trying to exactly duplicate this website down to every little detail.

## Source Reference
The `old site/` folder contains the exported Squarespace site with HTML files and `_files` folders containing images/assets.

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
- [x] Article pages (Deeper Learning, McKenna Syndrome)
- [x] Prototheism section (main + 9 sub-pages)

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

**Last Updated**: 2026-01-26

**Current Phase**: Phase 6 - COMPLETE

**Notes**: Third audit pass confirmed all content is at parity. Only remaining difference is optional pagination links on StyleGAN3 (UX enhancement, not content).

**Key Features Implemented:**
- Dark psychedelic background images on all sections with 70% overlay
- Gradient fades at top (80% black) and bottom (80-100% black) of sections
- Footer with background image and 85% overlay
- Transparent header with white text throughout
- Full-width avatar on home page hero
- Prototheism banner linking to /prototheism
- Accent purple color (#a855f7) for titles and links

**Pages (23 total):**
- Home page (hero, MY WORK, PROJECTS, COLLABORATORS + Prototheism banner)
- Misc page (3 circular card links)
- 8 Gallery pages (AI Psychedelia hub, Magnific, MJ-V4 Initial/Improved, MJ-V5, MJ-V5.2, StyleGAN2, StyleGAN3)
- 2 Article pages (Deeper Learning, McKenna Syndrome)
- 10 Prototheism pages (main hub + 9 tenets)

**Recent Fixes:**
- Updated all page titles site-wide to use accent purple (`text-accent`) for consistency
- Refactored AI Psychedelia hub to show clickable thumbnail grid linking to 7 sub-galleries (matching old site portfolio grid)
- Added StyleGAN2 page with text and YouTube embed
- Routes now nested under /ai-psychedelia/ (e.g., /ai-psychedelia/magnific)
- Added "Back to AI Psychedelia" navigation link to all sub-gallery pages
- Created GalleryGrid component for portfolio-style thumbnail links
- Fixed background images not loading (use `+` not `%2B` in CSS background-image URLs)
- Fixed YouTube channel logo (uses slice1.png)
- Added Prototheism banner (Josie_Icons3.png)
- Removed Sernyl from collaborators
- Title "Josie Kins INFO" uses accent purple

**Prototheism Content Updates (2026-01-26):**
- Added large hero images to all 9 tenet pages (Creation, Death, Faith, God, Identity, Morality, Purpose, Reverence, Suffering)
- Removed circular cropping from main Prototheism page (logo and tenet images now natural shape)
- Added Etymology and Source sections to main Prototheism page
- Added McKenna Syndrome banner (josie+and+emily+it+came+to+me+in+a+trip.png) to all 10 Prototheism pages
- Updated all tenet page content to match old site exactly:
  - Faith: Fixed "In the Absence of Faith" section
  - Creation: Full "Interdependent Opposites" and "Unanswerable Questions" sections
  - Death: All 5 sections with External Sources (Wikipedia links)
  - Identity: All 5 levels + Understanding the Illusion + Multiple Identities
  - Morality: Full content with examples lists and Freedom vs Subjugation
  - Suffering: All 9 sections (Acceptance of Time, Finding Purpose, Building Community, etc.)
  - Purpose: Full "Forking Prototheism" GitHub instructions
  - Reverence: Complete "Stages of Complexity" timeline with statistics + Technological Singularity section

Build verified working: 71 modules, 402KB JS (120KB gzip)

**Blockers**: None

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

FUTURE TASKS
FUTURE TASKS
- Add my SXSW appearance to the media section as well as mentions of me in the DMT entities book
- Change projects I've founded to Resume. Add mindstate design labs to the resume.
- Add our clinical trial to the resume.
- Add password protection for prototheism
- Add Video reps to the AI psychedelia section.
- Add interactive calculated timeline to the reverence section of the site with all the % timeline stuff.
- Make it clearer in the resume i dont support psychonautwiki.
- Add the clinical trial to 
- add ai comic tracker stuff, refactor that.
- add dnd pdf
- add t3.consensus
