import { CONSULTATION_TOPICS, CONTACT, FAQ_ITEMS } from '../data/siteData.js';

export function renderBookingFaqSection() {
  const topicOptions = CONSULTATION_TOPICS.map(
    (topic) => `<option value="${topic}">${topic}</option>`
  ).join('');

  const faqItems = FAQ_ITEMS.map(
    (item, idx) => `
      <div class="faq-item${idx === 0 ? ' is-open' : ''}">
        <button
          type="button"
          class="faq-trigger"
          aria-expanded="${idx === 0 ? 'true' : 'false'}"
          data-faq-trigger
        >
          <span>${item.question}</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="faq-panel">
          ${item.answer}
        </div>
      </div>`
  ).join('');

  return `
    <section class="section-pad booking-faq-section" id="book">
      <div class="container">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-6 reveal">
            <div class="booking-card">
              <span class="section-eyebrow section-eyebrow--light" style="margin-bottom:12px;">Direct Appointment</span>
              <h2 class="booking-card__title">Request a Private Consultation</h2>
              <p class="booking-card__sub">
                Share a few details below to prepare a pre-filled WhatsApp consultation message directly with ${CONTACT.brandNameHonorific}.
              </p>

              <form class="booking-form" id="consultationForm" novalidate>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="consultName">Your Full Name</label>
                    <input type="text" id="consultName" name="name" class="form-control" placeholder="e.g. Aarav Verma" required>
                  </div>
                  <div class="col-sm-6">
                    <label for="consultPhone">Phone / WhatsApp Number</label>
                    <input type="tel" id="consultPhone" name="phone" class="form-control" placeholder="e.g. +91-98XXXXXX10" required>
                  </div>
                  <div class="col-sm-6">
                    <label for="consultTopic">Consultation Area</label>
                    <select id="consultTopic" name="topic" class="form-select">
                      ${topicOptions}
                    </select>
                  </div>
                  <div class="col-sm-6">
                    <label for="consultDob">Date of Birth (Optional)</label>
                    <input type="text" id="consultDob" name="dob" class="form-control" placeholder="DD/MM/YYYY &amp; Place">
                  </div>
                  <div class="col-12">
                    <label for="consultMessage">Brief Question or Concern</label>
                    <textarea id="consultMessage" name="message" rows="3" class="form-control" placeholder="Briefly describe what you would like guidance on..."></textarea>
                  </div>
                  <div class="col-12 d-flex flex-wrap gap-2 pt-1">
                    <button type="submit" class="btn-gold" style="flex:1;">
                      <i class="fab fa-whatsapp" aria-hidden="true"></i> Send via WhatsApp
                    </button>
                    <a href="${CONTACT.phoneHref}" class="btn-outline-gold">
                      <i class="fa fa-phone" aria-hidden="true"></i> Call Directly
                    </a>
                  </div>
                </div>
              </form>

              <div class="booking-feedback" id="bookingFeedback" role="status" aria-live="polite"></div>
            </div>
          </div>

          <div class="col-lg-6 reveal" id="faq">
            <div style="margin-bottom:24px;">
              <span class="section-eyebrow">Common Questions</span>
              <h2 class="section-title" style="margin-bottom:8px;">Frequently Asked Questions</h2>
              <p class="section-subtitle">
                Everything you need to know before scheduling your horoscope session.
              </p>
            </div>
            <div class="faq-list">
              ${faqItems}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
