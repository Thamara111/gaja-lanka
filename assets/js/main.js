// Gaja Lanka - Main Global Scripts & Wild Design Interactions
document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Mobile Menu Toggle
  // ==========================================================================
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ==========================================================================
  // 2. Back to Top Button
  // ==========================================================================
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 3. Highlight Current Page in Desktop & Mobile Nav
  // ==========================================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('header nav a, #mobile-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      if (link.closest('nav')) {
        link.classList.add('text-[#E2F5A8]', 'bg-[#17321A]/80', 'border-b-2', 'border-[#E2F5A8]');
        link.classList.remove('text-slate-300');
      } else if (link.closest('#mobile-menu')) {
        link.classList.add('bg-[#17321A]', 'text-[#E2F5A8]', 'font-bold');
      }
    }
  });

  // ==========================================================================
  // 4. HERO SECTION SLIDER (Image 1 Interactions)
  // ==========================================================================
  const heroSlider = document.getElementById('hero-slider');
  if (heroSlider) {
    const slidesData = [
      {
        category: "AMAZING TRIPS & WILD HABITATS",
        titleTop: "CEYLON",
        titleBottom: "FOREST",
        quote: "There is an ancient soul in the wandering herds of Lanka, roaming misty canopies and sacred wilderness corridors since the dawn of time.",
        ctaText: "LEARN MORE",
        ctaHref: "overview.html"
      },
      {
        category: "SACRED LIVING LEGENDS",
        titleTop: "SACRED",
        titleBottom: "TUSKERS",
        quote: "Bearing the sacred casket for millennia, the regal Ath-Dhal tuskers represent less than 2.5% of males—majestic sentinels of the tropical mist.",
        ctaText: "2,500 YR HERITAGE",
        ctaHref: "history.html"
      },
      {
        category: "THE GREAT GATHERING",
        titleTop: "MINNERIYA",
        titleBottom: "HERDS",
        quote: "Over 350 wild giants assemble upon the ancient reservoir lakebed during the dry season—one of Earth's most breathtaking wildlife spectacles.",
        ctaText: "EXPLORE HABITATS",
        ctaHref: "habitats.html"
      },
      {
        category: "FRONTLINE COEXISTENCE",
        titleTop: "WILD",
        titleBottom: "CORRIDORS",
        quote: "Over 70% of wild elephants roam outside national parks, demanding revolutionary community solar fences and peaceful spatial coexistence.",
        ctaText: "VIEW CONFLICT DATA",
        ctaHref: "statistics.html"
      }
    ];

    let currentSlide = 0;
    const bgLayers = document.querySelectorAll('.hero-bg-layer');
    const diamonds = document.querySelectorAll('.indicator-diamond');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');

    const categoryEl = document.getElementById('hero-category');
    const titleTopEl = document.getElementById('hero-title-top');
    const titleBottomEl = document.getElementById('hero-title-bottom');
    const quoteEl = document.getElementById('hero-quote');
    const ctaBtn = document.getElementById('hero-cta-btn');

    function updateSlide(index) {
      if (index < 0) index = slidesData.length - 1;
      if (index >= slidesData.length) index = 0;
      currentSlide = index;

      // Update Backgrounds
      bgLayers.forEach((layer, i) => {
        if (i === currentSlide) {
          layer.classList.add('active');
        } else {
          layer.classList.remove('active');
        }
      });

      // Update Diamond indicators
      diamonds.forEach((diamond, i) => {
        if (i === currentSlide) {
          diamond.classList.add('active');
        } else {
          diamond.classList.remove('active');
        }
      });

      // Animate text update with quick fade
      const contentBox = document.getElementById('hero-text-content');
      if (contentBox) {
        contentBox.style.opacity = '0';
        contentBox.style.transform = 'translateY(8px)';
        contentBox.style.transition = 'all 0.25s ease';

        setTimeout(() => {
          const data = slidesData[currentSlide];
          if (categoryEl) categoryEl.textContent = data.category;
          if (titleTopEl) titleTopEl.textContent = data.titleTop;
          if (titleBottomEl) titleBottomEl.textContent = data.titleBottom;
          if (quoteEl) quoteEl.textContent = data.quote;
          if (ctaBtn) {
            ctaBtn.textContent = data.ctaText + " →";
            ctaBtn.setAttribute('href', data.ctaHref);
          }

          contentBox.style.opacity = '1';
          contentBox.style.transform = 'translateY(0)';
        }, 250);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateSlide(currentSlide - 1);
        resetAutoSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateSlide(currentSlide + 1);
        resetAutoSlide();
      });
    }

    diamonds.forEach(diamond => {
      diamond.addEventListener('click', () => {
        const slideIndex = parseInt(diamond.getAttribute('data-slide'), 10);
        updateSlide(slideIndex);
        resetAutoSlide();
      });
    });

    // Auto slideshow every 8 seconds
    let slideInterval = setInterval(() => {
      updateSlide(currentSlide + 1);
    }, 8000);

    function resetAutoSlide() {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        updateSlide(currentSlide + 1);
      }, 8000);
    }
  }

  // ==========================================================================
  // 5. COLOR PALETTE SWATCH COPY INTERACTION (Image 2 Feature)
  // ==========================================================================
  const swatchButtons = document.querySelectorAll('.copy-swatch-btn');
  const toast = document.getElementById('copy-toast');

  swatchButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const hex = btn.getAttribute('data-hex');
      if (hex) {
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied ${hex} to clipboard!`);
        }).catch(() => {
          showToast(`Color: ${hex}`);
        });
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }
});
