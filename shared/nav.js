/**
 * Material Visual · Enlazador Dinámico de Navegación y Progreso entre Módulos
 * Construye automáticamente la barra 'Anterior | Índice | Siguiente'
 * y gestiona el estado de módulos vistos/completados con persistencia en localStorage.
 */
(function () {
  const STORAGE_KEY = 'material_visual_completed_modules';

  function getCompleted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function isCompleted(moduleId) {
    return getCompleted().includes(String(moduleId));
  }

  function toggle(moduleId) {
    try {
      let list = getCompleted();
      const idStr = String(moduleId);
      const idx = list.indexOf(idStr);
      let newState = false;
      if (idx !== -1) {
        list.splice(idx, 1);
        newState = false;
      } else {
        list.push(idStr);
        newState = true;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('material-progress-updated', {
        detail: { moduleId: idStr, isCompleted: newState, list: list }
      }));
      return newState;
    } catch (e) {
      return false;
    }
  }

  window.MATERIAL_PROGRESS = {
    STORAGE_KEY: STORAGE_KEY,
    getCompleted: getCompleted,
    isCompleted: isCompleted,
    toggle: toggle
  };

  function initModuleNavigation() {
    if (!window.MATERIAL_MODULES || !Array.isArray(window.MATERIAL_MODULES)) {
      return;
    }

    // Detectar el nombre del archivo actual
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Si estamos en el índice principal o en la arena transversal, no inyectar barra secuencial de módulo
    if (currentFile === 'index.html' || currentFile === '' || currentFile === 'anki-arena.html') {
      return;
    }

    // Buscar el índice del módulo actual en el catálogo
    const modules = window.MATERIAL_MODULES;
    let currentIndex = modules.findIndex(function (m) {
      return m.filename.toLowerCase() === currentFile.toLowerCase() ||
             (document.body && document.body.dataset && document.body.dataset.moduleId === m.id);
    });

    if (currentIndex === -1) {
      currentIndex = modules.findIndex(function (m) {
        return currentFile.toLowerCase().includes(m.slug.toLowerCase());
      });
    }

    if (currentIndex === -1) {
      return;
    }

    const currentModule = modules[currentIndex];
    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : modules[0];

    // 1. Inyectar / Gestionar Botón de "Visto" en la parte superior
    const backBtn = document.querySelector('.btn-back-index');
    if (backBtn && !document.querySelector('.top-nav-bar')) {
      const topBar = document.createElement('div');
      topBar.className = 'top-nav-bar';
      backBtn.parentNode.insertBefore(topBar, backBtn);
      topBar.appendChild(backBtn);
      backBtn.style.marginBottom = '0';

      const toggleViewedTopBtn = document.createElement('button');
      toggleViewedTopBtn.id = 'btn-toggle-viewed-top';
      toggleViewedTopBtn.className = `btn-toggle-viewed ${isCompleted(currentModule.id) ? 'is-viewed' : ''}`;
      toggleViewedTopBtn.innerHTML = isCompleted(currentModule.id)
        ? `<span>✓</span> Módulo Visto`
        : `<span>○</span> Marcar como Visto`;
      toggleViewedTopBtn.title = "Marca este módulo como estudiado (se guarda en tu navegador)";

      toggleViewedTopBtn.onclick = function () {
        const completed = toggle(currentModule.id);
        updateViewedButtons(completed);
      };

      topBar.appendChild(toggleViewedTopBtn);
    }

    // 2. Buscar o crear la barra de navegación inferior
    let navBar = document.querySelector('.module-nav-bar');
    if (!navBar) {
      navBar = document.createElement('nav');
      navBar.className = 'module-nav-bar';
      navBar.setAttribute('aria-label', 'Navegación entre módulos');
      
      const footer = document.querySelector('footer');
      if (footer && footer.parentNode) {
        footer.parentNode.insertBefore(navBar, footer);
      } else {
        document.body.appendChild(navBar);
      }
    }

    function getShortTitle(mod) {
      if (!mod) return '';
      const parts = mod.title.split(':');
      const base = parts.length > 1 ? parts[0] : mod.title;
      return `${mod.id} · ${base.trim()}`;
    }

    const prevHtml = prevModule
      ? `<a href="${prevModule.filename}" class="btn-nav-standard btn-nav-prev" title="${prevModule.title}">← Anterior: ${getShortTitle(prevModule)}</a>`
      : `<a href="../index.html" class="btn-nav-standard btn-nav-home">← Volver al Inicio</a>`;

    const nextHtml = (currentIndex < modules.length - 1)
      ? `<a href="${nextModule.filename}" class="btn-nav-standard btn-nav-next" title="${nextModule.title}">Siguiente: ${getShortTitle(nextModule)} →</a>`
      : `<a href="${modules[0].filename}" class="btn-nav-standard btn-nav-prev" style="color:var(--gold); border-color:var(--gold);" title="${modules[0].title}">Reiniciar Módulo 01 ↻</a>`;

    navBar.innerHTML = `
      <div class="nav-left">${prevHtml}</div>
      <div class="nav-center" style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; align-items:center;">
        <a href="../index.html" class="btn-nav-standard btn-nav-home">Índice Principal 🏠</a>
        <button id="btn-toggle-viewed-bottom" class="btn-toggle-viewed ${isCompleted(currentModule.id) ? 'is-viewed' : ''}" style="min-height:36px; padding:6px 14px; font-size:0.78rem;">
          ${isCompleted(currentModule.id) ? '✓ Visto' : 'Marcar Visto ○'}
        </button>
        <a href="anki-arena.html?modulo=${currentModule.id}" class="btn-nav-standard" style="background:rgba(121,40,202,0.25); border-color:var(--purple); color:#e7f6ff;" title="Entrenar este tema en la Arena Flashcards">🗂️ Arena Flashcards</a>
        <a href="simulador-examenes.html" class="btn-nav-standard" style="background:rgba(255,215,0,0.18); border-color:var(--gold); color:#ffd700;" title="Simulador de Exámenes SPC / CENEVAL">📝 Simulador Exámenes</a>
      </div>
      <div class="nav-right">${nextHtml}</div>
    `;

    const bottomBtn = document.getElementById('btn-toggle-viewed-bottom');
    if (bottomBtn) {
      bottomBtn.onclick = function () {
        const completed = toggle(currentModule.id);
        updateViewedButtons(completed);
      };
    }

    function updateViewedButtons(completed) {
      const topBtn = document.getElementById('btn-toggle-viewed-top');
      if (topBtn) {
        topBtn.className = `btn-toggle-viewed ${completed ? 'is-viewed' : ''}`;
        topBtn.innerHTML = completed ? `<span>✓</span> Módulo Visto` : `<span>○</span> Marcar como Visto`;
      }
      if (bottomBtn) {
        bottomBtn.className = `btn-toggle-viewed ${completed ? 'is-viewed' : ''}`;
        bottomBtn.innerHTML = completed ? '✓ Visto' : 'Marcar Visto ○';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModuleNavigation);
  } else {
    initModuleNavigation();
  }
})();


