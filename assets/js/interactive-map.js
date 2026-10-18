// Gaja Lanka - Modern Topographic Telemetry & Migration Map Engine
// Inspired by high-end dark architectural and GIS ecological cartography

const mapData = {
  parks: [
    {
      id: "minneriya",
      name: "Minneriya & Kaudulla",
      cx: 335,
      cy: 330,
      r: 22,
      path: "M 315 315 Q 345 310 355 330 Q 350 355 325 350 Z",
      tag: "The Great Gathering",
      pop: "300 - 450",
      coords: "8.033° N, 80.900° E",
      elev: "90m - 180m",
      corridorStatus: "Seasonal Bottleneck (Hurulu)",
      fill: "rgba(34, 197, 94, 0.25)",
      stroke: "#22c55e"
    },
    {
      id: "udawalawe",
      name: "Udawalawe National Park",
      cx: 310,
      cy: 640,
      r: 24,
      path: "M 285 625 Q 330 620 335 650 Q 320 670 290 660 Z",
      tag: "Year-Round Density",
      pop: "600 - 800",
      coords: "6.474° N, 80.898° E",
      elev: "100m - 320m",
      corridorStatus: "Severely Islanded by Canals",
      fill: "rgba(34, 197, 94, 0.25)",
      stroke: "#22c55e"
    },
    {
      id: "yala",
      name: "Ruhuna Yala & Bundala",
      cx: 415,
      cy: 670,
      r: 30,
      path: "M 380 645 Q 445 640 450 685 Q 410 715 385 680 Z",
      tag: "Coastal Scrub & Lagoons",
      pop: "300 - 350",
      coords: "6.368° N, 81.527° E",
      elev: "0m - 120m",
      corridorStatus: "Fragmented by Mattala / Highways",
      fill: "rgba(34, 197, 94, 0.25)",
      stroke: "#22c55e"
    },
    {
      id: "wilpattu",
      name: "Wilpattu National Park",
      cx: 195,
      cy: 310,
      r: 32,
      path: "M 165 280 Q 225 270 230 330 Q 200 365 170 340 Z",
      tag: "Villu Sand Basins",
      pop: "150 - 250",
      coords: "8.450° N, 80.016° E",
      elev: "15m - 150m",
      corridorStatus: "Northern Corridor Re-establishing",
      fill: "rgba(34, 197, 94, 0.25)",
      stroke: "#22c55e"
    },
    {
      id: "wasgamuwa",
      name: "Wasgamuwa & Flood Plains",
      cx: 345,
      cy: 440,
      r: 25,
      path: "M 325 415 Q 365 410 370 455 Q 345 475 325 460 Z",
      tag: "Mahaweli Riverine Basin",
      pop: "250 - 300",
      coords: "7.716° N, 80.933° E",
      elev: "75m - 500m",
      corridorStatus: "Vital Riverine Stepping Stone",
      fill: "rgba(34, 197, 94, 0.25)",
      stroke: "#22c55e"
    },
    {
      id: "sinharaja",
      name: "Sinharaja Rainforest",
      cx: 235,
      cy: 660,
      r: 16,
      path: "M 220 645 Q 255 645 250 675 Q 230 685 218 670 Z",
      tag: "Relict Wet-Zone Clan",
      pop: "15 - 20 (Rare)",
      coords: "6.416° N, 80.466° E",
      elev: "300m - 1170m",
      corridorStatus: "Critically Isolated / Genetic Rescue Needed",
      fill: "rgba(16, 185, 129, 0.3)",
      stroke: "#10b981"
    }
  ],

  corridors: [
    {
      id: "c-hurulu",
      name: "Minneriya – Kaudulla – Hurulu Corridor",
      d: "M 335 320 C 345 290, 360 270, 375 250",
      type: "primary",
      activeSeason: "July – October",
      traffic: "High (350+ Elephants)",
      threat: "Farming hamlets & Moragahakanda canals"
    },
    {
      id: "c-mahaweli",
      name: "Mahaweli Riverine Trunk Corridor",
      d: "M 345 440 C 370 390, 395 340, 420 290",
      type: "primary",
      activeSeason: "Year-Round Riverine",
      traffic: "Continuous Migratory Flow",
      threat: "Illegal sand mining & chena clearing"
    },
    {
      id: "c-southern",
      name: "Yala – Lunugamvehera – Udawalawe Link",
      d: "M 415 670 C 375 660, 350 655, 310 640",
      type: "fragmented",
      activeSeason: "Northeast Monsoon (Nov – Feb)",
      traffic: "Bulls & Small Family Units",
      threat: "Southern Expressway & Mattala development"
    },
    {
      id: "c-northwest",
      name: "Wilpattu – Vavuniya Northern Transit",
      d: "M 195 310 C 220 260, 240 220, 270 190",
      type: "recovering",
      activeSeason: "Dry Season Water Migration",
      traffic: "Scattered Forest Clans",
      threat: "Railway tracks & unpaved army roads"
    },
    {
      id: "c-galgamuwa",
      name: "Kala Wewa – Kahalla Pallekele Corridor",
      d: "M 270 365 C 295 350, 315 340, 335 330",
      type: "high-conflict",
      activeSeason: "Harvest Season (Paddy raids)",
      traffic: "Solitary Bulls & Small Herds",
      threat: "High-density village electric fences"
    }
  ],

  waterholes: [
    { name: "Minneriya Reservoir Basin", x: 335, y: 330, type: "Perennial Gathering", count: "400+" },
    { name: "Kala Wewa Tank", x: 270, y: 365, type: "Dry Season Basin", count: "120+" },
    { name: "Udawalawe Reservoir", x: 310, y: 640, type: "Year-Round Waterhole", count: "250+" },
    { name: "Senanayake Samudraya (Gal Oya)", x: 420, y: 500, type: "Inland Deep Lake", count: "150+" },
    { name: "Mahakanadarawa Wewa", x: 290, y: 285, type: "North-Central Tank", count: "80+" },
    { name: "Bundala Coastal Lagoons", x: 385, y: 690, type: "Brackish Wetland", count: "60+" }
  ],

  hazards: [
    {
      id: "h-galgamuwa",
      name: "Galgamuwa Northern Line Railway Sector",
      x: 255,
      y: 360,
      risk: "Severe Railway Collision Zone",
      stats: "24 Elephants Killed (2018-2025)",
      cause: "High-speed night express trains around blind forest curves"
    },
    {
      id: "h-habarana",
      name: "Habarana – Hathareskotuwa Rail Hotspot",
      x: 325,
      y: 310,
      risk: "Multiple Impact Crossing",
      stats: "18 Elephants Killed (2019-2025)",
      cause: "Commercial fuel and cement freight trains striking crossing herds"
    },
    {
      id: "h-mattala",
      name: "Mattala Highway & Airport Corridor Severance",
      x: 370,
      y: 660,
      risk: "Corridor Disruption & High-Voltage Wires",
      stats: "31 Fatalities (Electrocution / Hakka Patas)",
      cause: "Unplanned infrastructure slicing ancestral migration corridor"
    },
    {
      id: "h-ampara",
      name: "Ampara – Uhana Agricultural Frontier",
      x: 440,
      y: 520,
      risk: "Intense Hakka Patas & Trap Gun Incidents",
      stats: "45+ Annual Deaths in HEC",
      cause: "Sugar cane cultivation expansion into elephant forest ranges"
    }
  ]
};

let activeElementId = 'minneriya';

function initInteractiveMap() {
  const container = document.getElementById('topographic-map-container');
  if (!container) return;

  // Render SVG Map Canvas
  container.innerHTML = `
    <!-- Topographic Telemetry Map Frame -->
    <div class="relative w-full rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
      
      <!-- Top HUD Header Bar -->
      <div class="p-4 sm:p-5 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs uppercase font-mono font-bold tracking-widest text-emerald-400">GIS Telemetry</span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">SRI LANKA 1:500,000</span>
            </div>
            <h4 class="text-sm sm:text-base font-serif font-bold text-white">Ecological Migration Corridors &amp; Habitat Zones</h4>
          </div>
        </div>

        <!-- Layer Visibility Toggles -->
        <div class="flex flex-wrap items-center gap-2 text-xs">
          <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white cursor-pointer select-none">
            <input type="checkbox" id="layer-parks" checked class="rounded border-slate-700 text-emerald-500 focus:ring-0">
            <span class="text-[11px] font-medium text-emerald-400">● Sanctuaries</span>
          </label>
          <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white cursor-pointer select-none">
            <input type="checkbox" id="layer-corridors" checked class="rounded border-slate-700 text-cyan-500 focus:ring-0">
            <span class="text-[11px] font-medium text-cyan-400">─ Corridors</span>
          </label>
          <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white cursor-pointer select-none">
            <input type="checkbox" id="layer-waterholes" checked class="rounded border-slate-700 text-amber-500 focus:ring-0">
            <span class="text-[11px] font-medium text-amber-400">◉ Waterholes</span>
          </label>
          <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white cursor-pointer select-none">
            <input type="checkbox" id="layer-hazards" checked class="rounded border-slate-700 text-red-500 focus:ring-0">
            <span class="text-[11px] font-medium text-red-400">▲ Hazards</span>
          </label>
        </div>
      </div>

      <!-- Main Map & HUD Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        <!-- Cartographic Map Graphic View (7 cols) -->
        <div class="lg:col-span-7 relative bg-slate-950 flex items-center justify-center p-2 sm:p-6 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
          
          <!-- Satellite Topographic Image Backdrop -->
          <div class="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
            <img src="assets/images/sri-lanka-topo-map.jpg" alt="Topographic map texture of Sri Lanka" class="w-full h-full object-cover filter contrast-125 brightness-75">
          </div>
          
          <!-- Subtle Topographic Radar Grid Overlay -->
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none"></div>

          <!-- Compass Rose HUD Element -->
          <div class="absolute top-4 right-4 z-20 pointer-events-none flex flex-col items-center opacity-70">
            <span class="text-[10px] font-mono text-slate-400 font-bold mb-0.5">N</span>
            <svg class="w-6 h-6 text-emerald-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2l4 9h-8l4-9zm0 0v20m0 0l-4-9h8l-4 9z"/>
            </svg>
            <span class="text-[9px] font-mono text-slate-500 mt-1">50 KM</span>
          </div>

          <!-- Interactive Scalable SVG Map Canvas -->
          <svg id="sri-lanka-interactive-svg" viewBox="0 0 600 850" class="w-full h-auto max-h-[720px] relative z-10 select-none drop-shadow-2xl">
            <defs>
              <!-- Glowing Filters -->
              <filter id="glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-amber" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-red" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Layer 1: Island Topographic Elevation Contours (Subtle Vector Lines) -->
            <g id="svg-contours" stroke="rgba(148, 163, 184, 0.12)" fill="none" stroke-width="0.75" class="pointer-events-none">
              <!-- Central Highland Elevation Rings -->
              <ellipse cx="295" cy="510" rx="65" ry="45" />
              <ellipse cx="295" cy="510" rx="85" ry="60" />
              <ellipse cx="295" cy="510" rx="110" ry="80" />
              <ellipse cx="295" cy="510" rx="140" ry="105" />
              <ellipse cx="295" cy="510" rx="175" ry="140" />
              <!-- Northern Plain Contour -->
              <path d="M 180 260 Q 280 220 370 270 Q 380 340 350 400" />
              <path d="M 160 300 Q 280 250 390 310 Q 400 390 360 450" />
              <!-- Southern Contour -->
              <path d="M 220 620 Q 300 680 430 630" />
              <path d="M 200 660 Q 310 730 450 670" />
            </g>

            <!-- Layer 2: Major River Systems (Telemetry Water Arteries) -->
            <g id="svg-rivers" stroke="rgba(56, 189, 248, 0.3)" fill="none" stroke-width="1.2" class="pointer-events-none">
              <!-- Mahaweli Ganga -->
              <path d="M 305 530 Q 330 480 345 440 Q 360 400 390 350 Q 420 310 440 280" />
              <!-- Walawe River -->
              <path d="M 290 540 Q 305 600 310 640 Q 315 670 320 710" />
              <!-- Yan Oya -->
              <path d="M 310 320 Q 350 290 380 240 Q 400 220 420 200" />
              <!-- Malwathu Oya -->
              <path d="M 280 340 Q 250 300 220 260 Q 190 240 170 230" />
            </g>

            <!-- Layer 3: Active Migration Corridors -->
            <g id="group-corridors">
              ${mapData.corridors.map(c => `
                <g class="cursor-pointer map-corridor-item" data-id="${c.id}">
                  <!-- Glow backing path -->
                  <path d="${c.d}" fill="none" stroke="${c.type === 'primary' ? '#22c55e' : c.type === 'high-conflict' ? '#ef4444' : '#06b6d4'}" stroke-width="6" opacity="0.3" filter="url(#glow-emerald)" />
                  <!-- Dash path -->
                  <path d="${c.d}" fill="none" stroke="${c.type === 'primary' ? '#4ade80' : c.type === 'high-conflict' ? '#f87171' : '#22d3ee'}" stroke-width="2.5" stroke-dasharray="6,4" class="hover:stroke-white transition" />
                </g>
              `).join('')}
            </g>

            <!-- Layer 4: National Parks & Sanctuaries (Zones & Labels) -->
            <g id="group-parks">
              ${mapData.parks.map(p => `
                <g class="cursor-pointer map-park-item group" data-id="${p.id}">
                  <!-- Boundary polygon -->
                  <path d="${p.path}" fill="${p.fill}" stroke="${p.stroke}" stroke-width="1.5" stroke-dasharray="4,2" class="hover:fill-emerald-500/40 hover:stroke-white transition" filter="url(#glow-emerald)" />
                  <!-- Center radar ring -->
                  <circle cx="${p.cx}" cy="${p.cy}" r="${p.r}" fill="none" stroke="${p.stroke}" stroke-width="0.8" opacity="0.6" stroke-dasharray="2,2" />
                  <!-- Center Node -->
                  <circle cx="${p.cx}" cy="${p.cy}" r="5" fill="#10b981" stroke="#ffffff" stroke-width="1.5" class="group-hover:scale-125 transition transform origin-center" />
                  <!-- Park Name Callout -->
                  <text x="${p.cx}" y="${p.cy - 12}" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#f8fafc" class="pointer-events-none drop-shadow">
                    ${p.name.split('&')[0].trim()}
                  </text>
                  <text x="${p.cx}" y="${p.cy + 18}" text-anchor="middle" font-family="monospace" font-size="8" fill="#6ee7b7" class="pointer-events-none">
                    ${p.pop} ELEPHANTS
                  </text>
                </g>
              `).join('')}
            </g>

            <!-- Layer 5: Perennial Waterhole Congregation Nodes -->
            <g id="group-waterholes">
              ${mapData.waterholes.map(w => `
                <g class="cursor-pointer map-water-item" data-name="${w.name}">
                  <circle cx="${w.x}" cy="${w.y}" r="8" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="2,2" class="animate-spin" style="transform-origin: ${w.x}px ${w.y}px; animation-duration: 10s;" />
                  <circle cx="${w.x}" cy="${w.y}" r="3" fill="#fbbf24" stroke="#ffffff" stroke-width="1" />
                </g>
              `).join('')}
            </g>

            <!-- Layer 6: Railway & Highway Collision Hazard Nodes -->
            <g id="group-hazards">
              ${mapData.hazards.map(h => `
                <g class="cursor-pointer map-hazard-item group" data-id="${h.id}">
                  <!-- Pulsing Hazard Outer Ring -->
                  <circle cx="${h.x}" cy="${h.y}" r="11" fill="none" stroke="#ef4444" stroke-width="1" opacity="0.8" class="animate-ping" style="transform-origin: ${h.x}px ${h.y}px;" />
                  <!-- Hazard Triangle / Dot -->
                  <circle cx="${h.x}" cy="${h.y}" r="4.5" fill="#ef4444" stroke="#ffffff" stroke-width="1.2" filter="url(#glow-red)" />
                </g>
              `).join('')}
            </g>

            <!-- Dynamic Active Target Tracker Ring -->
            <g id="active-tracker-ring" class="pointer-events-none transition-all duration-500">
              <circle id="tracker-circle-1" cx="335" cy="330" r="32" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,4" class="animate-spin" style="transform-origin: 335px 330px; animation-duration: 8s;" />
              <circle id="tracker-circle-2" cx="335" cy="330" r="26" fill="none" stroke="#34d399" stroke-width="0.8" opacity="0.6" />
            </g>
          </svg>

          <!-- Interactive Floating Map Tooltip -->
          <div id="map-tooltip" class="absolute hidden z-30 pointer-events-none px-3 py-2 rounded-xl bg-slate-900/95 border border-slate-700 text-xs shadow-2xl backdrop-blur-md transform -translate-x-1/2 -translate-y-full mb-3">
            <p id="tooltip-title" class="font-bold text-white"></p>
            <p id="tooltip-desc" class="text-[11px] text-emerald-400 font-mono"></p>
          </div>
        </div>

        <!-- Telemetry & Ecological Dossier HUD Sidebar (5 cols - Inspired by Image 2 / RENON) -->
        <div class="lg:col-span-5 p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between space-y-6">
          
          <!-- Top Telemetry Panel -->
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
              <span id="hud-type-badge" class="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                Sanctuary Zone
              </span>
              <span id="hud-coords" class="text-slate-400 font-mono text-[11px]">8.033° N, 80.900° E</span>
            </div>

            <!-- Title & Density Headline -->
            <div class="mt-4">
              <span id="hud-subtitle" class="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Habitat Dossier</span>
              <h3 id="hud-title" class="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">Minneriya &amp; Kaudulla</h3>
              <p id="hud-tagline" class="text-xs text-slate-400 mt-1">The Great Gathering | North Central Province</p>
            </div>

            <!-- Telemetry Metrics Strip (Image 2 aesthetic) -->
            <div class="grid grid-cols-2 gap-3 mt-6">
              <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span class="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Est. Herd Size</span>
                <p id="hud-density" class="text-xl font-bold font-serif text-emerald-400 mt-0.5">300 - 450</p>
                <span class="text-[10px] text-slate-500">Dry Season Peak</span>
              </div>
              <div class="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span class="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Elevation Profile</span>
                <p id="hud-elevation" class="text-xl font-bold font-serif text-amber-300 mt-0.5">90m – 180m</p>
                <span class="text-[10px] text-slate-500">Lowland River Basin</span>
              </div>
            </div>

            <!-- Detailed Ecological Overview -->
            <div class="mt-6 space-y-4">
              <div class="p-4 rounded-2xl bg-slate-950/90 border border-slate-800">
                <h5 class="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Ecological Dynamics &amp; Seasonal Habitats
                </h5>
                <p id="hud-narrative" class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  During July–October, vast herds convene on the receding tank bed of the 3rd-century Minneriya reservoir to feast on fresh tender shoots of Cynodon dactylon grass. Recognized as one of the premier wildlife congregations in Asia.
                </p>
              </div>

              <!-- Corridor Status & Telemetry Threat Level -->
              <div class="p-4 rounded-2xl bg-slate-950/90 border border-slate-800">
                <h5 class="text-xs font-bold text-slate-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Corridor Connectivity &amp; Risk Matrix
                </h5>
                <p id="hud-corridor" class="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono text-[11px]">
                  Connected via the Hurulu-Kaudulla-Minneriya wildlife corridor. Disrupted periodically by farming settlements and Moragahakanda reservoir irrigation canals.
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons & Direct Links -->
          <div class="pt-4 border-t border-slate-800">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
              Verified Dossier Resources &amp; Spatial Data
            </span>
            <div id="hud-resources-container" class="flex flex-wrap gap-2">
              <a id="hud-primary-link" href="https://www.dwc.gov.lk" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-950 border border-emerald-600/40 text-emerald-300 hover:bg-emerald-900 transition inline-flex items-center gap-1.5">
                <span>DWC Sanctuary Portal</span> &rarr;
              </a>
              <a href="https://ccrsl.org" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition inline-flex items-center gap-1.5">
                <span>CCR Telemetry</span> &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupMapInteractions();
}

function updateHUD(type, item) {
  const badge = document.getElementById('hud-type-badge');
  const coords = document.getElementById('hud-coords');
  const subtitle = document.getElementById('hud-subtitle');
  const title = document.getElementById('hud-title');
  const tagline = document.getElementById('hud-tagline');
  const density = document.getElementById('hud-density');
  const elevation = document.getElementById('hud-elevation');
  const narrative = document.getElementById('hud-narrative');
  const corridor = document.getElementById('hud-corridor');
  const resContainer = document.getElementById('hud-resources-container');
  const tracker1 = document.getElementById('tracker-circle-1');
  const tracker2 = document.getElementById('tracker-circle-2');

  if (!badge) return;

  if (type === 'park') {
    badge.className = "px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider";
    badge.textContent = "Sanctuary Zone";
    coords.textContent = item.coords;
    subtitle.textContent = "Protected National Park";
    title.textContent = item.name;
    tagline.textContent = `${item.tag} | Area: ${item.size || 'Protected Sanctuary'}`;
    density.textContent = item.pop;
    elevation.textContent = item.elev;
    narrative.textContent = item.highlights || item.tag;
    corridor.textContent = item.corridor || item.corridorStatus;

    // Reposition Tracker Ring
    if (tracker1 && tracker2) {
      tracker1.setAttribute('cx', item.cx);
      tracker1.setAttribute('cy', item.cy);
      tracker1.style.transformOrigin = `${item.cx}px ${item.cy}px`;
      tracker2.setAttribute('cx', item.cx);
      tracker2.setAttribute('cy', item.cy);
      tracker1.setAttribute('stroke', '#34d399');
    }

    // Resources
    if (resContainer && item.resources) {
      resContainer.innerHTML = item.resources.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 transition inline-flex items-center gap-1.5">
          <span class="text-[9px] text-emerald-400 font-bold uppercase">${r.badge}</span>
          <span>${r.label}</span> &rarr;
        </a>
      `).join('');
    }
  } else if (type === 'corridor') {
    badge.className = "px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase font-bold tracking-wider";
    badge.textContent = "Migration Route";
    coords.textContent = "Multi-District Route";
    subtitle.textContent = "Active Wildlife Corridor";
    title.textContent = item.name;
    tagline.textContent = `Timing: ${item.activeSeason} | Status: ${item.traffic}`;
    density.textContent = item.traffic.split(' ')[0] || "Variable";
    elevation.textContent = "Riverine / Basin";
    narrative.textContent = `Traditional seasonal migratory corridor used by wild elephant herds to travel between feeding grounds and perennial water reservoirs during drought periods.`;
    corridor.textContent = `CRITICAL THREAT: ${item.threat}. Preservation of natural forest buffers is urgently required to prevent crop raids.`;

    if (resContainer) {
      resContainer.innerHTML = `
        <a href="https://ccrsl.org" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950 border border-cyan-600/40 text-cyan-300 hover:bg-cyan-900 transition inline-flex items-center gap-1.5">
          <span>CCR Telemetry Mapping</span> &rarr;
        </a>
        <a href="hec.html" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition inline-flex items-center gap-1.5">
          <span>Coexistence Solutions</span> &rarr;
        </a>
      `;
    }
  } else if (type === 'hazard') {
    badge.className = "px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 font-mono text-[10px] uppercase font-bold tracking-wider";
    badge.textContent = "Critical Hazard Hotspot";
    coords.textContent = "Infrastructure Intersection";
    subtitle.textContent = "Human-Wildlife Conflict Frontier";
    title.textContent = item.name;
    tagline.textContent = item.risk;
    density.textContent = "High Risk";
    elevation.textContent = item.stats;
    narrative.textContent = item.cause;
    corridor.textContent = "URGENT MITIGATION: Speed restriction radars, trackside infrared sensors, and farmer-managed seasonal fencing must be deployed.";

    if (tracker1 && tracker2) {
      tracker1.setAttribute('cx', item.x);
      tracker1.setAttribute('cy', item.y);
      tracker1.style.transformOrigin = `${item.x}px ${item.y}px`;
      tracker2.setAttribute('cx', item.x);
      tracker2.setAttribute('cy', item.y);
      tracker1.setAttribute('stroke', '#ef4444');
    }

    if (resContainer) {
      resContainer.innerHTML = `
        <a href="https://www.railway.gov.lk" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-red-950 border border-red-600/40 text-red-300 hover:bg-red-900 transition inline-flex items-center gap-1.5">
          <span>Railway Safety Directives</span> &rarr;
        </a>
        <a href="hec.html" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition inline-flex items-center gap-1.5">
          <span>Explore HEC Solutions</span> &rarr;
        </a>
      `;
    }
  } else if (type === 'waterhole') {
    badge.className = "px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-mono text-[10px] uppercase font-bold tracking-wider";
    badge.textContent = "Waterhole Oasis";
    coords.textContent = "Perennial Hydrological Node";
    subtitle.textContent = "Dry Season Gathering Site";
    title.textContent = item.name;
    tagline.textContent = `Type: ${item.type} | Seasonal Congregate Point`;
    density.textContent = item.count;
    elevation.textContent = "Riparian Shoreline";
    narrative.textContent = `Vital hydration point where multiple elephant clans assemble during severe drought spells to drink, wallow in cooling mud, and graze on subaquatic reservoir grasses.`;
    corridor.textContent = `HYDROLOGY POLICY: Regulated irrigation reservoir sluice discharge schedules and preservation of catchment watershed canopies protect these dry-season lifelines.`;

    if (tracker1 && tracker2) {
      tracker1.setAttribute('cx', item.x);
      tracker1.setAttribute('cy', item.y);
      tracker1.style.transformOrigin = `${item.x}px ${item.y}px`;
      tracker2.setAttribute('cx', item.x);
      tracker2.setAttribute('cy', item.y);
      tracker1.setAttribute('stroke', '#f59e0b');
    }

    if (resContainer) {
      resContainer.innerHTML = `
        <a href="https://mahaweli.gov.lk" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-950 border border-amber-600/40 text-amber-300 hover:bg-amber-900 transition inline-flex items-center gap-1.5">
          <span>Irrigation Dept Hydrology</span> &rarr;
        </a>
        <a href="https://www.dwc.gov.lk" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition inline-flex items-center gap-1.5">
          <span>DWC Water Catchments</span> &rarr;
        </a>
      `;
    }
  }
}

// Global hook to select a park from external scripts
window.selectMapPark = function(parkId) {
  const park = mapData.parks.find(p => p.id === parkId);
  if (!park) return;
  if (typeof parkData !== 'undefined' && parkData[parkId]) {
    Object.assign(park, parkData[parkId]);
  }
  updateHUD('park', park);
};

function setupMapInteractions() {
  const tooltip = document.getElementById('map-tooltip');
  const tooltipTitle = document.getElementById('tooltip-title');
  const tooltipDesc = document.getElementById('tooltip-desc');
  const svg = document.getElementById('sri-lanka-interactive-svg');

  if (svg && tooltip) {
    svg.addEventListener('mousemove', (e) => {
      if (!tooltip.classList.contains('hidden')) {
        const rect = svg.getBoundingClientRect();
        tooltip.style.left = `${e.clientX - rect.left}px`;
        tooltip.style.top = `${e.clientY - rect.top}px`;
      }
    });
  }

  // Park items
  document.querySelectorAll('.map-park-item').forEach(el => {
    const id = el.getAttribute('data-id');
    const park = mapData.parks.find(p => p.id === id);
    if (!park) return;

    if (typeof parkData !== 'undefined' && parkData[id]) {
      Object.assign(park, parkData[id]);
    }

    el.addEventListener('click', () => {
      activeElementId = id;
      updateHUD('park', park);
      // Also trigger the existing park tabs if available
      const tabBtn = document.querySelector(`#park-tabs .tab-btn[data-park="${id}"]`);
      if (tabBtn && typeof renderParkDetail === 'function') {
        document.querySelectorAll('#park-tabs .tab-btn').forEach(b => b.classList.remove('tab-active'));
        tabBtn.classList.add('tab-active');
        renderParkDetail(id);
      }
    });

    el.addEventListener('mouseenter', () => {
      if (tooltip) {
        tooltip.classList.remove('hidden');
        tooltipTitle.textContent = park.name;
        tooltipDesc.textContent = `${park.pop} Elephants • ${park.tag}`;
      }
    });

    el.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.add('hidden');
    });
  });

  // Corridors
  document.querySelectorAll('.map-corridor-item').forEach(el => {
    const id = el.getAttribute('data-id');
    const corridor = mapData.corridors.find(c => c.id === id);
    if (!corridor) return;

    el.addEventListener('click', () => {
      updateHUD('corridor', corridor);
    });

    el.addEventListener('mouseenter', () => {
      if (tooltip) {
        tooltip.classList.remove('hidden');
        tooltipTitle.textContent = corridor.name;
        tooltipDesc.textContent = `Route: ${corridor.activeSeason} • ${corridor.traffic}`;
      }
    });

    el.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.add('hidden');
    });
  });

  // Waterholes
  document.querySelectorAll('.map-water-item').forEach(el => {
    const name = el.getAttribute('data-name');
    const water = mapData.waterholes.find(w => w.name === name);
    if (!water) return;

    el.addEventListener('click', () => {
      updateHUD('waterhole', water);
    });

    el.addEventListener('mouseenter', () => {
      if (tooltip) {
        tooltip.classList.remove('hidden');
        tooltipTitle.textContent = water.name;
        tooltipDesc.textContent = `Waterhole: ${water.count} Elephants • ${water.type}`;
      }
    });

    el.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.add('hidden');
    });
  });

  // Hazards
  document.querySelectorAll('.map-hazard-item').forEach(el => {
    const id = el.getAttribute('data-id');
    const hazard = mapData.hazards.find(h => h.id === id);
    if (!hazard) return;

    el.addEventListener('click', () => {
      updateHUD('hazard', hazard);
    });

    el.addEventListener('mouseenter', () => {
      if (tooltip) {
        tooltip.classList.remove('hidden');
        tooltipTitle.textContent = hazard.name;
        tooltipDesc.textContent = `Hazard: ${hazard.risk}`;
      }
    });

    el.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.add('hidden');
    });
  });

  // Layer Toggles
  const toggleParks = document.getElementById('layer-parks');
  const toggleCorridors = document.getElementById('layer-corridors');
  const toggleWaterholes = document.getElementById('layer-waterholes');
  const toggleHazards = document.getElementById('layer-hazards');

  if (toggleParks) {
    toggleParks.addEventListener('change', (e) => {
      const g = document.getElementById('group-parks');
      if (g) g.style.display = e.target.checked ? 'inline' : 'none';
    });
  }
  if (toggleCorridors) {
    toggleCorridors.addEventListener('change', (e) => {
      const g = document.getElementById('group-corridors');
      if (g) g.style.display = e.target.checked ? 'inline' : 'none';
    });
  }
  if (toggleWaterholes) {
    toggleWaterholes.addEventListener('change', (e) => {
      const g = document.getElementById('group-waterholes');
      if (g) g.style.display = e.target.checked ? 'inline' : 'none';
    });
  }
  if (toggleHazards) {
    toggleHazards.addEventListener('change', (e) => {
      const g = document.getElementById('group-hazards');
      if (g) g.style.display = e.target.checked ? 'inline' : 'none';
    });
  }

  // Initial Load with Minneriya
  const minneriyaPark = mapData.parks.find(p => p.id === 'minneriya');
  if (minneriyaPark && typeof parkData !== 'undefined' && parkData.minneriya) {
    Object.assign(minneriyaPark, parkData.minneriya);
    updateHUD('park', minneriyaPark);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initInteractiveMap();
});
