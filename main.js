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
    commEl.innerHTML += `<div class="comm-item"><strong>${ach.title}</strong><br><span>${ach.desc}</span></div>`;
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
          <button class="btn btn-primary mt-32" onclick="alert('Case study full layout opens here')">View Details</button>
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

  // ACHIEVEMENTS
  const achList = document.getElementById('achievements-list');
  content.achievements.forEach(ach => {
    achList.innerHTML += `
      <div class="project-card glow-card" style="padding: 24px; position: relative;">
        ${ach.date ? `<div class="exp-meta" style="position: absolute; right: 24px; top: 24px;">${ach.date}</div>` : ''}
        <h3 style="margin-bottom: 8px; padding-right: 80px;">${ach.title}</h3>
        <p style="color: var(--color-text-muted);">${ach.desc}</p>
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
  const contactActions = document.getElementById('contact-actions');
  contactActions.innerHTML = `
    <a href="mailto:${content.contact.email}" class="btn btn-massive">Email Me</a>
    <a href="${content.contact.linkedin}" target="_blank" class="btn btn-massive">LinkedIn</a>
    <a href="${content.contact.github}" target="_blank" class="btn btn-massive">GitHub</a>
  `;

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
    .fromTo('.hero-actions .btn', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.2, stagger: 0.1 }, "-=0.2")
    .fromTo('.visual-mesh', { opacity: 0, scale: 0.8 }, { opacity: 0.5, scale: 1, duration: 0.8, ease: "power2.out" }, 0);
});
