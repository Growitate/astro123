const BASE = import.meta.env.BASE_URL;

export const assetUrl = (path) => `${BASE}${path.replace(/^\/+/, '')}`;

export const CONTACT = {
  brandName: 'Astrologer Saurabh Sharma',
  brandNameHonorific: 'Astrologer Saurabh Sharma Ji',
  tagline: 'Vedic Jyotish & Spiritual Clarity',
  phoneDisplay: '+91-98765-43210',
  phoneHref: 'tel:+919876543210',
  whatsappNumber: '919876543210',
  whatsappHref: 'https://wa.me/919876543210',
  email: 'consult@astrologersaurabhsharma.example',
  location: 'Jaipur, Rajasthan • Worldwide Online Consultations',
  hours: 'Daily: 9:00 AM – 10:00 PM IST',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#service' },
  { label: 'About', href: '#about' },
  { label: 'Consultations', href: '#consultations' },
  { label: 'Honours', href: '#honours' },
  { label: 'Book & FAQ', href: '#book' },
];

export const WELCOME_TEXT =
  'Renowned Vedic Consultant — Astrologer Saurabh Sharma Ji';

export const TRUST_HIGHLIGHTS = [
  { icon: 'fa fa-certificate', label: '22+ Years Vedic Jyotish' },
  { icon: 'fa fa-lock', label: '100% Private & Discreet' },
  { icon: 'fa fa-globe', label: 'India & NRI Consultations' },
  { icon: 'fa fa-clock-o', label: 'Same-Day Appointments' },
];

export const HINDI_MARQUEE =
  'वैदिक ज्योतिष और कुंडली विश्लेषण द्वारा जीवन की हर उलझन का सटीक मार्गदर्शन • प्रेम संबंधों में मधुरता, विवाह में आ रही बाधाएं, दांपत्य जीवन में संतुलन, पारिवारिक शांति एवं करियर उन्नति हेतु आज ही परामर्श लें — Astrologer Saurabh Sharma जी से जुड़ें: +91-98765-43210';

export const ENGLISH_MARQUEE =
  'Authentic Vedic Jyotish & Janam Kundli Insights • Guidance for relationship reconciliation, marriage compatibility, family peace, career decisions, and spiritual clarity • Connect privately with Astrologer Saurabh Sharma: +91-98765-43210';

export const BANNERS = {
  hero: {
    sectionId: 'top',
    image: assetUrl('assets/images/hero-banner.jpg'),
    alt: 'Astrologer Saurabh Sharma — Vedic Love & Life Solutions',
  },
  brand: {
    image: assetUrl('assets/images/brand-banner.jpg'),
    alt: 'Astrologer Saurabh Sharma — Vedic Jyotish & Spiritual Clarity',
  },
  temple: {
    sectionId: 'banner-temple',
    image: assetUrl('assets/images/temple-banner.jpg'),
    alt: 'Sacred Vedic Havan & Spiritual Consultation',
    title: 'Traditional Vedic Puja, Havan & Remedial Guidance',
    subtitle: 'Performed according to classical scriptures with personalized sankalp for planetary balance.',
  },
  promo: {
    sectionId: 'banner-promo',
    image: assetUrl('assets/images/married-life-banner.jpg'),
    alt: 'Astrologer Saurabh Sharma — Marriage & Kundli Harmony',
    title: 'Marriage & Kundli Harmony Guidance',
    subtitle: 'In-depth Ashtakoota Milan, Manglik analysis, and compassionate marital counseling.',
  },
  services: {
    sectionId: 'banner-services',
    image: assetUrl('assets/images/relationship-banner.jpg'),
    alt: 'Astrologer Saurabh Sharma — Relationship & Family Clarity',
    title: 'Relationship & Family Clarity',
    subtitle: 'Restore trust, ease household stress, and find constructive direction through Jyotish.',
  },
};

export const PRIMARY_SERVICES_META = {
  eyebrow: 'Core Expertise',
  title: 'Vedic Astrology Services',
  subtitle:
    'Thoughtful, confidential horoscope readings tailored to your birth chart, planetary transits, and personal questions.',
};

export const PRIMARY_SERVICES = [
  {
    badge: 'Love & Reunion',
    title: 'Reunite Lost Love',
    image: assetUrl('assets/images/ex.png'),
    description:
      'Heal emotional distance and rebuild heartfelt connection through personalized planetary analysis with Astrologer Saurabh Sharma.',
  },
  {
    badge: 'Married Life',
    title: 'Marital Harmony Guidance',
    image: assetUrl('assets/images/fight2.png'),
    description:
      'Ease recurring misunderstandings between partners and cultivate mutual respect, warmth, and lasting peace in married life.',
  },
  {
    badge: 'Kundli Milan',
    title: 'Love Marriage & Kundli',
    image: assetUrl('assets/images/marriage.png'),
    description:
      'Receive detailed Ashtakoota Milan, Manglik assessment, and thoughtful Vedic remedies to clear obstacles on your path to marriage.',
  },
  {
    badge: 'Compatibility',
    title: 'Partner Compatibility',
    image: assetUrl('assets/images/child.png'),
    description:
      'Understand your partner’s planetary influences and restore emotional clarity, loyalty, and steady communication together.',
  },
  {
    badge: 'Home & Vastu',
    title: 'Family Peace & Balance',
    image: assetUrl('assets/images/img.png'),
    description:
      'Address household tension and generational friction with practical Vedic insights tailored to restore calm and unity at home.',
  },
  {
    badge: '1-on-1 Session',
    title: 'Relationship Clarity',
    image: assetUrl('assets/images/loveproblem.png'),
    description:
      'Navigate crossroads in love with compassionate, confidential one-on-one horoscope consultation from Astrologer Saurabh Sharma.',
  },
];

export const ABOUT_DATA = {
  eyebrow: 'About Our Practice',
  title: 'Astrologer Saurabh Sharma Ji',
  portraitImage: assetUrl('assets/images/a.png'),
  ctaText: `Speak Now: ${CONTACT.phoneDisplay}`,
  paragraphs: [
    '<strong>Astrologer Saurabh Sharma Ji</strong> brings over two decades of classical Vedic Jyotish study to individuals and couples navigating pivotal moments in love, marriage, and family life. Every consultation begins with an attentive reading of your Janam Kundli, Dasha periods, and current planetary transits.',
    'His sessions span love & marriage compatibility, partner communication challenges, family peace, Vastu alignment, and life-path clarity. Instead of generic templates, each insight and spiritual remedy is shaped around your specific chart and circumstances.',
    'Known for calm counsel, strict privacy, and transparent guidance, <strong>Astrologer Saurabh Sharma Ji</strong> assists seekers across India, the UK, USA, Canada, Australia, and the UAE via phone and WhatsApp.',
  ],
  highlights: [
    'Detailed Janam Kundli & Dasha Analysis',
    'Strict Privacy & Confidential Sessions',
    'Practical, Scriptural Vedic Remedies',
    'Direct Phone & WhatsApp Consultations',
  ],
};

export const STATS_BG = assetUrl('assets/images/backgrounds/process-two-bg.png');

export const STATS = [
  {
    iconClass: 'fa fa-heart',
    target: 18,
    suffix: 'K+',
    decimals: 0,
    label: 'Kundli Consultations',
  },
  {
    iconClass: 'fa fa-users',
    target: 9.4,
    suffix: 'K+',
    decimals: 1,
    label: 'Families Guided',
  },
  {
    iconClass: 'fa fa-globe',
    target: 62,
    suffix: 'K+',
    decimals: 0,
    label: 'Global Seekers',
  },
  {
    iconClass: 'fa fa-calendar',
    target: 22,
    suffix: '+',
    decimals: 0,
    label: 'Years in Vedic Jyotish',
  },
];

export const OTHER_SERVICES_META = {
  eyebrow: 'Personalized Jyotish Advice',
  title: 'Specialized Consultation Areas',
  subtitle: 'Filter by area of concern to explore focused consultations and connect directly.',
};

export const CONSULTATION_FILTERS = [
  { id: 'all', label: 'All Areas' },
  { id: 'love', label: 'Love & Reunion' },
  { id: 'marriage', label: 'Marriage & Kundli' },
  { id: 'family', label: 'Family & Harmony' },
];

export const OTHER_SERVICES = [
  {
    title: 'Intercaste Marriage Counsel',
    category: 'marriage',
    categoryLabel: 'Marriage & Kundli',
    image: assetUrl('assets/images/Education%20Problems.png'),
    alt: 'Intercaste Marriage Counsel',
  },
  {
    title: 'Post-Breakup Healing',
    category: 'love',
    categoryLabel: 'Love & Reunion',
    image: assetUrl('assets/images/Breakup-Problem.png'),
    alt: 'Post-Breakup Healing',
  },
  {
    title: 'Rekindling Past Bonds',
    category: 'love',
    categoryLabel: 'Love & Reunion',
    image: assetUrl('assets/images/Lost-Love.png'),
    alt: 'Rekindling Past Bonds',
  },
  {
    title: 'Unrequited Love Guidance',
    category: 'love',
    categoryLabel: 'Love & Reunion',
    image: assetUrl('assets/images/Career-Problem.png'),
    alt: 'Unrequited Love Guidance',
  },
  {
    title: 'Trust & Bonding Advice',
    category: 'love',
    categoryLabel: 'Love & Reunion',
    image: assetUrl('assets/images/relation.png'),
    alt: 'Trust & Bonding Advice',
  },
  {
    title: 'Reconciliation Support',
    category: 'marriage',
    categoryLabel: 'Marriage & Kundli',
    image: assetUrl('assets/images/Ex%20Love%20Back.png'),
    alt: 'Reconciliation Support',
  },
  {
    title: 'Domestic Harmony & Vastu',
    category: 'family',
    categoryLabel: 'Family & Harmony',
    image: assetUrl('assets/images/feeling2.png'),
    alt: 'Domestic Harmony & Vastu',
  },
  {
    title: 'Separation & Divorce Relief',
    category: 'family',
    categoryLabel: 'Family & Harmony',
    image: assetUrl('assets/images/emotionl2.png'),
    alt: 'Separation & Divorce Relief',
  },
];

export const AWARDS_DATA = {
  eyebrow: 'Recognition',
  title: 'Honours & Vedic Accreditations',
  subtitle: 'Recognized for ethical astrological scholarship and compassionate community service.',
  items: [
    {
      badge: 'JYOTISH RATNA',
      year: '2021',
      organization: 'All-India Vedic Jyotish Parishad',
      citation:
        'Awarded for distinguished contribution to traditional Janam Kundli analysis and ethical relationship counseling.',
      regNo: 'AIVJP-2021-418',
    },
    {
      badge: 'VEDIC EXCELLENCE',
      year: '2023',
      organization: 'Bharatiya Shastra & Horoscope Council',
      citation:
        'Honoured for excellence in Ashtakoota marriage compatibility, Dasha interpretation, and spiritual guidance.',
      regNo: 'BSHC-2023-892',
    },
    {
      badge: 'JYOTISH ACHARYA',
      year: '2025',
      organization: 'Global Vedic Heritage Symposium',
      citation:
        'Recognized for over two decades of dedicated service guiding individuals and families worldwide.',
      regNo: 'GVHS-2025-107',
    },
  ],
};

export const CONSULTATION_TOPICS = [
  'Reunite Lost Love / Relationship',
  'Love Marriage & Kundli Matching',
  'Husband-Wife / Marital Harmony',
  'Family Peace & Vastu',
  'Career, Finance & Personal Horoscope',
];

export const FAQ_ITEMS = [
  {
    question: 'What details should I share before a consultation?',
    answer:
      'Sharing your date of birth, exact or approximate birth time, and place of birth helps Astrologer Saurabh Sharma Ji prepare an accurate Janam Kundli. If birth time is unavailable, Prashna Kundli guidance is also offered.',
  },
  {
    question: 'Is my personal information kept strictly confidential?',
    answer:
      'Yes. Every phone call, WhatsApp message, and birth chart discussion is handled with complete discretion and never shared with third parties.',
  },
  {
    question: 'Can I book an online consultation from outside India?',
    answer:
      'Absolutely. Consultations are conducted smoothly via phone or WhatsApp call across all time zones for clients in India, USA, Canada, UK, Europe, Australia, and the Middle East.',
  },
  {
    question: 'How soon can I speak with Astrologer Saurabh Sharma Ji?',
    answer:
      'Same-day slots are usually available between 9:00 AM and 10:00 PM IST. You can call directly or submit the consultation form to open a pre-filled WhatsApp message immediately.',
  },
  {
    question: 'What kind of remedies are recommended?',
    answer:
      'Remedies focus on traditional, easy-to-follow Vedic practices—such as mantra recitation, charitable observances, auspicious timing (muhurta), and simple Vastu adjustments tailored to your chart.',
  },
];

export const FOOTER_DATA = {
  aboutHeading: 'About Astrologer',
  aboutText:
    'Astrologer Saurabh Sharma Ji is a dedicated practitioner of classical Vedic Jyotish, known for attentive listening, clear chart readings, and practical spiritual counsel that brings calm direction to everyday challenges.',
  bestServicesHeading: 'Core Consultations',
  bestServices: [
    'Love Marriage & Kundli Milan',
    'Relationship Reconciliation',
    'Marital Harmony Guidance',
    'Family Peace & Vastu',
    'Personal Horoscope Reading',
  ],
  whyChooseHeading: 'Why Consult With Us',
  whyChoose: [
    '100% Private & Confidential',
    'Personalized Chart Analysis',
    'Direct Phone & WhatsApp Support',
    '22+ Years of Vedic Study',
    'Available Worldwide Online',
  ],
  contactHeading: 'Contact & Timings',
  disclaimer:
    'Disclaimer: Vedic astrology consultations offered by Astrologer Saurabh Sharma are rooted in traditional spiritual and planetary interpretations intended for personal reflection and guidance, and do not substitute for medical, legal, or financial advice.',
};
