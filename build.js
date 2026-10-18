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
  { path: 'welfare-and-care', label: 'Welfare & Care', href: 'welfare-and-care.html' },
  { path: 'data-and-analytics', label: 'Data & Analytics', href: 'data-and-analytics.html' },
  { path: 'human-elephant-conflict', label: 'HEC Portal', href: 'human-elephant-conflict.html' },
  { path: 'conservation-news', label: 'News', href: 'conservation-news.html' }
];

// Unified header: NO BORDERS, NO SHADOWS, SINGLE-LINE NAV LINKS (whitespace-nowrap)
function generateCleanHeader(activePath) {
  const desktopLinks = NAV_ITEMS.map(item => {
    const isActive = item.path === activePath;
    if (isActive) {
      return `<a aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors" data-path="${item.path}" href="${item.href}">${item.label}</a>`;
    } else {
      return `<a class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors" data-path="${item.path}" href="${item.href}">${item.label}</a>`;
    }
  }).join('\n      ');

  const mobileLinks = NAV_ITEMS.map(item => {
    const isActive = item.path === activePath;
    if (isActive) {
      return `<a aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm flex items-center justify-between" data-path="${item.path}" href="${item.href}"><span>${item.label}</span><span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span></a>`;
    } else {
      return `<a class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors" data-path="${item.path}" href="${item.href}">${item.label}</a>`;
    }
  }).join('\n      ');

  return `<header class="fixed top-0 left-0 right-0 z-50 bg-surface-container/90 backdrop-blur-xl">
  <div class="h-16 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
    <!-- Brand Emblem -->
    <a href="index.html" class="flex items-center gap-2.5 shrink-0 group text-decoration-none">
      <img alt="GAJA LANKA Emblem" class="h-8 w-auto object-contain transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClsl4rcueTeGbxSgDieYGr13SQdQQA-L6BH7paRzqaVc7KHvyxgiCtk9EXt1166hUK9ZTBTQTZlUcuzHZPuSxYDuYWGUX7bJqZA6bQUpr1N2tcKqSxIsr9K60MtsvhN5txDgGshinZyIh_Bt0C5abWbm0mJhdSjuOtdUtUC_r5DFrsrAebfO6NnRcf8zXkKlJXIdDy8bkH0_trDGuNqxRBfSYQK3hkxAk7va05KMgeRnr-mD-sk9co"/>
      <div class="flex flex-col">
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-sm sm:text-base uppercase tracking-wider text-primary group-hover:text-secondary-fixed transition-colors whitespace-nowrap">Gaja Lanka</span>
          <span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
        </div>
        <span class="text-[9px] text-secondary tracking-[0.14em] uppercase font-semibold whitespace-nowrap hidden sm:block">Ceylon Elephant Conservation</span>
      </div>
    </a>
    
    <!-- Desktop Navigation: Strictly 1 line, no wrapping -->
    <nav class="hidden xl:flex items-center gap-1 shrink-0" data-active-classes="bg-secondary-container text-on-secondary-container font-semibold rounded-lg">
      ${desktopLinks}
    </nav>
    
    <!-- Right Actions -->
    <div class="flex items-center gap-2 shrink-0">
      <a class="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs uppercase tracking-wider font-semibold hover:bg-primary-container hover:text-on-primary-container transition-all whitespace-nowrap" data-path="data-and-analytics" href="data-and-analytics.html#repository">Open Data</a>
      <a href="species-profile.html" class="w-8 h-8 rounded-full bg-surface-container-high hover:bg-secondary-fixed hover:text-on-secondary-fixed text-secondary flex items-center justify-center transition-colors" title="Species Monograph">
        <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.5 2 6 4.3 5 6.8 3.2 7.2 2 8.8 2 11c0 2.2 1.3 3.8 3.1 4.3.3 1.7 1.3 3.2 2.9 3.9v2.8h2V19.8c.6.1 1.3.2 2 .2s1.4-.1 2-.2v2.2h2v-2.8c1.6-.7 2.6-2.2 2.9-3.9 1.8-.5 3.1-2.1 3.1-4.3 0-2.2-1.2-3.8-3-4.2C18 4.3 15.5 2 12 2zm-3.5 7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3.5 2c.83 0 1.5.67 1.5 1.5v3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V13c0-.83.67-1.5 1.5-1.5z"/></svg>
      </a>
      <button id="mobile-menu-btn" aria-label="Toggle Mobile Menu" class="xl:hidden p-2 text-on-surface-variant hover:text-on-surface cursor-pointer rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors" type="button">
        <span class="material-symbols-outlined text-[22px]">menu</span>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu Drawer -->
  <div id="mobile-menu" class="hidden xl:hidden bg-surface-container-high/98 backdrop-blur-2xl px-6 py-4 transition-all">
    <nav class="flex flex-col space-y-1">
      ${mobileLinks}
    </nav>
    <div class="mt-3 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
      <span class="text-[11px] uppercase tracking-wider text-secondary">Gaja Lanka 2026 Archive</span>
      <a class="text-xs font-semibold text-secondary-fixed hover:underline" href="data-and-analytics.html#repository">Datasets &amp; API &rarr;</a>
    </div>
  </div>
</header>`;
}

// Unified footer: NO BORDERS, NO SHADOWS
function generateCleanFooter() {
  return `<footer class="w-full bg-surface-container-lowest text-on-surface mt-space-xl">
  <div class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-space-xl">
    <div class="bg-surface-container/60 backdrop-blur-xl rounded-2xl p-space-lg mb-space-xl">
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

      <div class="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-space-lg">
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
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-fixed to-primary-fixed font-normal">WILD MONARCHS</span>
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
            <div class="text-3xl sm:text-4xl text-primary font-light">~7,451</div>
            <span class="text-xs text-on-surface-variant mt-1">2026 islandwide range audit</span>
          </div>

          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-secondary font-semibold">Tusked Males (Ath-Dhal)</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">shield</span>
            </div>
            <div class="text-3xl sm:text-4xl text-secondary-fixed font-light">&lt; 2.5%</div>
            <span class="text-xs text-on-surface-variant mt-1">Rare evolutionary gene pool</span>
          </div>

          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-secondary font-semibold">The Great Gathering</span>
              <span class="material-symbols-outlined text-[18px] text-secondary">groups</span>
            </div>
            <div class="text-3xl sm:text-4xl text-primary font-light">350+</div>
            <span class="text-xs text-on-surface-variant mt-1">Minneriya dry-season congregation</span>
          </div>

          <div class="bg-surface-container/70 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between">
            <div class="flex items-center justify-between text-on-surface-variant mb-space-xs">
              <span class="text-[11px] uppercase tracking-wider text-error font-semibold">Annual Casualties</span>
              <span class="material-symbols-outlined text-[18px] text-error">warning</span>
            </div>
            <div class="text-3xl sm:text-4xl text-error font-light">~400+</div>
            <span class="text-xs text-on-surface-variant mt-1">Human-Elephant Conflict priority</span>
          </div>
        </div>

      </div>
    </section>

    <!-- SECTION: The 8 Gateway Chapters (Pillars of Gaja Lanka) -->
    <section class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
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
    <section class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-space-xl w-full">
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
          <!-- Item 1 -->
          <div class="bg-surface-container-low/80 rounded-2xl p-space-md space-y-space-xs">
            <div class="flex items-center gap-2 text-error font-semibold text-sm">
              <span class="material-symbols-outlined text-[20px]">cancel</span>
              <span>Myth: Park Fencing Works</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Believing that wild elephants can be permanently penned inside national park boundaries using perimeter electric fences.
            </p>
            <div class="pt-2 text-secondary-fixed text-xs leading-relaxed">
              <strong class="font-semibold text-secondary">Ecological Reality:</strong> 70% of wild elephant range in Sri Lanka falls outside protected parks. Fences must protect villages and cultivation, while leaving natural corridors open.
            </div>
          </div>

          <!-- Item 2 -->
          <div class="bg-surface-container-low/80 rounded-2xl p-space-md space-y-space-xs">
            <div class="flex items-center gap-2 text-error font-semibold text-sm">
              <span class="material-symbols-outlined text-[20px]">cancel</span>
              <span>Myth: All Bulls Have Tusks</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Assuming that male Sri Lankan elephants universally grow elongated ivory tusks like African elephants or Indian counterparts.
            </p>
            <div class="pt-2 text-secondary-fixed text-xs leading-relaxed">
              <strong class="font-semibold text-secondary">Ecological Reality:</strong> Less than 2.5% of Sri Lankan bulls carry tusks (Ath-Dhal). Over 97% are naturally tuskless tush-bearing bulls (Aliya), an evolutionary hallmark.
            </div>
          </div>

          <!-- Item 3 -->
          <div class="bg-surface-container-low/80 rounded-2xl p-space-md space-y-space-xs">
            <div class="flex items-center gap-2 text-error font-semibold text-sm">
              <span class="material-symbols-outlined text-[20px]">cancel</span>
              <span>Myth: Captivity Equals Safety</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Believing that captive shelter and tethering offer a humane alternative to the harsh dry-zone wild environment.
            </p>
            <div class="pt-2 text-secondary-fixed text-xs leading-relaxed">
              <strong class="font-semibold text-secondary">Ecological Reality:</strong> Wild herds roam 10–20 km daily with complex matrilineal social bonds. Captive tethering causes chronic stereotypic pacing, foot rot, and social trauma.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: Open Data Repository & Download Hub Banner -->
    <section class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-space-xl w-full">
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

${GLOBAL_SCRIPT}
</html>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), indexHtml, 'utf-8');
  console.log('Successfully updated index.html');
}

processAllSubpages();
require('./enrich_site_images.js');
require('./enrich_all_site_imagery.js');
console.log('Build pipeline complete: All pages generated and enriched with authentic elephant imagery.');
