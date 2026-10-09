import { content } from './content.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded', () => {
  // HERO
  document.getElementById('hero-name').textContent = content.hero.name;
  document.getElementById('hero-title').textContent = content.hero.title;
  const statsContainer = document.getElementById('hero-stats');
  content.hero.stats.forEach(stat => {
    statsContainer.innerHTML += `
      <div class="stat-item">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `;
  });

  // ABOUT & SKILLS BENTO
  document.getElementById('about-heading').textContent = content.about.heading;
  document.getElementById('about-bio').textContent = content.about.bio;
  document.getElementById('about-focus').textContent = content.about.focus;

  // Skills
  const skillsEl = document.getElementById('about-skills');
  let skillsHTML = `<h3 class="bento-header">Core Toolkit</h3><div class="skills-groups">`;
  for (const [key, value] of Object.entries(content.skills.categories)) {
    const title = key.charAt(0).toUpperCase() + key.slice(1);
    const chips = value.split(',').map(s => `<span class="chip">${s.trim()}</span>`).join('');
    skillsHTML += `<div class="skill-group"><h4>${title}</h4><div class="chips-container">${chips}</div></div>`;
  }
  skillsHTML += `</div>`;
  skillsEl.innerHTML = skillsHTML;

  // Comm / Debate
  const commEl = document.getElementById('about-comm');
  commEl.innerHTML = `<h3 class="bento-header">Communication</h3>`;
  content.achievements.filter(ach => ach.type === 'communication').forEach(ach => {
    commEl.innerHTML += `<div class="comm-item"><strong>${ach.title}</strong><br><span>${ach.shortDesc || ach.desc}</span></div>`;
  });

  // Leadership
  const leadEl = document.getElementById('about-lead');
  leadEl.innerHTML = `<h3 class="bento-header">Leadership</h3>`;
  content.leadership.forEach(lead => {
    leadEl.innerHTML += `<div class="comm-item"><strong>${lead.title}</strong><br><span>${lead.desc}</span></div>`;
  });

  // PROJECTS
  // document.getElementById('projects-heading').textContent = content.projects.heading; // Handled in HTML now
  const projList = document.getElementById('projects-list');
  content.projects.items.forEach(proj => {
    const chips = proj.tech.map(t => `<span class="chip">${t}</span>`).join('');
    projList.innerHTML += `
      <div class="project-card glow-card">
        <div class="proj-number">${proj.number}</div>
        <div class="proj-content">
          <h3>${proj.title}</h3>
          <p class="proj-outcome">${proj.outcome}</p>
          <p class="proj-preview mt-16">${proj.preview}</p>
          <div class="chips-container mt-24">${chips}</div>
          <div class="mt-32" style="display: flex; gap: 16px;">
            <button class="btn btn-primary" onclick="window.openModal('${proj.id}')">View Details</button>
            ${proj.github !== '#' ? `<a href="${proj.github}" target="_blank" class="btn"><i class="fab fa-github" style="margin-right: 8px;"></i> GitHub</a>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  // EXPERIENCE
  document.getElementById('experience-heading').textContent = content.experience.heading;
  const expList = document.getElementById('experience-list');
  content.experience.items.forEach(exp => {
    const bullets = `<ul class="bullet-list">` + exp.description.map(b => `<li>${b}</li>`).join('') + `</ul>`;
    expList.innerHTML += `
      <div class="exp-row">
        <div class="exp-left">
          <h3>${exp.role}</h3>
          <div class="exp-meta">${exp.company}<br>${exp.duration}</div>
        </div>
        <div class="exp-right glow-card">
          ${bullets}
        </div>
      </div>
    `;
  });

  // CERTIFICATES
  const certList = document.getElementById('certificates-list');
  content.certifications.forEach(cert => {
    certList.innerHTML += `
      <div class="cert-item">
        <div>
          <div class="cert-meta"><i class="fas fa-award"></i> Certification</div>
          <h3 class="cert-title">${cert.title}</h3>
        </div>
        ${cert.file ? `<a href="${cert.file}" target="_blank" class="cert-link">View Credential <i class="fas fa-arrow-right" style="font-size: 0.8em;"></i></a>` : ''}
      </div>
    `;
  });

  // ACHIEVEMENTS
  const achList = document.getElementById('achievements-list');
  content.achievements.forEach(ach => {
    const iconClass = ach.type === 'competition' ? 'fa-trophy' : 'fa-award';
    achList.innerHTML += `
      <div class="project-card glow-card ach-card">
        <div class="proj-number ach-icon">
          <i class="fas ${iconClass}"></i>
        </div>
        <div class="proj-content">
          <h3>${ach.title}</h3>
          <p>${ach.desc}</p>
        </div>
      </div>
    `;
  });

  // EDUCATION
  // document.getElementById('education-heading').innerHTML = `<span class="section-num">04 /</span> ${content.education.heading}`; // Handled in HTML
  const eduList = document.getElementById('education-list');
  content.education.items.forEach(edu => {
    eduList.innerHTML += `
      <div class="exp-row">
        <div class="exp-left">
          <h3>${edu.degree}</h3>
          <div class="exp-meta">${edu.duration}</div>
        </div>
        <div class="exp-right glow-card">
          <strong>${edu.institution}</strong><br>
          <span style="color: var(--color-text-muted);">${edu.location}</span><br>
          <span class="highlight block mt-8">${edu.gpa}</span>
        </div>
      </div>
    `;
  });

  // CONTACT
  document.getElementById('contact-heading').textContent = content.contact.heading;
  document.getElementById('contact-phone').textContent = content.contact.phone;
  document.getElementById('contact-email').textContent = content.contact.email;
  document.getElementById('contact-email-link').href = `mailto:${content.contact.email}`;
  document.getElementById('contact-linkedin').href = content.contact.linkedin;
  document.getElementById('contact-github').href = content.contact.github;

  // BACKGROUND PARALLAX
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const bw1 = document.querySelector('.blob-wrapper-1');
    const bw2 = document.querySelector('.blob-wrapper-2');

    gsap.to(bw1, {
      y: '40vh',
      x: '20vw',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });

    gsap.to(bw2, {
      y: '-40vh',
      x: '-20vw',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }

  // UX INTERACTIONS & POLISH
  
  // 1. Mouse Glow on Cards
  document.querySelectorAll('.glow-card, .exp-right').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 2. Active Nav Indicator
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.2, rootMargin: "-10% 0px -40% 0px" });
  sections.forEach(sec => observer.observe(sec));

  // 3. Scroll Reveals
  gsap.utils.toArray('.reveal-section').forEach(sec => {
    gsap.fromTo(sec, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", scrollTrigger: { trigger: sec, start: "top 85%" } }
    );
  });

  // 4. Page Load Sequence
  const tl = gsap.timeline();
  tl.fromTo('nav', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4 })
    .fromTo('#hero-name', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 })
    .fromTo('#hero-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 })
    .fromTo('.stat-item', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.2, stagger: 0.1 })
    .fromTo('.visual-mesh', { opacity: 0, scale: 0.8 }, { opacity: 0.45, scale: 1, duration: 0.8, ease: "power2.out" }, 0)
    .fromTo('.hero-image-wrapper', { opacity: 0, scale: 0.95, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.4");
});

// MODAL LOGIC
window.openModal = function(projectId) {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  const proj = content.projects.items.find(p => p.id === projectId);
  if (!proj) return;
  
  modalTitle.textContent = proj.title;
  let html = '';
  
  if (proj.details) {
    if (proj.stats) {
      let statsHtml = '<div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">';
      proj.stats.forEach(stat => {
        statsHtml += `<div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; flex: 1; min-width: 120px;">
          <div style="font-size: 1.5em; font-weight: bold; color: var(--color-primary);">${stat.value}</div>
          <div style="font-size: 0.9em; color: var(--color-text-muted);">${stat.label}</div>
        </div>`;
      });
      statsHtml += '</div>';
      html += statsHtml;
    }
    
    if (proj.details.overview) html += `<div class="modal-body-section"><h4>Overview</h4><p>${proj.details.overview}</p></div>`;
    if (proj.details.problem) html += `<div class="modal-body-section"><h4>Problem Statement</h4><p>${proj.details.problem}</p></div>`;
    if (proj.details.solution) html += `<div class="modal-body-section"><h4>The Solution</h4><p>${proj.details.solution}</p></div>`;
    if (proj.details.howItWorks) html += `<div class="modal-body-section"><h4>How it works</h4><ul>${proj.details.howItWorks.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (proj.details.features) html += `<div class="modal-body-section"><h4>Features</h4><ul>${proj.details.features.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (proj.details.prototype) html += `<div class="modal-body-section"><h4>Interactive Prototype</h4><p>${proj.details.prototype}</p></div>`;
    if (proj.details.evidence) html += `<div class="modal-body-section"><h4>Key Findings</h4><ul>${proj.details.evidence.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (proj.details.implementation) html += `<div class="modal-body-section"><h4>Implementation Plan</h4><ol>${proj.details.implementation.map(i => `<li>${i}</li>`).join('')}</ol></div>`;
    if (proj.details.benefits) html += `<div class="modal-body-section"><h4>Expected Benefits</h4><ul>${proj.details.benefits.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (proj.details.limitations) html += `<div class="modal-body-section" style="border: 1px dashed var(--color-border); padding: 16px; border-radius: 8px;"><h4>What this does not show</h4><ul>${proj.details.limitations.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (proj.details.stack) html += `<div class="modal-body-section"><h4>Tech Stack</h4><p>${proj.details.stack}</p></div>`;
  } else {
    // Fallback for projects that don't have the new detailed structure yet
    html += `<div class="modal-body-section"><h4>Implementation</h4><p>${proj.built}</p></div>`;
    html += `<div class="modal-body-section"><h4>Results</h4><p>${proj.result}</p></div>`;
  }

  modalBody.innerHTML = html;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // prevent scrolling
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  const closeModal = document.querySelector('.close-modal');
  
  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
});
