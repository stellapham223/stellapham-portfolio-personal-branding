// =============================================
//  LANGUAGE DATA
// =============================================
const i18n = {
  vi: {
    nav: {
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      contact: 'Liên hệ'
    },
    hero: {
      badge: 'Sẵn sàng cho cơ hội mới',
      greeting: 'Xin chào, tôi là',
      name: 'Stella Pham',
      role: 'Growth & Product Marketing',
      bio: 'Chuyên nghiệp định hướng sản phẩm với kinh nghiệm quản lý vòng đời sản phẩm trên nền tảng SaaS và mobile. Thế mạnh trong phối hợp liên phòng ban, ra quyết định dựa trên dữ liệu.',
      cta_projects: 'Xem dự án',
      cta_contact: 'Liên hệ',
    },
    about: {
      tag: 'Về tôi',
      title: 'Product thinker, data-driven doer',
      p1: 'Tôi là Phạm Thị Thu Phương, hiện đang làm việc tại Avada Group với vai trò Product Growth & Go-to-Market Executive. Công việc hàng ngày của tôi xoay quanh việc kết nối dữ liệu, hành vi người dùng và chiến lược tăng trưởng để tạo ra tác động thực sự.',
      p2: 'Trước đó, tôi có kinh nghiệm quản lý dự án tại Onesoft - Falcon Game Studio, nơi tôi phối hợp vòng đời phát hành cho hơn 20 tựa game mobile trên toàn cầu.',
      p3: 'Tốt nghiệp Đại học Ngoại Thương chuyên ngành Thương mại Quốc tế (GPA 3.34).',
      link_linkedin: 'LinkedIn',
      link_email: 'Email',
    },
    skills: {
      tag: 'Kỹ năng',
      title: 'Những gì tôi mang đến',
      cat1: 'Quản lý sản phẩm',
      cat2: 'Tăng trưởng & Marketing',
      cat3: 'Phân tích dữ liệu',
      cat4: 'Công cụ & Nền tảng',
    },
    experience: {
      tag: 'Kinh nghiệm',
      title: 'Hành trình sự nghiệp',
    },
    projects: {
      tag: 'Dự án',
      title: 'Case studies nổi bật',
      view: 'Xem chi tiết →',
    },
    contact: {
      tag: 'Liên hệ',
      title: "Hãy cùng làm việc",
      desc: 'Tôi luôn sẵn sàng cho các cơ hội mới và các cuộc trò chuyện thú vị. Dù bạn có một dự án hay chỉ muốn chào hỏi, hộp thư của tôi luôn mở.',
      email: 'Gửi email',
      linkedin: 'LinkedIn',
    },
    footer: '© 2025 Stella Pham. Được xây dựng với ❤️'
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      badge: 'Open to new opportunities',
      greeting: "Hi, I'm",
      name: 'Stella Pham',
      role: 'Growth & Product Marketing',
      bio: 'Product-oriented professional with experience in end-to-end product lifecycle management across SaaS and mobile platforms. Strong in cross-functional collaboration, data-driven decision-making.',
      cta_projects: 'View Projects',
      cta_contact: 'Get in Touch',
    },
    about: {
      tag: 'About Me',
      title: 'Product thinker, data-driven doer',
      p1: "I'm Pham Thi Thu Phuong (Stella), currently working at Avada Group as a Product Growth & Go-to-Market Executive. My day-to-day revolves around connecting data, user behavior, and growth strategy to create real impact.",
      p2: 'Previously, I managed project coordination at Onesoft - Falcon Game Studio, overseeing the publishing lifecycle for 20+ mobile games globally.',
      p3: 'Graduate of Foreign Trade University, Bachelor in International Trade (GPA 3.34).',
      link_linkedin: 'LinkedIn',
      link_email: 'Email',
    },
    skills: {
      tag: 'Skills',
      title: 'What I bring to the table',
      cat1: 'Product Management',
      cat2: 'Growth & Marketing',
      cat3: 'Data & Analytics',
      cat4: 'Tools & Platforms',
    },
    experience: {
      tag: 'Experience',
      title: 'Career Journey',
    },
    projects: {
      tag: 'Projects',
      title: 'Featured Case Studies',
      view: 'View Case Study →',
    },
    contact: {
      tag: 'Contact',
      title: "Let's work together",
      desc: "I'm always open to new opportunities and interesting conversations. Whether you have a project in mind or just want to say hello, my inbox is always open.",
      email: 'Send Email',
      linkedin: 'LinkedIn',
    },
    footer: '© 2025 Stella Pham. Built with ❤️'
  }
};

// =============================================
//  CURRENT LANGUAGE
// =============================================
let currentLang = localStorage.getItem('portfolio-lang') || 'vi';

// =============================================
//  APPLY TRANSLATIONS
// =============================================
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  const t = i18n[lang];

  // Toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Nav
  const navLinks = document.querySelectorAll('.nav-link');
  const navKeys = ['about','skills','experience','projects','contact'];
  navLinks.forEach((el, i) => { if (navKeys[i]) el.textContent = t.nav[navKeys[i]]; });

  // Hero
  setText('hero-h1-line1', lang === 'vi' ? 'Xin chào, tôi là' : "Hi, I'm");
  setText('hero-bio', t.hero.bio);
  setText('hero-cta-projects-text', t.hero.cta_projects);
  setText('hero-cta-contact', t.hero.cta_contact);

  // About
  setText('about-tag', t.about.tag);
  setText('about-title', t.about.title);
  setText('about-p1', t.about.p1);
  setText('about-p2', t.about.p2);
  setText('about-p3', t.about.p3);
  setText('about-link-linkedin', t.about.link_linkedin);
  setText('about-link-email', t.about.link_email);

  // Skills
  setText('skills-tag', t.skills.tag);
  setText('skills-title', t.skills.title);
  setText('skills-cat1', t.skills.cat1);
  setText('skills-cat2', t.skills.cat2);
  setText('skills-cat3', t.skills.cat3);
  setText('skills-cat4', t.skills.cat4);

  // Experience
  setText('exp-tag', t.experience.tag);
  setText('exp-title', t.experience.title);

  // Projects
  setText('proj-tag', t.projects.tag);
  setText('proj-title', t.projects.title);
  document.querySelectorAll('.project-view-text').forEach(el => {
    el.textContent = t.projects.view;
  });

  // Contact
  setText('contact-tag', t.contact.tag);
  setText('contact-title', t.contact.title);
  setText('contact-desc', t.contact.desc);
  setText('contact-email-text', t.contact.email);
  setText('contact-linkedin-text', t.contact.linkedin);

  // Footer
  setText('footer-text', t.footer);

  // Experience items (bilingual)
  applyExperience(lang);
  applyProjects(lang);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// =============================================
//  EXPERIENCE DATA
// =============================================
const experienceData = {
  vi: [
    {
      company: 'Avada Group',
      desc: 'Công ty phát triển ứng dụng hàng đầu trên nền tảng Shopify',
      role: 'Nhân viên Product Marketing & Tăng trưởng sản phẩm',
      period: '11/2024 – Hiện tại',
      bullets: [
        'Phối hợp với BA, Designer và Developer để cải thiện luồng onboarding, logic định giá và cấu trúc paywall, nâng cao tỷ lệ chuyển đổi free→paid.',
        'Dẫn dắt A/B Testing và Experiment design xuyên suốt sản phẩm, website và CRM.',
        'Phụ trách ASO cho 8 ứng dụng Shopify, tăng trung bình ~5% lượt cài đặt mỗi ứng dụng.',
        'Triển khai cross-app promotion, tăng 20% lượt cài đặt cho ứng dụng mới.',
        'Vận hành lifecycle email/CRM (onboarding, educational drips, re-engagement).',
        'Xây dựng và theo dõi KPI sản phẩm qua GA4, Looker Studio, BigQuery và Clarity.',
      ]
    },
    {
      company: 'Onesoft - Falcon Game Studio',
      desc: 'Công ty phát triển và phát hành game hàng đầu Việt Nam',
      role: 'Quản lý dự án',
      period: '7/2023 – 10/2024',
      bullets: [
        'Điều phối các nhóm liên phòng ban trong vòng đời phát triển của 20+ game mobile.',
        'Theo dõi quy trình phát hành 6 giai đoạn cho hơn 20 game (Puzzle, Hypercasual, Hybrid-casual).',
        'Thực hiện báo cáo hàng tháng về thị trường game di động toàn cầu.',
        'Phân tích chỉ số hiệu suất: Retention, Playtime, CPI, eCPM, ARPDAU… qua GA & Appsflyer.',
      ]
    },
    {
      company: 'The Trainee Club',
      desc: 'Đơn vị dẫn đầu trong lĩnh vực Employer Branding và đào tạo nhân sự trẻ',
      role: 'Thực tập sinh Quản lý Dự án',
      period: '9/2022 – 4/2023',
      bullets: [
        'Xây dựng ý tưởng và kế hoạch triển khai cho 4 chiến dịch tuyển dụng (Suntory PepsiCo, Prudential, Panasonic).',
        'Phối hợp nhóm 10 người soạn thảo nội dung, điều phối sự kiện, quản lý khách hàng.',
        'Điều phối các nhóm chức năng 3–5 người (KOL Booking, Partnership, CV Processing).',
      ]
    }
  ],
  en: [
    {
      company: 'Avada Group',
      desc: 'A leading app developer on Shopify',
      role: 'Product Growth & Go-to-Market Executive',
      period: '11/2024 – Present',
      bullets: [
        'Collaborate with Product, Design, and Engineering to refine onboarding flows, pricing logic, and paywall structures, improving free-to-paid conversion.',
        'Lead end-to-end A/B Testing and experimentation across product, web, and CRM.',
        'Own ASO for 8 Shopify apps, driving ~5% install lift per app.',
        'Launch cross-app promotions driving a 20% install lift for new apps.',
        'Run lifecycle email/CRM (onboarding, educational drips, re-engagement).',
        'Define and monitor product KPIs via GA4, Looker Studio, BigQuery, and Clarity.',
      ]
    },
    {
      company: 'Onesoft - Falcon Game Studio',
      desc: 'A leading game developer and publisher in Vietnam with billions of players on Android & iOS',
      role: 'Global Publishing Manager',
      period: '7/2023 – 10/2024',
      bullets: [
        'Coordinated cross-functional teams throughout the full lifecycle of 20+ mobile games from concept to launch.',
        'Monitored the 6-phase publishing process for 20+ games across Puzzle, Hypercasual, Hybrid-casual genres.',
        'Conducted monthly in-depth reports on the global mobile game market.',
        'Analyzed performance metrics (Retention, Playtime, CPI, eCPM, ARPDAU) via Google Analytics & Appsflyer.',
      ]
    },
    {
      company: 'The Trainee Club',
      desc: 'The top-market company in Employer Branding and Young Talent Training',
      role: 'Project Manager Intern',
      period: '9/2022 – 4/2023',
      bullets: [
        'Created execution proposals & plans for 4 talent recruitment campaigns (Suntory PepsiCo, Prudential, Panasonic).',
        'Teamed with a core team of 10 to draft materials, coordinate events, and manage client contacts.',
        'Delegated functional teams of 3–5 members (KOL Booking, Partnership, CV Processing).',
      ]
    }
  ]
};

function applyExperience(lang) {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  const items = experienceData[lang];
  container.innerHTML = items.map((item, i) => `
    <div class="timeline-item ${i % 2 === 0 ? 'slide-left' : 'slide-right'}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-company">${item.company}</div>
            <div class="timeline-role">${item.role}</div>
            <div class="timeline-company-desc">${item.desc}</div>
          </div>
          <div class="timeline-period">${item.period}</div>
        </div>
        <ul class="timeline-bullets">
          ${item.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
  observeFadeIn();
}

// =============================================
//  PROJECTS DATA
// =============================================
const projectsData = {
  vi: [
    {
      num: '01',
      icon: '📧',
      title: 'Email Automation Flow',
      summary: 'Thiết kế luồng email tự động theo milestone cho Shopify SaaS — giảm tỷ lệ uninstall trong 7 ngày đầu và cải thiện chuyển đổi free→paid.',
      tags: ['Email/CRM', 'SaaS', 'Lifecycle', 'Shopify'],
      link: 'projects/email-automation-flow.html'
    },
    {
      num: '02',
      icon: '📊',
      title: 'Dashboard Cross-App Promotion',
      summary: 'Xây dựng hệ thống đo lường cross-app promotion trên Looker Studio — biến chiến lược "funnel app" từ cảm tính thành dữ liệu minh bạch.',
      tags: ['Looker Studio', 'BigQuery', 'Analytics', 'Dashboard'],
      link: 'projects/cross-app-promotion-dashboard.html'
    },
    {
      num: '03',
      icon: '🔐',
      title: 'Dashboard Authentication',
      summary: 'Giải quyết vấn đề cost spike và lộ dữ liệu nhạy cảm bằng cách thiết kế hệ thống xác thực Google Auth + role-based access cho dashboard nội bộ.',
      tags: ['Security', 'Auth', 'Product', 'Cost optimization'],
      link: 'projects/dashboard-authentication.html'
    },
    {
      num: '04',
      icon: '🔍',
      title: 'Competitor Stalker',
      summary: 'Xây dựng nền tảng SaaS full-stack theo dõi đối thủ trên Shopify App Store — từ ý tưởng đến production với quy trình Agentic AI và 17 AI agent chuyên biệt.',
      tags: ['Agentic AI', 'Claude Code', 'Next.js', 'Firebase'],
      link: 'projects/competitor-stalker.html'
    }
  ],
  en: [
    {
      num: '01',
      icon: '📧',
      title: 'Email Automation Flow',
      summary: 'Designed a milestone-based email automation flow for a Shopify SaaS product — reducing early uninstall rates and improving free-to-paid conversion.',
      tags: ['Email/CRM', 'SaaS', 'Lifecycle', 'Shopify'],
      link: 'projects/email-automation-flow.html'
    },
    {
      num: '02',
      icon: '📊',
      title: 'Cross-App Promotion Dashboard',
      summary: 'Built a cross-app promotion measurement system in Looker Studio — turning the "funnel app" strategy from intuition to transparent, measurable data.',
      tags: ['Looker Studio', 'BigQuery', 'Analytics', 'Dashboard'],
      link: 'projects/cross-app-promotion-dashboard.html'
    },
    {
      num: '03',
      icon: '🔐',
      title: 'Dashboard Authentication',
      summary: 'Solved a critical cost spike and sensitive data exposure by designing a Google Auth + role-based access control system for an internal analytics dashboard.',
      tags: ['Security', 'Auth', 'Product', 'Cost optimization'],
      link: 'projects/dashboard-authentication.html'
    },
    {
      num: '04',
      icon: '🔍',
      title: 'Competitor Stalker',
      summary: 'Built a full-stack SaaS platform to track competitor changes on Shopify App Store — from idea to production using an Agentic AI workflow with 17 specialized AI agents.',
      tags: ['Agentic AI', 'Claude Code', 'Next.js', 'Firebase'],
      link: 'projects/competitor-stalker.html'
    }
  ]
};

function applyProjects(lang) {
  const container = document.getElementById('projects-container');
  if (!container) return;
  const items = projectsData[lang];
  const viewText = i18n[lang].projects.view;
  container.innerHTML = items.map((p, i) => `
    <div class="project-card ${i % 2 === 0 ? 'slide-left' : 'slide-right'}" onclick="window.location.href='${p.link}'">
      <div class="project-num">Case Study ${p.num}</div>
      <div class="project-icon">${p.icon}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-summary">${p.summary}</div>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <div class="project-arrow">
        <span class="project-view-text">${viewText}</span>
      </div>
    </div>
  `).join('');
  observeFadeIn();
}

// =============================================
//  INTERSECTION OBSERVER (fade-in + slide-in)
// =============================================
function observeFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in:not(.visible), .slide-left:not(.visible), .slide-right:not(.visible)')
    .forEach(el => observer.observe(el));
}

// =============================================
//  SKILL CARD TILT + SPOTLIGHT
// =============================================
function initSkillSpotlight() {
  const MAX_TILT = 14;   // degrees
  const SCALE    = 1.07; // zoom amount

  document.querySelectorAll('.skill-category').forEach(card => {
    let rafId = null;

    card.addEventListener('mouseenter', () => {
      card.classList.add('is-tilting');
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.12s ease-out';
    });

    card.addEventListener('mousemove', e => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        // Normalized -1 to 1
        const nx = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
        const ny = ((e.clientY - rect.top)  / rect.height) * 2 - 1;

        const rotY =  nx * MAX_TILT;  // lean left-right
        const rotX = -ny * MAX_TILT;  // lean up-down

        card.style.transform =
          `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${SCALE})`;

        // Spotlight
        const px = ((e.clientX - rect.left) / rect.width)  * 100;
        const py = ((e.clientY - rect.top)  / rect.height) * 100;
        card.style.setProperty('--mx', px + '%');
        card.style.setProperty('--my', py + '%');
      });
    });

    const resetCard = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.classList.remove('is-tilting');
      card.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1), box-shadow 0.45s cubic-bezier(0.4,0,0.2,1)';
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    card.addEventListener('mouseleave', resetCard);
  });
}

// =============================================
//  NAVBAR SCROLL EFFECT
// =============================================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0,0,0,0.3)'
    : 'none';
});

// =============================================
//  INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Initial language
  applyLang(currentLang);
  observeFadeIn();
  initSkillSpotlight();
});
