import { CONTACT, FOOTER_DATA } from '../data/siteData.js';

export function renderFooter() {
  const bestServiceItems = FOOTER_DATA.bestServices
    .map(
      (item) =>
        `<li><a href="#service"><i class="fa fa-caret-right" aria-hidden="true"></i><span>${item}</span></a></li>`
    )
    .join('');

  const whyChooseItems = FOOTER_DATA.whyChoose
    .map(
      (item) =>
        `<li><a href="#about"><i class="fa fa-caret-right" aria-hidden="true"></i><span>${item}</span></a></li>`
    )
    .join('');

  return `
    <footer id="footer" class="site-footer">
      <div class="site-footer__main" id="contact">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-3 col-md-6">
              <h2 class="site-footer__heading">${FOOTER_DATA.aboutHeading}</h2>
              <p style="font-size:0.93rem;margin-bottom:16px;">${FOOTER_DATA.aboutText}</p>
              <a href="#book" class="btn-outline-gold" style="padding:8px 16px;font-size:0.84rem;">
                <i class="fa fa-calendar-check-o" aria-hidden="true"></i> Schedule Consultation
              </a>
            </div>

            <div class="col-lg-3 col-md-6">
              <h2 class="site-footer__heading">${FOOTER_DATA.bestServicesHeading}</h2>
              <ul class="site-footer__links">
                ${bestServiceItems}
              </ul>
            </div>

            <div class="col-lg-3 col-md-6">
              <h2 class="site-footer__heading">${FOOTER_DATA.whyChooseHeading}</h2>
              <ul class="site-footer__links">
                ${whyChooseItems}
              </ul>
            </div>

            <div class="col-lg-3 col-md-6">
              <h2 class="site-footer__heading">${FOOTER_DATA.contactHeading}</h2>
              <ul class="site-footer__links">
                <li>
                  <a href="${CONTACT.phoneHref}">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>${CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    <span>${CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:${CONTACT.email}">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>${CONTACT.email}</span>
                  </a>
                </li>
                <li>
                  <a href="#book">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>${CONTACT.hours}</span>
                  </a>
                </li>
                <li>
                  <a href="#book">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>${CONTACT.location}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="site-footer__disclaimer">
        <div class="container">
          <p>${FOOTER_DATA.disclaimer}</p>
        </div>
      </div>
    </footer>
  `;
}
