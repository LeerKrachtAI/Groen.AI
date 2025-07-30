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

### 1.3 Layout

- **`.luxury-container`**: `max-width: 1280px` met responsive padding.
- **Sectie Padding**: `padding-top: 6rem`, `padding-bottom: 6rem`.

---

## 2. Core Components

### 2.1 Liquid Glass

De kern van het design. Gedefinieerd met de `.liquid-glass` utility class. Deze vervangt de vorige `glass-primary` en `glass-secondary` klassen.

- **`.liquid-glass`**:
  - **Achtergrond**: Gebruikt `color-mix` voor een gelaagd effect en een `rgba` met variabele opacity (`--glass-opacity`).
  - **Backdrop Filter**: Past `backdrop-filter: blur(var(--blur-base)) saturate(150%)` toe, met een verhoogde blur op hover.
  - **Border & Shadow**: Maakt gebruik van een multi-layer border en `inset` box-shadow voor extra diepte.
  - **Fallback**: Gebruikt een solide achtergrondkleur als `backdrop-filter` niet wordt ondersteund.

### 2.2 Premium Shadows

Een set van utility classes voor gelaagde, realistische schaduwen.

- **`.luxury-shadow-sm`**: Voor subtiele diepte op kleinere elementen.
- **`.luxury-shadow-lg`**: Voor een meer uitgesproken diepte-effect op grotere containers.
- **`.accent-glow`**: Een gekleurde schaduw die de accentkleur gebruikt voor een "glow" effect, ideaal voor buttons en actieve elementen.

### 2.3 Knoppen

- **`.btn-primary`**: Belangrijkste call-to-actions, maakt gebruik van `--accent-gradient` en `.accent-glow` op hover.
- **`.btn-secondary`**: Secundaire acties, maakt gebruik van `.liquid-glass` styling.

---

## 3. Animaties

- **Scroll Animaties**: Geïmplementeerd met **GSAP & ScrollTrigger** voor performante en complexe-timeline-gebaseerde animaties, zoals te zien in de `Process` sectie.
- **UI Animaties**: **Framer Motion** wordt gebruikt voor state-based animaties, zoals hover-effecten en het openen/sluiten van elementen.
- **Animatie Curves**:
  - `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
  - `--ease-premium: cubic-bezier(0.16, 1, 0.3, 1)`

---

## 4. Geavanceerde Interactie Patronen

### 4.1 Sticky Stacked Cards
- **Beschrijving:** Een scroll-gestuurd effect waarbij een serie kaarten als een stapel wordt gepresenteerd. Bij het scrollen wordt de bovenste kaart van de stapel 'actief' en beweegt naar een centrale positie, terwijl de rest van de stapel subtiel mee-animeert.
- **Implementatie:** Vereist een `sticky` container en het gebruik van `framer-motion`'s `useScroll` en `useTransform` hooks om de `x`, `y`, `scale` en `opacity` van de kaarten te manipuleren op basis van de scroll-voortgang.
- **Status:** In ontwikkeling. De huidige implementatie in `ChaosToClarity.tsx` is nog niet correct.

---
*Dit document wordt bijgewerkt naarmate het design system evolueert.*
