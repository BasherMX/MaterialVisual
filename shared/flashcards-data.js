/**
 * Material Visual · Banco de Flashcards Centralizado
 * Cubre los 17 módulos de la plataforma para estudio activo Anki y minijuego de supervivencia.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MATERIAL_FLASHCARDS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    // =========================================================================
    // BLOQUE 1: CIENCIAS DE LA COMPUTACIÓN, ALGORITMOS Y ESTRUCTURAS DE DATOS
    // =========================================================================

    // Módulo 01: Complejidad Computacional: Big O
    {
      id: "fc-01-01",
      moduleId: "01",
      moduleTitle: "Complejidad Computacional",
      category: "Estructuras & Algoritmos",
      question: "¿Cuál es la complejidad temporal de buscar un elemento en un arreglo NO ordenado vs ordenado mediante Búsqueda Binaria?",
      answer: "O(n) lineal vs O(log n) logarítmica.",
      explanation: "En un arreglo no ordenado se requiere una búsqueda secuencial de hasta n comparaciones. En un arreglo ordenado, la búsqueda binaria divide el espacio de búsqueda a la mitad en cada paso: T(n) = T(n/2) + O(1), resultando en O(log n).",
      authorRef: "Donald Knuth & Bachmann-Landau",
      options: [
        "O(n) lineal vs O(log n) logarítmica",
        "O(1) constante vs O(n) lineal",
        "O(log n) vs O(n log n)",
        "O(n²) cuadrática vs O(1) constante"
      ],
      correctOption: 0
    },
    {
      id: "fc-01-02",
      moduleId: "01",
      moduleTitle: "Complejidad Computacional",
      category: "Estructuras & Algoritmos",
      question: "¿Qué propiedad matemática permite simplificar f(n) = 5n³ + 100n² + 4000 a O(n³)?",
      answer: "Dominancia del término de mayor crecimiento y descarte de constantes multiplicativas.",
      explanation: "En el análisis asintótico de cotas superiores Big O, cuando n tiende a infinito, el término con el exponente más alto domina completamente la función, haciendo despreciables los términos de menor orden y los coeficientes constantes.",
      authorRef: "Cormen, Leiserson, Rivest, Stein (CLRS)",
      options: [
        "Dominancia del término mayor y eliminación de coeficientes constantes",
        "Propiedad conmutativa de las sumas polinómicas",
        "Teorema del Límite Central",
        "Inducción matemática sobre subconjuntos finitos"
      ],
      correctOption: 0
    },
    {
      id: "fc-01-03",
      moduleId: "01",
      moduleTitle: "Complejidad Computacional",
      category: "Estructuras & Algoritmos",
      question: "¿Por qué un algoritmo de complejidad O(2ⁿ) es considerado intratable para entradas moderadas (n > 50)?",
      answer: "Por la explosión combinatoria exponencial donde cada elemento duplica las operaciones.",
      explanation: "Con n = 50, 2⁵⁰ representa más de 1.12 billones de billones de operaciones (1.12 × 10¹⁵). Incluso a mil millones de operaciones por segundo requeriría semanas de cómputo ininterrumpido.",
      authorRef: "Richard Karp (Teoría de Complejidad NP)",
      options: [
        "Por la explosión exponencial que duplica el cómputo con cada nuevo elemento",
        "Porque excede la memoria caché L1 del procesador",
        "Porque requiere forzosamente paralelismo GPU",
        "Porque solo puede ejecutarse en números primos"
      ],
      correctOption: 0
    },

    // Módulo 02: Greedy vs Divide & Conquer
    {
      id: "fc-02-01",
      moduleId: "02",
      moduleTitle: "Greedy vs Divide & Conquer",
      category: "Estructuras & Algoritmos",
      question: "¿Por qué el enfoque voraz (Greedy) garantiza la solución óptima en la Mochila Fraccionaria pero FALLA en la Mochila 0/1?",
      answer: "Porque la Mochila 0/1 carece de la propiedad de subestructura voraz (no se pueden tomar fracciones para llenar huecos).",
      explanation: "En la mochila fraccionaria podemos ordenar por densidad valor/peso (v_i / w_i) y llenar el espacio restante con una fracción. En la 0/1 un objeto denso pero pesado puede impedir empacar dos objetos que juntos sumen más valor.",
      authorRef: "Thomas H. Cormen (CLRS)",
      options: [
        "Por no poder tomar fracciones para aprovechar al 100% la capacidad restante",
        "Porque el enfoque voraz siempre requiere números negativos",
        "Porque Divide y Vencerás solo aplica a cadenas de texto",
        "Porque la Mochila 0/1 no tiene espacio de estados finito"
      ],
      correctOption: 0
    },
    {
      id: "fc-02-02",
      moduleId: "02",
      moduleTitle: "Greedy vs Divide & Conquer",
      category: "Estructuras & Algoritmos",
      question: "¿Cuáles son las 3 etapas canónicas del paradigma Divide y Vencerás?",
      answer: "1. Dividir (en subproblemas), 2. Vencer (resolver recursivamente), 3. Combinar (unir soluciones).",
      explanation: "El paradigma descompone el problema original en subproblemas disjuntos del mismo tipo hasta alcanzar un caso base, los resuelve de forma recursiva y finalmente fusiona las soluciones (como en Merge Sort al mezclar mitades ordenadas).",
      authorRef: "Jon Bentley & CLRS",
      options: [
        "Dividir, Vencer (resolver recursivamente) y Combinar",
        "Iterar, Evaluar vorazmente y Descartar",
        "Filtrar, Transformar y Reducir (Map-Reduce)",
        "Inicializar, Bloquear y Liberar memoria"
      ],
      correctOption: 0
    },

    // Módulo 03: Árboles AVL: Equilibrio en Movimiento
    {
      id: "fc-03-01",
      moduleId: "03",
      moduleTitle: "Árboles AVL",
      category: "Estructuras & Algoritmos",
      question: "¿Cómo se define el Factor de Balance (FB) de un nodo en un árbol AVL y cuál es su rango válido?",
      answer: "FB = Altura(Subárbol Izquierdo) - Altura(Subárbol Derecho); rango válido: {-1, 0, +1}.",
      explanation: "Si el valor absoluto de FB llega a 2 o -2, el árbol se encuentra desbalanceado y requiere de forma inmediata una rotación simple o doble para restablecer su altura logarítmica.",
      authorRef: "Georgy Adelson-Velsky y Evgenii Landis (1962)",
      options: [
        "FB = Altura(Izquierda) - Altura(Derecha); válido en {-1, 0, +1}",
        "FB = Cantidad de hojas izquierdas / hojas derechas; válido en [0, 1]",
        "FB = Profundidad del nodo raíz; válido en {1, 2, 3}",
        "FB = Grado de ramificación del nodo; válido en {0, 2}"
      ],
      correctOption: 0
    },
    {
      id: "fc-03-02",
      moduleId: "03",
      moduleTitle: "Árboles AVL",
      category: "Estructuras & Algoritmos",
      question: "¿Cuándo se debe aplicar una Rotación Doble Izquierda-Derecha (LR) en un Árbol AVL?",
      answer: "Cuando el nodo desbalanceado tiene FB = +2 y su hijo izquierdo tiene FB = -1.",
      explanation: "La rotación doble LR corrige el 'quiebre zig-zag' realizando primero una rotación simple izquierda sobre el hijo izquierdo, transformándolo en un caso lineal LL (+2, +1), y luego una rotación simple derecha sobre el nodo raíz desbalanceado.",
      authorRef: "Adelson-Velsky & Landis",
      options: [
        "Nodo con FB = +2 e hijo izquierdo con FB = -1",
        "Nodo con FB = -2 e hijo derecho con FB = -1",
        "Cualquier nodo que tenga dos hijos con la misma altura",
        "Cuando el árbol tiene un número impar de nodos"
      ],
      correctOption: 0
    },

    // Módulo 04: Explorador de Grafos: BFS vs DFS
    {
      id: "fc-04-01",
      moduleId: "04",
      moduleTitle: "Explorador de Grafos",
      category: "Estructuras & Algoritmos",
      question: "¿Qué estructura de datos subyacente gobierna a BFS (Anchura) vs DFS (Profundidad)?",
      answer: "BFS utiliza una Cola FIFO; DFS utiliza una Pila LIFO (o recursión del call stack).",
      explanation: "BFS procesa los nodos por niveles concéntricos sacando del frente de la Cola FIFO (Primero en Entrar, Primero en Salir). DFS explora una rama hasta el fondo desapilando de una Pila LIFO (Último en Entrar, Primero en Salir).",
      authorRef: "Edward F. Moore (BFS) & Robert Tarjan (DFS)",
      options: [
        "BFS: Cola FIFO; DFS: Pila LIFO (o call stack recursivo)",
        "BFS: Árbol B+; DFS: Tabla Hash",
        "BFS: Pila LIFO; DFS: Cola FIFO",
        "Ambos usan exclusivamente un arreglo ordenado estático"
      ],
      correctOption: 0
    },
    {
      id: "fc-04-02",
      moduleId: "04",
      moduleTitle: "Explorador de Grafos",
      category: "Estructuras & Algoritmos",
      question: "¿Por qué BFS garantiza encontrar el camino más corto en grafos no ponderados mientras que DFS no?",
      answer: "Porque BFS explora en orden creciente de distancia (nivel 1, luego nivel 2, etc.).",
      explanation: "Al visitar los nodos en estricto orden de saltos (aristas recorridas), la primera vez que BFS alcanza el nodo destino se asegura matemáticamente que no existe ningún camino con menor número de aristas.",
      authorRef: "Edsger W. Dijkstra & E. F. Moore",
      options: [
        "Porque visita los nodos en orden estrictamente creciente de aristas (niveles)",
        "Porque DFS solo funciona en grafos dirigidos acíclicos (DAG)",
        "Porque BFS tiene complejidad O(1) y DFS es exponencial",
        "Porque BFS almacena las distancias en un montículo binario"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 2: BASES DE DATOS Y ALMACENAMIENTO DE INFORMACIÓN
    // =========================================================================

    // Módulo 05: Arquitectura ANSI/SPARC de Tres Niveles
    {
      id: "fc-05-01",
      moduleId: "05",
      moduleTitle: "Arquitectura ANSI/SPARC",
      category: "Bases de Datos",
      question: "¿Cuáles son los 3 niveles de la arquitectura ANSI/SPARC y qué función tiene cada uno?",
      answer: "Externo (vistas de usuario), Conceptual/Lógico (esquema global comunitario) e Interno/Físico (almacenamiento en disco).",
      explanation: "El Nivel Externo aísla a los programas mostrando solo subconjuntos autorizados; el Conceptual define entidades, atributos y relaciones de forma agnóstica a la tecnología; el Interno organiza bloques, archivos, índices y punteros en disco.",
      authorRef: "Comité ANSI/X3/SPARC (1975) & C.J. Date",
      options: [
        "Nivel Externo (vistas), Conceptual (esquema global) e Interno (físico/disco)",
        "Nivel Presentación, Nivel Lógica de Negocio y Nivel Acceso a Datos",
        "Nivel DDL, Nivel DML y Nivel DCL",
        "Nivel Frontend, Nivel Backend y Nivel Caché en Memoria"
      ],
      correctOption: 0
    },
    {
      id: "fc-05-02",
      moduleId: "05",
      moduleTitle: "Arquitectura ANSI/SPARC",
      category: "Bases de Datos",
      question: "¿Cuál es la diferencia fundamental entre Independencia Física e Independencia Lógica de Datos?",
      answer: "Física: cambiar índices/disco sin tocar tablas ni apps. Lógica: agregar tablas/columnas sin romper vistas existentes.",
      explanation: "La independencia física permite reorganizar el almacenamiento (ej. migrar de HDD a NVMe o crear un índice B+) sin alterar el código SQL. La independencia lógica permite extender el modelo conceptual sin obligar a recompilar o modificar consultas de usuarios que no usan los nuevos campos.",
      authorRef: "E. F. Codd (1970) & Andrew J. Oppel",
      options: [
        "Física: cambiar disco/índices sin alterar tablas; Lógica: ampliar tablas sin alterar vistas",
        "Física aplica a bases de datos relacionales; Lógica aplica únicamente a bases NoSQL",
        "Física mide la velocidad de lectura en MB/s; Lógica mide el tiempo de compilación SQL",
        "Son términos equivalentes e intercambiables en la doctrina formal"
      ],
      correctOption: 0
    },
    {
      id: "fc-05-03",
      moduleId: "05",
      moduleTitle: "Arquitectura ANSI/SPARC",
      category: "Bases de Datos",
      question: "Según Andrew Oppel, ¿cuál es la discrepancia principal entre la teoría ANSI/SPARC y los RDBMS comerciales reales?",
      answer: "Los motores comerciales (Oracle, PostgreSQL, SQL Server) fusionan el nivel conceptual y lógico en un único esquema.",
      explanation: "Mientras ANSI/SPARC postula una estricta separación abstracta entre el modelo conceptual de negocio y el esquema lógico de tablas relacionales, en la práctica industrial ambos convergen en el diccionario de datos del RDBMS en forma de tablas y restricciones DDL.",
      authorRef: "Andrew J. Oppel (Bases de Datos)",
      options: [
        "Los motores comerciales fusionan el nivel conceptual y lógico en un solo esquema",
        "Los motores comerciales eliminaron por completo el nivel físico",
        "Los motores comerciales no soportan vistas externas",
        "La teoría fue concebida exclusivamente para sistemas jerárquicos de tarjetas perforadas"
      ],
      correctOption: 0
    },

    // Módulo 06: Modelado Conceptual ERD y Notaciones
    {
      id: "fc-06-01",
      moduleId: "06",
      moduleTitle: "Modelado Conceptual ERD",
      category: "Bases de Datos",
      question: "¿Cómo se representa una Entidad Débil en la notación Chen tradicional y qué requisito tiene?",
      answer: "Se representa con un doble rectángulo y depende de la clave primaria de una entidad fuerte para identificarse.",
      explanation: "Una entidad débil no posee atributos suficientes para conformar su propia clave primaria única; su existencia depende de la entidad propietaria (identifying relationship, representada con doble rombo) y su discriminador parcial.",
      authorRef: "Peter Pin-Shan Chen (1976)",
      options: [
        "Doble rectángulo y depende de una entidad fuerte para su clave primaria",
        "Círculo punteado y no puede tener atributos de tipo numérico",
        "Rombo sólido y requiere forzosamente una clave foránea autoincrementable",
        "Rectángulo con esquinas redondeadas y solo puede vincularse en 1:1"
      ],
      correctOption: 0
    },
    {
      id: "fc-06-02",
      moduleId: "06",
      moduleTitle: "Modelado Conceptual ERD",
      category: "Bases de Datos",
      question: "En la notación de Pata de Gallo (Crow's Foot / Martin), ¿qué significan un círculo y tres líneas ramificadas?",
      answer: "Cero a Muchos (0, N) - Cardinalidad opcional múltiple.",
      explanation: "El círculo pegado a la línea indica mínima 0 (participación opcional) y la ramificación de tres puntas (pata de gallo) indica máxima N (muchos).",
      authorRef: "James Martin & Clive Finkelstein (Information Engineering)",
      options: [
        "Cero a Muchos (0, N): Opcional y Múltiple",
        "Exactamente Uno y Solo Uno (1, 1): Obligatorio Único",
        "Uno a Muchos (1, N): Obligatorio Múltiple",
        "Clave Primaria Compuesta Opcional"
      ],
      correctOption: 0
    },

    // Módulo 07: Normalización de Bases de Datos
    {
      id: "fc-07-01",
      moduleId: "07",
      moduleTitle: "Normalización de Bases de Datos",
      category: "Bases de Datos",
      question: "¿Cuál es el requisito indispensable para que una relación esté en Segunda Forma Normal (2FN)?",
      answer: "Estar en 1FN y que ningún atributo no-clave dependa parcialmente de una clave candidata compuesta.",
      explanation: "La 2FN elimina las dependencias parciales: todo atributo no-primo debe depender de la clave primaria COMPLETA, no de un subconjunto de ella. Si la tabla tiene clave simple (un solo atributo), automáticamente cumple 2FN una vez en 1FN.",
      authorRef: "Edgar F. Codd (1971)",
      options: [
        "Estar en 1FN y que ningún atributo dependa parcialmente de una clave compuesta",
        "No tener valores nulos en ninguna columna de la tabla",
        "Contar con al menos dos claves foráneas declaradas",
        "Haber eliminado todas las dependencias transitivas entre atributos no-clave"
      ],
      correctOption: 0
    },
    {
      id: "fc-07-02",
      moduleId: "07",
      moduleTitle: "Normalización de Bases de Datos",
      category: "Bases de Datos",
      question: "¿Qué anomalía elimina la Tercera Forma Normal (3FN)?",
      answer: "Las dependencias transitivas (donde un atributo no-clave depende de otro atributo no-clave: X → Y → Z).",
      explanation: "En 3FN, para toda dependencia funcional no trivial X → A, o bien X es superclave, o bien A es un atributo primo (perteneciente a una clave candidata). Esto erradica redundancias como almacenar el nombre del departamento en la tabla de empleados.",
      authorRef: "Edgar F. Codd (1972)",
      options: [
        "Dependencias transitivas entre columnas que no son clave (X → Y → Z)",
        "Grupos repetitivos y atributos multivaluados en una misma celda",
        "Claves foráneas que apunten a tablas de otros esquemas",
        "Dependencias multivaluadas no triviales (4FN)"
      ],
      correctOption: 0
    },

    // Módulo 08: Taxonomía de Sublenguajes SQL
    {
      id: "fc-08-01",
      moduleId: "08",
      moduleTitle: "Taxonomía de Sublenguajes SQL",
      category: "Bases de Datos",
      question: "Aunque ambos vacían los datos de una tabla, ¿por qué TRUNCATE es DDL y DELETE es DML?",
      answer: "TRUNCATE desasigna páginas de disco en el catálogo del sistema; DELETE evalúa fila por fila generando logs individuales.",
      explanation: "TRUNCATE TABLE modifica la metadata del motor de almacenamiento, reinicia secuencias de identidad y libera extensiones de disco completas sin disparar triggers de fila. DELETE es una mutación de datos tupla por tupla sujeta a cláusulas WHERE y triggers DML.",
      authorRef: "Estándar ISO/IEC 9075 SQL",
      options: [
        "TRUNCATE opera sobre la metadata y páginas de disco; DELETE opera fila por fila con log individual",
        "DELETE solo puede ejecutarse en MySQL y TRUNCATE solo en Oracle",
        "TRUNCATE requiere permiso de SELECT y DELETE requiere permiso de ALTER",
        "Son idénticos a nivel de bytes, la distinción es puramente cosmética"
      ],
      correctOption: 0
    },
    {
      id: "fc-08-02",
      moduleId: "08",
      moduleTitle: "Taxonomía de Sublenguajes SQL",
      category: "Bases de Datos",
      question: "¿A qué sublenguajes pertenecen respectivamente las sentencias GRANT y ROLLBACK TO SAVEPOINT?",
      answer: "GRANT pertenece a DCL (Control); ROLLBACK TO SAVEPOINT pertenece a TCL (Transacciones).",
      explanation: "DCL (Data Control Language) administra privilegios, permisos y roles de seguridad (`GRANT`, `REVOKE`). TCL (Transaction Control Language) administra las unidades atómicas de trabajo (`COMMIT`, `ROLLBACK`, `SAVEPOINT`).",
      authorRef: "C.J. Date & IBM System R",
      options: [
        "GRANT es DCL; ROLLBACK TO SAVEPOINT es TCL",
        "GRANT es DDL; ROLLBACK TO SAVEPOINT es DML",
        "Ambas pertenecen a la familia de sentencias DML",
        "GRANT es DQL; ROLLBACK TO SAVEPOINT es DDL"
      ],
      correctOption: 0
    },

    // Módulo 09: Propiedades ACID y Axiomas de Armstrong
    {
      id: "fc-09-01",
      moduleId: "09",
      moduleTitle: "ACID y Axiomas de Armstrong",
      category: "Bases de Datos",
      question: "¿Qué componente del motor DBMS garantiza la DURABILIDAD frente a caídas de energía imprevistas?",
      answer: "El Write-Ahead Logging (WAL) o Redo Log registrado físicamente en disco antes del flush de páginas.",
      explanation: "La regla de oro del WAL exige que los cambios transaccionales se sincronicen de forma secuencial en disco en el log persistente antes de que las páginas sucias en memoria RAM se escriban en los archivos de la tabla. En el arranque tras un crash, el motor aplica 'REDO' para reconstruir el estado confirmado.",
      authorRef: "Jim Gray (1981) & Haerder & Reuter (1983)",
      options: [
        "El Write-Ahead Log (WAL) escrito en disco antes de confirmar el COMMIT",
        "La memoria caché L3 del procesador del servidor",
        "El índice agrupado de la tabla principal",
        "El Garbage Collector del sistema operativo"
      ],
      correctOption: 0
    },
    {
      id: "fc-09-02",
      moduleId: "09",
      moduleTitle: "ACID y Axiomas de Armstrong",
      category: "Bases de Datos",
      question: "¿Cuáles son los 3 axiomas primarios de Armstrong para la inferencia de dependencias funcionales?",
      answer: "1. Reflexividad (si Y ⊆ X ⇒ X → Y), 2. Aumento (si X → Y ⇒ XZ → YZ), 3. Transitividad (si X → Y y Y → Z ⇒ X → Z).",
      explanation: "Estos tres axiomas son a la vez 'correctos' (sound, no producen inferencias falsas) y 'completos' (complete, pueden deducir todas las dependencias funcionales válidas F+ a partir de un conjunto inicial F).",
      authorRef: "William W. Armstrong (1974)",
      options: [
        "Reflexividad, Aumento y Transitividad",
        "Unión, Descomposición y Pseudotransitividad (son reglas derivadas)",
        "Atomicidad, Consistencia y Aislamiento",
        "Simetría, Transitividad y Equivalencia de Relaciones"
      ],
      correctOption: 0
    },

    // Módulo 10: Diseño Físico: Índices y Árboles B+
    {
      id: "fc-10-01",
      moduleId: "10",
      moduleTitle: "Diseño Físico e Índices B+",
      category: "Bases de Datos",
      question: "¿Por qué solo puede existir UN ÚNICO índice agrupado (Clustered Index) por tabla?",
      answer: "Porque el índice agrupado define el ordenamiento físico real de las filas en las páginas de disco.",
      explanation: "Como los registros de una tabla solo pueden almacenarse físicamente en un único orden secuencial dentro de los bloques de almacenamiento, solo puede existir una clave agrupada. Los índices no agrupados son árboles B+ separados cuyos nodos hoja contienen punteros al índice agrupado o RID.",
      authorRef: "Raghu Ramakrishnan & Johannes Gehrke",
      options: [
        "Porque determina el orden físico real de almacenamiento de las filas en disco",
        "Por una restricción artificial del estándar SQL-92",
        "Porque ocupa todo el espacio de memoria RAM del motor",
        "Porque no permite valores nulos en ninguna de sus columnas"
      ],
      correctOption: 0
    },
    {
      id: "fc-10-02",
      moduleId: "10",
      moduleTitle: "Diseño Físico e Índices B+",
      category: "Bases de Datos",
      question: "¿Qué ventaja estructural crítica tiene un Árbol B+ sobre un Árbol B tradicional para bases de datos?",
      answer: "Las hojas en B+ contienen todos los datos y están enlazadas secuencialmente en lista doble para consultas de rango.",
      explanation: "En un Árbol B+ los nodos internos solo almacenan claves de enrutamiento (maximizando el fan-out y reduciendo la altura del árbol a 3 o 4 niveles para millones de tuplas). Además, los escaneos de rango (ej. WHERE edad BETWEEN 20 AND 30) recorren directamente la lista enlazada de hojas sin volver a subir a la raíz.",
      authorRef: "Rudolf Bayer & Edward M. McCreight",
      options: [
        "Nodos internos con alto fan-out y hojas enlazadas para escaneos de rango secuenciales rápidos",
        "El Árbol B+ nunca necesita rebalanceo ni división de nodos (split)",
        "El Árbol B+ solo almacena cadenas de texto y no números",
        "El Árbol B tradicional solo funciona en memoria volátil RAM"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 3: ARQUITECTURA DE SOFTWARE Y PROTOCOLOS WEB
    // =========================================================================

    // Módulo 11: Métodos HTTP y Códigos de Estado
    {
      id: "fc-11-01",
      moduleId: "11",
      moduleTitle: "Métodos HTTP y Códigos de Estado",
      category: "Arquitectura & Web",
      question: "¿Qué diferencia semántica define el estándar HTTP entre PUT y PATCH para actualizar un recurso?",
      answer: "PUT realiza un reemplazo completo e idempotente; PATCH aplica una modificación parcial no necesariamente idempotente.",
      explanation: "Al enviar un PUT, el cliente envía la representación íntegra del recurso; los campos omitidos deben ser eliminados o restaurados a valores por defecto. Con PATCH, el cliente solo envía un delta con las propiedades específicas que desea mutar.",
      authorRef: "RFC 9110 (HTTP Semantics) & Roy Fielding",
      options: [
        "PUT es reemplazo total idempotente; PATCH es mutación parcial",
        "PUT solo admite formato JSON y PATCH solo XML",
        "PUT se utiliza para eliminar registros y PATCH para crearlos",
        "Son sinónimos exactos según el estándar RFC 2616"
      ],
      correctOption: 0
    },
    {
      id: "fc-11-02",
      moduleId: "11",
      moduleTitle: "Métodos HTTP y Códigos de Estado",
      category: "Arquitectura & Web",
      question: "¿Cuál es la diferencia crítica entre los códigos de error de cliente 401 Unauthorized y 403 Forbidden?",
      answer: "401 indica falta de credenciales o autenticación inválida; 403 indica identidad confirmada pero permisos insuficientes.",
      explanation: "En 401 el servidor solicita que el cliente se autentique (retornando la cabecera WWW-Authenticate). En 403 el servidor ya sabe quién es el usuario, pero sus roles no le otorgan autorización para acceder a dicho recurso.",
      authorRef: "IETF RFC 9110",
      options: [
        "401: Falta de autenticación (¿quién eres?); 403: Falta de autorización (no tienes permiso)",
        "401 aplica solo a peticiones POST y 403 a peticiones GET",
        "401 es un error transitorio de red; 403 es una caída del servidor Apache/Nginx",
        "401 significa recurso no encontrado y 403 método no permitido"
      ],
      correctOption: 0
    },

    // Módulo 12: Modelo de Madurez de Richardson
    {
      id: "fc-12-01",
      moduleId: "12",
      moduleTitle: "Modelo de Madurez de Richardson",
      category: "Arquitectura & Web",
      question: "¿Qué caracteriza al Nivel 3 del Modelo de Madurez de Richardson (La Gloria de REST)?",
      answer: "HATEOAS (Hypermedia As The Engine Of Application State): la respuesta contiene enlaces a las siguientes acciones posibles.",
      explanation: "El cliente no necesita conocer de antemano todas las URIs de la API en el código fuente. El servidor devuelve hipervínculos dinámicos (links rel='next', rel='cancel') que guían al cliente en la transición de estados, desacoplando completamente al cliente del backend.",
      authorRef: "Leonard Richardson & Martin Fowler (2010)",
      options: [
        "HATEOAS: El uso de controles hipermedia dinámicos que guían el estado del cliente",
        "El uso obligatorio de bases de datos NoSQL con GraphQL",
        "La autenticación mediante certificados SSL de clave pública",
        "El retorno de datos exclusivamente en formato binario Protocol Buffers"
      ],
      correctOption: 0
    },
    {
      id: "fc-12-02",
      moduleId: "12",
      moduleTitle: "Modelo de Madurez de Richardson",
      category: "Arquitectura & Web",
      question: "¿Por qué el Nivel 0 de Richardson se denomina 'The Swamp of POX' (El pantano de POX)?",
      answer: "Porque utiliza una única URI y siempre el método POST como túnel para todas las operaciones (estilo RPC).",
      explanation: "En el Nivel 0 no se aprovechan los mecanismos de la Web: se usa HTTP únicamente como protocolo de transporte para despachar llamadas a procedimientos remotos (SOAP / XML-RPC), enviando toda acción a endpoints únicos como '/api/service'.",
      authorRef: "Leonard Richardson",
      options: [
        "Usa una sola URI y solo POST como túnel para todas las operaciones (estilo RPC)",
        "Requiere servidores Linux con permisos de superusuario desprotegidos",
        "Transmite paquetes HTTP fragmentados sin cabeceras Content-Type",
        "Porque no soporta compresión gzip en las respuestas"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 4: PARADIGMAS DE SOFTWARE, PATRONES Y EXPERIENCIA DE USUARIO
    // =========================================================================

    // Módulo 13: Programación Orientada a Objetos (POO)
    {
      id: "fc-13-01",
      moduleId: "13",
      moduleTitle: "Programación Orientada a Objetos",
      category: "Diseño & UI/UX",
      question: "¿Qué mecanismo permite al Polimorfismo ejecutar el método de la subclase correcta en tiempo de ejecución?",
      answer: "El Despacho Dinámico (Dynamic Dispatch) mediante la tabla de métodos virtuales (vtable).",
      explanation: "En lenguajes con despacho dinámico, el objeto mantiene un puntero oculto a su vtable. Cuando se invoca un método polimórfico a través de una referencia de la clase base, el runtime consulta la vtable del tipo real en memoria para resolver la dirección de la función sobrescrita.",
      authorRef: "Alan Kay & Bjarne Stroustrup",
      options: [
        "Despacho Dinámico (Dynamic Dispatch) a través de la vtable en tiempo de ejecución",
        "Sobrecarga de operadores en tiempo de compilación (Static Binding)",
        "Herencia múltiple pura con interfaces vacías",
        "Inyección de dependencias en el constructor de la clase estática"
      ],
      correctOption: 0
    },
    {
      id: "fc-13-02",
      moduleId: "13",
      moduleTitle: "Programación Orientada a Objetos",
      category: "Diseño & UI/UX",
      question: "¿Cuál es la diferencia fundamental entre Sobrecarga (Overloading) y Sobreescritura (Overriding)?",
      answer: "Sobrecarga: mismo nombre y distinta firma en misma clase (estático). Sobreescritura: misma firma en subclase (dinámico).",
      explanation: "La sobrecarga es resuelta por el compilador según la cantidad y tipos de argumentos. La sobreescritura redefine el comportamiento de un método heredado con exactamente la misma firma y tipo de retorno para ser resuelto en runtime.",
      authorRef: "Bertrand Meyer (OOSC)",
      options: [
        "Sobrecarga: distinta firma en compilación; Sobreescritura: misma firma en subclase en runtime",
        "Sobrecarga aplica a variables privadas; Sobreescritura aplica a constantes globales",
        "Sobrecarga requiere polimorfismo; Sobreescritura no lo permite",
        "Son términos idénticos en programación funcional"
      ],
      correctOption: 0
    },

    // Módulo 14: Patrones de Diseño GoF
    {
      id: "fc-14-01",
      moduleId: "14",
      moduleTitle: "Patrones de Diseño GoF",
      category: "Diseño & UI/UX",
      question: "¿Cuáles son las 3 grandes familias en que el Gang of Four (GoF) clasifica los 23 patrones de diseño?",
      answer: "Creacionales (mecanismos de instanciación), Estructurales (composición de clases) y de Comportamiento (interacción de objetos).",
      explanation: "Los Creacionales aíslan la creación de objetos (Singleton, Factory). Los Estructurales forman estructuras más grandes manteniendo flexibilidad (Adapter, Decorator, Composite). Los de Comportamiento gestionan algoritmos y responsabilidades (Observer, Strategy, State).",
      authorRef: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (1994)",
      options: [
        "Patrones Creacionales, Estructurales y de Comportamiento",
        "Patrones Frontend, Backend y de Base de Datos",
        "Patrones Reactivos, Imperativos y Funcionales",
        "Patrones de Presentación, Negocio e Infraestructura"
      ],
      correctOption: 0
    },
    {
      id: "fc-14-02",
      moduleId: "14",
      moduleTitle: "Patrones de Diseño GoF",
      category: "Diseño & UI/UX",
      question: "¿Qué patrón GoF define una familia de algoritmos intercambiables encapsulados en clases independientes?",
      answer: "Patrón Strategy (Estrategia).",
      explanation: "Strategy permite alternar diferentes algoritmos (ej. cálculo de impuestos según país, o métodos de compresión Zip vs Tar) en tiempo de ejecución sin modificar el contexto que los utiliza, cumpliendo con el principio Open/Closed de SOLID.",
      authorRef: "GoF (Design Patterns)",
      options: [
        "Patrón Strategy (Estrategia)",
        "Patrón Singleton",
        "Patrón Factory Method",
        "Patrón Composite (Objeto Compuesto)"
      ],
      correctOption: 0
    },

    // Módulo 15: Las 3 Reglas de Oro de Theo Mandel
    {
      id: "fc-15-01",
      moduleId: "15",
      moduleTitle: "Reglas de Oro de Theo Mandel",
      category: "Diseño & UI/UX",
      question: "¿Cuáles son las 3 Reglas de Oro para el diseño de interfaces de Theo Mandel (citadas por Roger Pressman)?",
      answer: "1. Dar el control al usuario, 2. Reducir la carga de memoria de trabajo, 3. Hacer la interfaz consistente.",
      explanation: "Regla 1: Modos flexibles, deshacer destructivo y personalización. Regla 2: Reconocer antes que recordar (Ley de Miller 7±2, valores por defecto). Regla 3: Consistencia en terminología, colores, iconos y flujo visual a lo largo de toda la aplicación.",
      authorRef: "Theo Mandel (1997) & Roger S. Pressman",
      options: [
        "Dar el control al usuario, Reducir la carga de memoria y Hacer la interfaz consistente",
        "Priorizar la estética, Maximizar las animaciones y Utilizar tipografías exóticas",
        "Minimizar clics a cualquier costo, Ocultar errores y Bloquear el botón Atrás",
        "Diseñar solo para monitores 4K, Forzar registro inicial y Mostrar popups emergentes"
      ],
      correctOption: 0
    },
    {
      id: "fc-15-02",
      moduleId: "15",
      moduleTitle: "Reglas de Oro de Theo Mandel",
      category: "Diseño & UI/UX",
      question: "En la Regla 2 de Theo Mandel, ¿qué postula la Ley de Miller sobre la memoria humana de corto plazo?",
      answer: "Que un ser humano puede retener solo 7 ± 2 elementos de información a la vez en su memoria activa.",
      explanation: "Por este motivo, las interfaces intuitivas aplican 'Chunking' (agrupación de datos, como los bloques de un número de tarjeta de crédito) y muestran información visible en pantalla para evitar que el usuario memorice códigos de una ventana a otra.",
      authorRef: "George A. Miller (1956) & Theo Mandel",
      options: [
        "La memoria de trabajo humana solo retiene 7 ± 2 elementos simultáneos",
        "Los usuarios tardan al menos 7 segundos en leer cualquier mensaje de alerta",
        "Una pantalla nunca debe superar las 7 líneas de texto en total",
        "El cerebro humano descarta el 70% de los iconos que no tienen texto explicativo"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 5: GESTIÓN DE PROYECTOS Y DIRECCIÓN DE SOFTWARE
    // =========================================================================

    // Módulo 16: El Triángulo de Hierro: Triple Restricción
    {
      id: "fc-16-01",
      moduleId: "16",
      moduleTitle: "El Triángulo de Hierro",
      category: "Gestión de Proyectos",
      question: "¿Cuáles son los 3 vértices de la Triple Restricción clásica y cuál es el resultado en el centro?",
      answer: "Vértices: Alcance (Scope), Tiempo (Schedule) y Costo/Recursos (Cost). Centro: Calidad (Quality).",
      explanation: "El modelo establece que no es posible modificar uno de los vértices sin afectar inevitablemente al menos a uno de los otros dos o deteriorar la calidad del producto de software (ej. expandir el alcance sin aumentar presupuesto ni plazo degradará las pruebas y la arquitectura).",
      authorRef: "Ian Sommerville & Martin Barnes",
      options: [
        "Vértices: Alcance, Tiempo y Costo; Centro: Calidad del Software",
        "Vértices: Frontend, Backend y DevOps; Centro: Rendimiento",
        "Vértices: Clientes, Desarrolladores y Gerentes; Centro: Salario",
        "Vértices: Requerimientos, Casos de Prueba y Código; Centro: Licenciamiento"
      ],
      correctOption: 0
    },
    {
      id: "fc-16-02",
      moduleId: "16",
      moduleTitle: "El Triángulo de Hierro",
      category: "Gestión de Proyectos",
      question: "¿Qué postula la Ley de Brooks sobre la compresión de tiempos de entrega en proyectos de software atrasados?",
      answer: "'Añadir personal a un proyecto de software con retraso lo retrasa aún más'.",
      explanation: "El costo de comunicación, coordinación y la curva de aprendizaje de los nuevos ingenieros sobrecarga a los miembros veteranos, consumiendo tiempo que de otro modo se dedicaría a la codificación y estabilización.",
      authorRef: "Fred Brooks (The Mythical Man-Month)",
      options: [
        "Añadir desarrolladores a un proyecto atrasado incrementa el retraso",
        "Reducir el presupuesto en un 10% duplica la productividad del equipo",
        "El tiempo de desarrollo es inversamente proporcional al número de reuniones",
        "Todo bug reportado genera exactamente tres bugs secundarios en QA"
      ],
      correctOption: 0
    },

    // Módulo 17: EDT / WBS: Descomposición del Trabajo
    {
      id: "fc-17-01",
      moduleId: "17",
      moduleTitle: "EDT / WBS",
      category: "Gestión de Proyectos",
      question: "¿En qué consiste la 'Regla del 100%' en la Estructura de Descomposición del Trabajo (EDT/WBS)?",
      answer: "La EDT debe capturar el 100% de todo el trabajo del proyecto y nada más; los hijos suman el 100% del padre.",
      explanation: "Ni un solo entregable o tarea puede quedar fuera de la jerarquía, y ningún trabajo fuera de la EDT debe realizarse (previniendo el Scope Creep o corrupción del alcance). La suma de los paquetes hijos debe equivaler exactamente a la totalidad del paquete superior sin solapamientos.",
      authorRef: "Marion E. Haynes & PMI (PMBOK Guide)",
      options: [
        "La EDT debe incluir el 100% del trabajo acordado y la suma de hijos debe ser el 100% del padre",
        "El 100% de los programadores debe aprobar cada tarea de forma unánime",
        "Todo entregable debe tener un 100% de cobertura de pruebas unitarias",
        "El presupuesto debe estar pagado al 100% antes de comenzar el sprint inicial"
      ],
      correctOption: 0
    },
    {
      id: "fc-17-02",
      moduleId: "17",
      moduleTitle: "EDT / WBS",
      category: "Gestión de Proyectos",
      question: "¿Qué es el 'Paquete de Trabajo' (Work Package) en una EDT/WBS y cuál es su nivel jerárquico?",
      answer: "Es el nivel más bajo de descomposición donde el costo y la duración pueden estimarse y gestionarse con precisión.",
      explanation: "Los paquetes de trabajo son entregables concretos e independientes a los que se les asigna un responsable, presupuesto y cronograma. Cada paquete de trabajo se documenta a detalle en el Diccionario de la EDT.",
      authorRef: "Marion E. Haynes & PMBOK",
      options: [
        "El nivel inferior de la EDT donde el costo y tiempo pueden estimarse y controlarse confiablemente",
        "El paquete comprimido en formato ZIP con el código fuente del proyecto",
        "El contrato firmado entre el cliente y el proveedor de software",
        "La reunión diaria de sincronización de 15 minutos (Daily Scrum)"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 6: ARQUITECTURA BACKEND, C# 12 & ENTITY FRAMEWORK CORE
    // =========================================================================

    // Módulo 18: Inyección de Dependencias & C# 12
    {
      id: "fc-18-01",
      moduleId: "18",
      moduleTitle: "Inyección de Dependencias & C# 12",
      category: "Arquitectura & Backend",
      question: "¿Cuál es el ciclo de vida apropiado para un servicio que gestiona la sesión y datos de autenticación del usuario actual?",
      answer: "Scoped (AddScoped): Una única instancia aislada por cada petición HTTP.",
      explanation: "Si se registrara como Singleton, la identidad del primer usuario quedaría compartida con todas las peticiones subsecuentes de otros usuarios (vulnerabilidad crítica de datos cruzados). Scoped garantiza aislamiento estricto por petición.",
      authorRef: "Microsoft .NET Dependency Injection Team",
      options: [
        "Scoped (AddScoped): Aislado estrictamente por petición HTTP",
        "Singleton (AddSingleton): Reutilizado por todos los usuarios concurrentes",
        "Transient (AddTransient): Instanciado cada vez que se lee una propiedad",
        "Static global sin contenedor IoC"
      ],
      correctOption: 0
    },
    {
      id: "fc-18-02",
      moduleId: "18",
      moduleTitle: "Inyección de Dependencias & C# 12",
      category: "Arquitectura & Backend",
      question: "¿Qué es una Dependencia Cautiva (Captive Dependency) y por qué genera fallos en .NET?",
      answer: "Ocurre cuando un Singleton inyecta un servicio Scoped, secuestrando su instancia e impidiendo su recolección.",
      explanation: "Como el Singleton vive durante todo el proceso, la dependencia Scoped jamás es liberada al terminar la petición HTTP original, provocando acumulación en memoria y errores de concurrencia al reusar contextos no thread-safe (como DbContext).",
      authorRef: "Mark Seemann (Dependency Injection Principles)",
      options: [
        "Un Singleton que inyecta un Scoped, manteniendo 'cautiva' la instancia indefinidamente",
        "Un servicio que no puede resolverse porque su interfaz no tiene implementación registrada",
        "Una referencia circular entre dos servicios Transient",
        "Un ensamblado no firmado bloqueado por el runtime"
      ],
      correctOption: 0
    },
    {
      id: "fc-18-03",
      moduleId: "18",
      moduleTitle: "Inyección de Dependencias & C# 12",
      category: "Arquitectura & Backend",
      question: "¿Qué ventaja ofrecen los Constructores Primarios en C# 12 para servicios con inyección de dependencias?",
      answer: "Declaran dependencias directamente en la cabecera de la clase, eliminando constructores explícitos y campos privados.",
      explanation: "En lugar de declarar campos 'private readonly' y asignar cada parámetro manualmente dentro del cuerpo del constructor, C# 12 pone los parámetros del constructor primario al alcance léxico de todos los métodos de la clase en una sola línea.",
      authorRef: "Mads Torgersen & C# Language Design Team",
      options: [
        "Eliminan el boilerplate de campos privados y constructores explícitos en la declaración de clase",
        "Convierten todas las dependencias en hilos asíncronos paralelos",
        "Impiden que las clases utilicen interfaces",
        "Fuerzan que todos los parámetros sean serializados en JSON nativo"
      ],
      correctOption: 0
    },

    // Módulo 19: EF Core: Concurrencia & Optimización
    {
      id: "fc-19-01",
      moduleId: "19",
      moduleTitle: "EF Core: Concurrencia & Optimización",
      category: "Arquitectura & Backend",
      question: "¿Por qué falla Task.WhenAll al ejecutar múltiples consultas paralelas sobre una misma instancia de DbContext?",
      answer: "Porque DbContext no es thread-safe y su conexión subyacente y StateManager no admiten operaciones simultáneas.",
      explanation: "Lanza System.InvalidOperationException ('A second operation was started on this context instance before a previous operation completed'). Cada consulta activa requiere exclusividad sobre el DataReader y el socket ADO.NET de la base de datos.",
      authorRef: "Entity Framework Core Architecture Team",
      options: [
        "Porque DbContext no es thread-safe y su conexión socket no admite comandos paralelos concurrentes",
        "Porque Task.WhenAll solo admite métodos síncronos que retornen void",
        "Porque SQL Server prohíbe abrir más de una tabla por transacción",
        "Porque el Garbage Collector bloquea las tareas en segundo plano"
      ],
      correctOption: 0
    },
    {
      id: "fc-19-02",
      moduleId: "19",
      moduleTitle: "EF Core: Concurrencia & Optimización",
      category: "Arquitectura & Backend",
      question: "¿Cómo resuelve IDbContextFactory<TContext> la paralelización de consultas concurrentes?",
      answer: "Crea instancias independientes y efímeras de DbContext por cada hilo o tarea con 'await using'.",
      explanation: "Al fabricar un contexto dedicado por tarea, cada hilo tiene su propia conexión y ChangeTracker aislado, permitiendo a Task.WhenAll ejecutar en paralelo real sin bloqueos ni excepciones de concurrencia.",
      authorRef: "Microsoft EF Core Patterns",
      options: [
        "Fabrica un DbContext efímero dedicado e independiente por cada tarea o hilo paralelo",
        "Aplica un bloqueo global 'lock' que serializa las consultas en segundo plano",
        "Convierte la base de datos relacional en una caché de Redis",
        "Ejecuta las consultas en el cliente sin conectarse al servidor"
      ],
      correctOption: 0
    },
    {
      id: "fc-19-03",
      moduleId: "19",
      moduleTitle: "EF Core: Concurrencia & Optimización",
      category: "Arquitectura & Backend",
      question: "¿En qué se diferencia .AsNoTrackingWithIdentityResolution() de .AsNoTracking() tradicional en EF Core?",
      answer: "IdentityResolution reutiliza la misma instancia en memoria para entidades con el mismo ID, evitando duplicación en el Heap.",
      explanation: "En consultas con relaciones 1:N, .AsNoTracking() crea una nueva instancia de la entidad padre por cada fila leída (duplicando objetos en memoria). IdentityResolution mantiene un mapa efímero de claves sin activar el Change Tracker completo, ahorrando RAM y preservando la igualdad referencial.",
      authorRef: "Arthur Vickers (EF Core Team)",
      options: [
        "Reutiliza la misma instancia en memoria para entidades con el mismo ID, deduplicando objetos en el Heap",
        "Habilita el guardado automático de cambios sin necesidad de SaveChanges()",
        "Descarga los datos directamente en archivos XML en disco local",
        "Convierte las consultas LINQ en llamadas GraphQL"
      ],
      correctOption: 0
    },
    {
      id: "fc-19-04",
      moduleId: "19",
      moduleTitle: "EF Core: Concurrencia & Optimización",
      category: "Arquitectura & Backend",
      question: "¿Por qué Native AOT en .NET 8+ exige JSON Source Generators en lugar de Reflection en tiempo de ejecución?",
      answer: "Porque Native AOT aplica Trimming agresivo y compila a binario cerrado sin compilador JIT ni emisión dinámica.",
      explanation: "El Source Generator inspecciona los tipos en compilación y genera código C# explícito para serializar/deserializar, eliminando la necesidad de inspeccionar miembros por Reflection y garantizando que el optimizador no pode código crítico.",
      authorRef: ".NET Native AOT Team",
      options: [
        "Porque compila a binario nativo cerrado y no dispone de motor JIT para emitir código dinámico por Reflection",
        "Porque Native AOT solo es compatible con tipos numéricos enteros",
        "Porque los Source Generators duplican el tamaño del ejecutable",
        "Porque el protocolo HTTP/3 prohíbe la reflexión de tipos"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 6: APIS MODERNAS, STREAMING & SEGURIDAD
    // =========================================================================

    // Módulo 20: gRPC & Patrones de Streaming
    {
      id: "fc-20-01",
      moduleId: "20",
      moduleTitle: "gRPC & Patrones de Streaming",
      category: "Arquitectura & Web",
      question: "¿Por qué gRPC logra un rendimiento y compresión drásticamente superiores frente a una API REST tradicional basada en JSON?",
      answer: "Porque utiliza serialización binaria con Protocol Buffers (tags numéricos y varints) sobre transporte multiplexado HTTP/2.",
      explanation: "A diferencia de JSON, que transmite nombres de atributos repetitivos en texto ASCII legible, Protobuf codifica las propiedades como tags numéricos enteros y serializa valores en binario compacto. Además, el túnel HTTP/2 multiplexa múltiples llamadas sobre una única conexión TCP sin bloqueo de cabeza de línea a nivel de aplicación.",
      authorRef: "Google RPC Architecture & CNCF Specification",
      options: [
        "Porque utiliza serialización binaria con Protocol Buffers (tags numéricos) sobre transporte multiplexado HTTP/2",
        "Porque gRPC reemplaza la pila TCP/IP por conexiones UDP directas sin verificación de errores",
        "Porque convierte todas las consultas de la base de datos en sockets WebRTC sin cifrado TLS",
        "Porque almacena todos los registros en la memoria caché del navegador de los clientes"
      ],
      correctOption: 0
    },
    {
      id: "fc-20-02",
      moduleId: "20",
      moduleTitle: "gRPC & Patrones de Streaming",
      category: "Arquitectura & Web",
      question: "¿En qué consiste el patrón de llamada 'Bidirectional Streaming' en gRPC y cómo operan el cliente y servidor?",
      answer: "Ambos extremos abren dos flujos independientes de lectura/escritura sobre el mismo stream HTTP/2 y emiten mensajes de forma asíncrona sin bloquearse.",
      explanation: "En la firma 'rpc Chat(stream Msg) returns (stream Msg)', la comunicación está totalmente desacoplada en el tiempo; el cliente puede enviar ráfagas de paquetes mientras el servidor responde inmediatamente o acumula respuestas, todo en un único stream lógico de baja latencia.",
      authorRef: "gRPC Protocol Specification",
      options: [
        "Ambos extremos abren flujos independientes de lectura/escritura sobre el mismo stream HTTP/2 y emiten mensajes asíncronos sin bloquearse",
        "El cliente envía un paquete y el servidor debe responder obligatoriamente con exactamente un paquete de confirmación",
        "El servidor envía el esquema en SQL y el cliente ejecuta la consulta en memoria RAM local",
        "El protocolo cierra y reabre la conexión TCP en cada mensaje individual para garantizar seguridad"
      ],
      correctOption: 0
    },

    // Módulo 21: GraphQL & HotChocolate: Over/Under-fetching
    {
      id: "fc-21-01",
      moduleId: "21",
      moduleTitle: "GraphQL & HotChocolate: Over/Under-fetching",
      category: "Arquitectura & Web",
      question: "¿Qué patologías de red resuelven las consultas de GraphQL frente al diseño rígido de endpoints REST?",
      answer: "Over-fetching (descarga de campos innecesarios) y Under-fetching (múltiples llamadas secuenciales en cascada o problema N+1).",
      explanation: "En GraphQL el cliente define de forma declarativa la estructura exacta y las relaciones requeridas en su Query, obteniendo todos los datos necesarios en un único viaje de red (Round-Trip Time) sin desperdiciar ancho de banda ni encadenar llamadas.",
      authorRef: "GraphQL Foundation & Lee Byron",
      options: [
        "Over-fetching (descarga de campos innecesarios) y Under-fetching (múltiples llamadas secuenciales o problema N+1)",
        "Errores de compilación en el compilador Roslyn y excepciones de OutOfMemory en el recolector de basura",
        "La necesidad de implementar certificados TLS/HTTPS en los servidores de producción",
        "La fragmentación de índices agrupados en discos de estado sólido SSD"
      ],
      correctOption: 0
    },
    {
      id: "fc-21-02",
      moduleId: "21",
      moduleTitle: "GraphQL & HotChocolate: Over/Under-fetching",
      category: "Arquitectura & Web",
      question: "¿Cómo optimiza HotChocolate en .NET el consumo de base de datos al usar el atributo [UseProjection] junto con Entity Framework Core?",
      answer: "Traduce los campos solicitados en el Query de GraphQL directamente a una cláusula SELECT específica en la consulta SQL generada por EF Core.",
      explanation: "Al devolver IQueryable<T> y aplicar [UseProjection], HotChocolate no descarga todas las columnas a memoria para filtrarlas luego en C#, sino que compone el árbol de expresión de EF Core para que el motor SQL solo transfiera las columnas solicitadas.",
      authorRef: "ChilliCream (HotChocolate .NET)",
      options: [
        "Traduce los campos del Query de GraphQL directamente a una cláusula SELECT específica en la consulta SQL generada por EF Core",
        "Convierte la base de datos relacional a una base de datos documental en tiempo de ejecución",
        "Elimina las claves foráneas de las tablas de SQL Server para acelerar los JOINs",
        "Guarda todos los resultados en archivos JSON temporales en el disco duro del servidor"
      ],
      correctOption: 0
    },

    // Módulo 22: JWT: Tokens & Criptografía
    {
      id: "fc-22-01",
      moduleId: "22",
      moduleTitle: "JWT: Tokens & Criptografía",
      category: "Arquitectura & Backend",
      question: "¿Cuál es el mito y error más crítico de seguridad sobre los JSON Web Tokens (JWS estándar)?",
      answer: "Creer que un JWT está cifrado o protege la confidencialidad de los datos, cuando en realidad solo está firmado digitalmente y codificado en Base64Url.",
      explanation: "El Header y Payload de un JWS (JSON Web Signature) son públicamente legibles por cualquiera con solo decodificar Base64Url (atob). La firma garantiza integridad y autenticidad (que nadie lo alteró), pero nunca confidencialidad. Para ocultar datos sensibles se requiere JWE (JSON Web Encryption).",
      authorRef: "RFC 7519 (JSON Web Token) & OWASP",
      options: [
        "Creer que un JWT está cifrado y protege secretos, cuando solo está firmado digitalmente y codificado en Base64Url legible",
        "Pensar que un JWT firmado con HS256 requiere una pareja de clave pública y privada asimétrica",
        "Asumir que un token JWT expira automáticamente sin necesidad de validar el claim 'exp'",
        "Creer que un JWT solo puede transmitirse a través de sockets WebSocket y no por cabeceras HTTP"
      ],
      correctOption: 0
    },
    {
      id: "fc-22-02",
      moduleId: "22",
      moduleTitle: "JWT: Tokens & Criptografía",
      category: "Arquitectura & Backend",
      question: "¿Por qué se recomienda almacenar el Refresh Token en una cookie HttpOnly, Secure y SameSite en lugar de Web Storage (localStorage)?",
      answer: "Porque las cookies con el flag HttpOnly son inaccesibles para el motor de JavaScript en el navegador, mitigando el robo de sesiones por ataques XSS.",
      explanation: "Si una aplicación sufre una vulnerabilidad de Cross-Site Scripting (XSS), cualquier script malicioso inyectado puede leer inmediatamente localStorage.getItem('token'). Una cookie con HttpOnly solo es leída y enviada por el navegador en la cabecera HTTP, bloqueando el acceso a scripts maliciosos de terceros.",
      authorRef: "OWASP Session Management Cheat Sheet",
      options: [
        "Porque las cookies con el flag HttpOnly son inaccesibles para el motor de JavaScript, mitigando el robo de sesión por XSS",
        "Porque el almacenamiento localStorage tiene un límite máximo de almacenamiento de 100 bytes",
        "Porque las cookies HttpOnly cifran automáticamente la base de datos de los servidores de backend",
        "Porque Google Chrome bloquea cualquier petición HTTP que no incluya una cookie de sesión activa"
      ],
      correctOption: 0
    }
  ];
});

