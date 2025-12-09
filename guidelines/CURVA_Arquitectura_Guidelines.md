# CURVA Arquitectura — Web Design & Development Guidelines

## Brand Identity

**Studio Name:** CURVA Arquitectura  
**Positioning:** Contemporary architecture studio defined by fluid forms, precision engineering, and timeless design  
**Core Values:** Innovation through curves, sustainable elegance, spatial poetry

---

## Design System

### Color Palette

```css
:root {
  /* Primary Colors */
  --white: #ffffff;
  --carbon-black: #1d1d1b;
  --blue-bell: #4699d4;
  
  /* Extended Palette */
  --gray-100: #fafafa;
  --gray-200: #f5f5f5;
  --gray-300: #e5e5e5;
  --gray-400: #a3a3a3;
  --gray-500: #737373;
  
  /* Semantic */
  --background: var(--white);
  --foreground: var(--carbon-black);
  --accent: var(--blue-bell);
  --muted: var(--gray-400);
}
```

**Usage Rules:**
- Background: Always white (`#ffffff`)
- Text: Carbon black (`#1d1d1b`) for all body and heading text
- Accent Blue: Use **sparingly** — only for:
  - One CTA button per page
  - Hover states on navigation
  - Active/selected states
  - Small decorative details (thin lines, icons)
- Never use blue for large areas, backgrounds, or multiple elements simultaneously

### Typography

**Font Family:** Kanit (Google Fonts)

```css
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap');

/* Typography Scale */
:root {
  --font-family: 'Kanit', sans-serif;
  
  /* Display */
  --text-display: clamp(3rem, 8vw, 7rem);
  --text-h1: clamp(2.5rem, 5vw, 4.5rem);
  --text-h2: clamp(2rem, 4vw, 3rem);
  --text-h3: clamp(1.5rem, 3vw, 2rem);
  --text-h4: clamp(1.25rem, 2vw, 1.5rem);
  
  /* Body */
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  
  /* Font Weights */
  --font-extralight: 200;
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

**Typography Guidelines:**
- Headlines: Kanit Light (300) or Regular (400), tight letter-spacing
- Body Text: Kanit Light (300), normal letter-spacing, relaxed line-height
- Navigation: Kanit Medium (500), wide letter-spacing, uppercase
- Captions/Labels: Kanit Regular (400), wide letter-spacing

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
  
  /* Section Padding */
  --section-padding-y: clamp(4rem, 10vw, 8rem);
  --container-padding-x: clamp(1.5rem, 5vw, 4rem);
  --container-max-width: 1400px;
}
```

---

## Visual Language

### Logo Concept

The CURVA logo should embody the studio's philosophy of fluid, curved architecture. Suggested approach:

```
Design Direction:
- Abstract geometric mark featuring a curved/arc element
- Clean wordmark "CURVA" in Kanit Light
- The mark can be a stylized "C" with architectural curves
- Or an abstract arc/wave representing spatial flow

Variations needed:
- Full logo (mark + wordmark)
- Logomark only
- Wordmark only
- Horizontal and stacked versions
```

### Photography Style

- High-contrast black and white architectural photography
- Emphasis on geometric forms, shadows, and light
- Minimal color — only for accent moments
- Focus on: concrete textures, clean lines, curved forms, spatial depth
- Avoid: oversaturated colors, busy compositions, people as focus

### Iconography

- Line icons only, 1.5px stroke weight
- Geometric, architectural feel
- Match carbon black color
- Consistent 24x24px base size

---

## Component Guidelines

### Navigation

```
Structure:
- Fixed header, white background with subtle shadow on scroll
- Logo left, nav items right
- Items: Inicio, Proyectos, Nosotros, Servicios, Contacto
- Hover: Blue underline animation (left to right)
- Mobile: Full-screen overlay menu

Styling:
- Height: 80px (desktop), 64px (mobile)
- Font: Kanit Medium, 14px, uppercase, letter-spacing: 0.1em
- Active state: Blue color text
```

### Hero Section

```
Layout:
- Full viewport height
- Large architectural image as background (or video)
- Overlay gradient from bottom (for text readability)
- Studio tagline in display typography
- Subtle scroll indicator at bottom

Content example:
"Diseñamos espacios que inspiran"
or
"Arquitectura en movimiento"
```

### Project Cards

```
Structure:
- Aspect ratio: 4:3 or 3:4 (consistent grid)
- Image with subtle hover zoom effect
- Project name appears on hover (slide up)
- Category label in caption style

Grid:
- 3 columns (desktop)
- 2 columns (tablet)
- 1 column (mobile)
- Gap: 24px
```

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--blue-bell);
  color: var(--white);
  padding: 1rem 2rem;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--carbon-black);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--carbon-black);
  padding: 1rem 2rem;
  border: 1px solid var(--carbon-black);
  /* ... same typography ... */
}

.btn-secondary:hover {
  background: var(--carbon-black);
  color: var(--white);
}
```

### Footer

```
Structure:
- Dark footer (carbon black background, white text)
- 4 columns: Logo/description, Navigation, Services, Contact
- Social icons
- Copyright bar at bottom

Content:
- Address, phone, email
- Links to social media
- Privacy policy, terms
```

---

## Page Structures

### 1. Inicio (Home)

```
Sections:
1. Hero — Full-screen image/video + tagline
2. Introducción — Brief studio description (2-3 sentences)
3. Proyectos Destacados — 3-4 featured projects grid
4. Servicios — Icon + title + brief description (3 items)
5. CTA — "Conversemos sobre tu proyecto" + contact button
6. Footer
```

### 2. Proyectos (Projects)

```
Sections:
1. Page Header — "Nuestros Proyectos" + filter tabs
2. Project Grid — Filterable by category
3. Footer

Categories:
- Todos
- Residencial
- Comercial
- Público
- Interiores
```

### 3. Proyecto Individual (Project Detail)

```
Sections:
1. Hero Image — Full-width project photo
2. Project Info — Title, location, year, area, category
3. Description — 2-3 paragraphs about the project
4. Image Gallery — Full-width images with captions
5. Technical Details — Materials, team, etc.
6. Next/Previous Project Navigation
7. Footer
```

### 4. Nosotros (About)

```
Sections:
1. Page Header — "Sobre Nosotros"
2. Studio Story — Mission/vision text + studio photo
3. Team — Grid of team members (optional)
4. Values — 3-4 core values with icons
5. Awards/Recognition (if applicable)
6. Footer
```

### 5. Servicios (Services)

```
Sections:
1. Page Header — "Servicios"
2. Service Cards — Each service expanded:
   - Diseño Arquitectónico
   - Diseño de Interiores
   - Planificación Urbana
   - Consultoría
3. Process — How we work (timeline/steps)
4. CTA — Contact invitation
5. Footer
```

### 6. Contacto (Contact)

```
Sections:
1. Page Header — "Contacto"
2. Contact Info — Address, phone, email, map
3. Contact Form — Name, email, phone, message
4. Footer
```

---

## Next.js Implementation

### Project Structure

```
curva-arquitectura/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── proyectos/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── nosotros/
│   │   └── page.tsx
│   ├── servicios/
│   │   └── page.tsx
│   └── contacto/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── ServicesPreview.tsx
│   │   └── CTA.tsx
│   └── projects/
│       ├── ProjectGrid.tsx
│       ├── ProjectCard.tsx
│       └── ProjectGallery.tsx
├── lib/
│   ├── data.ts
│   └── utils.ts
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   └── fonts/
└── types/
    └── index.ts
```

### Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "@next/font": "^14.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#1d1d1b',
        'blue-bell': '#4699d4',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 8vw, 7rem)',
        'h1': 'clamp(2.5rem, 5vw, 4.5rem)',
        'h2': 'clamp(2rem, 4vw, 3rem)',
        'h3': 'clamp(1.5rem, 3vw, 2rem)',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wide': '0.05em',
        'wider': '0.1em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

### Global Styles

```css
/* styles/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --white: #ffffff;
  --carbon-black: #1d1d1b;
  --blue-bell: #4699d4;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  color: var(--carbon-black);
  background-color: var(--white);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Selection */
::selection {
  background: var(--blue-bell);
  color: var(--white);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--white);
}

::-webkit-scrollbar-thumb {
  background: var(--carbon-black);
}

/* Utility Classes */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
}

.section {
  padding: clamp(4rem, 10vw, 8rem) 0;
}

.text-accent {
  color: var(--blue-bell);
}

/* Navigation Link Hover Effect */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--blue-bell);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Image Hover Effect */
.image-zoom {
  overflow: hidden;
}

.image-zoom img {
  transition: transform 0.6s ease;
}

.image-zoom:hover img {
  transform: scale(1.05);
}
```

---

## Animation Guidelines

### Page Transitions

```javascript
// Use Framer Motion for page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const pageTransition = {
  duration: 0.4,
  ease: [0.43, 0.13, 0.23, 0.96]
};
```

### Scroll Animations

- Elements fade up as they enter viewport
- Stagger children elements (0.1s delay between each)
- Use intersection observer for performance

### Hover States

- Cards: Subtle lift (translateY: -4px) + shadow
- Images: Scale to 1.05 within container
- Links: Blue underline slides in from left
- Buttons: Background color transition (0.3s)

### Loading States

- Skeleton loaders for images
- Page loader: Minimal animated logo or progress bar

---

## Accessibility

- All images must have descriptive alt text
- Focus states visible on all interactive elements
- Color contrast meets WCAG AA standards
- Skip navigation link for keyboard users
- ARIA labels on icons and buttons
- Semantic HTML structure

---

## Performance

- Optimize images with Next.js Image component
- Lazy load images below the fold
- Minimize JavaScript bundle
- Use CSS animations over JS when possible
- Implement proper caching headers
- Target Core Web Vitals:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

---

## Content Copy (Español)

### Taglines

- "Diseñamos espacios que inspiran"
- "Arquitectura en movimiento"
- "Donde la forma encuentra la función"
- "Creamos espacios para vivir mejor"

### About Text Example

> CURVA Arquitectura es un estudio contemporáneo definido por la claridad, precisión y diseño atemporal. Nuestra identidad refleja nuestros valores fundamentales — estructuras limpias, conceptos sostenibles y soluciones innovadoras — a través de un lenguaje visual minimalista.
>
> Con un enfoque en la simplicidad y la fuerza, traducimos la arquitectura en espacios que perduran, asegurando coherencia entre la visión y la realidad construida.

### Services

1. **Diseño Arquitectónico** — Desde bocetos conceptuales hasta planos detallados, diseñamos espacios que unen función, estética y precisión.

2. **Diseño de Interiores** — Creamos interiores que complementan la arquitectura — funcionales, estéticos y adaptados a las necesidades individuales.

3. **Planificación General** — Coordinamos todas las disciplinas técnicas y gestionamos proyectos de manera integral.

---

## Summary

This design system establishes CURVA Arquitectura as a sophisticated, contemporary architecture studio through:

1. **Minimalist Color Use** — White dominates, black provides structure, blue accents sparingly
2. **Strong Typography** — Kanit font family creates distinctive, modern feel
3. **Generous White Space** — Content breathes, focus on quality over quantity
4. **High-Impact Photography** — Black and white architectural images as heroes
5. **Subtle Animations** — Refined interactions that don't distract
6. **Clear Hierarchy** — Content organized logically, easy to navigate

The result should feel: **Clean. Precise. Timeless. Innovative.**
