/**
 * JKS Karate-Do México & Internacional - Controlador Principal
 * 100% Vanilla JavaScript - Sin dependencias externas
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAboutCarousel();
  initDojosSection();
  initInstructoresSection();
  initScrollAnimations();
});

/* ==========================================================================
   1. NAVEGACIÓN Y MENÚ MÓVIL
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.mobile-menu-btn, .hamburger-btn');
  const navMenu = document.querySelector('.nav-links, .mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header blur effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (menuBtn && navMenu) {
    const toggleMenu = (forceState) => {
      const isOpen = typeof forceState === 'boolean' ? forceState : !navMenu.classList.contains('active');
      navMenu.classList.toggle('active', isOpen);
      menuBtn.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen.toString());
    };

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu(false);
      }
    });
  }

  // Active link highlight on scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      
      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });
}

/* ==========================================================================
   2. CARRUSEL AUTOMÁTICO SECCIÓN CONÓCENOS
   ========================================================================== */
function initAboutCarousel() {
  const slides = document.querySelectorAll('.about-slide');
  if (!slides || slides.length <= 1) return;

  let currentSlide = 0;
  const slideInterval = 4000; // Rotación automática cada 4 segundos

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, slideInterval);
}

/* ==========================================================================
   3. SECCIÓN: DOJOS MÉXICO (Renderizado Limpio de Dojos Oficiales)
   ========================================================================== */
function initDojosSection() {
  const dojosContainer = document.getElementById('dojos-grid');
  if (!dojosContainer || typeof DOJOS_MEXICO === 'undefined') return;

  // Helper para generar HTML limpio de horarios
  function formatHorariosHtml(horarios) {
    if (!horarios || horarios.length === 0) {
      return `
        <div class="schedule-empty-info">
          <span>Horarios e inscripciones disponibles vía contacto directo con el dojo.</span>
        </div>
      `;
    }

    return `
      <div class="dojo-schedule-block">
        ${horarios.map(h => `
          <div class="schedule-group">
            <div class="schedule-header">
              <strong class="schedule-days-title">${h.dias}</strong>
            </div>
            ${h.turnos && h.turnos.length > 0 ? `
              <ul class="schedule-turnos-list">
                ${h.turnos.map(t => `<li><span class="bullet-dot">•</span> ${t}</li>`).join('')}
              </ul>
            ` : `
              <p class="schedule-detail-text">${h.detalle || ''}</p>
            `}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Helper para generar enlaces telefónicos
  function formatContactLinks(dojo) {
    let phonesHtml = '';
    if (dojo.telefonos && dojo.telefonos.length > 0) {
      phonesHtml = dojo.telefonos.map(t => `
        <a href="tel:${t.numero.replace(/[^0-9+]/g, '')}" class="dojo-phone-link" title="Llamar a ${t.numero}">
          <strong>${t.tipo}:</strong> ${t.numero}
        </a>
      `).join('');
    } else if (dojo.telefono) {
      phonesHtml = `
        <a href="tel:${dojo.telefono.replace(/[^0-9+]/g, '')}" class="dojo-phone-link" title="Llamar a ${dojo.telefono}">
          ${dojo.telefono}
        </a>
      `;
    }

    return phonesHtml;
  }

  // Renderizado limpio de las tarjetas de dojos
  dojosContainer.innerHTML = DOJOS_MEXICO.map(dojo => `
    <article class="dojo-card ${dojo.destacado ? 'destacado' : ''}" id="${dojo.id}">
      ${dojo.destacado ? '<span class="badge-destacado">Sede Principal</span>' : ''}
      
      <div class="dojo-card-header">
        <h3 class="dojo-title">${dojo.nombre}</h3>
        <p class="dojo-city">${dojo.ciudad}</p>
      </div>
      
      <div class="dojo-card-body">
        <!-- Instructor y Grado -->
        <div class="dojo-info-row">
          <span class="info-label">Instructor a cargo:</span>
          <div class="sensei-info-box">
            <span class="sensei-name">${dojo.instructor}</span>
            ${dojo.grado ? `<span class="sensei-grade-translucent">${dojo.grado}</span>` : ''}
          </div>
        </div>

        <!-- Dirección -->
        <div class="dojo-info-row">
          <span class="info-label">Dirección:</span>
          <span class="info-value dojo-address-text">${dojo.direccion}</span>
        </div>

        <!-- Horarios estructurados -->
        <div class="dojo-info-row">
          <span class="info-label">Horarios:</span>
          ${formatHorariosHtml(dojo.horarios)}
        </div>

        <!-- Contacto Directo -->
        <div class="dojo-info-row">
          <span class="info-label">Contacto:</span>
          <div class="dojo-contact-links">
            ${formatContactLinks(dojo)}
          </div>
        </div>
      </div>

      ${(dojo.facebook || dojo.mapa) ? `
        <div class="dojo-card-footer">
          ${dojo.facebook ? `
            <a href="${dojo.facebook}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-dojo-facebook"
               title="Visitar página de Facebook de ${dojo.nombre}">
               <svg class="btn-facebook-svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               <span>Facebook</span>
            </a>
          ` : ''}
          ${dojo.mapa ? `
            <a href="${dojo.mapa}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-dojo-map" 
               title="Ver ubicación en Google Maps">
               <span>Ver Ubicación</span>
            </a>
          ` : ''}
        </div>
      ` : ''}
    </article>
  `).join('');
}

/* ==========================================================================
   3. SECCIÓN: INSTRUCTORES (México y Japón) + Modales
   ========================================================================== */
function initInstructoresSection() {
  const mxContainer = document.getElementById('instructores-mx-grid');
  const jpContainer = document.getElementById('instructores-jp-grid');

  if (typeof INSTRUCTORES_DATA === 'undefined') return;

  // Render Instructores México con distribución exacta por filas (instructor-row)
  if (mxContainer && INSTRUCTORES_DATA.mexico) {
    const mexicoRows = [
      { single: true, ids: ["inst-mx-1"] },                      // Fila 1: Jaime Ortega Sosa
      { single: false, ids: ["inst-mx-2", "inst-mx-3"] },        // Fila 2: Jacobo Gómez Scagno | Álvaro Villegas
      { single: false, ids: ["inst-mx-4", "inst-mx-5"] },        // Fila 3: David Morales | Marco Antonio Salas
      { single: false, ids: ["inst-mx-7", "inst-mx-6"] },        // Fila 4: Edith García Paredes | Pablo Hernán Gómez
      { single: false, ids: ["inst-mx-10", "inst-mx-8"] },       // Fila 5: Alfredo Hernández | Fabián Rosas
      { single: true, ids: ["inst-mx-9"] }                       // Fila 6: Germán Sabino Torrecilla
    ];

    mxContainer.innerHTML = mexicoRows.map(row => {
      const rowInstructors = row.ids
        .map(id => INSTRUCTORES_DATA.mexico.find(inst => inst.id === id))
        .filter(Boolean);

      return `
        <div class="instructor-row ${row.single ? 'single-row' : ''}">
          ${rowInstructors.map(inst => createInstructorCard(inst, 'mx')).join('')}
        </div>
      `;
    }).join('');
  }

  // Render Instructores Japón con distribución exacta por filas
  if (jpContainer && INSTRUCTORES_DATA.japon) {
    const japanRows = [
      { single: true, ids: ["inst-jp-1"] },                        // Fila 1: KAGAWA Masao (sola arriba)
      { single: false, ids: ["inst-jp-2", "inst-jp-3"] },          // Fila 2: ISHIMINE Minoru | KANAYAMA Kosho
      { single: false, ids: ["inst-jp-4", "inst-jp-5"] },          // Fila 3: YAMAGUCHI Takashi | INADA Yasuhisa
      { single: false, ids: ["inst-jp-6", "inst-jp-7"] },          // Fila 4: MAKITA Takuya | MATSUE Hajime
      { single: false, ids: ["inst-jp-8", "inst-jp-9"] },          // Fila 5: KAGAWA Hideyoshi | OKAMOTO Saori
      { single: false, ids: ["inst-jp-10", "inst-jp-11"] },        // Fila 6: WATANABE Daisuke | ARIMOTO Koji
      { single: false, ids: ["inst-jp-12", "inst-jp-13"] }         // Fila 7: TOYAMA Shohei | NAKAGAWA Seiya
    ];

    jpContainer.innerHTML = japanRows.map(row => {
      const rowInstructors = row.ids
        .map(id => INSTRUCTORES_DATA.japon.find(inst => inst.id === id))
        .filter(Boolean);

      return `
        <div class="instructor-row ${row.single ? 'single-row' : ''}">
          ${rowInstructors.map(inst => createInstructorCard(inst, 'jp')).join('')}
        </div>
      `;
    }).join('');
  }

  // Modal handlers
  setupInstructorModal();
}

function createInstructorCard(instructor, origin) {
  const isJapan = origin === 'jp';
  const isChief = instructor.id === 'inst-mx-1' || instructor.id === 'inst-jp-1';
  const hasPhoto = instructor.foto && !instructor.foto.endsWith('.svg');
  
  const photoHtml = hasPhoto
    ? `<img src="${instructor.foto}" alt="${instructor.nombre}" class="instructor-photo-img" loading="lazy">`
    : `<div class="instructor-photo-placeholder">
        <span class="instructor-initials-clean">${instructor.nombre.split(' ').filter(n => n.length > 2).map(n => n[0]).slice(0, 2).join('')}</span>
      </div>`;

  const titlesHtml = instructor.titulos && instructor.titulos.length > 0
    ? `<ul class="instructor-titles-clean">
        ${instructor.titulos.map(t => `<li>${t}</li>`).join('')}
      </ul>`
    : (instructor.cargo ? `<ul class="instructor-titles-clean"><li>${instructor.grado || ''}</li><li>${instructor.cargo}</li></ul>` : '');

  return `
    <article class="instructor-card-horizontal ${isChief ? 'chief-card' : ''} ${isJapan ? 'japan-card' : ''}" data-id="${instructor.id}">
      <div class="instructor-photo-box">
        ${photoHtml}
      </div>
      <div class="instructor-info-box">
        <h3 class="instructor-name-clean">${instructor.nombre}</h3>
        ${titlesHtml}
      </div>
    </article>
  `;
}

function setupInstructorModal() {
  const modal = document.getElementById('instructor-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Función global accesible para onclick
window.openInstructorModal = function(instructorId) {
  const modal = document.getElementById('instructor-modal');
  const modalBody = document.getElementById('modal-instructor-content');
  if (!modal || !modalBody || typeof INSTRUCTORES_DATA === 'undefined') return;

  const allInstructors = [...(INSTRUCTORES_DATA.mexico || []), ...(INSTRUCTORES_DATA.japon || [])];
  const instructor = allInstructors.find(inst => inst.id === instructorId);

  if (!instructor) return;

  const titulosHtml = instructor.titulos && instructor.titulos.length > 0
    ? `<div class="modal-section">
        <h4>Grados y Credenciales Oficiales</h4>
        <ul class="achievements-list">
          ${instructor.titulos.map(t => `<li><span class="bullet">•</span> ${t}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const specialtyHtml = instructor.especialidad
    ? `<div class="modal-section">
        <h4>Especialidad Técnica</h4>
        <p class="specialty-text">${instructor.especialidad}</p>
      </div>`
    : '';

  const bioHtml = instructor.biografia
    ? `<div class="modal-section">
        <h4>Trayectoria & Biografía</h4>
        <p>${instructor.biografia}</p>
      </div>`
    : '';

  const logrosHtml = instructor.logros && instructor.logros.length > 0
    ? `<div class="modal-section">
        <h4>Logros & Certificaciones</h4>
        <ul class="achievements-list">
          ${instructor.logros.map(logro => `<li><span class="bullet">•</span> ${logro}</li>`).join('')}
        </ul>
      </div>`
    : '';

  modalBody.innerHTML = `
    <div class="modal-instructor-header">
      <div class="modal-badge">${instructor.grado}</div>
      <h2>${instructor.nombre}</h2>
      ${instructor.cargo ? `<p class="modal-subtitle">${instructor.cargo}</p>` : ''}
      <div class="modal-meta-row">
        ${instructor.ubicacion ? `<span>${instructor.ubicacion}</span>` : ''}
        ${instructor.experiencia ? `<span>${instructor.experiencia}</span>` : ''}
      </div>
    </div>

    <div class="modal-instructor-body">
      ${titulosHtml}
      ${specialtyHtml}
      ${bioHtml}
      ${logrosHtml}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   4. ANIMACIONES DE SCROLL (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback para navegadores antiguos
    animatedElements.forEach(el => el.classList.add('visible'));
  }
}
