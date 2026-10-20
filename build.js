const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const NEW_DIR = path.join(ROOT_DIR, 'new');

const NAV_ITEMS = [
  { path: 'home', label: 'Home', href: 'index.html' },
  { path: 'species-profile', label: 'Species Profile', href: 'species-profile.html' },
  { path: 'heritage-and-culture', label: 'Heritage & Culture', href: 'heritage-and-culture.html' },
  { path: 'colonial-archive', label: 'Colonial Archive', href: 'colonial-archive.html' },
  { path: 'habitats-and-corridors', label: 'Habitats & Corridors', href: 'habitats-and-corridors.html' },
  {
    path: 'welfare-and-care',
    label: 'Welfare & Care',
    href: 'welfare-and-care.html',
    dropdown: [
      { label: 'Welfare & Care Overview', href: 'welfare-and-care.html', sub: 'Wild ethology vs managed captive care', tag: 'ETHOLOGY' },
      { label: 'Pinnawala Elephant Orphanage', href: 'pinnawala.html', sub: 'Care, breeding & Ma Oya bathing', tag: '1975' },
      { label: 'Udawalawe Elephant Transit Home', href: 'udawalawe.html', sub: 'Wild calf rehabilitation & release', tag: 'ETH' }
    ]
  },
  { path: 'data-and-analytics', label: 'Data & Analytics', href: 'data-and-analytics.html' },
  { path: 'human-elephant-conflict', label: 'HEC Portal', href: 'human-elephant-conflict.html' },
  { path: 'famous-elephants', label: 'Famous Elephants', href: 'famous-elephants.html' },
  { path: 'conservation-news', label: 'News', href: 'conservation-news.html' }
];

// Unified header: NO BORDERS, NO SHADOWS, WITH HOVERABLE WELFARE & CARE DROPDOWN
// Unified header matching canonical specification
function generateCleanHeader(activePath) {
  const isHome = activePath === 'home';
  const isSpecies = activePath === 'species-profile';
  const isCulture = activePath === 'heritage-and-culture';
  const isColonial = activePath === 'colonial-archive';
  const isHabitats = activePath === 'habitats-and-corridors';
  const isWelfareCluster = ['welfare-and-care', 'pinnawala', 'udawalawe', 'elephant-orphanages'].includes(activePath);
  const isData = activePath === 'data-and-analytics';
  const isHEC = activePath === 'human-elephant-conflict';
  const isFamous = activePath === 'famous-elephants';
  const isNews = activePath === 'conservation-news';

  const welfareBtnClass = isWelfareCluster
    ? 'px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors flex items-center gap-1'
    : 'px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors flex items-center gap-1';

  return `  <!-- Unified Global Header -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-2xl transition-all">
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <a class="flex items-center gap-3 shrink-0 group focus:outline-none" href="index.html">
        <img alt="Gaja Lanka" class="h-9 w-auto transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClsl4rcueTeGbxSgDieYGr13SQdQQA-L6BH7paRzqaVc7KHvyxgiCtk9EXt1166hUK9ZTBTQTZlUcuzHZPuSxYDuYWGUX7bJqZA6bQUpr1N2tcKqSxIsr9K60MtsvhN5txDgGshinZyIh_Bt0C5abWbm0mJhdSjuOtdUtUC_r5DFrsrAebfO6NnRcf8zXkKlJXIdDy8bkH0_trDGuNqxRBfSYQK3hkxAk7va05KMgeRnr-mD-sk9co"/>
        <div class="flex flex-col">
          <span class="font-headline-sm text-base text-primary font-bold tracking-tight leading-none group-hover:text-secondary-fixed transition-colors">Gaja Lanka</span>
          <span class="font-label-data text-[10px] text-on-surface-variant tracking-wider uppercase leading-tight mt-0.5">National Elephant Observatory</span>
        </div>
      </a>

      <!-- Desktop Navigation Bar -->
      <nav class="hidden xl:flex items-center gap-1 shrink-0">
        <a ${isHome ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="index.html">Home</a>
        <a ${isSpecies ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="species-profile.html">Species Profile</a>
        <a ${isCulture ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="heritage-and-culture.html">Culture</a>
        <a ${isColonial ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="colonial-archive.html">Colonial Archive</a>
        <a ${isHabitats ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="habitats-and-corridors.html">Habitats</a>
        
        <!-- Welfare & Care Dropdown -->
        <div class="relative group/welfare inline-block">
          <a ${isWelfareCluster ? 'aria-current="page" ' : ''}class="${welfareBtnClass}" href="welfare-and-care.html">
            <span>Welfare &amp; Care</span>
            <span class="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover/welfare:rotate-180">expand_more</span>
          </a>
          <div class="absolute left-0 top-full pt-1.5 w-72 opacity-0 pointer-events-none group-hover/welfare:opacity-100 group-hover/welfare:pointer-events-auto transition-all duration-200 z-50">
            <div class="bg-surface-container-high/95 backdrop-blur-2xl rounded-2xl p-2 flex flex-col space-y-1 shadow-2xl border border-white/10">
              <a class="px-3 py-2 rounded-xl ${activePath === 'welfare-and-care' ? 'bg-surface-container text-secondary-fixed' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors flex flex-col group/item" href="welfare-and-care.html">
                <div class="flex items-center justify-between">
                  <span class="text-[13px] font-semibold text-primary group-hover/item:text-secondary-fixed transition-colors">Welfare &amp; Care Overview</span>
                  <span class="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono">ETHOLOGY</span>
                </div>
                <span class="text-[11px] text-on-surface-variant/80">Wild ethology vs managed captive care</span>
              </a>
              <a class="px-3 py-2 rounded-xl ${activePath === 'pinnawala' ? 'bg-surface-container text-secondary-fixed' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors flex flex-col group/item" href="pinnawala.html">
                <div class="flex items-center justify-between">
                  <span class="text-[13px] font-semibold text-primary group-hover/item:text-secondary-fixed transition-colors">Pinnawala Elephant Orphanage</span>
                  <span class="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono">1975</span>
                </div>
                <span class="text-[11px] text-on-surface-variant/80">Care, breeding &amp; Ma Oya bathing</span>
              </a>
              <a class="px-3 py-2 rounded-xl ${activePath === 'udawalawe' ? 'bg-surface-container text-secondary-fixed' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors flex flex-col group/item" href="udawalawe.html">
                <div class="flex items-center justify-between">
                  <span class="text-[13px] font-semibold text-primary group-hover/item:text-secondary-fixed transition-colors">Udawalawe Elephant Transit Home</span>
                  <span class="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono">ETH</span>
                </div>
                <span class="text-[11px] text-on-surface-variant/80">Wild calf rehabilitation &amp; release</span>
              </a>
              <div class="pt-1 mt-1 border-t border-outline-variant/10">
                <a class="px-3 py-1.5 rounded-lg hover:bg-surface-container text-secondary-fixed text-[12px] font-medium flex items-center justify-between" href="elephant-orphanages.html">
                  <span>Orphanages Hub (Two Paths)</span>
                  <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a ${isData ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="data-and-analytics.html">Data &amp; Analytics</a>
        <a ${isHEC ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="human-elephant-conflict.html">HEC Portal</a>
        <a ${isFamous ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="famous-elephants.html">Famous Elephants</a>
        <a ${isNews ? 'aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors"' : 'class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors"'} href="conservation-news.html">News</a>
      </nav>

      <!-- Right Action Tools -->
      <div class="flex items-center gap-2 shrink-0">
        <a class="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-all whitespace-nowrap" href="data-and-analytics.html#repository">Open Data</a>
        <button id="mobile-menu-btn" aria-label="Toggle Mobile Menu" class="xl:hidden p-2 text-on-surface-variant hover:text-on-surface cursor-pointer rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors" type="button">
          <span class="material-symbols-outlined text-[22px]">menu</span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden xl:hidden bg-surface-container-high/98 backdrop-blur-2xl px-6 py-4 transition-all border-b border-white/5">
      <nav class="flex flex-col space-y-1">
        <a ${isHome ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="index.html">Home</a>
        <a ${isSpecies ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="species-profile.html">Species Profile</a>
        <a ${isCulture ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="heritage-and-culture.html">Heritage &amp; Culture</a>
        <a ${isColonial ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="colonial-archive.html">Colonial Archive</a>
        <a ${isHabitats ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="habitats-and-corridors.html">Habitats &amp; Corridors</a>
        <a ${isWelfareCluster ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="welfare-and-care.html">Welfare &amp; Care</a>
        <a ${isData ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="data-and-analytics.html">Data &amp; Analytics</a>
        <a ${isHEC ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="human-elephant-conflict.html">HEC Portal</a>
        <a ${isFamous ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="famous-elephants.html">Famous Elephants</a>
        <a ${isNews ? 'aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm"' : 'class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors"'} href="conservation-news.html">News</a>
      </nav>
    </div>
  </header>`;
}

// Unified footer matching canonical specification
function generateCleanFooter() {
  return `<!-- Unified Footer -->
<footer class="w-full bg-surface-container-lowest text-on-surface mt-space-xl">
  <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-space-xl">
    <div class="mb-space-xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg">
        <div class="lg:col-span-2 space-y-space-sm">
          <a href="index.html" class="flex items-center gap-space-sm text-decoration-none group">
            <img alt="GAJA LANKA Emblem" class="h-8 w-auto object-contain transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClsl4rcueTeGbxSgDieYGr13SQdQQA-L6BH7paRzqaVc7KHvyxgiCtk9EXt1166hUK9ZTBTQTZlUcuzHZPuSxYDuYWGUX7bJqZA6bQUpr1N2tcKqSxIsr9K60MtsvhN5txDgGshinZyIh_Bt0C5abWbm0mJhdSjuOtdUtUC_r5DFrsrAebfO6NnRcf8zXkKlJXIdDy8bkH0_trDGuNqxRBfSYQK3hkxAk7va05KMgeRnr-mD-sk9co"/>
            <span class="font-headline-sm text-headline-sm uppercase tracking-wider text-primary font-bold group-hover:text-secondary-fixed transition-colors">Gaja Lanka</span>
          </a>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md">The Legacy of Giants. The Future of Coexistence. Dedicated to evidence-based science, habitat preservation, and harmonious coexistence for <em>Elephas maximus maximus</em>.</p>
          <div class="pt-space-xs">
            <div class="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-editorial text-label-editorial uppercase">
              <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Telemetry Node Active &bull; Sri Lanka Wilds
            </div>
          </div>
        </div>
        
        <div>
          <h4 class="font-headline-sm text-label-editorial tracking-[0.14em] uppercase text-secondary mb-space-sm font-semibold">Dossiers</h4>
          <ul class="space-y-space-xs">
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="species-profile" href="species-profile.html">Elephas m. maximus</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="heritage-and-culture" href="heritage-and-culture.html">Sacred Tusker Heritage</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="colonial-archive" href="colonial-archive.html">Colonial Eradication Ledger</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="welfare-and-care" href="welfare-and-care.html">Captive vs Wild Welfare</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-headline-sm text-label-editorial tracking-[0.14em] uppercase text-secondary mb-space-sm font-semibold">Science &amp; Datasets</h4>
          <ul class="space-y-space-xs">
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="data-and-analytics" href="data-and-analytics.html">Population Telemetry</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="habitats-and-corridors" href="habitats-and-corridors.html">Protected Sanctuary Corridors</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" href="data.json" download="data.json">data.json (Spatial API)</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" href="elephant_population_and_mortality_stats.csv" download>population_stats.csv</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" href="data-and-analytics.html#repository">Methodology Register</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-headline-sm text-label-editorial tracking-[0.14em] uppercase text-secondary mb-space-sm font-semibold">Conservation &amp; Policy</h4>
          <ul class="space-y-space-xs">
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="human-elephant-conflict" href="human-elephant-conflict.html">HEC Mitigation Matrix</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" data-path="conservation-news" href="conservation-news.html">Field Dispatches &amp; News</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" href="human-elephant-conflict.html">National Buffer Strategy</a></li>
            <li class="font-body-sm text-body-sm"><a class="text-on-surface-variant hover:text-secondary-fixed transition-colors" href="conservation-news.html">Ranger Telemetry Dispatch</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="space-y-space-sm pt-space-xs text-on-surface-variant">
      <p class="font-body-sm text-body-sm leading-relaxed max-w-4xl text-outline">Scientific Notice: Scientific observations and population metrics should be interpreted in conjunction with indicated census years and peer-reviewed field methodologies. All spatial corridors reflect validated multi-seasonal telemetry tracking.</p>
      <p class="font-label-editorial text-label-editorial uppercase tracking-wider text-outline">Photography and cartographic assets courtesy of the Department of Wildlife Conservation, Sri Lanka Wildlife Archives, and open scientific field collaborations.</p>
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-space-sm gap-space-sm mt-space-md">
        <p class="font-body-sm text-body-sm">&copy; 2026 Gaja Lanka Digital Conservation Initiative. All rights reserved.</p>
        <div class="flex items-center gap-space-md">
          <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="data-and-analytics.html#repository">Open Access Agreement</a>
          <a class="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-fixed transition-colors" href="species-profile.html">Taxonomic Protocol</a>
        </div>
      </div>
    </div>
  </div>
</footer>`;
}

// Function to clean borders and shadows from HTML classes
function removeBordersAndShadows(html) {
  // Remove shadow classes
  html = html.replace(/\bshadow-(?:sm|md|lg|xl|2xl|inner)\b/g, '');
  html = html.replace(/\bshadow-\[[^\]]+\]/g, '');
  html = html.replace(/\bshadow\b/g, '');

  // Remove border classes (border, border-b, border-t, border-l, border-r, border-2, border-outline..., border-secondary...)
  html = html.replace(/\bborder-(?:t|b|l|r)(?:-\[[^\]]+\]|\/?[0-9]*)/g, '');
  html = html.replace(/\bborder-(?:outline|outline-variant|secondary|secondary-fixed|primary|error|surface)[^\s"'>]*/g, '');
  html = html.replace(/\bborder\b/g, '');
  html = html.replace(/\bhover:shadow-[^\s"'>]+/g, '');
  html = html.replace(/\bhover:border-[^\s"'>]+/g, '');

  return html;
}

// Global scrolling and icon fix injection for <head>
const HEAD_INJECTIONS = `
  <!-- Fonts & Material Symbols Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg"/>
  <link rel="stylesheet" href="assets/css/styles.css"/>

  <!-- Local High-Speed Material Symbols Font & Scroll/Layout Rules -->
  <style>
    @font-face {
      font-family: 'Material Symbols Outlined';
      font-style: normal;
      font-weight: 100 700;
      src: url('assets/fonts/materialsymbolsoutlined.woff2') format('woff2');
      font-display: block;
    }
    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined' !important;
      font-weight: normal;
      font-style: normal;
      font-size: 22px;
      line-height: 1;
      display: inline-block;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      font-feature-settings: 'liga' 1;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      vertical-align: middle;
    }
    html {
      overflow-y: scroll !important;
      scroll-behavior: smooth;
      height: auto !important;
    }
    body {
      margin: 0;
      padding: 0;
      overflow-y: visible !important;
      overflow-x: hidden !important;
      height: auto !important;
      min-height: 100vh;
      overscroll-behavior: auto !important;
    }
    main {
      overflow: visible !important;
      min-height: 100vh;
      height: auto !important;
    }
    ::-webkit-scrollbar {
      width: 12px !important;
      height: 12px !important;
      display: block !important;
    }
    ::-webkit-scrollbar-track {
      background: #0b160c !important;
    }
    ::-webkit-scrollbar-thumb {
      background: #2c382c !important;
      border-radius: 9999px !important;
      border: 2px solid #0b160c !important;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #487F2F !important;
    }
    *, *::before, *::after {
      box-shadow: none !important;
      text-shadow: none !important;
      border-color: transparent !important;
    }
    nav a {
      white-space: nowrap !important;
    }
  </style>`;

const GLOBAL_SCRIPT = `
<script>
  (function initGlobalNavigation() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });
    }
  })();
</script>
<script src="assets/js/counter.js"></script>
</body>`;

const PAGES_CONFIG = [
  {
    folder: 'colonial_archive_gaja_lanka',
    activePath: 'colonial-archive',
    title: 'The Cost of Colonial Expansion • Historical Investigation 1796–1948 | Gaja Lanka',
    description: 'Investigating the devastating structural transformation of Sri Lanka montane rain forests, British bounty systems, and highland wild herd extirpation.',
    targetFiles: ['colonial-archive.html', 'massacre.html']
  },
  {
    folder: 'conservation_news_gaja_lanka',
    activePath: 'conservation-news',
    title: 'The Frontline of Conservation • Field Dispatches & News Wire | Gaja Lanka',
    description: 'Peer-reviewed research bulletins, Department of Wildlife Conservation field dispatches, veterinary rescue logs, and grassroots coexistence stories.',
    targetFiles: ['conservation-news.html', 'news.html']
  },
  {
    folder: 'data_and_analytics_gaja_lanka',
    activePath: 'data-and-analytics',
    title: 'The Numbers Behind Conservation • Empirical Wildlife Telemetry & Datasets | Gaja Lanka',
    description: 'Empirical data repository chronicling Sri Lanka elephant census milestones from 1800 to 2026, mortality diagnostics, and open FAIR research datasets.',
    targetFiles: ['data-and-analytics.html', 'statistics.html']
  },
  {
    folder: 'habitats_and_corridors_gaja_lanka',
    activePath: 'habitats-and-corridors',
    title: 'A Landscape Without Borders • Habitats & Corridor Telemetry | Gaja Lanka',
    description: 'Interactive spatial telemetry and migration dynamics across Minneriya, Kaudulla, Yala, Udawalawe, and critical elephant corridors in Sri Lanka.',
    targetFiles: ['habitats-and-corridors.html', 'habitats.html']
  },
  {
    folder: 'heritage_and_culture_gaja_lanka',
    activePath: 'heritage-and-culture',
    title: 'A Kingdom Shaped by Giants • 2,500 Years of Heritage & Reverence | Gaja Lanka',
    description: 'Historical chronicle of the Asian elephant in Sri Lankan culture, royal war stables, Esala Perahera relic caskets, and legendary tusker lineages.',
    targetFiles: ['heritage-and-culture.html', 'history.html']
  },
  {
    folder: 'human_elephant_conflict_gaja_lanka',
    activePath: 'human-elephant-conflict',
    title: 'Coexistence is the Way Forward • Human-Elephant Coexistence Portal | Gaja Lanka',
    description: 'Empirical solutions to Human-Elephant Conflict in Sri Lanka, community-managed seasonal electric fences, crop protection, and telemetry early warning.',
    targetFiles: ['human-elephant-conflict.html', 'hec.html']
  },
  {
    folder: 'species_profile_gaja_lanka',
    activePath: 'species-profile',
    title: 'Meet the Giants of Ceylon • Taxonomic Monograph (Elephas maximus maximus) | Gaja Lanka',
    description: 'Anatomy, evolutionary adaptations, genetics, depigmentation, and keystone ecological biology of the native Sri Lankan elephant subspecies.',
    targetFiles: ['species-profile.html', 'overview.html']
  },
  {
    folder: 'welfare_and_care_gaja_lanka',
    activePath: 'welfare-and-care',
    title: 'Welfare Beyond Captivity • Wild Ethology vs Managed Care | Gaja Lanka',
    description: 'Understanding the behavioral, physical, and ecological realities of free-ranging wild megafauna versus managed captive care and rehabilitation.',
    targetFiles: ['welfare-and-care.html', 'wild-domestic.html']
  },
  {
    folder: 'elephant_orphanages_gaja_lanka',
    activePath: 'elephant-orphanages',
    title: 'Elephant Orphanages & Rehabilitation in Sri Lanka | Gaja Lanka',
    description: 'Discover Sri Lanka\'s elephant care institutions: long-term care and captive breeding at Pinnawala, and wild calf rehabilitation and release at Udawalawe Transit Home.',
    targetFiles: ['elephant-orphanages.html']
  },
  {
    folder: 'pinnawala_gaja_lanka',
    activePath: 'pinnawala',
    title: 'Pinnawala Elephant Orphanage • A Living Symbol of Elephant Conservation | Gaja Lanka',
    description: 'Explore Pinnawala Elephant Orphanage: history since 1975, daily Ma Oya river bathing schedule, elephant profiles, admission fees, and captive welfare standards.',
    targetFiles: ['pinnawala.html', 'pinnawala-elephant-orphanage.html']
  },
  {
    folder: 'udawalawe_gaja_lanka',
    activePath: 'udawalawe',
    title: 'Udawalawe Elephant Transit Home • A Journey From Rescue to the Wild | Gaja Lanka',
    description: 'Explore Udawalawe Elephant Transit Home (ETH): orphaned wild calf rehabilitation, the Sandamali release milestone, radio telemetry monitoring, and the 5-stage return to nature.',
    targetFiles: ['udawalawe.html', 'udawalawe-transit-home.html']
  }
];

function processAllSubpages() {
  console.log('Processing subpages with fixes...');
  for (const page of PAGES_CONFIG) {
    const srcPath = path.join(NEW_DIR, page.folder, 'code.html');
    if (!fs.existsSync(srcPath)) continue;

    let html = fs.readFileSync(srcPath, 'utf-8');

    // 1. Remove the old <style> that hid scrollbars and set overscroll-behavior:none
    html = html.replace(/<style>@layer base\{html,body\{margin:0;padding:0;\}body\{overscroll-behavior:none;\}[\s\S]*?<\/style>/i, '');

    // 2. Head setup
    const headEndIdx = html.indexOf('</head>');
    if (headEndIdx !== -1) {
      let headContent = html.substring(0, headEndIdx);
      headContent = headContent.replace(/<title>[\s\S]*?<\/title>/gi, '');
      headContent = headContent.replace(/<meta name="description"[\s\S]*?>/gi, '');
      const metaInjection = `
  <title>${page.title}</title>
  <meta name="description" content="${page.description}"/>
  ${HEAD_INJECTIONS}`;
      html = headContent + metaInjection + html.substring(headEndIdx);
    }

    // 3. Replace Header & Footer
    html = html.replace(/<header[\s\S]*?<\/header>/i, generateCleanHeader(page.activePath));
    html = html.replace(/<footer[\s\S]*?<\/footer>/i, generateCleanFooter());

    // 4. Update data-path navigation links
    NAV_ITEMS.forEach(nav => {
      const r1 = new RegExp(`href="#"(\\s+[^>]*?data-path="${nav.path}")`, 'gi');
      html = html.replace(r1, `href="${nav.href}"$1`);
      const r2 = new RegExp(`(data-path="${nav.path}"[^>]*?)href="#"`, 'gi');
      html = html.replace(r2, `$1href="${nav.href}"`);
    });

    // 5. Replace other specific in-page href="#" links
    html = html.replace(/href="#"(\s+data-path="colonial-archive")/gi, `href="colonial-archive.html"$1`);
    html = html.replace(/href="#"(\s+data-path="data-and-analytics")/gi, `href="data-and-analytics.html"$1`);
    html = html.replace(/href="#"(\s+data-path="species-profile")/gi, `href="species-profile.html"$1`);
    html = html.replace(/href="#"(\s+data-path="human-elephant-conflict")/gi, `href="human-elephant-conflict.html"$1`);
    html = html.replace(/href="#"(\s+data-path="conservation-news")/gi, `href="conservation-news.html"$1`);
    html = html.replace(/href="#"(\s+data-path="habitats-and-corridors")/gi, `href="habitats-and-corridors.html"$1`);

    // 6. User directive: Remove all borders and shadows from HTML classes
    html = removeBordersAndShadows(html);

    // 7. Inject global navigation script
    if (html.includes('</body>')) {
      html = html.replace('</body>', GLOBAL_SCRIPT);
    } else {
      html += GLOBAL_SCRIPT;
    }

    // 8. Write to target files
    for (const targetName of page.targetFiles) {
      const targetPath = path.join(ROOT_DIR, targetName);
      fs.writeFileSync(targetPath, html, 'utf-8');
      console.log(`  -> Updated ${targetName}`);
    }
  }
}

function processHomePage() {
  console.log('Generating clean index.html...');
  // Grab tailwind config from species-profile.html
  const sample = fs.readFileSync(path.join(ROOT_DIR, 'species-profile.html'), 'utf-8');
  const twMatch = sample.match(/<script id="tailwind-config">[\s\S]*?<\/script>/i);
  const twScript = twMatch ? twMatch[0] : '';

  const indexHtml = `<!DOCTYPE html>
<html class="dark" lang="en">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <meta content="web_standard" name="shell-type"/>
  <title>Gaja Lanka | The Sri Lankan Elephant Sanctuary &amp; Conservation Monograph</title>
  <meta name="description" content="Discover the Sri Lankan Elephant (Elephas maximus maximus) through an organic luxury scientific monograph. Explore 2,500 years of cultural reverence, colonial history, spatial corridors, datasets, and coexistence engineering."/>
  ${HEAD_INJECTIONS}
  <script src="https://cdn.tailwindcss.com"></script>
  ${twScript}
</head>
<body class="bg-surface font-body-md text-body-md text-on-surface antialiased">
${generateCleanHeader('home')}

<main class="w-full pt-16 bg-surface">
  <div class="flex flex-col w-full text-on-surface">

    <!-- HERO SECTION: Dark Botanical Monograph -->
    <section class="relative w-full pt-16 pb-space-xl overflow-hidden bg-surface-container-lowest">
      <!-- Ambient Backdrops & Topographic Overlay -->
      <div class="absolute inset-0 z-0 opacity-20 mix-blend-luminosity filter contrast-125 bg-cover bg-center pointer-events-none" style="background-image: url('assets/images/canopy-forest.jpg');"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface/90 to-surface pointer-events-none"></div>
      <div class="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary-fixed/5 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-space-lg">
        <!-- Top Status Pill -->
        <div class="flex flex-wrap items-center justify-between gap-space-sm">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/90 text-secondary backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span class="text-[11px] font-semibold tracking-[0.14em] uppercase">PEER-VERIFIED MONOGRAPH &bull; ELEPHAS MAXIMUS MAXIMUS</span>
          </div>
          <div class="hidden sm:flex items-center gap-space-md text-outline text-xs">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-secondary">satellite_alt</span>
              TELEMETRY: <strong class="text-secondary-fixed font-medium">ACTIVE</strong>
            </span>
            <span>&bull;</span>
            <span>GRID: <strong class="text-primary font-medium">8.033&deg; N, 80.683&deg; E</strong></span>
            <span>&bull;</span>
            <span>CENSUS: <strong class="text-primary font-medium">2026 AUDIT</strong></span>
          </div>
        </div>

        <!-- Center Display Headline Lockup -->
        <div class="max-w-4xl space-y-space-md">
          <div class="space-y-space-xs">
            <p class="text-xs uppercase tracking-[0.2em] text-secondary-fixed-dim font-semibold">
              The Ecological Keystone &amp; Cultural Monarch of Sri Lanka
            </p>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl text-primary uppercase font-light tracking-tight leading-tight">
              CEYLON'S SACRED <br class="hidden sm:inline"/>
              <span class="font-normal italic text-secondary-fixed">WILD MONARCHS</span>
            </h1>
          </div>
          <p class="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            An empirical conservation sanctuary and archival monograph chronicling 2,500 years of cultural veneration, tragic colonial enclosure, and modern field science to secure coexistence for Sri Lanka's endangered island giants.
          </p>
          
          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a href="species-profile.html" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs uppercase tracking-wider font-semibold hover:bg-primary-container transition-all">
              <span>Explore Species Monograph</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <a href="habitats-and-corridors.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface hover:text-secondary-fixed transition-all text-xs uppercase tracking-wider font-semibold">
              <span class="material-symbols-outlined text-[16px] text-secondary">alt_route</span>
              <span>Corridor Telemetry</span>
            </a>
            <a href="human-elephant-conflict.html" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container/70 text-on-surface-variant hover:text-primary transition-all text-xs uppercase tracking-wider">
              <span>Coexistence Portal &rarr;</span>
            </a>
          </div>
        </div>

        <!-- Rapid Telemetry Metrics Strip -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm w-full pt-space-md">
          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-secondary font-semibold">Wild Population</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">monitoring</span>
            </div>
            <div class="text-3xl sm:text-4xl text-primary font-light counter-value" data-counter="7451" data-prefix="~" data-format="comma">~7,451</div>
            <span class="text-xs text-on-surface-variant mt-1">2026 islandwide range audit</span>
          </div>

          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-secondary font-semibold">Tusked Males (Ath-Dhal)</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">shield</span>
            </div>
            <div class="text-3xl sm:text-4xl text-secondary-fixed font-light counter-value" data-counter="2.5" data-prefix="&lt; " data-suffix="%" data-decimals="1">&lt; 2.5%</div>
            <span class="text-xs text-on-surface-variant mt-1">Rare evolutionary gene pool</span>
          </div>

          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-secondary font-semibold">The Great Gathering</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">groups</span>
            </div>
            <div class="text-3xl sm:text-4xl text-primary font-light counter-value" data-counter="350" data-suffix="+">350+</div>
            <span class="text-xs text-on-surface-variant mt-1">Minneriya dry-season congregation</span>
          </div>

          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-error font-semibold">Annual Casualties</span>
              <span class="material-symbols-outlined text-[18px] text-error">warning</span>
            </div>
            <div class="text-3xl sm:text-4xl text-error font-light counter-value" data-counter="400" data-prefix="~" data-suffix="+">~400+</div>
            <span class="text-xs text-on-surface-variant mt-1">Human-Elephant Conflict priority</span>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION: The 8 Gateway Chapters (Pillars of Gaja Lanka) -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
        <div class="space-y-space-xs max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
            <span class="text-[11px] uppercase tracking-[0.14em] font-semibold">Comprehensive Dossiers</span>
          </div>
          <h2 class="text-3xl sm:text-4xl text-primary tracking-tight font-light">The Eight Conservation Gateways</h2>
          <p class="text-sm sm:text-base text-on-surface-variant">
            Explore dedicated field research dossiers spanning biological monographs, declassified colonial archives, satellite corridor tracking, and community coexistence engineering.
          </p>
        </div>
        <div class="shrink-0">
          <a href="data-and-analytics.html#repository" class="inline-flex items-center gap-1 text-xs font-semibold text-secondary-fixed hover:underline">
            <span>Explore Open Datasets</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>

      <!-- Grid of 8 Cards (Seamless, borderless, shadowless) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

        <!-- Gateway 1: Species Profile -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">01 &bull; Taxonomy</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">pets</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">Species Profile</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Anatomy of Elephas maximus maximus, evolutionary depigmentation markers, acoustic communication, and keystone ecological roles.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">Anatomy &bull; Genetics</span>
            <a href="species-profile.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>View Monograph</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 2: Heritage & Culture -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">02 &bull; Heritage</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">temple_buddhist</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">Heritage &amp; Culture</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                2,500 years of reverence in Sinhala chronicles, royal war stables, Esala Perahera relic caskets, and legendary tusker lineages.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">History &bull; Lineage</span>
            <a href="heritage-and-culture.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>View Chronicle</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 3: Colonial Archive -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-error text-[10px] uppercase font-semibold tracking-wider">03 &bull; Investigation</span>
              <span class="material-symbols-outlined text-error text-[22px] group-hover:scale-110 transition-transform">history_edu</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-error transition-colors">Colonial Archive</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Declassified 1796–1948 records of British bounty hunting, montane rain forest clearings for tea, and systematic highland extermination.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">1848 Enclosure Ledger</span>
            <a href="colonial-archive.html" class="inline-flex items-center gap-1 text-xs text-error hover:underline font-semibold">
              <span>Open Archive</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 4: Habitats & Corridors -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">04 &bull; Spatial GIS</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">alt_route</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">Habitats &amp; Corridors</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Satellite telemetry across Minneriya, Kaudulla, Yala, Udawalawe, and critical migratory bottlenecks intersecting railway lines.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">Telemetry &bull; Corridors</span>
            <a href="habitats-and-corridors.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>Track Corridors</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 5: Welfare & Care -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">05 &bull; Ethology</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">health_and_safety</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">Welfare &amp; Care</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Ethological comparison of free-ranging wild herds versus captive management, Pinnawala Orphanage, and ETH Udawalawe rewilding.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">Welfare Science</span>
            <a href="welfare-and-care.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>Ethology Audit</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 6: Data & Analytics -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">06 &bull; Empirical</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">analytics</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">Data &amp; Analytics</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Population demographics from 1800 to 2026, mortality cause breakdowns, regional incident densities, and open research data downloads.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">CSV &bull; GEOJSON &bull; API</span>
            <a href="data-and-analytics.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>View Data</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 7: HEC Portal -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">07 &bull; Coexistence</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">fence</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">HEC Coexistence</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Empirical mitigation of Human-Elephant Conflict, community-managed seasonal electric fences, early warning telemetry, and crop insurance.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">Mitigation Matrix</span>
            <a href="human-elephant-conflict.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>HEC Portal</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

        <!-- Gateway 8: News Wire -->
        <article class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-md flex flex-col justify-between hover:bg-surface-container/90 transition-all group">
          <div class="space-y-space-sm">
            <div class="flex items-center justify-between">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-secondary text-[10px] uppercase font-semibold tracking-wider">08 &bull; Intelligence</span>
              <span class="material-symbols-outlined text-secondary text-[22px] group-hover:scale-110 transition-transform">rss_feed</span>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary group-hover:text-secondary-fixed transition-colors">Conservation News</h3>
              <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Live field dispatches, DWC bulletins, veterinary rescue updates, legal precedents, and ranger telemetry intelligence across Sri Lanka.
              </p>
            </div>
          </div>
          <div class="pt-space-md mt-space-md flex items-center justify-between">
            <span class="text-[11px] text-outline">Live Wire Synced</span>
            <a href="conservation-news.html" class="inline-flex items-center gap-1 text-xs text-secondary hover:text-secondary-fixed font-semibold">
              <span>Read News</span>
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </article>

      </div>
    </section>

    <!-- SECTION: Scientific Realities vs Myths Comparison -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
      <div class="bg-surface-container/70 backdrop-blur-2xl rounded-2xl p-space-lg">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-[11px] uppercase tracking-[0.14em] text-secondary font-semibold">Scientific Epistemic Baseline</span>
          <span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
          <span class="text-xs text-outline">Empirical Ethology vs Popular Belief</span>
        </div>
        <h2 class="text-2xl sm:text-3xl text-primary tracking-tight font-light mb-space-md">
          Myths vs. Ecological Realities
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <!-- Myth 1: Park Fencing Works -->
          <div class="group relative rounded-2xl overflow-hidden bg-surface-container-low/80 border border-white/5 hover:border-secondary/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative overflow-hidden cursor-pointer" onclick="openMythLightbox('assets/images/Myth vs Reality_ Park Fencing Works.png', 'Myth vs Reality: Park Fencing Works')">
              <img 
                src="assets/images/Myth vs Reality_ Park Fencing Works.png" 
                alt="Infographic: Myth vs Reality - Park Fencing Works. 70% of wild elephant range in Sri Lanka falls outside protected parks." 
                class="w-full h-auto aspect-[3/2] object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-highest/90 backdrop-blur-md text-xs font-semibold text-white shadow-xl border border-white/10">
                  <span class="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>View Full Infographic</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Myth 2: All Bulls Have Tusks -->
          <div class="group relative rounded-2xl overflow-hidden bg-surface-container-low/80 border border-white/5 hover:border-secondary/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative overflow-hidden cursor-pointer" onclick="openMythLightbox('assets/images/Sri Lankan Elephant Tusks_ Myth vs Reality.png', 'Myth vs Reality: Sri Lankan Elephant Tusks')">
              <img 
                src="assets/images/Sri Lankan Elephant Tusks_ Myth vs Reality.png" 
                alt="Infographic: Myth vs Reality - Sri Lankan Elephant Tusks. Less than 2.5% of Sri Lankan bulls carry tusks (Ath-Dhal); over 97% are naturally tuskless Aliya." 
                class="w-full h-auto aspect-[3/2] object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-highest/90 backdrop-blur-md text-xs font-semibold text-white shadow-xl border border-white/10">
                  <span class="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>View Full Infographic</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Myth 3: Captivity Equals Safety -->
          <div class="group relative rounded-2xl overflow-hidden bg-surface-container-low/80 border border-white/5 hover:border-secondary/40 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="relative overflow-hidden cursor-pointer" onclick="openMythLightbox('assets/images/Myth vs Reality_ Captivity Equals Safety.png', 'Myth vs Reality: Captivity Equals Safety')">
              <img 
                src="assets/images/Myth vs Reality_ Captivity Equals Safety.png" 
                alt="Infographic: Myth vs Reality - Captivity Equals Safety. Wild herds roam 10–20 km daily while captive tethering causes severe foot rot and trauma." 
                class="w-full h-auto aspect-[3/2] object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-highest/90 backdrop-blur-md text-xs font-semibold text-white shadow-xl border border-white/10">
                  <span class="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>View Full Infographic</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Open Data Repository & Download Hub Banner -->
    <section class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-space-xl w-full">
      <div class="bg-gradient-to-r from-surface-container-high/90 via-surface-container/95 to-surface-container-low/90 rounded-2xl p-space-lg flex flex-col lg:flex-row items-center justify-between gap-space-lg">
        <div class="space-y-space-xs max-w-2xl text-center lg:text-left">
          <div class="flex items-center justify-center lg:justify-start gap-2">
            <span class="text-[11px] uppercase tracking-[0.14em] text-secondary font-semibold">Open Science Initiative</span>
            <span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span class="text-xs text-outline">CC BY 4.0 International</span>
          </div>
          <h2 class="text-2xl sm:text-3xl text-primary font-medium">Download Open Conservation Datasets</h2>
          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Access verified empirical population timeseries from 1800 to 2026, cause-of-death diagnostics, and GIS corridor boundaries formatted for Python, R, and GIS tools.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <a href="data.json" download="data.json" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface hover:text-secondary-fixed transition-all text-xs uppercase tracking-wider font-semibold">
            <span class="material-symbols-outlined text-[16px] text-secondary">download</span>
            <span>data.json (Spatial API)</span>
          </a>
          <a href="elephant_population_and_mortality_stats.csv" download class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-primary-container transition-all text-xs uppercase tracking-wider font-semibold">
            <span class="material-symbols-outlined text-[16px]">table_chart</span>
            <span>population_stats.csv</span>
          </a>
          <a href="data-and-analytics.html#repository" class="inline-flex items-center gap-1 text-secondary-fixed hover:underline text-[12px] uppercase tracking-wider font-semibold">
            <span>Browse Full Archive &rarr;</span>
          </a>
        </div>
      </div>
    </section>

  </div>
</main>

${generateCleanFooter()}

  <!-- Infographic Lightbox Modal -->
  <div id="myth-lightbox-modal" class="fixed inset-0 z-[9999] hidden items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300 opacity-0" role="dialog" aria-modal="true">
    <div id="myth-lightbox-backdrop" class="fixed inset-0 bg-transparent cursor-pointer"></div>
    <div class="relative max-w-5xl w-full my-auto flex flex-col items-center z-10" onclick="event.stopPropagation()">
      <div class="w-full flex justify-between items-center px-3 py-2 mb-2 bg-surface-container/90 backdrop-blur-md rounded-xl border border-white/10">
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
          <span id="myth-lightbox-caption" class="text-xs sm:text-sm font-medium text-white tracking-wide truncate"></span>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <a id="myth-lightbox-download" href="#" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-high text-on-surface hover:text-secondary-fixed transition-colors text-xs font-medium" title="Open full-resolution image in new tab">
            <span>High-Res</span>
            <span class="material-symbols-outlined text-[15px]">open_in_new</span>
          </a>
          <button type="button" onclick="closeMythLightbox()" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-high hover:bg-rose-950/80 text-on-surface hover:text-rose-300 transition-colors" aria-label="Close modal">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
      </div>
      <div class="w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/60 border border-white/10 shadow-2xl">
        <img id="myth-lightbox-img" src="" alt="" class="max-h-[82vh] w-auto max-w-full object-contain rounded-xl"/>
      </div>
    </div>
  </div>

  <script>
    function openMythLightbox(src, caption) {
      const modal = document.getElementById('myth-lightbox-modal');
      const img = document.getElementById('myth-lightbox-img');
      const captionEl = document.getElementById('myth-lightbox-caption');
      const dlBtn = document.getElementById('myth-lightbox-download');
      if (modal && img) {
        img.src = src;
        img.alt = caption || 'Infographic';
        if (captionEl) captionEl.textContent = caption || 'Ecological Monograph Infographic';
        if (dlBtn) dlBtn.href = src;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        requestAnimationFrame(() => {
          modal.classList.remove('opacity-0');
          modal.classList.add('opacity-100');
        });
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMythLightbox() {
      const modal = document.getElementById('myth-lightbox-modal');
      if (modal) {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          document.body.style.overflow = '';
        }, 250);
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      const backdrop = document.getElementById('myth-lightbox-backdrop');
      if (backdrop) {
        backdrop.addEventListener('click', closeMythLightbox);
      }
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMythLightbox();
      });
    });
  </script>
  <script src="assets/js/dossier-data.js"></script>
  <script src="assets/js/dossier-modal.js"></script>
  <script src="assets/js/counter.js"></script>
${GLOBAL_SCRIPT}
</html>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), indexHtml, 'utf-8');
  console.log('Successfully updated index.html');
}

processAllSubpages();
try {
  require('./enrich_site_images.js');
} catch (e) {}
try {
  require('./enrich_all_site_imagery.js');
} catch (e) {}
console.log('Build pipeline complete: All pages generated and enriched with authentic elephant imagery.');

