/**
 * Material Visual · Banco Maestro Canónico de Reactivos
 * BLOQUE VI: BUSINESS INTELLIGENCE & DATA WAREHOUSING
 * (Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos)
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
      root.MATERIAL_BANK.registerBlock('bloque-6', questions);
    }
    root.MATERIAL_BLOCK_6 = questions;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return [
    {
      "id": "q-b6-001",
      "blockId": "bloque-6",
      "topic": "Arquitectura de Data Warehouse · Inmon vs Kimball Joyanes",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En la doctrina de Business Intelligence expuesta por Joyanes Aguilar, ¿cuál es la divergencia arquitectónica esencial entre el enfoque de Bill Inmon y el de Ralph Kimball?",
      "correctPool": [
        "Inmon propone un enfoque Top-Down con un Data Warehouse centralizado en 3NF del cual derivan los Data Marts; Kimball propone un enfoque Bottom-Up basado en el Bus Dimensional y esquemas en estrella.",
        "Inmon construye una fábrica de información corporativa normalizada (3NF) centralizada; Kimball ensambla Data Marts dimensionales con dimensiones conformadas integradas en una matriz de bus."
      ],
      "distractorPool": [
        "Inmon descarta el uso de tablas de dimensiones; Kimball exige que todos los Data Marts se construyan en tercera forma normal estricta.",
        "Inmon plantea iniciar con Data Marts independientes sin repositorio central; Kimball exige crear primero un modelo relacional corporativo unificado.",
        "Inmon propone un enfoque basado exclusivamente en cubos multidimensionales propietarios; Kimball utiliza únicamente tablas planas sin relaciones.",
        "Inmon centraliza el análisis en esquemas de copo de nieve normalizados; Kimball prohíbe el uso de dimensiones conformadas entre departamentos.",
        "Inmon propone diseñar almacenes de datos exclusivamente relacionales en 1NF; Kimball descarta el uso de dimensiones temporales."
      ],
      "feedback": "Bill Inmon (Corporate Information Factory) propone un enfoque Top-Down donde la fuente de verdad es un EDW empresarial altamente normalizado (3NF), a partir del cual se alimentan los Data Marts departamentales. Ralph Kimball plantea un enfoque Bottom-Up centrado en el modelado dimensional, construyendo Data Marts en estrella integrados por medio de Dimensiones Conformadas (Data Warehouse Bus Architecture).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 2: Arquitectura del Data Warehouse)"
    },
    {
      "id": "q-b6-002",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Esquema en Estrella vs Copo de Nieve",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cuál es la diferencia estructural fundamental entre un Esquema en Estrella (Star Schema) y un Esquema de Copo de Nieve (Snowflake Schema)?",
      "correctPool": [
        "En el esquema en estrella las dimensiones están completamente desnormalizadas en una sola tabla; en el copo de nieve las jerarquías dimensionales se normalizan en tablas secundarias.",
        "El esquema en estrella prioriza el rendimiento analítico con dimensiones desnormalizadas; el copo de nieve normaliza las dimensiones reduciendo redundancia a costa de más JOINs."
      ],
      "distractorPool": [
        "En el esquema en estrella las dimensiones contienen subtablas dependientes; en el copo de nieve todas las jerarquías se funden en una tabla plana.",
        "En el esquema en estrella las tablas de dimensiones se indexan por clave natural; en el copo de nieve se prohíbe el uso de claves foráneas hacia los hechos.",
        "El esquema en estrella elimina la tabla central de hechos; el copo de nieve conecta múltiples tablas de hechos sin dimensiones intermedias.",
        "En el esquema en estrella cada dimensión posee múltiples tablas de hechos; en el copo de nieve solo existe una dimensión global.",
        "En el esquema en estrella las métricas de hechos no se pueden sumar; en el copo de nieve todas las métricas son obligatoriamente semi-aditivas."
      ],
      "feedback": "En el Star Schema, cada dimensión está representada por una sola tabla desnormalizada conectada directamente a la tabla de hechos (consultas más simples y rápidas). En el Snowflake Schema, las dimensiones se normalizan descomponiendo las jerarquías en subtablas (ej. Producto -> Subcategoría -> Categoría), lo que ahorra algo de espacio pero requiere más operaciones JOIN.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: Modelado Dimensional de Datos)"
    },
    {
      "id": "q-b6-003",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Tipos de Métricas en Hechos",
      "difficulty": "hard",
      "lengthType": "short",
      "text": "En una tabla de hechos de un Data Warehouse bancario, ¿cómo se clasifica formalmente la métrica 'Saldo de Cuenta' respecto a su capacidad de agregación?",
      "correctPool": [
        "Métrica Semi-aditiva.",
        "Métrica Semi-aditiva bancaria."
      ],
      "distractorPool": [
        "Métrica Totalmente Aditiva.",
        "Métrica No Aditiva.",
        "Métrica Derivada Continua.",
        "Métrica Acumulativa Pura.",
        "Métrica Degenerada Estática."
      ],
      "feedback": "Las métricas aditivas pueden sumarse a través de todas las dimensiones (ej. Total de ventas). Las semi-aditivas pueden sumarse a través de algunas dimensiones pero no de otras: el saldo bancario se puede sumar entre distintas cuentas en un mismo día, pero sumar los saldos de los 30 días de un mes para una misma cuenta produce un valor carente de sentido financiero.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 3: Hechos y Dimensiones)"
    },
    {
      "id": "q-b6-004",
      "blockId": "bloque-6",
      "topic": "Dimensiones de Cambio Lento · SCD Tipo 2 Joyanes",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "Un banco minorista implementa un Data Warehouse y un cliente actualiza su código postal y dirección por mudanza. Si el equipo aplica la técnica de 'Dimensiones de Cambio Lento Tipo 2' (SCD Type 2), ¿cómo debe registrarse esta actualización para mantener el histórico de compras previas?",
      "correctPool": [
        "Se inserta una nueva fila con una nueva clave subrogada, registrando la fecha de vigencia y marcando la fila previa como inactiva para preservar el historial.",
        "Se conserva la fila histórica cerrando su fecha de fin y se añade una tupla nueva con el domicilio actualizado para preservar la trazabilidad analítica."
      ],
      "distractorPool": [
        "Se sobrescribe directamente el campo de dirección en la fila existente borrando el domicilio anterior sin dejar registro histórico.",
        "Se crea una nueva columna denominada 'Direccion_Anterior' en la misma fila manteniendo un único registro por cliente.",
        "Se borra la fila del cliente y se eliminan en cascada todas sus ventas históricas de la tabla de hechos.",
        "Se crea una tabla de hechos paralela con el nuevo domicilio asignando un indicador de borrado lógico a la dimensión anterior.",
        "Se actualiza el valor mediante una sentencia UPDATE directa reemplazando permanentemente la clave natural del cliente."
      ],
      "feedback": "SCD Tipo 1 sobrescribe el registro perdiendo el historial. SCD Tipo 2 es el método por excelencia para preservar la historia analítica: crea una nueva fila con su propia surrogate key, vigencia temporal (fecha de inicio y fin) y una bandera booleana (es_actual = true/false), manteniendo intacto el registro anterior para análisis comparativo.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: Gestión de Dimensiones SCD)"
    },
    {
      "id": "q-b6-005",
      "blockId": "bloque-6",
      "topic": "Operaciones OLAP · Cubos Multidimensionales",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En el análisis interactivo sobre un Cubo OLAP, ¿qué operación realiza el usuario cuando pasa de examinar las ventas por 'Trimestre' a examinarlas por 'Mes' o 'Día'?",
      "correctPool": [
        "Drill-down (Desagregación o profundización hacia un mayor nivel de detalle).",
        "Drill-down (Profundización jerárquica)."
      ],
      "distractorPool": [
        "Roll-up (Generalización o consolidación hacia un nivel superior).",
        "Slice (Corte transversal fijando el valor de una dimensión).",
        "Dice (Generación de un subcubo seleccionando rangos específicos).",
        "Pivot o Rotate (Rotación de los ejes de filas y columnas).",
        "Split Query (Separación de subconsultas cartesianas en SQL)."
      ],
      "feedback": "Drill-down desciende en la jerarquía dimensional hacia un mayor nivel de granularidad o detalle (Trimestre -> Mes -> Día). Por el contrario, Roll-up asciende en la jerarquía hacia una mayor agregación (Día -> Mes -> Año).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 4: Tecnología OLAP)"
    },
    {
      "id": "q-b6-006",
      "blockId": "bloque-6",
      "topic": "Sistemas de Información · OLTP vs OLAP Joyanes",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Cuál es el propósito y característica de diseño fundamental de un sistema OLTP frente a un sistema OLAP?",
      "correctPool": [
        "OLTP está optimizado para procesar transacciones operativas diarias concurrentes en esquemas normalizados (3NF).",
        "OLTP se orienta a operaciones del día a día (altas, bajas, cambios) con latencias de milisegundos y datos actuales."
      ],
      "distractorPool": [
        "OLTP está diseñado para consultas de agregación analítica masiva sobre históricos de diez años.",
        "OLTP utiliza modelos dimensionales desnormalizados en copo de nieve con cubos propietarios.",
        "OLTP prohíbe el uso de sentencias INSERT o UPDATE en favor de cargas batch nocturnas.",
        "OLTP elimina las claves primarias para maximizar el ancho de banda de red en el servidor.",
        "OLTP almacena los datos en formato columnar parquet dentro de un lago de datos distributed."
      ],
      "feedback": "OLTP (On-Line Transaction Processing) soporta las operaciones del día a día, con esquemas normalizados (3NF) que evitan redundancias y anomalías de inserción/borrado. OLAP (On-Line Analytical Processing) soporta la toma de decisiones estratégicas mediante análisis multidimensional sobre datos históricos desnormalizados.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 1 y Cap. 4)"
    },
    {
      "id": "q-b6-007",
      "blockId": "bloque-6",
      "topic": "Procesos ETL · Área de Preparación (Staging Area)",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "Durante la ejecución de un pipeline ETL corporativo, un equipo de ingeniería necesita extraer millones de registros diarios desde múltiples bases transaccionales heterogéneas sin degradar la concurrencia ni provocar bloqueos en producción. ¿Cuál es el rol primordial del Área de Preparación o Aterrizaje (Staging Area) en esta arquitectura?",
      "correctPool": [
        "Servir como espacio intermedio de almacenamiento transitorio donde extraer los datos fuente sin sobrecargar los sistemas operacionales y realizar transformaciones antes de cargar al DWH.",
        "Desacoplar la extracción de los sistemas fuente de las transformaciones complejas, protegiendo las bases transaccionales de bloqueos y caídas."
      ],
      "distractorPool": [
        "Persistir indefinidamente los datos históricos para consultas directas de visualización de los usuarios finales.",
        "Ejecutar consultas analíticas OLAP complejas directamente sobre las tablas fuente sin transformar el esquema.",
        "Reemplazar permanentemente a la tabla de hechos consolidando todas las métricas en un único archivo transaccional.",
        "Generar índices agrupados definitivos y claves subrogadas antes de realizar la extracción de las fuentes operativas.",
        "Bloquear exclusivamente las tablas de los sistemas operacionales mientras los usuarios finales consultan reportes."
      ],
      "feedback": "El Staging Area es una zona intermedia temporal donde se depositan los datos extraídos de las distintas fuentes heterogéneas. Su propósito es minimizar el impacto sobre los sistemas operacionales OLTP y proporcionar un entorno aislado para realizar la limpieza, deduplicación, transformación y verificación antes de la carga definitiva al almacén de datos.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 5: Extracción, Transformación y Carga - ETL)"
    },
    {
      "id": "q-b6-008",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Claves Subrogadas (Surrogate Keys)",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Por qué en el modelado dimensional de Kimball se recomienda utilizar Claves Subrogadas (Surrogate Keys) enteras en las tablas de dimensiones en lugar de las claves naturales de negocio?",
      "correctPool": [
        "Permiten desacoplar el almacén de cambios en los sistemas fuente, soportan SCD Tipo 2 y aceleran el rendimiento de los JOINs con enteros compactos.",
        "Aíslan al Data Warehouse de reutilizaciones o modificaciones de claves de negocio y optimizan las consultas relacionales con índices enteros pequeños."
      ],
      "distractorPool": [
        "Impiden que los sistemas de reporting realicen operaciones de agregación numérica sobre las dimensiones.",
        "Eliminan por completo la necesidad de mantener índices B+ en las columnas foráneas de la tabla de hechos.",
        "Eliminan la necesidad de contar con una tabla de hechos central en los esquemas de estrella.",
        "Permiten almacenar únicamente datos alfanuméricos comprimidos en las tablas de hechos del Data Warehouse.",
        "Garantizan que las jerarquías dimensionales se normalicen automáticamente en esquemas de copo de nieve."
      ],
      "feedback": "Las Claves Subrogadas son enteros secuenciales sin significado de negocio generados por el DWH. Son esenciales porque: 1) Permiten manejar dimensiones de cambio lento (SCD Tipo 2) donde una clave de negocio tiene múltiples registros históricos, 2) Aíslan al DWH de reasignaciones o cambios en sistemas transaccionales, y 3) Mejoran el rendimiento de almacenamiento e indexación en las tablas de hechos.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: Claves en el Modelo Dimensional)"
    },
    {
      "id": "q-b6-009",
      "blockId": "bloque-6",
      "topic": "Tecnología OLAP · Variantes ROLAP vs MOLAP Joyanes",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Qué arquitectura OLAP almacena los datos en arreglos multidimensionales densos propietarios (cubos precalculados) en lugar de tablas relacionales?",
      "correctPool": [
        "MOLAP (Multidimensional OLAP).",
        "MOLAP (Procesamiento Multidimensional)."
      ],
      "distractorPool": [
        "ROLAP (Relational OLAP).",
        "HOLAP (Hybrid OLAP).",
        "DOLAP (Desktop OLAP).",
        "WOLAP (Web-enabled OLAP).",
        "SOLAP (Spatial OLAP)."
      ],
      "feedback": "MOLAP almacena los datos en estructuras de matrices multidimensionales propietarias con agregaciones precalculadas, ofreciendo un rendimiento de consulta ultrarrápido pero con mayor tiempo de procesamiento previo y limitaciones de escalabilidad frente a grandes volúmenes. ROLAP utiliza directamente el motor relacional tradicional.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 4: Arquitecturas OLAP)"
    },
    {
      "id": "q-b6-010",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Tablas de Hechos sin Hechos",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "En una institución educativa se diseña un Data Mart para analizar la asistencia de los estudiantes a las clases programadas. Dado que el evento de asistencia no produce una cantidad o importe monetario facturado, ¿cómo debe modelarse esta situación utilizando una 'Tabla de Hechos sin Hechos' (Factless Fact Table) de Ralph Kimball?",
      "correctPool": [
        "Registrar la ocurrencia de eventos (como la asistencia de un alumno a clase) o definir coberturas y condiciones de posibilidad donde no existen métricas cuantitativas.",
        "Capturar la relación entre dimensiones para registrar sucesos o estados de cobertura sin métricas numéricas agregadas."
      ],
      "distractorPool": [
        "Crear una tabla que almacena únicamente valores nulos en todas sus columnas para registrar ausencias.",
        "Definir una dimensión auxiliar que descarta las claves foráneas de los estudiantes no matriculados.",
        "Forzar la inclusión de una métrica ficticia calculada con valores aleatorios para permitir operaciones SUM.",
        "Normalizar las tablas de asistencia en tercera forma normal eliminando las relaciones con el calendario.",
        "Sustituir a las dimensiones conformadas eliminando la necesidad de claves subrogadas."
      ],
      "feedback": "Una Factless Fact Table es una tabla de hechos que no contiene métricas numéricas, solo claves foráneas apuntando a las dimensiones. Se utiliza para modelar eventos (ej. asistencia escolar: AlumnoID, CursoID, FechaID) o para modelar coberturas (ej. productos promocionados en tiendas durante una campaña que no registraron ventas).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 3)"
    },
    {
      "id": "q-b6-011",
      "blockId": "bloque-6",
      "topic": "Integración de Datos · Change Data Capture (CDC)",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "Un banco comercial procesa miles de transacciones por segundo en su motor OLTP y requiere alimentar un Data Warehouse con latencia mínima. ¿Qué estrategia de Captura de Datos Modificados (CDC) permite identificar inserciones, actualizaciones y borrados con el menor impacto en el rendimiento y concurrencia del motor transaccional?",
      "correctPool": [
        "CDC basado en la lectura directa del Log de Transacciones (Transaction Log Scraping).",
        "Lectura asíncrona del registro de transacciones (Log-based CDC) sin modificar el esquema transaccional."
      ],
      "distractorPool": [
        "CDC mediante disparadores (Triggers) ejecutados en cada sentencia INSERT, UPDATE y DELETE de las tablas operacionales.",
        "CDC mediante consultas periódicas comparando el producto cartesiano completo de todas las relaciones.",
        "CDC mediante la exportación completa de respaldos nocturnos en frío sin procesamiento diferencial.",
        "CDC mediante la adición de columnas de marca temporal consultadas recurrentemente por sondeo (polling) continuo.",
        "CDC recalculando tablas hash SHA-256 de todas las filas operativas en cada ciclo de ejecución."
      ],
      "feedback": "El CDC basado en logs (Log-based CDC) lee los cambios directamente del log de transacciones de la base de datos (como el WAL o redo log). No requiere alterar el esquema de las tablas operacionales ni sobrecarga el motor con triggers transaccionales, siendo la alternativa más robusta y de menor impacto en producción.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 5: Estrategias de Extracción y CDC)"
    },
    {
      "id": "q-b6-012",
      "blockId": "bloque-6",
      "topic": "Arquitectura de Datos · Data Lake vs Data Warehouse",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cuál es la diferencia primordial en el tratamiento del esquema de datos entre un Data Warehouse y un Data Lake corporativo?",
      "correctPool": [
        "El Data Warehouse impone Schema-on-Write (el esquema se define rigurosamente antes de cargar los datos); el Data Lake utiliza Schema-on-Read (los datos se almacenan crudos y el esquema se interpreta al consultarlos).",
        "El Data Warehouse estructura y valida los datos durante la carga; el Data Lake almacena datos heterogéneos crudos aplicando el esquema en el momento de la consulta."
      ],
      "distractorPool": [
        "El Data Warehouse procesa exclusivamente flujos continuos en tiempo real; el Data Lake admite solo lotes anuales.",
        "El Data Warehouse no admite transacciones ACID; el Data Lake exige aislamiento Serializable estricto.",
        "El Data Warehouse almacena datos no relacionales sin validar; el Data Lake descarta los metadatos de gobernanza.",
        "El Data Warehouse no admite consultas SQL; el Data Lake solo puede interactuar a través de llamadas RPC binarias.",
        "El Data Warehouse se diseña sin claves foráneas ni dimensiones; el Data Lake impone esquemas en tercera forma normal."
      ],
      "feedback": "Data Warehouse = Schema-on-Write: los datos deben ser limpios, transformados y encajar en un esquema dimensional predefinido antes de su persistencia. Data Lake = Schema-on-Read: almacena grandes volúmenes de datos estructurados, semiestructurados o no estructurados en su formato nativo (crudo); la estructura y significado se aplican cuando el motor analítico lee los datos para una consulta.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 7: Big Data y Data Lakes)"
    },
    {
      "id": "q-b6-013",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Granularidad del Grano Joyanes",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "Al definir la Granularidad (Grano) de una tabla de hechos, ¿cuál es el principio metodológico defendido por Kimball para garantizar la máxima flexibilidad analítica en el Data Warehouse?",
      "correctPool": [
        "Modelar el grano al nivel más atómico posible (ej. cada línea individual de un recibo o transacción), permitiendo agregaciones sin pérdida de información.",
        "Priorizar el grano atómico para que los analistas puedan filtrar y agrupar por cualquier combinación de dimensiones sin restricciones artificiales."
      ],
      "distractorPool": [
        "Definir el grano exclusivamente a nivel anual consolidado para minimizar el número de filas en el disco rígido.",
        "Cambiar dinámicamente el grano de la tabla de hechos en cada ejecución de la tarea nocturna de ETL.",
        "Prohibir que la tabla de hechos contenga más de tres dimensiones foráneas para evitar sobrecargar los procesadores.",
        "Sustituir el grano temporal por un identificador de sesión HTTP obtenido de los encabezados del navegador.",
        "Almacenar únicamente los promedios aritméticos de los saldos descartando el registro individual de transacciones."
      ],
      "feedback": "Kimball insiste en que el grano debe ser lo más atómico posible (el nivel más bajo de detalle registrado por el proceso de negocio). El grano atómico provee la mayor dimensionalidad y flexibilidad: siempre se puede agregar (roll-up) hacia arriba, pero si los datos se cargan pre-agregados, es matemáticamente imposible descender (drill-down) a detalles omitidos.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: El Grano de la Tabla de Hechos)"
    },
    {
      "id": "q-b6-014",
      "blockId": "bloque-6",
      "topic": "Operaciones OLAP · Slice and Dice Joyanes",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En el análisis sobre un cubo OLAP, ¿en qué consiste la operación de 'Slice' (Rebanar)?",
      "correctPool": [
        "En fijar el valor de una dimensión para obtener un subconjunto bidimensional o subespacio de datos.",
        "En seleccionar una única dimensión fijándola a un valor específico (ej. Año = 2024)."
      ],
      "distractorPool": [
        "En rotar los ejes del cubo intercambiando filas por columnas en el reporte.",
        "En eliminar la clave primaria de la tabla de hechos para permitir duplicados.",
        "En descender en la jerarquía dimensional hacia el mayor nivel de granularidad.",
        "En calcular el promedio acumulado ponderado de todas las dimensiones del cubo.",
        "En fusionar dos cubos dimensionales independientes en una constelación de hechos."
      ],
      "feedback": "Slice (Rebanada): fija una dimensión concreta a un único valor (ej. fijar Tiempo = '2024'), extrayendo una rebanada del cubo. Dice (Trocear): define un subcubo seleccionando rangos específicos en dos o más dimensiones simultáneamente (ej. Tiempo entre 2023 y 2024 Y Región = 'Norte' o 'Sur').",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 4: Operaciones OLAP)"
    },
    {
      "id": "q-b6-015",
      "blockId": "bloque-6",
      "topic": "Gobernanza de Datos · Master Data Management (MDM)",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es el objetivo primordial de la Gestión de Datos Maestros (Master Data Management / MDM) en una organización?",
      "correctPool": [
        "Crear una fuente única, coherente y confiable de verdad para las entidades clave del negocio (clientes, productos, proveedores).",
        "Garantizar la consistencia y unicidad de los datos maestros compartidos a través de múltiples aplicaciones corporativas."
      ],
      "distractorPool": [
        "Generar claves foráneas compuestas automáticamente en las tablas de hechos transaccionales.",
        "Normalizar todas las bases de datos operacionales de la empresa en quinta forma normal (5NF).",
        "Crear copias de seguridad incrementales nocturnas de los logs de transacciones operativas.",
        "Definir índices no agrupados sobre todas las columnas de texto de los sistemas transaccionales.",
        "Establecer particiones horizontales obligatorias en todas las relaciones de staging."
      ],
      "feedback": "Master Data Management (MDM) es una disciplina integral que busca definir, gestionar y unificar las entidades críticas compartidas de una empresa (como Clientes, Productos, Empleados, Ubicaciones) en un registro único de verdad ('Golden Record'), evitando duplicidades e inconsistencias entre los sistemas transaccionales y el DWH.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 6: Calidad de Datos y Gobernanza)"
    },
    {
      "id": "q-b6-016",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Dimensiones Conformadas Kimball",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "Una corporación de comercio electrónico gestiona tres Data Marts departamentales independientes (Ventas, Logística y Facturación). La gerencia solicita un tablero de control que analice métricas de ventas y costos de envío consolidados por cliente y fecha. En la arquitectura de bus de Kimball, ¿qué componente estructural es indispensable para conectar estos Data Marts?",
      "correctPool": [
        "Dimensiones Conformadas (Conformed Dimensions) con estructura y claves idénticas compartidas entre las diferentes tablas de hechos.",
        "Dimensiones compartidas y consistentes que conectan los distintos Data Marts a través del Bus Dimensional corporativo."
      ],
      "distractorPool": [
        "Una tabla de hechos consolidada única que fusione todas las transacciones sin utilizar dimensiones.",
        "Un esquema de base de datos no relacional documental que reemplace los modelos de los Data Marts.",
        "Una vista materializada que bloquee las actualizaciones de los sistemas operacionales en horario laboral.",
        "Un pipeline ETL que sobrescriba diariamente las dimensiones departamentales sin sincronizar claves.",
        "Una jerarquía desnormalizada que se elimina automáticamente tras la generación del reporte mensual."
      ],
      "feedback": "Las Dimensiones Conformadas son el pilar de la Arquitectura de Bus de Kimball: son dimensiones que tienen la misma estructura y significado consistente a lo largo de toda la organización (ej. Dimensión Fecha, Dimensión Cliente, Dimensión Producto) y son referenciadas por múltiples tablas de hechos (Ventas, Envíos, Facturación), permitiendo realizar análisis cruzados integrados.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 3: Bus Dimensional)"
    },
    {
      "id": "q-b6-017",
      "blockId": "bloque-6",
      "topic": "Procesos ETL · Transformación y Limpieza de Datos",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿En qué fase del proceso ETL se resuelven problemas como valores nulos inconsistentes, formatos de fechas divergentes (DD/MM vs MM/DD) y registros duplicados?",
      "correctPool": [
        "Fase de Transformación (Data Cleansing & Transformation).",
        "En la fase de Transformación y Limpieza de Datos."
      ],
      "distractorPool": [
        "Fase de Extracción pura en los servidores fuente transaccionales.",
        "Fase de Carga definitiva (Load) en las tablas de hechos del Data Warehouse.",
        "Fase de Despliegue en producción mediante pipelines de integración continua.",
        "Fase de Negociación de contratos con los proveedores de servicios cloud.",
        "Fase de Auditoría contable posterior al cierre del ejercicio anual."
      ],
      "feedback": "La fase de Transformación comprende la limpieza (data cleansing), normalización de formatos (fechas, monedas, teléfonos), deduplicación, enriquecimiento y aplicación de reglas de negocio para asegurar la calidad de la información antes de su inserción en el almacén de datos.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 5: Procesos ETL)"
    },
    {
      "id": "q-b6-018",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Esquema en Constelación de Hechos",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Cómo se define un Esquema en Constelación de Hechos (Fact Constellation o Galaxy Schema) dentro del diseño dimensional?",
      "correctPool": [
        "Un modelo que contiene múltiples tablas de hechos que comparten varias tablas de dimensiones conformadas comunes.",
        "Una red de múltiples tablas de hechos interconectadas mediante dimensiones compartidas a través de la matriz de bus."
      ],
      "distractorPool": [
        "Un esquema que suprime todas las tablas de dimensiones almacenando todo en un único archivo de texto no estructurado.",
        "Un diseño donde cada tabla de hechos cuenta exclusivamente con dimensiones propietarias sin compartir ninguna.",
        "Un modelo donde todas las tablas de dimensiones se unifican en una sola relación plana sin hechos.",
        "Un modelo relacional transaccional normalizado en forma de Boyce-Codd para evitar anomalías operativas.",
        "Un esquema donde las métricas de hechos se derivan únicamente a partir de funciones trigonométricas."
      ],
      "feedback": "El Esquema en Constelación de Hechos (Galaxy Schema) es el reflejo de un almacén de datos empresarial completo: contiene múltiples tablas de hechos (ej. Fact_Ventas, Fact_Inventario, Fact_Envios) que comparten dimensiones conformadas (Dim_Tiempo, Dim_Producto, Dim_Sucursal).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 3: Modelado Multidimensional)"
    },
    {
      "id": "q-b6-019",
      "blockId": "bloque-6",
      "topic": "Arquitectura de Datos · Almacén Operacional de Datos (ODS)",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Qué función cumple un Almacén Operacional de Datos (Operational Data Store / ODS) según la arquitectura de Bill Inmon?",
      "correctPool": [
        "Proporcionar una vista integrada de datos operacionales actuales en tiempo real o casi real para soporte a decisiones cotidianas.",
        "Servir como repositorio intermedio normalizado de datos operativos recientes para consultas transaccionales integradas."
      ],
      "distractorPool": [
        "Almacenar históricos estáticos de diez años para consultas analíticas de minería de datos profunda.",
        "Desnormalizar completamente las tablas de negocio en esquemas de estrella para analítica predictiva.",
        "Crear particiones físicas de almacenamiento en frío para datos con más de diez años de antigüedad.",
        "Definir las políticas de rotación de contraseñas de los usuarios administradores de bases de datos.",
        "Sustituir la capa de staging eliminando las transformaciones de limpieza de datos en el flujo ETL."
      ],
      "feedback": "El ODS (Operational Data Store) es un repositorio integrado, sujeto a temas, volátil y de datos actuales (a diferencia del DWH que es no volátil e histórico). Se utiliza para reportes operativos del día a día en tiempo casi real que no pueden esperar a la carga batch nocturna del DWH.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 2: Componentes de la Arquitectura de BI)"
    },
    {
      "id": "q-b6-020",
      "blockId": "bloque-6",
      "topic": "Operaciones OLAP · Pivot / Rotate Joyanes",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En una herramienta de visualización OLAP, ¿qué acción efectúa la operación de 'Pivot' (o Rotación)?",
      "correctPool": [
        "Gira los ejes de visualización de los datos (rotando filas por columnas) para ofrecer una perspectiva dimensional alternativa.",
        "Reorienta los ejes multidimensionales intercambiando dimensiones entre filas y columnas en la presentación."
      ],
      "distractorPool": [
        "Descender por los niveles jerárquicos de una dimensión temporal para visualizar días individuales.",
        "Filtra una única dimensión fijándola a un valor constante para obtener un corte bidimensional del cubo.",
        "Agrupa múltiples categorías de productos en un nivel superior de consolidación mediante un roll-up.",
        "Sobrescribe el registro histórico del cliente aplicando una dimensión de cambio lento Tipo 1.",
        "Calcula automáticamente la desviación estándar de todas las métricas numéricas en la tabla de hechos."
      ],
      "feedback": "La operación Pivot (o Rotate) rota los ejes del cubo o tabla de reporte, convirtiendo filas en columnas y viceversa para permitir visualizar los mismos datos analíticos desde un ángulo o perspectiva dimensional diferente.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 4: Operaciones Multidimensionales)"
    },
    {
      "id": "q-b6-021",
      "blockId": "bloque-6",
      "topic": "Almacenamiento Analítico · Formato Columnar Joyanes",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Por qué los motores analíticos modernos de Data Warehousing (como Snowflake, BigQuery o ClickHouse) y formatos como Parquet prefieren el Almacenamiento Columnar sobre el almacenamiento por filas tradicional?",
      "correctPool": [
        "Permite leer únicamente las columnas requeridas por la consulta omitiendo el resto (I/O mínimo) y logra tasas de compresión masivas al agrupar tipos de datos idénticos de forma contigua.",
        "Optimiza el I/O al escanear solo las columnas proyectadas y maximiza la compresión y vectorización SIMD agrupando valores homogéneos."
      ],
      "distractorPool": [
        "Acelera las inserciones individuales de una sola tupla mediante el protocolo de bloqueo de dos fases estricto.",
        "Elimina la necesidad de utilizar sentencias SQL SELECT al sustituirlas por llamadas directas a la API del navegador.",
        "Permite que las transacciones OLTP concurrentes eviten por completo la contención por cerrojos.",
        "Garantiza que las consultas que actualizan filas individuales con UPDATE se ejecuten en nanosegundos.",
        "Obliga a que todas las métricas numéricas se almacenen sin compresión para facilitar cálculos aritméticos."
      ],
      "feedback": "En consultas analíticas (OLAP), habitualmente se leen pocas columnas pero millones de filas (ej. SELECT SUM(Ventas), AVG(Descuento) FROM Pedidos). El formato columnar solo lee del disco las columnas necesarias (reducción radical de I/O) y logra altísima compresión porque datos contiguos del mismo tipo (ej. números enteros) se comprimen con algoritmos como RLE (Run-Length Encoding) o Snappy.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 7: Almacenamiento Columnar)"
    },
    {
      "id": "q-b6-022",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Dimensiones Degeneradas Kimball",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En el modelado dimensional de Ralph Kimball para un almacén de datos de facturación, ¿cómo se define formalmente una 'Dimensión Degenerada' (Degenerate Dimension)?",
      "correctPool": [
        "Un identificador de transacción (como número de factura o pedido) que reside directamente en la tabla de hechos sin una tabla de dimensiones separada.",
        "Un atributo dimensional que actúa como clave de transacción en la tabla de hechos sin atributos descriptivos adicionales."
      ],
      "distractorPool": [
        "Una dimensión corrupta que ha perdido la integridad referencial de sus claves foráneas.",
        "Una dimensión normalizada en múltiples tablas secundarias siguiendo un esquema de copo de nieve.",
        "Una dimensión conformada que comparte su clave primaria entre más de cinco Data Marts corporativos.",
        "Una tabla de hechos que carece de métricas numéricas y solo preserva relaciones entre entidades.",
        "Una clave subrogada artificial que se ha desbordado al sobrepasar su límite de almacenamiento."
      ],
      "feedback": "Una Dimensión Degenerada es un identificador de transacción (ej. Número de Ticket, Número de Orden, Número de Factura) que se almacena directamente en la tabla de hechos porque no tiene atributos descriptivos adicionales que justifiquen crear una tabla de dimensiones independiente.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: Tipos de Dimensiones Especiales)"
    },
    {
      "id": "q-b6-023",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Dimensiones Basura (Junk Dimensions)",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Cuando en un proceso de negocio existen múltiples banderas booleanas y estados discretos (ej. Es_Promocion, Pago_Efectivo, Envio_Urgente, Verificado), ¿cuál es la técnica de modelado dimensional para evitar tener decenas de claves foráneas diminutas en la tabla de hechos?",
      "correctPool": [
        "Crear una Dimensión Basura (Junk Dimension) que combine todas las combinaciones posibles de estos indicadores en una única tabla de dimensiones.",
        "Consolidar las banderas y códigos discretos no relacionados en una sola dimensión miscelánea o Junk Dimension con su propia clave subrogada."
      ],
      "distractorPool": [
        "Eliminar todas las banderas discretas de la base de datos para simplificar el modelo relacional.",
        "Almacenar las banderas en el archivo de registro de transacciones Write-Ahead Logging del gestor.",
        "Crear una tabla de hechos independiente para cada una de las banderas booleanas del negocio.",
        "Obligar al usuario a filtrar las banderas exclusivamente en la interfaz gráfica del cliente.",
        "Desnormalizar cada indicador en una columna de texto libre dentro de la tabla de hechos."
      ],
      "feedback": "Una Dimensión Basura (Junk Dimension) es una tabla de dimensiones que agrupa múltiples atributos de baja cardinalidad (banderas booleanas, estados discretos, indicadores) que no encajan en dimensiones existentes, evitando llenar la tabla de hechos de claves foráneas secundarias.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 3: Junk Dimensions)"
    },
    {
      "id": "q-b6-024",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Tipos de Tablas de Hechos Kimball",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Una compañía de seguros necesita modelar en su Data Warehouse el proceso de gestión de siniestros, el cual inicia con la notificación del accidente, continúa con la evaluación del perito, la aprobación y concluye con la indemnización. Si el proceso abarca semanas y se requiere rastrear cuándo ocurrió cada hito y los días transcurridos entre etapas, ¿qué tipo de tabla de hechos de Ralph Kimball es la adecuada?",
      "correctPool": [
        "Tabla de Hechos de Instantánea Acumulada (Accumulating Snapshot Fact Table), donde cada fila representa un siniestro y se actualiza al cumplirse cada hito con múltiples claves de fecha.",
        "Una tabla de hechos acumulada que mantiene una fila por ciclo de vida del siniestro actualizando sus marcas temporales en cada etapa."
      ],
      "distractorPool": [
        "Una tabla de hechos periódica con agregaciones mensuales cerradas que sobreescribe las fechas anteriores.",
        "Una tabla de hechos transaccional atómica inmutable que inserta una fila nueva independiente por cada microevento.",
        "Una tabla de hechos sin hechos que solo almacena identificadores de clientes y peritos involucrados sin fechas.",
        "Un esquema de copo de nieve normalizado donde cada etapa del siniestro se descompone en tablas relacionales 3NF.",
        "Un modelo ODS volátil que elimina el registro del siniestro una vez emitido el cheque de indemnización."
      ],
      "feedback": "Kimball clasifica 3 tipos fundamentales de tablas de hechos: 1) Transaction: 1 fila por evento puntual (inmutable). 2) Periodic Snapshot: 1 fila por periodo regular (ej. fin de mes). 3) Accumulating Snapshot: 1 fila por instancia de un proceso con hitos (ej. Pedido recibido -> Pagado -> Empacado -> Enviado -> Entregado), actualizándose conforme se cumplen los pasos con múltiples claves de fecha.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: Taxonomía de Tablas de Hechos)"
    },
    {
      "id": "q-b6-025",
      "blockId": "bloque-6",
      "topic": "Arquitectura de Datos · Data Lakehouse Joyanes",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Qué innovación arquitectónica define formalmente a un 'Data Lakehouse' (como Delta Lake o Apache Iceberg) frente a un Data Lake tradicional?",
      "correctPool": [
        "Incorpora una capa de metadatos transaccionales que provee garantías ACID, versionado de datos (time travel) y gobernanza sobre almacenamiento barato de objetos.",
        "Combina el bajo costo y flexibilidad de almacenamiento de un Data Lake con las transacciones ACID y rendimiento de un Data Warehouse."
      ],
      "distractorPool": [
        "Descarta el almacenamiento en formatos abiertos como Parquet para usar bases relacionales monolíticas.",
        "Prohíbe el acceso de modelos de machine learning para restringir el análisis a reportes tabulares.",
        "Convierte automáticamente las tablas en esquemas en estrella normalizados en tercera forma normal.",
        "Elimina la capa de gobierno de datos para permitir que cualquier proceso modifique archivos crudos sin registro.",
        "Obliga a procesar todas las consultas analíticas en motores OLTP transaccionales tradicionales."
      ],
      "feedback": "Un Data Lakehouse combina lo mejor de ambos mundos: la escalabilidad y bajo costo de un Data Lake (almacenamiento de archivos Parquet en nubes como S3/Blob) con las funciones clave de un Data Warehouse (transacciones ACID, control de versiones/time-travel, esquemas forzados y optimización de índices mediante capas de metadatos como Delta Lake o Iceberg).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 7: Del Data Lake al Data Lakehouse)"
    },
    {
      "id": "q-b6-026",
      "blockId": "bloque-6",
      "topic": "Dimensiones de Cambio Lento · SCD Tipo 1 vs Tipo 3",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Al modelar cambios en las dimensiones, ¿cuál es la distinción técnica entre aplicar SCD Tipo 1 y SCD Tipo 3 según Ralph Kimball?",
      "correctPool": [
        "SCD Tipo 1 sobrescribe el dato antiguo perdiendo el historial; SCD Tipo 3 agrega una nueva columna (ej. Ciudad_Anterior) para comparar el estado previo inmediato con el actual.",
        "El Tipo 1 actualiza la tupla in-place sin guardar historia; el Tipo 3 preserva dos versiones del atributo en columnas paralelas dentro de la misma fila."
      ],
      "distractorPool": [
        "El Tipo 1 crea una nueva fila con fechas de vigencia; el Tipo 3 borra la tabla de hechos en cascada.",
        "El Tipo 1 solo aplica a clientes extranjeros; el Tipo 3 es exclusivo de transacciones de inventario.",
        "El Tipo 1 utiliza tablas puente intermedias; el Tipo 3 se modela exclusivamente como dimensión basura.",
        "El Tipo 1 almacena datos en formato columnar; el Tipo 3 reside en almacenes de clave-valor no relacionales.",
        "El Tipo 1 es exclusivo de tablas de hechos transaccionales; el Tipo 3 solo se aplica a dimensiones degeneradas."
      ],
      "feedback": "SCD Tipo 1 simplemente sobrescribe el valor (no conserva historial). SCD Tipo 3 añade una nueva columna a la tabla de dimensiones (ej. Ciudad_Actual y Ciudad_Anterior), permitiendo ver el valor actual y el valor inmediatamente anterior, pero sin rastrear múltiples transiciones históricas completas (lo cual requiere Tipo 2).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 3: Técnicas de Gestión de SCD)"
    },
    {
      "id": "q-b6-027",
      "blockId": "bloque-6",
      "topic": "Calidad de Datos en BI · Dimensiones de Calidad Joyanes",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En la evaluación de la Calidad de Datos (Data Quality) en procesos de BI, ¿qué dimensión mide el grado en que no existen valores faltantes en atributos obligatorios?",
      "correctPool": [
        "Completitud (Completeness).",
        "Completitud de los datos."
      ],
      "distractorPool": [
        "Oportunidad (Timeliness).",
        "Exactitud (Accuracy).",
        "Consistencia (Consistency).",
        "Unicidad (Uniqueness).",
        "Conformidad (Conformity)."
      ],
      "feedback": "Completitud (Completeness) mide si todos los datos obligatorios requeridos para el negocio están presentes (ausencia de valores nulos o registros incompletos). Exactitud mide si los datos reflejan la realidad; Consistencia mide si no hay contradicciones entre fuentes; Oportunidad mide si están disponibles a tiempo.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 6: Calidad de Datos)"
    },
    {
      "id": "q-b6-028",
      "blockId": "bloque-6",
      "topic": "Minería de Datos · Reglas de Asociación Joyanes",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En el análisis de afinidad de canasta de mercado (Market Basket Analysis) mediante el algoritmo Apriori, ¿qué métrica cuantifica la probabilidad condicional de que un cliente compre el producto B dado que ya compró el producto A (A ➔ B)?",
      "correctPool": [
        "Confianza (Confidence = Soporte(A y B) / Soporte(A)).",
        "Confianza condicional (Confidence en reglas de asociación)."
      ],
      "distractorPool": [
        "Soporte (Support = Frecuencia(A y B) / Total Transacciones).",
        "Elevación o Sustentación (Lift = Confianza / Soporte(B)).",
        "Convicción (Conviction de la regla asociativa).",
        "Apalancamiento estadístico (Leverage muestral).",
        "Índice de Jaccard de similitud de conjuntos."
      ],
      "feedback": "Soporte mide la frecuencia con que los productos aparecen juntos. Confianza mide la probabilidad condicional P(B|A) = Soporte(A union B) / Soporte(A), es decir, qué porcentaje de clientes que compraron A también compraron B. Lift mide la fuerza de la regla comparada con la compra aleatoria independiente de B.",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 8: Minería de Datos y Reglas de Asociación)"
    },
    {
      "id": "q-b6-029",
      "blockId": "bloque-6",
      "topic": "Modelado Dimensional · Jerarquías Ragged Joyanes",
      "difficulty": "hard",
      "lengthType": "short",
      "text": "¿Cómo se denomina una jerarquía dimensional donde los distintos caminos desde la raíz hasta las hojas tienen profundidades variables (ej. un organigrama empresarial con diferentes niveles de jefatura)?",
      "correctPool": [
        "Jerarquía Desbalanceada o Irregular (Ragged / Unbalanced Hierarchy).",
        "Jerarquía Desigual o Ragged Hierarchy."
      ],
      "distractorPool": [
        "Jerarquía Balanceada Simétrica.",
        "Jerarquía Totalmente Aditiva.",
        "Jerarquía Cíclica Recursiva.",
        "Jerarquía Estática de Grano Cero.",
        "Jerarquía Temporal Continua."
      ],
      "feedback": "Una jerarquía desbalanceada o irregular (Ragged Hierarchy) ocurre cuando los miembros en el nivel más bajo tienen diferentes profundidades jerárquicas (ej. en un organigrama donde algunos departamentos tienen 3 niveles de mando y otros tienen 5). Se modela frecuentemente mediante relaciones padre-hijo (Parent-Child) o tablas puente (Bridge Tables).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios y Analítica de Datos (Cap. 3: Jerarquías Complejas)"
    },
    {
      "id": "q-b6-030",
      "blockId": "bloque-6",
      "topic": "Gobernanza y Metadatos · Catálogo de Datos Joyanes",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En la gestión de un Data Warehouse, ¿cómo se denominan los metadatos que describen el significado funcional, definiciones de métricas y reglas organizacionales comprensibles para los analistas de negocio?",
      "correctPool": [
        "Metadatos de Negocio (Business Metadata).",
        "Metadatos de Negocio o Funcionales."
      ],
      "distractorPool": [
        "Metadatos Técnicos (Technical Metadata).",
        "Metadatos Operacionales (Operational Metadata).",
        "Metadatos de Infraestructura de Red.",
        "Metadatos de Configuración del Servidor.",
        "Metadatos de Particionamiento de Disco."
      ],
      "feedback": "Los metadatos se clasifican en: 1) Metadatos Técnicos (esquemas de bases de datos, tipos de datos, índices, pipelines), 2) Metadatos de Negocio (definiciones de términos, fórmulas de KPIs, dueños de datos, políticas de gobernanza), y 3) Metadatos Operacionales (registros de ejecución de cargas ETL, métricas de volumen, logs de auditoría).",
      "reference": "Luis Joyanes Aguilar · Inteligencia de Negocios (Cap. 2 y Cap. 6: Metadatos y Gobernanza)"
    }
  ];
});
