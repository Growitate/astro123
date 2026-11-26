import './styles/main.css';

import { BANNERS, CONTACT, ENGLISH_MARQUEE, HINDI_MARQUEE } from './data/siteData.js';
import { renderHeader, renderMobileDrawer, renderTicker } from './components/header.js';
import { renderBannerSpotlight, renderHeroShowcase } from './components/bannerCarousel.js';
import { renderOtherServices, renderPrimaryServices } from './components/servicesSection.js';
import { renderAboutSection } from './components/aboutSection.js';
import { renderStatsSection } from './components/statsSection.js';
import { renderAwardsSection } from './components/awardsSection.js';
import { renderBookingFaqSection } from './components/bookingFaqSection.js';
import { renderFloatingActions } from './components/floatingActions.js';
import { renderFooter } from './components/footer.js';

function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  root.innerHTML = `
    <div class="page-wrapper">
      ${renderHeader()}
      <main>
        ${renderHeroShowcase()}
        ${renderTicker(HINDI_MARQUEE)}
        ${renderPrimaryServices()}
        ${renderBannerSpotlight(BANNERS.temple, false)}
        ${renderAboutSection()}
        ${renderTicker(ENGLISH_MARQUEE, 'light')}
        ${renderStatsSection()}
        ${renderBannerSpotlight(BANNERS.promo, true)}
        ${renderOtherServices()}
        ${renderBannerSpotlight(BANNERS.services, false)}
        ${renderAwardsSection()}
        ${renderBookingFaqSection()}
      </main>
      ${renderFooter()}
      ${renderFloatingActions()}
      ${renderMobileDrawer()}
    </div>
  `;
}

function initMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  if (!drawer) return;

  const setOpen = (open) => {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('nav-locked', open);
  };

  document.querySelectorAll('[data-drawer-open]').forEach((btn) => {
    btn.addEventListener('click', () => setOpen(true));
  });

  document.querySelectorAll('[data-drawer-close]').forEach((el) => {
    el.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      setOpen(false);
    }
  });
}

function initConsultationFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.consult-col');
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter') || 'all';
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}

function initFaqAccordion() {
  const triggers = document.querySelectorAll('[data-faq-trigger]');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const currentItem = trigger.closest('.faq-item');
      if (!currentItem) return;
      const willOpen = !currentItem.classList.contains('is-open');

      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('is-open');
        const btn = item.querySelector('[data-faq-trigger]');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        currentItem.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initConsultationForm() {
  const form = document.getElementById('consultationForm');
  const feedback = document.getElementById('bookingFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const topic = String(data.get('topic') || '').trim();
    const dob = String(data.get('dob') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !phone) {
      feedback.innerHTML = 'Please enter your <strong>name</strong> and <strong>phone/WhatsApp number</strong> to continue.';
      feedback.classList.add('is-visible');
      return;
    }

    const lines = [
      `Namaste ${CONTACT.brandNameHonorific},`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Area: ${topic}`,
      dob ? `Birth Details: ${dob}` : null,
      message ? `Concern: ${message}` : null,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;

    const safeName = name.replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[ch]));

    feedback.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:8px;">
        <span><strong>Consultation details ready for ${safeName}!</strong> Click below to open your pre-filled WhatsApp chat with ${CONTACT.brandNameHonorific}.</span>
        <div>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="padding:8px 16px;font-size:0.85rem;">
            <i class="fab fa-whatsapp" aria-hidden="true"></i> Open WhatsApp Chat
          </a>
        </div>
      </div>
    `;
    feedback.classList.add('is-visible');
  });
}

function initScrollEffects() {
  const revealEls = document.querySelectorAll('.reveal');
  const statEls = document.querySelectorAll('[data-count-target]');
  const backToTop = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.site-nav__link');

  if (typeof window.IntersectionObserver === 'function') {
    const revealObserver = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const counterObserver = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-count-target') || '0');
          const suffix = el.getAttribute('data-count-suffix') || '';
          const decimals = parseInt(el.getAttribute('data-count-decimals') || '0', 10);
          const duration = 1100;
          const start = performance.now();

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = (target * eased).toFixed(decimals);
            el.textContent = `${value}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    statEls.forEach((el) => counterObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  // Back-to-top & active nav highlight
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const sections = Array.from(navLinks)
    .map((link) => {
      const id = link.getAttribute('href')?.replace(/^#/, '');
      return id ? { link, section: document.getElementById(id) } : null;
    })
    .filter((entry) => entry && entry.section);

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (backToTop) {
        backToTop.classList.toggle('is-visible', y > 420);
      }

      let currentLink = sections[0]?.link;
      for (const item of sections) {
        if (item.section.offsetTop - 140 <= y) {
          currentLink = item.link;
        }
      }
      navLinks.forEach((l) => l.classList.toggle('is-active', l === currentLink));
    },
    { passive: true }
  );
}

renderApp();
initMobileDrawer();
initConsultationFilters();
initFaqAccordion();
initConsultationForm();
initScrollEffects();
