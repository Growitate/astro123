import { STATS, STATS_BG } from '../data/siteData.js';

export function renderStatsSection() {
  const items = STATS.map(
    (stat) => `
      <div class="col-6 col-lg-3 reveal">
        <div class="stat-card">
          <div class="stat-card__icon">
            <i class="${stat.iconClass}" aria-hidden="true"></i>
          </div>
          <div
            class="stat-card__value"
            data-count-target="${stat.target}"
            data-count-suffix="${stat.suffix}"
            data-count-decimals="${stat.decimals}"
          >
            ${stat.target}${stat.suffix}
          </div>
          <p class="stat-card__label">${stat.label}</p>
        </div>
      </div>`
  ).join('');

  return `
    <section class="section-pad stats-section" aria-label="Experience & Consultation Statistics">
      <div class="stats-section__bg" style="background-image:url(${STATS_BG});"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-eyebrow section-eyebrow--light">Trusted Guidance</span>
          <h2 class="section-title section-title--light">Decades of Classical Vedic Practice</h2>
          <p class="section-subtitle section-subtitle--light">
            Serving seekers across India and worldwide with compassionate, private horoscope consultations.
          </p>
        </div>
        <div class="row g-4">
          ${items}
        </div>
      </div>
    </section>
  `;
}
