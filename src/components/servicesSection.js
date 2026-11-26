import {
  CONSULTATION_FILTERS,
  CONTACT,
  OTHER_SERVICES,
  OTHER_SERVICES_META,
  PRIMARY_SERVICES,
  PRIMARY_SERVICES_META,
} from '../data/siteData.js';

export function renderPrimaryServices() {
  const cards = PRIMARY_SERVICES.map(
    (service) => `
      <div class="col-md-6 col-lg-4 reveal">
        <article class="service-card">
          <div class="service-card__media">
            <img src="${service.image}" alt="${service.title}" loading="lazy">
            <span class="service-card__badge">${service.badge}</span>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">${service.title}</h3>
            <p class="service-card__desc">${service.description}</p>
            <div class="service-card__actions">
              <a href="${CONTACT.phoneHref}" class="btn-navy">
                <i class="fa fa-phone" aria-hidden="true"></i> Call Now
              </a>
              <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>`
  ).join('');

  return `
    <section class="section-pad services-section" id="service">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-eyebrow">${PRIMARY_SERVICES_META.eyebrow}</span>
          <h2 class="section-title">${PRIMARY_SERVICES_META.title}</h2>
          <p class="section-subtitle">${PRIMARY_SERVICES_META.subtitle}</p>
          <div class="ornament-divider" aria-hidden="true"><span>✦</span></div>
        </div>
        <div class="row g-4">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function renderOtherServices() {
  const tabs = CONSULTATION_FILTERS.map(
    (tab, idx) => `
      <button
        type="button"
        class="filter-tab${idx === 0 ? ' is-active' : ''}"
        data-filter="${tab.id}"
      >
        ${tab.label}
      </button>`
  ).join('');

  const cards = OTHER_SERVICES.map(
    (service) => `
      <div class="col-sm-6 col-lg-3 consult-col reveal" data-category="${service.category}">
        <article class="consult-card">
          <div class="consult-card__img">
            <img src="${service.image}" alt="${service.alt}" loading="lazy">
          </div>
          <div class="consult-card__body">
            <span class="consult-card__category">${service.categoryLabel}</span>
            <h3 class="consult-card__title">${service.title}</h3>
            <div class="consult-card__actions">
              <a href="${CONTACT.phoneHref}" class="consult-btn-call">
                <i class="fa fa-phone" aria-hidden="true"></i> Call
              </a>
              <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="consult-btn-wa">
                <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>`
  ).join('');

  return `
    <section class="section-pad consultations-section" id="consultations">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-eyebrow">${OTHER_SERVICES_META.eyebrow}</span>
          <h2 class="section-title">${OTHER_SERVICES_META.title}</h2>
          <p class="section-subtitle">${OTHER_SERVICES_META.subtitle}</p>
          <div class="ornament-divider" aria-hidden="true"><span>✦</span></div>
        </div>

        <div class="filter-tabs" role="tablist" aria-label="Filter Consultation Areas">
          ${tabs}
        </div>

        <div class="row g-4" id="consultationsGrid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}
