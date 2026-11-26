/* Movimiento · perfil gsap+lenis (skill GSAP + Lenis, decidir.py: scroll-suave secuencia texto parallax scrub sticky-fixed ir-a-punto revelar-simple).
   Dueños (orq-propiedad): reloj gsap.ticker → lenis.raf · posición y anclas: Lenis (anchors: true) · scroll programático: mov.irA
   · medición: mov.actualizar() · movimiento reducido: mov.reducido · limpieza: ctx de la plantilla.
   Sin ScrollSmoother, sin normalizeScroll, sin ScrollToPlugin, scrub: true (sin scrub numérico). */
(() => {
  if (!window.gsap || !window.ScrollTrigger || !window.Lenis || !window.Plantillas) return;
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const mov = Plantillas.iniciarMovimiento({
    perfil: 'gsap+lenis', gsap, ScrollTrigger, Lenis,
    opciones: { lenis: { lerp: 0.1 } },
  });
  window.joseMov = mov;

  const qs = (sel, root = document) => [...root.querySelectorAll(sel)];

  // La altura cambia al pulsar pestañas y filtros: se vuelve a medir (dueño de la medición: mov.actualizar).
  document.addEventListener('click', (e) => {
    if (e.target.closest('[role="tab"], #ml-filtros button, #combo-filtros button, #cp-chips button, .mol-btn-group button')) {
      requestAnimationFrame(() => requestAnimationFrame(() => mov.actualizar()));
    }
  });

  document.fonts.ready.then(() => mov.añadir(({ reducido }) => {
    const ease = 'power3.out';

    // Barra de progreso de lectura, ligada al scroll.
    gsap.to('.jose-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });

    if (reducido) return;

    // 1 · Portada: secuencia de entrada.
    const hero = document.querySelector('.jose-hero');
    if (hero) {
      const tl = gsap.timeline({ defaults: { ease } });
      const titulo = hero.querySelector('[data-split]');
      SplitText.create(titulo, {
        type: 'lines', mask: 'lines', autoSplit: true,
        onSplit: (self) => tl.from(self.lines, { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.15),
      });
      tl.from('.jose-hero__kicker', { y: 16, autoAlpha: 0, duration: 0.7 }, 0)
        .fromTo('.jose-hero__pic', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' }, 0.1)
        .from('.jose-hero__pic img', { scale: 1.25, duration: 1.6, ease: 'expo.out' }, 0.3)
        .from('.jose-hero__text > *', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.1 }, 0.6)
        .from('.jose-stats > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.8)
        .from('.jose-hero__strip span', { scaleY: 0, transformOrigin: '50% 100%', duration: 0.8, stagger: 0.04, ease: 'expo.out' }, 0.9);

      // Parallax de portada: solo la foto dentro de su marco y la tira de color (Taste: nunca parallax en texto).
      gsap.to('.jose-hero__pic img', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.fromTo('.jose-hero__strip', { xPercent: 0 }, { xPercent: -4, ease: 'none', scrollTrigger: { trigger: '.jose-hero__strip', start: 'top bottom', end: 'bottom top', scrub: true } });
    }

    // 2 · Cabeceras de sección: las líneas del título suben desde su máscara (momento tipográfico).
    qs('.jose-head').forEach((head) => {
      const tl = gsap.timeline({ defaults: { ease }, scrollTrigger: { trigger: head, start: 'top 85%', once: true } });
      const h2 = head.querySelector('[data-split]');
      if (h2) {
        SplitText.create(h2, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit: (self) => tl.from(self.lines, { yPercent: 105, duration: 0.9, stagger: 0.08 }, 0.05),
        });
      } else {
        tl.from(head.querySelector('h2'), { y: 24, autoAlpha: 0, duration: 0.8 }, 0.05);
      }
      const lead = head.querySelector('.jose-lead');
      if (lead) tl.from(lead, { y: 20, autoAlpha: 0, duration: 0.8 }, 0.25);
    });

    // 3 · Las fichas no aparecen al hacer scroll (Taste: ninguna tarjeta entra con fundido); responden al puntero por CSS.

    // 4 · Fotos de las combinaciones: parallax dentro de su marco.
    qs('.jose-combo .mol-card__media img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -6, scale: 1.12 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // 5 · Look ilustrado: la imagen se desplaza más lenta que el texto.
    qs('.jose-look__pic img').forEach((img) => {
      gsap.fromTo(img, { y: 40 }, { y: -40, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // 6 · Al filtrar las 32 combinaciones, las visibles entran escalonadas.
    const mlf = document.getElementById('ml-filtros');
    if (mlf) mlf.addEventListener('click', (e) => {
      if (!e.target.closest('button')) return;
      requestAnimationFrame(() => gsap.from(qs('#ml-combos .jose-ml:not([hidden])').slice(0, 6), { y: 30, autoAlpha: 0, duration: 0.6, ease, stagger: 0.06, overwrite: true }));
    });

    mov.actualizar();
  }));
})();
