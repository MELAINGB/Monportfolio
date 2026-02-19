
  // Reveal animation + timeline progress
  (function(){
    const items = document.querySelectorAll('#timeline .reveal');
    const timeline = document.getElementById('timeline');
    const progress = document.getElementById('timelineProgress');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
        }
      });
      updateProgress();
    }, { threshold: 0.25 });

    items.forEach(el => io.observe(el));

    function updateProgress(){
      if(!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;

      // portion visible de la timeline dans le viewport
      const start = Math.max(0, 0 - rect.top);
      const end = Math.min(rect.height, viewH - rect.top);
      const visible = Math.max(0, end - start);

      // approx: on convertit en hauteur de progression selon scroll dans timeline
      const scrolledInside = Math.min(rect.height, Math.max(0, viewH - rect.top));
      const pct = Math.max(0, Math.min(1, scrolledInside / rect.height));

      progress.style.height = (pct * 100).toFixed(2) + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  })();

