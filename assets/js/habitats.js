// Interactive Habitat Explorer Data & Logic with Official Resources
const parkData = {
  minneriya: {
    title: "Minneriya & Kaudulla National Parks",
    location: "North Central Province (Polonnaruwa District)",
    size: "Minneriya: 8,889 ha | Kaudulla: 6,900 ha",
    density: "300 - 450 Elephants (Dry Season Peak)",
    highlights: "Home of 'The Great Gathering'. During July–October, vast herds convene on the receding tank bed of the 3rd-century Minneriya reservoir to feast on fresh tender shoots of Cynodon dactylon grass.",
    corridor: "Connected via the Hurulu-Kaudulla-Minneriya wildlife corridor. Disrupted periodically by farming settlements and Moragahakanda reservoir irrigation canals.",
    resources: [
      { label: "DWC Minneriya Sanctuary Guide", url: "https://www.dwc.gov.lk", badge: "Official Portal" },
      { label: "CCR 'The Gathering' Research Paper", url: "https://ccrsl.org", badge: "Field Telemetry" },
      { label: "UNESCO Hurulu Biosphere Reserve", url: "https://en.unesco.org/biosphere/aspac/hurulu", badge: "UNESCO MAB" },
      { label: "Mahaweli Irrigation Water Scheduling", url: "https://mahaweli.gov.lk", badge: "Hydrology Policy" }
    ]
  },
  udawalawe: {
    title: "Udawalawe National Park",
    location: "Boundary of Sabaragamuwa & Uva Provinces",
    size: "30,821 hectares",
    density: "600 - 800 Resident Elephants (High Density Year-Round)",
    highlights: "Sri Lanka's premier year-round elephant viewing park. The vast open reservoir grasslands resemble East African savanna. Home to the world-renowned Elephant Transit Home (ETH).",
    corridor: "Severely bounded by agricultural development and deep irrigation channels, effectively making it an ecological island.",
    resources: [
      { label: "DWC Udawalawe National Park Dossier", url: "https://www.dwc.gov.lk", badge: "Official Portal" },
      { label: "Elephant Transit Home (ETH) Rewilding", url: "https://eth.dwc.gov.lk", badge: "Rescue Trust" },
      { label: "AsESG Udawalawe Carrying Capacity Study", url: "https://www.asesg.org", badge: "IUCN Study" }
    ]
  },
  yala: {
    title: "Yala (Ruhuna) & Bundala National Parks",
    location: "Southern & Uva Provinces (Hambantota/Monaragala)",
    size: "97,880 hectares (Complex of 5 Blocks)",
    density: "300 - 350 Elephants",
    highlights: "Semi-arid thorny scrubland punctuated by rocky inselbergs and coastal lagoons. Herds share waterholes with Sri Lankan leopards and sloth bears.",
    corridor: "Migration routes extend northward into Lunugamvehera National Park and the Mattala elephant reserve, heavily fragmented by highways and industrial development.",
    resources: [
      { label: "DWC Yala Protected Area Network", url: "https://www.dwc.gov.lk", badge: "Official Portal" },
      { label: "Bundala Ramsar Wetland Convention Sheet", url: "https://rsis.ramsar.org/ris/504", badge: "Ramsar Site" },
      { label: "WNPS Southern Wildlife Corridor Research", url: "https://wnpssl.org", badge: "Conservation Trust" }
    ]
  },
  wilpattu: {
    title: "Wilpattu National Park",
    location: "North Western & North Central Provinces",
    size: "131,693 hectares (Sri Lanka's Largest National Park)",
    density: "150 - 250 Elephants",
    highlights: "Characterized by unique 'Villus'—natural sand-rimmed water basins that fill with rainwater. Dense monsoon dry forests harbor elusive forest elephant family clans.",
    corridor: "Connects northward towards the Vavuniya and Mannar forest patches; historical corridor experiencing gradual post-conflict reforestation.",
    resources: [
      { label: "DWC Wilpattu National Park Overview", url: "https://www.dwc.gov.lk", badge: "Official Portal" },
      { label: "Wilpattu Ramsar Wetland Complex", url: "https://rsis.ramsar.org/ris/2095", badge: "Ramsar Site" },
      { label: "Northern Elephant Range Telemetry", url: "https://ccrsl.org", badge: "Research Paper" }
    ]
  },
  wasgamuwa: {
    title: "Wasgamuwa National Park & Mahaweli Corridors",
    location: "Matale & Polonnaruwa Districts",
    size: "39,322 hectares",
    density: "250 - 300 Elephants",
    highlights: "Flanked by the Mahaweli and Amban rivers. Rich riverine forests foster healthy breeding herds with thriving young calves.",
    corridor: "Crucial strategic bottleneck connecting central dry zone forests to the Flood Plains National Park and Somawathiya sanctuary.",
    resources: [
      { label: "DWC Wasgamuwa Conservation Plan", url: "https://www.dwc.gov.lk", badge: "Official Portal" },
      { label: "Sri Lanka Wildlife Conservation Society (SLWCS)", url: "https://www.slwcs.org", badge: "Field NGO" },
      { label: "Flood Plains & Somawathiya Protected Links", url: "https://www.dwc.gov.lk", badge: "Corridor Map" }
    ]
  },
  sinharaja: {
    title: "Sinharaja World Heritage Rainforest (Wet Zone)",
    location: "South-West Lowland Wet Zone (Ratnapura/Galle)",
    size: "11,187 hectares",
    density: "Extremely Rare: Estimated 15 - 20 Elephants Remaining",
    highlights: "The last surviving relict population of wet zone rainforest elephants. These elusive giants have adapted to steep mountain rainforest terrain.",
    corridor: "Critically endangered and isolated from all dry zone populations; genetic rescue or corridor reconnection with Peak Wilderness is urgently proposed.",
    resources: [
      { label: "UNESCO World Heritage List: Sinharaja Forest", url: "https://whc.unesco.org/en/list/405", badge: "UNESCO World Heritage" },
      { label: "Forest Department of Sri Lanka", url: "https://forestdept.gov.lk", badge: "Management Agency" },
      { label: "Rainforest Protectors of Sri Lanka", url: "https://www.rainforestprotectors.org", badge: "Wet Zone Rescue" }
    ]
  }
};

function renderParkDetail(key) {
  const p = parkData[key];
  if (!p) return;
  const card = document.getElementById('park-detail-card');
  if (!card) return;
  card.innerHTML = `
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
      <div>
        <span class="text-xs uppercase font-bold text-jungle-400 tracking-wider">Habitat Dossier</span>
        <h4 class="text-2xl font-serif font-bold text-white mt-1">${p.title}</h4>
        <p class="text-xs text-slate-400">${p.location} | Area: ${p.size}</p>
      </div>
      <div class="px-4 py-2 rounded-xl bg-jungle-950/80 border border-jungle-500/40 text-emerald-300 text-xs font-semibold">
        Pop. Density: ${p.density}
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div>
        <h5 class="text-xs font-bold text-amber-300 uppercase tracking-wide mb-2">Ecological Highlights</h5>
        <p class="text-sm text-slate-300 leading-relaxed">${p.highlights}</p>
      </div>
      <div>
        <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-2">Corridor Connectivity &amp; Status</h5>
        <p class="text-sm text-slate-300 leading-relaxed">${p.corridor}</p>
      </div>
    </div>
    <div class="mt-8 pt-5 border-t border-slate-800">
      <h5 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        Official Resources &amp; Field Documentation
      </h5>
      <div class="flex flex-wrap items-center gap-3">
        ${p.resources.map(r => `
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-emerald-500/50 hover:text-white transition shadow-sm">
            <span class="text-[10px] font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-600/30">${r.badge}</span>
            <span>${r.label}</span>
            <span class="text-slate-500">&rarr;</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('#park-tabs .tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('tab-active'));
      btn.classList.add('tab-active');
      const parkId = btn.getAttribute('data-park');
      renderParkDetail(parkId);
      if (typeof window.selectMapPark === 'function') {
        window.selectMapPark(parkId);
      }
    });
  });
  // Initial default render
  renderParkDetail('minneriya');
});

