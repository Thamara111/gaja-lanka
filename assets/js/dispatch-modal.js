/**
 * Gaja Lanka • Interactive Conservation Dispatch Reader Modal
 * Enables in-depth reading of field dispatches, telemetry briefings, and investigative bulletins.
 */

(function () {
  'use strict';

  if (typeof GAJA_LANKA_DISPATCHES === 'undefined') {
    console.warn('[DispatchModal] GAJA_LANKA_DISPATCHES not found. Ensure assets/js/dispatch-data.js is loaded first.');
    return;
  }

  const dispatchKeys = Object.keys(GAJA_LANKA_DISPATCHES);
  let currentDispatchId = null;

  function ensureModalElement() {
    let modal = document.getElementById('gaja-dispatch-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'gaja-dispatch-modal';
    modal.className = 'fixed inset-0 z-[9999] hidden items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-300 opacity-0';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Conservation Dispatch Reader');

    modal.innerHTML = `
      <div id="gaja-dispatch-backdrop" class="fixed inset-0 bg-transparent"></div>
      <div class="relative w-full max-w-4xl my-auto bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform scale-95 border border-white/10">
        
        <!-- Sticky Top Navigation / Action Bar -->
        <div class="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-surface-container/95 backdrop-blur-md border-b border-white/5">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container">
              <span class="material-symbols-outlined text-[18px]">feed</span>
            </span>
            <span class="font-label-editorial text-xs tracking-widest uppercase text-secondary font-semibold">
              Field Dispatch &amp; Intelligence Briefing
            </span>
          </div>

          <div class="flex items-center gap-2">
            <a id="dispatch-modal-source-btn" href="#" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:text-primary hover:bg-surface-container-highest transition-colors font-label-data text-xs font-medium" title="View Source Wire">
              <span>Original Wire</span>
              <span class="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
            <button id="dispatch-modal-close-btn" type="button" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container-highest/80 hover:bg-rose-950/80 text-on-surface hover:text-rose-300 transition-colors" aria-label="Close dispatch">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <!-- Dispatch Dynamic Content Container -->
        <div id="gaja-dispatch-body" class="max-h-[82vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          <!-- Populated by JavaScript -->
        </div>

        <!-- Modal Bottom Switcher Bar -->
        <div class="flex items-center justify-between px-5 py-3 bg-surface-container/90 backdrop-blur-sm border-t border-white/5">
          <button id="dispatch-modal-prev-btn" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label-data text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span class="material-symbols-outlined text-[16px]">arrow_back</span>
            <span class="hidden sm:inline">Previous Dispatch</span>
          </button>
          
          <div class="flex items-center gap-1">
            <span id="dispatch-modal-counter" class="font-label-data text-xs text-secondary-fixed font-semibold">1 of 19</span>
          </div>

          <button id="dispatch-modal-next-btn" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-label-data text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span class="hidden sm:inline">Next Dispatch</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('dispatch-modal-close-btn').addEventListener('click', closeDispatchModal);
    document.getElementById('gaja-dispatch-backdrop').addEventListener('click', closeDispatchModal);
    document.getElementById('dispatch-modal-prev-btn').addEventListener('click', () => navigateDispatch(-1));
    document.getElementById('dispatch-modal-next-btn').addEventListener('click', () => navigateDispatch(1));

    document.addEventListener('keydown', (e) => {
      const m = document.getElementById('gaja-dispatch-modal');
      if (!m || m.classList.contains('hidden')) return;

      if (e.key === 'Escape') {
        closeDispatchModal();
      } else if (e.key === 'ArrowLeft') {
        navigateDispatch(-1);
      } else if (e.key === 'ArrowRight') {
        navigateDispatch(1);
      }
    });

    return modal;
  }

  function renderDispatchContent(d) {
    const sourceBtn = document.getElementById('dispatch-modal-source-btn');
    if (sourceBtn) {
      sourceBtn.href = d.originalUrl || '#';
      if (!d.originalUrl || d.originalUrl.startsWith('#')) {
        sourceBtn.classList.add('hidden');
      } else {
        sourceBtn.classList.remove('hidden');
      }
    }

    const counter = document.getElementById('dispatch-modal-counter');
    if (counter) {
      const idx = dispatchKeys.indexOf(d.id);
      counter.textContent = `${idx + 1} of ${dispatchKeys.length}`;
    }

    const statsHtml = d.stats && d.stats.length > 0 ? `
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        ${d.stats.map(s => `
          <div class="p-3 rounded-xl bg-surface-container-low text-center">
            <span class="block text-[10px] font-label-editorial uppercase tracking-wider text-outline mb-1">${s.label}</span>
            <span class="font-headline-sm font-bold text-secondary-fixed text-sm sm:text-base">${s.value}</span>
          </div>
        `).join('')}
      </div>
    ` : '';

    const reportHtml = d.fullReport && d.fullReport.length > 0 ? `
      <div class="bg-surface-container rounded-xl p-5 sm:p-6 space-y-4">
        <h4 class="font-label-editorial text-xs tracking-wider uppercase text-secondary font-semibold flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[16px]">menu_book</span>
          Full Field Intelligence Dossier
        </h4>
        <div class="space-y-3 font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed">
          ${d.fullReport.map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>
    ` : '';

    const body = document.getElementById('gaja-dispatch-body');
    body.innerHTML = `
      <!-- Hero Header -->
      <div class="relative rounded-2xl overflow-hidden bg-surface-container-lowest min-h-[260px] sm:min-h-[340px] flex items-end p-5 sm:p-8">
        <img src="${d.image}" alt="${d.title}" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>

        <!-- Badges -->
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span class="px-3 py-1 rounded-full backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold ${d.badgeClass || 'bg-surface-container-lowest/80 text-secondary'}">
            ${d.badge || d.category}
          </span>
          <span class="px-3 py-1 rounded-full backdrop-blur-md text-[10px] bg-surface-container-lowest/90 text-on-surface font-semibold">
            ${d.source}
          </span>
        </div>

        <!-- Title Block -->
        <div class="relative z-10 space-y-2 max-w-3xl">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1 font-label-data text-xs text-secondary-fixed">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px]">calendar_today</span>
              ${d.date}
            </span>
            ${d.location ? `
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[15px]">location_on</span>
                ${d.location}
              </span>
            ` : ''}
          </div>
          <h2 class="font-headline-lg text-xl sm:text-3xl text-white font-bold leading-snug">
            ${d.title}
          </h2>
        </div>
      </div>

      <!-- Quick Stats Strip -->
      ${statsHtml}

      <!-- Executive Summary -->
      <div class="bg-surface-container-low p-4 sm:p-5 rounded-xl border-l-4 border-secondary">
        <span class="text-[10px] font-label-editorial uppercase tracking-wider text-secondary font-bold block mb-1">Executive Field Summary</span>
        <p class="font-body-md text-sm text-on-surface leading-relaxed">${d.summary}</p>
      </div>

      <!-- Full Investigative Text -->
      ${reportHtml}

      <!-- Bottom Action Row -->
      <div class="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
        <div class="flex items-center gap-2">
          <span class="font-label-data text-xs text-outline">Verified by:</span>
          <span class="font-label-data text-xs font-semibold text-secondary-fixed flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">verified</span> ${d.source}
          </span>
        </div>
        ${d.originalUrl && !d.originalUrl.startsWith('#') ? `
          <a href="${d.originalUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold text-xs hover:bg-primary transition-all">
            <span>Read on Original News Wire</span>
            <span class="material-symbols-outlined text-[15px]">open_in_new</span>
          </a>
        ` : ''}
      </div>
    `;

    body.scrollTop = 0;
  }

  function openDispatchModal(id) {
    if (!GAJA_LANKA_DISPATCHES[id]) return;

    currentDispatchId = id;
    const modal = ensureModalElement();
    renderDispatchContent(GAJA_LANKA_DISPATCHES[id]);

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    requestAnimationFrame(() => {
      modal.classList.remove('opacity-0');
      modal.classList.add('opacity-100');
      const dialog = modal.querySelector('.relative.w-full');
      if (dialog) {
        dialog.classList.remove('scale-95');
        dialog.classList.add('scale-100');
      }
    });

    document.body.style.overflow = 'hidden';
  }

  function closeDispatchModal() {
    const modal = document.getElementById('gaja-dispatch-modal');
    if (!modal) return;

    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    const dialog = modal.querySelector('.relative.w-full');
    if (dialog) {
      dialog.classList.remove('scale-100');
      dialog.classList.add('scale-95');
    }

    setTimeout(() => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      currentDispatchId = null;
    }, 250);
  }

  function navigateDispatch(direction) {
    if (!currentDispatchId) return;
    const idx = dispatchKeys.indexOf(currentDispatchId);
    let nextIdx = idx + direction;
    if (nextIdx < 0) nextIdx = dispatchKeys.length - 1;
    if (nextIdx >= dispatchKeys.length) nextIdx = 0;
    openDispatchModal(dispatchKeys[nextIdx]);
  }

  function setupDispatchTriggers() {
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('[data-dispatch-id]');
      if (!trigger) return;

      const id = trigger.getAttribute('data-dispatch-id');
      if (id && GAJA_LANKA_DISPATCHES[id]) {
        e.preventDefault();
        openDispatchModal(id);
      }
    });
  }

  window.GajaDispatchModal = {
    open: openDispatchModal,
    close: closeDispatchModal,
    next: () => navigateDispatch(1),
    prev: () => navigateDispatch(-1)
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDispatchTriggers);
  } else {
    setupDispatchTriggers();
  }
})();
