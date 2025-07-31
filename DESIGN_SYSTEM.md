# Groen.AI Design System v3.0: Liquid Glass

Dit document definieert de visuele taal, componenten en design principes voor de Groen.AI website, gebaseerd op een Apple-inspired "Liquid Glass" design.

---

## 1. Fundament

### 1.1 Kleurenschema & Thema's

Het systeem ondersteunt een light en dark mode via CSS custom properties, beheerd door `ThemeProvider.tsx`.

- **Light Mode (Default)**:
  - `--bg-primary: #F5F5F7`
  - `--bg-secondary: #FFFFFF`
  - `--text-primary: #1D1D1F`
  - `--text-secondary: #424245`
  - `--text-muted: #86868B`

- **Dark Mode (`[data-theme='dark']`)**:
  - `--bg-primary: #000000`
  - `--bg-secondary: #1D1D1F`
  - `--text-primary: #F5F5F7`
  - `--text-secondary: #A1A1A6`
  - `--text-muted: #636366`

- **Accenten**:
  - `--accent-primary: #0D4F3C`
  - `--accent-secondary: #16A085`
  - `--accent-gradient: linear-gradient(135deg, #0D4F3C 0%, #16A085 100%)`

### 1.2 Typografie

- **Font Family**: `Inter`, sans-serif
- **`.text-gradient`**: Utility class die de `--accent-gradient` toepast op tekst.
- **Schaal (Hero)**:
  - `--text-hero: clamp(3rem, 8vw, 6rem)`
  - `--text-hero-sub: clamp(1.2rem, 3vw, 2rem)`

### 1.3 Layout

- **`.luxury-container`**: `max-width: 1280px` met responsive padding.
- **Sectie Padding**: `padding-top: 6rem`, `padding-bottom: 6rem`.

---

## 2. Core Components

### 2.1 Liquid Glass

De kern van het design. Gedefinieerd met de `.liquid-glass` utility class.

- **Variabelen**:
  - `--glass-blur-hero: 60px`
  - `--glass-opacity-hero: 0.85`
- **Styling**:
  - **Achtergrond**: Gebruikt `color-mix` voor een gelaagd effect en een `rgba` met variabele opacity (`--glass-opacity`).
  - **Backdrop Filter**: Past `backdrop-filter: blur(var(--blur-base)) saturate(150%)` toe, met een verhoogde blur op hover.
  - **Border & Shadow**: Maakt gebruik van een multi-layer border en `inset` box-shadow voor extra diepte.

### 2.2 Premium Shadows

Een set van utility classes voor gelaagde, realistische schaduwen.

- **`.luxury-shadow-sm`**, **`.luxury-shadow-lg`**, **`.accent-glow`**

### 2.3 Knoppen

- **`.btn-primary`**, **`.btn-secondary`**, **`.cta-primary`**, **`.cta-secondary`**

---

## 3. Animaties

- **Scroll Animaties**: GSAP & ScrollTrigger voor complexe timelines.
- **UI Animaties**: Framer Motion voor state-based animaties.
- **Animatie Curves**:
  - `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
  - `--ease-premium: cubic-bezier(0.16, 1, 0.3, 1)`

---

## 4. Geavanceerde Interactie Patronen

### 4.1 Sticky Scroll Sections
- **Beschrijving:** Een set van interactiepatronen waarbij een sectie voor een bepaalde duur (uitgedrukt in `vh`) 'sticky' aan de viewport blijft plakken. Binnen deze sticky periode wordt de scroll-voortgang (`progress` van 0 tot 1) gebruikt om animaties aan te sturen.
- **Implementatie:** Aangestuurd door de `useStickySection` hook, die de hoogte van de sectie dynamisch instelt en de scroll-voortgang berekent met de `useScrollProgress` hook.
- **Patronen:**
    - **Stacked Cards (`DubbeledrukSection`):** Kaarten worden onthuld en gestapeld op basis van de `progress`.
    - **Horizontal Scroll (`SolutionsSection`):** De `scrollLeft` van een container wordt gemanipuleerd op basis van `progress`.
    - **Timeline (`ProcessSection`):** De voortgang van een visuele timeline en de zichtbaarheid van stappen worden gesynchroniseerd met `progress`.
- **Status:** Geïmplementeerd.

---

## 5. 3D Spatial Effects (Hero Sectie)

### 5.1 Principe
Een scroll-driven animatie die gebruik maakt van CSS `perspective` en `animation-timeline: scroll()` om een 3D-diepte-effect te creëren. Elementen in een grid bewegen van `var(--z-near)` naar `var(--z-far)` op basis van de scrollpositie van de gebruiker.

### 5.2 CSS Variabelen
- `--perspective: 1000px`
- `--z-near: -1000px`
- `--z-far: 1000px`
- `--scroll-start: 0%`
- `--scroll-end: 100%`

### 5.3 Keyframes
- **`@keyframes spatial-zoom`**: Animeert `transform: translateZ()`, `opacity` en `filter: blur()` om de illusie van diepte en focus te wekken.

### 5.4 Implementatie
- Vereist een container met `min-height` (bv. `400vh`) en een `sticky` wrapper van `100vh`.
- De `animation-timeline` wordt gekoppeld aan `scroll(root block)`.
- Verschillende `animation-range` waarden worden toegepast op grid-items om het parallax-effect te versterken.
- Een `@supports (animation-timeline: scroll())` query wordt gebruikt om het effect alleen toe te passen in ondersteunde browsers.

---
*Dit document wordt bijgewerkt naarmate het design system evolueert.*