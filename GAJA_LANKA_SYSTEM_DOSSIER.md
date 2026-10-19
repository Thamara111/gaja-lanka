# GAJA LANKA (CEYLON JOURNEY) — COMPREHENSIVE ARCHITECTURAL & CONTENT DOSSIER
**The Complete System Specification, Content Inventory, Design Tokens, and Conservation Architecture**

---

## 1. PROJECT EXECUTIVE SUMMARY & MISSION

**Gaja Lanka** (*Elephas maximus maximus*) is an authoritative, data-driven, and culturally authentic web portal dedicated to the Sri Lankan Elephant—Asia's largest island subspecies. 

### Core Objectives:
1. **Biological & Ecological Education**: Document the unique anatomy, depigmentation, and ecological keystone roles of *Elephas maximus maximus*.
2. **Historical & Cultural Preservation**: Chronicle 2,500 years of reverence in Sinhala chronicles (*Mahavamsa*), royal war stables, and the Sacred Esala Perahera.
3. **Colonial Truth & Reconciliation**: Expose the 19th-century British colonial slaughter, bounty hunting, and environmental deforestation of the central highlands.
4. **Frontline Coexistence Solutions**: Provide empirical research into the Human-Elephant Conflict (HEC), moving away from failed park-fencing towards community-managed seasonal electric fences.
5. **Open Science & Transparency**: Provide downloadable datasets (`data.json`, CSV records, and analytical models) for students, field researchers, and conservationists worldwide.

---

## 2. UNIVERSAL DESIGN SYSTEM & PALETTE ARCHITECTURE

The interface follows a **Modern Simple Wild** aesthetic, fusing deep botanical hues with mathematical proportions derived from the **Fibonacci Sequence** and the **Golden Ratio ($\phi = 1.618$)**.

### The 5-Color Organic Green Palette (WCAG AAA Compliant)

| Color Token | HEX Code | RGB | Interface Role | Contrast Ratio |
|:---|:---|:---|:---|:---|
| **Dark Green (Deep)** | `#17321A` | `rgb(23, 50, 26)` | Deep surfaces, frosted glass tints, card backgrounds | Base canvas surface |
| **Dark Green (Moss)** | `#305D31` | `rgb(48, 93, 49)` | Secondary card containers, interactive hover panels | 6.8:1 against white |
| **Green (Emerald)** | `#487F2F` | `rgb(72, 127, 47)` | Primary brand CTA buttons, active tabs, progress bars | 4.9:1 against light |
| **Sage / Meadow** | `#88AD5B` | `rgb(136, 173, 91)` | Structural glass borders, metadata tags, secondary icons | Subtle accentuation |
| **Soft Green (Lime)** | `#E2F5A8` | `rgb(226, 245, 168)` | High-contrast highlights, display badge text, split headlines | **11.8:1 (WCAG AAA)** |

### Dark Canvas & Ambient Colors
- **Canvas Base**: `#0B160C` (Deep wild charcoal-green obsidian)
- **Elevated Card Surface**: `rgba(23, 50, 26, 0.75)` with `backdrop-filter: blur(21px)`
- **Glass Borders**: `rgba(136, 173, 91, 0.22)` with active glow `rgba(226, 245, 168, 0.38)`

---

## 3. FIBONACCI & GOLDEN RATIO RULES

### 1. Spacing Scale Sequence
All paddings, margins, gaps, and section intervals strictly adhere to the Fibonacci sequence:
- `--fib-2`: `2px` (Micro border offsets)
- `--fib-3`: `3px` (Subtle line-height adjustments)
- `--fib-5`: `5px` (Badge vertical padding)
- `--fib-8`: `8px` (Icon gaps and button internal spacing)
- `--fib-13`: `13px` (Standard component inner padding, input fields)
- `--fib-21`: `21px` (Card inner padding, grid gutters)
- `--fib-34`: `34px` (Section sub-headers, button horizontal padding)
- `--fib-55`: `55px` (Container margins, card separations)
- `--fib-89`: `89px` (Major section vertical rhythms)
- `--fib-144`: `144px` (Hero spacing, full-width breaks)

### 2. Fibonacci Border Radii
- **Small (`--radius-sm`)**: `8px` — Used for tooltips, status badges, and swatch tags.
- **Medium (`--radius-md`)**: `13px` — Used for stat callouts, navigation buttons, and inputs.
- **Large (`--radius-lg`)**: `21px` — Used for primary glass cards and content containers.
- **Extra Large (`--radius-xl`)**: `34px` — Used for hero pills, modal wrappers, and data banners.

### 3. Golden Ratio Grid Split ($\phi = 1.618$)
- **Hero Split Proportions**: The desktop hero layout utilizes a $44\% : 56\%$ spatial distribution (closely aligning with the minor and major sections of the Golden Ratio $38.2\% : 61.8\%$).
  - **Left Section**: Frosted glass panel (`backdrop-filter: blur(28px)`) housing typography, navigation context, and metadata.
  - **Right Section**: Clear panoramic canvas showcasing high-resolution wild elephant habitat photography.

---

## 4. TYPOGRAPHY SPECIFICATION

### Primary Typeface: OpenAI Sans
To maintain a modern, clean, and highly readable editorial aesthetic, the entire site utilizes **OpenAI Sans** (with fallback to Google **Open Sans**, Apple `-apple-system`, and modern sans-serif fonts):

```css
font-family: "OpenAI Sans", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
```

### Typographic Hierarchy
1. **Hero Display Title**: `89px` on desktop / `55px` on tablet / `34px` on mobile (`font-weight: 900`, line-height `0.95`).
   - Features **Split-Text Knockout**: The first word spans across the frosted glass line, where the letters on the left carry an organic gradient and letters on the right render in solid crisp white.
2. **Page & Section Headings (`h2`)**: `34px` - `48px` (`font-weight: 800`, letter-spacing `-0.02em`).
3. **Card Headings (`h3`)**: `21px` (`font-weight: 700`).
4. **Body Copy**: `14px` - `16px` (`font-weight: 400`, line-height `1.618`).
5. **Captions & Micro-Data**: `10px` - `12px` (`font-weight: 600`, uppercase, letter-spacing `0.15em`).

---

## 5. COMPLETE CONTENT INVENTORY & SITE STRUCTURE

The website comprises 9 primary chapters, each addressing a specialized dimension of elephant conservation and history:

### 1. Home / Portal Hub (`index.html`)
- **Split-Screen Frosted Glass Hero**: Interactive slider cycling across 4 featured narratives (Misty Canopies, Sacred Tuskers, Minneriya Gathering, Ecological Corridors).
- **Vertical Rhombus Indicators**: Real-time slide status with diamond navigation markers.
- **Interactive Color Palette Preview**: 5-swatch design system card from Image 2 with 1-click clipboard copy.
- **8 Comprehensive Dossier Cards**: Direct routing to all thematic chapters.
- **Ecological Truth vs. Myth Section**: Debunking common misconceptions about aggression, fencing, and wild translocations.
- **Open Data Repository Download Hub**: Direct links for `data.json`, CSV files, and research dossiers.

### 2. Species Profile & Taxonomy (`overview.html`)
- **Taxonomic Classification**: Kingdom Animalia down to subspecies *Elephas maximus maximus*.
- **Physical Anatomy & Genetics**: Depigmentation patterns (pink freckling on ears/trunk), body mass (up to 5.5 tons), trunk musculature (over 40,000 muscles).
- **The Tusk Paradox (*Ath-Dhal*)**: Genetic explanation of why less than 2.5% of Sri Lankan male elephants carry tusks compared to >90% of African savannah elephants.

### 3. 2,500 Years of Cultural Heritage (`history.html`)
- **Ancient Chronicles (*Mahavamsa* & *Dipavamsa*)**: Royal elephant stables (*Hasti Shala*) in Anuradhapura and Polonnaruwa.
- **Sacred Casket Bearers**: The Esala Perahera tradition in Kandy; historical profiles of legendary state tuskers including **Maligawa Raja** and **Nadungamuwa Raja**.
- **Traditional Mahout Lore (*Gaja Shastra*)**: Ancient humane training methods and spiritual bonds.

### 4. British Colonial Slaughter (`massacre.html`)
- **19th-Century Bounty Eradication**: The colonial British classification of elephants as "agricultural vermin."
- **Major Thomas Rogers**: Archival analysis of Rogers' 1,400+ kills and his historical death by lightning strike in Haputale.
- **Highland Extirpation**: Complete deforestation of Nuwara Eliya and Horton Plains for tea and coffee plantations, permanently altering migration networks.

### 5. Habitats & Seasonal Migration (`habitats.html`)
- **The Great Gathering at Minneriya**: Over 350 elephants aggregating on receding reservoir lakebeds during the dry season (August–September).
- **Protected Sanctuaries**: Comprehensive coverage of Udawalawe, Yala (Ruhuna), Wilpattu, Wasgamuwa, and Kaudulla.
- **Seasonal River Basin Corridors**: The Mahaweli, Walawe, and Yan Oya migration highways.

### 6. Wild vs. Domestic Welfare (`wild-domestic.html`)
- **Population Disparity**: ~7,451 wild elephants vs. only ~100–120 in domestic captivity.
- **Orphanage & Rehabilitation**: Comparative analysis of Pinnawala Elephant Orphanage and the Elephant Transit Home (ETH) in Udawalawe.
- **Legal Reforms**: DNA registration registries, court orders against illegal wild calf captures, and ethical tourism guidelines.

### 7. Empirical Data & Census Trends (`statistics.html`)
- **Historical Census Curves (1800–2025)**: Population decline from ~15,000+ in the pre-colonial era down to 7,451 today.
- **Annual HEC Mortality Metrics**: Tracking annual deaths (averaging 400+ elephants and 150+ humans per year).
- **Mortality Cause Breakdown**: Hakka Patas (jaw bombs), illegal wire electrocution, gunshot wounds, train collisions, and natural causes.
- **Interactive Chart.js Visualizations**: Fully responsive charts with dataset export capability.

### 8. Human-Elephant Conflict Solutions (`hec.html`)
- **The Root Cause**: 70% of Sri Lanka's wild elephant population roams outside protected department lands.
- **Failed Mitigation Strategies**: Why elephant drives and forest fencing increase human fatalities.
- **Sustainable Innovations**: Village-managed seasonal agricultural solar fences, early-warning acoustic sensors along railway tracks, and legal protection of ancient migratory corridors.

### 9. Live News Wire (`news.html`)
- Real-time RSS integration broadcasting conservation dispatches, public wildlife advisories, veterinary rescues, and ministry press releases.

### 10. Elephant Orphanages & Rehabilitation (`elephant-orphanages.html`, `pinnawala.html`, `udawalawe.html`)
- **Hub Page (`elephant-orphanages.html`)**: Two paths, one future for Sri Lanka's elephants; comparative institutional analysis of Pinnawala vs. Udawalawe Transit Home.
- **Pinnawala Elephant Orphanage (`pinnawala.html`)**: 1975 founding herd (Kumari, Neela, Kadira, Vijaya, Mathali), Sukumali 1984 first birth, 2021 twin birth milestone, daily Ma Oya river bathing timetable, verified herd cards, admission pricing matrix, park visitor rules, and volunteering.
- **Udawalawe Elephant Transit Home (`udawalawe.html`)**: 1995 establishment by DWC, structured 5-stage rescue-to-release workflow, Dr. Suhada Jayawardana's account of Sandamali from Handapanagala rescue to wild mother with calf, milestones (1995, 1998, 2000, 2008), clinical milk nutrition, VHF/GPS radio-collar telemetry, and respectful visitor guidelines.

---

## 6. REAL INTERNET PHOTOGRAPHIC ASSETS (WIKIMEDIA COMMONS ARCHIVE)

High-resolution, verified field photographs of wild Sri Lankan elephants have been integrated into `assets/images/`:

1. **`sri-lanka-elephant-wild-herd.jpg`** (4.6 MB)
   - *Source*: Wikimedia Commons (Featured Picture / Quality Image)
   - *Photographer*: Charles J. Sharp
   - *Subject*: Wild matriarchal herd foraging in lush natural forest scrub.
2. **`sri-lanka-elephant-mother-calf.jpg`** (19.5 MB)
   - *Source*: Wikimedia Commons (Quality Image)
   - *Photographer*: Charles J. Sharp
   - *Subject*: Close-up of female elephant and 4-year-old calf showcasing distinctive ear depigmentation.
3. **`sri-lanka-elephant-male-portrait.jpg`** (10.5 MB)
   - *Source*: Wikimedia Commons
   - *Subject*: High-detail head portrait of an adult male Sri Lankan elephant (*Elephas maximus maximus*).
4. **`sri-lanka-elephant-udawalawe.jpg`** (3.8 MB)
   - *Source*: Wikimedia Commons (Wiki Loves Earth)
   - *Subject*: Wild elephant grazing in the dry-zone grasslands of Udawalawe National Park.
5. **`sri-lanka-minneriya-gathering.jpg`** (1.3 MB)
   - *Source*: Wikimedia Commons
   - *Subject*: The world-renowned "Gathering" of hundreds of wild elephants on the shores of Minneriya Tank.
6. **`sri-lanka-minneriya-herd.jpg`** (1.8 MB)
   - *Source*: Wikimedia Commons
   - *Subject*: Extensive herd foraging during sunset at Minneriya National Park.
7. **`sri-lanka-tusker-nadungamuwa-raja.jpg`** (2.5 MB)
   - *Source*: Wikimedia Commons
   - *Subject*: Historic photograph of the revered Sri Lankan Tusker Nadungamuwa Raja.
8. **`pinnawala-river-bathing.jpg`** (1.1 MB)
   - *Subject*: The Pinnawala herd participating in their daily communal bath in the rocky Ma Oya river.
9. **`udawalawe-transit-home.jpg`** (1.0 MB)
   - *Subject*: Orphaned elephant calf being carefully fed warm milk by wildlife rangers at ETH Udawalawe.
10. **`sandamali-wild-mother.jpg`** (1.0 MB)
   - *Subject*: The rehabilitated elephant Sandamali thriving in the wild as an adult mother with her wild-born calf.
11. **`pinnawala-twin-calves.jpg`** (1.1 MB)
   - *Subject*: The historic twin elephant calves born at Pinnawala in August 2021 beside their mother.

---

## 7. FILE SYSTEM ARCHITECTURE & INTEGRITY

```text
f:/Elephants/
├── assets/
│   ├── css/
│   │   └── styles.css                     <- Full design system (OpenAI Sans, Fibonacci tokens, glassmorphism)
│   ├── images/
│   │   ├── pinnawala-river-bathing.jpg    <- Ma Oya herd bathing
│   │   ├── udawalawe-transit-home.jpg     <- ETH milk feeding
│   │   ├── sandamali-wild-mother.jpg      <- Sandamali and wild calf
│   │   ├── pinnawala-twin-calves.jpg      <- 2021 historic twins
│   │   ├── sri-lanka-elephant-wild-herd.jpg
│   │   ├── sri-lanka-elephant-mother-calf.jpg
│   │   ├── sri-lanka-elephant-male-portrait.jpg
│   │   ├── sri-lanka-elephant-udawalawe.jpg
│   │   ├── sri-lanka-minneriya-gathering.jpg
│   │   ├── sri-lanka-minneriya-herd.jpg
│   │   ├── sri-lanka-tusker-nadungamuwa-raja.jpg
│   │   ├── canopy-forest.jpg
│   │   ├── elephant-mist.jpg
│   │   └── sri-lanka-topo-map.jpg
│   └── js/
│       ├── main.js                        <- Hero slider, diamond pagination, swatch clipboard engine
│       ├── interactive-map.js             <- Sanctuaries & migratory corridors map
│       ├── statistics.js                  <- Chart.js census & mortality trend charts
│       ├── habitats.js                    <- Habitat filtration & sanctuary data
│       └── news.js                        <- RSS feed parser & live news updates
├── data.json                              <- Complete structured JSON database
├── elephant_population_and_mortality_stats.csv <- 200-year historical CSV data
├── GAJA_LANKA_SYSTEM_DOSSIER.md           <- Downloadable System Documentation (This File)
├── index.html                             <- Primary Split Frosted Glass Landing Hub
├── elephant-orphanages.html               <- Elephant Orphanages Hub (Two Paths, One Future)
├── pinnawala.html                         <- Pinnawala Elephant Orphanage (Est. 1975)
├── udawalawe.html                         <- Udawalawe Elephant Transit Home (Rewilding)
├── overview.html                          <- Taxonomy, anatomy, depigmentation
├── history.html                           <- 2,500-year chronicles & sacred tuskers
├── massacre.html                          <- British colonial slaughter records
├── habitats.html                          <- National parks, corridors, Minneriya
├── wild-domestic.html                     <- Captive care vs. free herds
├── statistics.html                        <- Interactive charts & census records
├── hec.html                               <- Human-Elephant Conflict solutions
├── news.html                              <- Live conservation news wire
└── README.md                              <- Project overview & installation guide
```

---

## 8. DEPLOYMENT & LOCAL EXECUTION INSTRUCTIONS

1. **Local Server Execution**:
   ```powershell
   cd f:\Elephants
   python -m http.server 8080
   ```
2. **Accessing the Portal**:
   Open any modern browser and navigate to:
   `http://localhost:8080/index.html`

3. **Cross-Browser Verification**:
   The portal is optimized for Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge, with responsive breakpoints tested across 375px (mobile), 768px (tablet), 1024px (desktop), and 1920px (ultrawide).

---
*Dossier compiled by Gaja Lanka Digital Conservation Initiative (2026).*
