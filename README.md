# MaterialVisual

🚀 **Sitio en vivo:** https://bashermx.github.io/MaterialVisual/

Laboratorio didáctico interactivo de Ciencias de la Computación, Algoritmos, Arquitectura de Software, Bases de Datos y Gestión de Proyectos. Todos los módulos cuentan con simuladores reactivos en tiempo real, trazabilidad paso a paso, diseño Mobile-First y laboratorios de evaluación formativa (quizzes).

---

## ⚡ Herramienta Transversal de Repaso Activo

- **[🗂️ Arena Flashcards Anki & Minijuego Cyber-Survival](modulos/anki-arena.html)**:
  - Repaso de los 17 temas con **Spaced Repetition** (método Anki) y minijuego arcade de **3 Vidas (❤️❤️❤️)**.
  - Combos por racha y recuperación de +1 Vida cada 5 aciertos consecutivos (máx. 3 vidas).
  - Modalidad de respuesta dual: **Autoevaluación Honesta** (por defecto) u **Opción Múltiple (A, B, C, D)** con post-mortem explicativo.
  - Generación procedural de audio sintetizado Web Audio API y diseño 100% Mobile-First con flip 3D.

---

## Catálogo de Módulos (Organizados por Área Temática)

### 🧩 1. Ciencias de la Computación, Algoritmos y Estructuras de Datos
- **[01 · Complejidad Computacional: Big O](modulos/01-complejidades-computacionales.html)**: Notación asintótica O(1) a O(2ⁿ), análisis de operaciones elementales y trampas comunes.
- **[02 · Greedy vs Divide & Conquer](modulos/02-algoritmos-greedy-divide-venceras.html)**: Optimización voraz vs recursión estructurada (Mochila fraccionaria, Merge Sort, teoremas).
- **[03 · Árboles AVL: Equilibrio en Movimiento](modulos/03-arboles-avl-autobalanceo.html)**: Árboles binarios auto-balanceados, factor de balance y rotaciones simples/dobles (LL, RR, LR, RL).
- **[04 · Explorador de Grafos: BFS vs DFS](modulos/04-bfs-dfs-recorridos-interactivos.html)**: Recorridos en grafos, Cola FIFO vs Pila LIFO, detección de ciclos y caminos mínimos.

### 🗄️ 2. Bases de Datos y Almacenamiento de Información
- **[05 · Arquitectura ANSI/SPARC de Tres Niveles](modulos/05-arquitectura-ansi-sparc-tres-niveles.html)**: Nivel Externo, Conceptual/Lógico e Interno, mapeos e independencias físicas/lógicas (Doctrina Oppel).
- **[06 · Modelado Conceptual ERD y Notaciones](modulos/06-modelado-conceptual-erd-diagramas.html)**: Diagramas Entidad-Relación (Chen, Martin Crow's Foot, Min/Max), derivación a DDL SQL.
- **[07 · Normalización de Bases de Datos (1FN - BCNF)](modulos/07-normalizacion-bases-datos.html)**: Eliminación de redundancias y anomalías de actualización, dependencias funcionales completas y transitivas.
- **[08 · Taxonomía de Sublenguajes SQL (DDL, DML, DCL, TCL)](modulos/08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl.html)**: Familias del estándar SQL, duelo DELETE vs TRUNCATE vs DROP, gobernanza de permisos y puntos de control `SAVEPOINT`.
- **[09 · Propiedades ACID y Axiomas de Armstrong](modulos/09-acid-y-axiomas-de-armstrong.html)**: Garantías transaccionales (Atomicidad, Consistencia, Aislamiento, Durabilidad con WAL) y motor de inferencia de dependencias funcionales (Reflexividad, Aumento, Transitividad).
- **[10 · Diseño Físico: Índices y Árboles B+](modulos/10-diseno-fisico-indices-arbol-b-plus.html)**: Estructuras de almacenamiento en disco, Índices Clustered vs Non-Clustered y visualizador de Árbol B+ interactivo con división de nodos (*split*).

### 🌐 3. Arquitectura de Software y Protocolos Web
- **[11 · Métodos HTTP y Códigos de Estado Estándar](modulos/11-metodos-http-y-codigos-de-estado.html)**: Semántica RFC 9110, métodos seguros e idempotentes (GET, POST, PUT, DELETE, PATCH) y bloques 1xx-5xx.
- **[12 · Modelo de Madurez de Richardson](modulos/12-modelo-madurez-richardson-rest.html)**: Los 4 niveles hacia la gloria de REST (POX, URIs, Verbos HTTP y HATEOAS).

### 🎨 4. Paradigmas de Software y Experiencia de Usuario
- **[13 · Programación Orientada a Objetos (POO)](modulos/13-programacion-orientada-objetos.html)**: Abstracción, Encapsulamiento, Herencia, Polimorfismo y despacho dinámico en tiempo de ejecución.
- **[14 · Patrones de Diseño GoF (Gang of Four)](modulos/14-patrones-diseno-gof.html)**: Catálogo integral de los 23 patrones de diseño (Creacionales, Estructurales y de Comportamiento).
- **[15 · Las 3 Reglas de Oro de Theo Mandel](modulos/15-reglas-oro-theo-mandel-ui-ux.html)**: Principios de interacción humano-computadora (Dar el control al usuario, reducir la carga de memoria y hacer la interfaz consistente).

### 📈 5. Gestión de Proyectos y Dirección de Software
- **[16 · El Triángulo de Hierro: Triple Restricción](modulos/16-triangulo-de-hierro-gestion-proyectos.html)**: Balance dinámico entre Alcance, Tiempo y Costo/Recursos con impacto en Calidad.
- **[17 · EDT / WBS: Descomposición del Trabajo](modulos/17-edt-wbs-descomposicion-trabajo.html)**: Estructura jerárquica de entregables, Regla del 100%, código de numeración decimal y diccionario WBS (Marion E. Haynes & PMBOK).

### ⚙️ 6. Arquitectura Backend, C# 12 & Entity Framework Core
- **[18 · Inyección de Dependencias & C# 12](modulos/18-inyeccion-dependencias-constructores-primarios-csharp.html)**: Contenedor IoC en .NET, Transient vs Scoped vs Singleton, prevención de dependencias cautivas (*Captive Dependencies*) y Constructores Primarios en C# 12.
- **[19 · EF Core: Concurrencia & Optimización](modulos/19-efcore-concurrencia-dbcontextfactory-optimizacion.html)**: Concurrencia en `DbContext` y paralelización limpia con `Task.WhenAll` e `IDbContextFactory`, optimización de memoria con `.AsNoTracking()` vs `.AsNoTrackingWithIdentityResolution()` y rendimiento de runtime con **Native AOT** y JSON Source Generators vs JIT.

---

## Arquitectura Técnica
- **Pure Vanilla Web:** Sin frameworks pesados ni dependencias externas.
- **Offline & Standalone:** Compatible con `file:///` local y GitHub Pages.
- **Diseño Mobile-First:** Totalmente responsivo en smartphones (320px+), tablets y monitores de escritorio.
- **Sistema de Temas Centralizado:** Estilos compartidos en `shared/theme.css`, catálogo único en `shared/modules-data.js` y enrutador dinámico en `shared/nav.js`.
