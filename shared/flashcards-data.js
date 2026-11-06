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
    {
      id: "fc-19-05",
      moduleId: "19",
      moduleTitle: "EF Core: Concurrencia & Optimización",
      category: "Arquitectura & Backend",
      question: "En el modelo relacional canónico Northwind utilizado por Mark J. Price para EF Core, ¿cuál es la estructura de clave de la tabla Order Details?",
      answer: "Posee una clave primaria compuesta (OrderID, ProductID) y actúa como tabla de unión (junction table) N:M entre Orders y Products.",
      explanation: "En Northwind, Order Details modela cada renglón de compra vinculando una Orden con un Producto específico junto con atributos transaccionales propios (UnitPrice, Quantity, Discount). Su clave primaria compuesta requiere configuración Fluent API con HasKey(od => new { od.OrderID, od.ProductID }).",
      authorRef: "Mark J. Price (Apps and Services with .NET 8) & Microsoft",
      options: [
        "Clave primaria compuesta por (OrderID, ProductID), actuando como tabla de unión N:M entre Orders y Products",
        "Clave primaria autoincremental simple llamada OrderDetailId sin claves foráneas",
        "Una clave GUID generada en el cliente con relación 1:1 estricta hacia Categories",
        "No posee clave primaria porque almacena documentos JSON no estructurados"
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
    {
      id: "fc-20-04",
      moduleId: "20",
      moduleTitle: "gRPC & Patrones de Streaming",
      category: "Arquitectura & Web",
      question: "¿Por qué ASP.NET Core SignalR es la tecnología idónea para tableros en vivo y chats en navegadores frente a gRPC?",
      answer: "SignalR proporciona una abstracción pub/sub de tiempo real sobre WebSockets con degradación automática a Server-Sent Events o Long Polling para navegadores.",
      explanation: "Los navegadores web estándar no exponen control sobre frames HTTP/2 de bajo nivel para clientes gRPC nativos. SignalR abstrae conexiones persistentes con WebSockets nativos y fallback automático, ofreciendo Hubs y grupos de difusión ideales para clientes web heterogéneos.",
      authorRef: "ASP.NET Core Architecture Team & SPC INEGI",
      options: [
        "Proporciona una abstracción pub/sub de tiempo real sobre WebSockets con degradación automática a SSE o Long Polling para navegadores",
        "SignalR opera directamente sin servidor web enviando paquetes UDP peer-to-peer",
        "gRPC está prohibido en servidores Linux y contenedores de Kubernetes",
        "SignalR no requiere conexiones de red y funciona por infrarrojos"
      ],
      correctOption: 0
    },
    {
      id: "fc-20-05",
      moduleId: "20",
      moduleTitle: "gRPC & Patrones de Streaming",
      category: "Arquitectura & Web",
      question: "¿Qué es fundamentalmente 'gRPC JSON Transcoding' en ASP.NET Core y qué limitación arquitectónica debe tenerse clara en evaluaciones técnicas?",
      answer: "Es un mecanismo para exponer servicios gRPC como APIs REST tradicionales con JSON; NO es una solución de streaming pub/sub para navegadores.",
      explanation: "gRPC JSON Transcoding permite que clientes REST tradicionales (cURL, Postman, apps legadas) invoquen servicios gRPC mediante peticiones HTTP/1.1 y payloads JSON mapeados con anotaciones google.api.http. Su propósito es interoperabilidad REST, no empuje de eventos en tiempo real.",
      authorRef: "Microsoft ASP.NET Core Documentation & SPC INEGI",
      options: [
        "Mecanismo para exponer servicios gRPC como APIs REST tradicionales con JSON; NO es streaming pub/sub para navegadores",
        "Un middleware que convierte bases de datos SQL Server en documentos de MongoDB",
        "Un protocolo de compresión que sustituye HTTPS por sockets TCP sin cifrar",
        "Una herramienta que traduce automáticamente código C# en lenguaje Python"
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
    },

    // =========================================================================
    // BLOQUE 7: INGENIERÍA DE SOFTWARE, CALIDAD & CONFIABILIDAD
    // =========================================================================

    // Módulo 23: Error, Defecto, Falla & V&V
    {
      id: "fc-23-01",
      moduleId: "23",
      moduleTitle: "Error, Defecto, Falla & V&V",
      category: "Ingeniería de Software",
      question: "En la taxonomía formal IEEE 610.12 e ISTQB, ¿cuál es la diferencia entre un Error, un Defecto (Bug/Fault) y una Falla (Failure)?",
      answer: "El Error es la equivocación humana mental; el Defecto es la imperfección estática en el código o documento; y la Falla es la divergencia dinámica observable en tiempo de ejecución.",
      explanation: "La cadena causal es: Acción errónea del ser humano (Error) ➔ inyecta una anomalía pasiva en el artefacto (Defecto) ➔ que al ejecutarse bajo ciertas condiciones de entrada detona una manifestación externa incorrecta del sistema (Falla). Un defecto puede permanecer latente indefinidamente si el camino de ejecución no es recorrido.",
      authorRef: "Estándar IEEE 610.12 / ISO/IEC 24765",
      options: [
        "El Error es la equivocación mental humana; el Defecto es la anomalía estática en el código; y la Falla es la manifestación dinámica observable en tiempo de ejecución",
        "Los tres términos son sinónimos absolutos y pueden utilizarse indistintamente según el lenguaje de programación",
        "El Error ocurre en tiempo de ejecución; el Defecto es causado por el hardware; y la Falla es la omisión de comentarios en el código",
        "Una Falla es cometida por el cliente; un Error es detectado por el compilador; y un Defecto solo ocurre en bases de datos relacionales"
      ],
      correctOption: 0
    },
    {
      id: "fc-23-02",
      moduleId: "23",
      moduleTitle: "Error, Defecto, Falla & V&V",
      category: "Ingeniería de Software",
      question: "Según la doctrina clásica de Barry Boehm y el estándar IEEE 1012, ¿cuál es la distinción entre Verificación y Validación?",
      answer: "Verificación compara el producto contra su especificación técnica formal ('¿Construimos el producto correctamente?'); Validación lo evalúa contra la necesidad real del usuario ('¿Construimos el producto correcto?').",
      explanation: "La Verificación es interna y orientada a procesos/documentos previos (inspecciones de diseño, análisis estático, pruebas unitarias). La Validación es externa y orientada al cliente en su entorno operativo auténtico (pruebas de aceptación UAT, pruebas beta con usuarios reales).",
      authorRef: "Barry Boehm (Software Engineering Economics, 1981)",
      options: [
        "Verificación compara el producto contra su especificación formal ('¿Construimos el producto correctamente?'); Validación lo evalúa contra la necesidad real del usuario ('¿Construimos el producto correcto?')",
        "Verificación la realiza el cliente final; Validación la realizan exclusivamente los ingenieros de software mediante compiladores",
        "Verificación consiste en ejecutar pruebas de penetración de seguridad; Validación es medir el tiempo de respuesta de las APIs REST",
        "Verificación ocurre únicamente después del lanzamiento a producción; Validación ocurre durante la fase inicial de licitación de contratos"
      ],
      correctOption: 0
    },
    {
      id: "fc-23-03",
      moduleId: "23",
      moduleTitle: "Error, Defecto, Falla & V&V",
      category: "Ingeniería de Software",
      question: "¿Qué ocurre en un proyecto de software cuando el sistema está 'Verificado con éxito' pero 'NO está Validado'?",
      answer: "El software cumple con exactitud toda la especificación técnica escrita, pero es inútil para el usuario porque la especificación inicial estaba mal concebida o desfasada.",
      explanation: "Se conoce metafóricamente como 'la operación fue un éxito pero el paciente falleció'. El código pasa todas las pruebas unitarias y cumple los requerimientos al pie de la letra, pero no resuelve la necesidad operativa real del cliente (falta de validación temprana con prototipos y usuarios reales).",
      authorRef: "IEEE Standard for System and Software Verification and Validation",
      options: [
        "El software cumple con exactitud la especificación escrita, pero no le sirve al usuario porque la especificación estaba mal concebida o incompleta",
        "El código fuente no compila debido a errores de sintaxis en el compilador Roslyn",
        "El sistema fue aprobado por los usuarios finales pero el equipo de desarrollo se niega a entregar el repositorio de Git",
        "El software tiene cero defectos estáticos pero excede el límite de memoria RAM del servidor"
      ],
      correctOption: 0
    },
    {
      id: "fc-23-04",
      moduleId: "23",
      moduleTitle: "Error, Defecto, Falla & V&V",
      category: "Ingeniería de Software",
      question: "En la taxonomía de pruebas de SWEBOK v4, ¿cuál es la diferencia metodológica entre 'Monkey Testing' y 'Smoke Testing'?",
      answer: "Smoke Testing es un conjunto mínimo y estructurado para validar que el build realiza funciones vitales antes de QA; Monkey Testing es estocástico y no estructurado para forzar caídas del sistema.",
      explanation: "El Smoke Testing (Build Verification Test) es el primer filtro en CI/CD; si falla, la versión se rechaza inmediatamente (fail-fast). El Monkey Testing introduce clics rápidos y entradas aleatorias caóticas sin plan prefijado para detectar cuelgues, excepciones y fugas de memoria.",
      authorRef: "SWEBOK v4 (Software Testing) & IEEE Computer Society",
      options: [
        "Smoke Testing es un conjunto mínimo y estructurado para validar funciones vitales del build; Monkey Testing es caótico y estocástico para forzar crashes",
        "Monkey Testing se ejecuta exclusivamente en navegadores web; Smoke Testing solo se aplica a bases de datos SQL",
        "Smoke Testing requiere la intervención manual de usuarios; Monkey Testing se realiza mediante inspección estática del código",
        "Son términos sinónimos definidos en la norma ISO 9001 para auditorías de calidad"
      ],
      correctOption: 0
    },

    // Módulo 24: Métricas de Confiabilidad: ROCOF, POFOD & MTTF
    {
      id: "fc-24-01",
      moduleId: "24",
      moduleTitle: "Métricas de Confiabilidad: ROCOF, POFOD & MTTF",
      category: "Ingeniería de Software",
      question: "¿Cuándo es POFOD (Probability of Failure on Demand) la métrica adecuada de confiabilidad en lugar de ROCOF?",
      answer: "En sistemas que permanecen en espera y solo se activan ante eventos críticos puntuales (discretos), como un airbag o la parada de emergencia de un reactor.",
      explanation: "En sistemas de protección a demanda, la duración del tiempo inactivo en reposo no refleja la fiabilidad. La métrica crítica es la probabilidad matemática de que el sistema falle en el instante exacto en que se le exige intervenir.",
      authorRef: "Ian Sommerville (Software Engineering: Dependability)",
      options: [
        "En sistemas que permanecen en reposo y solo se activan ante eventos discretos críticos (airbags, frenos de emergencia, paradas de seguridad)",
        "En servidores web de streaming que transmiten audio y video 24/7 sin interrupción",
        "En motores de bases de datos relacionales con réplicas activas en la nube",
        "Únicamente en aplicaciones móviles que funcionan sin conexión a Internet"
      ],
      correctOption: 0
    },
    {
      id: "fc-24-02",
      moduleId: "24",
      moduleTitle: "Métricas de Confiabilidad: ROCOF, POFOD & MTTF",
      category: "Ingeniería de Software",
      question: "¿Cómo se calcula la Disponibilidad Operativa (A) de un sistema a partir de su MTTF y MTTR, y qué significa lograr 'Cinco Nueves' (99.999%)?",
      answer: "A = MTTF / (MTTF + MTTR); 'Cinco Nueves' significa que el sistema solo tolera aproximadamente 5.26 minutos de caída total acumulada al año.",
      explanation: "La disponibilidad representa la fracción de tiempo en que el sistema está 100% operativo. Cinco nueves (99.999%) es el estándar de misión crítica (telecomunicaciones y aeroespacial) y exige conmutación por error (failover) automatizada sin esperar a operadores humanos.",
      authorRef: "Roger S. Pressman / Software Reliability Engineering",
      options: [
        "A = MTTF / (MTTF + MTTR); Cinco Nueves tolera un máximo aproximado de 5.26 minutos de caída total acumulada en todo un año",
        "A = MTTF × MTTR; Cinco Nueves indica que el sistema fallará exactamente 5 veces cada 999 horas de operación",
        "A = MTTR / MTTF; Cinco Nueves significa que el equipo de soporte técnico resolverá cualquier bug en 5 minutos o menos",
        "A = (MTTF + MTTR) / 100; Cinco Nueves equivale a un 50% de probabilidad de fallo en transacciones concurrentes"
      ],
      correctOption: 0
    },
    {
      id: "fc-24-03",
      moduleId: "24",
      moduleTitle: "Métricas de Confiabilidad: ROCOF, POFOD & MTTF",
      category: "Ingeniería de Software",
      question: "¿Qué mide la métrica de 'Densidad de Defectos' expresada en función de KLOC (Kilo Lines Of Code)?",
      answer: "La cantidad de defectos normalizada por cada 1,000 líneas de código fuente (Defectos / KLOC) para comparar la calidad entre módulos de distinto tamaño.",
      explanation: "Normalizar por KLOC permite evaluar la madurez de los procesos de desarrollo. Según Steve McConnell, el software comercial regular promedia entre 1 y 5 defectos por KLOC, mientras que el software de alta criticidad exige menos de 0.5 o 0.1 defectos por KLOC.",
      authorRef: "Steve McConnell (Code Complete) & Roger Pressman",
      options: [
        "La cantidad de defectos normalizada por cada 1,000 líneas de código fuente (Defectos / KLOC) para comparar la calidad entre módulos",
        "La velocidad de escritura de código de los programadores medida en líneas de código por día de trabajo",
        "El tiempo que tarda el compilador en convertir 1,000 líneas de código C# en binario ejecutable",
        "La cantidad de comentarios de documentación requeridos por cada millar de líneas de código fuente"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 8: CONCURRENCIA DE BAJO NIVEL, SERVICIOS DE HOSTING & RESILIENCIA
    // =========================================================================

    // Módulo 25: Concurrencia de Bajo Nivel: Interlocked & Monitor
    {
      id: "fc-25-01",
      moduleId: "25",
      moduleTitle: "Concurrencia de Bajo Nivel: Interlocked & Monitor",
      category: "Arquitectura & Backend",
      question: "¿Por qué la operación de incremento 'x++' no es segura en entornos multihilo y cómo lo resuelve 'Interlocked.Increment'?",
      answer: "Porque 'x++' ejecuta tres pasos independientes en CPU (Read-Modify-Write: cargar a registro, incrementar en ALU y almacenar en memoria); 'Interlocked' ejecuta la operación de forma atómica a nivel de hardware.",
      explanation: "Un cambio de contexto entre los 3 pasos de x++ provoca pérdida de operaciones y datos corruptos. Interlocked.Increment instruye directamente a la CPU para bloquear el bus de memoria durante la instrucción (ej. LOCK XADD en x86) garantizando atomicidad sin la sobrecarga de bloquear hilos (Lock-Free).",
      authorRef: "Cuestionario SPC INEGI & Mark J. Price (C# Concurrency)",
      options: [
        "Porque x++ requiere tres pasos en CPU (Read-Modify-Write); Interlocked realiza la modificación atómica mediante instrucciones directas de hardware",
        "Porque x++ convierte la variable en un tipo de referencia temporal en el Heap; Interlocked la mantiene en el Stack",
        "Porque el recolector de basura suspende los hilos que ejecutan operadores unitarios; Interlocked desactiva el GC",
        "Porque x++ ejecuta internamente un spin-lock infinito; Interlocked utiliza un Mutex del Kernel"
      ],
      correctOption: 0
    },
    {
      id: "fc-25-02",
      moduleId: "25",
      moduleTitle: "Concurrencia de Bajo Nivel: Interlocked & Monitor",
      category: "Arquitectura & Backend",
      question: "¿Cuál es la transformación interna real que realiza el compilador de C# sobre un bloque 'lock(_syncRoot)'?",
      answer: "Emite un bloque try-finally donde invoca Monitor.Enter al inicio y garantiza la invocación a Monitor.Exit en el bloque finally.",
      explanation: "lock(obj) es azúcar sintáctico de C#. El bloque try-finally garantiza que Monitor.Exit se ejecute sin importar si ocurre una excepción no controlada, evitando deadlocks permanentes. Además, Monitor duerme el hilo en la cola del SO (no es un spin-lock que queme CPU).",
      authorRef: "Cuestionario SPC INEGI / CLR via C# (Jeffrey Richter)",
      options: [
        "Emite un bloque try-finally donde invoca Monitor.Enter al ingresar y garantiza la invocación a Monitor.Exit en el bloque finally",
        "Un bucle de espera activa (spin-lock) gestionado por TaskFactory que sondea continuamente una dirección de memoria",
        "La creación de un SemaphoreSlim asíncrono con capacidad inicial 1",
        "La invocación a un Mutex de Kernel que bloquea el proceso en el Administrador de Tareas"
      ],
      correctOption: 0
    },
    {
      id: "fc-25-03",
      moduleId: "25",
      moduleTitle: "Concurrencia de Bajo Nivel: Interlocked & Monitor",
      category: "Arquitectura & Backend",
      question: "¿En qué se diferencian arquitectónicamente 'Mutex' y 'SemaphoreSlim' en .NET?",
      answer: "Mutex es una primitiva de Kernel del SO con exclusión mutua de 1 hilo/proceso y thread ownership; SemaphoreSlim opera en espacio de usuario, regula N ranuras (throttling) y admite await WaitAsync().",
      explanation: "Mutex puede ser nombrado para sincronizar procesos distintos en el SO (ej. aplicación de instancia única) pero es pesado. SemaphoreSlim es ligero, vive en memoria del proceso, no tiene propiedad de hilo y es la herramienta estándar para regular concurrencia asíncrona.",
      authorRef: "Cuestionario SPC INEGI / Microsoft Threading Documentation",
      options: [
        "Mutex es de Kernel con exclusión de 1 hilo/proceso y thread ownership; SemaphoreSlim opera en espacio de usuario, regula N ranuras (throttling) y admite await WaitAsync()",
        "Mutex solo funciona dentro del mismo proceso; SemaphoreSlim permite sincronizar múltiples procesos independientes en el sistema operativo",
        "SemaphoreSlim bloquea hilos nativos de Windows; Mutex opera exclusivamente en la memoria RAM del CLR",
        "Son idénticos; SemaphoreSlim es simplemente el nombre moderno que recibió el Mutex a partir de .NET 6"
      ],
      correctOption: 0
    },
    {
      id: "fc-25-04",
      moduleId: "25",
      moduleTitle: "Concurrencia de Bajo Nivel: Interlocked & Monitor",
      category: "Arquitectura & Backend",
      question: "¿Qué representa fundamentalmente una 'Task' en comparación con el manejo directo de objetos de la clase 'Thread'?",
      answer: "Task es una promesa o abstracción de alto nivel de una operación asíncrona que gestiona el ThreadPool, mientras Thread mapea directamente a un hilo nativo del SO de 1 MB de stack.",
      explanation: "Un Thread nativo es pesado en consumo de memoria (1 MB) y tiempo de cambio de contexto (context switch). Task desacopla el trabajo del hilo físico subyacente, permitiendo que miles de tareas reutilicen de forma eficiente un grupo acotado de hilos de trabajo gestionados por el CLR.",
      authorRef: "Cuestionario SPC INEGI & SWEBOK v4 / Stephen Cleary",
      options: [
        "Una abstracción de alto nivel de una operación asíncrona gestionada por el ThreadPool, a diferencia de un hilo nativo del SO con 1 MB de stack",
        "Un proceso independiente aislado en el Kernel con su propio espacio de memoria virtual protegido",
        "Un bucle de hardware que ejecuta microcódigo directamente en el procesador",
        "Una estructura de datos que solo funciona en aplicaciones monohilo de interfaz gráfica"
      ],
      correctOption: 0
    },
    {
      id: "fc-25-05",
      moduleId: "25",
      moduleTitle: "Concurrencia de Bajo Nivel: Interlocked & Monitor",
      category: "Arquitectura & Backend",
      question: "En escenarios multihilo en C#, ¿por qué es peligroso disparar eventos dentro de un bloque 'lock'?",
      answer: "Porque invoca código externo desconocido con el cerrojo retenido, abriendo un riesgo crítico de inversión de bloqueos y Deadlock.",
      explanation: "Los suscriptores del evento pueden intentar adquirir otro lock o sincronizarse con un hilo principal que a su vez espera el lock original. El patrón seguro consiste en tomar una copia local de la referencia con 'MyEvent?.Invoke(...)', o notificar a los suscriptores fuera de la sección crítica.",
      authorRef: "Cuestionario SPC INEGI & Framework Design Guidelines (Kwalina & Abrams)",
      options: [
        "Porque invoca código externo arbitrario con el cerrojo retenido, provocando inversión de dependencias y riesgo crítico de Deadlock",
        "Porque el compilador de C# genera un error CS0103 en tiempo de compilación impidiendo compilar el ensamblado",
        "Porque los eventos eliminan automáticamente la memoria de los suscriptores",
        "Porque la clase MulticastDelegate no admite más de un hilo registrado a la vez"
      ],
      correctOption: 0
    },

    // Módulo 26: Servicios de Fondo, Resiliencia & Caché
    {
      id: "fc-26-01",
      moduleId: "26",
      moduleTitle: "Servicios de Fondo, Resiliencia & Caché",
      category: "Arquitectura & Backend",
      question: "¿Qué componente de Microsoft.Extensions.Hosting es la clase base abstracta recomendada para servicios de fondo de larga duración?",
      answer: "BackgroundService, la cual implementa IHostedService y expone el método 'protected abstract Task ExecuteAsync(CancellationToken stoppingToken)'.",
      explanation: "TaskFactory es solo una clase auxiliar para crear tareas en el ThreadPool, pero no un componente hospedado. BackgroundService se integra con el ciclo de vida del Host, gestionando el arranque y el apagado ordenado (graceful shutdown) mediante stoppingToken.",
      authorRef: "Cuestionario SPC INEGI & Microsoft.Extensions.Hosting",
      options: [
        "BackgroundService, implementando IHostedService y exponiendo 'ExecuteAsync(CancellationToken stoppingToken)'",
        "TaskFactory, invocando StartNew() con TaskCreationOptions.LongRunning",
        "ThreadPoolWorker, configurando un Thread nativo de segundo plano",
        "ProcessHostExecutor, heredando de System.Diagnostics.Process"
      ],
      correctOption: 0
    },
    {
      id: "fc-26-02",
      moduleId: "26",
      moduleTitle: "Servicios de Fondo, Resiliencia & Caché",
      category: "Arquitectura & Backend",
      question: "¿Por qué se recomienda combinar 'AbsoluteExpiration' con 'SlidingExpiration' en una estrategia de memoria caché en .NET?",
      answer: "Para evitar que un dato consultado de manera frecuente y continua renueve su tiempo indefinidamente y permanezca para siempre en memoria con información obsoleta.",
      explanation: "La expiración deslizante (Sliding) renueva el temporizador en cada lectura. Sin un tope absoluto (AbsoluteExpiration), un flujo continuo de tráfico mantendrá el dato congelado en caché de por vida, sirviendo información desfasada de la base de datos.",
      authorRef: "Cuestionario SPC INEGI & ASP.NET Core Caching Best Practices",
      options: [
        "Para evitar que un dato consultado continuamente renueve su tiempo indefinidamente y permanezca para siempre en memoria con información obsoleta",
        "Para que la memoria de la caché se replique automáticamente en todos los nodos de Kubernetes sin usar Redis",
        "Para reducir el consumo de CPU de la recolección de basura a cero",
        "Para forzar que los datos se guarden en disco duro cifrados con AES-256"
      ],
      correctOption: 0
    },
    {
      id: "fc-26-03",
      moduleId: "26",
      moduleTitle: "Servicios de Fondo, Resiliencia & Caché",
      category: "Arquitectura & Backend",
      question: "En el patrón Circuit Breaker con Polly, ¿cuál es el comportamiento exacto del sistema cuando el circuito está en estado 'Open' (Abierto)?",
      answer: "Intercepta las llamadas salientes y responde con un fallo inmediato (fail-fast) sin enviar tráfico de red hacia el servicio remoto colapsado.",
      explanation: "El estado Abierto protege tanto al cliente (libera hilos inmediatamente sin esperar timeouts) como al servicio downstream (le permite recuperarse de la sobrecarga). Tras un tiempo de enfriamiento, pasa a Semi-Abierto (Half-Open) para enviar una llamada de prueba.",
      authorRef: "Cuestionario SPC INEGI & Michael Nygard (Release It! / Polly)",
      options: [
        "Intercepta las llamadas salientes y responde con un fallo inmediato (fail-fast) sin enviar tráfico de red hacia el servicio remoto colapsado",
        "Reinicia automáticamente el contenedor de Docker del servidor web llamador",
        "Reintenta la llamada 100 veces por segundo hasta que el servidor remoto vuelva a estar en línea",
        "Convierte automáticamente las peticiones HTTP REST en sockets binarios de gRPC"
      ],
      correctOption: 0
    },
    {
      id: "fc-26-04",
      moduleId: "26",
      moduleTitle: "Servicios de Fondo, Resiliencia & Caché",
      category: "Arquitectura & Backend",
      question: "En el ecosistema .NET 8 (Mark J. Price), ¿por qué se utiliza 'Six Labors ImageSharp' para procesar imágenes en servidores en lugar de 'System.Drawing.Common'?",
      answer: "ImageSharp es 100% código administrado C# y multiplataforma; System.Drawing.Common depende de GDI+ nativo de Windows y falla en Linux con PlatformNotSupportedException.",
      explanation: "Desde .NET 6, Microsoft restringió System.Drawing.Common exclusivamente a Windows debido a graves problemas de estabilidad y fugas de memoria con libgdiplus en Linux. ImageSharp es la librería moderna estándar para redimensionar y manipular gráficos de forma asíncrona en microservicios.",
      authorRef: "Mark J. Price (Apps and Services with .NET 8) & Microsoft",
      options: [
        "ImageSharp es 100% administrado C# multiplataforma; System.Drawing.Common depende de GDI+ nativo de Windows y falla en Linux",
        "System.Drawing.Common no soporta archivos de imagen en formato JPEG o PNG",
        "ImageSharp duplica el consumo de RAM para desactivar el recolector de basura",
        "System.Drawing.Common fue prohibida por las normas ISO de desarrollo web"
      ],
      correctOption: 0
    },
    {
      id: "fc-26-05",
      moduleId: "26",
      moduleTitle: "Servicios de Fondo, Resiliencia & Caché",
      category: "Arquitectura & Backend",
      question: "¿Cuál es el valor arquitectónico del Logging Estructurado con 'Serilog' frente a escribir texto concatenado tradicional?",
      answer: "Preserva las propiedades del evento como pares clave-valor estructurados en JSON mediante Message Templates, permitiendo búsquedas e indexación precisa en Seq o Elasticsearch.",
      explanation: "Al usar plantillas como 'Usuario {UserId} realizó pedido {OrderId}', Serilog no concatena cadenas opacas, sino que emite un documento enriquecido con metadatos contextuales (UserId, OrderId, Timestamp) que los motores de observabilidad pueden filtrar y agregar numéricamente.",
      authorRef: "Mark J. Price & Serilog Architectural Guidelines",
      options: [
        "Preserva propiedades clave-valor en JSON mediante Message Templates para indexación precisa en plataformas como Seq o Elasticsearch",
        "Reduce a cero la necesidad de crear índices en bases de datos relacionales SQL",
        "Cifra automáticamente todo el código fuente del proyecto con llaves AES de 256 bits",
        "Convierte los mensajes de log en comandos de PowerShell ejecutados por el Kernel"
      ],
      correctOption: 0
    },

    // =========================================================================
    // BLOQUE 8: GESTIÓN AVANZADA Y ESTRUCTURAS DE DATOS (SPC INEGI)
    // =========================================================================

    // Módulo 27: Estimación PERT & Validación de Estrategia (Marion E. Haynes)
    {
      id: "fc-27-01",
      moduleId: "27",
      moduleTitle: "Estimación PERT & Validación de Estrategia",
      category: "Gestión de Proyectos",
      question: "¿Cuáles son las fórmulas canónicas de PERT para calcular el Tiempo Esperado (Te), Desviación Estándar (σ) y Varianza (σ²)?",
      answer: "Te = (To + 4Tm + Tp) / 6;  σ = (Tp - To) / 6;  σ² = ((Tp - To) / 6)².",
      explanation: "PERT asume una distribución probabilística Beta. El tiempo más probable (Tm) recibe una ponderación cuádruple (4), y el rango completo de dispersión (Tp - To) se divide entre 6 desviaciones estándar que abarcan el 99.7% del área bajo la curva normal.",
      authorRef: "Marion E. Haynes & Guía SPC INEGI",
      options: [
        "Te = (To + 4Tm + Tp) / 6; σ = (Tp - To) / 6; σ² = ((Tp - To) / 6)²",
        "Te = (To + Tm + Tp) / 3; σ = (Tp - To) / 2; σ² = (Tp - To)²",
        "Te = (2To + 3Tm + Tp) / 5; σ = Tm / 6; σ² = Tm² / 36",
        "Te = (To + 6Tm + Tp) / 8; σ = (Tp - To) / 4; σ² = ((Tp - To) / 4)²"
      ],
      correctOption: 0
    },
    {
      id: "fc-27-02",
      moduleId: "27",
      moduleTitle: "Estimación PERT & Validación de Estrategia",
      category: "Gestión de Proyectos",
      question: "En diagramas de red PERT (método flechas AOA), ¿cuál es la definición, consumo y propósito de una Actividad Ficticia (Dummy)?",
      answer: "Se dibuja con flecha punteada, consume 0 tiempo y 0 recursos, y su único propósito es señalar precedencia lógica y evitar duplicidad de nodos.",
      explanation: "Una actividad ficticia o dummy no representa trabajo real. Sirve para modelar dependencias lógicas complejas y asegurar que cada actividad quede identificada de forma unívoca por su par de nodos (nodo origen y nodo fin) sin compartir ambos a la vez.",
      authorRef: "Marion E. Haynes (Administración de Proyectos) & SPC INEGI",
      options: [
        "Se dibuja con flecha punteada, consume 0 tiempo y 0 recursos, y solo señala precedencia lógica evitando nodos compartidos",
        "Es una tarea de contingencia que consume el 10% del presupuesto y 5 días de holgura",
        "Una actividad realizada por un subcontratista externo con duración variable no cuantificable",
        "Un hito de facturación que consume tiempo de auditoría pero no recursos técnicos"
      ],
      correctOption: 0
    },
    {
      id: "fc-27-03",
      moduleId: "27",
      moduleTitle: "Estimación PERT & Validación de Estrategia",
      category: "Gestión de Proyectos",
      question: "Según Marion E. Haynes en la Fase de Definición (Capítulo 1), ¿cuáles son los TRES métodos formales para validar una estrategia ('¿Funcionará?')?",
      answer: "1) Estudio de mercado, 2) Ensayo de ejemplo (prueba piloto en campo) y 3) Simulación por computadora.",
      explanation: "Haynes cita exactamente estos tres métodos para verificar la viabilidad de la solución antes de comprometer fondos y recursos en la planeación y ejecución del proyecto.",
      authorRef: "Marion E. Haynes (Administración de Proyectos - Cap. 1) & SPC INEGI",
      options: [
        "1) Estudio de mercado, 2) Ensayo de ejemplo (prueba piloto en campo) y 3) Simulación por computadora",
        "1) Lluvia de ideas, 2) Diagrama de Ishikawa y 3) Matriz FODA",
        "1) Entrevistas a usuarios, 2) Historias de usuario ágiles y 3) Integración continua",
        "1) Análisis de costo-beneficio, 2) Retorno de inversión (ROI) y 3) Tasa interna de retorno (TIR)"
      ],
      correctOption: 0
    },

    // Módulo 28: Direccionamiento de Memoria en Matrices (Osvaldo Cairó)
    {
      id: "fc-28-01",
      moduleId: "28",
      moduleTitle: "Direccionamiento de Memoria en Matrices A[m×n]",
      category: "Estructuras & Algoritmos",
      question: "En una matriz A[m×n] con base 1, ¿cuál es la fórmula canónica de Osvaldo Cairó para calcular la dirección de memoria por renglones (Row-Major)?",
      answer: "LOC(A[i, j]) = POSINI + [ n * (i - 1) + (j - 1) ] * w.",
      explanation: "Para alcanzar el renglón i se saltan (i - 1) renglones completos de n columnas cada uno. Luego se suman (j - 1) celdas en el renglón actual y el total acumulado de celdas se multiplica por el tamaño de palabra w.",
      authorRef: "Osvaldo Cairó (Estructuras de Datos) & SPC INEGI",
      options: [
        "LOC(A[i, j]) = POSINI + [ n * (i - 1) + (j - 1) ] * w",
        "LOC(A[i, j]) = POSINI + [ m * (i - 1) + (j - 1) ] * w",
        "LOC(A[i, j]) = POSINI + [ n * i + j ] * w",
        "LOC(A[i, j]) = POSINI + [ (i - 1) + (j - 1) ] * (m * n * w)"
      ],
      correctOption: 0
    },
    {
      id: "fc-28-02",
      moduleId: "28",
      moduleTitle: "Direccionamiento de Memoria en Matrices A[m×n]",
      category: "Estructuras & Algoritmos",
      question: "En una matriz A[m×n] con base 1, ¿cuál es la fórmula canónica de Osvaldo Cairó para calcular la dirección de memoria por columnas (Column-Major)?",
      answer: "LOC(A[i, j]) = POSINI + [ m * (j - 1) + (i - 1) ] * w.",
      explanation: "Para alcanzar la columna j se saltan (j - 1) columnas completas, cada una de longitud m (número de renglones). Luego se suman (i - 1) celdas en la columna actual y se multiplica por el factor de tamaño de elemento w.",
      authorRef: "Osvaldo Cairó (Estructuras de Datos) & SPC INEGI",
      options: [
        "LOC(A[i, j]) = POSINI + [ m * (j - 1) + (i - 1) ] * w",
        "LOC(A[i, j]) = POSINI + [ n * (j - 1) + (i - 1) ] * w",
        "LOC(A[i, j]) = POSINI + [ m * j + i ] * w",
        "LOC(A[i, j]) = POSINI + [ (j - 1) * n + (i - 1) * m ] * w"
      ],
      correctOption: 0
    },

    // Módulo 29: Executable UML (xUML) · Ian Sommerville (Cap. 5)
    {
      id: "fc-29-01",
      moduleId: "29",
      moduleTitle: "Executable UML (xUML) · Ian Sommerville",
      category: "Ingeniería de Software",
      question: "De acuerdo con Ian Sommerville (Cap. 5), ¿cuáles son los TRES modelos que conforman el subconjunto formal estricto de Executable UML (xUML) para compilar a código?",
      answer: "Modelos de Dominio, Modelos de Clases y Modelos de Estados (State Machines).",
      explanation: "La regla canónica de Sommerville es: Dominio (límites y entidades del mundo real) + Clases (atributos estáticos y asociaciones) + Estados (semántica dinámica y ciclo de vida) = Código Ejecutable. Ningún otro diagrama UML integra el estándar ejecutable formal.",
      authorRef: "Ian Sommerville (Software Engineering - Cap. 5: Modelado del Sistema)",
      options: [
        "Modelos de Dominio, Modelos de Clases y Modelos de Estados (State Machines)",
        "Diagramas de Casos de Uso, Diagramas de Secuencia y Diagramas de Componentes",
        "Diagramas de Actividades, Diagramas de Despliegue y Diagramas de Paquetes",
        "Diagramas de Entidad-Relación, Diagramas DFD y Diccionario de Datos"
      ],
      correctOption: 0
    },
    {
      id: "fc-29-02",
      moduleId: "29",
      moduleTitle: "Executable UML (xUML) · Ian Sommerville",
      category: "Ingeniería de Software",
      question: "¿Por qué los Diagramas de Secuencia y los Diagramas de Casos de Uso quedan EXCLUIDOS del estándar de compilación en Executable UML (xUML)?",
      answer: "Los Casos de Uso son requerimientos informales en texto, y los de Secuencia solo modelan escenarios parciales que colisionan y crean redundancia con las máquinas de estados.",
      explanation: "Los Casos de Uso carecen de semántica computable precisa. Los diagramas de secuencia representan interacciones parciales aisladas; intentar compilar desde secuencias introduce ambigüedad lógica que choca directamente con la máquina de estados finita determinista.",
      authorRef: "Ian Sommerville (Software Engineering: Executable UML)",
      options: [
        "Los Casos de Uso son informales y los de Secuencia solo modelan trazas parciales que generan colisión y redundancia con los Estados",
        "Porque el compilador de C# prohíbe el uso de flechas de mensajes sincrónicos",
        "Porque los casos de uso consumen excesivo espacio en disco duro al compilar",
        "Porque los diagramas de secuencia solo son compatibles con bases de datos NoSQL"
      ],
      correctOption: 0
    }
  ];
});

