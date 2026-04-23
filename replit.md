# Dra. Lore López - Luxury Medical Aesthetic Website

## Overview
Ultra-premium luxury medical brand website for "Dra. Lore López", a specialist in advanced aesthetic medicine, facial rejuvenation, surgery, and laser treatments. Built with React, Framer Motion, and TailwindCSS with a light-luxury editorial aesthetic.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion
- **Backend**: Express (minimal, serves static content)
- **No database required** - fully static/embedded content
- **Bilingual**: Spanish (default) / English with custom i18n context

## Brand Identity
- **Brand**: Dra. Lore López · Médico · Cirugía · Láser
- **Primary accent**: Muted Olive/Sage Green (HSL 82 28% 38%) - `hsl(82, 28%, 38%)`
- **Background**: Warm Ivory (HSL 35 28% 97%)
- **Foreground**: Deep Warm Brown (HSL 25 22% 13%)
- **Dark sections**: Deep warm charcoal (HSL 25 20% 10%)
- **Accent tones**: Champagne beige, nude, muted sage green
- **Font heading**: Playfair Display (serif) — editorial luxury
- **Font body**: Reddit Sans — clean premium sans-serif
- Light mode (no dark class on html)
- Gradient text: olive-to-dark-green gradient

## Pages
- **Home** (`/`) - Full luxury homepage with all 8 sections

## Homepage Sections (in order)
1. **Hero** - Cinematic full-screen dark hero with editorial serif typography and quote card
2. **Trust & Authority** - 6-item credential grid (International Training, Certifications, Diagnosis, Preventive, Technology, Follow-up)
3. **Signature Treatments** - 5 treatment cards (Endolift, Toxina Botulínica, Primex, Ácido Hialurónico, Bioestimulación)
4. **About the Doctor** - Personal brand authority section with philosophy quote
5. **Results Philosophy** - 3-step medical process timeline (Evaluation → Protocol → Results)
6. **Testimonials** - 3 luxury social proof cards with star ratings
7. **Consultation Experience** - 4-step first consultation grid
8. **Final CTA** - Conversion section with stats (10+ years, 2000+ patients, 100% personalized)

## Key Features
- Language toggle (ES/EN) persisted to localStorage, Spanish default
- Scroll-triggered reveal animations with Framer Motion useInView
- Fixed navbar: transparent on scroll-top, ivory/light when scrolled
- Premium hover states on all interactive elements
- Staggered section animations with delay-based sequencing
- Mobile-responsive with animated hamburger menu
- Reduced motion support

## File Structure
- `client/src/i18n/translations/es.json` - Spanish translations (complete)
- `client/src/i18n/translations/en.json` - English translations (complete)
- `client/src/layout/navbar.tsx` - Fixed luxury navbar, adapts on scroll
- `client/src/layout/footer.tsx` - Dark footer with brand identity
- `client/src/layout/base-layout.tsx` - Base layout wrapper
- `client/src/pages/Home/index.tsx` - Full luxury homepage with all 8 sections
- `client/src/index.css` - Design system: luxury palette, typography, utilities

## Development
- `npm run dev` starts both Express server and Vite dev server on port 5000
- No external APIs or secrets required
- Contact/booking links point to WhatsApp/social (configurable)
