# Sistema de Diseño y Arquitectura · MaterialVisual

Documento maestro de arquitectura técnica, principios de diseño, componentes reutilizables y directrices pedagógicas de la plataforma **MaterialVisual**.

---

## 1. Visión y Propósito
MaterialVisual es un laboratorio interactivo enfocado en la divulgación rigurosa de Ciencias de la Computación, Algoritmos, Estructuras de Datos, Arquitectura de Software, Bases de Datos Relacionales y Gestión de Proyectos. Su premisa fundamental es **convertir conceptos abstractos y teóricos en modelos visuales manipulables en tiempo real** con retroalimentación instantánea, permitiendo al estudiante o profesional "aprender haciendo".

---

## 2. Pila Tecnológica & Principios de Arquitectura
- **Vanilla Web Standalone:** Construido exclusivamente con HTML5 semántico, CSS3 moderno y Vanilla JavaScript ES6+.
- **Cero Dependencias Externas:** No requiere empaquetadores (Webpack/Vite), frameworks pesados ni CDNs externos. Funciona al 100% de manera offline tanto en entornos locales (`file:///...`) como en producción estática en GitHub Pages.
- **Sin Bloqueos de CORS:** La información de los módulos no se carga mediante `fetch()` de archivos JSON locales (lo que fallaría bajo el protocolo `file://`), sino a través de un módulo de datos distribuido vía scope global/UMD (`shared/modules-data.js`).

---

## 3. Estructura de Módulos Compartidos

```text
Material_Visual/
├── index.html                   # Portal dinámico con catálogo, filtros y buscador reactivo
├── README.md                    # Documentación y enlaces a producción
├── DESIGN.md                    # Este manual de arquitectura y diseño
├── AGENTS.md                    # Reglas obligatorias para asistentes de IA
├── .agent/                      # Customizaciones de Antigravity (Rules & Skills)
│   ├── rules/
│   │   └── module-guidelines.md
│   └── skills/
│       └── create-module/
│           └── SKILL.md
├── shared/                      # Infraestructura central compartida
│   ├── theme.css                # Sistema de diseño, variables, resets y scrollbar cyberpunk
│   ├── modules-data.js          # Catálogo centralizado (Fuente de verdad única)
│   └── nav.js                   # Enlazador y generador automático de barras de navegación
└── modulos/                     # Módulos interactivos individuales (01, 02, ..., 17)
```

---

## 4. Paleta Cromática y Variables del Sistema (`shared/theme.css`)

```css
:root {
  --ink: #e7f6ff;         /* Texto principal de alto contraste */
  --muted: #9aa8c2;       /* Texto secundario y etiquetas */
  --paper: #1a1a2e;       /* Fondo oscuro base */
  --panel: #22213d;       /* Fondo de tarjetas principales */
  --panel-dark: #121124;  /* Fondo de consolas y subpaneles */
  --line: rgba(0, 255, 255, 0.28); /* Bordes con brillo cian */
  --cyan: #00ffff;        /* Acento principal / DDL / Búsqueda */
  --blue: #0080ff;        /* Protocolos / HTTP */
  --coral: #ff006e;       /* Alertas / Borrado / Errores / D&C */
  --purple: #7928ca;      /* POO / WBS / GoF */
  --gold: #ffd700;        /* Algoritmos / DCL / Grafos / Axiomas */
  --green: #00ffaa;       /* Éxito / DML / Índices Clustered */
  --shadow: 0 0 24px rgba(0, 128, 255, 0.16);
}
```

### Regla Obligatoria de Scrollbar Neón
Bajo ninguna circunstancia se debe mostrar la barra de scroll nativa gris de los navegadores en Windows o macOS. Todos los contenedores con `overflow` heredan:
```css
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 255, 0.45) #0c0b1a;
}
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #0c0b1a; }
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.6), rgba(121, 40, 202, 0.7));
  border-radius: 4px;
}
```

---

## 5. Arquitectura del Catálogo y Navegación Dinámica

### Fuente de Verdad (`shared/modules-data.js`)
El catálogo se define como un arreglo de objetos JSON en `window.MATERIAL_MODULES`. Cada entrada contiene:
- `id`: Cadena de dos dígitos (`"01"`, `"02"`, ..., `"17"`).
- `slug`: Nombre en URL sin extensión.
- `filename`: Nombre del archivo en `modulos/`.
- `theme`: Clase temática (`theme-cyan`, `theme-gold`, `theme-green`, etc.).
- `category`: Categoría para agrupación y filtros (`"Estructuras & Algoritmos"`, `"Bases de Datos"`, `"Arquitectura & Web"`, `"Diseño & UI/UX"`, `"Gestión de Proyectos"`).
- `badge`, `title`, `desc`, `features` (3 puntos destacados) y `btnId`.

### Enlazador Automático (`shared/nav.js`)
Al cargarse cualquier módulo, `nav.js`:
1. Inspecciona la URL actual para identificar cuál es el módulo activo.
2. Localiza al predecesor (`currentIndex - 1`) y sucesor (`currentIndex + 1`).
3. Inyecta en el elemento `<nav class="module-nav-bar">` los botones estándar:
   - `← Anterior: XX · Nombre`
   - `Índice Principal 🏠`
   - `Siguiente: YY · Nombre →`
4. **Beneficio:** Al agregar un nuevo módulo a la plataforma, no se requiere modificar ningún archivo anterior.

---

## 6. Estándar Didáctico y de Interactividad ("Aprender Haciendo")
Cada módulo debe brindar una experiencia de aprendizaje completa estructurada en 5 dimensiones pedagógicas:
1. **Marco Conceptual Riguroso:** Fundamentación teórica formal con referencias a autores canónicos (Codd, Oppel, Pressman, Sommerville, Gamma, Richardson, etc.).
2. **Simulador Visual Reactivo:** El corazón interactivo. Modificación de estado en tiempo real (nodos que se rotan o dividen, transacciones ACID que fallan o confirman, lectura de bloques físicos en disco).
3. **Casos de Estudio / Duelos / Discrepancias:** Confrontación entre teoría formal y práctica comercial real (ej. DELETE vs TRUNCATE vs DROP, B+ vs AVL, Teoría ANSI/SPARC vs RDBMS comerciales).
4. **Herramienta Cuantitativa / Calculadora:** Ejecución paso a paso de algoritmos matemáticos o métricas de ingeniería (clausura de dependencias funcionales, cálculo de I/O, fan-out, complejidades Big O).
5. **Laboratorio de Diagnóstico (Quiz Formativo):** Preguntas de evaluación técnica con validación inmediata y retroalimentación pedagógica exhaustiva que enseñe el trasfondo técnico de la respuesta correcta.

---

## 7. Estándar Mobile-First & Responsive Universal
Todo módulo debe garantizar plena funcionalidad visual y táctil en pantallas desde 320px de ancho:
1. **Prevención de Desbordamiento:** El contenedor `.page` y la etiqueta `body` deben mitigar el scroll horizontal indeseado con anchos fluidos y `word-break: break-word`.
2. **Colapso Unificado de Rejillas:** Las cuadrículas (`.taxo-grid`, `.lab-layout`, `.sim-sparc-grid`, `.index-compare-grid`, etc.) colapsan a 1 columna en pantallas móviles (`@media (max-width: 768px)` y `600px`).
3. **Contenedores de Desplazamiento Táctil:** Tablas (`.data-table-wrap`) y representaciones complejas (árboles B+, esquemas SPARC, diagramas ERD) deben incorporar scroll horizontal táctil suave (`-webkit-overflow-scrolling: touch`).
4. **Ergonomía Táctil (Touch Targets):** Todo control accionable (pestañas, botones, selectores y reactivos del quiz) debe tener una altura mínima accesible de 42-44px y espacio suficiente para interacción precisa con los dedos.

---

## 8. Estándar Canónico de Tablas Comparativas y de Datos (`.data-table-wrap`)
Las matrices de confrontación tecnológica y tablas de datos estructurados son componentes centrales para el análisis de trade-offs en arquitectura de software:
1. **Contenedor Aislado con Scroll Táctil:** Toda tabla se envuelve en `<div class="data-table-wrap">` con `overflow-x: auto` y `-webkit-overflow-scrolling: touch`. Dispone de un borde `1px solid var(--line)`, esquinas redondeadas de `8px`, sombra profunda y fondo `rgba(18, 17, 36, 0.75)`.
2. **Cabecera Canónica `th`:** Fondo `rgba(10, 9, 20, 0.96)`, tipografía Courier New monospace en mayúsculas (`color: var(--cyan)`), padding `14px 18px` y borde inferior `2px solid var(--cyan)`.
3. **Cuerpo y Filas `td`:** Padding uniforme `13px 18px`, borde divisor sutil `1px solid rgba(0, 255, 255, 0.1)`, rayado alternado tipo cebra (`rgba(255, 255, 255, 0.02)`) y efecto `hover` iluminado (`rgba(0, 255, 255, 0.06)`).
4. **Semántica de Notaciones:** Prohibición de notaciones crudas `$N$` o asteriscos de markdown `*texto*` dentro de celdas; usar etiquetas HTML explícitas (`<code>`, `<strong>`, `<em>`, `<span class="math-expr">`).
