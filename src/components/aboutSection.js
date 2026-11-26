import { ABOUT_DATA, BANNERS, CONTACT } from '../data/siteData.js';

export function renderAboutSection() {
  const paragraphs = ABOUT_DATA.paragraphs.map((p) => `<p>${p}</p>`).join('');
  const highlights = ABOUT_DATA.highlights
    .map(
      (item) => `
        <div class="about-highlight">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
          <span>${item}</span>
        </div>`
    )
    .join('');

  return `
    <section class="section-pad about-section" id="about">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 reveal">
            <span class="section-eyebrow">${ABOUT_DATA.eyebrow}</span>
            <h2 class="section-title" style="margin-bottom:18px;">${ABOUT_DATA.title}</h2>

            <div class="about-brand-strip">
              <img src="${BANNERS.brand.image}" alt="${BANNERS.brand.alt}" loading="lazy">
            </div>

            <div class="about-copy">
              ${paragraphs}
            </div>

            <div class="about-highlights">
              ${highlights}
            </div>

            <div class="hero-cta-buttons">
              <a href="${CONTACT.phoneHref}" class="btn-navy">
                <i class="fa fa-phone" aria-hidden="true"></i> ${ABOUT_DATA.ctaText}
              </a>
              <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                <i class="fab fa-whatsapp" aria-hidden="true"></i> Message on WhatsApp
              </a>
            </div>
          </div>

          <div class="col-lg-6 reveal">
            <div class="about-visual">
              <div class="about-visual__frame">
                <img src="${ABOUT_DATA.portraitImage}" alt="${ABOUT_DATA.title} — Vedic Remedies" loading="lazy">
              </div>
              <div class="about-visual__pill">
                <div>
                  <strong>22+ Years of Vedic Jyotish</strong>
                  <span>${CONTACT.location}</span>
                </div>
                <a href="#book" class="btn-gold" style="padding:8px 16px;font-size:0.84rem;">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
