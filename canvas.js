export function initCanvas() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return; // Skip entirely

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d', { alpha: true });
  
  let width, height;
  let particles = [];
  let mouse = { x: -1000, y: -1000, radius: 120 };
  let isPlaying = true;
  let frameCount = 0;
  let lastTime = performance.now();
  
  // Cap at 60fps
  const fpsInterval = 1000 / 60;
  let then = performance.now();

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
  }

  window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(resize, 200);
  });

  function getTextCoordinates() {
    const offCanvas = document.createElement('canvas');
    const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
    offCanvas.width = width;
    offCanvas.height = height;
    
    const text = "ORPITA DAS";
    // Responsive font size for the particle text
    const fontSize = width < 768 ? 50 : 120;
    offCtx.font = `900 ${fontSize}px 'Outfit', sans-serif`;
    offCtx.fillStyle = "white";
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, width / 2, height / 2 - (width < 768 ? 80 : 120));

    const imageData = offCtx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const coords = [];
    
    // Sample pixels (every 4th pixel to save performance)
    for (let y = 0; y < height; y += 4) {
      for (let x = 0; x < width; x += 4) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 128) {
          coords.push({ x, y });
        }
      }
    }
    return coords;
  }

  function initParticles() {
    particles = [];
    const numParticles = width < 768 ? 300 : 800;
    const coords = getTextCoordinates();
    
    for (let i = 0; i < numParticles; i++) {
      let targetX = Math.random() * width;
      let targetY = Math.random() * height;
      
      if (coords.length > 0) {
        const randomIndex = Math.floor(Math.random() * coords.length);
        targetX = coords[randomIndex].x;
        targetY = coords[randomIndex].y;
      }
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: targetX,
        baseY: targetY,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.5 + 1,
        driftSpeed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2
      });
    }
  }

  const startTime = performance.now();
  
  function animate(now) {
    if (!isPlaying) {
      requestAnimationFrame(animate);
      return;
    }

    requestAnimationFrame(animate);

    const elapsed = now - then;
    if (elapsed <= fpsInterval) return;
    then = now - (elapsed % fpsInterval);

    // FPS Counter
    frameCount++;
    if (now - lastTime >= 1000) {
      console.log(`Hero Canvas FPS: ${frameCount}`);
      frameCount = 0;
      lastTime = now;
    }

    ctx.clearRect(0, 0, width, height);
    
    const timeSinceStart = now - startTime;
    // Over 2.5s (2500ms), transition from loose to strict formation
    const formationProgress = Math.min(timeSinceStart / 2500, 1);
    const ease = 1 - Math.pow(1 - formationProgress, 5); // easeOutQuint

    ctx.fillStyle = 'rgba(0, 229, 255, 0.7)'; // Electric teal, slightly transparent
    
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      
      // Drift around base
      p.angle += p.driftSpeed;
      const driftX = Math.cos(p.angle) * 15 * (1 - ease * 0.7);
      const driftY = Math.sin(p.angle) * 15 * (1 - ease * 0.7);
      
      const targetX = p.baseX + driftX;
      const targetY = p.baseY + driftY;
      
      const dx = targetX - p.x;
      const dy = targetY - p.y;
      
      // Pull towards target
      p.vx += dx * (0.01 + ease * 0.05);
      p.vy += dy * (0.01 + ease * 0.05);

      // Repel from mouse
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const dist = Math.sqrt(mdx * mdx + mdy * mdy);
      
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.vx += (mdx / dist) * force * 15;
        p.vy += (mdy / dist) * force * 15;
      }
      
      // Friction
      p.vx *= 0.85;
      p.vy *= 0.85;
      
      p.x += p.vx;
      p.y += p.vy;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Mouse / Touch events
  const updateMouse = (e) => {
    if (e.touches) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    } else {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
  };
  const resetMouse = () => { mouse.x = -1000; mouse.y = -1000; };

  window.addEventListener('mousemove', updateMouse);
  window.addEventListener('touchmove', updateMouse, { passive: true });
  window.addEventListener('mouseout', resetMouse);
  window.addEventListener('touchend', resetMouse);

  // Pause on visibility change
  document.addEventListener('visibilitychange', () => {
    isPlaying = document.visibilityState === 'visible';
  });

  // Pause when off-screen
  const observer = new IntersectionObserver((entries) => {
    isPlaying = entries[0].isIntersecting;
  });
  observer.observe(document.getElementById('hero'));

  // Init
  document.fonts.ready.then(() => {
    resize();
    then = performance.now();
    animate(performance.now());
  });
}
