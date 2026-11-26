import { BANNERS, CONTACT, TRUST_HIGHLIGHTS } from '../data/siteData.js';

export function renderHeroShowcase() {
  const trustItems = TRUST_HIGHLIGHTS.map(
    (item) => `
      <div class="hero-trust-item">
        <span class="hero-trust-item__icon"><i class="${item.icon}" aria-hidden="true"></i></span>
        <span>${item.label}</span>
      </div>`
  ).join('');

  return `
    <section class="hero-showcase" id="${BANNERS.hero.sectionId}">
      <div class="container">
        <div class="hero-frame">
          <a href="${CONTACT.phoneHref}" class="hero-frame__link" aria-label="Call ${CONTACT.brandName} at ${CONTACT.phoneDisplay}">
            <img
              class="hero-frame__img"
              src="${BANNERS.hero.image}"
              alt="${BANNERS.hero.alt}"
              loading="eager"
              fetchpriority="high"
            >
          </a>
        </div>

        <div class="hero-cta-strip">
          <div class="hero-trust-grid">
            ${trustItems}
          </div>
          <div class="hero-cta-buttons">
            <a href="${CONTACT.phoneHref}" class="btn-gold">
              <i class="fa fa-phone" aria-hidden="true"></i> Call Now
            </a>
            <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
              <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <a href="#book" class="btn-outline-gold">
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i> Book Session
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderBannerSpotlight(banner, creamBg = false) {
  return `
    <section class="banner-spotlight${creamBg ? ' banner-spotlight--cream' : ''}" id="${banner.sectionId}">
      <div class="container">
        <div class="spotlight-card reveal">
          <a href="${CONTACT.phoneHref}" style="display:block;">
            <img src="${banner.image}" alt="${banner.alt}" loading="lazy">
          </a>
          <div class="spotlight-caption">
            <div>
              <h3 class="spotlight-caption__title">${banner.title}</h3>
              <p class="spotlight-caption__sub">${banner.subtitle}</p>
            </div>
            <div class="hero-cta-buttons">
              <a href="${CONTACT.phoneHref}" class="btn-gold">
                <i class="fa fa-phone" aria-hidden="true"></i> ${CONTACT.phoneDisplay}
              </a>
              <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                <i class="fab fa-whatsapp" aria-hidden="true"></i> Consult Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
