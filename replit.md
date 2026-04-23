# Dra. Lore López - Luxury Medical Aesthetic Website

## Overview
Ultra-premium luxury medical brand website for "Dra. Lore López", a specialist in advanced aesthetic medicine, facial rejuvenation, surgery, and laser treatments. Built with React, Vite, TailwindCSS, and Framer Motion with a light-luxury editorial aesthetic. Full multi-page site with bilingual support.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion
- **Backend**: Express (minimal, serves static content)
- **No database required** - fully static/embedded content
- **Bilingual**: Spanish (default) / English with custom i18n context

## Brand Identity
- **Brand**: Dra. Lore López · Médico · Cirugía · Láser
- **Primary accent**: Muted Olive/Sage Green (HSL 82 28% 38%)
- **Background**: Warm Ivory (HSL 35 28% 97%)
- **Foreground**: Deep Warm Brown (HSL 25 22% 13%)
- **Dark sections**: Deep warm charcoal (HSL 25 20% 10%)
- **Luxury tokens**: --olive, --sage, --nude, --ivory, --champagne, --warm-stone in index.css
- **Font heading**: Playfair Display (serif) — editorial luxury
- **Font body**: Reddit Sans — clean premium sans-serif

## Pages
- **Home** (`/`) - Full luxury homepage with 8 sections
- **Consulta** (`/consulta`) - Premium consultation page with inquiry form
- **Tratamientos** (`/tratamientos`) - Treatments hub with full-width editorial rows
- **Treatment Detail** (`/tratamientos/:slug`) - Individual treatment pages for all 5 treatments
  - `/tratamientos/endolift`
  - `/tratamientos/toxina-botulinica`
  - `/tratamientos/primex`
  - `/tratamientos/acido-hialuronico`
  - `/tratamientos/bioestimulacion`
- **Doctora** (`/doctora`) - About the doctor storytelling page
- **Galería** (`/galeria`) - Editorial masonry gallery with filter tabs
- **Pacientes Internacionales** (`/pacientes-internacionales`) - International patients / medical tourism

## Navigation
- Navbar: All pages listed + "Agendar Consulta" CTA routes to `/consulta`
- Footer: Full navigation grid with all page links
- Mobile: Animated full-screen menu

## Key Features
- Language toggle (ES/EN) persisted to localStorage, Spanish default
- Scroll-triggered reveal animations with Framer Motion useInView
- Fixed navbar: transparent on scroll-top, ivory/light when scrolled
- Premium hover states on all interactive elements
- Cinematic dark hero sections on every page
- Gallery with category filtering (All / Results / Clinic / Doctor)
- Contact/inquiry forms on Consulta and Pacientes Internacionales pages
- Individual treatment detail pages with candidate profile, 4-step process, benefits

## File Structure
- `client/src/i18n/translations/es.json` - Spanish translations (all pages)
- `client/src/i18n/translations/en.json` - English translations (all pages, type source of truth)
- `client/src/layout/navbar.tsx` - Fixed luxury navbar with all page links
- `client/src/layout/footer.tsx` - Dark footer with full navigation grid
- `client/src/layout/base-layout.tsx` - Base layout wrapper
- `client/src/pages/Home/index.tsx` - Full luxury homepage
- `client/src/pages/Consulta/index.tsx` - Premium consultation page
- `client/src/pages/Tratamientos/index.tsx` - Treatments hub
- `client/src/pages/Tratamientos/detail.tsx` - Treatment detail (slug-based)
- `client/src/pages/Doctora/index.tsx` - About the doctor
- `client/src/pages/Galeria/index.tsx` - Gallery page
- `client/src/pages/PacientesInternacionales/index.tsx` - International patients
- `client/src/index.css` - Design system: luxury palette, typography, utilities
- `client/src/App.tsx` - Routing with all 7 routes + detail slug route

## Development
- `npm run dev` starts both Express server and Vite dev server on port 5000
- No external APIs or secrets required
- Contact/booking links point to WhatsApp/social (configurable)
