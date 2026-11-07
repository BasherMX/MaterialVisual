# MaterialVisual

🚀 **Sitio en vivo:** https://bashermx.github.io/MaterialVisual/

Laboratorio didáctico interactivo de Ciencias de la Computación, Algoritmos, Arquitectura de Software, Bases de Datos, Gestión de Proyectos e Ingeniería de Software. Cuenta con **36 módulos interactivos** organizados estrictamente en los **6 Bloques Canónicos** de la bibliografía oficial, con simuladores reactivos en tiempo real, diseño Mobile-First y laboratorios de evaluación formativa.

---

## ⚡ Herramientas Transversales de Estudio & Evaluación

- **[🗂️ Arena Flashcards Anki & Minijuego Cyber-Survival](modulos/anki-arena.html)**:
  - Repaso de los **36 temas** con **Spaced Repetition** (método Anki) y minijuego arcade de **3 Vidas (❤️❤️❤️)**.
  - Combos por racha y recuperación de +1 Vida cada 5 aciertos consecutivos.
  - Modalidad dual: **Autoevaluación Honesta** u **Opción Múltiple (A, B, C, D)** con post-mortem explicativo.
  - Audio sintetizado Web Audio API y diseño 100% Mobile-First.

- **[📝 Simulador de Exámenes de Arquitectura & Software](modulos/simulador-examenes.html)**:
  - **Simulacro Maestro Nacional de 50 Reactivos** calibrados con simetría estricta anti-sesgo y rigor doctrinal absoluto.
  - **Motor de Evaluación Avanzado:** Temporizador regresivo configurable con alerta preventiva de ritmo para la Técnica de 3 Pasadas (alerta a los 75s).
  - **Aleatorización Criptográfica Pura (Fisher-Yates):** Barajado tanto del orden de los reactivos como de los incisos A, B, C, D con trazabilidad estricta de la clave correcta.
  - **Reintento Exclusivo de Preguntas Falladas (Fail-Log Retry):** Generador dinámico para reintentar de inmediato solo las preguntas con error.
  - **Exportador para Google NotebookLM:** Descarga de bancos de preguntas en Markdown estructurado (`.md`) para síntesis de audio e inmersión.
  - **PWA Full Offline:** Soporte completo fuera de línea mediante Service Worker (`sw.js`).

---

## Catálogo de Módulos (Organizados en los 6 Bloques Canónicos)

### 📌 Bloque I · Gestión de Proyectos (Marion E. Haynes · Caps. 1, 2 y 3)
- **[#01 · El Triángulo de Hierro: Triple Restricción](modulos/16-triangulo-de-hierro-gestion-proyectos.html)**: Balance dinámico entre Alcance, Tiempo y Costo con impacto en Calidad y escenarios de estrés.
- **[#02 · EDT / WBS: Descomposición del Trabajo](modulos/17-edt-wbs-descomposicion-trabajo.html)**: Descomposición jerárquica de entregables, Regla del 100%, numeración decimal y diccionario WBS.
- **[#03 · Estimación PERT & Validación de Estrategia](modulos/27-estimacion-pert-ruta-critica-validacion-haynes.html)**: Distribución Beta de PERT ($T_e, \sigma, \sigma^2$), actividades ficticias y validación según Marion E. Haynes.

### ⚡ Bloque II · Fundamentos de Programación & Algoritmos (Joyanes, Cairó, Noback, MIT 6.006, Cardona)
- **[#04 · Complejidad Computacional: Big O](modulos/01-complejidades-computacionales.html)**: Notación asintótica $\mathcal{O}(1)$ a $\mathcal{O}(2^n)$, simplificación, trampas y carrera algorítmica.
- **[#05 · Greedy vs Divide & Conquer](modulos/02-algoritmos-greedy-divide-venceras.html)**: Optimización voraz vs recursión estructurada (Mochila fraccionaria, Merge Sort, teoremas).
- **[#06 · Árboles AVL: Equilibrio en Movimiento](modulos/03-arboles-avl-autobalanceo.html)**: Árboles binarios auto-balanceados, factor de balance y rotaciones LL, RR, LR, RL.
- **[#07 · Explorador de Grafos: BFS vs DFS](modulos/04-bfs-dfs-recorridos-interactivos.html)**: Recorridos en grafos, Cola FIFO vs Pila LIFO, detección de ciclos y caminos mínimos.
- **[#08 · Programación Orientada a Objetos (POO)](modulos/13-programacion-orientada-objetos.html)**: Abstracción, Encapsulamiento, Herencia, Polimorfismo y despacho dinámico (vtable).
- **[#09 · Patrones de Diseño GoF (Gang of Four)](modulos/14-patrones-diseno-gof.html)**: Los 23 patrones clásicos clasificados en Creacionales, Estructurales y de Comportamiento.
- **[#10 · Direccionamiento de Memoria en Matrices A[m×n]](modulos/28-direccionamiento-memoria-matrices-cairo.html)**: Mapeo lineal en RAM por Renglón (Row-Major) y Columna (Column-Major) según Osvaldo Cairó.

### 🏛️ Bloque III · Ingeniería de Software & Calidad (Vazquez & Simões, Pressman, Sommerville, Toledo, SWEBOK v4)
- **[#11 · Las 3 Reglas de Oro de Theo Mandel](modulos/15-reglas-oro-theo-mandel-ui-ux.html)**: Principios de interacción humano-computadora (Dar el control al usuario, reducir la carga de memoria y hacer la interfaz consistente).
- **[#12 · Error, Defecto, Falla & V&V](modulos/23-ingenieria-software-error-defecto-falla-verificacion-validacion.html)**: Cadena ontológica IEEE 610.12, Verificación vs Validación y pruebas Smoke vs Monkey.
- **[#13 · Métricas de Confiabilidad: ROCOF, POFOD & MTTF](modulos/24-ingenieria-software-metricas-confiabilidad-rocof-pofod-mttf-kloc.html)**: Ingeniería cuantitativa (SRE): cálculo de POFOD, ROCOF, MTTF, MTBF, MTTR y disponibilidad en nueves.
- **[#14 · Executable UML (xUML) · Ian Sommerville](modulos/29-modelado-sistema-executable-uml-sommerville.html)**: Subconjunto estricto de UML para compilación directa MDA a código C# (.NET 8).
- **[#15 · Ingeniería de Requerimientos: Reglas de Negocio vs Requisitos Funcionales](modulos/31-ingenieria-requerimientos-reglas-negocio.html)**: Clasificador ontológico de Reglas de Negocio, Requisitos Funcionales y No Funcionales (IEEE 830 / ISO 29148) con Matriz de Trazabilidad RTM.
- **[#16 · Técnicas de Pruebas: Caja Negra & Caja Blanca (McCabe)](modulos/32-tecnicas-pruebas-caja-negra-blanca.html)**: Grafo de flujo de control (CFG), cálculo de Complejidad Ciclomática $V(G) = E - N + 2P$, caminos independientes, Partición de Equivalencia y Valores Límite (BVA).
- **[#17 · Modelos de Procesos de Software: Espiral de Boehm & Fases de RUP](modulos/35-modelos-procesos-espiral-boehm-rup.html)**: Gestión proactiva de riesgos en los 4 cuadrantes del Modelo en Espiral y la línea base arquitectónica de la fase de Elaboración en RUP.

### 🌐 Bloque IV · Plataformas de Programación & Web (.NET 8, Android, JavaScript/Web, REST, gRPC)
- **[#18 · Métodos HTTP y Códigos de Estado Estándar](modulos/11-metodos-http-y-codigos-de-estado.html)**: Semántica RFC 9110, métodos seguros e idempotentes y taxonomía de estados 1xx a 5xx.
- **[#19 · Modelo de Madurez de Richardson](modulos/12-modelo-madurez-richardson-rest.html)**: Los 4 niveles RESTful (POX, URIs de recursos, Verbos HTTP y HATEOAS).
- **[#20 · Inyección de Dependencias & C# 12](modulos/18-inyeccion-dependencias-constructores-primarios-csharp.html)**: Contenedor IoC de .NET 8, ciclos de vida Transient/Scoped/Singleton, prevención de Captive Dependencies y Primary Constructors.
- **[#21 · EF Core: Concurrencia & Optimización](modulos/19-efcore-concurrencia-dbcontextfactory-optimizacion.html)**: Concurrencia optimista, IDbContextFactory multihilo, prevención de explosión cartesiana con AsSplitQuery() y Native AOT.
- **[#22 · gRPC & Patrones de Streaming](modulos/20-grpc-patrones-comunicacion-streaming.html)**: Comunicación RPC sobre HTTP/2 y Protobuf con los 4 modos de streaming.
- **[#23 · GraphQL & HotChocolate: Over/Under-fetching](modulos/21-graphql-over-under-fetching-hotchocolate.html)**: APIs declarativas, DataLoaders para mitigación del problema N+1 y proyecciones directas en EF Core.
- **[#24 · JWT: Tokens & Criptografía](modulos/22-jwt-autenticacion-tokens-seguridad.html)**: Tokens RFC 7519, Header/Payload/Signature, validación HMAC-SHA256 vs RSA y rotación de Refresh Tokens.
- **[#25 · Concurrencia de Bajo Nivel: Interlocked & Monitor](modulos/25-concurrencia-bajo-nivel-interlocked-monitor-primitivas-sincronizacion.html)**: Operaciones atómicas de CPU (Interlocked), Monitor/lock en try-finally y prevención de Deadlock.
- **[#26 · Servicios de Fondo, Resiliencia & Caché](modulos/26-servicios-segundo-plano-resiliencia-polly-cache-dotnet.html)**: BackgroundService con CancellationToken, Circuit Breaker con Polly e IMemoryCache vs IDistributedCache.
- **[#27 · Arquitectura Móvil Android: Componentes ABCD & Ciclo de Vida](modulos/33-arquitectura-android-componentes-ciclo-vida.html)**: Actividades, Broadcast Receivers, Content Providers, Services, ciclo de vida de Activity con preservación en ViewModel y WorkManager.
- **[#28 · JavaScript Concurrente: Event Loop, Microtasks & Seguridad Web](modulos/34-javascript-concurrente-event-loop-web-security.html)**: Call Stack, Web APIs, Microtask Queue (Promesas) vs Task Queue (setTimeout), preflight CORS OPTIONS y Content Security Policy (CSP).

### 💾 Bloque V · Bases de Datos Relacionales & Físicas (Catherine Ricardo, Mercedes Marqués, Andy Oppel)
- **[#29 · Arquitectura ANSI/SPARC de Tres Niveles](modulos/05-arquitectura-ansi-sparc-tres-niveles.html)**: Nivel Externo, Conceptual e Interno, e independencia lógica y física de datos.
- **[#30 · Modelado Conceptual ERD y Notaciones](modulos/06-modelado-conceptual-erd-diagramas.html)**: Diagramas Entidad-Relación (Chen vs Crow's Foot), cardinalidades y conversión relacional.
- **[#31 · Normalización de Bases de Datos (1FN - BCNF)](modulos/07-normalizacion-bases-datos.html)**: Dependencias funcionales y descomposición progresiva para erradicar anomalías.
- **[#32 · Taxonomía de Sublenguajes SQL (DDL, DML, DCL, TCL)](modulos/08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl.html)**: Familias de comandos SQL, DELETE vs TRUNCATE vs DROP y control transaccional.
- **[#33 · Propiedades ACID y Axiomas de Armstrong](modulos/09-acid-y-axiomas-de-armstrong.html)**: Garantías transaccionales ACID y cálculo de dependencias funcionales con los axiomas de Armstrong.
- **[#34 · Diseño Físico: Índices y Árboles B+](modulos/10-diseno-fisico-indices-arbol-b-plus.html)**: Índices agrupados (Clustered) vs no agrupados, y estructura de Árbol B+ con división de nodos.
- **[#35 · Estructuras de Indexación: Árbol B+ vs Tablas Hash](modulos/30-estructuras-indexacion-arbol-bplus-vs-hash.html)**: Laboratorio comparativo en pantalla dividida: búsquedas puntuales $O(1)$ vs escaneos de rango $O(\log N + K)$.

### 📊 Bloque VI · Business Intelligence & Información Electrónica (Luis Joyanes Aguilar)
- **[#36 · Business Intelligence & Data Warehouse: Modelado Dimensional & ETL](modulos/36-business-intelligence-data-warehouse-etl.html)**: Diseñador de Esquema en Estrella vs Copo de Nieve, comparativa de JOINs en SQL, filosofías Ralph Kimball (Bottom-Up) vs Bill Inmon (Top-Down 3FN) y pipelines ETL vs ELT.

---

## Arquitectura Técnica
- **Pure Vanilla Web:** Sin frameworks pesados ni dependencias externas.
- **PWA Full Offline:** Instalable en dispositivos móviles y ordenadores con `manifest.json` y `sw.js`.
- **Diseño Mobile-First:** Totalmente responsivo en smartphones (320px+), tablets y monitores de escritorio.
- **Sistema de Temas Centralizado:** Estilos compartidos en `shared/theme.css`, catálogo canónico en `shared/modules-data.js` y enrutador dinámico en `shared/nav.js`.
