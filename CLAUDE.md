# CLAUDE.md — Stella Pham Portfolio

Project instructions and brand guidelines for Claude Code.

---

## Project Overview

Personal portfolio website for **Stella Pham** (Phạm Thị Thu Phương).
Role: Growth & Product Marketing / Product Growth & Go-to-Market Executive.

**Tech stack:** Pure HTML + CSS + vanilla JS. No framework, no build tool.
- `index.html` — single-page app, all sections
- `css/style.css` — all styles, single file
- `js/main.js` — i18n (VI/EN) + scroll/animation logic
- `assets/` — images (avatar2.png is the active LinkedIn photo)
- `projects/` — individual project case study pages

---

## Brand Guidelines

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--yellow` | `#FFC857` | Primary accent, name highlight, CTAs, tags |
| `--magenta` | `#D10090` | Secondary accent, gradient partner |
| `--navy` | `#1E2A78` | Tertiary accent, frames, shapes |
| `--white` | `#FCFCFF` | Light section backgrounds |
| `--black` | `#1B1B1B` | Main dark background, body text on light |

**Default page theme:** Dark (`--bg: #1B1B1B`).
**Light sections:** About section uses `--white` background with dark text.

### Typography

| Role | Font | Weights |
|------|------|---------|
| Primary (headings, tags, logo) | **Sora** | 400, 500, 600, 700, 800 |
| Secondary (body, UI text) | **Manrope** | 400, 500, 600, 700, 800 |

- Hero name (`Stella Pham`): `clamp(3rem, 7vw, 5.2rem)`, weight 800, color `--yellow`
- Section titles: `clamp(1.7rem, 3.5vw, 2.4rem)`, weight 800
- Tags/labels: `0.7–0.78rem`, weight 700, `letter-spacing: 0.08–0.12em`, `text-transform: uppercase`

### UI Tokens

```css
--radius:    4px   /* default border-radius */
--radius-lg: 8px
--radius-sm: 3px
--transition: 0.22s cubic-bezier(0.4,0,0.2,1)
--shadow:    0 8px 40px rgba(0,0,0,0.5)
```

### Component Patterns

**Section tag** (e.g. "Về tôi", "Kỹ năng"):
- Yellow on dark sections: yellow text, `rgba(255,200,87,0.1)` bg, `rgba(255,200,87,0.25)` border
- Navy on light sections (About): navy text, `rgba(30,42,120,0.08)` bg, `rgba(30,42,120,0.25)` border

**Section decorations (`.sec-deco`):**
- Absolute-positioned outline SVG icons, `opacity: 0.07`
- Color: `--yellow` on dark sections, `--navy` on light sections
- All sections use `class="has-deco"` with `position: relative; overflow: hidden`

**Background shapes (e.g. About section):**
- Solid filled divs with brand colors, `opacity: 0.3`, `z-index: 0`
- Content always sits above at `z-index: 1`

**Buttons:**
- `.btn-primary`: yellow bg, black text, hover lifts with box-shadow
- `.btn-secondary`: transparent, yellow border/text

**Scrolling marquee banner:**
- Yellow background, dark uppercase text, `font: Sora 700`
- Lives between hero and about sections

---

## Layout Conventions

- Max content width: `1140px` (`.container`)
- Section padding: `100px 0` desktop, reduced on mobile
- Hero: 2-column grid (`1fr 400px`), full viewport height
- Skills: 3-column card grid, tools card spans full width (`grid-column: 1 / -1`)
- About: single column, `max-width: 720px`

---

## i18n

Bilingual VI/EN via `js/main.js`. Language stored in `localStorage('lang')`.
All translatable text elements have an `id` (e.g. `#hero-name`, `#about-p1`).
Hero tag (`Growth & Product Marketing`) is static — not translated.

---

## Animations

- `floatY` — gentle vertical float (shapes, rings)
- `floatYRot`, `floatYRot2` — float + rotate (decorative shapes)
- `floatChip` — for chat bubble chips
- `tagGlow` — subtle glow pulse on hero tag (3s infinite)
- `marquee` — horizontal scroll for banner (`translateX 0 → -50%`, duplicated content)
- `@keyframes ticker` — same pattern, 20s linear infinite

---

## Do / Don't

- **Do** keep all styles in `css/style.css` (single file, no splitting)
- **Do** use CSS custom properties (brand tokens) — never hardcode brand colors
- **Do** add `class="has-deco"` + 2 SVG deco icons when creating new sections
- **Don't** introduce JS frameworks or build tools
- **Don't** use emoji in UI unless explicitly requested
- **Don't** add new font families — only Sora + Manrope
