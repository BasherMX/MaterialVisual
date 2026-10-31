/**
 * Material Visual · Catálogo Centralizado de Módulos Interactivos
 * Fuente de verdad única para la navegación y presentación de módulos.
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
      id: "01",
      slug: "01-arboles-avl-autobalanceo",
      filename: "01-arboles-avl-autobalanceo.html",
      theme: "theme-cyan",
      category: "Estructuras & Algoritmos",
      badge: "01 · Estructura Dinámica",
      title: "Árboles AVL: Equilibrio en Movimiento",
      desc: "Simulador interactivo de inserción y autobalanceo en árboles binarios de búsqueda auto-balanceados.",
      features: [
        "Cálculo en vivo de altura y factor de balance",
        "Detección de rotaciones simples y dobles (LL, RR, LR, RL)",
        "Historial de operaciones e inserción personalizada"
      ],
      btnId: "btn-goto-avl"
    },
    {
      id: "02",
      slug: "02-bfs-dfs-recorridos-interactivos",
      filename: "02-bfs-dfs-recorridos-interactivos.html",
      theme: "theme-gold",
      category: "Estructuras & Algoritmos",
      badge: "02 · Algoritmos de Recorrido",
      title: "Explorador de Grafos: BFS vs DFS",
      desc: "Visualización comparativa de algoritmos de búsqueda en anchura (Cola) y profundidad (Pila) sobre una misma red topológica.",
      features: [
        "Inspección visual de cola FIFO vs pila LIFO en vivo",
        "Seguimiento de estados: sin visitar, en frontera y visitados",
        "Pausa, avance por paso, reinicio y control de velocidad"
      ],
      btnId: "btn-goto-bfs"
    },
    {
      id: "03",
      slug: "03-complejidades-computacionales",
      filename: "03-complejidades-computacionales.html",
      theme: "theme-green",
      category: "Estructuras & Algoritmos",
      badge: "03 · Teoría y Rendimiento",
      title: "Complejidad Computacional: Big O",
      desc: "Laboratorio interactivo de las complejidades fundamentales O(1), O(log n), O(n), O(n log n) y O(n²) con simulaciones en vivo.",
      features: [
        "Demostraciones interactivas para O(1), O(log n), O(n), O(n log n) y O(n²)",
        "Reglas de simplificación: Término dominante, regla de la suma y constantes",
        "Simulador interactivo de reducción asintótica y eclipsamiento de n²"
      ],
      btnId: "btn-goto-bigo"
    },
    {
      id: "04",
      slug: "04-algoritmos-greedy-divide-venceras",
      filename: "04-algoritmos-greedy-divide-venceras.html",
      theme: "theme-coral",
      category: "Estructuras & Algoritmos",
      badge: "04 · Estrategias de Diseño",
      title: "Greedy vs Divide & Conquer",
      desc: "Comparativa detallada entre decisiones locales irrevocables (Devorador) y descomposición recursiva con combinación (Divide y Vencerás).",
      features: [
        "Camino más corto en grafos con nodos (Dijkstra) y cambio de monedas voraz",
        "Partición recursiva y combinación con Merge Sort y Búsqueda Binaria",
        "Galería ampliada: Huffman, Prim/Kruskal, Karatsuba, Strassen y Mochila"
      ],
      btnId: "btn-goto-paradigms"
    },
    {
      id: "05",
      slug: "05-programacion-orientada-objetos",
      filename: "05-programacion-orientada-objetos.html",
      theme: "theme-purple",
      category: "Diseño & UI/UX",
      badge: "05 · Paradigma Central",
      title: "Programación Orientada a Objetos (POO)",
      desc: "Laboratorio interactivo de los cuatro pilares fundamentales: Clases/Objetos, Encapsulamiento, Abstracción, Herencia y Polimorfismo.",
      features: [
        "Instanciación dinámica en memoria con atributos y métodos",
        "Blindaje de estado privado (getters/setters) y abstracción de motor",
        "Jerarquía de herencia y despacho polimórfico en tiempo de ejecución"
      ],
      btnId: "btn-goto-poo"
    },
    {
      id: "06",
      slug: "06-reglas-oro-theo-mandel-ui-ux",
      filename: "06-reglas-oro-theo-mandel-ui-ux.html",
      theme: "theme-amber",
      category: "Diseño & UI/UX",
      badge: "06 · Diseño UI / UX",
      title: "Las 3 Reglas de Oro de Theo Mandel",
      desc: "Doctrina de Roger Pressman para el diseño centrado en el usuario: Control, Reducción de carga de memoria y Consistencia de interfaz.",
      features: [
        "Pila de Undo/Redo y confirmación previa ante acciones destructivas",
        "Valores predeterminados inteligentes y metáforas analógicas",
        "Matriz de consistencia visual, posicional y operativa estándar"
      ],
      btnId: "btn-goto-uiux"
    },
    {
      id: "07",
      slug: "07-modelado-conceptual-erd-diagramas",
      filename: "07-modelado-conceptual-erd-diagramas.html",
      theme: "theme-cyan",
      category: "Bases de Datos",
      badge: "07 · Bases de Datos / Modelado",
      title: "Modelado Conceptual ERD y Notaciones",
      desc: "Comparativa gráfica de diagramas entidad-relación: Peter Chen, Information Engineering (Pata de Gallo), IDEF1X y diagramas de clases UML.",
      features: [
        "Entidades fuertes, entidades débiles dependientes e identificadores",
        "Conexiones y cardinalidades mínimas/máximas (uno a uno, uno a varios, varios a varios)",
        "Jerarquías de generalización (supertipos/subtipos) y Matriz CRUD"
      ],
      btnId: "btn-goto-erd"
    },
    {
      id: "08",
      slug: "08-normalizacion-bases-datos",
      filename: "08-normalizacion-bases-datos.html",
      theme: "theme-green",
      category: "Bases de Datos",
      badge: "08 · Diseño Lógico / Codd",
      title: "Normalización de Bases de Datos (1FN - BCNF)",
      desc: "Metodología de diseño lógico relacional para eliminar anomalías de inserción, eliminación y actualización según Codd, Oppel y Marqués.",
      features: [
        "Paso a paso interactivo: De factura no normalizada hasta 1FN, 2FN y 3FN",
        "Detección de dependencias funcionales parciales y transitivas",
        "Simulador en vivo de anomalías y criterios de desnormalización controlada"
      ],
      btnId: "btn-goto-norm"
    },
    {
      id: "09",
      slug: "09-triangulo-de-hierro-gestion-proyectos",
      filename: "09-triangulo-de-hierro-gestion-proyectos.html",
      theme: "theme-gold",
      category: "Gestión de Proyectos",
      badge: "09 · Gestión de Proyectos",
      title: "El Triángulo de Hierro: Triple Restricción",
      desc: "Dinámica de equilibrio entre Alcance, Tiempo y Costo con impacto directo en la Calidad según Sommerville y Pressman.",
      features: [
        "Simulador vectorial del triángulo con cálculo dinámico de calidad",
        "Casos preestablecidos: Crash urgencia, Scope Creep, recortes y MVP",
        "Máxima de los dos de tres, Ley de Brooks y gestión de deuda técnica"
      ],
      btnId: "btn-goto-iron"
    },
    {
      id: "10",
      slug: "10-edt-wbs-descomposicion-trabajo",
      filename: "10-edt-wbs-descomposicion-trabajo.html",
      theme: "theme-purple",
      category: "Gestión de Proyectos",
      badge: "10 · Planificación / Haynes",
      title: "EDT / WBS: Descomposición del Trabajo",
      desc: "Estructura de Descomposición del Trabajo según Marion E. Haynes: paquetes de trabajo (Work Packages), regla del 100% y diccionario de la EDT.",
      features: [
        "Árbol jerárquico interactivo multinivel (Proyecto, Entregables y Paquetes de Trabajo)",
        "Diccionario de la EDT dinámico: responsables, criterios de aceptación y esfuerzo",
        "Proyectos preestablecidos: App E-Commerce, Modernización de BD y Seminario TI"
      ],
      btnId: "btn-goto-wbs"
    },
    {
      id: "11",
      slug: "11-modelo-madurez-richardson-rest",
      filename: "11-modelo-madurez-richardson-rest.html",
      theme: "theme-cyan",
      category: "Arquitectura & Web",
      badge: "11 · Arquitectura Web / REST",
      title: "Modelo de Madurez de Richardson",
      desc: "Clasificación de 4 niveles concebida por Leonard Richardson y Martin Fowler hacia la verdadera arquitectura RESTful y desacoplamiento con hipermedios.",
      features: [
        "Nivel 0 (The Swamp of POX) vs Nivel 1 (Recursos) vs Nivel 2 (Verbos HTTP) vs Nivel 3 (HATEOAS)",
        "Simulador interactivo de paquetes HTTP y navegación de transiciones de estado",
        "Matriz de cumplimiento de criterios y diferencias con SOAP / RPC"
      ],
      btnId: "btn-goto-richardson"
    },
    {
      id: "12",
      slug: "12-metodos-http-y-codigos-de-estado",
      filename: "12-metodos-http-y-codigos-de-estado.html",
      theme: "theme-blue",
      category: "Arquitectura & Web",
      badge: "12 · Protocolos / RFC 9110",
      title: "Métodos HTTP y Códigos de Estado Estándar",
      desc: "Semántica profunda del protocolo HTTP: métodos seguros, idempotencia, reemplazo total con PUT vs parcial con PATCH y taxonomía de códigos de error.",
      features: [
        "Catálogo y reglas de GET, POST, PUT, PATCH, DELETE, OPTIONS y HEAD",
        "Laboratorio interactivo de idempotencia y simulación de efectos secundarios en BD",
        "Guía exhaustiva de familias de códigos: 2xx (Éxito), 3xx (Redirección), 4xx (Cliente) y 5xx (Servidor)"
      ],
      btnId: "btn-goto-http-methods"
    },
    {
      id: "13",
      slug: "13-patrones-diseno-gof",
      filename: "13-patrones-diseno-gof.html",
      theme: "theme-purple",
      category: "Diseño & UI/UX",
      badge: "13 · Arquitectura / GoF",
      title: "Patrones de Diseño GoF (Gang of Four)",
      desc: "Catálogo canónico de los 23 patrones de Gamma, Helm, Johnson y Vlissides: Creacionales, Estructurales y de Comportamiento con simuladores y diagramas UML.",
      features: [
        "Mesa de trabajo interactiva: Singleton, Factory, Builder, Adapter, Decorator, Observer, Strategy y State",
        "Diagramas de clases conceptuales (UML) y banco de pruebas de eventos en memoria",
        "Matriz clasificatoria completa de los 23 patrones de la literatura clásica"
      ],
      btnId: "btn-goto-gof"
    },
    {
      id: "14",
      slug: "14-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl",
      filename: "14-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl.html",
      theme: "theme-cyan",
      category: "Bases de Datos",
      badge: "14 · Bases de Datos / SQL",
      title: "Taxonomía de Sublenguajes SQL (DDL, DML, DCL, TCL)",
      desc: "Arquitectura funcional del estándar ANSI/ISO SQL: Definición (DDL), Manipulación y Consultas (DML/DQL), Control de Acceso (DCL) y Transacciones ACID (TCL).",
      features: [
        "Simulador interactivo de RDBMS con motor de catálogo, almacenamiento, RBAC y WAL",
        "El duelo canónico: DELETE vs TRUNCATE vs DROP a fondo (memoria, disco, triggers y rollback)",
        "Laboratorio de clasificación y quiz de preguntas técnicas con retroalimentación en vivo"
      ],
      btnId: "btn-goto-sql-taxonomy"
    }
  ];
});

