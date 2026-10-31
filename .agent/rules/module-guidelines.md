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

## 2. Interactividad Didáctica de Estudio ("Aprender Haciendo")
Cada módulo está concebido como una **herramienta de estudio activo**. El objetivo fundamental es desmitificar conceptos teóricos abstractos y facilitar su comprensión intuitiva y retención mediante la manipulación directa:
1. **Simuladores Reactivos en Tiempo Real:**
   - La teoría debe acompañarse siempre de un laboratorio visual donde el estudiante pueda interactuar con el estado interno del algoritmo o sistema (estructuras de datos, transacciones, registros en disco, llamadas HTTP, etc.).
   - Modificación libre de parámetros (valores de entrada, claves, tamaños de buffer, niveles de aislamiento).
2. **Presets Guiados y Casos de Estudio:**
   - Incluir botones de presets listos para usar que demuestren escenarios clave: "Caso de Éxito", "Violación de Integridad / Error", "Simular Caída de Energía / Crash", "Desbordamiento / Split de Nodo", etc.
3. **Consola y Traza Explicativa en Vivo:**
   - Toda interacción debe generar una bitácora o traza narrativa paso a paso (`audit-log`, terminal de ejecución o panel de auditoría) explicando *por qué* ocurre cada transición interna.
4. **Laboratorio de Evaluación Formativa (Quiz):**
   - Banco de al menos 5 o 6 preguntas de nivel técnico/examen.
   - Retroalimentación pedagógica instantánea que refuerce el concepto tras cada respuesta (explicando tanto el acierto como el error).

---

## 3. Estándar Mobile-First & Responsive Universal
Todo el contenido y las herramientas interactivas DEBEN concebirse prioritariamente para dispositivos móviles y adaptarse con fluidez a tablets y monitores de escritorio:
1. **Ancho Base Garantizado (320px+):**
   - El diseño debe ser 100% usable y legible desde pantallas pequeñas de 320px de ancho (iPhone SE, Galaxy A, etc.) sin desbordamiento horizontal involuntario del viewport (`overflow-x: hidden` en el layout raíz).
2. **Colapso Inteligente de Cuadrículas:**
   - Toda cuadrícula (`display: grid`) que presente tarjetas comparativas o columnas de simulación debe colapsar a una sola columna (`grid-template-columns: 1fr`) en anchos menores a 768px y 600px.
   - Evitar `minmax(300px, ...)` que supere el viewport en teléfonos angostos; utilizar `minmax(0, 1fr)` o queries responsivas.
3. **Scroll Táctil Protegido para Contenido Ancho:**
   - Tablas comparativas complejas, árboles visuales SVG/Canvas o consolas anchas deben envolverse en contenedores con scroll horizontal táctil explícito (`.data-table-wrap`, `.tree-viewport`, `overflow-x: auto`, `-webkit-overflow-scrolling: touch;`).
4. **Touch Targets de Tamaño Cómodo (Mínimo 42-44px):**
   - Botones, pestañas de navegación, casillas de selección y opciones de quiz deben contar con un área de contacto táctil de al menos 42-44px de altura, con espaciado adecuado entre ellos para evitar pulsaciones erróneas.
5. **Navegación Móvil de Pestañas:**
   - Las pestañas `.nav-tabs` deben permitir envoltorio fluido (`flex-wrap: wrap`) o scroll horizontal sin romper el layout.

---

## 4. Estructura Requerida de un Módulo (5 Pestañas Didácticas)
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
   - Banco de preguntas de evaluación con retroalimentación explicativa inmediata y contador de puntuación.

---

## 5. Protocolo de Registro y Despliegue de Nuevos Módulos
Al crear un nuevo módulo (ej. `modulos/XX-nombre.html`):
1. **Registrar en `shared/modules-data.js`:**
   - Agregar el objeto con: `id`, `slug`, `filename`, `theme`, `category`, `badge`, `title`, `desc`, `features` (3 viñetas) y `btnId`.
2. **Actualizar `index.html`:**
   - Agregar el elemento correspondiente dentro del bloque `<noscript>` para accesibilidad.
3. **Actualizar `README.md`:**
   - Agregar la viñeta con el número y título del nuevo módulo.
4. **Verificación de Sintaxis y Responsividad:**
   - Validar sintaxis JavaScript con Node.js antes de confirmar.
   - Comprobar que en pantallas móviles de 320px a 375px no exista desbordamiento ni elementos inaccesibles.
5. **Control de Versiones:**
   - Ejecutar `git add .`, `git commit` descriptivo y `git push origin main`.
