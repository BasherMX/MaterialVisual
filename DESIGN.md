# Sistema de Diseño y Arquitectura · MaterialVisual

Documento maestro de arquitectura técnica, principios de diseño, componentes reutilizables y directrices pedagógicas de la plataforma **MaterialVisual**.

---

## 1. Visión y Propósito
MaterialVisual es un laboratorio interactivo enfocado en la divulgación rigurosa de Ciencias de la Computación, Algoritmos, Estructuras de Datos, Arquitectura de Software, Bases de Datos Relacionales y Gestión de Proyectos. Su premisa fundamental es **convertir conceptos abstractos y teóricos en modelos visuales manipulables en tiempo real** con retroalimentación instantánea.

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

## 6. Estándar Pedagógico de los Módulos
Cada módulo debe brindar una experiencia de aprendizaje completa en 5 pestañas:
1. **Marco Conceptual Riguroso:** Fundamentación teórica formal con referencias a autores canónicos.
2. **Simulador Visual Reactivo:** El corazón interactivo. Modificación de estado en tiempo real (nodos, árboles, transacciones, tablas).
3. **Casos de Estudio / Duelos / Discrepancias:** Confrontación entre teoría y práctica comercial (ej. DELETE vs TRUNCATE vs DROP, B+ vs AVL, Teoría ANSI/SPARC vs RDBMS comerciales).
4. **Herramienta Cuantitativa / Calculadora:** Ejecución paso a paso de algoritmos matemáticos (clausura de dependencias funcionales, cálculo de I/O, fan-out, complejidades Big O).
5. **Laboratorio de Diagnóstico (Quiz):** Preguntas técnicas con validación inmediata y explicación pedagógica.
