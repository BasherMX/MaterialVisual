/**
 * Material Visual · Banco Maestro Canónico de Reactivos
 * BLOQUE V: BASES DE DATOS RELACIONALES & FÍSICAS
 * (Catherine M. Ricardo, Mercedes Marqués, Andy Oppel)
 *
 * Taxonomía: 40% Cortas | 40% Medianas | 20% Escenarios
 * Rigor: C(2,1) x C(5,3) = 20 combinaciones por reactivo
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    const questions = factory();
    if (root.MATERIAL_BANK && typeof root.MATERIAL_BANK.registerBlock === 'function') {
      root.MATERIAL_BANK.registerBlock('bloque-5', questions);
    }
    root.MATERIAL_BLOCK_5 = questions;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return [
    {
      "id": "q-b5-001",
      "blockId": "bloque-5",
      "topic": "Transacciones ACID · Niveles de Aislamiento Ricardo",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Qué fenómeno de lectura anómala previene el nivel de aislamiento Serializable frente a Repeatable Read en un DBMS relacional?",
      "correctPool": [
        "Lecturas Fantasma (Phantom Reads).",
        "Lecturas Fantasma (bloqueos de rango)."
      ],
      "distractorPool": [
        "Lecturas Sucias (Dirty Reads).",
        "Lecturas No Repetibles (Non-Repeatable Reads).",
        "Actualizaciones Perdidas (Lost Updates).",
        "Bloqueos Mutuos (Deadlocks).",
        "Escrituras Obsoletas (Stale Writes)."
      ],
      "feedback": "Doctrina ANSI SQL: Repeatable Read previene lecturas sucias y no repetibles sobre filas existentes, pero permite que otra transacción inserte nuevas filas que cumplan la condición del WHERE (Lecturas Fantasma). Solo Serializable previene fantasmas mediante cerrojos de rango o Serializable Snapshot Isolation.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9: Control de Concurrencia)"
    },
    {
      "id": "q-b5-002",
      "blockId": "bloque-5",
      "topic": "Normalización de Bases de Datos · 2NF Ricardo",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Una tabla relacional se encuentra en Primera Forma Normal (1NF) y posee una clave primaria compuesta por las columnas {CursoID, EstudianteID}. Para alcanzar la Segunda Forma Normal (2NF), ¿qué condición formal debe satisfacerse?",
      "correctPool": [
        "Ningún atributo no primo debe depender funcionalmente de una parte propia de la clave primaria (eliminación de dependencias parciales).",
        "Todos los atributos que no pertenecen a la clave primaria deben tener dependencia funcional completa de la clave compuesta completa."
      ],
      "distractorPool": [
        "No deben existir dependencias transitivas entre atributos que no formen parte de ninguna clave candidata.",
        "Todos los atributos de la relación deben tener nombres únicos y ordenarse alfabéticamente en el catálogo físico.",
        "La tabla debe disponer de un índice agrupado basado en un árbol B+ para agilizar las búsquedas por rango.",
        "Las dependencias multivaluadas deben descomponerse en esquemas independientes que preserven las proyecciones.",
        "Los valores nulos deben reemplazarse obligatoriamente por cadenas de texto vacías en todas las tuplas."
      ],
      "feedback": "2NF exige que la relación esté en 1NF y que ningún atributo no primo dependa parcialmente de ninguna clave candidata (dependencia funcional completa). Si un atributo depende solo de CursoID o solo de EstudianteID, debe extraerse a otra tabla.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Normalización)"
    },
    {
      "id": "q-b5-003",
      "blockId": "bloque-5",
      "topic": "Arquitectura de Bases de Datos · ANSI/SPARC 3 Niveles Marqués",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En la Arquitectura ANSI/SPARC de tres niveles, ¿qué principio técnico garantiza que se pueda reorganizar la estructura física de almacenamiento (como añadir índices o cambiar bloques de disco) sin alterar los programas de aplicación?",
      "correctPool": [
        "Independencia Física de Datos (Physical Data Independence).",
        "Independencia Física de Datos entre el nivel interno y el nivel conceptual."
      ],
      "distractorPool": [
        "Independencia Lógica de Datos frente a vistas externas de usuario.",
        "Consistencia Transaccional Estricta basada en el protocolo 2PC.",
        "Normalización en Forma Normal de Boyce-Codd (BCNF).",
        "Encapsulamiento de Procedimientos Almacenados en memoria compartida.",
        "Replicación Asíncrona de Bloques de Control del Sistema Gestor."
      ],
      "feedback": "La Independencia Física de Datos es la capacidad de modificar el esquema interno (métodos de acceso, índices, estructuras de archivos) sin tener que cambiar el esquema conceptual ni los esquemas externos (vistas de las aplicaciones).",
      "reference": "Mercedes Marqués · Bases de Datos (Cap. 1: Conceptos Fundamentales de BD)"
    },
    {
      "id": "q-b5-004",
      "blockId": "bloque-5",
      "topic": "Diseño Físico · Índices Agrupados vs No Agrupados Oppel",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Por qué una tabla en un motor relacional como SQL Server o MySQL InnoDB solo puede tener **UN ÚNICO** Índice Agrupado (Clustered Index)?",
      "correctPool": [
        "Porque las filas físicas de datos de la tabla se ordenan físicamente en el disco según la clave de dicho índice.",
        "Porque el índice agrupado define el orden físico de almacenamiento de las tuplas en las páginas de datos."
      ],
      "distractorPool": [
        "Porque el motor de base de datos prohíbe crear más de una clave primaria por política del compilador.",
        "Porque el espacio del archivo de registro de transacciones (LDF) colapsaría ante dos estructuras B+.",
        "Porque los índices agrupados requieren memoria caché exclusiva de primer nivel en el procesador.",
        "Porque el estándar ANSI SQL prohíbe la existencia de múltiples árboles de indexación en la misma base.",
        "Porque los índices no agrupados anulan automáticamente las restricciones de integridad referencial."
      ],
      "feedback": "Las tuplas físicas de la tabla solo pueden residir ordenadas de una única manera física sobre las páginas de disco. Como el Índice Agrupado es la propia tabla ordenada físicamente en las hojas del árbol B+, solo puede existir uno por tabla.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 8: Optimización e Indexación Física)"
    },
    {
      "id": "q-b5-005",
      "blockId": "bloque-5",
      "topic": "Axiomas de Armstrong · Dependencias Funcionales Ricardo",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "En la teoría relacional de Armstrong, si X ➔ Y, ¿qué axioma fundamental establece que para cualquier conjunto de atributos Z se cumple XZ ➔ YZ?",
      "correctPool": [
        "Axioma de Aumento (Augmentation).",
        "Regla de Aumento de Armstrong."
      ],
      "distractorPool": [
        "Axioma de Reflexividad (Reflexivity).",
        "Axioma de Transitividad (Transitivity).",
        "Regla de Descomposición (Decomposition).",
        "Regla de Pseudotransitividad.",
        "Regla de Unión (Union)."
      ],
      "feedback": "Los 3 axiomas fundamentales de Armstrong son: 1) Reflexividad: si Y es subconjunto de X, entonces X -> Y; 2) Aumento: si X -> Y, entonces XZ -> YZ; 3) Transitividad: si X -> Y e Y -> Z, entonces X -> Z.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Dependencias Funcionales)"
    },
    {
      "id": "q-b5-006",
      "blockId": "bloque-5",
      "topic": "Sublenguajes SQL · Taxonomía Oppel",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿A qué sublenguaje formal de SQL pertenecen las sentencias GRANT y REVOKE?",
      "correctPool": [
        "DCL (Data Control Language).",
        "DCL (Lenguaje de Control)."
      ],
      "distractorPool": [
        "DDL (Data Definition Language).",
        "DML (Data Manipulation Language).",
        "TCL (Transaction Control).",
        "DQL (Data Query Language).",
        "MDL (Metadata Definition)."
      ],
      "feedback": "DCL (Data Control Language) administra los privilegios de seguridad y permisos de los usuarios en la base de datos mediante sentencias como GRANT y REVOKE.",
      "reference": "Andy Oppel · Bases de Datos & Mercedes Marqués"
    },
    {
      "id": "q-b5-007",
      "blockId": "bloque-5",
      "topic": "Normalización · Tercera Forma Normal (3NF)",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Una relación R satisface la 2NF. Si existe una dependencia funcional X ➔ Y entre atributos, ¿qué condición exige la Tercera Forma Normal (3NF) para que sea admisible?",
      "correctPool": [
        "X debe ser una superclave de R, o bien Y debe ser un atributo primo (pertenecer a alguna clave candidata).",
        "No deben existir dependencias transitivas de atributos no primos respecto a ninguna clave candidata."
      ],
      "distractorPool": [
        "X debe ser estrictamente una clave foránea referenciando a una tabla de hechos consolidada.",
        "Y debe contener valores únicos que no admitan la existencia de tuplas con campos nulos.",
        "La cardinalidad de la relación debe restringirse a asociaciones uno-a-uno no identificadas.",
        "X e Y deben ordenarse en una estructura de montículo Min-Heap en el archivo de datos.",
        "La tabla debe particionarse horizontalmente en clústeres replicados sin redundancia."
      ],
      "feedback": "3NF formalmente establece: Para toda dependencia funcional no trivial X -> Y en R, o bien X es una superclave, o bien Y es un atributo primo (miembro de una clave candidata). Esto elimina las dependencias transitivas entre no primos.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Formas Normales)"
    },
    {
      "id": "q-b5-008",
      "blockId": "bloque-5",
      "topic": "Transacciones ACID · Control de Concurrencia Ricardo",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Qué anomalía ocurre cuando una Transacción 1 lee los cambios efectuados por una Transacción 2 que posteriormente ejecuta un ROLLBACK?",
      "correctPool": [
        "Lectura Sucia (Dirty Read).",
        "Lectura Sucia de datos no confirmados."
      ],
      "distractorPool": [
        "Lectura No Repetible (Non-Repeatable Read).",
        "Lectura Fantasma (Phantom Read).",
        "Actualización Perdida (Lost Update).",
        "Bloqueo Vivo (Livelock).",
        "Inversión de Prioridades."
      ],
      "feedback": "Una Lectura Sucia (Dirty Read) ocurre cuando una transacción lee datos modificados por otra transacción concurrente que aún no ha confirmado sus cambios (sin COMMIT). Si la segunda transacción hace ROLLBACK, los datos leídos eran inválidos.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9: Control de Concurrencia)"
    },
    {
      "id": "q-b5-009",
      "blockId": "bloque-5",
      "topic": "Modelado Conceptual · Entidades Débiles Marqués",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En el modelo Entidad-Relación, ¿qué propiedad caracteriza ontológicamente a una 'Entidad Débil' respecto a su entidad fuerte propietaria?",
      "correctPool": [
        "No posee atributos propios suficientes para formar una clave primaria y depende en existencia e identificación de la entidad fuerte.",
        "Depende de la entidad fuerte mediante una relación identificadora, formando su clave con el discriminador propio más la clave de la fuerte."
      ],
      "distractorPool": [
        "Almacena menos de diez tuplas físicas en las páginas de almacenamiento del disco secundario.",
        "No admite la definición de índices agrupados ni restricciones de integridad referencial.",
        "Solo puede relacionarse con tablas de dimensiones en un esquema de estrella tipo Snowflake.",
        "Se destruye automáticamente cada medianoche mediante una tarea en segundo plano programada.",
        "Es una vista temporal que no persiste físicamente en el catálogo del motor relacional."
      ],
      "feedback": "Una entidad débil no tiene atributos suficientes para formar una clave primaria por sí misma; tiene dependencia de existencia y de identificación de una entidad fuerte a través de una relación identificadora. Su clave primaria se compone de la clave de la fuerte más su clave parcial (discriminador).",
      "reference": "Mercedes Marqués · Bases de Datos (Cap. 3: Modelo Entidad-Relación)"
    },
    {
      "id": "q-b5-010",
      "blockId": "bloque-5",
      "topic": "Diseño Físico · Índices Cubrientes (Covering Indexes) Oppel",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Una consulta frecuente 'SELECT EmpleadoID, Nombre, Salario FROM Empleados WHERE DepartamentoID = 10' realiza continuamente costosas operaciones de búsqueda en la tabla (RID/Key Lookup) porque el índice actual solo está definido sobre la columna DepartamentoID. ¿Cómo se resuelve este cuello de botella con un Índice Cubriente?",
      "correctPool": [
        "Creando un índice no agrupado sobre DepartamentoID que incluya las columnas Nombre y Salario mediante la cláusula INCLUDE.",
        "Diseñando un índice cubriente sobre DepartamentoID con INCLUDE(Nombre, Salario) para que el motor obtenga todas las columnas desde las hojas del índice sin tocar la tabla."
      ],
      "distractorPool": [
        "Eliminando el índice agrupado para convertir la tabla en un montón desordenado (Heap) de acceso aleatorio.",
        "Definiendo un disparador (trigger) en la tabla que copie los datos a una tabla temporal en cada inserción.",
        "Cambiando el nivel de aislamiento de la base de datos a Read Uncommitted para saltar los bloqueos de página.",
        "Fragmentando la tabla Empleados verticalmente en 3 bases de datos independientes conectadas por red.",
        "Forzando al optimizador a realizar un escaneo completo de tabla (Table Scan) mediante un hint de consulta."
      ],
      "feedback": "Un Índice Cubriente (Covering Index) contiene todas las columnas requeridas por la consulta en el WHERE y en el SELECT. Al usar INCLUDE(Nombre, Salario) en el índice no agrupado sobre DepartamentoID, el motor satisface la consulta completa desde el índice sin tener que acceder a la página de datos de la tabla (evitando el RID Lookup / Key Lookup).",
      "reference": "Andy Oppel · Bases de Datos (Cap. 8: Optimización e Indexación Física)"
    },
    {
      "id": "q-b5-011",
      "blockId": "bloque-5",
      "topic": "SQL Sublenguajes · DDL vs DML Oppel",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Cuál de las siguientes instrucciones SQL pertenece al Lenguaje de Definición de Datos (DDL) y **NO** genera registros individuales en el log para cada fila eliminada?",
      "correctPool": [
        "TRUNCATE TABLE (operación DDL).",
        "La sentencia DDL TRUNCATE TABLE."
      ],
      "distractorPool": [
        "DELETE FROM (operación DML).",
        "DROP VIEW (operación DDL de vistas).",
        "MERGE INTO (operación DML).",
        "UPDATE WHERE (operación DML).",
        "INSERT INTO (operación DML)."
      ],
      "feedback": "TRUNCATE TABLE es una instrucción DDL que vacía una tabla desasignando las páginas de datos completas, registrando mínimamente la desasignación en el log de transacciones y restableciendo los contadores de identidad. DELETE es una sentencia DML que registra cada fila borrada individualmente.",
      "reference": "Andy Oppel & Catherine M. Ricardo · Bases de Datos"
    },
    {
      "id": "q-b5-012",
      "blockId": "bloque-5",
      "topic": "Normalización · Forma Normal de Boyce-Codd (BCNF)",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Cuál es la condición estricta que exige la Forma Normal de Boyce-Codd (BCNF) y en qué supera a la Tercera Forma Normal (3NF)?",
      "correctPool": [
        "En BCNF, para toda dependencia funcional no trivial X ➔ Y, el determinante X debe ser estrictamente una superclave (suprime la excepción de atributos primos de 3NF).",
        "BCNF exige que todo determinante funcional sea superclave, resolviendo anomalías cuando existen múltiples claves candidatas compuestas superpuestas."
      ],
      "distractorPool": [
        "BCNF exige que todas las relaciones se almacenen exclusivamente en memoria RAM sin transacciones ACID.",
        "BCNF prohíbe el uso de claves primarias artificiales auto-incrementales en motores relacionales.",
        "BCNF obliga a que cada tabla contenga exactamente tres columnas físicas indexadas por árboles AVL.",
        "BCNF elimina las dependencias multivaluadas no triviales descomponiendo el producto cartesiano.",
        "BCNF exige que todas las consultas SELECT se ejecuten bajo el nivel de aislamiento Serializable."
      ],
      "feedback": "En 3NF se permite X -> Y si X es superclave O si Y es atributo primo. BCNF es más estricta: para TODA dependencia no trivial X -> Y, X debe ser forzosamente una superclave. Resuelve redundancias que 3NF tolera cuando hay claves candidatas compuestas que se solapan.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Normalización Avanzada)"
    },
    {
      "id": "q-b5-013",
      "blockId": "bloque-5",
      "topic": "Transacciones ACID · Atomicidad y WAL Ricardo",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "¿Cómo garantiza un gestor de base de datos relacional la Atomicidad y Durabilidad transaccional ante un fallo imprevisto de suministro eléctrico?",
      "correctPool": [
        "Mediante el protocolo de Registro Previo en el Diario (Write-Ahead Logging / WAL), asegurando que las modificaciones se escriban en el log antes de aplicarse a los datos en disco.",
        "Escribiendo los registros de transacciones en el log no volátil antes de vaciar las páginas sucias a los archivos de datos en disco."
      ],
      "distractorPool": [
        "Replicando la base de datos de manera sincrónica en cintas magnéticas de respaldo durante el cierre del sistema operativo.",
        "Manteniendo todas las conexiones activas suspendidas en el procesador hasta que se restablezca el servicio eléctrico.",
        "Ejecutando un escaneo completo de la tabla con el algoritmo de Kruskal para recalcular las claves primarias.",
        "Prohibiendo la ejecución de sentencias DML que modifiquen más de diez filas simultáneamente.",
        "Convirtiendo las transacciones confirmadas en vistas temporales de solo lectura en el catálogo del sistema."
      ],
      "feedback": "El principio de Write-Ahead Logging (WAL) establece que ningún cambio en las páginas de datos en memoria (dirty pages) puede escribirse en disco antes de que los registros correspondientes del log de transacciones se hayan escrito y forzado a almacenamiento persistente. Esto permite rehacer (REDO) o deshacer (UNDO) tras un fallo.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9 y Cap. 10)"
    },
    {
      "id": "q-b5-014",
      "blockId": "bloque-5",
      "topic": "Diseño Físico · Índices Hash vs B+ Oppel",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es la limitación principal de un Índice Hash frente a un Índice B+ Tree en un motor de base de datos relacional?",
      "correctPool": [
        "El Índice Hash no soporta búsquedas por rango (como BETWEEN, <, >), únicamente búsquedas por igualdad exacta (=).",
        "Los índices Hash son ineficientes para escaneos ordenados o por rangos al destruir el orden natural de las claves."
      ],
      "distractorPool": [
        "El Índice Hash consume diez veces más espacio en disco que cualquier estructura de árbol B+.",
        "El Índice Hash no permite almacenar valores numéricos, restringiéndose exclusivamente a texto binario.",
        "El Índice Hash inhabilita las transacciones con nivel de aislamiento Repeatable Read.",
        "El Índice Hash prohíbe la inserción de más de mil registros por tabla física.",
        "El Índice Hash solo puede ser consultado mediante procedimientos almacenados en Java."
      ],
      "feedback": "Una función hash dispersa uniformemente las claves en cubetas arbitrarias, destruyendo el orden secuencial. Por ello, los índices Hash son ideales para búsquedas puntuales directas (WHERE id = 5) en O(1), pero totalmente inútiles para rangos (WHERE fecha BETWEEN x AND y) u ordenamientos (ORDER BY).",
      "reference": "Andy Oppel · Bases de Datos & Catherine M. Ricardo"
    },
    {
      "id": "q-b5-015",
      "blockId": "bloque-5",
      "topic": "Álgebra Relacional · Operadores Fundamentales Marqués",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En el Álgebra Relacional de Codd, ¿qué operador unario produce una relación que contiene únicamente un subconjunto vertical de columnas especificadas?",
      "correctPool": [
        "Proyección (π).",
        "Operador Proyección (π)."
      ],
      "distractorPool": [
        "Selección (σ).",
        "Reunión Natural (⋈).",
        "Producto Cartesiano (x).",
        "Diferencia de Conjuntos (-).",
        "Intersección (∩)."
      ],
      "feedback": "La Selección (sigma / σ) filtra filas horizontalmente bajo una condición. La Proyección (pi / π) filtra columnas verticalmente seleccionando atributos específicos y eliminando duplicados resultantes.",
      "reference": "Mercedes Marqués · Bases de Datos (Cap. 4: Álgebra Relacional)"
    },
    {
      "id": "q-b5-016",
      "blockId": "bloque-5",
      "topic": "Control de Concurrencia · Bloqueo de Dos Fases (2PL)",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "¿Cuál es la regla rigurosa que impone el protocolo de Bloqueo de Dos Fases (2PL - Two-Phase Locking) para garantizar la serializabilidad de transacciones concurrentes?",
      "correctPool": [
        "Una transacción no puede solicitar ningún nuevo cerrojo (fase de contracción) una vez que ha liberado un cerrojo previo.",
        "Consta de una fase de crecimiento (solo adquisición de bloqueos) seguida de una fase de reducción (solo liberación de bloqueos)."
      ],
      "distractorPool": [
        "Todas las transacciones deben esperar dos segundos antes de adquirir un cerrojo exclusivo sobre una fila.",
        "Los bloqueos compartidos deben convertirse forzosamente en cerrojos exclusivos al comenzar la transacción.",
        "El motor debe reiniciar automáticamente la transacción si detecta que otra sesión lee la misma tabla.",
        "Ninguna transacción puede realizar más de dos sentencias UPDATE dentro del mismo bloque de código.",
        "El cerrojo de rango debe aplicarse obligatoriamente a todas las páginas de memoria caché del servidor."
      ],
      "feedback": "En el protocolo 2PL básico: Fase 1 (crecimiento): la transacción puede adquirir bloqueos pero no puede liberar ninguno. Fase 2 (contracción): la transacción puede liberar bloqueos pero no puede adquirir ninguno nuevo. Esto previene conflictos y asegura serializabilidad.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9: Control de Concurrencia)"
    },
    {
      "id": "q-b5-017",
      "blockId": "bloque-5",
      "topic": "Integridad Referencial · Acciones Referenciales Oppel",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "Al definir una Clave Foránea con la cláusula ON DELETE CASCADE, ¿qué ocurre en la tabla secundaria cuando se elimina una fila de la tabla principal?",
      "correctPool": [
        "Se eliminan automáticamente todas las filas secundarias correspondientes que hacían referencia a la tupla borrada.",
        "Las tuplas hijas dependientes se borran en cascada automáticamente para mantener la integridad."
      ],
      "distractorPool": [
        "Se rechaza la eliminación de la fila principal arrojando un error de violación de clave foránea.",
        "Los valores de las claves foráneas en la tabla secundaria se actualizan a NULL.",
        "Se suspende la transacción hasta que el administrador de la base de datos apruebe el borrado manual.",
        "Se desasigna el índice agrupado de la tabla secundaria forzando un escaneo completo.",
        "Se copian las filas huérfanas en el archivo de registro de transacciones como advertencia."
      ],
      "feedback": "ON DELETE CASCADE propaga la eliminación: al borrar un registro padre en la tabla principal, el motor elimina automáticamente todas las filas hijas referenciadas en la tabla dependiente.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 5: Integridad de Datos)"
    },
    {
      "id": "q-b5-018",
      "blockId": "bloque-5",
      "topic": "Optimización de Consultas · Planes de Ejecución Oppel",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "Al inspeccionar un Plan de Ejecución en un motor SQL relacional, ¿cuál de los siguientes operadores de lectura física es generalmente el más costoso sobre tablas grandes con millones de tuplas?",
      "correctPool": [
        "Table Scan (o Clustered Index Scan), recorriendo secuencialmente todas las páginas de la tabla.",
        "Escaneo completo de la tabla / índice agrupado al tener que inspeccionar la totalidad de las páginas de datos."
      ],
      "distractorPool": [
        "Index Seek, navegando de forma logarítmica a través del árbol B+ hacia la página exacta.",
        "Clustered Index Seek, aprovechando la clave física para situarse directamente en la tupla deseada.",
        "Constant Scan, generando filas en memoria virtual a partir de literales sin lecturas de disco.",
        "Stream Aggregate, agrupando datos previamente ordenados por el índice en memoria.",
        "Nested Loops Join, combinando un conjunto exterior de tres filas con una búsqueda puntual."
      ],
      "feedback": "Un Index Seek navega por el árbol B+ en tiempo O(log N) accediendo directamente a las páginas requeridas. Un Table Scan (o Clustered Index Scan) lee el 100% de las páginas de la tabla de inicio a fin en O(N), siendo el operador más costoso en tablas voluminosas si el filtro solo necesita unas pocas tuplas.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 8: Optimización de Consultas)"
    },
    {
      "id": "q-b5-019",
      "blockId": "bloque-5",
      "topic": "Normalización · Cuarta Forma Normal (4NF) Ricardo",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Qué tipo de anomalía y dependencia se encarga de descomponer y solucionar la Cuarta Forma Normal (4NF)?",
      "correctPool": [
        "Las Dependencias Multivaluadas independientes no triviales (MVD: X ↠ Y), descomponiendo hechos no relacionados que coexisten en la misma relación.",
        "Dependencias multivaluadas (MVDs), evitando el producto cartesiano de atributos independientes dentro de la misma tupla."
      ],
      "distractorPool": [
        "Las dependencias funcionales parciales sobre claves primarias compuestas en relaciones transaccionales.",
        "Las dependencias transitivas entre columnas que no pertenecen a ninguna clave candidata.",
        "Las violaciones de integridad referencial producidas por la ausencia de restricciones CHECK.",
        "Las pérdidas de precisión numérica originadas por el redondeo de tipos de datos de punto flotante.",
        "Los bloqueos mutuos originados por transacciones concurrentes con cerrojos de página."
      ],
      "feedback": "4NF resuelve Dependencias Multivaluadas (MVDs). Ocurre cuando dos atributos independientes (ej. Habilidades e Idiomas de un empleado) se modelan en la misma tabla, forzando la repetición cartesiana de combinaciones. 4NF exige separar cada hecho multivaluado independiente en su propia relación.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Dependencias Multivaluadas y 4NF)"
    },
    {
      "id": "q-b5-020",
      "blockId": "bloque-5",
      "topic": "Vistas Relacionales · Vistas Indexadas/Materializadas Oppel",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cuál es la diferencia fundamental entre una Vista Estándar y una Vista Materializada (o Indexada) en un motor relacional?",
      "correctPool": [
        "La estándar es una consulta guardada calculada al vuelo; la materializada persiste físicamente el resultado en disco y se actualiza ante cambios.",
        "La vista materializada almacena físicamente los datos calculados en páginas de disco, disponiendo de su propio índice agrupado."
      ],
      "distractorPool": [
        "La estándar persiste los resultados calculados en tablas temporales; la materializada recalcula los datos en cada consulta ejecutada.",
        "La estándar reside exclusivamente en la memoria caché L2 del procesador; la materializada se procesa en el registro de transacciones de log.",
        "La estándar se actualiza mediante triggers de aplicación; la materializada se compila directamente en el kernel del sistema operativo.",
        "La estándar solo admite operaciones de agregación complejas; la materializada se restringe a proyecciones simples de una única columna.",
        "La estándar no tiene esquema formal definido; la materializada requiere particionamiento obligatorio por hash de claves compuestas."
      ],
      "feedback": "Una vista estándar es simplemente una consulta almacenada virtual que se expande y ejecuta dinámicamente cada vez que se invoca. Una vista materializada (o indexada) calcula el resultado y lo almacena físicamente en disco con una estructura de árbol B+, manteniéndose sincronizada cuando cambian las tablas base.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 7: Vistas y Procedimientos Almacenados)"
    },
    {
      "id": "q-b5-021",
      "blockId": "bloque-5",
      "topic": "Control de Concurrencia · Strict 2PL Ricardo",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "¿Qué regla adicional impone el protocolo de Bloqueo Estricto de Dos Fases (Strict 2PL) frente al 2PL básico y qué grave problema previene?",
      "correctPool": [
        "Exige retener todos los cerrojos exclusivos hasta que la transacción finalice formalmente (COMMIT o ROLLBACK), previniendo abortos en cascada (Cascading Aborts).",
        "Retiene los cerrojos de escritura hasta el final de la transacción, evitando que otras transacciones lean datos sucios y deban revertirse en cascada."
      ],
      "distractorPool": [
        "Obliga a que las transacciones se ejecuten exclusivamente en un único hilo de CPU para evitar condiciones de carrera.",
        "Prohíbe la lectura de tablas que no dispongan de un índice agrupado basado en árboles B+.",
        "Exige que el programador declare manualmente los bloqueos de página en el código de aplicación.",
        "Cancela automáticamente cualquier transacción que demore más de tres segundos en adquirir un bloqueo.",
        "Libera inmediatamente los bloqueos de escritura tras ejecutar cada sentencia UPDATE individual."
      ],
      "feedback": "En el 2PL básico, una transacción puede liberar cerrojos exclusivos antes de terminar, lo que permite que otra transacción lea ese dato intermedio; si la primera aborta, la segunda también debe abortar (abortos en cascada). Strict 2PL retiene todos los cerrojos exclusivos hasta el final de la transacción (COMMIT/ROLLBACK), previniendo por completo los abortos en cascada.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9: Control de Concurrencia y Bloqueos)"
    },
    {
      "id": "q-b5-022",
      "blockId": "bloque-5",
      "topic": "Sistemas Distribuidos de Datos · Teorema CAP",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "De acuerdo con el Teorema CAP formulado por Eric Brewer, ante la ocurrencia inevitable de una Partición de Red (P) en un sistema distribuido, ¿cuál es la compensación que debe elegirse?",
      "correctPool": [
        "Elegir entre Consistencia estricta (C: responder con el dato más reciente o fallar) o Disponibilidad (A: responder siempre, aunque el dato esté desactualizado).",
        "Elegir entre consistencia de datos (CP) o disponibilidad ininterrumpida de respuestas (AP) durante la partición."
      ],
      "distractorPool": [
        "Elegir entre almacenar los datos en formato columnar o almacenarlos en matrices bidimensionales dispersas.",
        "Elegir entre utilizar claves subrogadas artificiales o utilizar claves naturales de negocio compuestas.",
        "Elegir entre ejecutar pruebas de mutación de código o realizar revisiones formales de inspección Fagan.",
        "Elegir entre balancear las rotaciones con árboles AVL o aplicar el método de la ruta crítica PERT.",
        "Elegir entre desnormalizar las tablas en estrella o normalizarlas en tercera forma normal 3NF."
      ],
      "feedback": "El Teorema CAP establece que un sistema de datos distribuido no puede garantizar simultáneamente Consistencia (C), Disponibilidad (A) y Tolerancia a Particiones (P). Como las fallas de red (P) son inevitables en redes reales, el sistema debe elegir entre ser CP (sacrifica disponibilidad para garantizar consistencia) o AP (sacrifica consistencia estricta para garantizar que todos los nodos sigan respondiendo).",
      "reference": "Eric Brewer & Catherine M. Ricardo · Bases de Datos Distribuidas"
    },
    {
      "id": "q-b5-023",
      "blockId": "bloque-5",
      "topic": "Control de Concurrencia · Control Multiversión (MVCC)",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es la ventaja primordial de la concurrencia basada en Control de Concurrencia Multiversión (MVCC / Snapshot Isolation) frente a sistemas tradicionales basados puramente en cerrojos?",
      "correctPool": [
        "Los lectores no bloquean a los escritores y los escritores no bloquean a los lectores.",
        "Las lecturas no adquieren cerrojos compartidos que bloqueen las modificaciones concurrentes."
      ],
      "distractorPool": [
        "Elimina por completo la necesidad de contar con almacenamiento en disco no volátil.",
        "Garantiza que todas las consultas SQL se resuelvan en un tiempo de reloj inferior a diez microsegundos.",
        "Convierte automáticamente las claves foráneas en disparadores de auditoría en memoria.",
        "Prohíbe la inserción de tuplas duplicadas sin necesidad de índices únicos.",
        "Reemplaza el optimizador de costos del motor por un árbol binario de decisión."
      ],
      "feedback": "En MVCC (utilizado por PostgreSQL, Oracle, SQL Server Snapshot Isolation), cuando una fila se modifica, el motor guarda una versión anterior de la misma en un almacén de versiones (como tempdb o el propio heap). Así, las consultas de lectura leen la instantánea consistente de la versión correspondiente sin bloquear ni ser bloqueadas por transacciones de escritura.",
      "reference": "Catherine M. Ricardo & Andy Oppel · Bases de Datos"
    },
    {
      "id": "q-b5-024",
      "blockId": "bloque-5",
      "topic": "Optimización Física · Operadores de Join Oppel",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Al evaluar el plan de ejecución de una consulta que une dos tablas masivas de varios millones de filas cada una, ambas ordenadas físicamente por la columna de unión mediante sus respectivos índices agrupados, ¿qué operador físico de JOIN seleccionará el optimizador por ser el más eficiente?",
      "correctPool": [
        "Merge Join (Reunión por Mezcla), aprovechando el orden preexistente para combinar ambas tablas en un único escaneo lineal simultáneo O(N + M).",
        "Merge Join, recorriendo sincrónicamente ambos flujos ordenados sin necesidad de ordenar previamente ni crear tablas hash temporales."
      ],
      "distractorPool": [
        "Nested Loops Join, ejecutando un bucle anidado cuadrático que evalúa cada tupla contra todas las de la otra tabla.",
        "Hash Join, construyendo una tabla hash masiva en memoria RAM que consume gigabytes de espacio temporal.",
        "Cartesian Cross Join, multiplicando el número de filas de ambas tablas para luego aplicar un filtro.",
        "Index Seek Join, recalculando los factores de equilibrio de los nodos internos del árbol B+ en caliente.",
        "Table Spool Join, guardando una copia temporal en el archivo de registro de transacciones."
      ],
      "feedback": "El Merge Join es el operador más eficiente cuando ambos conjuntos de entrada ya están ordenados por la clave del join (ej. por índices agrupados): avanza linealmente por ambos flujos en un solo barrido O(N + M), superando ampliamente a Hash Join (que debe construir una tabla hash en memoria) y a Nested Loops (ineficiente para tablas gigantes).",
      "reference": "Andy Oppel · Bases de Datos (Cap. 8: Operadores Físicos de Consulta)"
    },
    {
      "id": "q-b5-025",
      "blockId": "bloque-5",
      "topic": "Diseño Físico · Índices Filtrados Oppel",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En una tabla de pedidos donde el 98% de las filas tienen Estado = 'Entregado' y solo el 2% tienen Estado = 'Pendiente', ¿qué técnica de indexación permite optimizar las consultas que buscan pedidos pendientes sin malgastar espacio en disco?",
      "correctPool": [
        "Crear un Índice Filtrado (Filtered Index / Partial Index) con la cláusula WHERE Estado = 'Pendiente'.",
        "Diseñar un índice parcial restringido por predicado para indexar únicamente las filas de alta selectividad."
      ],
      "distractorPool": [
        "Crear un índice agrupado sobre la columna Estado desordenando físicamente toda la tabla.",
        "Particionar verticalmente la tabla en dos bases de datos relacionales desconectadas.",
        "Crear una vista estándar sin índices e invocarla mediante un procedimiento almacenado.",
        "Desactivar el rastreador de cambios en el motor relacional mediante la directiva AsNoTracking.",
        "Modificar el nivel de aislamiento de la base de datos a Read Uncommitted de manera permanente."
      ],
      "feedback": "Un Índice Filtrado (Filtered Index) incluye una cláusula WHERE (ej. CREATE INDEX ix_pendientes ON Pedidos(Fecha) WHERE Estado = 'Pendiente'). Ocupa una fracción minúscula de almacenamiento, se mantiene más rápido y acelera drásticamente las consultas sobre el subconjunto selectivo del 2%.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 8: Optimización e Índices Especiales)"
    },
    {
      "id": "q-b5-026",
      "blockId": "bloque-5",
      "topic": "Transacciones ACID · Detección de Deadlocks Ricardo",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Qué algoritmo de teoría de grafos ejecuta periódicamente un motor relacional para detectar Bloqueos Mutuos (Deadlocks) entre transacciones?",
      "correctPool": [
        "Detección de ciclos en el Grafo de Espera (Wait-For Graph).",
        "Detección de ciclos dirigidos sobre el Grafo de Espera de transacciones y recursos."
      ],
      "distractorPool": [
        "Cálculo del árbol de expansión mínima mediante el algoritmo de Kruskal.",
        "Búsqueda del camino más corto con el algoritmo voraz de Dijkstra.",
        "Ordenamiento topológico de vértices sobre un grafo acíclico dirigido.",
        "Evaluación de la complejidad ciclomática de McCabe sobre los procedimientos.",
        "Cálculo del factor de equilibrio AVL de las páginas de bloqueo."
      ],
      "feedback": "Los motores de bases de datos construyen internamente un Grafo de Espera (Wait-For Graph), donde los nodos son transacciones y las aristas dirigidas representan qué transacción espera un recurso retenido por otra. Si existe un ciclo en el grafo, hay un Bloqueo Mutuo (Deadlock); el motor lo detecta y aborta a una de las transacciones (la 'víctima').",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9: Control de Concurrencia y Deadlocks)"
    },
    {
      "id": "q-b5-027",
      "blockId": "bloque-5",
      "topic": "Teoría Relacional · Reglas de Codd Marqués",
      "difficulty": "easy",
      "lengthType": "medium",
      "text": "¿Qué establece la 'Regla 1 (Regla de la Información)' de las 12 Reglas de Edgar F. Codd para sistemas gestores de bases de datos relacionales?",
      "correctPool": [
        "Toda la información se representa explícitamente en el nivel lógico de una única manera: mediante valores en celdas de tablas relacionales.",
        "Toda información reside exclusivamente como datos en tablas relacionales compuestas por filas y columnas sin punteros visibles."
      ],
      "distractorPool": [
        "Cada tabla debe contar obligatoriamente con un índice agrupado basado en árboles B+ para ordenar físicamente las tuplas en disco.",
        "Los valores nulos deben reemplazarse automáticamente por ceros o cadenas vacías antes de persistir los registros en las páginas de datos.",
        "Toda consulta SELECT debe ejecutar operaciones de proyección y selección únicamente sobre relaciones que se encuentren en tercera forma normal.",
        "El motor de base de datos debe almacenar las relaciones en archivos binarios planos sin admitir estructuras de índices secundarias.",
        "Las claves foráneas deben actualizarse en cascada de manera forzosa sin intervención de los usuarios ni de los administradores."
      ],
      "feedback": "La Regla de la Información (Regla 1 de Codd) es el principio fundacional del modelo relacional: 'Toda la información en la base de datos relacional se representa explícitamente en el nivel lógico exactamente de una manera: como valores en tablas'.",
      "reference": "Mercedes Marqués · Bases de Datos (Cap. 2: El Modelo Relacional)"
    },
    {
      "id": "q-b5-028",
      "blockId": "bloque-5",
      "topic": "Diseño Físico · Particionamiento de Tablas Oppel",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cuál es la principal ventaja operativa de aplicar Particionamiento Horizontal por Rango de Fechas sobre una tabla histórica de transacciones con cientos de millones de tuplas?",
      "correctPool": [
        "Permite la eliminación rápida de datos antiguos desasociando particiones completas (Partition Switching/Drop) sin generar millones de entradas en el log de transacciones.",
        "Acelera consultas mediante eliminación de particiones (Partition Elimination / Pruning) y facilita el mantenimiento por bloques independientes."
      ],
      "distractorPool": [
        "Convierte automáticamente las sentencias SQL en llamadas asincrónicas gRPC con HTTP/2.",
        "Garantiza que el motor relacional no consuma memoria RAM durante la ejecución de consultas.",
        "Elimina la necesidad de definir claves primarias en las tablas de dimensiones de la base.",
        "Obliga a que todos los índices no agrupados se transformen en índices Hash de memoria.",
        "Sustituye el catálogo del sistema por un archivo de configuración en formato JSON plano."
      ],
      "feedback": "El particionamiento horizontal por rango (ej. por año/mes) permite al optimizador ignorar particiones que no contienen datos solicitados (Partition Pruning). Además, permite operaciones administrativas instantáneas (Partition Switching) para archivar o purgar datos viejos desasignando particiones completas en milisegundos sin sobrecargar el log con sentencias DELETE masivas.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 8: Optimización e Indexación Física)"
    },
    {
      "id": "q-b5-029",
      "blockId": "bloque-5",
      "topic": "Integridad de Datos · Restricciones CHECK Oppel",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "Al definir una tabla de empleados, ¿qué tipo de restricción de integridad permite asegurar formalmente que el campo 'Salario' sea estrictamente mayor que cero?",
      "correctPool": [
        "Restricción CHECK (CHECK (Salario > 0)).",
        "Cláusula CHECK de validación de predicado booleano."
      ],
      "distractorPool": [
        "Restricción FOREIGN KEY referencial.",
        "Restricción UNIQUE de unicidad.",
        "Restricción DEFAULT con valor cero.",
        "Restricción COLLATE de ordenamiento léxico.",
        "Restricción IDENTITY de incremento automático."
      ],
      "feedback": "Una restricción CHECK especifica un predicado booleano que toda fila insertada o actualizada debe satisfacer (o evaluar a NULL). CHECK (Salario > 0) garantiza que no se almacenen salarios nulos negativos o en cero.",
      "reference": "Andy Oppel · Bases de Datos (Cap. 5: Integridad y Restricciones)"
    },
    {
      "id": "q-b5-030",
      "blockId": "bloque-5",
      "topic": "Normalización · Quinta Forma Normal (5NF) Ricardo",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Qué condición teórica aborda la Quinta Forma Normal (5NF o Forma Normal de Proyección-Unión / PJNF)?",
      "correctPool": [
        "Garantiza que una relación no pueda descomponerse sin que al reunirlas mediante JOIN se generen tuplas espurias por dependencia de unión.",
        "Aborda las dependencias de reunión (Join Dependencies / JD), garantizando descomposición sin pérdida mediante sus claves candidatas."
      ],
      "distractorPool": [
        "Elimina las dependencias funcionales transitivas asegurando que cada atributo no clave dependa directamente de la clave primaria.",
        "Resuelve las dependencias multivaluadas (MVD) aislando los atributos independientes en relaciones separadas normalizadas en 4NF.",
        "Garantiza que no existan dependencias funcionales parciales respecto a claves compuestas en esquemas relacionales normalizados.",
        "Impide que los campos numéricos almacenen valores atómicos fuera del dominio definido en las restricciones de integridad física.",
        "Obliga a que cada tabla posea una clave subrogada generada automáticamente mediante secuencias numéricas no correlacionadas."
      ],
      "feedback": "5NF (PJNF) se ocupa de las Dependencias de Unión (Join Dependencies). Una relación está en 5NF si toda dependencia de unión en ella es consecuencia lógica de sus claves candidatas, lo que garantiza que no existan descomposiciones en 3 o más tablas que produzcan tuplas espurias al hacerles JOIN.",
      "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Normalización Avanzada y 5NF)"
    }
  ];
});
