/**
 * Material Visual · Banco Canónico de Exámenes Integradores de Arquitectura e Ingeniería
 * Provee evaluaciones formales de opción múltiple estructuradas conforme a la bibliografía oficial.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MATERIAL_EXAMS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    {
      id: "examen-integrador-tech-2026",
      title: "Examen Integrador Profesional · Ciencias de la Computación & Arquitectura de Sistemas",
      badge: "EXAMEN INTEGRAL OFICIAL",
      category: "Evaluación Integral",
      description: "30 reactivos de alta exigencia técnica que abarcan los 30 módulos formativos de la plataforma: algoritmos, bases de datos relacionales, arquitectura backend en .NET 8, concurrencia de hardware, métricas de confiabilidad, gestión de proyectos (Haynes) y modelado formal (Sommerville / Cairó).",
      author: "Comité Técnico de Arquitectura de Software",
      version: "2.4",
      timeLimitMinutes: 60,
      passingScore: 80,
      immediateFeedback: false,
      shuffleOptions: true,
      shuffleQuestions: false,
      totalQuestions: 30,
      questions: [
        // 1. Módulo 01: Big O
        {
          id: "tech-q01",
          number: 1,
          moduleRef: "01",
          text: "Al analizar la complejidad computacional temporal en el peor de los casos (Worst Case) de un algoritmo recursivo que divide el problema en dos mitades y realiza una recombinación lineal de los elementos (como Merge Sort), ¿cuál es la notación asintótica estricta correspondiente según el Teorema Maestro?",
          options: [
            "O(n log n)",
            "O(n²)",
            "O(log n)",
            "O(2ⁿ)"
          ],
          correct: 0,
          feedback: "La recurrencia clásica de Divide y Vencerás T(n) = 2T(n/2) + O(n) produce una complejidad temporal estricta de O(n log n). El árbol de recursión tiene una profundidad de log₂(n) niveles y en cada nivel se procesan exactamente n elementos durante la mezcla.",
          reference: "Donald Knuth & Thomas H. Cormen (Introduction to Algorithms)"
        },
        // 2. Módulo 02: Greedy vs D&C
        {
          id: "tech-q02",
          number: 2,
          moduleRef: "02",
          text: "En la resolución del clásico problema de la Mochila (Knapsack Problem), ¿bajo qué condición matemática estricta garantiza un enfoque voraz (Greedy) la obtención de la solución óptima global?",
          options: [
            "Únicamente cuando los elementos son divisibles y pueden fraccionarse en partes continuas (Problema de la Mochila Fraccionaria).",
            "Siempre, tanto en la variante discreta 0/1 como en la fraccionaria, ordenando por peso absoluto.",
            "Solo si la capacidad de la mochila es un número primo mayor que el total de elementos.",
            "Cuando se aplica una estrategia de ordenamiento basada en el menor costo computacional de memoria RAM."
          ],
          correct: 0,
          feedback: "El algoritmo voraz (Greedy) solo garantiza el óptimo global en la Mochila Fraccionaria, ordenando por valor específico (valor/peso). En la Mochila 0/1 (elementos enteros indivisibles), la elección voraz local puede dejar espacio desaprovechado, requiriendo Programación Dinámica.",
          reference: "Cormen, Leiserson, Rivest & Stein (Algoritmos)"
        },
        // 3. Módulo 03: Árboles AVL
        {
          id: "tech-q03",
          number: 3,
          moduleRef: "03",
          text: "En un árbol binario de búsqueda balanceado AVL, tras insertar un nodo en el subárbol derecho del hijo izquierdo de la raíz provocando un factor de equilibrio de -2 (o desbalance Izquierda-Derecha), ¿qué operación de reestructuración matemática restaura el invariante AVL?",
          options: [
            "Rotación Doble Izquierda-Derecha (LR): una rotación simple a la izquierda en el hijo izquierdo, seguida de una rotación simple a la derecha en la raíz desbalanceada.",
            "Rotación Simple a la Derecha (RR) directamente sobre la raíz del árbol.",
            "Una reconstrucción completa del árbol mediante recorrido en anchura (BFS).",
            "Eliminación inmediata del nodo recién insertado para prevenir la asimetría de memoria."
          ],
          correct: 0,
          feedback: "El caso Izquierda-Derecha (LR) es una discrepancia zig-zag no lineal. Se resuelve mediante una Rotación Doble: primero se rota a la izquierda el hijo izquierdo para transformar el desbalance en un caso puro Izquierda-Izquierda (LL), y luego se rota a la derecha la raíz desbalanceada.",
          reference: "Georgy Adelson-Velsky & Evgenii Landis (Árboles AVL)"
        },
        // 4. Módulo 04: Grafos BFS vs DFS
        {
          id: "tech-q04",
          number: 4,
          moduleRef: "04",
          text: "Si se requiere determinar el camino más corto en número de aristas entre dos vértices dentro de un grafo no ponderado, ¿cuál es el algoritmo de exploración óptimo y qué estructura de datos requiere?",
          options: [
            "Búsqueda en Anchura (BFS), utilizando una estructura de datos de Cola (FIFO) para explorar los vértices nivel por nivel.",
            "Búsqueda en Profundidad (DFS), empleando una estructura de Pila (LIFO) recursiva.",
            "El algoritmo de Bellman-Ford, utilizando un montículo binario de mínimos.",
            "Recorrido post-orden en un árbol de expansión mínima utilizando una tabla hash de dispersión."
          ],
          correct: 0,
          feedback: "BFS (Breadth-First Search) visita sistemáticamente todos los vértices a distancia k antes de avanzar a los de distancia k+1 gracias a la disciplina FIFO de una Cola, garantizando encontrar la ruta más corta en aristas. DFS no garantiza la ruta mínima.",
          reference: "Robert Sedgewick (Algorithms) & Cormen"
        },
        // 5. Módulo 05: ANSI/SPARC 3 Niveles
        {
          id: "tech-q05",
          number: 5,
          moduleRef: "05",
          text: "Dentro de la arquitectura canónica ANSI/SPARC de tres niveles para DBMS (doctrina Oppel), ¿qué nivel define la estructura lógica global de toda la base de datos para la comunidad de usuarios, ocultando los detalles físicos de almacenamiento en disco?",
          options: [
            "Nivel Conceptual (o Lógico).",
            "Nivel Interno (o Físico).",
            "Nivel Externo (Vistas de Usuario).",
            "Nivel de Transporte de Red (TDS)."
          ],
          correct: 0,
          feedback: "El Nivel Conceptual describe todas las entidades, relaciones, restricciones de integridad y tipos de datos de forma global y agnóstica al hardware. El Nivel Externo son las vistas particulares de cada usuario, y el Nivel Interno detalla la organización física de archivos y punteros en disco.",
          reference: "Andy Oppel (Bases de Datos) & Estándar ANSI/X3/SPARC"
        },
        // 6. Módulo 06: Modelado Conceptual ERD
        {
          id: "tech-q06",
          number: 6,
          moduleRef: "06",
          text: "En el diseño conceptual de bases de datos mediante Diagramas Entidad-Relación (ERD), ¿qué caracteriza formalmente a una 'Entidad Débil' y cómo se representa en la notación canónica de Peter Chen?",
          options: [
            "Es una entidad cuya existencia depende de una entidad fuerte propietaria y carece de clave primaria propia; se representa con un rectángulo con doble borde.",
            "Es una tabla que contiene columnas con valores nulos; se dibuja con una elipse con línea punteada.",
            "Es una relación N:M que ha sido desnormalizada; se ilustra con un rombo sin líneas de cardinalidad.",
            "Es un atributo multivaluado que se almacena en memoria caché externa."
          ],
          correct: 0,
          feedback: "En la notación de Chen, una Entidad Débil (Weak Entity) no puede identificarse por sus propios atributos y depende de una entidad dominante mediante una relación de identificación (rombo doble). Su clave parcial (discriminador) se subraya con línea discontinua.",
          reference: "Peter Chen (The Entity-Relationship Model) & Elmasri-Navathe"
        },
        // 7. Módulo 07: Normalización
        {
          id: "tech-q07",
          number: 7,
          moduleRef: "07",
          text: "Una tabla relacional ya se encuentra en Primera Forma Normal (1FN) y posee una clave primaria compuesta por dos atributos (A, B). Si un atributo no clave C depende funcionalmente únicamente de A (A ➔ C), ¿qué anomalía formal se presenta y cómo se alcanza la Segunda Forma Normal (2FN)?",
          options: [
            "Presenta una Dependencia Parcial; para alcanzar 2FN se debe descomponer la tabla separando el atributo dependiente (A, C) en una nueva relación.",
            "Presenta una Dependencia Transitiva; para alcanzar 2FN se debe crear un índice agrupado sobre B.",
            "Presenta una Dependencia Multivaluada; se resuelve convirtiendo el campo C en una clave foránea hacia la tabla maestra.",
            "La tabla ya cumple 2FN automáticamente porque carece de grupos repetitivos."
          ],
          correct: 0,
          feedback: "La 2FN prohíbe las dependencias funcionales parciales: todo atributo no clave debe depender de la totalidad de la clave primaria, no de una fracción de ella. La solución consiste en proyectar {A, C} en una relación independiente.",
          reference: "Edgar F. Codd (A Relational Model of Data for Large Shared Data Banks)"
        },
        // 8. Módulo 08: Sublenguajes SQL
        {
          id: "tech-q08",
          number: 8,
          moduleRef: "08",
          text: "En la taxonomía formal del estándar SQL ANSI/ISO, ¿cuál es la diferencia técnica de ejecución y registro transaccional entre las sentencias 'DELETE FROM Clientes;' y 'TRUNCATE TABLE Clientes;'?",
          options: [
            "'DELETE' es una operación DML que evalúa fila por fila y registra cada eliminación individualmente en el archivo WAL/log de transacciones; 'TRUNCATE' es DDL, desasigna páginas de datos de forma masiva y es mínimamente registrada.",
            "'TRUNCATE' pertenece a DCL y solo puede ser invocado por el usuario administrador 'sa'; 'DELETE' pertenece a TCL.",
            "'DELETE' elimina la definición de la tabla del diccionario de datos; 'TRUNCATE' solo oculta las filas temporalmente.",
            "Ambas sentencias son idénticas en rendimiento y consumo de memoria del motor relacional."
          ],
          correct: 0,
          feedback: "DELETE es DML: dispara triggers de eliminación, valida constraints por fila y genera un volumen masivo de log. TRUNCATE es DDL: no dispara triggers row-level, desasigna directamente las extensiones de almacenamiento y restablece las columnas identity a su semilla original.",
          reference: "C.J. Date & Guía de Motores Relacionales SQL"
        },
        // 9. Módulo 09: ACID & Axiomas de Armstrong
        {
          id: "tech-q09",
          number: 9,
          moduleRef: "09",
          text: "Dentro del conjunto canónico de los Axiomas de Armstrong para inferir dependencias funcionales en bases de datos relacionales, ¿qué establece la regla de 'Aumento' (Augmentation)?",
          options: [
            "Si X ➔ Y se cumple en una relación, entonces XZ ➔ YZ se cumple para cualquier conjunto de atributos Z.",
            "Si X ➔ Y y Y ➔ Z se cumplen, entonces X ➔ Z se cumple obligatoriamente.",
            "Si Y es un subconjunto de X (Y ⊆ X), entonces X ➔ Y es una dependencia trivial.",
            "Si X ➔ Y y X ➔ Z, entonces X ➔ YZ representa la suma de cardinalidades de la tabla."
          ],
          correct: 0,
          feedback: "Los tres axiomas primarios de William W. Armstrong son: Reflexividad (si Y ⊆ X, entonces X ➔ Y), Aumento (si X ➔ Y, entonces XZ ➔ YZ) y Transitividad (si X ➔ Y y Y ➔ Z, entonces X ➔ Z).",
          reference: "William W. Armstrong (1974) & Raghu Ramakrishnan"
        },
        // 10. Módulo 10: Índices & B+ Tree
        {
          id: "tech-q10",
          number: 10,
          moduleRef: "10",
          text: "¿Cuál es la característica arquitectónica de almacenamiento que diferencia a un Índice Agrupado (Clustered Index) de un Índice No Agrupado (Non-Clustered Index) en un motor relacional como SQL Server o PostgreSQL?",
          options: [
            "En el Índice Agrupado, las páginas hoja del árbol B+ contienen físicamente las filas completas de datos de la tabla, ordenadas físicamente según la clave del índice; solo puede existir uno por tabla.",
            "El Índice Agrupado almacena los datos en la memoria RAM y se borra al reiniciar el servidor.",
            "Pueden crearse hasta 255 índices agrupados independientes por cada tabla relacional.",
            "El Índice No Agrupado ordena físicamente el disco duro mediante desfragmentación magnética."
          ],
          correct: 0,
          feedback: "Una tabla solo puede tener un único orden físico, por lo que solo admite un Clustered Index (cuyas hojas son los datos reales). Los índices No Agrupados son estructuras auxiliares cuyos nodos hoja contienen punteros lógicos (clave clustered o RID) hacia la fila correspondiente.",
          reference: "Microsoft SQL Server Storage Internals & Ramakrishnan"
        },
        // 11. Módulo 11: HTTP Semantics RFC 9110
        {
          id: "tech-q11",
          number: 11,
          moduleRef: "11",
          text: "De acuerdo con el estándar RFC 9110 (HTTP Semantics), ¿cuál de los siguientes métodos de petición se define formalmente como 'Idempotente pero NO Seguro'?",
          options: [
            "PUT (o DELETE)",
            "GET",
            "POST",
            "HEAD"
          ],
          correct: 0,
          feedback: "Un método es seguro si no altera el estado del servidor (ej. GET, HEAD, OPTIONS). Un método es idempotente si múltiples peticiones idénticas producen exactamente el mismo efecto final en el servidor. PUT y DELETE modifican el estado (no son seguros) pero son idempotentes.",
          reference: "IETF RFC 9110: HTTP Semantics"
        },
        // 12. Módulo 12: Modelo de Madurez de Richardson
        {
          id: "tech-q12",
          number: 12,
          moduleRef: "12",
          text: "En el Modelo de Madurez de Richardson para APIs REST, ¿qué capacidad técnica distingue a una API que alcanza el Nivel 3 ('La Gloria de REST') frente a una de Nivel 2?",
          options: [
            "La incorporación de Controles Hipermediales como el Motor del Estado de la Aplicación (HATEOAS), incluyendo enlaces dinámicos ('_links') en las respuestas JSON.",
            "El uso estricto de verbos HTTP estándar (GET, POST, PUT, DELETE) con códigos de estado HTTP 2xx/4xx/5xx.",
            "La sustitución obligatoria de JSON por Protocol Buffers binarios de gRPC.",
            "La inclusión de autenticación multifactor biométrica en la cabecera Authorization."
          ],
          correct: 0,
          feedback: "Nivel 0: El pantano de POX (una sola URI, solo POST). Nivel 1: Recursos con URIs individuales. Nivel 2: Verbos HTTP semánticos y códigos de estado. Nivel 3: HATEOAS (Hypermedia As The Engine Of Application State), donde la respuesta guía al cliente sobre qué acciones puede realizar a continuación.",
          reference: "Leonard Richardson & Martin Fowler"
        },
        // 13. Módulo 13: POO & Despacho Dinámico
        {
          id: "tech-q13",
          number: 13,
          moduleRef: "13",
          text: "En el paradigma de Programación Orientada a Objetos implementado en la máquina virtual CLR de .NET, ¿a través de qué estructura en memoria se resuelve en tiempo de ejecución la invocación de un método sobreescrito ('override') mediante polimorfismo dinámico?",
          options: [
            "A través de la Tabla de Métodos Virtuales (vtable o MethodTable) asociada al Type Handle del objeto en el Heap.",
            "Mediante un bucle secuencial que inspecciona el código fuente C# con Reflection en cada llamada.",
            "Por medio del Stack Frame del hilo que copia el código binario en memoria caché L2.",
            "Directamente en tiempo de compilación mediante ligadura estática (Early Binding) en el ensamblado."
          ],
          correct: 0,
          feedback: "Cuando un método es virtual/override, el compilador emite la instrucción IL 'callvirt'. En runtime, el CLR consulta el puntero al MethodTable (vtable) del objeto real en el Heap para invocar la dirección de memoria de la implementación derivada concreta (despacho dinámico).",
          reference: "CLR via C# (Jeffrey Richter)"
        },
        // 14. Módulo 14: Patrones de Diseño GoF
        {
          id: "tech-q14",
          number: 14,
          moduleRef: "14",
          text: "Si se requiere permitir que un objeto altere su comportamiento dinámicamente cuando su estado interno cambia, de modo que parezca haber cambiado de clase (eliminando largas cadenas anidadas de 'switch' o 'if-else'), ¿qué patrón de diseño GoF es el indicado?",
          options: [
            "State (Comportamiento)",
            "Strategy (Comportamiento)",
            "Adapter (Estructural)",
            "Singleton (Creacional)"
          ],
          correct: 0,
          feedback: "El patrón State encapsula cada estado posible en una clase derivada independiente con la misma interfaz. El objeto contexto delega las operaciones al objeto estado actual, el cual puede transicionar el contexto hacia otro estado en runtime de forma limpia.",
          reference: "Gang of Four (Design Patterns: Elements of Reusable Object-Oriented Software)"
        },
        // 15. Módulo 15: Theo Mandel UI/UX
        {
          id: "tech-q15",
          number: 15,
          moduleRef: "15",
          text: "¿Cuáles son las Tres Reglas de Oro para el diseño de interfaces humano-computadora formuladas por Theo Mandel y citadas en la ingeniería de software?",
          options: [
            "1) Dar el control al usuario; 2) Reducir la carga de memoria del usuario; 3) Hacer la interfaz consistente.",
            "1) Minimizar el código JavaScript; 2) Maximizar el contraste cromático; 3) Prohibir el uso del ratón.",
            "1) Cargar en menos de 1 segundo; 2) Utilizar tipografía Serif; 3) Solicitar contraseña en cada pantalla.",
            "1) Forzar flujos lineales obligatorios; 2) Ocultar opciones avanzadas; 3) Automatizar el cierre de sesión cada 2 minutos."
          ],
          correct: 0,
          feedback: "Theo Mandel estipula: 1) Place the user in control (acciones reversibles, navegación flexible), 2) Reduce the user's memory load (reconocimiento sobre recuerdo, valores por omisión) y 3) Make the interface consistent (coherencia visual, terminológica y de comportamiento).",
          reference: "Theo Mandel (The Elements of User Interface Design)"
        },
        // 16. Módulo 16: Triángulo de Hierro & Brooks
        {
          id: "tech-q16",
          number: 16,
          moduleRef: "16",
          text: "¿Qué postula la célebre Ley de Brooks sobre la gestión de cronogramas en proyectos de ingeniería de software con retrasos?",
          options: [
            "'Agregar personal a un proyecto de software con retraso lo retrasa aún más' (Adding manpower to a late software project makes it later).",
            "'El costo de desarrollo de software se duplica cada 18 meses independientemente del tamaño del equipo'.",
            "'Todo defecto detectado en producción cuesta exactamente 10 veces más que en la fase de requerimientos'.",
            "'El tiempo de entrega es directamente proporcional al número de líneas de código escritas por día'."
          ],
          correct: 0,
          feedback: "Fred Brooks demostró que el costo de comunicación, la curva de aprendizaje y la necesidad de que los desarrolladores senior capaciten a los nuevos integrantes detrae tiempo del avance técnico, amplificando el retraso original.",
          reference: "Fred Brooks (The Mythical Man-Month)"
        },
        // 17. Módulo 17: EDT / WBS Regla del 100%
        {
          id: "tech-q17",
          number: 17,
          moduleRef: "17",
          text: "En la gestión del alcance según Marion E. Haynes y el PMI, ¿en qué consiste la 'Regla del 100%' al construir la Estructura de Descomposición del Trabajo (EDT / WBS)?",
          options: [
            "La EDT debe incluir el 100% de todo el trabajo definido por el alcance del proyecto y nada más; la suma del trabajo de los niveles hijos debe ser exactamente el 100% del nivel padre.",
            "Cada paquete de trabajo debe tener una probabilidad de éxito del 100% antes de iniciarse la codificación.",
            "El 100% de los programadores debe estar asignado a una tarea de la ruta crítica de forma continua.",
            "El presupuesto debe pagarse al 100% al momento de aprobar el acta de constitución del proyecto."
          ],
          correct: 0,
          feedback: "La regla del 100% es el principio rector de la EDT: no puede omitir ningún entregable requerido (evita olvidar trabajo necesario) y no puede contener nada fuera del alcance acordado (evita el Scope Creep o corrupción del alcance).",
          reference: "Marion E. Haynes (Project Management) & PMBOK Guide"
        },
        // 18. Módulo 18: Inyección de Dependencias & C# 12
        {
          id: "tech-q18",
          number: 18,
          moduleRef: "18",
          text: "En el contenedor de Inyección de Dependencias de ASP.NET Core, ¿qué grave patología arquitectónica ocurre si un servicio registrado como 'Singleton' recibe inyectado en su constructor a un servicio registrado con ciclo de vida 'Scoped'?",
          options: [
            "Dependencia Cautiva (Captive Dependency): la instancia Scoped queda capturada de por vida en la memoria por el Singleton, provocando colisiones multihilo y fugas de memoria con DbContext.",
            "Excepción inmediata de StackOverflowException al compilar el proyecto en modo Release.",
            "El contenedor IoC degrada el Singleton a ciclo de vida Transient automáticamente en runtime.",
            "La base de datos cancela todas las conexiones TCP activas por violación de seguridad."
          ],
          correct: 0,
          feedback: "Un Singleton nunca muere mientras la app esté viva. Al recibir un Scoped (diseñado para vivir solo durante una solicitud HTTP), ese Scoped jamás se libera ni se invoca su Dispose(), provocando que múltiples solicitudes concurrentes compartan la misma instancia no thread-safe (ej. DbContext).",
          reference: "Microsoft Dependency Injection Guidelines & Mark J. Price"
        },
        // 19. Módulo 19: EF Core & Northwind
        {
          id: "tech-q19",
          number: 19,
          moduleRef: "19",
          text: "Al ejecutar consultas paralelas con 'Task.WhenAll' sobre Entity Framework Core, ¿por qué es mandatorio utilizar 'IDbContextFactory<TContext>' en lugar de inyectar una única instancia de 'DbContext'?",
          options: [
            "Porque 'DbContext' no es thread-safe y su conexión subyacente y StateManager colapsan lanzando InvalidOperationException si dos hilos operan concurrentemente sobre él.",
            "Porque 'IDbContextFactory' compila las consultas a código máquina nativo eliminando el tiempo de conexión a SQL Server.",
            "Porque SQL Server prohíbe abrir más de un socket de red por cada servidor físico.",
            "Porque Task.WhenAll solo admite métodos síncronos que no utilicen el operador await."
          ],
          correct: 0,
          feedback: "DbContext es una unidad de trabajo ligera diseñada para un solo hilo de ejecución. IDbContextFactory permite fabricar instancias independientes y efímeras con 'await using var ctx = factory.CreateDbContextAsync()', logrando concurrencia real sin colisiones.",
          reference: "Entity Framework Core Team & Mark J. Price"
        },
        // 20. Módulo 20: gRPC & Streaming
        {
          id: "tech-q20",
          number: 20,
          moduleRef: "20",
          text: "¿Qué característica de HTTP/2 permite a gRPC transmitir cientos de solicitudes remotas concurrentes en ambas direcciones sin sufrir el problema de Bloqueo de Cabeza de Línea (Head-of-Line Blocking) a nivel de aplicación que aqueja a HTTP/1.1?",
          options: [
            "La multiplexación de tramas binarias (Frames) intercaladas en múltiples flujos (Streams) independientes sobre una única conexión TCP persistente.",
            "La compresión GZIP obligatoria de los paquetes TCP a nivel de tarjeta de red física.",
            "La apertura de 100 conexiones TCP paralelas por cada usuario autenticado.",
            "El cambio automático de protocolo a UDP plano cuando el tráfico excede 1 Gbps."
          ],
          correct: 0,
          feedback: "En HTTP/1.1, cada conexión TCP procesa una solicitud a la vez. En HTTP/2, los mensajes se dividen en frames binarios con identificador de stream, permitiendo entrelazar paquetes de peticiones y respuestas en una sola conexión TCP sin bloquearse mutuamente.",
          reference: "CNCF & gRPC Architecture Guide"
        },
        // 21. Módulo 21: GraphQL Over/Under-fetching
        {
          id: "tech-q21",
          number: 21,
          moduleRef: "21",
          text: "En el diseño de interfaces de servicios web, ¿qué patología de red define el término 'Under-fetching' y cómo la resuelve formalmente GraphQL?",
          options: [
            "Ocurre cuando un endpoint REST devuelve información insuficiente, forzando al cliente a encadenar múltiples peticiones de red sucesivas (problema N+1); GraphQL lo resuelve permitiendo consultar todo el grafo de relaciones en un único Query.",
            "Ocurre cuando el servidor envía megabytes de datos innecesarios que el cliente descarta.",
            "Ocurre cuando se agota la memoria del servidor de base de datos debido a un ataque DDoS.",
            "Ocurre cuando el tiempo de espera (timeout) de la solicitud HTTP expira antes de 30 segundos."
          ],
          correct: 0,
          feedback: "Over-fetching es recibir datos de más; Under-fetching es recibir datos de menos (ej. obtener una orden en /orders/1 y luego tener que llamar a /customers/5 y a /products/10). GraphQL permite especificar en una sola solicitud toda la jerarquía requerida.",
          reference: "GraphQL Foundation & Lee Byron"
        },
        // 22. Módulo 22: JWT RFC 7519
        {
          id: "tech-q22",
          number: 22,
          moduleRef: "22",
          text: "Respecto a la seguridad criptográfica del estándar JSON Web Token (RFC 7519), ¿cuál es la distinción fundamental entre un token firmado (JWS) y un token cifrado (JWE)?",
          options: [
            "En un JWS (JSON Web Signature) el payload viaja codificado en Base64Url y es legible en texto plano por cualquiera que intercepte el token; la firma solo garantiza autenticidad e integridad, no confidencialidad.",
            "En un JWS el payload está cifrado militarmente con AES-256 y nadie sin la clave privada puede leer su contenido.",
            "Un JWE no contiene cabecera ni firma criptográfica y solo funciona en redes locales.",
            "JWS solo puede ser firmado con contraseñas de menos de 8 caracteres alfanuméricos."
          ],
          correct: 0,
          feedback: "¡Trampa clásica de examen! Base64Url NO es cifrado; es una simple codificación de caracteres. Un JWS garantiza que el token no ha sido alterado (integridad) y que proviene del emisor legítimo (autenticidad), pero cualquiera puede decodificarlo. Para confidencialidad se requiere JWE.",
          reference: "IETF RFC 7519 (JSON Web Token) & RFC 7516 (JWE)"
        },
        // 23. Módulo 23: IEEE 610.12 (Error, Defecto, Falla)
        {
          id: "tech-q23",
          number: 23,
          moduleRef: "23",
          text: "De acuerdo con el estándar IEEE 610.12 y la ingeniería de software formal, ¿cuál es la relación causal precisa entre Error, Defecto (Bug) y Falla?",
          options: [
            "El Error es la equivocación mental humana; ésta introduce un Defecto estático en el código o documento; el cual, al ejecutarse bajo ciertas condiciones dinámicas, detona una Falla observable en el sistema.",
            "El Defecto es la acción del programador; la Falla es la línea de código; y el Error es la caída del servidor.",
            "Error, Defecto y Falla son sinónimos absolutos que pueden utilizarse indistintamente según el marco ágil.",
            "Una Falla solo puede ser provocada por interrupciones de energía eléctrica en el centro de datos."
          ],
          correct: 0,
          feedback: "Cadena causal formal: Human Error (mental) ➔ Inyecta un Fault/Defect (estático en artefacto) ➔ Que al ejecutarse produce una Failure (comportamiento externo dinámico incorrecto). Un defecto puede permanecer latente durante años si la entrada nunca lo ejecuta.",
          reference: "IEEE Standard 610.12 & ISO/IEC/IEEE 24765"
        },
        // 24. Módulo 24: Métricas de Confiabilidad SRE
        {
          id: "tech-q24",
          number: 24,
          moduleRef: "24",
          text: "Si un sistema bancario de misión crítica tiene un objetivo de disponibilidad del 99.99% ('cuatro nueves') en un año calendario continuo (365 días), ¿cuál es el tiempo máximo acumulado de inactividad permitido (Downtime Error Budget)?",
          options: [
            "Aproximadamente 52.6 minutos al año.",
            "Aproximadamente 8.76 horas al año.",
            "Exactamente 3.65 días al año.",
            "Cero segundos de inactividad tolerados."
          ],
          correct: 0,
          feedback: "Cálculo matemático: 365 días × 24 h/día × 60 min/hora = 525,600 minutos al año. Con 99.99% de disponibilidad, el margen de indisponibilidad es 0.01% (0.0001): 525,600 × 0.0001 = 52.56 minutos (menos de una hora al año). 99.9% permitiría 8.76 horas.",
          reference: "Google Site Reliability Engineering (SRE) & Ian Sommerville"
        },
        // 25. Módulo 25: Concurrencia de Bajo Nivel
        {
          id: "tech-q25",
          number: 25,
          moduleRef: "25",
          text: "Respecto al manejo de eventos en C# en entornos multihilo, ¿por qué es una mala práctica invocar los delegados de un evento dentro de un bloque 'lock (_syncRoot)'?",
          options: [
            "Porque invoca código externo desconocido con el cerrojo retenido; si un suscriptor intenta adquirir otro bloqueo o sincronizarse con un hilo llamador, se produce un riesgo crítico de inversión de bloqueos y Deadlock.",
            "Porque el recolector de basura suspende automáticamente la ejecución de delegados dentro de bloques lock.",
            "Porque la clase MulticastDelegate lanza System.ExecutionEngineException al recibir más de un suscriptor.",
            "Porque los eventos en C# solo pueden dispararse en aplicaciones de consola monohilo."
          ],
          correct: 0,
          feedback: "Nunca debes llamar a código foráneo o desconocido manteniendo un cerrojo (lock) adquirido. Si un suscriptor bloquea esperando otro recurso, o hace Invoke en el hilo de UI que a su vez espera el lock, el sistema colapsa en un Deadlock irrecuperable. La regla es copiar la referencia y disparar fuera del lock.",
          reference: "Framework Design Guidelines (Kwalina & Abrams) & Richter"
        },
        // 26. Módulo 26: BackgroundService & Resiliencia
        {
          id: "tech-q26",
          number: 26,
          moduleRef: "26",
          text: "En un servicio en segundo plano de .NET 8 que hereda de 'BackgroundService', ¿cuál es el mecanismo estándar para responder adecuadamente a una señal de apagado ordenado (Graceful Shutdown) enviada por el Host (SIGTERM)?",
          options: [
            "Monitorear periódicamente 'stoppingToken.IsCancellationRequested' y pasar el 'stoppingToken' a todas las operaciones asíncronas para abortar bucles limpiamente.",
            "Invocar 'Thread.CurrentThread.Abort()' para forzar la detención instantánea del proceso.",
            "Registrar un bloque 'try-catch' que capture 'OutOfMemoryException' y reinicie el contenedor.",
            "Utilizar 'GC.Collect(2, GCCollectionMode.Forced)' cada 500 milisegundos."
          ],
          correct: 0,
          feedback: "BackgroundService expone 'ExecuteAsync(CancellationToken stoppingToken)'. Ante un apagado (SIGTERM/Ctrl+C), el Host cancela el token. El servicio debe respetar la cancelación cooperativa en sus métodos asíncronos para permitir guardar estado antes del límite de tiempo (HostOptions.ShutdownTimeout).",
          reference: "Microsoft.Extensions.Hosting Documentation & Mark J. Price"
        },
        // 27. Módulo 27: Estimación PERT & Validación Haynes
        {
          id: "tech-q27",
          number: 27,
          moduleRef: "27",
          text: "De acuerdo con las fórmulas matemáticas canónicas de PERT (distribución Beta) expuestas por Marion E. Haynes, si una tarea tiene tiempo optimista To = 4 días, más probable Tm = 7 días y pesimista Tp = 16 días, ¿cuál es su Tiempo Esperado (Te) y su Varianza (σ²)?",
          options: [
            "Te = 8 días; Varianza (σ²) = 4 días².",
            "Te = 9 días; Varianza (σ²) = 2 días².",
            "Te = 7 días; Varianza (σ²) = 12 días².",
            "Te = 8.5 días; Varianza (σ²) = 16 días²."
          ],
          correct: 0,
          feedback: "Cálculo formal de PERT: Te = (To + 4Tm + Tp) / 6 = (4 + 4(7) + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 días. Desviación estándar σ = (Tp - To) / 6 = (16 - 4) / 6 = 12 / 6 = 2 días. Varianza σ² = (2)² = 4 días².",
          reference: "Marion E. Haynes (Administración de Proyectos) & PMI"
        },
        // 28. Módulo 28: Direccionamiento Matrices Cairó
        {
          id: "tech-q28",
          number: 28,
          moduleRef: "28",
          text: "Sea una matriz bidimensional A[4 x 6] con almacenamiento en base 1, alojada en memoria RAM a partir de la dirección base POSINI = 2000. Si cada elemento ocupa w = 4 bytes (tipo int) y se almacena en Orden por Renglones (Row-Major Order), según las fórmulas de Osvaldo Cairó, ¿cuál es la dirección física de A[3, 5]?",
          options: [
            "2064",
            "2056",
            "2072",
            "2048"
          ],
          correct: 0,
          feedback: "Fórmula de Cairó (Row-Major Base 1): LOC(A[i, j]) = POSINI + [ n * (i - 1) + (j - 1) ] * w. Con m=4, n=6, POSINI=2000, w=4, i=3, j=5: Desplazamiento = [6 * (3 - 1) + (5 - 1)] * 4 = [6 * 2 + 4] * 4 = [12 + 4] * 4 = 16 celdas * 4 bytes = 64 bytes. LOC = 2000 + 64 = 2064.",
          reference: "Osvaldo Cairó (Estructuras de Datos, McGraw-Hill)"
        },
        // 29. Módulo 29: Executable UML Sommerville
        {
          id: "tech-q29",
          number: 29,
          moduleRef: "29",
          text: "De acuerdo con Ian Sommerville (Cap. 5: Modelado del Sistema), ¿cuáles son los TRES modelos indispensables que constituyen el subconjunto formal estricto de Executable UML (xUML) para que un diseño pueda compilarse directamente a código ejecutable?",
          options: [
            "Modelos de Dominio, Modelos de Clases y Modelos de Estados (State Machines).",
            "Diagramas de Casos de Uso, Diagramas de Secuencia y Diagramas de Componentes.",
            "Diagramas de Actividad, Diagramas de Despliegue y Diagramas de Paquetes.",
            "Diagramas de Entidad-Relación, Diagramas DFD y Diccionario de Datos."
          ],
          correct: 0,
          feedback: "Sommerville establece la regla canónica: Modelos de Dominio (delimitan límites y entidades del mundo real) + Modelos de Clases (definen estructura estática de tipos y asociaciones) + Modelos de Estados (definen semántica dinámica ejecutable del ciclo de vida) = Código Ejecutable. Casos de Uso y Secuencia son excluidos por falta de determinismo computable.",
          reference: "Ian Sommerville (Ingeniería de Software, Cap. 5)"
        },
        // 30. Módulo 30 / Transversal: SWEBOK v4 & Web
        {
          id: "tech-q30",
          number: 30,
          moduleRef: "23/20",
          text: "Al contrastar técnicas de calidad de software según SWEBOK v4 y arquitecturas de comunicación en ASP.NET Core, ¿cuál de las siguientes afirmaciones es TÉCNICAMENTE CORRECTA?",
          options: [
            "En SWEBOK v4, el 'Smoke Testing' es un filtro de verificación rápida de compilación que rechaza de inmediato (fail-fast) un build inestable; paralelamente, en ASP.NET Core, 'SignalR' es la herramienta adecuada para empujar eventos en tiempo real a navegadores web con fallback automático a SSE y Long Polling.",
            "'Monkey Testing' es un proceso determinista de pruebas de aceptación formal ejecutado exclusivamente por usuarios finales en auditorías contables.",
            "'gRPC JSON Transcoding' es un framework de streaming pub/sub diseñado para sustituir a SignalR en navegadores web.",
            "'Smoke Testing' solo puede ejecutarse en producción después de que los clientes reportan caídas del sistema."
          ],
          correct: 0,
          feedback: "La afirmación A sintetiza dos conceptos fundamentales de la guía oficial: Smoke Testing es la prueba superficial estructurada que frena builds defectuosos en CI/CD antes de QA formal; y SignalR es la abstracción de alto nivel para comunicación bidireccional en navegadores que gestiona automáticamente WebSockets con fallback a Server-Sent Events o Long Polling.",
          reference: "SWEBOK v4 (Software Testing) & ASP.NET Core Architecture Team"
        }
      ]
    }
  ];
});

