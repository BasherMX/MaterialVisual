/**
 * Material Visual · Catálogo Centralizado de Módulos Interactivos
 * Fuente de verdad única para la navegación y presentación de módulos.
 * Ordenado pedagógicamente por áreas temáticas (01 al 17).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MATERIAL_MODULES = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    {
        "id": "01",
        "slug": "01-complejidades-computacionales",
        "filename": "01-complejidades-computacionales.html",
        "theme": "theme-cyan",
        "category": "Estructuras & Algoritmos",
        "badge": "01 · Análisis Algorítmico",
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
        "slug": "02-algoritmos-greedy-divide-venceras",
        "filename": "02-algoritmos-greedy-divide-venceras.html",
        "theme": "theme-coral",
        "category": "Estructuras & Algoritmos",
        "badge": "02 · Paradigmas Algorítmicos",
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
        "slug": "03-arboles-avl-autobalanceo",
        "filename": "03-arboles-avl-autobalanceo.html",
        "theme": "theme-cyan",
        "category": "Estructuras & Algoritmos",
        "badge": "03 · Estructura Dinámica",
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
        "slug": "04-bfs-dfs-recorridos-interactivos",
        "filename": "04-bfs-dfs-recorridos-interactivos.html",
        "theme": "theme-gold",
        "category": "Estructuras & Algoritmos",
        "badge": "04 · Exploración de Grafos",
        "title": "Explorador de Grafos: BFS vs DFS",
        "desc": "Simulador interactivo de recorridos en grafos: Búsqueda en Anchura (BFS) vs Búsqueda en Profundidad (DFS).",
        "features": [
            "Animación de Cola FIFO vs Pila LIFO en vivo",
            "Detección de componentes conexas y ciclos",
            "Casos de uso: caminos más cortos y orden topológico"
        ],
        "btnId": "btn-goto-graphs"
    },
    {
        "id": "05",
        "slug": "05-arquitectura-ansi-sparc-tres-niveles",
        "filename": "05-arquitectura-ansi-sparc-tres-niveles.html",
        "theme": "theme-purple",
        "category": "Bases de Datos",
        "badge": "05 · Arquitectura DBMS",
        "title": "Arquitectura ANSI/SPARC de Tres Niveles",
        "desc": "Laboratorio de aislamiento de capas: Vistas externas, esquema lógico/conceptual y almacenamiento físico con mapeos interactivos.",
        "features": [
            "Simulador de Mapeos Externo/Lógico y Lógico/Interno",
            "Independencia Física y Lógica de datos en tiempo real",
            "Análisis de discrepancia teórica vs implementación comercial"
        ],
        "btnId": "btn-goto-ansi-sparc"
    },
    {
        "id": "06",
        "slug": "06-modelado-conceptual-erd-diagramas",
        "filename": "06-modelado-conceptual-erd-diagramas.html",
        "theme": "theme-green",
        "category": "Bases de Datos",
        "badge": "06 · Modelado de Datos",
        "title": "Modelado Conceptual ERD y Notaciones",
        "desc": "Diseñador interactivo de Diagramas Entidad-Relación: Chen, Martin (Crow's Foot) e ISO/IEC Min/Max.",
        "features": [
            "Traductor reactivo de notaciones en tiempo real",
            "Generador automático de sentencias DDL SQL",
            "Reglas de derivación de entidades débiles y cardinalidades"
        ],
        "btnId": "btn-goto-erd"
    },
    {
        "id": "07",
        "slug": "07-normalizacion-bases-datos",
        "filename": "07-normalizacion-bases-datos.html",
        "theme": "theme-cyan",
        "category": "Bases de Datos",
        "badge": "07 · Diseño Relacional",
        "title": "Normalización de Bases de Datos (1FN - BCNF)",
        "desc": "Simulador interactivo del proceso de normalización relacional: 1FN, 2FN, 3FN y Boyce-Codd.",
        "features": [
            "Descomposición de relaciones sin pérdida (Lossless)",
            "Detector interactivo de anomalías (Inserción, Borrado, Modificación)",
            "Identificación de dependencias funcionales completas y transitivas"
        ],
        "btnId": "btn-goto-norm"
    },
    {
        "id": "08",
        "slug": "08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl",
        "filename": "08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl.html",
        "theme": "theme-green",
        "category": "Bases de Datos",
        "badge": "08 · Estándar SQL",
        "title": "Taxonomía de Sublenguajes SQL (DDL, DML, DCL, TCL)",
        "desc": "Guía y laboratorio interactivo de las cuatro familias fundamentales del estándar SQL: DDL, DML, DCL y TCL.",
        "features": [
            "Simulador interactivo de motor RDBMS en tiempo real",
            "Duelo analítico: DELETE vs TRUNCATE vs DROP",
            "Gobernanza DCL, control transaccional TCL y SAVEPOINT"
        ],
        "btnId": "btn-goto-sql-taxo"
    },
    {
        "id": "09",
        "slug": "09-acid-y-axiomas-de-armstrong",
        "filename": "09-acid-y-axiomas-de-armstrong.html",
        "theme": "theme-gold",
        "category": "Bases de Datos",
        "badge": "09 · Transacciones & Teoría",
        "title": "Propiedades ACID y Axiomas de Armstrong",
        "desc": "Laboratorio de garantías transaccionales ACID y motor de inferencia formal de Axiomas de Armstrong.",
        "features": [
            "Simulador reactivo de transacciones con fallos de energía y WAL",
            "Niveles de aislamiento ANSI SQL vs MVCC real",
            "Calculadora de clausura de atributos con reflexividad, aumento y transitividad"
        ],
        "btnId": "btn-goto-acid-armstrong"
    },
    {
        "id": "10",
        "slug": "10-diseno-fisico-indices-arbol-b-plus",
        "filename": "10-diseno-fisico-indices-arbol-b-plus.html",
        "theme": "theme-green",
        "category": "Bases de Datos",
        "badge": "10 · Almacenamiento Físico",
        "title": "Diseño Físico: Índices y Árboles B+",
        "desc": "Explorador interactivo de estructuras de indexación física: Índices Agrupados (Clustered), No Agrupados y Árboles B+.",
        "features": [
            "Visualizador interactivo de Árbol B+ con división de nodos (Split)",
            "Diferencias de I/O en disco entre Clustered y Non-Clustered",
            "Simulador de lecturas de bloques de disco y escaneos de rango"
        ],
        "btnId": "btn-goto-bplus"
    },
    {
        "id": "11",
        "slug": "11-metodos-http-y-codigos-de-estado",
        "filename": "11-metodos-http-y-codigos-de-estado.html",
        "theme": "theme-blue",
        "category": "Arquitectura & Web",
        "badge": "11 · Protocolos Web",
        "title": "Métodos HTTP y Códigos de Estado Estándar",
        "desc": "Explorador exhaustivo de la semántica HTTP/1.1 y HTTP/2: Métodos seguros e idempotentes y códigos 1xx a 5xx.",
        "features": [
            "Matriz de seguridad e idempotencia (GET, POST, PUT, DELETE, PATCH)",
            "Catálogo categorizado y filtrable de códigos de estado",
            "Laboratorio reactivo de peticiones y respuestas con payload en vivo"
        ],
        "btnId": "btn-goto-http"
    },
    {
        "id": "12",
        "slug": "12-modelo-madurez-richardson-rest",
        "filename": "12-modelo-madurez-richardson-rest.html",
        "theme": "theme-purple",
        "category": "Arquitectura & Web",
        "badge": "12 · Arquitectura REST",
        "title": "Modelo de Madurez de Richardson",
        "desc": "Simulador interactivo de los cuatro niveles de madurez arquitectónica hacia APIs verdaderamente RESTful.",
        "features": [
            "Transición visual: Nivel 0 (POX) a Nivel 3 (HATEOAS)",
            "Inspector reactivo de peticiones y respuestas HTTP en tiempo real",
            "Matriz de cumplimiento de restricciones arquitectónicas REST"
        ],
        "btnId": "btn-goto-richardson"
    },
    {
        "id": "13",
        "slug": "13-programacion-orientada-objetos",
        "filename": "13-programacion-orientada-objetos.html",
        "theme": "theme-purple",
        "category": "Diseño & UI/UX",
        "badge": "13 · Paradigmas de Software",
        "title": "Programación Orientada a Objetos (POO)",
        "desc": "Visualizador de los cuatro pilares fundamentales de la POO: Abstracción, Encapsulamiento, Herencia y Polimorfismo.",
        "features": [
            "Simulador interactivo de despacho dinámico y polimorfismo",
            "Demostración visual de sobreescritura (Override) vs sobrecarga (Overload)",
            "Métricas de cohesión y acoplamiento con feedback en vivo"
        ],
        "btnId": "btn-goto-poo"
    },
    {
        "id": "14",
        "slug": "14-patrones-diseno-gof",
        "filename": "14-patrones-diseno-gof.html",
        "theme": "theme-gold",
        "category": "Diseño & UI/UX",
        "badge": "14 · Arquitectura GoF",
        "title": "Patrones de Diseño GoF (Gang of Four)",
        "desc": "Catálogo interactivo de los 23 patrones de diseño clásicos de Gamma, Helm, Johnson y Vlissides.",
        "features": [
            "Clasificación tripartita: Creacionales, Estructurales y de Comportamiento",
            "Laboratorio de código interactivo con selección de patrones clave",
            "Matriz de aplicabilidad, consecuencias y principios SOLID vinculados"
        ],
        "btnId": "btn-goto-gof"
    },
    {
        "id": "15",
        "slug": "15-reglas-oro-theo-mandel-ui-ux",
        "filename": "15-reglas-oro-theo-mandel-ui-ux.html",
        "theme": "theme-amber",
        "category": "Diseño & UI/UX",
        "badge": "15 · Principios UI/UX",
        "title": "Las 3 Reglas de Oro de Theo Mandel",
        "desc": "Laboratorio de usabilidad basado en las 3 Reglas de Oro para el diseño de interfaces de Theo Mandel y Roger Pressman.",
        "features": [
            "Simulador de control del usuario: Deshacer destructivo vs Modo Seguro",
            "Medidor reactivo de carga cognitiva (Ley de Miller 7±2)",
            "Detector de consistencia visual e informativa en tiempo real"
        ],
        "btnId": "btn-goto-mandel"
    },
    {
        "id": "16",
        "slug": "16-triangulo-de-hierro-gestion-proyectos",
        "filename": "16-triangulo-de-hierro-gestion-proyectos.html",
        "theme": "theme-gold",
        "category": "Gestión de Proyectos",
        "badge": "16 · Dirección de Proyectos",
        "title": "El Triángulo de Hierro: Triple Restricción",
        "desc": "Simulador interactivo de la Triple Restricción clásica: Alcance, Tiempo y Costo/Recursos con impacto en Calidad.",
        "features": [
            "Visualizador vectorial reactivo del triángulo y punto de tensión",
            "Simulación de compensaciones (Trade-offs) y cálculo de déficit",
            "Casos preconfigurados: Crisis de Alcance, Recorte Presupuestal y Crash"
        ],
        "btnId": "btn-goto-triangle"
    },
    {
        "id": "17",
        "slug": "17-edt-wbs-descomposicion-trabajo",
        "filename": "17-edt-wbs-descomposicion-trabajo.html",
        "theme": "theme-green",
        "category": "Gestión de Proyectos",
        "badge": "17 · Gestión del Alcance",
        "title": "EDT / WBS: Descomposición del Trabajo",
        "desc": "Constructor interactivo de la Estructura de Descomposición del Trabajo según los principios de Marion E. Haynes y el PMBOK.",
        "features": [
            "Visualizador jerárquico multinivel con código de numeración decimal",
            "Verificador en vivo de la Regla del 100% y detección de solapamientos",
            "Diccionario EDT automatizado con criterios de aceptación de entregables"
        ],
        "btnId": "btn-goto-wbs"
    },
    {
        "id": "18",
        "slug": "18-inyeccion-dependencias-constructores-primarios-csharp",
        "filename": "18-inyeccion-dependencias-constructores-primarios-csharp.html",
        "theme": "theme-purple",
        "category": "Arquitectura & Backend",
        "badge": "18 · Arquitectura & Backend",
        "title": "Inyección de Dependencias & C# 12",
        "desc": "Laboratorio interactivo de ciclos de vida Transient, Scoped, Singleton, detección de Dependencia Cautiva y Constructores Primarios.",
        "features": [
            "Simulador de Scopes y resolución de GUIDs en tiempo real",
            "Detección visual de Captive Dependency (ValidateScopes = true)",
            "Comparador interactivo de sintaxis C# 11 vs C# 12"
        ],
        "btnId": "btn-goto-di-csharp"
    },
    {
        "id": "19",
        "slug": "19-efcore-concurrencia-dbcontextfactory-optimizacion",
        "filename": "19-efcore-concurrencia-dbcontextfactory-optimizacion.html",
        "theme": "theme-green",
        "category": "Arquitectura & Backend",
        "badge": "19 · EF Core & Concurrencia",
        "title": "EF Core: Concurrencia & Optimización",
        "desc": "Simulador multihilo de Task.WhenAll con IDbContextFactory, optimización de memoria con AsNoTracking vs IdentityResolution y Native AOT.",
        "features": [
            "Simulador de colisión multihilo y solución con IDbContextFactory",
            "Inspector de nodos en Heap (.AsNoTracking vs IdentityResolution)",
            "Benchmark interactivo de Native AOT vs JIT y Source Generators"
        ],
        "btnId": "btn-goto-efcore-opt"
    },
    {
        "id": "20",
        "slug": "20-grpc-patrones-comunicacion-streaming",
        "filename": "20-grpc-patrones-comunicacion-streaming.html",
        "theme": "theme-cyan",
        "category": "Arquitectura & Web",
        "badge": "20 · gRPC & Streaming",
        "title": "gRPC & Patrones de Streaming",
        "desc": "Protocolo de alto rendimiento basado en HTTP/2 y Protocol Buffers. Explora Unary, Server, Client y Bidirectional Streaming frente a REST.",
        "features": [
            "Simulador reactivo de los 4 canales de streaming gRPC",
            "Duelo de tamaño en bytes: Protocol Buffers vs JSON",
            "Multiplexación HTTP/2 y erradicación del bloqueo de cabeza de línea"
        ],
        "btnId": "btn-goto-grpc"
    },
    {
        "id": "21",
        "slug": "21-graphql-over-under-fetching-hotchocolate",
        "filename": "21-graphql-over-under-fetching-hotchocolate.html",
        "theme": "theme-coral",
        "category": "Arquitectura & Web",
        "badge": "21 · GraphQL & APIs",
        "title": "GraphQL & HotChocolate: Over/Under-fetching",
        "desc": "Paradigma declarativo que erradica el Over-fetching y Under-fetching de REST. Queries, Mutations y HotChocolate en .NET con EF Core.",
        "features": [
            "Laboratorio comparativo de tráfico de red REST vs GraphQL en vivo",
            "Proyección SQL nativa con HotChocolate [UseProjection] y EF Core",
            "Equivalencias directas entre Queries, Mutations y verbos HTTP REST"
        ],
        "btnId": "btn-goto-graphql"
    },
    {
        "id": "22",
        "slug": "22-jwt-autenticacion-tokens-seguridad",
        "filename": "22-jwt-autenticacion-tokens-seguridad.html",
        "theme": "theme-gold",
        "category": "Arquitectura & Backend",
        "badge": "22 · Seguridad & Autenticación",
        "title": "JWT: Tokens & Criptografía",
        "desc": "Mecanismo estándar de autenticación sin estado (RFC 7519). Anatomía de Header, Payload y Signature, mitigación XSS/CSRF y Refresh Tokens.",
        "features": [
            "Firmador criptográfico HMAC-SHA256 e inspector de tokens en vivo",
            "Diferenciación crucial: Firma digital vs Cifrado de datos (JWS vs JWE)",
            "Ciclo de vida y rotación segura de Access Tokens y Refresh Tokens"
        ],
        "btnId": "btn-goto-jwt"
    },
    {
        "id": "23",
        "slug": "23-ingenieria-software-error-defecto-falla-verificacion-validacion",
        "filename": "23-ingenieria-software-error-defecto-falla-verificacion-validacion.html",
        "theme": "theme-purple",
        "category": "Ingeniería de Software",
        "badge": "23 · Calidad & V&V",
        "title": "Error, Defecto, Falla & V&V",
        "desc": "Cadena causal formal IEEE (Error humano ➔ Defecto en código ➔ Falla en runtime) y marco de Barry Boehm para Verificación vs Validación.",
        "features": [
            "Simulador reactivo de inyección de defectos y activación en runtime",
            "Matriz 2x2 interactiva de Verificación vs Validación (Doctrina Boehm)",
            "Casos paradigmáticos reales: monitores hospitalarios y misiones espaciales"
        ],
        "btnId": "btn-goto-quality-vv"
    },
    {
        "id": "24",
        "slug": "24-ingenieria-software-metricas-confiabilidad-rocof-pofod-mttf-kloc",
        "filename": "24-ingenieria-software-metricas-confiabilidad-rocof-pofod-mttf-kloc.html",
        "theme": "theme-green",
        "category": "Ingeniería de Software",
        "badge": "24 · Confiabilidad & Métricas",
        "title": "Métricas de Confiabilidad: ROCOF, POFOD & MTTF",
        "desc": "Ingeniería cuantitativa de confiabilidad (SRE): evaluación de POFOD, ROCOF, MTTF, MTTR, disponibilidad en nueves y densidad de defectos por KLOC.",
        "features": [
            "Calculadora reactiva en tiempo real con sliders de telemetría y nueves",
            "Presets guiados de la industria: NASA, Frenos ABS, FinTech y Apps móviles",
            "Matriz de decisión para seleccionar la métrica adecuada según el dominio"
        ],
        "btnId": "btn-goto-reliability-metrics"
    },
    {
        "id": "25",
        "slug": "25-concurrencia-bajo-nivel-interlocked-monitor-primitivas-sincronizacion",
        "filename": "25-concurrencia-bajo-nivel-interlocked-monitor-primitivas-sincronizacion.html",
        "theme": "theme-coral",
        "category": "Arquitectura & Backend",
        "badge": "25 · Concurrencia & CPU",
        "title": "Concurrencia de Bajo Nivel: Interlocked & Monitor",
        "desc": "Ciclo Read-Modify-Write en CPU de x++, operaciones atómicas de hardware con Interlocked, descompilación de lock en Monitor.Enter/Exit y Mutex vs SemaphoreSlim.",
        "features": [
            "Simulador de condiciones de carrera con 4 hilos en paralelo (x++ vs Interlocked vs lock)",
            "Descompilación formal del compilador Roslyn y garantías de try-finally contra deadlocks",
            "Laboratorio de regulación de caudal (Resource Throttling) con SemaphoreSlim asíncrono"
        ],
        "btnId": "btn-goto-concurrency-primitives"
    },
    {
        "id": "26",
        "slug": "26-servicios-segundo-plano-resiliencia-polly-cache-dotnet",
        "filename": "26-servicios-segundo-plano-resiliencia-polly-cache-dotnet.html",
        "theme": "theme-green",
        "category": "Arquitectura & Backend",
        "badge": "26 · Resiliencia & Servicios",
        "title": "Servicios de Fondo, Resiliencia & Caché",
        "desc": "BackgroundService e IHostedService en .NET, cancelación cooperativa y apagado elegante (Graceful Shutdown), IMemoryCache vs Redis y Circuit Breaker con Polly.",
        "features": [
            "Simulador de ciclo de vida del Host y cancelación cooperativa con SIGTERM y CancellationToken",
            "Comparador de caché en memoria vs distribuida con expiración absoluta vs deslizante",
            "Máquina de estados en vivo del Circuit Breaker (Closed, Open, Half-Open) ante fallas HTTP"
        ],
        "btnId": "btn-goto-services-resilience"
    },
    {
        "id": "27",
        "slug": "27-estimacion-pert-ruta-critica-validacion-haynes",
        "filename": "27-estimacion-pert-ruta-critica-validacion-haynes.html",
        "theme": "theme-gold",
        "category": "Gestión de Proyectos",
        "badge": "27 · Estimación PERT & Validación",
        "title": "Estimación PERT & Validación de Estrategia",
        "desc": "Fórmulas matemáticas de PERT (Te, varianza y desviación estándar), actividades ficticias (dummy) en diagramas de red y los tres métodos formales de validación estratégica de Haynes.",
        "features": [
            "Calculadora de distribución Beta con 3 estimadores (To, Tm, Tp) y cálculo probabilístico de holguras",
            "Diagramador de red AOA con flechas punteadas para actividades dummy (0 tiempo, 0 recursos)",
            "Matriz de validación de estrategia en fase de definición: Mercado, Ensayo piloto y Simulación"
        ],
        "btnId": "btn-goto-pert-haynes"
    },
    {
        "id": "28",
        "slug": "28-direccionamiento-memoria-matrices-cairo",
        "filename": "28-direccionamiento-memoria-matrices-cairo.html",
        "theme": "theme-cyan",
        "category": "Estructuras & Algoritmos",
        "badge": "28 · Memoria & Matrices",
        "title": "Direccionamiento de Memoria en Matrices A[m×n]",
        "desc": "Mapeo de matrices bidimensionales a memoria RAM física lineal según Osvaldo Cairó. Fórmulas de Row-Major vs Column-Major, cálculo de offsets y tamaño de palabra w.",
        "features": [
            "Visualizador de proyección 2D a cinta 1D continua de RAM con resaltado de bytes y offsets",
            "Calculadora matemática paso a paso para Base 1 (Cairó / SPC) y Base 0 (C# / C++)",
            "Laboratorio evaluativo con reactivos oficiales de cálculo de direcciones físicas"
        ],
        "btnId": "btn-goto-cairo-matrix-loc"
    }
];
});
