// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = expanded ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navLinks && navToggle && 
        !navToggle.contains(e.target) && 
        !navLinks.contains(e.target) && 
        navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinksAll.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Navbar transparency on scroll
  const navigation = document.querySelector('.navigation');
  
  function updateNavbar() {
    if (window.scrollY > 50) {
      navigation?.classList.add('scrolled');
    } else {
      navigation?.classList.remove('scrolled');
    }
  }

  // Throttled scroll handler with performance optimization
  let ticking = false;
  let lastScrollY = 0;
  
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Only update if scroll changed significantly
    if (Math.abs(currentScrollY - lastScrollY) < 5) return;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNav();
        updateNavbar();
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Smooth scroll for navigation links
  navLinksAll.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const offsetTop = target.offsetTop - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Auto-update copyright year
  const yearSpan = document.querySelector('[data-year]');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Contact form handling
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      if (!data.name || !data.email || !data.message) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Por favor, ingresa un email válido.');
        return;
      }
      
      // Simulate form submission (replace with actual endpoint)
      const submitBtn = this.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = `
        <span>Enviando...</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" values="0 12 12;360 12 12"/>
          </path>
        </svg>
      `;
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        alert('¡Mensaje enviado con éxito! Te responderé pronto.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Add scroll animations with reduced observer overhead
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        // Stop observing once animated to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation - reduced set
  const animatedElements = document.querySelectorAll('.experience-card, .project-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks?.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});
