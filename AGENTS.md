# Guía de Agentes · Proyecto MaterialVisual

Este repositorio contiene visualizadores interactivos para Ciencias de la Computación, Algoritmos, Arquitectura de Software, Bases de Datos y Gestión de Proyectos.

## Reglas Fundamentales para todo Asistente
1. **Reutilización Obligatoria:**
   - Usar `<link rel="stylesheet" href="../shared/theme.css" />` en todos los módulos de `modulos/`.
   - Usar `<script src="../shared/modules-data.js"></script><script src="../shared/nav.js"></script>` antes de `</body>`.
   - Queda prohibido duplicar estilos de fuentes, scrollbars, grids de fondo o barras de navegación.
2. **Scrollbars Personalizados:**
   - Jamás permitir que aparezcan barras de desplazamiento nativas claras de Windows. Usar `scrollbar-width: thin;` y estilos WebKit neón definidos en `theme.css`.
3. **Flujo de Publicación:**
   - Todo nuevo módulo debe agregarse a `shared/modules-data.js`, al `<noscript>` de `index.html` y al listado de `README.md`.
   - Validar sintaxis con Node.js y realizar commit + push a `main` al finalizar.
