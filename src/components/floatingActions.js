import { CONTACT } from '../data/siteData.js';

export function renderFloatingActions() {
  return `
    <div class="floating-dock" aria-label="Quick Contact Actions">
      <button type="button" class="fab-btn fab-btn--top" id="backToTopBtn" aria-label="Back to top">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
      <a
        href="${CONTACT.whatsappHref}"
        target="_blank"
        rel="noopener noreferrer"
        class="fab-btn fab-btn--wa"
        aria-label="WhatsApp ${CONTACT.phoneDisplay}"
      >
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
        <span class="fab-btn__label">WhatsApp</span>
      </a>
      <a
        href="${CONTACT.phoneHref}"
        class="fab-btn fab-btn--call"
        aria-label="Call ${CONTACT.phoneDisplay}"
      >
        <i class="fa fa-phone" aria-hidden="true"></i>
        <span class="fab-btn__label">${CONTACT.phoneDisplay}</span>
      </a>
    </div>
  `;
}
