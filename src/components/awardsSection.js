import { AWARDS_DATA, CONTACT } from '../data/siteData.js';

export function renderAwardsSection() {
  const cards = AWARDS_DATA.items
    .map(
      (item) => `
        <div class="col-md-4 reveal">
          <article class="award-card">
            <div>
              <span class="award-card__badge">${item.badge} • ${item.year}</span>
              <div class="award-card__medal">
                <i class="fa fa-trophy" aria-hidden="true"></i>
              </div>
              <p class="award-card__kicker">Certificate of Honour</p>
              <h3 class="award-card__recipient">${CONTACT.brandName}</h3>
              <p class="award-card__citation">${item.citation}</p>
            </div>
            <div class="award-card__footer">
              <div class="award-card__org">${item.organization}</div>
              <div class="award-card__ref">Ref: ${item.regNo}</div>
            </div>
          </article>
        </div>`
    )
    .join('');

  return `
    <section class="section-pad awards-section" id="honours">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-eyebrow">${AWARDS_DATA.eyebrow}</span>
          <h2 class="section-title">${AWARDS_DATA.title}</h2>
          <p class="section-subtitle">${AWARDS_DATA.subtitle}</p>
          <div class="ornament-divider" aria-hidden="true"><span>✦</span></div>
        </div>
        <div class="row g-4">
          ${cards}
        </div>
      </div>
    </section>
  `;
}
