# Reglas y Estándares de Desarrollo · MaterialVisual

Este documento define las directrices y normas obligatorias para la creación, refactorización y mantenimiento de los módulos didácticos interactivos de la plataforma MaterialVisual.

---

## 1. Principio de Cero Duplicación y Reutilización Obligatoria
- **Estilos Compartidos:** Todo nuevo módulo DEBE incluir `<link rel="stylesheet" href="../shared/theme.css" />`. Queda terminantemente prohibido duplicar estilos globales (variables CSS `:root`, reset `*`, fondos de scanlines/rejilla, contenedor `.page`, botones `.btn-back-index`, `.module-nav-bar` o footers).
- **Scrollbar Neón / Cyberpunk:** Ningún elemento debe mostrar la barra de scroll gris nativa de Windows. Se debe respetar la regla `scrollbar-width: thin; scrollbar-color: rgba(0, 255, 255, 0.45) #0c0b1a;` y los selectores `::-webkit-scrollbar` definidos en `theme.css`.
- **Navegación Dinámica:** Todo nuevo módulo DEBE incluir al final del body:
  ```html
  <script src="../shared/modules-data.js"></script>
  <script src="../shared/nav.js"></script>
  ```
  La barra `<nav class="module-nav-bar">` es gestionada automáticamente por `nav.js`. No cablear enlaces manuales entre módulos contiguos.

---

## 2. Estructura Requerida de un Módulo
Cada módulo `.html` en `modulos/` debe componerse de las siguientes secciones estructuradas por pestañas:
1. **Pestaña 1: Marco Teórico y Taxonomía Conceptual:**
   - Fundamento académico riguroso con autores canónicos (Codd, Oppel, Pressman, Sommerville, Gamma, Richardson, etc.).
   - Tarjetas conceptuales con borde y acento neón temático (`card-a`, `card-c`, etc.).
   - Diagramas de flujo o tablas comparativas completas.
2. **Pestaña 2: Laboratorio / Simulador Interactivo:**
   - Visualización reactiva en tiempo real del estado en memoria/disco.
   - Controles con botones de acción preestablecidos y entradas personalizadas.
   - Terminal de traza o registro de auditoría (`audit-log` o `wal-box`) que describa la mecánica interna paso a paso.
3. **Pestaña 3: Análisis Profundo / Casos Críticos / Discrepancias:**
   - Comparativas detalladas (ej. Teoría vs Realidad comercial, diferencias de bajo nivel, matrices de decisión técnica).
4. **Pestaña 4: Calculadora / Banco de Pruebas / Análisis Cuantitativo:**
   - Herramienta para simular algoritmos, clausuras, planes de ejecución o fórmulas matemáticas.
5. **Pestaña 5: Laboratorio de Diagnóstico (Quiz):**
   - Banco de al menos 5 a 6 preguntas de nivel examen/certificación con retroalimentación explicativa inmediata y contador de puntuación.

---

## 3. Protocolo de Registro y Despliegue de Nuevos Módulos
Al crear un nuevo módulo (ej. `modulos/XX-nombre.html`):
1. **Registrar en `shared/modules-data.js`:**
   - Agregar el objeto con: `id`, `slug`, `filename`, `theme`, `category`, `badge`, `title`, `desc`, `features` (3 viñetas) y `btnId`.
2. **Actualizar `index.html`:**
   - Agregar el elemento correspondiente dentro del bloque `<noscript>` para accesibilidad.
3. **Actualizar `README.md`:**
   - Agregar la viñeta con el número y título del nuevo módulo.
4. **Verificación de Sintaxis:**
   - Validar sintaxis JavaScript con Node.js antes de confirmar.
5. **Control de Versiones:**
   - Ejecutar `git add .`, `git commit` descriptivo y `git push origin main`.
