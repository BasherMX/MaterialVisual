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
    toggle: toggle,
    updateFooter: updateGlobalFooterProgress
  };

  function updateGlobalFooterProgress() {
    let footer = document.querySelector('footer.global-footer, footer.module-footer, footer');
    if (!footer) {
      const mainEl = document.querySelector('main.page, main, .page') || document.body;
      footer = document.createElement('footer');
      footer.className = 'global-footer';
      mainEl.appendChild(footer);
    }

    const completed = getCompleted();
    const modules = window.MATERIAL_MODULES || [];
    const total = modules.length || 36;
    const count = modules.filter(m => completed.includes(String(m.id))).length;
    const pct = total ? Math.round((count / total) * 100) : 0;

    footer.innerHTML = `Material Didáctico e Interactivo · Vistos: <strong style="color:var(--green, #00ffaa); font-family:'Courier New', monospace; font-size:0.85rem;">${count} / ${total} (${pct}%)</strong>`;
  }

  window.addEventListener('material-progress-updated', function () {
    updateGlobalFooterProgress();
  });

  function initModuleNavigation() {
    if (!window.MATERIAL_MODULES || !Array.isArray(window.MATERIAL_MODULES)) {
      return;
    }

    // Detectar el nombre del archivo actual
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Inyectar Favicon dinámicamente si no está presente en <head>
    if (!document.querySelector('link[rel*="icon"]')) {
      const isSub = currentPath.includes('/modulos/');
      const prefix = isSub ? '../' : '';
      const iconLink = document.createElement('link');
      iconLink.rel = 'icon';
      iconLink.type = 'image/png';
      iconLink.href = prefix + 'assets/icons/favicon-32x32.png';
      document.head.appendChild(iconLink);
    }

    // Actualizar progreso persistente en el pie de página
    updateGlobalFooterProgress();

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

    // 1. Inyectar / Gestionar Barra de Acciones Superior ('Flash Cards', 'Simulador Exámenes', 'Marcar Visto')
    let topBar = document.querySelector('.top-nav-bar');
    const backBtn = document.querySelector('.btn-back-index');

    if (!topBar) {
      topBar = document.createElement('div');
      topBar.className = 'top-nav-bar';

      const mainEl = document.querySelector('main') || document.body;
      const headerEl = mainEl.querySelector('header');

      if (backBtn && backBtn.parentNode) {
        backBtn.parentNode.insertBefore(topBar, backBtn);
        topBar.appendChild(backBtn);
        backBtn.style.marginBottom = '0';
      } else if (headerEl && headerEl.parentNode) {
        headerEl.parentNode.insertBefore(topBar, headerEl);
      } else {
        mainEl.insertBefore(topBar, mainEl.firstChild);
      }
    }

    // Asegurar que exista enlace a Índice si no había btn-back-index
    if (!topBar.querySelector('.btn-back-index')) {
      const homeLink = document.createElement('a');
      homeLink.href = '../index.html';
      homeLink.className = 'btn-back-index';
      homeLink.innerHTML = '← Volver al Índice';
      homeLink.style.marginBottom = '0';
      topBar.insertBefore(homeLink, topBar.firstChild);
    }

    // Contenedor de herramientas superiores derechas
    let topActions = topBar.querySelector('.top-actions-cluster');
    if (!topActions) {
      topActions = document.createElement('div');
      topActions.className = 'top-actions-cluster';
      topActions.style.display = 'flex';
      topActions.style.gap = '8px';
      topActions.style.alignItems = 'center';
      topActions.style.flexWrap = 'wrap';
      topBar.appendChild(topActions);
    }

    topActions.innerHTML = `
      <a href="anki-arena.html?modulo=${currentModule.id}" class="btn-toggle-viewed" style="text-decoration:none; background:rgba(121,40,202,0.25); border-color:var(--purple); color:#e7f6ff;" title="Entrenar Flashcards de este módulo">
        <span>🗂️</span> Flash Cards
      </a>
      <a href="simulador-examenes.html" class="btn-toggle-viewed" style="text-decoration:none; background:rgba(255,215,0,0.18); border-color:var(--gold); color:#ffd700;" title="Simulador de Exámenes">
        <span>📝</span> Simulador Exámenes
      </a>
      <button id="btn-toggle-viewed-top" class="btn-toggle-viewed ${isCompleted(currentModule.id) ? 'is-viewed' : ''}" title="Marca este módulo como estudiado (se guarda en tu navegador)">
        ${isCompleted(currentModule.id) ? '<span>✓</span> Módulo Visto' : '<span>○</span> Marcar como Visto'}
      </button>
    `;

    const topToggleBtn = document.getElementById('btn-toggle-viewed-top');
    if (topToggleBtn) {
      topToggleBtn.onclick = function () {
        const completed = toggle(currentModule.id);
        updateViewedButtons(completed);
      };
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

    function getCleanTopic(mod, maxLen = 28) {
      if (!mod || !mod.title) return '';
      // Separar por ':' o '·' para quedarnos con el nombre principal del tema
      let title = mod.title;
      if (title.includes(':')) {
        title = title.split(':')[0].trim();
      } else if (title.includes('·')) {
        const parts = title.split('·');
        title = parts[parts.length - 1].trim();
      }
      // Limpiar prefijos numéricos si los tuviera
      title = title.replace(/^\d+[\s\.\-·]+/, '').trim();
      
      // Limitar caracteres para asegurar ancho simétrico uniforme
      if (title.length > maxLen) {
        return title.substring(0, maxLen - 1).trim() + '…';
      }
      return title;
    }

    const prevHtml = prevModule
      ? `<a href="${prevModule.filename}" class="btn-nav-standard btn-nav-prev" title="${prevModule.title}">← Anterior: ${getCleanTopic(prevModule)}</a>`
      : `<a href="../index.html" class="btn-nav-standard btn-nav-home">← Volver al Inicio</a>`;

    const nextHtml = (currentIndex < modules.length - 1)
      ? `<a href="${nextModule.filename}" class="btn-nav-standard btn-nav-next" title="${nextModule.title}">Siguiente: ${getCleanTopic(nextModule)} →</a>`
      : `<a href="${modules[0].filename}" class="btn-nav-standard btn-nav-prev" style="color:var(--gold); border-color:var(--gold);" title="${modules[0].title}">Reiniciar Ciclo ↻</a>`;

    navBar.innerHTML = `
      <div class="nav-left">${prevHtml}</div>
      <div class="nav-center">
        <a href="../index.html" class="btn-nav-standard btn-nav-home">Índice Principal 🏠</a>
      </div>
      <div class="nav-right">${nextHtml}</div>
    `;

    function updateViewedButtons(completed) {
      const topBtn = document.getElementById('btn-toggle-viewed-top');
      if (topBtn) {
        topBtn.className = `btn-toggle-viewed ${completed ? 'is-viewed' : ''}`;
        topBtn.innerHTML = completed ? `<span>✓</span> Módulo Visto` : `<span>○</span> Marcar como Visto`;
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModuleNavigation);
  } else {
    initModuleNavigation();
  }

  // Registro global de Service Worker para PWA Offline
  if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    window.addEventListener('load', function () {
      const swPath = window.location.pathname.includes('/modulos/') ? '../sw.js' : './sw.js';
      navigator.serviceWorker.register(swPath).then(function (reg) {
        // SW registrado exitosamente
      }).catch(function (err) {
        console.warn('Registro SW no completado:', err);
      });
    });
  }
})();




// Universal Fallback para cambio de pestañas en módulos
if (typeof window !== 'undefined') {
  window.switchTab = function (tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.content-panel, .tab-content').forEach(p => p.classList.remove('active'));
    
    const panel = document.getElementById(tabId) || document.getElementById('tab-' + tabId);
    if (panel) panel.classList.add('active');
    
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => {
      const onclickAttr = b.getAttribute('onclick') || '';
      return onclickAttr.includes(tabId);
    });
    if (activeBtn) activeBtn.classList.add('active');
  };
}
