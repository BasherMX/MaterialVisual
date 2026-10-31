# Guía de Agentes · Proyecto MaterialVisual

Este repositorio contiene visualizadores interactivos para Ciencias de la Computación, Algoritmos, Arquitectura de Software, Bases de Datos y Gestión de Proyectos.

## Reglas Fundamentales para todo Asistente
1. **Reutilización Obligatoria:**
   - Usar `<link rel="stylesheet" href="../shared/theme.css" />` en todos los módulos de `modulos/`.
   - Usar `<script src="../shared/modules-data.js"></script><script src="../shared/nav.js"></script>` antes de `</body>`.
   - Queda prohibido duplicar estilos de fuentes, scrollbars, grids de fondo o barras de navegación.
2. **Interactividad de Estudio y Aprendizaje Activo (Didáctica):**
   - El objetivo primordial de cada módulo es permitir que el usuario aprenda conceptos complejos de manera sencilla e intuitiva mediante la experimentación activa ("Aprender Haciendo").
   - Es obligatorio implementar simuladores manipulables en tiempo real, con controles accesibles, presets guiados (ej. casos de éxito, errores simulados, fallas de energía o particiones) y trazas de auditoría o narrativa paso a paso.
   - Todo módulo debe incluir un laboratorio de evaluación (quiz formativo) con explicaciones inmediatas que enseñen el porqué de cada respuesta.
3. **Diseño Mobile-First y Responsive Estricto:**
   - Todo el contenido y las herramientas interactivas DEBEN concebirse prioritariamente para dispositivos móviles (smartphones desde 320px de ancho) y adaptarse de forma fluida a tablets y escritorios.
   - Queda prohibido el desbordamiento horizontal involuntario del viewport en pantallas móviles (`overflow-x` no controlado).
   - Las cuadrículas deben colapsar a una sola columna en pantallas pequeñas (`grid-template-columns: 1fr`).
   - Las tablas complejas deben estar siempre contenidas en `.data-table-wrap` con scroll táctil (`-webkit-overflow-scrolling: touch;`).
   - Los elementos interactivos (botones, pestañas, selectores) deben tener un tamaño táctil cómodo (mínimo 42-44px de altura) con espaciado adecuado para dedos.
4. **Scrollbars Personalizados:**
   - Jamás permitir que aparezcan barras de desplazamiento nativas claras de Windows. Usar `scrollbar-width: thin;` y estilos WebKit neón definidos en `theme.css`.
5. **Flujo de Publicación:**
   - Todo nuevo módulo debe agregarse a `shared/modules-data.js`, al `<noscript>` de `index.html` y al listado de `README.md`.
   - Validar sintaxis con Node.js y realizar commit + push a `main` al finalizar.

