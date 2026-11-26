import { CONTACT, NAV_LINKS, WELCOME_TEXT } from '../data/siteData.js';

export function renderHeader() {
  const navItems = NAV_LINKS.map(
    (link, idx) =>
      `<a class="site-nav__link${idx === 0 ? ' is-active' : ''}" href="${link.href}">${link.label}</a>`
  ).join('');

  return `
    <!-- Top Announcement Bar -->
    <div class="top-utility">
      <div class="container">
        <div class="top-utility__inner">
          <div class="top-utility__welcome">
            <span aria-hidden="true">ॐ</span>
            <span>${WELCOME_TEXT}</span>
          </div>
          <div class="top-utility__meta">
            <span><i class="fa fa-clock-o" aria-hidden="true"></i> ${CONTACT.hours}</span>
            <a href="${CONTACT.phoneHref}"><i class="fa fa-phone" aria-hidden="true"></i> ${CONTACT.phoneDisplay}</a>
            <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Navbar -->
    <header class="site-header">
      <div class="container">
        <div class="site-header__inner">
          <a href="#top" class="site-brand">
            <span class="site-brand__om" aria-hidden="true">ॐ</span>
            <span class="site-brand__text">
              <span class="site-brand__title">${CONTACT.brandName}</span>
              <span class="site-brand__sub">${CONTACT.tagline}</span>
            </span>
          </a>

          <nav class="site-nav" aria-label="Primary Navigation">
            ${navItems}
          </nav>

          <div class="site-header__actions">
            <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
              <i class="fab fa-whatsapp" aria-hidden="true"></i>
              <span>WhatsApp</span>
            </a>
            <a href="${CONTACT.phoneHref}" class="btn-gold">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>${CONTACT.phoneDisplay}</span>
            </a>
            <button type="button" class="nav-hamburger" data-drawer-open aria-label="Open menu">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function renderMobileDrawer() {
  const navItems = NAV_LINKS.map(
    (link) => `<a href="${link.href}" data-drawer-close>${link.label}</a>`
  ).join('');

  return `
    <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
      <div class="mobile-drawer__backdrop" data-drawer-close></div>
      <div class="mobile-drawer__panel" role="dialog" aria-label="Mobile Navigation">
        <div class="mobile-drawer__head">
          <div class="site-brand">
            <span class="site-brand__om" style="width:38px;height:38px;font-size:1.2rem;" aria-hidden="true">ॐ</span>
            <span class="site-brand__text">
              <span class="site-brand__title" style="font-size:0.98rem;">${CONTACT.brandName}</span>
              <span class="site-brand__sub" style="font-size:0.68rem;">${CONTACT.hours}</span>
            </span>
          </div>
          <button type="button" class="mobile-drawer__close" data-drawer-close aria-label="Close menu">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <nav class="mobile-drawer__nav" aria-label="Mobile Menu">
          ${navItems}
        </nav>

        <div class="mobile-drawer__cta">
          <a href="${CONTACT.phoneHref}" class="btn-gold">
            <i class="fa fa-phone" aria-hidden="true"></i> Call ${CONTACT.phoneDisplay}
          </a>
          <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
            <i class="fab fa-whatsapp" aria-hidden="true"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
}

export function renderTicker(text, variant = '') {
  const cls = variant ? `ticker-band ticker-band--${variant}` : 'ticker-band';
  const item = `
    <span class="ticker-item">
      <span class="ticker-item__sep" aria-hidden="true">✦</span>
      <span>${text}</span>
    </span>
  `;
  return `
    <div class="${cls}" role="region" aria-label="Consultation Highlights">
      <div class="ticker-track">
        ${item}
        ${item}
      </div>
    </div>
  `;
}
