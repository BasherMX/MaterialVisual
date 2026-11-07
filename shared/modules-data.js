/**
 * Material Visual · Catálogo Centralizado de Módulos Interactivos
 * Fuente de verdad única para la navegación, progreso y presentación de módulos.
 * Estructurado estrictamente en los 6 Bloques Canónicos de la Bibliografía Oficial:
 * - Bloque I: Gestión de Proyectos (Haynes Caps. 1, 2 y 3)
 * - Bloque II: Fundamentos de Programación & Algoritmos (Joyanes, Cairó, Noback, Dathan, MIT, Cardona)
 * - Bloque III: Ingeniería de Software & Calidad (Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4)
 * - Bloque IV: Plataformas de Programación & Web (.NET 8, Android, JavaScript/Web, REST, gRPC)
 * - Bloque V: Bases de Datos Relacionales & Físicas (Ricardo, Marqués, Oppel)
 * - Bloque VI: Administración de Información Electrónica / BI (Joyanes Aguilar)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MATERIAL_MODULES = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    // =========================================================================
    // BLOQUE I: GESTIÓN DE PROYECTOS (Haynes Caps. 1, 2 y 3)
    // =========================================================================
    {
      "id": "16",
      "number": "01",
      "blockId": "bloque-1",
      "blockName": "Bloque I · Gestión de Proyectos",
      "blockTheme": "Marion E. Haynes · Caps. 1, 2 y 3 (Alcance, Costo, Tiempo y Calidad)",
      "slug": "16-triangulo-de-hierro-gestion-proyectos",
      "filename": "16-triangulo-de-hierro-gestion-proyectos.html",
      "theme": "theme-coral",
      "category": "Gestión de Proyectos",
      "badge": "01 · Triple Restricción",
      "title": "El Triángulo de Hierro: Triple Restricción",
      "desc": "Simulador interactivo del balance dinámico entre Alcance, Tiempo y Costo. Experimenta el impacto de variar una restricción sobre la calidad del entregable.",
      "features": [
        "Manipulación interactiva del triángulo de restricciones",
        "Presets de escenarios críticos (Scope Creep, Fast-Tracking, Crash)",
        "Matriz de compensación y cálculo de índice de estrés"
      ],
      "btnId": "btn-goto-iron-triangle"
    },
    {
      "id": "17",
      "number": "02",
      "blockId": "bloque-1",
      "blockName": "Bloque I · Gestión de Proyectos",
      "blockTheme": "Marion E. Haynes · Caps. 1, 2 y 3 (Alcance, Costo, Tiempo y Calidad)",
      "slug": "17-edt-wbs-descomposicion-trabajo",
      "filename": "17-edt-wbs-descomposicion-trabajo.html",
      "theme": "theme-gold",
      "category": "Gestión de Proyectos",
      "badge": "02 · Gestión del Alcance",
      "title": "EDT / WBS: Descomposición del Trabajo",
      "desc": "Constructor visual e interactivo de la Estructura de Desglose del Trabajo. Aplica la Regla del 100% y descompone proyectos en paquetes de trabajo medibles.",
      "features": [
        "Constructor jerárquico de paquetes de trabajo con código WBS",
        "Validador de la Regla del 100% y estimación ascendente (Bottom-up)",
        "Diccionario WBS y asignación de criterios de aceptación"
      ],
      "btnId": "btn-goto-wbs"
    },
    {
      "id": "27",
      "number": "03",
      "blockId": "bloque-1",
      "blockName": "Bloque I · Gestión de Proyectos",
      "blockTheme": "Marion E. Haynes · Caps. 1, 2 y 3 (Alcance, Costo, Tiempo y Calidad)",
      "slug": "27-estimacion-pert-ruta-critica-validacion-haynes",
      "filename": "27-estimacion-pert-ruta-critica-validacion-haynes.html",
      "theme": "theme-gold",
      "category": "Gestión de Proyectos",
      "badge": "03 · Estimación PERT/CPM",
      "title": "Estimación PERT & Validación de Estrategia",
      "desc": "Calculadora probabilística basada en Haynes. Modela la duración esperada Te = (a + 4m + b)/6, varianza sigma², desviación estándar y holguras libres/totales sobre la ruta crítica.",
      "features": [
        "Cálculo de distribución Beta y probabilidad Z de entrega",
        "Grafo de dependencias AOA/AON con holgura total y libre",
        "Auditoría paso a paso de fases de planeación según Marion E. Haynes"
      ],
      "btnId": "btn-goto-pert-haynes"
    },

    // =========================================================================
    // BLOQUE II: FUNDAMENTOS DE PROGRAMACIÓN & ALGORITMOS
    // =========================================================================
    {
      "id": "01",
      "number": "04",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "01-complejidades-computacionales",
      "filename": "01-complejidades-computacionales.html",
      "theme": "theme-cyan",
      "category": "Fundamentos & Algoritmos",
      "badge": "04 · Análisis Algorítmico",
      "title": "Complejidad Computacional: Big O",
      "desc": "Visualizador reactivo del comportamiento asintótico Big O: O(1), O(log n), O(n), O(n log n), O(n²) y O(2ⁿ).",
      "features": [
        "Comparativa de curvas asintóticas en tiempo real",
        "Simulador interactivo de operaciones elementales",
        "Reglas de simplificación y trampas comunes"
      ],
      "btnId": "btn-goto-complexity"
    },
    {
      "id": "02",
      "number": "05",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "02-algoritmos-greedy-divide-venceras",
      "filename": "02-algoritmos-greedy-divide-venceras.html",
      "theme": "theme-coral",
      "category": "Fundamentos & Algoritmos",
      "badge": "05 · Paradigmas Algorítmicos",
      "title": "Greedy vs Divide & Conquer",
      "desc": "Laboratorio comparativo entre la optimización voraz local (Greedy) y la descomposición recursiva (Divide y Vencerás).",
      "features": [
        "Problema de la Mochila (Fraccionario vs 0/1)",
        "Desglose recursivo de Merge Sort y subproblemas",
        "Matriz de decisión y teoremas fundamentales"
      ],
      "btnId": "btn-goto-paradigms"
    },
    {
      "id": "03",
      "number": "06",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "03-arboles-avl-autobalanceo",
      "filename": "03-arboles-avl-autobalanceo.html",
      "theme": "theme-cyan",
      "category": "Fundamentos & Algoritmos",
      "badge": "06 · Estructura Dinámica",
      "title": "Árboles AVL: Equilibrio en Movimiento",
      "desc": "Simulador interactivo de inserción y autobalanceo en árboles binarios de búsqueda auto-balanceados.",
      "features": [
        "Cálculo en vivo de altura y factor de balance",
        "Detección de rotaciones simples y dobles (LL, RR, LR, RL)",
        "Historial de operaciones e inserción personalizada"
      ],
      "btnId": "btn-goto-avl"
    },
    {
      "id": "04",
      "number": "07",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "04-bfs-dfs-recorridos-interactivos",
      "filename": "04-bfs-dfs-recorridos-interactivos.html",
      "theme": "theme-green",
      "category": "Fundamentos & Algoritmos",
      "badge": "07 · Exploración de Grafos",
      "title": "Explorador de Grafos: BFS vs DFS",
      "desc": "Visualizador interactivo de algoritmos de recorrido en grafos. Compara la exploración por niveles (BFS) con la búsqueda en profundidad (DFS).",
      "features": [
        "Animación paso a paso de recorridos con Cola (BFS) y Pila (DFS)",
        "Detección de ciclos, componentes conexas y cálculo de distancias mínimas",
        "Selector de grafo personalizado y presets dirigidos"
      ],
      "btnId": "btn-goto-bfs-dfs"
    },
    {
      "id": "13",
      "number": "08",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "13-programacion-orientada-objetos",
      "filename": "13-programacion-orientada-objetos.html",
      "theme": "theme-cyan",
      "category": "Fundamentos & Algoritmos",
      "badge": "08 · Paradigmas POO",
      "title": "Programación Orientada a Objetos (POO)",
      "desc": "Laboratorio interactivo de los cuatro pilares fundamentales de la POO: Abstracción, Encapsulamiento, Herencia y Polimorfismo.",
      "features": [
        "Simulador de herencia y despacho dinámico de métodos (vtable)",
        "Encapsulamiento interactivo con modificadores de acceso",
        "Polimorfismo en tiempo de ejecución con interfaces y clases abstractas"
      ],
      "btnId": "btn-goto-oop"
    },
    {
      "id": "14",
      "number": "09",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "14-patrones-diseno-gof",
      "filename": "14-patrones-diseno-gof.html",
      "theme": "theme-coral",
      "category": "Fundamentos & Algoritmos",
      "badge": "09 · Patrones GoF",
      "title": "Patrones de Diseño GoF (Gang of Four)",
      "desc": "Explorador interactivo de los 23 patrones de diseño clásicos clasificados en Creacionales, Estructurales y de Comportamiento.",
      "features": [
        "Simulaciones visuales de Singleton, Factory Method, Adapter y Observer",
        "Diagramas de clases UML interactivos con código fuente de referencia",
        "Matriz de selección de patrones según el problema de diseño"
      ],
      "btnId": "btn-goto-gof"
    },
    {
      "id": "28",
      "number": "10",
      "blockId": "bloque-2",
      "blockName": "Bloque II · Fundamentos de Programación & Algoritmos",
      "blockTheme": "Joyanes, Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona",
      "slug": "28-direccionamiento-memoria-matrices-cairo",
      "filename": "28-direccionamiento-memoria-matrices-cairo.html",
      "theme": "theme-cyan",
      "category": "Fundamentos & Algoritmos",
      "badge": "10 · Estructuras de Datos",
      "title": "Direccionamiento de Memoria en Matrices A[m×n]",
      "desc": "Laboratorio formal de estructuras de datos basado en Osvaldo Cairó. Calcula y visualiza el mapeo lineal en RAM por Renglón (Row-Major) y por Columna (Column-Major).",
      "features": [
        "Fórmulas matemáticas formales Loc(A[i,j]) = Base + ((i-Li)*c + (j-Lj)) * W",
        "Inspección interactiva de celdas y cálculo paso a paso de offsets en RAM",
        "Comparativa de localidad espacial de caché L1/L2 al iterar filas vs columnas"
      ],
      "btnId": "btn-goto-cairo-matrix"
    },

    // =========================================================================
    // BLOQUE III: INGENIERÍA DE SOFTWARE & CALIDAD
    // =========================================================================
    {
      "id": "15",
      "number": "11",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "15-reglas-oro-theo-mandel-ui-ux",
      "filename": "15-reglas-oro-theo-mandel-ui-ux.html",
      "theme": "theme-green",
      "category": "Ingeniería de Software",
      "badge": "11 · Diseño UI/UX",
      "title": "Las 3 Reglas de Oro de Theo Mandel",
      "desc": "Laboratorio interactivo de diseño de interfaz de usuario basado en los principios clásicos de Theo Mandel expuestos por Roger S. Pressman.",
      "features": [
        "Demostración interactiva: Dar el control al usuario",
        "Simulador de reducción de la carga de memoria del usuario (Ley de Miller 7±2)",
        "Consistencia visual y de interacción a través de componentes reutilizables"
      ],
      "btnId": "btn-goto-mandel"
    },
    {
      "id": "23",
      "number": "12",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "23-ingenieria-software-error-defecto-falla-verificacion-validacion",
      "filename": "23-ingenieria-software-error-defecto-falla-verificacion-validacion.html",
      "theme": "theme-coral",
      "category": "Ingeniería de Software",
      "badge": "12 · Calidad & V&V",
      "title": "Error, Defecto, Falla & V&V",
      "desc": "Laboratorio formal de calidad de software según Federico Toledo y Roger Pressman. Simula la cadena causal Error humano -> Defecto en código -> Falla operativa.",
      "features": [
        "Cadena ontológica interactiva Error -> Defecto (Bug) -> Falla (Failure)",
        "Diferenciador formal entre Verificación (conforme especificación) y Validación (conforme usuario)",
        "Simulador de pruebas Smoke Testing vs Monkey Testing con inyección de estrés"
      ],
      "btnId": "btn-goto-error-defecto-falla"
    },
    {
      "id": "24",
      "number": "13",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "24-ingenieria-software-metricas-confiabilidad-rocof-pofod-mttf-kloc",
      "filename": "24-ingenieria-software-metricas-confiabilidad-rocof-pofod-mttf-kloc.html",
      "theme": "theme-gold",
      "category": "Ingeniería de Software",
      "badge": "13 · Confiabilidad",
      "title": "Métricas de Confiabilidad: ROCOF, POFOD & MTTF",
      "desc": "Simulador cuantitativo de métricas de confiabilidad de software según Ian Sommerville. Calcula ROCOF, POFOD, MTTF, MTBF, MTTR y Disponibilidad del sistema en alta concurrencia.",
      "features": [
        "Calculadora dinámica de ROCOF, POFOD, MTTF, MTTR y porcentaje de Disponibilidad (Nueves de SLA)",
        "Simulador de curva de densidad de defectos por KLOC en fases de prueba",
        "Matriz de criticidad del sistema y selección de métricas contractuales de calidad"
      ],
      "btnId": "btn-goto-metricas-confiabilidad"
    },
    {
      "id": "29",
      "number": "14",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "29-modelado-sistema-executable-uml-sommerville",
      "filename": "29-modelado-sistema-executable-uml-sommerville.html",
      "theme": "theme-coral",
      "category": "Ingeniería de Software",
      "badge": "14 · Modelado xUML",
      "title": "Executable UML (xUML) · Ian Sommerville",
      "desc": "Simulador interactivo del paradigma Executable UML (xUML) y Model-Driven Engineering (MDE) basado en el capítulo 5 de Ian Sommerville.",
      "features": [
        "Máquina de estados finitos ejecutable (FSM) con transiciones disparadas por eventos",
        "Traducción automática de especificación visual xUML a código ejecutable en C# (.NET 8)",
        "Matriz comparativa de ventajas y limitaciones críticas de xUML frente al código manual"
      ],
      "btnId": "btn-goto-executable-uml"
    },
    {
      "id": "31",
      "number": "15",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "31-ingenieria-requerimientos-reglas-negocio",
      "filename": "31-ingenieria-requerimientos-reglas-negocio.html",
      "theme": "theme-gold",
      "category": "Ingeniería de Software",
      "badge": "15 · Requerimientos",
      "title": "Ingeniería de Requerimientos: Reglas de Negocio vs Requisitos Funcionales",
      "desc": "Simulador ontológico basado en Vazquez & Simões, Pressman y SWEBOK v4. Clasifica Reglas de Negocio, Requisitos Funcionales y No Funcionales (IEEE 830 / ISO 29148) con Matriz de Trazabilidad RTM.",
      "features": [
        "Arena interactiva de clasificación ontológica de declaraciones en tiempo real",
        "Matriz de Trazabilidad de Requisitos (RTM bidireccional) con casos de prueba de aceptación",
        "Doctrinas formales de calidad IEEE 830 y taxonomía de atributos ISO 25010 / 29148"
      ],
      "btnId": "btn-goto-req-engineering"
    },
    {
      "id": "32",
      "number": "16",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "32-tecnicas-pruebas-caja-negra-blanca",
      "filename": "32-tecnicas-pruebas-caja-negra-blanca.html",
      "theme": "theme-cyan",
      "category": "Ingeniería de Software",
      "badge": "16 · Técnicas de Pruebas",
      "title": "Técnicas de Pruebas de Software: Caja Negra & Caja Blanca (McCabe)",
      "desc": "Laboratorio formal de diseño de pruebas según Federico Toledo y Roger Pressman. Calcula la Complejidad Ciclomática de McCabe V(G) = E - N + 2P y diseña casos con Análisis de Valores Límite (BVA).",
      "features": [
        "Renderizado visual del Grafo de Flujo de Control (CFG) y cálculo automático de V(G)",
        "Generador de caminos linealmente independientes para cobertura completa de decisiones",
        "Probador interactivo de Partición de Equivalencia y valores frontera BVA (min-1, min, max, max+1)"
      ],
      "btnId": "btn-goto-testing-techniques"
    },
    {
      "id": "35",
      "number": "17",
      "blockId": "bloque-3",
      "blockName": "Bloque III · Ingeniería de Software & Calidad",
      "blockTheme": "Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4",
      "slug": "35-modelos-procesos-espiral-boehm-rup",
      "filename": "35-modelos-procesos-espiral-boehm-rup.html",
      "theme": "theme-gold",
      "category": "Ingeniería de Software",
      "badge": "17 · Modelos de Procesos",
      "title": "Modelos de Procesos de Software: Espiral de Boehm & Fases de RUP",
      "desc": "Simulador interactivo de ciclos de vida basado en Ian Sommerville y Roger Pressman. Experimenta la mitigación de riesgos en los 4 cuadrantes de la Espiral de Boehm y las 4 fases e hitos de RUP.",
      "features": [
        "Espiral polar interactiva en SVG con rotación y evaluación de riesgos cuadrante a cuadrante",
        "Matriz de fases de RUP (Inicio, Elaboración, Construcción, Transición) y línea base arquitectónica",
        "Cuadro comparativo doctrinal de paradigmas: Cascada, Espiral, RUP y Metodologías Ágiles"
      ],
      "btnId": "btn-goto-process-models"
    },

    // =========================================================================
    // BLOQUE IV: PLATAFORMAS DE PROGRAMACIÓN & WEB
    // =========================================================================
    {
      "id": "11",
      "number": "18",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "11-metodos-http-y-codigos-de-estado",
      "filename": "11-metodos-http-y-codigos-de-estado.html",
      "theme": "theme-cyan",
      "category": "Plataformas & Web",
      "badge": "18 · Protocolos Web",
      "title": "Métodos HTTP y Códigos de Estado Estándar",
      "desc": "Simulador interactivo del protocolo HTTP/1.1 y HTTP/2. Explora la semántica, idempotencia y seguridad de cada verbo, y consulta la taxonomía completa de códigos de estado.",
      "features": [
        "Simulador cliente-servidor con inspector de peticiones y respuestas en vivo",
        "Matriz interactiva de idempotencia y seguridad (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)",
        "Buscador y clasificador visual de códigos de estado (1xx, 2xx, 3xx, 4xx, 5xx)"
      ],
      "btnId": "btn-goto-http"
    },
    {
      "id": "12",
      "number": "19",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "12-modelo-madurez-richardson-rest",
      "filename": "12-modelo-madurez-richardson-rest.html",
      "theme": "theme-coral",
      "category": "Plataformas & Web",
      "badge": "19 · Arquitectura REST",
      "title": "Modelo de Madurez de Richardson",
      "desc": "Explorador interactivo de los cuatro niveles (0 a 3) del Modelo de Madurez de Richardson para el diseño de APIs RESTful verdaderas.",
      "features": [
        "Simulación interactiva paso a paso desde Nivel 0 (The Swamp of POX) hasta Nivel 3 (HATEOAS)",
        "Inspector de payloads JSON con hipermedios dinámicos y enlaces de navegación de recursos",
        "Comparativa de ventajas, costos de implementación y criterios de adopción en la industria"
      ],
      "btnId": "btn-goto-richardson"
    },
    {
      "id": "18",
      "number": "20",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "18-inyeccion-dependencias-constructores-primarios-csharp",
      "filename": "18-inyeccion-dependencias-constructores-primarios-csharp.html",
      "theme": "theme-cyan",
      "category": "Plataformas & Web",
      "badge": "20 · Arquitectura .NET 8",
      "title": "Inyección de Dependencias & C# 12",
      "desc": "Laboratorio interactivo del contenedor IoC de ASP.NET Core 8. Simula los ciclos de vida Transient, Scoped y Singleton, previene el Captive Dependency y compara con C# 12 Primary Constructors.",
      "features": [
        "Simulador visual de resolución de dependencias con contenedor IoC en tiempo real",
        "Detector y analizador interactivo del anti-patrón Captive Dependency",
        "Comparativa de sintaxis tradicional vs Primary Constructors en C# 12 con código compilable"
      ],
      "btnId": "btn-goto-di-csharp"
    },
    {
      "id": "19",
      "number": "21",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "19-efcore-concurrencia-dbcontextfactory-optimizacion",
      "filename": "19-efcore-concurrencia-dbcontextfactory-optimizacion.html",
      "theme": "theme-green",
      "category": "Plataformas & Web",
      "badge": "21 · EF Core & Concurrencia",
      "title": "EF Core: Concurrencia & Optimización",
      "desc": "Simulador avanzado de Entity Framework Core 8 basado en Mark J. Price. Explora la concurrencia optimista, resuelve colisiones multihilo con IDbContextFactory y evita la explosión cartesiana con AsSplitQuery().",
      "features": [
        "Simulador de control de concurrencia optimista con tokens RowVersion y resolución Client/Database Wins",
        "Demostración de contención de DbContext vs aislamiento seguro con IDbContextFactory",
        "Comparativa de rendimiento y SQL generado: Single Query (Cartesian Explosion) vs AsSplitQuery()"
      ],
      "btnId": "btn-goto-efcore-concurrency"
    },
    {
      "id": "20",
      "number": "22",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "20-grpc-patrones-comunicacion-streaming",
      "filename": "20-grpc-patrones-comunicacion-streaming.html",
      "theme": "theme-cyan",
      "category": "Plataformas & Web",
      "badge": "22 · gRPC & Streaming",
      "title": "gRPC & Patrones de Streaming",
      "desc": "Laboratorio interactivo de comunicación RPC de alto rendimiento con HTTP/2 y Protocol Buffers. Experimenta los 4 modos de llamada: Unario, Server Streaming, Client Streaming y Streaming Bidireccional.",
      "features": [
        "Simulador visual en tiempo real de los 4 patrones de comunicación gRPC",
        "Comparativa de rendimiento y serialización: Protobuf binario vs JSON textual",
        "Inspector interactivo de tramas HTTP/2 (Multiplexación, compresión HPACK y control de flujo)"
      ],
      "btnId": "btn-goto-grpc-streaming"
    },
    {
      "id": "21",
      "number": "23",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "21-graphql-over-under-fetching-hotchocolate",
      "filename": "21-graphql-over-under-fetching-hotchocolate.html",
      "theme": "theme-coral",
      "category": "Plataformas & Web",
      "badge": "23 · GraphQL & APIs",
      "title": "GraphQL & HotChocolate: Over/Under-fetching",
      "desc": "Simulador interactivo de diseño de APIs con GraphQL y HotChocolate en .NET 8. Visualiza la eliminación de Over-fetching y Under-fetching frente a REST, y resuelve el problema N+1 con DataLoaders.",
      "features": [
        "Comparador dinámico de payloads de red: REST fijo vs GraphQL selectivo",
        "Simulador del problema N+1 de consultas y su optimización batch con DataLoader",
        "Consola interactiva de queries GraphQL con autocompletado y visualización de AST"
      ],
      "btnId": "btn-goto-graphql-hotchocolate"
    },
    {
      "id": "22",
      "number": "24",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "22-jwt-autenticacion-tokens-seguridad",
      "filename": "22-jwt-autenticacion-tokens-seguridad.html",
      "theme": "theme-gold",
      "category": "Plataformas & Web",
      "badge": "24 · Seguridad & JWT",
      "title": "JWT: Tokens & Criptografía",
      "desc": "Laboratorio interactivo de seguridad y autenticación basada en JSON Web Tokens (RFC 7519). Desglosa Header, Payload y Signature, simula ataques criptográficos y gestiona rotación de Refresh Tokens.",
      "features": [
        "Decodificador e inspector visual interactivo de tokens JWT en tiempo real",
        "Simulador de validación de firma criptográfica HMAC-SHA256 y RS256 con detección de manipulación",
        "Flujo completo de autenticación: Access Token de corta duración y Refresh Token con rotación"
      ],
      "btnId": "btn-goto-jwt-security"
    },
    {
      "id": "25",
      "number": "25",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "25-concurrencia-bajo-nivel-interlocked-monitor-primitivas-sincronizacion",
      "filename": "25-concurrencia-bajo-nivel-interlocked-monitor-primitivas-sincronizacion.html",
      "theme": "theme-cyan",
      "category": "Plataformas & Web",
      "badge": "25 · Concurrencia de Bajo Nivel",
      "title": "Concurrencia de Bajo Nivel: Interlocked & Monitor",
      "desc": "Laboratorio de concurrencia y primitivas de sincronización a nivel hardware en .NET 8. Simula condiciones de carrera (x++), compara operaciones atómicas de CPU (Interlocked) vs exclusión mutua (Monitor / lock).",
      "features": [
        "Simulador visual de condición de carrera con múltiples hilos en paralelo",
        "Inspección de instrucciones CPU: atomismo LOCK XADD vs ciclo try-finally con Monitor.Enter",
        "Laboratorio interactivo de detección y prevención de Deadlock (Abrazo Mortal)"
      ],
      "btnId": "btn-goto-concurrencia-bajo-nivel"
    },
    {
      "id": "26",
      "number": "26",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "26-servicios-segundo-plano-resiliencia-polly-cache-dotnet",
      "filename": "26-servicios-segundo-plano-resiliencia-polly-cache-dotnet.html",
      "theme": "theme-coral",
      "category": "Plataformas & Web",
      "badge": "26 · Resiliencia & Caché",
      "title": "Servicios de Fondo, Resiliencia & Caché",
      "desc": "Simulador de arquitectura backend resiliente en .NET 8. Modela BackgroundService con IHostedService, inyecta patrones de resiliencia con Polly y experimenta con IMemoryCache vs IDistributedCache.",
      "features": [
        "Simulador interactivo del ciclo de vida de un BackgroundService con CancellationToken",
        "Pipeline de resiliencia con Polly: Retry exponencial, Circuit Breaker y Fallback reactivo",
        "Laboratorio de caché: Estrategias de expiración absoluta vs deslizante e invalidación distribuida"
      ],
      "btnId": "btn-goto-servicios-resiliencia-cache"
    },
    {
      "id": "33",
      "number": "27",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "33-arquitectura-android-componentes-ciclo-vida",
      "filename": "33-arquitectura-android-componentes-ciclo-vida.html",
      "theme": "theme-green",
      "category": "Plataformas & Web",
      "badge": "27 · Arquitectura Android",
      "title": "Arquitectura Móvil Android: Componentes ABCD & Ciclo de Vida",
      "desc": "Simulador interactivo del stack nativo de Android basado en Head First Android y Tomás Gironés. Máquina de estados del ciclo de vida de Activity, preservación de estado con ViewModel y WorkManager.",
      "features": [
        "Smartphone virtual interactivo con eventos de SO (rotación, llamada entrante, low memory)",
        "Máquina de estados visual de callbacks (onCreate, onStart, onResume, onPause, onStop, onDestroy)",
        "Auditoría de memoria en vivo: pérdida de variables de Activity vs supervivencia en ViewModel/WorkManager"
      ],
      "btnId": "btn-goto-android-arch"
    },
    {
      "id": "34",
      "number": "28",
      "blockId": "bloque-4",
      "blockName": "Bloque IV · Plataformas de Programación & Web",
      "blockTheme": ".NET 8, Android, JavaScript/Web, REST, gRPC (Price, Griffiths, MDN)",
      "slug": "34-javascript-concurrente-event-loop-web-security",
      "filename": "34-javascript-concurrente-event-loop-web-security.html",
      "theme": "theme-cyan",
      "category": "Plataformas & Web",
      "badge": "28 · JavaScript & Seguridad Web",
      "title": "JavaScript Concurrente: Event Loop, Microtasks & Seguridad Web (CORS/CSP)",
      "desc": "Simulador interactivo del Event Loop en JavaScript según MDN y Javascript.info. Animación paso a paso de Call Stack, Microtasks (Promesas) vs Task Queue (setTimeout), y simulador de CORS Preflight y CSP.",
      "features": [
        "Animación paso a paso del Event Loop demostrando la precedencia estricta de la Microtask Queue",
        "Simulador interactivo del intercambio CORS: peticiones simples vs preflight HTTP OPTIONS",
        "Panel de directivas de Content Security Policy (CSP) y mitigación de inyecciones XSS"
      ],
      "btnId": "btn-goto-js-eventloop"
    },

    // =========================================================================
    // BLOQUE V: BASES DE DATOS RELACIONALES & FÍSICAS
    // =========================================================================
    {
      "id": "05",
      "number": "29",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "05-arquitectura-ansi-sparc-tres-niveles",
      "filename": "05-arquitectura-ansi-sparc-tres-niveles.html",
      "theme": "theme-gold",
      "category": "Bases de Datos",
      "badge": "29 · Arquitectura DBMS",
      "title": "Arquitectura ANSI/SPARC de Tres Niveles",
      "desc": "Laboratorio conceptual de la arquitectura de referencia ANSI/SPARC. Explora la independencia de datos lógica y física entre los niveles externo, conceptual e interno.",
      "features": [
        "Visualizador interactivo de los niveles Externo, Conceptual e Interno",
        "Simulador de independencia de datos: modificación de esquemas sin romper aplicaciones",
        "Mapeos conceptual-externo e interno-conceptual con ejemplos SQL reales"
      ],
      "btnId": "btn-goto-ansi-sparc"
    },
    {
      "id": "06",
      "number": "30",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "06-modelado-conceptual-erd-diagramas",
      "filename": "06-modelado-conceptual-erd-diagramas.html",
      "theme": "theme-coral",
      "category": "Bases de Datos",
      "badge": "30 · Modelado de Datos",
      "title": "Modelado Conceptual ERD y Notaciones",
      "desc": "Laboratorio visual de diagramas entidad-relación (ERD). Compara las notaciones de Peter Chen y Crow's Foot (Pata de Gallo) con resolución de cardinalidades.",
      "features": [
        "Selector dinámico de notaciones: Chen clásico vs Crow's Foot moderna",
        "Explorador de cardinalidades: 1:1, 1:N y M:N con resolución de entidades asociativas",
        "Conversión interactiva de modelo conceptual a esquema relacional normalizado"
      ],
      "btnId": "btn-goto-erd"
    },
    {
      "id": "07",
      "number": "31",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "07-normalizacion-bases-datos",
      "filename": "07-normalizacion-bases-datos.html",
      "theme": "theme-cyan",
      "category": "Bases de Datos",
      "badge": "31 · Diseño Relacional",
      "title": "Normalización de Bases de Datos (1FN - BCNF)",
      "desc": "Guía práctica e interactiva del proceso de normalización relacional paso a paso desde tablas sin normalizar hasta BCNF.",
      "features": [
        "Simulador de descomposición progresiva: 1FN, 2FN, 3FN y Forma Normal de Boyce-Codd",
        "Detección y eliminación de anomalías de inserción, actualización y borrado",
        "Análisis de dependencias funcionales totales, parciales y transitivas"
      ],
      "btnId": "btn-goto-normalization"
    },
    {
      "id": "08",
      "number": "32",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl",
      "filename": "08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl.html",
      "theme": "theme-green",
      "category": "Bases de Datos",
      "badge": "32 · Estándar SQL",
      "title": "Taxonomía de Sublenguajes SQL (DDL, DML, DCL, TCL)",
      "desc": "Clasificador visual de comandos SQL según su sublenguaje formal: DDL, DML, DCL y TCL con consola de ejecución interactiva.",
      "features": [
        "Clasificador interactivo de sentencias SQL con ejemplos ejecutables",
        "Simulador de transacciones TCL: BEGIN, COMMIT, ROLLBACK y SAVEPOINT",
        "Gestión de permisos DCL: GRANT, REVOKE y DENY sobre objetos del catálogo"
      ],
      "btnId": "btn-goto-sql-taxonomy"
    },
    {
      "id": "09",
      "number": "33",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "09-acid-y-axiomas-de-armstrong",
      "filename": "09-acid-y-axiomas-de-armstrong.html",
      "theme": "theme-gold",
      "category": "Bases de Datos",
      "badge": "33 · Transacciones & Teoría",
      "title": "Propiedades ACID y Axiomas de Armstrong",
      "desc": "Laboratorio formal de transacciones y diseño relacional. Simula fallos de Atomicidad y Aislamiento, y deduce dependencias funcionales con los axiomas de Armstrong.",
      "features": [
        "Simulador interactivo de propiedades ACID con inyección de fallas en vivo",
        "Niveles de aislamiento ANSI SQL (Read Uncommitted a Serializable) y anomalías",
        "Calculador de cierre de dependencias funcionales con los 6 axiomas de Armstrong"
      ],
      "btnId": "btn-goto-acid-armstrong"
    },
    {
      "id": "10",
      "number": "34",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "10-diseno-fisico-indices-arbol-b-plus.html",
      "filename": "10-diseno-fisico-indices-arbol-b-plus.html",
      "theme": "theme-coral",
      "category": "Bases de Datos",
      "badge": "34 · Almacenamiento Físico",
      "title": "Diseño Físico: Índices y Árboles B+",
      "desc": "Visualizador del almacenamiento físico de bases de datos. Compara índices Clustered vs Non-Clustered e interactúa con un árbol B+ balanceado.",
      "features": [
        "Simulador de árbol B+ con división de nodos (splits) y balanceo automático",
        "Diferencias estructurales entre índices agrupados (Clustered) y no agrupados",
        "Análisis de costo de I/O en búsquedas puntuales vs escaneos de rango (Range Scans)"
      ],
      "btnId": "btn-goto-bplus-tree"
    },
    {
      "id": "30",
      "number": "35",
      "blockId": "bloque-5",
      "blockName": "Bloque V · Bases de Datos Relacionales & Físicas",
      "blockTheme": "Catherine Ricardo, Mercedes Marqués, Andy Oppel",
      "slug": "30-estructuras-indexacion-arbol-bplus-vs-hash",
      "filename": "30-estructuras-indexacion-arbol-bplus-vs-hash.html",
      "theme": "theme-cyan",
      "category": "Bases de Datos",
      "badge": "35 · Indexación Comparativa",
      "title": "Estructuras de Indexación: Árbol B+ vs Tablas Hash",
      "desc": "Laboratorio comparativo interactivo de estructuras de indexación física: inserción en tiempo real, división de nodos (splits), dispersión en buckets y rendimiento en búsquedas puntuales vs de rango.",
      "features": [
        "Simulador visual dual en paralelo: Inserción de tuplas en Árbol B+ y Tabla Hash simultáneamente",
        "Demostración interactiva de búsquedas de rango: eficiencia O(log N + K) en B+ vs fallo/Full Scan en Hash",
        "Manejo de colisiones en Hash (Separate Chaining) y auditoría de páginas I/O en disco"
      ],
      "btnId": "btn-goto-bplus-vs-hash"
    },

    // =========================================================================
    // BLOQUE VI: ADMINISTRACIÓN DE INFORMACIÓN ELECTRÓNICA / BI
    // =========================================================================
    {
      "id": "36",
      "number": "36",
      "blockId": "bloque-6",
      "blockName": "Bloque VI · Business Intelligence & Información Electrónica",
      "blockTheme": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos",
      "slug": "36-business-intelligence-data-warehouse-etl",
      "filename": "36-business-intelligence-data-warehouse-etl.html",
      "theme": "theme-gold",
      "category": "Business Intelligence & DWH",
      "badge": "36 · Modelado Dimensional & BI",
      "title": "Business Intelligence & Data Warehouse: Modelado Dimensional & ETL",
      "desc": "Laboratorio interactivo basado en Luis Joyanes Aguilar. Modela esquemas dimensionales (Estrella vs Copo de Nieve), contrasta las arquitecturas de Ralph Kimball vs Bill Inmon y simula pipelines ETL vs ELT.",
      "features": [
        "Diseñador de Esquema en Estrella vs Copo de Nieve con comparador de JOINs y consulta SQL analítica en vivo",
        "Duelo arquitectónico formal: Ralph Kimball (Bottom-Up dimensional) vs Bill Inmon (Top-Down relacional 3FN)",
        "Simulador de tuberías de integración de datos: ETL clásico en servidor intermedio vs ELT masivo en la nube"
      ],
      "btnId": "btn-goto-bi-datawarehouse"
    }
  ];
});
