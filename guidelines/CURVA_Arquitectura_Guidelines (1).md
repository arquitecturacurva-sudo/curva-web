# CURVA Arquitectura — Web Design Guidelines

## Brand Identity

**Studio:** CURVA Arquitectura  
**Essence:** Arquitectura contemporánea definida por formas fluidas y diseño atemporal

---

## Assets

### Logo
- **Icon (Navbar/Footer):** `public/logos/curva-icono.png`

### Fotos de Proyectos
Ubicación: `public/photos/`

| Archivo | Uso |
|---------|-----|
| `FACHADA INTERIOR 1.png` | Hero slider + Proyecto 1 |
| `RENDER FINAL 2.png` | Hero slider + Proyecto 2 |
| `Escena 13.png` | Hero slider + Proyecto 3 |

---

## Colores

```css
:root {
  --white: #ffffff;
  --carbon-black: #1d1d1b;
  --blue-bell: #4699d4;
  --gray-400: #a3a3a3;
}
```

**Reglas:**
- Fondo: Siempre blanco
- Texto: Negro carbón
- Azul: **Muy poco** — solo para un CTA por página, hover en navegación, o detalles pequeños

---

## Tipografía

**Font:** Kanit (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap');
```

- **Headlines:** Kanit Light (300), letter-spacing: -0.02em
- **Body:** Kanit Light (300), line-height: 1.6
- **Nav/Buttons:** Kanit Medium (500), uppercase, letter-spacing: 0.1em

---

## Componentes

### Navegación
- Header fijo, fondo blanco
- **Logo:** `public/logos/curva-icono.png` (izquierda)
- Menú derecha
- Items: Inicio, Proyectos, Nosotros, Contacto
- Hover: Línea azul aparece debajo

### Botones

```css
/* Primary — Azul, usar solo 1 por página */
.btn-primary {
  background: var(--blue-bell);
  color: white;
  padding: 1rem 2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Secondary — Borde negro */
.btn-secondary {
  background: transparent;
  border: 1px solid var(--carbon-black);
  color: var(--carbon-black);
}
```

### Project Cards
- Imagen con zoom sutil en hover
- Nombre del proyecto aparece al hacer hover
- Grid: 3 columnas (desktop), 2 (tablet), 1 (mobile)

### Footer
- Fondo negro, texto blanco
- **Logo:** `public/logos/curva-icono.png`
- Navegación, contacto, redes sociales

---

## Páginas

### 1. Inicio
1. **Hero** — Slider/Carousel full-screen con las 3 imágenes + tagline ("Diseñamos espacios que inspiran")
   - Imagen 1: `public/photos/FACHADA INTERIOR 1.png`
   - Imagen 2: `public/photos/RENDER FINAL 2.png`
   - Imagen 3: `public/photos/Escena 13.png`
2. **Intro** — 2-3 líneas sobre el estudio
3. **Proyectos Destacados** — Grid de 3 proyectos (usando las mismas imágenes)
4. **CTA** — Invitación a contactar
5. **Footer**

### 2. Proyectos
1. **Header** — "Nuestros Proyectos"
2. **Grid** — Todos los proyectos con filtros opcionales
   - **Proyecto 1:** `public/photos/FACHADA INTERIOR 1.png`
   - **Proyecto 2:** `public/photos/RENDER FINAL 2.png`
   - **Proyecto 3:** `public/photos/Escena 13.png`
3. **Footer**

### 3. Proyecto Individual
1. **Hero Image** — Foto principal full-width
2. **Info** — Título, ubicación, año, área
3. **Descripción** — 2-3 párrafos
4. **Galería** — Imágenes del proyecto
5. **Nav** — Proyecto anterior/siguiente
6. **Footer**

### 4. Nosotros
1. **Header** — "Sobre Nosotros"
2. **Historia** — Texto + foto del estudio
3. **Equipo** — Grid de miembros (opcional)
4. **Footer**

### 5. Contacto
1. **Header** — "Contacto"
2. **Info** — Dirección, teléfono, email
3. **Formulario** — Nombre, email, mensaje
4. **Footer**

---

## Next.js — Estructura

```
curva-arquitectura/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Inicio
│   ├── proyectos/
│   │   ├── page.tsx          # Lista de proyectos
│   │   └── [slug]/page.tsx   # Proyecto individual
│   ├── nosotros/page.tsx
│   └── contacto/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── Button.tsx
├── styles/
│   └── globals.css
└── public/
    ├── logos/
    │   └── curva-icono.png      # Logo para navbar y footer
    └── photos/
        ├── FACHADA INTERIOR 1.png   # Proyecto 1
        ├── RENDER FINAL 2.png       # Proyecto 2
        └── Escena 13.png            # Proyecto 3
```

### Dependencias

```bash
npx create-next-app@latest curva-arquitectura --typescript --tailwind
npm install framer-motion lucide-react
```

### tailwind.config.js

```javascript
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#1d1d1b',
        'blue-bell': '#4699d4',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
}
```

### globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  color: #1d1d1b;
  background: #fff;
}

/* Nav link hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #4699d4;
  transition: width 0.3s;
}
.nav-link:hover::after { width: 100%; }

/* Image zoom on hover */
.image-zoom img {
  transition: transform 0.5s;
}
.image-zoom:hover img {
  transform: scale(1.05);
}
```

---

## Animaciones

- **Hover en cards:** zoom sutil en imagen + sombra
- **Hover en links:** línea azul aparece de izquierda a derecha
- **Scroll:** elementos aparecen con fade-up al entrar en viewport
- Usar Framer Motion para transiciones de página

---

## Copy de Ejemplo

**Tagline:** "Diseñamos espacios que inspiran"

**Sobre Nosotros:**
> CURVA Arquitectura es un estudio contemporáneo definido por la claridad, precisión y diseño atemporal. Traducimos la arquitectura en espacios que perduran.

---

## Resumen

El diseño debe sentirse: **Limpio. Preciso. Atemporal.**

- Blanco domina, negro da estructura, azul solo como acento mínimo
- Kanit crea una tipografía distintiva y moderna
- Mucho espacio en blanco
- Fotografía arquitectónica de alto impacto
- Animaciones sutiles que no distraen
