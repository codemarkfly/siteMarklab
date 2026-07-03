/**
 * MarkTeam - Equipe Criativa
 * JavaScript principal
 * Controle de menu mobile, scroll, animações e interações
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ==============================
     MOBILE MENU
  ============================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('show');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('show');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  menuOverlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Fecha menu ao redimensionar para desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  /* ==============================
     HEADER SCROLL EFFECT
  ============================== */
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  /* ==============================
     SCROLL ANIMATIONS (Intersection Observer)
  ============================== */
  const animateElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale, .stagger-children'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    animateElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback para navegadores sem suporte */
    animateElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ==============================
     SMOOTH SCROLL PARA ÂNCORAS (melhoria mobile)
  ============================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  /* ==============================
     EFEITO DE DIGITAÇÃO NO BADGE (opcional)
  ============================== */
    console.log('MarkTeam — Consultoria em Design & Marketing Promocional.');
});
