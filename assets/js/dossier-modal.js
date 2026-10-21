/**
 * Gaja Lanka • Interactive Elephant Dossier Modal & Deep-Link Controller
 * Enables seamless viewing of full dossiers for Sri Lanka's famous living & deceased tuskers.
 */

(function () {
  'use strict';

  // Ensure GAJA_LANKA_DOSSIERS is loaded
  if (typeof GAJA_LANKA_DOSSIERS === 'undefined') {
    console.warn('[DossierModal] GAJA_LANKA_DOSSIERS not found. Ensure assets/js/dossier-data.js is loaded first.');
    return;
  }

  const dossierKeys = Object.keys(GAJA_LANKA_DOSSIERS);
  let currentDossierId = null;

  // Build Modal Container in DOM if not present
  function ensureModalElement() {
    let modal = document.getElementById('gaja-dossier-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'gaja-dossier-modal';
    modal.className = 'fixed inset-0 z-[9999] hidden items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-300 opacity-0';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Elephant Dossier Monograph');

    modal.innerHTML = `
      <div id="gaja-dossier-backdrop" class="fixed inset-0 bg-transparent"></div>
      <div class="relative w-full max-w-4xl my-auto bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform scale-95 border-0">
        
        <!-- Sticky Top Navigation / Action Bar -->
        <div class="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-surface-container/95 backdrop-blur-md">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.5 4.5c-.8 0-1.5.3-2.1.8L15 7.7V5c0-1.7-1.3-3-3-3H7C4.2 2 2 4.2 2 7v10c0 1.7 1.3 3 3 3h1v-4h2v4h4v-4h2v4h1c1.7 0 3-1.3 3-3v-4.5c1.2-.5 2-1.7 2-3 0-1.9-1.6-3.5-3.5-3.5zm-15 13.5c-.6 0-1-.4-1-1V7c0-1.7 1.3-3 3-3h5c.6 0 1 .4 1 1v6.5l-3.2 2.7c-.5.4-.8 1-.8 1.6V18H4.5zm15-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
              </svg>
            </span>
            <span class="font-label-editorial text-xs tracking-widest uppercase text-secondary font-semibold">
              Gaja Lanka Monograph Archives
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button id="modal-close-btn" type="button" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-highest/80 hover:bg-rose-950/80 text-on-surface hover:text-rose-300 transition-colors" aria-label="Close dossier">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <!-- Dossier Dynamic Content Container -->
        <div id="gaja-dossier-body" class="max-h-[82vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          <!-- Populated by JavaScript -->
        </div>

        <!-- Modal Bottom Switcher Bar -->
        <div class="flex items-center justify-between px-5 py-3 bg-surface-container/90 backdrop-blur-sm">
          <button id="modal-prev-btn" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label-data text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[16px]">arrow_back</span>
            <span class="hidden sm:inline">Previous Elephant</span>
          </button>
          
          <div class="flex items-center gap-1">
            <span id="modal-counter" class="font-label-data text-xs text-secondary-fixed font-semibold">1 / 10</span>
          </div>

          <button id="modal-next-btn" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label-data text-on-surface-variant hover:text-primary transition-colors">
            <span class="hidden sm:inline">Next Elephant</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('modal-close-btn').addEventListener('click', closeDossierModal);
    document.getElementById('gaja-dossier-backdrop').addEventListener('click', closeDossierModal);
    document.getElementById('modal-prev-btn').addEventListener('click', () => navigateDossier(-1));
    document.getElementById('modal-next-btn').addEventListener('click', () => navigateDossier(1));

    document.addEventListener('keydown', (e) => {
      const m = document.getElementById('gaja-dossier-modal');
      if (!m || m.classList.contains('hidden')) return;

      if (e.key === 'Escape') {
        closeDossierModal();
      } else if (e.key === 'ArrowLeft') {
        navigateDossier(-1);
      } else if (e.key === 'ArrowRight') {
        navigateDossier(1);
      }
    });

    return modal;
  }

  function renderDossierContent(d) {
    const permalinkBtn = document.getElementById('modal-permalink-btn');
    if (permalinkBtn) {
      permalinkBtn.href = `famous-elephants.html?id=${d.id}`;
      permalinkBtn.onclick = (e) => e.stopPropagation();
    }

    const counter = document.getElementById('modal-counter');
    if (counter) {
      const idx = dossierKeys.indexOf(d.id);
      counter.textContent = `${idx + 1} of ${dossierKeys.length}`;
    }

    const biometricsHtml = d.biometrics && d.biometrics.length > 0 ? `
      <div class="bg-surface-container rounded-xl p-4 sm:p-5 space-y-3">
        <h4 class="font-label-editorial text-xs tracking-wider uppercase text-secondary font-semibold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">straighten</span>
          Biometric & Phenotype Register
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          ${d.biometrics.map(b => `
            <div class="p-2.5 rounded-lg bg-surface-container-low">
              <span class="block text-[11px] font-label-editorial uppercase tracking-wider text-outline mb-0.5">${b.label}</span>
              <span class="font-body-md font-semibold text-primary text-sm">${b.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const narrativeHtml = d.narrative && d.narrative.length > 0 ? `
      <div class="bg-surface-container rounded-xl p-4 sm:p-5 space-y-3">
        <h4 class="font-label-editorial text-xs tracking-wider uppercase text-secondary font-semibold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">menu_book</span>
          Historical & Field Narrative
        </h4>
        <div class="space-y-3 font-body-md text-on-surface-variant text-sm leading-relaxed">
          ${d.narrative.map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>
    ` : '';

    const timelineHtml = d.timeline && d.timeline.length > 0 ? `
      <div class="bg-surface-container rounded-xl p-4 sm:p-5 space-y-3">
        <h4 class="font-label-editorial text-xs tracking-wider uppercase text-secondary font-semibold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">history_edu</span>
          Life Milestones & Incident Chronology
        </h4>
        <div class="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/30 pl-7">
          ${d.timeline.map(t => `
            <div class="relative space-y-0.5">
              <div class="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-primary/40 ring-4 ring-surface-container"></div>
              <span class="font-label-data text-xs font-semibold text-secondary-fixed">${t.date}</span>
              <h5 class="font-headline-sm text-sm text-primary font-medium">${t.title}</h5>
              <p class="font-body-sm text-xs text-on-surface-variant">${t.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const veterinaryHtml = d.veterinaryNotes ? `
      <div class="bg-surface-container rounded-xl p-4 sm:p-5 space-y-2">
        <h4 class="font-label-editorial text-xs tracking-wider uppercase text-amber-300 font-semibold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">medical_services</span>
          DWC Field Veterinary & Forensics Bulletin
        </h4>
        <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          ${d.veterinaryNotes}
        </p>
      </div>
    ` : '';

    const legacyHtml = d.legacy ? `
      <div class="bg-surface-container rounded-xl p-4 sm:p-5 space-y-2">
        <h4 class="font-label-editorial text-xs tracking-wider uppercase text-secondary font-semibold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">verified</span>
          Conservation & National Legacy
        </h4>
        <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          ${d.legacy}
        </p>
      </div>
    ` : '';

    return `
      <!-- Hero Header Card -->
      <div class="bg-surface-container rounded-2xl overflow-hidden">
        <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-surface-container-highest">
          <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent"></div>
          
          <div class="absolute top-3 left-3 flex flex-wrap gap-2">
            <span class="px-2.5 py-1 rounded backdrop-blur-md font-label-editorial text-xs uppercase tracking-wider font-semibold ${d.badgeClass || 'bg-primary/80 text-on-primary'}">
              ${d.badge || d.status}
            </span>
            <span class="px-2.5 py-1 rounded backdrop-blur-md font-label-data text-xs bg-surface-container/90 text-on-surface">
              ${d.typeLabel || (d.type === 'wild' ? 'Wild Tusker' : 'Sacred Tusker')}
            </span>
          </div>

          <div class="absolute bottom-4 left-4 right-4">
            <div class="text-xs font-label-editorial uppercase tracking-widest text-secondary font-semibold mb-1">
              ${d.sinhalaName || ''}
            </div>
            <h2 class="font-headline-lg text-2xl sm:text-3xl text-primary font-bold">
              ${d.name}
            </h2>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 font-label-data text-xs text-on-surface">
              <span>📅 ${d.lifespan || ''}</span>
              <span>📍 ${d.range || ''}</span>
            </div>
          </div>
        </div>

        <div class="p-4 sm:p-5 space-y-3">
          <p class="font-body-lg text-sm sm:text-base text-on-surface leading-relaxed">
            ${d.overview || ''}
          </p>
          
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div class="p-3 rounded-xl bg-surface-container-low text-center">
              <span class="block text-[11px] font-label-editorial uppercase tracking-wider text-outline">Shoulder Height</span>
              <span class="font-headline-sm font-semibold text-primary text-base">${d.height || 'N/A'}</span>
            </div>
            <div class="p-3 rounded-xl bg-surface-container-low text-center">
              <span class="block text-[11px] font-label-editorial uppercase tracking-wider text-outline">Estimated Mass</span>
              <span class="font-headline-sm font-semibold text-primary text-base">${d.weight || 'N/A'}</span>
            </div>
            <div class="p-3 rounded-xl bg-surface-container-low text-center">
              <span class="block text-[11px] font-label-editorial uppercase tracking-wider text-outline">Tusk Length</span>
              <span class="font-headline-sm font-semibold text-primary text-base">${d.tuskLength || 'N/A'}</span>
            </div>
            <div class="p-3 rounded-xl bg-surface-container-low text-center">
              <span class="block text-[11px] font-label-editorial uppercase tracking-wider text-outline">Status Record</span>
              <span class="font-headline-sm font-semibold ${d.statusType === 'living' ? 'text-emerald-400' : 'text-rose-400'} text-base">${d.status}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Biometrics Grid -->
      ${biometricsHtml}

      <!-- Narrative -->
      ${narrativeHtml}

      <!-- Chronology Timeline -->
      ${timelineHtml}

      <!-- Veterinary Notes -->
      ${veterinaryHtml}

      <!-- Conservation Legacy -->
      ${legacyHtml}
    `;
  }

  function openDossierModal(elephantId) {
    if (!elephantId || !GAJA_LANKA_DOSSIERS[elephantId]) {
      // Fallback: check if id exists with prefixes or slight differences
      const match = dossierKeys.find(k => k === elephantId || elephantId.includes(k) || k.includes(elephantId));
      if (match) {
        elephantId = match;
      } else {
        elephantId = 'kawanthissa'; // default fallback
      }
    }

    const dossier = GAJA_LANKA_DOSSIERS[elephantId];
    if (!dossier) return;

    currentDossierId = elephantId;
    const modal = ensureModalElement();
    const body = document.getElementById('gaja-dossier-body');
    body.innerHTML = renderDossierContent(dossier);
    body.scrollTop = 0;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // Animate in
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      const dialog = modal.querySelector('.relative.w-full');
      if (dialog) dialog.classList.remove('scale-95');
    }, 10);

    document.body.style.overflow = 'hidden';

    // Update URL hash cleanly without jitter
    if (window.location.hash !== `#${elephantId}`) {
      try {
        history.replaceState(null, '', `#${elephantId}`);
      } catch (e) {
        // Fallback for file:// or restricted environments
      }
    }
  }

  function closeDossierModal() {
    const modal = document.getElementById('gaja-dossier-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    modal.classList.add('opacity-0');
    const dialog = modal.querySelector('.relative.w-full');
    if (dialog) dialog.classList.add('scale-95');

    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
      currentDossierId = null;
      // Remove hash if closing
      if (window.location.hash && dossierKeys.includes(window.location.hash.substring(1))) {
        try {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (e) {
          // Fallback
        }
      }
    }, 250);
  }

  function navigateDossier(dir) {
    if (!currentDossierId) return;
    const idx = dossierKeys.indexOf(currentDossierId);
    let nextIdx = idx + dir;
    if (nextIdx < 0) nextIdx = dossierKeys.length - 1;
    if (nextIdx >= dossierKeys.length) nextIdx = 0;
    openDossierModal(dossierKeys[nextIdx]);
  }

  // Intercept click on links or elements with data-dossier-id or matching hash
  function setupDossierTriggers() {
    document.addEventListener('click', function (e) {
      // NEVER intercept clicks originating inside the modal itself!
      // This allows the "Full Page" button and "Open Standalone Monograph" link to navigate out to dossier.html
      if (e.target.closest('#gaja-dossier-modal')) {
        return;
      }

      const trigger = e.target.closest('[data-dossier-id], a[href*="#kawanthissa"], a[href*="#agbo-thirappane"], a[href*="#mahasen"], a[href*="#dala-poottuwa"], a[href*="#nadungamuwa-raja"], a[href*="#maligawa-raja"], a[href*="#indi-raja"], a[href*="#millangoda-raja"], a[href*="#wasana-kataragama"], a[href*="#heiyantuduwa-raja"], a[href*="dossier.html?id="]');
      
      if (!trigger) return;

      // Extract elephant ID
      let id = trigger.getAttribute('data-dossier-id');
      if (!id && trigger.getAttribute('href')) {
        const href = trigger.getAttribute('href');
        if (href.includes('#')) {
          id = href.split('#')[1];
        } else if (href.includes('id=')) {
          const match = href.match(/id=([a-zA-Z0-9_-]+)/);
          if (match) id = match[1];
        }
      }

      if (id && GAJA_LANKA_DOSSIERS[id]) {
        // Prevent default and open modal directly
        e.preventDefault();
        openDossierModal(id);
      }
    });

    // Check hash on load
    function checkHash() {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && GAJA_LANKA_DOSSIERS[hash]) {
        openDossierModal(hash);
      }
    }

    window.addEventListener('hashchange', checkHash);
    checkHash();
  }

  // Expose global methods
  window.GajaDossierModal = {
    open: openDossierModal,
    close: closeDossierModal,
    next: () => navigateDossier(1),
    prev: () => navigateDossier(-1)
  };

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDossierTriggers);
  } else {
    setupDossierTriggers();
  }
})();
