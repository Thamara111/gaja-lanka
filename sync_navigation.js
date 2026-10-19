const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'f:\\Elephants';

// Mapping of file names to active navigation path
const FILE_TO_PATH = {
  'index.html': 'home',
  'species-profile.html': 'species-profile',
  'overview.html': 'species-profile',
  'heritage-and-culture.html': 'heritage-and-culture',
  'history.html': 'heritage-and-culture',
  'colonial-archive.html': 'colonial-archive',
  'massacre.html': 'colonial-archive',
  'habitats-and-corridors.html': 'habitats-and-corridors',
  'habitats.html': 'habitats-and-corridors',
  'welfare-and-care.html': 'welfare-and-care',
  'wild-domestic.html': 'welfare-and-care',
  'elephant-orphanages.html': 'elephant-orphanages',
  'pinnawala.html': 'pinnawala',
  'pinnawala-elephant-orphanage.html': 'pinnawala',
  'udawalawe.html': 'udawalawe',
  'udawalawe-transit-home.html': 'udawalawe',
  'data-and-analytics.html': 'data-and-analytics',
  'statistics.html': 'data-and-analytics',
  'human-elephant-conflict.html': 'human-elephant-conflict',
  'hec.html': 'human-elephant-conflict',
  'conservation-news.html': 'conservation-news',
  'news.html': 'conservation-news',
  'dossier.html': 'data-and-analytics'
};

function generateHeader(activePath) {
  const isWelfareClusterActive = ['welfare-and-care', 'elephant-orphanages', 'pinnawala', 'udawalawe'].includes(activePath);
  const isWelfarePage = activePath === 'welfare-and-care';
  const isPinnawalaActive = activePath === 'pinnawala';
  const isUdawalaweActive = activePath === 'udawalawe';
  const isOrphanageHub = activePath === 'elephant-orphanages';

  const welfareBtnClass = isWelfareClusterActive
    ? 'px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors flex items-center gap-1'
    : 'px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors flex items-center gap-1';

  function getLink(pathKey, label, href) {
    if (pathKey === activePath) {
      return `<a aria-current="page" class="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-[13px] whitespace-nowrap transition-colors" data-path="${pathKey}" href="${href}">${label}</a>`;
    }
    return `<a class="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-[13px] font-medium whitespace-nowrap transition-colors" data-path="${pathKey}" href="${href}">${label}</a>`;
  }

  function getMobileLink(pathKey, label, href) {
    if (pathKey === activePath) {
      return `<a aria-current="page" class="px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-semibold text-body-sm flex items-center justify-between" data-path="${pathKey}" href="${href}"><span>${label}</span><span class="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span></a>`;
    }
    return `<a class="px-3 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container text-body-sm transition-colors" data-path="${pathKey}" href="${href}">${label}</a>`;
  }

  const desktopNav = `
    <!-- Desktop Navigation: Strictly 1 line, no wrapping -->
    <nav class="hidden xl:flex items-center gap-1 shrink-0" data-active-classes="bg-secondary-container text-on-secondary-container font-semibold rounded-lg">
      ${getLink('home', 'Home', 'index.html')}
      ${getLink('species-profile', 'Species Profile', 'species-profile.html')}
      ${getLink('heritage-and-culture', 'Heritage &amp; Culture', 'heritage-and-culture.html')}
      ${getLink('colonial-archive', 'Colonial Archive', 'colonial-archive.html')}
      ${getLink('habitats-and-corridors', 'Habitats &amp; Corridors', 'habitats-and-corridors.html')}
      
      <!-- Welfare & Care with Dropdown -->
      <div class="relative group/welfare inline-block">
        <a ${isWelfareClusterActive ? 'aria-current="page"' : ''} class="${welfareBtnClass}" data-path="welfare-and-care" href="welfare-and-care.html">
          <span>Welfare &amp; Care</span>
          <span class="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover/welfare:rotate-180">expand_more</span>
        </a>
        <div class="absolute left-0 top-full pt-1.5 w-72 opacity-0 pointer-events-none group-hover/welfare:opacity-100 group-hover/welfare:pointer-events-auto transition-all duration-200 z-50">
          <div class="bg-surface-container-high/95 backdrop-blur-2xl rounded-2xl p-2 flex flex-col space-y-1 shadow-2xl">
            <a class="px-3 py-2 rounded-xl ${isWelfarePage ? 'bg-surface-container text-secondary-fixed' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors flex flex-col group/item" href="welfare-and-care.html">
              <div class="flex items-center justify-between">
                <span class="text-[13px] font-semibold text-primary group-hover/item:text-secondary-fixed transition-colors">Welfare &amp; Care Overview</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono">${isWelfarePage ? 'ACTIVE' : 'ETHOLOGY'}</span>
              </div>
              <span class="text-[11px] text-on-surface-variant/80">Wild ethology vs managed captive care</span>
            </a>
            <a class="px-3 py-2 rounded-xl ${isPinnawalaActive ? 'bg-surface-container text-secondary-fixed' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors flex flex-col group/item" href="pinnawala.html">
              <div class="flex items-center justify-between">
                <span class="text-[13px] font-semibold text-primary group-hover/item:text-secondary-fixed transition-colors">Pinnawala Elephant Orphanage</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono">${isPinnawalaActive ? 'ACTIVE' : '1975'}</span>
              </div>
              <span class="text-[11px] text-on-surface-variant/80">Care, breeding &amp; Ma Oya bathing</span>
            </a>
            <a class="px-3 py-2 rounded-xl ${isUdawalaweActive ? 'bg-surface-container text-secondary-fixed' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary'} transition-colors flex flex-col group/item" href="udawalawe.html">
              <div class="flex items-center justify-between">
                <span class="text-[13px] font-semibold text-primary group-hover/item:text-secondary-fixed transition-colors">Udawalawe Elephant Transit Home</span>
                <span class="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono">${isUdawalaweActive ? 'ACTIVE' : 'ETH'}</span>
              </div>
              <span class="text-[11px] text-on-surface-variant/80">Wild calf rehabilitation &amp; release</span>
            </a>
            <div class="pt-1 mt-1 border-t border-outline-variant/10">
              <a class="px-3 py-1.5 rounded-lg hover:bg-surface-container text-secondary-fixed text-[12px] font-medium flex items-center justify-between ${isOrphanageHub ? 'bg-surface-container/60 font-semibold' : ''}" href="elephant-orphanages.html">
                <span>Orphanages Hub (Two Paths)</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      ${getLink('data-and-analytics', 'Data &amp; Analytics', 'data-and-analytics.html')}
      ${getLink('human-elephant-conflict', 'HEC Portal', 'human-elephant-conflict.html')}
      ${getLink('conservation-news', 'News', 'conservation-news.html')}
    </nav>`;

  const mobileNav = `
      ${getMobileLink('home', 'Home', 'index.html')}
      ${getMobileLink('species-profile', 'Species Profile', 'species-profile.html')}
      ${getMobileLink('heritage-and-culture', 'Heritage &amp; Culture', 'heritage-and-culture.html')}
      ${getMobileLink('colonial-archive', 'Colonial Archive', 'colonial-archive.html')}
      ${getMobileLink('habitats-and-corridors', 'Habitats &amp; Corridors', 'habitats-and-corridors.html')}
      
      <!-- Mobile Submenu for Welfare & Care -->
      <div class="space-y-1 bg-surface-container/60 rounded-xl p-2">
        <a class="px-3 py-1.5 rounded-lg ${isWelfarePage ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'text-on-surface-variant hover:text-primary'} text-body-sm flex items-center justify-between" href="welfare-and-care.html">
          <span>Welfare &amp; Care</span>
          <span class="text-[10px] text-secondary font-mono">Overview</span>
        </a>
        <div class="pl-3 space-y-1">
          <a class="px-3 py-1.5 rounded-lg ${isPinnawalaActive ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'text-on-surface-variant hover:text-primary'} text-[13px] flex items-center justify-between" href="pinnawala.html">
            <span>Pinnawala Elephant Orphanage</span>
            <span class="text-[10px] text-secondary font-mono">1975</span>
          </a>
          <a class="px-3 py-1.5 rounded-lg ${isUdawalaweActive ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'text-on-surface-variant hover:text-primary'} text-[13px] flex items-center justify-between" href="udawalawe.html">
            <span>Udawalawe Elephant Transit Home</span>
            <span class="text-[10px] text-secondary font-mono">ETH</span>
          </a>
          <a class="px-3 py-1.5 rounded-lg ${isOrphanageHub ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'text-on-surface-variant hover:text-primary'} text-[13px] flex items-center justify-between" href="elephant-orphanages.html">
            <span>Elephant Orphanages Hub</span>
            <span class="text-[10px] text-secondary">Two Paths</span>
          </a>
        </div>
      </div>

      ${getMobileLink('data-and-analytics', 'Data &amp; Analytics', 'data-and-analytics.html')}
      ${getMobileLink('human-elephant-conflict', 'HEC Portal', 'human-elephant-conflict.html')}
      ${getMobileLink('conservation-news', 'News', 'conservation-news.html')}
  `;

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
    ${desktopNav}
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
      ${mobileNav}
    </nav>
    <div class="mt-3 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
      <span class="text-[11px] uppercase tracking-wider text-secondary">Gaja Lanka 2026 Archive</span>
      <a class="text-xs font-semibold text-secondary-fixed hover:underline" href="data-and-analytics.html#repository">Datasets &amp; API &rarr;</a>
    </div>
  </div>
</header>`;
}

function updateFile(filename) {
  const filePath = path.join(ROOT_DIR, filename);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf-8');
  const activePath = FILE_TO_PATH[filename] || 'home';

  // Replace header
  const newHeader = generateHeader(activePath);
  html = html.replace(/<header[\s\S]*?<\/header>/i, newHeader);

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`Updated navigation in ${filename}`);
}

Object.keys(FILE_TO_PATH).forEach(file => {
  updateFile(file);
});
console.log('Finished synchronizing Welfare & Care dropdown across all HTML files.');
