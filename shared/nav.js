/**
 * Material Visual · Enlazador Dinámico de Navegación entre Módulos
 * Construye automáticamente la barra 'Anterior | Índice | Siguiente'
 * basándose en el catálogo de MATERIAL_MODULES sin duplicar código.
 */
(function () {
  function initModuleNavigation() {
    if (!window.MATERIAL_MODULES || !Array.isArray(window.MATERIAL_MODULES)) {
      return;
    }

    // Detectar el nombre del archivo actual
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // Si estamos en el índice principal, no inyectar barra de módulo
    if (currentFile === 'index.html' || currentFile === '') {
      return;
    }

    // Buscar el índice del módulo actual en el catálogo
    const modules = window.MATERIAL_MODULES;
    let currentIndex = modules.findIndex(function (m) {
      return m.filename.toLowerCase() === currentFile.toLowerCase() ||
             (document.body && document.body.dataset && document.body.dataset.moduleId === m.id);
    });

    if (currentIndex === -1) {
      // Intentar por coincidencia de slug
      currentIndex = modules.findIndex(function (m) {
        return currentFile.toLowerCase().includes(m.slug.toLowerCase());
      });
    }

    if (currentIndex === -1) {
      return; // No es un módulo reconocido
    }

    const currentModule = modules[currentIndex];
    const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
    const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : modules[0]; // ciclo o null

    // Buscar o crear la barra de navegación
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

    // Títulos cortos para los botones de navegación
    function getShortTitle(mod) {
      if (!mod) return '';
      const parts = mod.title.split(':');
      const base = parts.length > 1 ? parts[0] : mod.title;
      return `${mod.id} · ${base.trim()}`;
    }

    // Construir contenido HTML de navegación
    const prevHtml = prevModule
      ? `<a href="${prevModule.filename}" class="btn-nav-standard btn-nav-prev" title="${prevModule.title}">← Anterior: ${getShortTitle(prevModule)}</a>`
      : `<a href="../index.html" class="btn-nav-standard btn-nav-home">← Volver al Inicio</a>`;

    const nextHtml = (currentIndex < modules.length - 1)
      ? `<a href="${nextModule.filename}" class="btn-nav-standard btn-nav-next" title="${nextModule.title}">Siguiente: ${getShortTitle(nextModule)} →</a>`
      : `<a href="${modules[0].filename}" class="btn-nav-standard btn-nav-prev" style="color:var(--gold); border-color:var(--gold);" title="${modules[0].title}">Reiniciar Módulo 01 ↻</a>`;

    navBar.innerHTML = `
      <div class="nav-left">${prevHtml}</div>
      <div class="nav-center">
        <a href="../index.html" class="btn-nav-standard btn-nav-home">Índice Principal 🏠</a>
      </div>
      <div class="nav-right">${nextHtml}</div>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModuleNavigation);
  } else {
    initModuleNavigation();
  }
})();

