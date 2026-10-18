---
name: Organic Luxury Botanical
colors:
  surface: '#0b160c'
  surface-dim: '#0b160c'
  surface-bright: '#303c30'
  surface-container-lowest: '#061107'
  surface-container-low: '#131e14'
  surface-container: '#172218'
  surface-container-high: '#212d22'
  surface-container-highest: '#2c382c'
  on-surface: '#d9e6d5'
  on-surface-variant: '#c6c8b8'
  inverse-surface: '#d9e6d5'
  inverse-on-surface: '#283328'
  outline: '#909283'
  outline-variant: '#46483c'
  surface-tint: '#bcce85'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#d8eb9f'
  on-primary-container: '#5b6a2d'
  inverse-primary: '#556427'
  secondary: '#acd37c'
  on-secondary: '#1f3700'
  secondary-container: '#304f05'
  on-secondary-container: '#9bc16c'
  tertiary: '#ffffff'
  on-tertiary: '#103900'
  tertiary-container: '#b5f394'
  on-tertiary-container: '#3b7122'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8eb9f'
  primary-fixed-dim: '#bcce85'
  on-primary-fixed: '#161f00'
  on-primary-fixed-variant: '#3e4c11'
  secondary-fixed: '#c7ef95'
  secondary-fixed-dim: '#acd37c'
  on-secondary-fixed: '#102000'
  on-secondary-fixed-variant: '#304f05'
  tertiary-fixed: '#b5f394'
  tertiary-fixed-dim: '#9ad77b'
  on-tertiary-fixed: '#062100'
  on-tertiary-fixed-variant: '#1c5203'
  background: '#0b160c'
  on-background: '#d9e6d5'
  surface-variant: '#2c382c'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '300'
    lineHeight: 4.25rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 3rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.625rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.3125rem
    letterSpacing: 0.015em
  label-editorial:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.14em
  label-data:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.3125rem
  gutter-mobile: 0.8125rem
  margin: 3.375rem
  margin-mobile: 1.3125rem
  space-xs: 0.5rem
  space-sm: 0.8125rem
  space-md: 1.3125rem
  space-lg: 2.125rem
  space-xl: 3.375rem
---

## Brand & Style

This design system expresses an organic luxury aesthetic merged with the rigorous precision of scientific field research and the atmospheric depth of a cinematic natural history documentary. Designed for an audience of wildlife biologists, conservation patrons, field researchers, and eco-heritage travelers, the interface evokes reverence, ecological intimacy, and academic authority.

The visual style combines **Dark Botanical Glassmorphism** with **Scientific Editorial Architecture**:
- Heavy, deep jungle canvas foundations layered beneath frosted, crystalline botanical glass panels.
- Fine, microscopic botanical line weights, hairline dividers, and specimen-tag metadata reminiscent of taxonomic ledgers.
- Radiant bioluminescent highlights that direct scientific attention to critical metrics, radio-collar telemetry, and conservation indices without breaking the moody, nocturnal canopy immersion.
- Uncluttered whitespace calibrated through natural harmonic proportions, keeping high-density tracking data tranquil and effortlessly readable.

## Colors

The palette draws directly from the multilayered canopy of Ceylon's wet and dry zone forests, transitioning from deep understory soil to sunlight-pierced leaves.

### Palette Architecture
- **Main Canvas (`#0B160C`)**: The nocturnal forest floor. Serves as the global backdrop across all viewports to anchor high-contrast natural light.
- **Deep Forest Tier (`#17321A`)**: Structural container surface, base tint for frosted cards and backdrops.
- **Canopy Tiers (`#305D31` & `#487F2F`)**: Functional surfaces, secondary fills, telemetry path markers, and active state foundations.
- **Sage Green (`#88AD5B`)**: Primary structural border tint, inactive indicator glyphs, and secondary taxonomic tags.
- **Soft Lime (`#E2F5A8`)**: High-priority focal point. Used strictly for telemetry pings, live GPS coordinates, primary calls-to-action, key performance statistics, and focus halos.
- **Text Layers**: Primary reading text uses `#F5F7F0` for stark contrast; supporting notes use `#B7C5B0`; muted taxonomic annotations and coordinate markers use `#91A08A`.

### Glass & Overlay Specifications
- **Standard Glass Surface**: `rgba(23, 50, 26, 0.75)` with `backdrop-filter: blur(20px) saturate(140%)`.
- **Glass Border Hairline**: `1px solid rgba(136, 173, 91, 0.22)`.
- **Active / Focused Glass Border**: `1px solid rgba(226, 245, 168, 0.38)` supplemented by a soft outer aura of `0 0 16px rgba(226, 245, 168, 0.15)`.
- **Hairline Dividers**: `rgba(226, 245, 168, 0.12)`.

## Typography

The typography delivers the authoritative clarity of a high-end taxonomic monograph while ensuring rapid legibility across dense ecological metrics.

- **Golden Ratio Reading Rhythm**: Longform body copy enforces a strict `1.618` proportional line-height to ensure visual comfort against nocturnal dark surfaces.
- **Editorial Sub-headings & Monograph Tags**: Section categorizers, geographic quadrants, herd identifiers, and classification tags use `label-editorial` rendered in all-caps with generous kerning (`letter-spacing: 0.14em`).
- **Telemetry & Real-time Metrics**: Numerical readouts (GPS, body mass estimates, migratory distances) pair medium font weights with tabular numerals (`font-feature-settings: "tnum" 1`) to eliminate visual jitter during real-time tracking refreshes.

## Layout & Spacing

Spacing is disciplined by an organic Fibonacci sequence (`8px`, `13px`, `21px`, `34px`, `55px`), grounding the layout in the mathematical geometries of natural botanical growth.

### Grid Framework
- **Desktop (1024px and above)**: 12-column dynamic fluid grid bounded by a max container width of 1440px. Section outer padding utilizes `margin` (54px / `3.375rem`), with inter-column gaps set to `gutter` (21px / `1.3125rem`).
- **Tablet (768px – 1023px)**: 8-column layout with 21px gutters and 34px lateral margins. Split sidebars collapse into sticky overlay trays.
- **Mobile (Below 768px)**: 4-column layout with 13px (`0.8125rem`) gutters and 21px (`1.3125rem`) canvas margins. Dense telemetry matrices reflow from horizontally pinned rows into stacked, card-level swipe carousels.

Component vertical stacks and internal card paddings adhere strictly to Fibonacci steps: micro elements use `space-xs` (8px) and `space-sm` (13px); medium cards and section blocks use `space-md` (21px) and `space-lg` (34px); structural macro-separations deploy `space-xl` (55px).

## Elevation & Depth

Visual hierarchy abandons traditional drop shadows in favor of translucent botanical glass stratification, refraction borders, and bioluminescent depth cues.

### Layer Stack Architecture
1. **Base Tier (Ground Zero)**: The deep `#0B160C` canvas, occasionally underlaid with low-opacity (8-12%) topographic elevation vectors or high-resolution satellite imagery tinted monochrome forest green.
2. **Sub-surface Tiers (Containers, Field Tables)**: `#17321A` filled at 40% opacity, bordered by `rgba(136, 173, 91, 0.12)`.
3. **Glass Panel Tier (Active Cards, Overlays, Modal Sheets)**: Translucent fill of `rgba(23, 50, 26, 0.75)` paired with a physical backdrop filter of `blur(20px) saturate(140%)`. Outlined with a top-lit hairline border `1px solid rgba(136, 173, 91, 0.22)`.
4. **Interactive Focus & Telemetry Alerts**: Elevated above the glass tier through radiant luminous auras. Active states utilize an inner edge reflection of `inset 0 1px 1px rgba(226, 245, 168, 0.35)` combined with a diffuse environmental cast of `0 12px 32px rgba(11, 22, 12, 0.85)`.

## Shapes

Shapes mirror the curved margins of Ceylon flora. Angular edges are smoothed into continuous curvature to reflect natural forms rather than rigid computational boxes.

### Curvature Hierarchy
- **Micro UI (Badges, Specimen Identifiers, Tooltips)**: `8px` (`0.5rem`) radius.
- **Controls & Form Fields (Buttons, Inputs, Toggles)**: `13px` (`0.8125rem`) radius.
- **Panels & Telemetry Modules**: `21px` (`1.3125rem`) radius.
- **Hero Display Frames & Fullscreen Sheet Containers**: `34px` (`2.125rem`) radius.

Pill shapes are reserved strictly for active status pills and satellite GPS lock indicators (`border-radius: 9999px`).

## Components

### Buttons
- **Primary Action (Field Dispatch, Adopt, Secure Corridor)**: Pill or 13px rounded contour with a solid `#E2F5A8` surface, filled with `#0B160C` text in `font-weight: 600`. Hover triggers a bioluminescent outer diffusion: `box-shadow: 0 0 20px rgba(226, 245, 168, 0.4)`.
- **Secondary Action (View Ledger, Historical Range)**: Frosted glass fill (`rgba(23, 50, 26, 0.75)`), text in `#F5F7F0`, with `1px solid rgba(136, 173, 91, 0.22)`. On hover, border illuminates to `rgba(226, 245, 168, 0.38)` with text tinting to `#E2F5A8`.
- **Ghost / Specimen Filter**: Unfilled, `rgba(183, 197, 176, 0.8)` text, underlined by an active `rgba(226, 245, 168, 0.12)` hairline.

### Chips & Badges
- Built at 8px radius or full pill configuration.
- Taxonomy tags utilize `label-editorial` sizing. Background is `rgba(48, 93, 49, 0.35)` bound by a hairline border `rgba(136, 173, 91, 0.3)`. Text renders in `#B7C5B0`.
- Live collars and alerts prepend a pulsating 6px circular dot glowing in `#E2F5A8`.

### Input Fields & Search
- Inputs feature 13px rounded frames filled with `rgba(11, 22, 12, 0.6)` and framed with `1px solid rgba(136, 173, 91, 0.22)`.
- Caret and focus state glow in `#E2F5A8`. Placeholder text is set in `#91A08A`.
- Integrated micro-actions (clear button, coordinate lock switch) use 8px rounded touch boundaries.

### Checkboxes & Radio Buttons
- Checkbox components maintain an 8px curved silhouette; radio controls use circular contours.
- Unchecked: Inset background `rgba(23, 50, 26, 0.5)` with `1px solid rgba(136, 173, 91, 0.4)`.
- Checked: Fill becomes `#487F2F` bearing an `#E2F5A8` check icon with a `0 0 8px rgba(226, 245, 168, 0.3)` glow.

### Cards & Telemetry Dossiers
- Constructed on a 21px radius base using the **Glass Surface** token.
- Interior layout incorporates `space-md` (21px) padding.
- Multi-tier metric groups within cards are divided by `1px solid rgba(226, 245, 168, 0.12)`.
- Card headers pair uppercase monograph subtitles (`label-editorial`) in `#88AD5B` directly above bold specimen titles (`headline-sm`) in `#F5F7F0`.

### Specialized Domain Components
- **Telemetry HUD Strip**: A sticky glass capsule displaying live GPS coordinates, altitude, and herd velocity using tabular data typography.
- **Specimen Ledger Card**: A dual-faced glass panel containing biological profiles, tusker lineage history, and satellite tracking maps framed in 21px glass.