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
5. **Estructura Estándar de Contenido, Navegación y Didáctica:**
   - **Orden de Contenido Obligatorio:** Siempre deben presentarse primero las explicaciones teóricas y doctrinales y luego las funcionalidades interactivas (o estar en paralelo/sincronizadas), nunca dejar la herramienta interactiva antes de la explicación que le da sentido.
   - **Barra Superior Canónica:** Todo módulo debe tener en la parte superior (inyectada automáticamente por `nav.js`) el acceso a `← Volver al Índice`, `Flash Cards`, `Simulador Exámenes` y el botón persistente `Marcar como Visto`.
   - **Barra Inferior Canónica:** Al pie de página debe figurar exclusivamente la navegación limpia entre temas: `← Anterior: [Tema]`, `Índice Principal 🏠` y `Siguiente: [Tema] →`. No duplicar en la barra inferior los botones que ya residen en la barra superior.
   - **Estandarización de Laboratorios Evaluativos (Quizzes por Pasos):** Todos los módulos deben implementar laboratorios evaluativos con flujo interactivo paso a paso (`renderQuizQuestion`, progreso tipo "Pregunta X de N", puntuación acumulada, opciones táctiles con feedback inmediato y avance con "Siguiente Pregunta ➔"), evitando listados planos de preguntas estáticas sin interacción progresiva.
   - **Formato Tipográfico Matemático y Notaciones:** No dejar notaciones en texto plano crudo con escapes tipo `\(V(G)\)`. Deben formatearse con etiquetas semánticas claras (`<span class="math-expr"><em>V(G)</em></span>` o `<code>V(G) = E - N + 2P</code>`) con tipografía limpia en Courier New/Monospace para garantizar legibilidad universal sin dependencias rotas.
6. **Flujo de Publicación:**
   - Todo nuevo módulo debe agregarse a `shared/modules-data.js`, al `<noscript>` de `index.html` y al listado de `README.md`.
   - Validar sintaxis con Node.js y realizar commit + push a `main` al finalizar.
7. **Prohibición Estricta de Referencias Institucionales o Convocatorias:**
   - Queda estrictamente prohibido mencionar o hacer alusión a "SPC", "Servicio Profesional de Carrera", "INEGI", "CENEVAL" o entidades/convocatorias gubernamentales o de oposición en cualquier parte del proyecto (código, contenido HTML, comentarios, títulos, metadatos, badges, reactivos o documentación).
   - Utilizar exclusivamente terminología técnica, universal y neutral: "Evaluación Técnica", "Certificación Técnica", "Simulador de Exámenes de Arquitectura e Ingeniería", "Examen Integrador Técnico", "Laboratorio Evaluativo Formativo", etc.
8. **Estandarización Obligatoria de Tablas Comparativas y de Datos:**
   - **Estructura HTML Canónica:** Toda tabla DEBE encapsularse en un contenedor con clase `<div class="data-table-wrap">` y utilizar la clase `<table class="data-table">` (o `<table class="compare-table">`).
   - **Estética Centralizada en `shared/theme.css`:** Queda estrictamente prohibido aplicar estilos inline sueltos a tablas (`style="border-collapse..."`, padding manual en cada celda o fondos oscuros heterogéneos). Todo el diseño se hereda de `theme.css`:
     - Cabeceras `th`: tipografía monospace Courier New, mayúsculas, color cian neón (`--cyan`), borde inferior `2px solid var(--cyan)` y fondo contrastante (`rgba(10, 9, 20, 0.96)`).
     - Celdas `td`: padding uniforme (`13px 18px`), bordes sutiles entre filas (`1px solid rgba(0, 255, 255, 0.1)`), filas pares alternadas tipo cebra (`rgba(255, 255, 255, 0.02)`) y resplandor al hacer hover (`rgba(0, 255, 255, 0.06)`).
     - Primera columna destacada (`font-weight: 600; color: #fff;`).
     - Contenedor `.data-table-wrap` con bordes redondeados (`8px`), borde neón cian (`1px solid var(--line)`), sombra profunda (`box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45)`) y scroll horizontal táctil móvil (`-webkit-overflow-scrolling: touch;`).
   - **Formato Semántico de Contenido en Celdas:** Nunca dejar texto markdown crudo (`*Thread Ownership*`, `$N$`, `\(...\)`) en celdas de tabla. Usar etiquetas semánticas HTML: `<code>...</code>`, `<strong>...</strong>`, `<em>...</em>` o `<span class="math-expr"><em>N</em></span>`.

