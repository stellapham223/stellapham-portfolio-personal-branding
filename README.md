# Stella Pham — Personal Portfolio

Personal portfolio website for Stella Pham (Phạm Thị Thu Phương), Growth & Product Marketing professional.

Live at: `index.html` (open locally or deploy as static site)

---

## About

A single-page portfolio showcasing skills, experience, and case studies. Built with vanilla HTML/CSS/JS — no framework, no build step, no dependencies beyond Google Fonts.

**Owner:** Phạm Thị Thu Phương (Stella Pham)
**Role:** Product Growth & Go-to-Market Executive @ Avada Group
**Contact:** stellapham.work@gmail.com
**LinkedIn:** [linkedin.com/in/stella-pham-growth](https://www.linkedin.com/in/stella-pham-growth/)

---

## Structure

```
portfolio/
├── index.html          # Main single-page site
├── css/
│   └── style.css       # All styles (brand tokens, layout, components, animations)
├── js/
│   └── main.js         # i18n (VI/EN), scroll animations, language toggle
├── assets/
│   └── avatar2.png     # LinkedIn profile photo (active)
├── projects/
│   ├── project-1.html  # Case study 1
│   ├── project-2.html  # Case study 2
│   └── project-3.html  # Case study 3
├── CLAUDE.md           # Brand guidelines & dev instructions for Claude Code
└── README.md           # This file
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport intro with name, bio, animated visual, chat bubbles |
| **Marquee Banner** | Scrolling ticker: Product Management · Growth & Marketing · Data & Analytics |
| **About** | White-background section with bio paragraphs and contact links |
| **Skills** | 3-column card grid: Product Management, Growth & Marketing, Data & Analytics, Tools & Platforms |
| **Experience** | Career timeline at Avada Group and Onesoft |
| **Projects** | Case study cards linking to detail pages |
| **Contact** | Email + LinkedIn CTA |

---

## Brand

| | |
|-|-|
| **Primary font** | Sora (headings, labels) |
| **Secondary font** | Manrope (body text) |
| **Yellow** | `#FFC857` — primary accent |
| **Magenta** | `#D10090` — secondary accent |
| **Navy** | `#1E2A78` — tertiary accent |
| **White** | `#FCFCFF` — light backgrounds |
| **Black** | `#1B1B1B` — dark background / body text |

Full brand guidelines: see [CLAUDE.md](./CLAUDE.md)

---

## Features

- **Bilingual (VI/EN)** — toggle in navbar, preference saved to localStorage
- **Responsive** — mobile-first breakpoints at 900px and 600px
- **Animations** — floating shapes, glow effects, scroll-triggered fade-ins, marquee banner
- **No dependencies** — no npm, no bundler, just open `index.html` in a browser

---

## Running Locally

Simply open `index.html` in any browser. Or use the included helper:

```bash
start.bat   # Windows: starts a local server (if configured)
```

Alternatively with Python:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

---

## Development

See [CLAUDE.md](./CLAUDE.md) for full coding conventions, brand tokens, and component patterns used throughout the project.
