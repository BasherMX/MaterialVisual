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
    "id": "simulacro-maestro-50-preguntas",
    "title": "Simulacro Maestro Nacional · 50 Reactivos de Certificación en Desarrollo & Arquitectura",
    "badge": "SIMULACRO MAESTRO 50Q",
    "category": "Evaluación Integral de Jefatura",
    "description": "Evaluación exhaustiva de 50 reactivos de opción múltiple con simetría estricta anti-sesgo y rigor doctrinal absoluto, cubriendo las 6 áreas canónicas de la bibliografía oficial: Gestión de Proyectos (Haynes), Fundamentos de Programación y Algoritmos, Ingeniería de Software (SWEBOK v4/Sommerville), Plataformas Móviles/Web/.NET 8, Bases de Datos Relacionales y Business Intelligence (Joyanes).",
    "author": "Comité Técnico de Evaluación & Arquitectura de Software",
    "version": "3.0",
    "timeLimitMinutes": 120,
    "passingScore": 80,
    "immediateFeedback": false,
    "shuffleOptions": true,
    "shuffleQuestions": true,
    "totalQuestions": 50,
    "questions": [
      {
        "id": "sim-master-q01",
        "number": 1,
        "moduleRef": "Gestión de Proyectos · Haynes Cap. 1",
        "text": "De acuerdo con Marion E. Haynes en Administración de Proyectos, al definir los objetivos formales de un proyecto de desarrollo de software, ¿cuál es el criterio metodológico para asegurar que un objetivo esté adecuadamente formulado?",
        "options": [
          "Debe enunciar con claridad el resultado final esperado cuantificable, el costo límite admisible y la fecha de terminación sin prescribir los métodos de implementación.",
          "Debe detallar cronológicamente todas las subtareas del cronograma diario, los diagramas de flujo operativos y la asignación específica de los recursos humanos individuales del equipo.",
          "Debe redactarse de forma abierta y cualitativa para admitir cambios continuos de alcance durante el ciclo de vida sin necesidad de acuerdos con patrocinadores del proyecto.",
          "Debe concentrarse prioritariamente en la justificación presupuestal contable y en el organigrama administrativo general omitiendo las restricciones temporales del entregable del sistema en producción."
        ],
        "correct": 0,
        "feedback": "Haynes estipula que un objetivo de proyecto efectivo debe ser específico, medible, delimitar el costo (recursos) y el tiempo límite, enfocándose en 'qué' se debe lograr y no en dictar 'cómo' el equipo técnico ejecuta cada actividad cotidiana.",
        "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1: Definición del Proyecto, pp. 1-15)"
      },
      {
        "id": "sim-master-q02",
        "number": 2,
        "moduleRef": "Gestión de Proyectos · Haynes Cap. 2",
        "text": "Según la metodología de planeación de proyectos de Marion E. Haynes, ¿cuál es la función primordial de la Estructura de Desglose del Trabajo (WBS/EDT) dentro de la planificación de sistemas?",
        "options": [
          "Identificar la secuencia matemática de holguras libres y totales sobre el grafo PERT para calcular automáticamente la fecha de entrega del proyecto.",
          "Descomponer jerárquicamente el alcance global del proyecto en paquetes de trabajo manejables y medibles para asignar responsabilidades claras y costear con precisión.",
          "Sustituir la matriz de asignación de responsabilidades mediante la programación directa de las rutinas de código en el repositorio del equipo técnico.",
          "Registrar exclusivamente los costos indirectos de infraestructura y nómina operativa para emitir reportes contables periódicos hacia la dirección financiera de la organización."
        ],
        "correct": 1,
        "feedback": "La EDT/WBS descompone el trabajo en entregables y paquetes de trabajo de menor granularidad jerárquica. Esto permite planear tiempos, estimar costos reales y asignar responsabilidades operativas sin ambigüedades.",
        "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Planeación del Proyecto, pp. 16-30)"
      },
      {
        "id": "sim-master-q03",
        "number": 3,
        "moduleRef": "Gestión de Proyectos · Haynes Cap. 2",
        "text": "Al estimar la duración de las actividades individuales en el cronograma de un proyecto de tecnología, ¿qué principio defiende Marion E. Haynes para prevenir distorsiones en los plazos?",
        "options": [
          "Establecer plazos arbitrariamente agresivos calculados por el patrocinador ejecutivo para forzar una mayor productividad operativa en los desarrolladores del equipo técnico asignado.",
          "Duplicar de manera preventiva la duración de cada tarea técnica para generar holguras artificiales ocultas a la supervisión de la administración del proyecto informático.",
          "Involucrar directamente en la estimación a las personas responsables de ejecutar la actividad para obtener compromisos realistas basados en su experiencia técnica cotidiana.",
          "Tomar de forma exclusiva los promedios teóricos de la industria prescindiendo del historial empírico y del perfil de destreza de los desarrolladores asignados al proyecto."
        ],
        "correct": 2,
        "feedback": "Haynes enfatiza que la persona que realizará la tarea o el especialista técnico directo es quien mejor conoce la complejidad y variables reales, fomentando el compromiso personal y la precisión en el estimado.",
        "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Estimación de Tiempos, pp. 22-28)"
      },
      {
        "id": "sim-master-q04",
        "number": 4,
        "moduleRef": "Gestión de Proyectos · Haynes Cap. 3",
        "text": "De acuerdo con Marion E. Haynes en el Capítulo 3 sobre control y seguimiento, ¿cuál es el mecanismo idóneo para validar los entregables intermedios y prevenir la insatisfacción del cliente?",
        "options": [
          "Entregar el sistema terminado en una única fase final para evitar interrupciones en la concentración técnica de los ingenieros del equipo de desarrollo de software.",
          "Modificar informalmente el alcance en cada sesión de trabajo sin registrar los impactos en el presupuesto financiero ni en la fecha límite acordada del proyecto.",
          "Delegar la validación funcional exclusivamente al personal contable de la organización basándose en los recibos de pago del proyecto de software desarrollado.",
          "Realizar revisiones formales periódicas de avance con criterios de aceptación pactados por escrito antes de iniciar la construcción del siguiente paquete de trabajo técnico."
        ],
        "correct": 3,
        "feedback": "El control efectivo exige retroalimentación continua con el cliente/patrocinador mediante hitos formales de revisión y criterios de aceptación contractuales claros, evitando discrepancias tardías y costosas al final del ciclo.",
        "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3: Control del Proyecto, pp. 31-43)"
      },
      {
        "id": "sim-master-q05",
        "number": 5,
        "moduleRef": "Gestión de Proyectos · Haynes Cap. 2",
        "text": "En la técnica de Ruta Crítica (CPM) aplicada al cronograma de un proyecto de ingeniería, ¿cómo se define matemáticamente el camino crítico dentro de la red de precedencias?",
        "options": [
          "La secuencia de actividades conectadas que posee una holgura total igual a cero y determina la duración mínima absoluta para concluir el proyecto completo.",
          "El conjunto de tareas que demandan el mayor consumo de presupuesto financiero independientemente de su posición secuencial en la red de actividades del sistema informático.",
          "El subconjunto de actividades que pueden retrasarse indefinidamente sin modificar las fechas tempranas de inicio de las tareas sucesoras directas del plan de trabajo.",
          "La ruta de mayor longitud geométrica en el diagrama de Gantt calculada exclusivamente a partir del número total de recursos humanos involucrados en la entrega técnica."
        ],
        "correct": 0,
        "feedback": "La ruta crítica es la cadena continua más larga de actividades dependientes cuya holgura total es cero. Cualquier retraso en una actividad crítica traslada idéntico retraso a la fecha de finalización global del proyecto.",
        "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Redes y Ruta Crítica, pp. 25-30)"
      },
      {
        "id": "sim-master-q06",
        "number": 6,
        "moduleRef": "Gestión de Proyectos · Haynes Cap. 3",
        "text": "En la optimización de plazos de un proyecto tecnológico según Marion E. Haynes, ¿cuál es la distinción formal de riesgo y costo entre 'Fast-Tracking' (Ejecución Rápida) y 'Crashing' (Intensificación)?",
        "options": [
          "Fast-Tracking ejecuta actividades en paralelo incrementando el riesgo de retrabajo; Crashing asigna más recursos incrementando el costo financiero.",
          "Fast-Tracking asigna más recursos incrementando el costo financiero; Crashing ejecuta actividades en paralelo incrementando el riesgo de retrabajo.",
          "Fast-Tracking no incrementa el riesgo de retrabajo al paralelizar; Crashing no incrementa el costo financiero al agregar recursos.",
          "Fast-Tracking requiere autorización presupuestal adicional obligatoria; Crashing no requiere aprobación de recursos para comprimir el cronograma."
        ],
        "correct": 0,
        "feedback": "Haynes distingue: Fast-Tracking solapa actividades originalmente secuenciales, elevando el riesgo de rehacer trabajo sin costo directo inmediato. Crashing aporta recursos adicionales a la ruta crítica para reducir tiempos a expensas de mayor costo financiero.",
        "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3: Acciones Correctivas, pp. 36-42)"
      },
      {
        "id": "sim-master-q07",
        "number": 7,
        "moduleRef": "Programación Orientada a Objetos · Matthias Noback",
        "text": "En el diseño orientado a objetos avanzado expuesto por Matthias Noback, ¿cuál es la distinción formal fundamental entre un Objeto de Valor (Value Object) y una Entidad (Entity)?",
        "options": [
          "Un Value Object posee identidad única generada por la base de datos, mientras una Entidad representa exclusivamente un tipo de dato primitivo inmutable del sistema.",
          "Un Value Object hereda obligatoriamente de una clase abstracta del sistema, mientras una Entidad implementa interfaces de serialización de mensajes de red distribuida en producción.",
          "Un Value Object es inmutable y su igualdad semántica depende de sus valores constitutivos, mientras una Entidad posee identidad persistente y ciclo de vida mutable.",
          "Un Value Object contiene métodos para orquestar servicios de infraestructura, mientras una Entidad solo contiene métodos estáticos de validación matemática de tipos del dominio."
        ],
        "correct": 2,
        "feedback": "Noback estipula que los Value Objects son inmutables y dos instancias con los mismos atributos son idénticas e intercambiables. Por contraste, una Entidad se distingue por su identidad única (ID) a lo largo del tiempo, aun si sus datos cambian.",
        "reference": "Matthias Noback · Object Design Style Guide (Cap. 2: Creating Services and Value Objects, pp. 25-50)"
      },
      {
        "id": "sim-master-q08",
        "number": 8,
        "moduleRef": "Programación Orientada a Objetos · Dathan & Ramnath",
        "text": "En el diseño de software orientado a objetos y Modelado de Dominio (DDD), ¿cuál es la restricción ontológica obligatoria que rige la mutabilidad e identidad de un 'Value Object' (Objeto de Valor)?",
        "options": [
          "Requiere ser estrictamente inmutable y se identifica únicamente por el valor de sus atributos sin poseer identidad propia.",
          "No requiere ser estrictamente inmutable y se identifica únicamente por un identificador único (ID) persistido en base de datos.",
          "Requiere ser estrictamente mutable y se identifica únicamente por la referencia en memoria RAM compartida entre hilos.",
          "No requiere validar la igualdad de sus atributos, delegando la identidad al recolector de basura del lenguaje de programación."
        ],
        "correct": 0,
        "feedback": "Un Value Object carece de ID conceptual propio y su igualdad se basa exclusivamente en los valores que contiene. Cualquier alteración a su estado requiere instanciar un nuevo objeto inmutable.",
        "reference": "Brahma Dathan & Sarnath Ramnath · Object-Oriented Analysis, Design and Implementation (Cap. 4: Inheritance and Subtyping)"
      },
      {
        "id": "sim-master-q09",
        "number": 9,
        "moduleRef": "Patrones de Diseño · Dathan & Ramnath / Noback",
        "text": "Al estructurar subsistemas desacoplados, ¿cuál es la diferencia de intencionalidad estructural entre el patrón Decorator y el patrón Adapter según el catálogo clásico de software?",
        "options": [
          "Decorator altera la estructura interna de la base de datos relacional, mientras Adapter asegura la creación de una única instancia compartida por proceso en memoria.",
          "Decorator agrega dinámicamente responsabilidades adicionales a un objeto manteniendo su misma interfaz, mientras Adapter convierte una interfaz existente en otra requerida por el cliente.",
          "Decorator transforma tipos de datos primitivos en cadenas JSON, mientras Adapter encapsula llamadas asíncronas para balancear la carga de solicitudes HTTP entrantes del servidor.",
          "Decorator permite desacoplar los productores de mensajes de los consumidores, mientras Adapter construye grafos de objetos complejos mediante constructores fluidos escalonados de software."
        ],
        "correct": 1,
        "feedback": "Decorator añade comportamientos a un componente sin alterar su contrato de interfaz (transparente para el invocador). Adapter adapta una interfaz preexistente para hacerla compatible con un cliente con requerimientos incompatibles.",
        "reference": "Dathan & Ramnath · Object-Oriented Analysis and Design (Cap. 9: Structural Patterns)"
      },
      {
        "id": "sim-master-q10",
        "number": 10,
        "moduleRef": "Estructuras de Datos · Osvaldo Cairó & Silvia Guardati",
        "text": "En la teoría de estructuras de datos de Cairó y Guardati, ¿cuál es la compensación de rendimiento fundamental al seleccionar una Lista Doblemente Enlazada frente a un Arreglo Dinámico?",
        "options": [
          "La lista garantiza acceso por índice en tiempo O(1) constante, pero exige duplicar el búfer de memoria cada vez que se satura la capacidad física asignada.",
          "La lista consume menor memoria total al prescindir de punteros de enlace, pero impide realizar recorridos bidireccionales sobre la colección de elementos ordenados en memoria.",
          "La lista permite inserciones y eliminaciones en tiempo O(1) conociendo el nodo pero sacrifica acceso aleatorio O(1) y penaliza la localidad de caché del hardware.",
          "La lista almacena todos sus nodos en posiciones físicamente contiguas de memoria, optimizando la lectura en bloque desde los registros internos del microprocesador del equipo."
        ],
        "correct": 2,
        "feedback": "Las listas enlazadas facilitan la inserción y borrado local en O(1) mediante reasignación de punteros, pero carecen de indexación directa O(1) y sufren fragmentación de memoria (pérdida de 'cache locality') frente a arreglos contiguos.",
        "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 2: Listas Doblemente Enlazadas, pp. 65-88)"
      },
      {
        "id": "sim-master-q11",
        "number": 11,
        "moduleRef": "Estructuras de Datos · Cairó & Guardati",
        "text": "De acuerdo con Cairó y Guardati, ¿qué condición define formalmente a un árbol binario balanceado AVL y qué operación restaura el balance tras una inserción Izquierda-Derecha (LR)?",
        "options": [
          "El número de hojas izquierdas iguala al de derechas; ante cualquier desbalance se reconstruye el árbol completo mediante un recorrido en preorden determinista.",
          "Cada nodo interno posee obligatoriamente dos hijos activos; ante un desbalance de +2 se elimina de forma preventiva el nodo recién ingresado al subárbol.",
          "La profundidad máxima es siempre log₂(n); ante un desbalance se transforma el árbol en una lista enlazada simple ordenada por clave alfabética en memoria.",
          "La diferencia de alturas entre subárboles no excede 1 en ningún nodo; ante desbalance Izquierda-Derecha se ejecuta una rotación doble compuesta (LR)."
        ],
        "correct": 3,
        "feedback": "En un árbol AVL, para todo nodo el factor de equilibrio (altura subárbol izquierdo menos derecho) debe ser -1, 0 o +1. El caso zig-zag Izquierda-Derecha exige una doble rotación: rotación simple a la izquierda en el hijo y luego derecha en la raíz.",
        "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 5: Árboles Balanceados AVL, pp. 210-235)"
      },
      {
        "id": "sim-master-q12",
        "number": 12,
        "moduleRef": "Estructuras de Datos · Luis Joyanes Aguilar",
        "text": "En la teoría de grafos y algoritmos de caminos mínimos, ¿cuál es la restricción necesaria sobre los pesos de las aristas para asegurar la correctitud matemática del Algoritmo de Dijkstra?",
        "options": [
          "Requiere que todas las aristas tengan pesos no negativos (≥ 0), fallando si existen aristas o ciclos con pesos negativos.",
          "No requiere que las aristas tengan pesos no negativos, convergiendo correctamente ante aristas con pesos negativos.",
          "Requiere que todas las aristas tengan pesos estrictamente negativos (< 0), fallando ante aristas con costos positivos.",
          "No requiere restricciones sobre los costos de las aristas siempre que el vértice origen posea un grado de salida par."
        ],
        "correct": 0,
        "feedback": "Dijkstra asume vorazmente que el camino más corto hacia un vértice cerrado ya no puede reducirse. Si existen aristas con pesos negativos, esta suposición matemática se invalida, requiriendo algoritmos como Bellman-Ford.",
        "reference": "Luis Joyanes Aguilar · Fundamentos de Programación (Cap. 8: Arreglos Multidimensionales, pp. 280-295)"
      },
      {
        "id": "sim-master-q13",
        "number": 13,
        "moduleRef": "Estructuras de Datos · MIT Introduction to Algorithms",
        "text": "En el análisis de montículos binarios (Binary Heaps) para colas de prioridad en MIT 6.006, ¿cuál es la cota asintótica temporal de la operación de extracción del valor mínimo (extract-min)?",
        "options": [
          "Complejidad O(1), pues la operación se limita a remover el elemento de la cima del montículo sin requerir ninguna reorganización en los subárboles subyacentes.",
          "Complejidad O(log n), dado que la raíz es reemplazada por el último elemento y se restaura el invariante de montículo descendiendo (sift-down).",
          "Complejidad O(n), debido a que se debe ejecutar una búsqueda lineal secuencial sobre todos los nodos del montículo para identificar el nuevo mínimo absoluto.",
          "Complejidad O(n log n), ya que es necesario ordenar nuevamente todo el arreglo contiguo aplicando el algoritmo recursivo de Merge Sort sobre los nodos."
        ],
        "correct": 1,
        "feedback": "La raíz se lee en O(1), pero al extraerla se coloca el último nodo en la raíz y se aplica el procedimiento de hundimiento (sift-down / heapify) a lo largo de la altura del árbol binario completo, demandando O(log n).",
        "reference": "MIT OpenCourseWare 6.006 · Introduction to Algorithms (Unit 2: Priority Queues and Heaps)"
      },
      {
        "id": "sim-master-q14",
        "number": 14,
        "moduleRef": "Análisis de Algoritmos · Cardona Torres / Gómez Fuentes",
        "text": "Al resolver la relación de recurrencia T(n) = 4T(n/2) + O(n) correspondiente a un algoritmo de Divide y Vencerás mediante el Teorema Maestro, ¿cuál es la cota asintótica estricta obtenida?",
        "options": [
          "O(n log n), dado que el trabajo de combinación lineal de los datos iguala asintóticamente a la profundidad del árbol de llamadas recursivas del programa.",
          "O(log n), debido a que el tamaño de la entrada se divide entre dos en cada paso reduciendo exponencialmente el espacio de búsqueda del problema.",
          "O(n²), puesto que el costo computacional de los subproblemas domina polinomialmente sobre el trabajo de división y recombinación lineal del algoritmo analizado en ejecución.",
          "O(n³), ya que cada llamada genera cuatro bifurcaciones simultáneas que se multiplican iterativamente por la profundidad completa del montículo de datos procesados."
        ],
        "correct": 2,
        "feedback": "En el Teorema Maestro, a = 4, b = 2, f(n) = O(n). El valor log_b(a) = log_2(4) = 2. Como f(n) = O(n¹) es polinomialmente menor que n^(log_b(a)) = n², aplica el Caso 1, resultando en T(n) = Θ(n²).",
        "reference": "Cardona Torres et al. · Análisis de algoritmos para Ingeniería de Sistemas (Cap. 3: Recurrencias y Teorema Maestro)"
      },
      {
        "id": "sim-master-q15",
        "number": 15,
        "moduleRef": "Análisis de Algoritmos · Ayala de la Vega / MIT",
        "text": "En el análisis comparativo entre algoritmos de ordenamiento, ¿cuál es la diferencia crítica de estabilidad y requerimientos de memoria auxiliar entre Mergesort y Quicksort estándar in-place?",
        "options": [
          "Mergesort es inestable y requiere O(1) de memoria auxiliar, mientras Quicksort es completamente estable consumiendo O(n²) de espacio temporal en disco duro del equipo.",
          "Mergesort opera siempre en tiempo O(n²) en el peor caso, mientras Quicksort estándar garantiza O(n log n) de manera estricta e incondicional en memoria del sistema.",
          "Mergesort clasifica los elementos exclusivamente in-place sin búferes temporales, mientras Quicksort duplica toda la memoria del sistema en cada partición recursiva ejecutada en runtime.",
          "Mergesort es estable y requiere O(n) espacio auxiliar para su mezcla, mientras Quicksort in-place requiere O(log n) de pila pero no garantiza estabilidad."
        ],
        "correct": 3,
        "feedback": "Mergesort preserva el orden relativo de claves idénticas (es estable) a costa de O(n) memoria auxiliar para la mezcla. Quicksort particiona in-place en O(log n) espacio de pila pero los intercambios no preservan el orden relativo original.",
        "reference": "Joel Ayala de la Vega · Introducción al análisis de Algoritmos (Cap. 4: Algoritmos de Ordenamiento, pp. 85-112)"
      },
      {
        "id": "sim-master-q16",
        "number": 16,
        "moduleRef": "Análisis de Algoritmos · Cardona / MIT",
        "text": "Al calcular rutas de costo mínimo en un grafo dirigido ponderado, ¿en qué circunstancia técnica estricta es obligatorio seleccionar el algoritmo de Bellman-Ford en lugar de Dijkstra?",
        "options": [
          "Cuando el grafo contiene aristas con pesos negativos, ya que Dijkstra asume vorazmente distancias no decrecientes y produce resultados matemáticamente incorrectos en ejecución.",
          "Cuando el grafo es acíclico y no ponderado, pues Dijkstra solo puede procesar grafos que posean ciclos continuos orientados a la derecha en la matriz.",
          "Cuando la cantidad total de vértices supera diez millones de nodos, debido a que Bellman-Ford posee una menor complejidad temporal asintótica en ejecución de ciclos.",
          "Cuando se requiere calcular el árbol de expansión mínima de Kruskal en lugar de las trayectorias mínimas desde un nodo origen específico del grafo computacional."
        ],
        "correct": 0,
        "feedback": "Dijkstra es un algoritmo voraz que asume que agregar una arista nunca reducirá la distancia acumulada. Si existen pesos negativos, las distancias calculadas previamente fallan, obligando a usar Bellman-Ford que relaja todas las aristas |V|-1 veces.",
        "reference": "Sergio A. Cardona Torres · Análisis de algoritmos para Ingeniería de Sistemas (Cap. 5: Algoritmos sobre Grafos)"
      },
      {
        "id": "sim-master-q17",
        "number": 17,
        "moduleRef": "Ingeniería de Requerimientos · Vazquez & Simões",
        "text": "De acuerdo con Carlos E. Vazquez y Guilherme S. Simões en Ingeniería de Requisitos, ¿cuál es la distinción formal entre una Regla de Negocio y un Requerimiento Funcional de software?",
        "options": [
          "Una regla de negocio describe la secuencia de clics que realiza el usuario en la interfaz gráfica para enviar una solicitud al servidor web corporativo.",
          "Una regla de negocio define una directriz o política corporativa intrínseca que existe independientemente de si se automatiza en un sistema informático de la institución.",
          "Un requerimiento funcional establece las restricciones de latencia de red y consumo de memoria RAM toleradas por el hardware en los servidores de producción de software.",
          "Una regla de negocio es un diagrama de despliegue que describe la asignación física de componentes de red en los centros de datos corporativos distribuidos del sistema."
        ],
        "correct": 1,
        "feedback": "Las reglas de negocio son políticas, normativas o fórmulas propias del negocio que rigen aun sin sistemas de software. Un requerimiento funcional describe las capacidades automatizadas que el software debe proveer para dar soporte a dichas reglas.",
        "reference": "Carlos Eduardo Vazquez & Guilherme Siqueira Simões · Ingeniería de Requisitos: Software Orientado al Negocio (Cap. 3: Tipología de Requisitos)"
      },
      {
        "id": "sim-master-q18",
        "number": 18,
        "moduleRef": "Ingeniería de Software · SWEBOK v4 / Pressman",
        "text": "Conforme a la Guía SWEBOK v4 y Roger S. Pressman, ¿qué propiedad formal asegura que un requisito de software sea catalogado como técnicamente 'verificable'?",
        "options": [
          "Su redacción mediante un lenguaje informal amplio que permita a los programadores interpretar libremente la lógica de negocio del sistema informático corporativo.",
          "La aprobación unánime de los diseñadores gráficos sin necesidad de someter el enunciado a pruebas de aceptación en ambientes de homologación técnica del software.",
          "La existencia de un procedimiento o prueba determinista, finita y económicamente factible mediante la cual una persona o máquina confirme su cumplimiento.",
          "La inclusión obligatoria de fragmentos de código fuente en C# o Java directamente dentro de la especificación técnica de requerimientos del sistema evaluado."
        ],
        "correct": 2,
        "feedback": "Un requerimiento es verificable si y solo si existe un proceso finito, determinista y rentable mediante el cual una persona o máquina pueda certificar inequívocamente que el software satisface la condición pactada.",
        "reference": "IEEE Computer Society · SWEBOK Guide v4.0 (Software Requirements Knowledge Area, Section 4.2)"
      },
      {
        "id": "sim-master-q19",
        "number": 19,
        "moduleRef": "Ingeniería de Requerimientos · Vazquez & Simões / Sommerville",
        "text": "De acuerdo con el axioma clásico formulado por Barry Boehm en ingeniería de software, ¿cuál es la distinción formal entre los procesos de 'Verificación' y 'Validación'?",
        "options": [
          "Verificación responde a '¿Estamos construyendo el producto correctamente?'; Validación responde a '¿Estamos construyendo el producto correcto?'.",
          "Verificación responde a '¿Estamos construyendo el producto correcto?'; Validación responde a '¿Estamos construyendo el producto correctamente?'.",
          "Verificación no requiere confrontar las especificaciones técnicas; Validación no requiere consultar las necesidades del cliente final.",
          "Verificación se ejecuta exclusivamente después del despliegue en producción; Validación se ejecuta exclusivamente antes del análisis de requisitos."
        ],
        "correct": 0,
        "feedback": "Boehm formuló: Verificación = evaluar si el producto se construye conforme a la especificación ('correctamente'). Validación = evaluar si el software satisface las necesidades operativas reales del usuario ('el producto correcto').",
        "reference": "Ian Sommerville · Ingeniería de Software (Cap. 4: Ingeniería de Requisitos, pp. 90-115)"
      },
      {
        "id": "sim-master-q20",
        "number": 20,
        "moduleRef": "Diseño de Sistemas · Ian Sommerville",
        "text": "Según Ian Sommerville en Ingeniería de Software, ¿cuál es la principal compensación (trade-off) al adoptar una arquitectura de microservicios frente a un monolito modular?",
        "options": [
          "Permite escalabilidad y despliegue independiente por servicio a cambio de una mayor complejidad operativa, consistencia eventual y latencia de red interservicio en producción.",
          "Elimina totalmente la necesidad de bases de datos persistentes garantizando que todas las transacciones ocurran en memoria compartida a costo cero de hardware del sistema.",
          "Asegura transacciones ACID atómicas inmediatas y sincronización trivial entre componentes eliminando cualquier posible falla de partición de red distribuida en los servidores corporativos.",
          "Reduce el número total de repositorios de código y suprime la necesidad de herramientas de observabilidad, trazas distribuidas o registros centralizados del sistema informático."
        ],
        "correct": 0,
        "feedback": "Los microservicios desacoplan los ciclos de despliegue y permiten escalar dominios de forma aislada, pero introducen los desafíos de sistemas distribuidos: latencia de red, fallas parciales, trazabilidad compleja y consistencia eventual.",
        "reference": "Ian Sommerville · Ingeniería de Software (Cap. 6: Arquitectura de Software, pp. 145-170)"
      },
      {
        "id": "sim-master-q21",
        "number": 21,
        "moduleRef": "Diseño de Sistemas · Pressman / Sommerville",
        "text": "En el diseño de arquitectura de software, ¿cuál de los siguientes enunciados representa la aplicación paradigmática del principio de 'Alta Cohesión y Bajo Acoplamiento'?",
        "options": [
          "Una clase única de gran tamaño que ejecuta cálculos matemáticos, renderiza pantallas, gestiona conexiones a base de datos y envía correos electrónicos a los usuarios finales.",
          "Un módulo enfocado exclusivamente en procesar pagos con tarjeta que expone una interfaz abstracta mínima y desconoce los detalles de facturación contable del sistema corporativo.",
          "Dos subsistemas que comparten variables globales en memoria estática y modifican directamente sus estructuras internas sin utilizar métodos encapsulados del módulo de software institucional.",
          "Un controlador web que instancia directamente conexiones JDBC hacia doce servidores remotos diferentes sin pasar por interfaces de repositorio desacopladas del sistema de aplicaciones."
        ],
        "correct": 1,
        "feedback": "Alta cohesión significa que todos los elementos internos del módulo colaboran hacia un único propósito funcional bien delimitado. Bajo acoplamiento significa que sus dependencias con módulos externos son mínimas y mediadas por abstracciones.",
        "reference": "Roger S. Pressman · Ingeniería del Software: Un enfoque práctico (Cap. 12: Diseño a Nivel de Componentes)"
      },
      {
        "id": "sim-master-q22",
        "number": 22,
        "moduleRef": "Modelado del Sistema · Ian Sommerville Cap. 5",
        "text": "De acuerdo con Ian Sommerville en el Capítulo 5 de Ingeniería de Software, ¿cuáles son los tres modelos formales que integran el estándar de Executable UML (xUML)?",
        "options": [
          "Diagramas de Casos de Uso narrativos, Diagramas de Secuencia parciales y Diagramas de Componentes físicos orientados al despliegue en servidor corporativo.",
          "Diagramas de Actividades de proceso, Diagramas de Despliegue de red y Diagramas de Paquetes jerárquicos de código en el repositorio del proyecto informático.",
          "Modelos de Dominio para los límites, Modelos de Clases para la estructura estática y Máquinas de Estados finitas para el comportamiento computable.",
          "Modelos Entidad-Relación lógicos, Diagramas de Flujo de Datos estructurados y Diccionarios de Almacenamiento de variables globales en disco del servidor."
        ],
        "correct": 2,
        "feedback": "Sommerville detalla que para que un modelo UML sea ejecutable y traducible a código por compiladores MDA, se requieren tres modelos formales estrictos: Modelos de Dominio, Modelos de Clases y Modelos de Estados (State Machines).",
        "reference": "Ian Sommerville · Ingeniería de Software (Cap. 5: Modelado del Sistema, Sección 5.4: Executable UML)"
      },
      {
        "id": "sim-master-q23",
        "number": 23,
        "moduleRef": "Pruebas de Sistemas · Federico Toledo",
        "text": "En la disciplina formal de pruebas expuesta por Federico Toledo, ¿cuál es la distinción rigurosa en la cadena causal entre un Error, un Defecto (Bug) y una Falla?",
        "options": [
          "La falla es la equivocación mental del analista; el error es la caída del servidor web; el defecto es la falta de memoria física en hardware corporativo.",
          "El defecto es la queja registrada por el usuario final; el error es la prueba automatizada que falla; la falla es la reescritura de la especificación técnica.",
          "Son términos conceptualmente idénticos que pueden usarse indistintamente sin ninguna diferenciación de origen ni momento de manifestación durante el ciclo de vida del software en producción.",
          "El error es una equivocación humana del programador; el defecto es la manifestación incorrecta en el código; la falla es el comportamiento anómalo observable en ejecución."
        ],
        "correct": 3,
        "feedback": "Cadena causal canónica del ISTQB y Toledo: Una persona comete un ERROR (mental); este produce un DEFECTO (bug estático en el código o documento); al ejecutarse el software con el defecto, este se manifiesta externamente como una FALLA.",
        "reference": "Federico Toledo · Introducción a las pruebas de Sistemas de Información (Cap. 1: Conceptos Básicos de Testing)"
      },
      {
        "id": "sim-master-q24",
        "number": 24,
        "moduleRef": "Pruebas de Software · Federico Toledo / Pressman",
        "text": "Al aplicar la técnica de análisis de caja blanca de Thomas McCabe, ¿qué aspecto fundamental del código determina la métrica de Complejidad Ciclomática V(G)?",
        "options": [
          "Determina el número límite de caminos lógicos linealmente independientes que deben ser ejecutados obligatoriamente para lograr una cobertura total de ramas en pruebas unitarias.",
          "Calcula el número exacto de milisegundos que tardará en ejecutarse una consulta SQL sobre un motor de base de datos relacional en producción corporativa de sistemas.",
          "Estima la cantidad de líneas de código fuente duplicadas que deben ser eliminadas durante una refactorización de arquitectura orientada a microservicios del sistema de software.",
          "Mide el porcentaje de memoria RAM que la máquina virtual asignará dinámicamente al montículo durante la ejecución de tareas concurrentes de fondo en el servidor de aplicaciones."
        ],
        "correct": 0,
        "feedback": "La complejidad ciclomática V(G) = E - N + 2P mide el número de caminos linealmente independientes del grafo de flujo de control. Define la cota mínima de casos de prueba necesarios para garantizar cobertura completa de ramas/decisiones.",
        "reference": "Roger S. Pressman · Ingeniería del Software: Un enfoque práctico (Cap. 19: Pruebas de Software: Técnicas de Caja Blanca)"
      },
      {
        "id": "sim-master-q25",
        "number": 25,
        "moduleRef": "Pruebas de Software · Federico Toledo",
        "text": "En el diseño de casos de prueba de caja negra según Federico Toledo, ¿por qué es indispensable combinar el análisis de valores límite con la partición equivalente?",
        "options": [
          "Porque las técnicas de partición equivalente solo aplican al código ensamblador y los valores límite analizan exclusivamente los esquemas relacionales de la base de datos.",
          "Porque la experiencia demuestra que la mayor concentración de fallas ocurre en las fronteras exactas y transiciones de las clases de equivalencia evaluadas.",
          "Debido a que la partición equivalente calcula la velocidad del procesador y los valores límite verifican la seguridad criptográfica del protocolo TLS en la red corporativa.",
          "Para reducir a cero el tiempo de compilación del sistema y evitar la ejecución de pruebas de integración entre los diferentes microservicios desplegados en producción."
        ],
        "correct": 1,
        "feedback": "La partición en clases de equivalencia asume homogeneidad dentro de cada rango, pero los errores humanos en condiciones de bifurcación (< vs <=, > vs >=) hacen que la mayoría de los bugs residan en los límites de los intervalos.",
        "reference": "Federico Toledo · Introducción a las pruebas de Sistemas de Información (Cap. 4: Diseño de Pruebas de Caja Negra)"
      },
      {
        "id": "sim-master-q26",
        "number": 26,
        "moduleRef": "Modelos de Ciclo de Vida · Pressman / Sommerville",
        "text": "En Entity Framework Core 8, al ejecutar una consulta de solo lectura mediante LINQ, ¿cuál es el efecto interno de aplicar la directiva AsNoTracking()?",
        "options": [
          "Deshabilita el seguimiento de entidades en el ChangeTracker, reduciendo el consumo de memoria y optimizando la velocidad de lectura.",
          "No deshabilita el seguimiento de entidades en el ChangeTracker, forzando la sincronización automática de cambios al llamar SaveChanges.",
          "Deshabilita la ejecución de la consulta en el motor SQL, forzando a que los datos se lean exclusivamente de la memoria caché local.",
          "No permite proyectar columnas individuales, exigiendo la carga obligatoria de todas las tablas relacionadas de la base de datos."
        ],
        "correct": 0,
        "feedback": "AsNoTracking() instruye a EF Core a no crear snapshots de seguimiento en el ChangeTracker. Para consultas de solo lectura, esto ahorra asignaciones de memoria y ciclos de CPU significativos.",
        "reference": "Ian Sommerville · Ingeniería de Software (Cap. 2: Procesos de Software, pp. 38-48)"
      },
      {
        "id": "sim-master-q27",
        "number": 27,
        "moduleRef": "Procesos de Software · Sommerville / González Pérez",
        "text": "Dentro del Rational Unified Process (RUP), ¿cuál es el objetivo fundamental de la fase de Elaboración en comparación con la fase de Inicio?",
        "options": [
          "Desarrollar la totalidad del código fuente de producción y redactar los manuales de usuario definitivos para el despliegue general ante los clientes corporativos.",
          "Realizar exclusivamente la justificación financiera del negocio y fijar el presupuesto contable sin examinar ningún requisito técnico de la solución de software desarrollada.",
          "Migrar los datos heredados a servidores en producción y capacitar al personal de soporte técnico en la atención de incidencias telefónicas de usuarios operativos.",
          "Establecer la línea base de la arquitectura del software, mitigar los riesgos técnicos de mayor impacto y construir un ejecutable arquitectónico validado en pruebas."
        ],
        "correct": 3,
        "feedback": "La fase de Elaboración en RUP tiene como meta central definir la arquitectura base ejecutable, resolver los riesgos técnicos críticos y estabilizar la especificación de requerimientos antes de la construcción masiva.",
        "reference": "Pedro Pablo González Pérez et al. · Fundamentos de Ingeniería de Software (Cap. 2: Metodologías y Ciclos de Vida)"
      },
      {
        "id": "sim-master-q28",
        "number": 28,
        "moduleRef": "Programación Móvil · Head First Android / Tomás Gironés",
        "text": "En el ciclo de vida de una Activity en Android, ¿qué método de retrollamada (callback) se ejecuta inmediatamente cuando la actividad pierde el foco pero sigue parcialmente visible?",
        "options": [
          "onPause(), momento en el cual la actividad debe pausar animaciones costosas, liberar la cámara o persistir cambios no guardados antes de ceder la CPU.",
          "onStop(), método donde la interfaz sigue completamente interactiva recibiendo eventos táctiles del usuario mientras se ejecutan tareas intensivas de fondo en el dispositivo.",
          "onDestroy(), retrollamada que garantiza que la actividad nunca será eliminada de la memoria RAM del dispositivo bajo condiciones de baja batería en el equipo móvil.",
          "onRestart(), evento que se dispara exclusivamente cuando el sistema operativo descarga la aplicación para liberar espacio en el almacenamiento interno flash del teléfono celular."
        ],
        "correct": 0,
        "feedback": "onPause() se ejecuta cuando la Activity entra en segundo plano parcial (por ejemplo, si aparece un diálogo semi-transparente o split-screen). Debe pausar operaciones que consuman CPU y liberar periféricos de uso exclusivo.",
        "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 3: The Activity Lifecycle)"
      },
      {
        "id": "sim-master-q29",
        "number": 29,
        "moduleRef": "Programación Móvil · Head First Android / Gironés",
        "text": "Al ocurrir un cambio de configuración en Android (como la rotación de pantalla), ¿cuál es el propósito de utilizar un componente ViewModel junto con StateFlow?",
        "options": [
          "Serializar de manera obligatoria todas las vistas XML hacia una base de datos SQLite antes de que la tarjeta de video renderice la nueva orientación física.",
          "Retener los datos del estado de la interfaz en memoria sobreviviendo a la destrucción y recreación de la Activity sin repetir llamadas a servicios de red.",
          "Forzar la ejecución síncrona de las solicitudes HTTP en el hilo principal de la interfaz para evitar desincronizaciones en la vista de usuario presentada en pantalla.",
          "Solicitar permisos de localización en tiempo de ejecución al sistema operativo cada vez que la pantalla cambia de resolución o de orientación física en uso cotidiano."
        ],
        "correct": 1,
        "feedback": "El ciclo de vida del ViewModel está desacoplado del ciclo de vida efímero de la Activity: sobrevive a la rotación de pantalla, reteniendo los datos de negocio y flujos observables sin reiniciar costosas peticiones.",
        "reference": "Jesús Tomás Gironés · El Gran Libro de Android (Cap. 6: Arquitectura de Componentes Jetpack)"
      },
      {
        "id": "sim-master-q30",
        "number": 30,
        "moduleRef": "Programación Móvil · Head First Android / Gironés",
        "text": "De acuerdo con las directrices de arquitectura oficial de Android, ¿por qué WorkManager es la biblioteca estándar para tareas en segundo plano diferibles y persistentes?",
        "options": [
          "Porque mantiene un hilo en segundo plano ejecutándose de forma continua e ininterrumpida sin importar el estado de suspensión Doze del procesador del teléfono móvil.",
          "Debido a que renderiza directamente animaciones vectoriales complejas sobre el hilo principal de la pantalla sin consumir memoria compartida de la GPU integrada del dispositivo.",
          "Porque garantiza la ejecución de la tarea si la app se cierra o el dispositivo se reinicia, respetando restricciones de red y optimización de batería.",
          "Ya que sustituye por completo a las bases de datos relacionales locales gestionando transacciones ACID concurrentes en memoria de acceso aleatorio flash rápida del sistema."
        ],
        "correct": 2,
        "feedback": "WorkManager almacena las solicitudes de trabajo en una base de datos SQLite interna. Si la app se cierra o el celular se apaga, el sistema operativo garantiza que la tarea se reanudará cuando se satisfagan las condiciones (ej. red Wi-Fi y carga).",
        "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 14: Background Work with WorkManager)"
      },
      {
        "id": "sim-master-q31",
        "number": 31,
        "moduleRef": "Programación Web · MDN / Javascript.info",
        "text": "En el modelo de concurrencia y Event Loop de JavaScript en navegadores modernos, ¿cómo se gestiona la prioridad de ejecución entre Microtasks y Macrotasks?",
        "options": [
          "Las macrotareas interrumpen inmediatamente cualquier microtarea en ejecución asignando un hilo de procesador nativo dedicado a cada temporizador configurado en memoria del navegador.",
          "Ambas colas se ejecutan en orden estrictamente alternado uno a uno garantizando tiempos de respuesta idénticos para promesas y eventos del mouse del usuario.",
          "Las promesas se encolan en la pila de llamadas (Call Stack) del sistema operativo ejecutándose antes de que se compile el código fuente JavaScript del navegador.",
          "Las microtareas (como las promesas resueltas) se vacían completamente de su cola antes de que el motor tome la siguiente macrotarea (como setTimeout) de la cola."
        ],
        "correct": 3,
        "feedback": "En cada ciclo del Event Loop de JavaScript, tras finalizar una tarea síncrona o macrotarea, el motor vacía por completo toda la cola de Microtasks (Promises, queueMicrotask) antes de procesar la siguiente macrotarea de la Task Queue.",
        "reference": "Javascript.info · El Tutorial de JavaScript Moderno (Parte 1: Event Loop: microtasks y macrotasks)"
      },
      {
        "id": "sim-master-q32",
        "number": 32,
        "moduleRef": "Programación Web · MDN Web Docs",
        "text": "Respecto a la seguridad y confidencialidad del Payload en un JSON Web Token (JWT) estándar firmado mediante JWS, ¿cuál de las siguientes afirmaciones es correcta?",
        "options": [
          "El Payload está firmado criptográficamente para garantizar su integridad, pero no está cifrado y puede ser leído por cualquiera que intercepte el token.",
          "El Payload está cifrado criptográficamente con AES-256 de forma automática, impidiendo su lectura por cualquiera que intercepte el token.",
          "La firma no garantiza la integridad del Payload, permitiendo alterar los claims del usuario sin invalidar el token en el servidor.",
          "El Payload no viaja en el token, sino que se descarga de forma síncrona desde el servidor de autenticación en cada petición HTTP."
        ],
        "correct": 0,
        "feedback": "Un JWT estándar firmado (JWS) garantiza integridad y autenticidad, pero no confidencialidad. El Payload está codificado en Base64Url y cualquiera que capture el token puede leer sus claims.",
        "reference": "MDN Web Docs · Guía de Seguridad Web: HTTP Headers (CSP & CORS)"
      },
      {
        "id": "sim-master-q33",
        "number": 33,
        "moduleRef": "Programación Web · Jakarta EE 10 / Java Persistence",
        "text": "En la especificación Jakarta Persistence (JPA), ¿cuál es el estado de una entidad cuando sus cambios en memoria ya no son rastreados activamente por el EntityManager?",
        "options": [
          "Estado Nuevo (Transient), donde la entidad está sincronizada directamente con la tabla física y cualquier mutación se escribe de inmediato en disco del servidor.",
          "Estado Desconectado (Detached), donde la entidad posee un identificador de clave primaria pero ya no forma parte del contexto de persistencia activo del gestor.",
          "Estado Administrado (Managed), donde la entidad ha sido purgada de la memoria RAM tras dispararse una excepción fatal de concurrencia optimista en el hilo.",
          "Estado Removido (Removed), donde la entidad continúa existiendo permanentemente en la base de datos sin poder eliminarse bajo ninguna instrucción SQL relacional del sistema."
        ],
        "correct": 1,
        "feedback": "En JPA, una entidad pasa a estado Detached al cerrarse el EntityManager, limpiarse el contexto (clear) o desconectarse explícitamente (detach). Tiene clave primaria pero el ORM no propaga sus mutaciones automáticamente a la BD.",
        "reference": "Jakarta EE Tutorial 10 · Jakarta Persistence: Entity Lifecycle and Persistence Context"
      },
      {
        "id": "sim-master-q34",
        "number": 34,
        "moduleRef": "Plataforma .NET 8 · Mark J. Price",
        "text": "En ASP.NET Core (.NET 8), ¿cuál es la ventaja arquitectónica principal de las Minimal APIs frente a los controladores MVC tradicionales según Mark J. Price?",
        "options": [
          "Permiten compilar directamente en ensamblador nativo x86 eliminando la máquina virtual Common Language Runtime (CLR) y el recolector de basura de memoria en runtime del host.",
          "Soportan exclusivamente conexiones TCP binarias suprimiendo la compatibilidad con solicitudes HTTP/1.1 y encabezados estándar de transferencia de texto web estructurado para clientes móviles.",
          "Reducen el overhead de invocación, asignan menos memoria al omitir la sobrecarga del pipeline de filtros MVC y optimizan el rendimiento para microservicios ligeros.",
          "Reemplazan la inyección de dependencias centralizada mediante la creación manual de variables estáticas compartidas entre todos los hilos del proceso del servidor web institucional."
        ],
        "correct": 2,
        "feedback": "Las Minimal APIs de .NET 8 mapean endpoints directamente sobre rutas ligeras sin instanciar la pesada infraestructura de ControllerActionInvoker ni el pipeline de filtros de MVC, reduciendo asignaciones de memoria y latencia.",
        "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 2: Building Web Services with Minimal APIs)"
      },
      {
        "id": "sim-master-q35",
        "number": 35,
        "moduleRef": "Plataforma .NET 8 · Mark J. Price",
        "text": "En el contenedor de Inyección de Dependencias nativo de ASP.NET Core en .NET 8, ¿cuál es el comportamiento exacto de un servicio registrado con ciclo de vida Scoped?",
        "options": [
          "Se crea una nueva instancia cada vez que se solicita el servicio en cualquier constructor o método, sin importar el contexto de la llamada en el servidor.",
          "Se crea una única instancia la primera vez que se solicita y se conserva viva indefinidamente para toda la vida del proceso de la aplicación en memoria.",
          "Se destruye y recrea la instancia cada vez que el recolector de basura ejecuta una compactación de Generación 2 en la memoria RAM del servidor de aplicaciones.",
          "Se crea una única instancia por cada solicitud HTTP entrante, compartiéndose entre todos los componentes y servicios resueltos dentro del alcance de dicha petición web."
        ],
        "correct": 3,
        "feedback": "Un servicio Scoped comparte la misma instancia a través de todos los componentes inyectados dentro de una misma solicitud HTTP (scope). Al concluir la respuesta, el contenedor desecha automáticamente todas las instancias creadas en ese ámbito.",
        "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 1: Modern .NET Architecture & Dependency Injection)"
      },
      {
        "id": "sim-master-q36",
        "number": 36,
        "moduleRef": "Plataforma .NET 8 · Mark J. Price",
        "text": "Al ejecutar consultas de solo lectura de alto volumen con Entity Framework Core en .NET 8, ¿por qué es recomendable invocar el método AsNoTracking()?",
        "options": [
          "Desactiva el ChangeTracker interno de la sesión, disminuyendo notablemente el consumo de memoria RAM y acelerando la velocidad de recuperación de datos de lectura.",
          "Obliga al motor de base de datos a bloquear todas las tablas en modo exclusivo para evitar lecturas sucias durante transacciones concurrentes de red distribuida corporativa.",
          "Transforma automáticamente las consultas LINQ en llamadas asíncronas gRPC hacia un clúster de servidores de almacenamiento distribuido en la nube privada de la organización.",
          "Genera una copia física de la base de datos completa en el almacenamiento local del cliente antes de deserializar los registros en memoria principal del host evaluado."
        ],
        "correct": 0,
        "feedback": "AsNoTracking() le indica a EF Core que no cree snapshots ni rastree los objetos devueltos en su ChangeTracker interno. Esto ahorra memoria significativa y ciclos de CPU en operaciones de reporte o lectura pura.",
        "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 3: Managing Relational Data with Entity Framework Core)"
      },
      {
        "id": "sim-master-q37",
        "number": 37,
        "moduleRef": "Plataforma .NET 8 · Mark J. Price",
        "text": "De acuerdo con Mark J. Price, ¿cuáles son los fundamentos tecnológicos que otorgan a gRPC una eficiencia de red significativamente superior a REST sobre JSON?",
        "options": [
          "Emplea compresión de texto plano sobre túneles UDP garantizando que los paquetes perdidos en la red se ignoren sin penalizar el rendimiento del host de aplicaciones corporativas.",
          "Utiliza serialización binaria fuertemente tipada con Protocol Buffers y multiplexa transmisiones bidireccionales sobre una única conexión persistente HTTP/2 en la capa de transporte de red.",
          "Transfiere scripts en lenguaje C# compilados dinámicamente que se ejecutan directamente en la memoria de los enrutadores de red intermedios del conmutador centralizado del sistema.",
          "Suprime el uso de certificados criptográficos TLS permitiendo transmitir transacciones bancarias en texto plano a máxima velocidad de hardware disponible en la red corporativa institucional."
        ],
        "correct": 1,
        "feedback": "gRPC utiliza HTTP/2 para enviar múltiples peticiones sobre un único socket TCP de forma multiplexada (sin bloqueo head-of-line) y serializa contratos fuertemente tipados en binario compacto con Protobuf, superando el peso del JSON textual.",
        "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 5: Building Fast and Compact Network Services with gRPC)"
      },
      {
        "id": "sim-master-q38",
        "number": 38,
        "moduleRef": "Bases de Datos · Catherine Ricardo / Andy Oppel",
        "text": "En la arquitectura canónica ANSI/SPARC de tres niveles para DBMS (doctrina Oppel y Ricardo), ¿qué nivel garantiza la independencia física de datos y cómo la logra?",
        "options": [
          "El Nivel Externo (Vistas), al compilar los procedimientos almacenados en microcódigo para suprimir la necesidad de esquemas de tablas relacionales en disco local del servidor.",
          "El Nivel Conceptual (Lógico), al almacenar exclusivamente los diagramas entidad-relación en memoria caché sin interactuar con los dispositivos de almacenamiento masivo del centro de datos.",
          "El Nivel Interno (Físico), al aislar los métodos de acceso a disco e indexación permitiendo modificar el almacenamiento sin alterar el esquema conceptual lógico del sistema.",
          "El Nivel de Red (Transporte), al encriptar las conexiones TCP entre los clientes y el servidor para prevenir accesos no autorizados a las bases de datos corporativas institucionales."
        ],
        "correct": 2,
        "feedback": "La independencia física de datos es la capacidad de modificar el esquema interno (estructuras de disco, índices, particionamiento) sin tener que modificar el esquema conceptual ni las aplicaciones de los usuarios.",
        "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 1: Arquitectura y Modelos de Datos, pp. 10-25)"
      },
      {
        "id": "sim-master-q39",
        "number": 39,
        "moduleRef": "Bases de Datos · Catherine Ricardo",
        "text": "En la teoría formal del Modelo Entidad-Relación de Catherine M. Ricardo, ¿qué condición estructural caracteriza a una Entidad Débil y cómo se identifica en el esquema relacional?",
        "options": [
          "Posee múltiples claves subrogadas auto-incrementables y puede existir de forma independiente sin asociarse a ninguna otra tabla del sistema relacional corporativo de la institución evaluada.",
          "Almacena exclusivamente atributos derivados calculados en tiempo de ejecución por consultas SQL mediante el uso de vistas temporales indexadas en disco del motor corporativo de datos.",
          "Se representa mediante un rectángulo de línea simple y no admite la definición de restricciones de integridad referencial ni eliminación en cascada de registros del sistema de información.",
          "Su existencia depende de una entidad fuerte propietaria y carece de clave primaria propia, requiriendo un discriminador más la clave foránea identificadora en el diseño."
        ],
        "correct": 3,
        "feedback": "Una entidad débil no posee atributos suficientes para conformar una clave primaria por sí misma; depende existencialmente de una entidad padre (fuerte) y se identifica mediante la clave de esta unida a su discriminador o clave parcial.",
        "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 2: El Modelo Entidad-Vínculo, pp. 35-60)"
      },
      {
        "id": "sim-master-q40",
        "number": 40,
        "moduleRef": "Diseño Lógico de Bases de Datos · Mercedes Marques",
        "text": "En la teoría de transacciones ACID y control de concurrencia, ¿en qué consiste formalmente la anomalía transaccional de 'Lectura Sucia' (Dirty Read)?",
        "options": [
          "Ocurre cuando una transacción lee datos modificados por otra transacción concurrente que aún no ha confirmado sus cambios con COMMIT.",
          "Ocurre cuando una transacción lee datos modificados por otra transacción concurrente después de que esta confirmó sus cambios con COMMIT.",
          "Ocurre cuando una transacción no puede leer ningún registro porque otra transacción bloqueó exclusivamente toda la base de datos.",
          "Sucede cuando dos transacciones ejecutan sentencias SELECT concurrentes sobre la misma tabla sin alterar ningún dato en disco."
        ],
        "correct": 0,
        "feedback": "Una lectura sucia (Dirty Read) sucede cuando una transacción lee datos modificados por otra transacción que aún no ha hecho commit. Si la transacción modificadora hace rollback, la lectura habrá operado con datos inexistentes.",
        "reference": "Mercedes Marques · Bases de datos (Cap. 3: Paso del Modelo Conceptual al Lógico Relacional, pp. 75-92)"
      },
      {
        "id": "sim-master-q41",
        "number": 41,
        "moduleRef": "Normalización de Bases de Datos · Marques / Ricardo",
        "text": "En la teoría formal de normalización, ¿qué requisito indispensable debe cumplirse para que una relación en Primera Forma Normal (1FN) alcance la Segunda Forma Normal (2FN)?",
        "options": [
          "Todos los atributos determinantes deben ser obligatoriamente superclaves candidatas, eliminando cualquier tipo de dependencia funcional no trivial del diseño relacional de la tabla.",
          "Todos los atributos no clave deben depender funcionalmente de manera completa de la clave primaria, eliminando dependencias parciales en claves compuestas del esquema relacional.",
          "No deben existir dependencias funcionales transitivas entre los atributos no clave respecto a la clave primaria definida en el esquema relacional de la tabla corporativa.",
          "Todos los atributos multivaluados deben almacenarse en cadenas binarias comprimidas dentro del mismo registro para ahorrar espacio físico en disco del servidor relacional."
        ],
        "correct": 1,
        "feedback": "2FN exige que la tabla esté en 1FN y que ningún atributo no clave tenga dependencia parcial respecto a una parte de la clave primaria. Si la clave es compuesta, ningún campo no clave puede depender de un subconjunto de ella.",
        "reference": "Mercedes Marques · Bases de datos (Cap. 4: Teoría de la Normalización, pp. 95-120)"
      },
      {
        "id": "sim-master-q42",
        "number": 42,
        "moduleRef": "Normalización de Bases de Datos · Ricardo / Marques",
        "text": "Al normalizar un esquema relacional a Tercera Forma Normal (3FN), ¿qué anomalía estructural se subsana y cuál es el procedimiento formal de descomposición?",
        "options": [
          "Se eliminan los valores nulos reemplazándolos por ceros o cadenas vacías directamente en los archivos de datos físicos del servidor corporativo de la institución evaluada.",
          "Se descompone la tabla en tantas relaciones unitarias como columnas existan en el diseño para suprimir el uso de claves primarias compuestas en las transacciones del sistema.",
          "Se eliminan las dependencias transitivas (A -> B y B -> C) extrayendo B y C a una relación separada donde B actúa como clave primaria referenciada.",
          "Se sustituyen las claves foráneas por índices de dispersión hash en memoria para acelerar la velocidad de consulta en transacciones concurrentes del sistema informático."
        ],
        "correct": 2,
        "feedback": "3FN prohíbe las dependencias funcionales transitivas entre atributos que no son clave (un atributo no clave determina a otro no clave). Se subsana extrayendo los campos implicados a una nueva tabla donde el determinante sea clave primaria.",
        "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Normalización y Diseño de Esquemas Relacionales, pp. 180-210)"
      },
      {
        "id": "sim-master-q43",
        "number": 43,
        "moduleRef": "Normalización de Bases de Datos · Catherine Ricardo",
        "text": "Según Catherine M. Ricardo, ¿en qué circunstancia técnica específica una relación que ya cumple con la 3FN viola la Forma Normal de Boyce-Codd (BCNF)?",
        "options": [
          "Cuando una tabla relacional contiene más de tres claves foráneas que apuntan a entidades de catálogos generales con menos de diez registros en total en disco.",
          "Cuando se definen índices agrupados (clustered) sobre columnas alfanuméricas que admiten valores nulos en el motor de base de datos relacional institucional de la empresa.",
          "Cuando todos los determinantes del esquema son superclaves estrictas y no existen atributos derivados ni dependencias multivaluadas en el diseño relacional del sistema corporativo.",
          "Cuando existe una dependencia funcional X -> Y donde X no es una superclave candidata, presentándose habitualmente en tablas con claves compuestas solapadas en su estructura."
        ],
        "correct": 3,
        "feedback": "BCNF es más estricta que 3FN: para toda dependencia funcional X -> Y no trivial, X debe ser forzosamente una superclave. En 3FN se permite que Y sea parte de una clave candidata; BCNF elimina esta concesión en tablas con claves solapadas.",
        "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Forma Normal de Boyce-Codd, pp. 200-208)"
      },
      {
        "id": "sim-master-q44",
        "number": 44,
        "moduleRef": "Diseño Físico de Bases de Datos · Marques / Ricardo",
        "text": "En el diseño físico de bases de datos de Mercedes Marques, ¿por qué los índices en Árbol B+ son la estructura predeterminada preferida sobre los índices Hash?",
        "options": [
          "Porque mantienen los datos ordenados en sus hojas enlazadas soportando eficientemente consultas por rango (BETWEEN, <, >), mientras Hash solo soporta igualdad exacta O(1).",
          "Porque los índices Hash consumen el triple de memoria caché y no permiten consultar registros individuales mediante comparaciones de igualdad estricta (=) en sentencias SQL del motor.",
          "Debido a que los árboles B+ eliminan la necesidad de almacenar punteros en disco ejecutando búsquedas aleatorias sin costo de entrada/salida físico en el subsistema de almacenamiento.",
          "Ya que las estructuras Hash sufren desbalanceo de alturas requiriendo rotaciones dobles continuas para mantener su factor de equilibrio en memoria RAM principal del servidor relacional."
        ],
        "correct": 0,
        "feedback": "Las tablas hash ofrecen búsquedas puntuales O(1) pero carecen de noción de orden (las funciones hash dispersan pseudo-aleatoriamente las claves). Los Árboles B+ tienen todas las hojas enlazadas secuencialmente, facilitando lecturas por rango.",
        "reference": "Mercedes Marques · Bases de datos (Cap. 6: Almacenamiento e Indexación Física de Datos, pp. 160-185)"
      },
      {
        "id": "sim-master-q45",
        "number": 45,
        "moduleRef": "Diseño Físico de Bases de Datos · Marques / Oppel",
        "text": "¿Cuál es la diferencia física de almacenamiento entre un Índice Agrupado (Clustered) y un Índice No Agrupado (Non-Clustered) en un motor relacional?",
        "options": [
          "El índice agrupado se almacena en memoria RAM volátil; el no agrupado se graba permanentemente en archivos planos del sistema operativo anfitrión del servidor corporativo.",
          "El agrupado define el orden físico de las filas en disco (uno por tabla); el no agrupado crea una estructura separada con punteros a las filas.",
          "Una tabla admite hasta doscientos índices agrupados físicos, pero los motores relacionales restringen los no agrupados a un límite estricto de uno solo por tabla.",
          "El índice agrupado solo admite búsquedas por expresiones regulares; el no agrupado procesa exclusivamente comparaciones numéricas de números enteros sin signo en las consultas del motor."
        ],
        "correct": 1,
        "feedback": "En un índice agrupado (clustered), el nivel hoja del árbol son las propias páginas de datos de la tabla, determinando su secuencia física en disco. Por eso solo puede existir uno por tabla. Los no agrupados son estructuras separadas con punteros al dato.",
        "reference": "Andy Oppel · Fundamentos de Bases de datos (Cap. 8: Estructuras Físicas e Índices)"
      },
      {
        "id": "sim-master-q46",
        "number": 46,
        "moduleRef": "Bases de Datos · Andy Oppel",
        "text": "De acuerdo con Andy Oppel, ¿cuál es la función del Optimizador Basado en Costos (CBO) del motor de bases de datos al recibir una sentencia SQL declarativa?",
        "options": [
          "Modifica el diseño de las tablas en disco creando automáticamente nuevas claves foráneas y normalizando las relaciones a Tercera Forma Normal en producción corporativa.",
          "Convierte las consultas relacionales en procedimientos almacenados compilados en C# eliminando la necesidad de verificar la sintaxis de la instrucción recibida en el servidor.",
          "Evalúa múltiples planes de ejecución posibles estimando operaciones de E/S y CPU mediante estadísticas del catálogo, seleccionando el plan de menor costo proyectado.",
          "Ejecuta la consulta secuencialmente en todas las combinaciones de índices posibles guardando en disco el resultado de la alternativa más rápida para su posterior uso operativo."
        ],
        "correct": 2,
        "feedback": "El Optimizador Basado en Costos (CBO) genera múltiples árboles de operadores algebraicos relacionales y consulta las estadísticas de distribución de datos (histogramas, número de páginas) para elegir el plan con menor uso estimado de E/S y CPU.",
        "reference": "Andy Oppel · Fundamentos de Bases de datos (Cap. 10: Procesamiento y Optimización de Consultas)"
      },
      {
        "id": "sim-master-q47",
        "number": 47,
        "moduleRef": "Transacciones y Concurrencia · Andy Oppel / Ricardo",
        "text": "En el control de concurrencia y transacciones ACID en un DBMS, ¿qué fenómeno de lectura anómala previene el nivel Serializable frente a Repeatable Read?",
        "options": [
          "Previene las Lecturas Sucias (Dirty Reads), evitando que una transacción lea datos modificados por otra transacción antes de que ocurra el Rollback correspondiente en la sesión de trabajo.",
          "Previene las Lecturas No Repetibles, garantizando que el valor de una fila leída previamente no cambie si se vuelve a consultar en la misma transacción activa del sistema.",
          "Previene los Bloqueos Mutuos (Deadlocks), obligando al procesador del servidor a cancelar inmediatamente todas las solicitudes HTTP entrantes del sistema web en producción corporativa de software.",
          "Previene las Lecturas Fantasma (Phantom Reads), impidiendo que transacciones concurrentes inserten o eliminen filas que cumplan el predicado de una consulta activa en la base de datos."
        ],
        "correct": 3,
        "feedback": "Repeatable Read bloquea las filas leídas, impidiendo su modificación por otros, pero no bloquea la inserción de nuevas filas en el rango de búsqueda (Lectura Fantasma). Serializable utiliza bloqueos de rango o multiversión (MVCC) para evitar fantasmas.",
        "reference": "Andy Oppel · Fundamentos de Bases de datos (Cap. 9: Control de Transacciones y Bloqueos ACID)"
      },
      {
        "id": "sim-master-q48",
        "number": 48,
        "moduleRef": "Business Intelligence · Luis Joyanes Aguilar",
        "text": "En la doctrina de Business Intelligence expuesta por Luis Joyanes Aguilar, ¿cuál es la distinción metodológica y estructural entre Ralph Kimball y Bill Inmon?",
        "options": [
          "Kimball propone un enfoque Bottom-Up centrado en Data Marts con modelado dimensional; Inmon propone un enfoque Top-Down centrado en un Data Warehouse corporativo en 3NF.",
          "Kimball propone un enfoque Top-Down centrado en un Data Warehouse corporativo en 3NF; Inmon propone un enfoque Bottom-Up centrado en Data Marts dimensionales.",
          "Kimball no utiliza tablas de hechos ni dimensiones en sus diseños; Inmon prohíbe el uso de bases de datos relacionales en la arquitectura empresarial.",
          "Kimball exige normalizar todos los datos relacionales en Boyce-Codd (BCNF); Inmon promueve la desnormalización masiva en una única tabla plana en disco."
        ],
        "correct": 0,
        "feedback": "Joyanes expone que Inmon aboga por un enfoque Top-Down normalizado en 3NF corporativo global, mientras que Kimball defiende un enfoque Bottom-Up pragmático integrando Data Marts dimensionales con dimensiones conformadas.",
        "reference": "Luis Joyanes Aguilar · Inteligencia de negocios y analítica de datos (Cap. 3: Almacenes de Datos y Data Marts, pp. 85-115)"
      },
      {
        "id": "sim-master-q49",
        "number": 49,
        "moduleRef": "Modelado Dimensional · Luis Joyanes Aguilar",
        "text": "Al diseñar un modelo dimensional para análisis OLAP según Luis Joyanes, ¿qué elementos estructuran una Tabla de Hechos y cuál es su relación con las Dimensiones?",
        "options": [
          "Almacena exclusivamente atributos descriptivos textuales normalizados en Tercera Forma Normal sin contener ninguna métrica numérica de desempeño empresarial de la organización analizada de software.",
          "Contiene métricas cuantitativas del negocio y claves foráneas que apuntan a tablas de dimensiones desnormalizadas formando un Esquema en Estrella de alto rendimiento en consultas.",
          "Agrupa los procedimientos almacenados de actualización de inventarios bloqueando las consultas de lectura analítica durante las jornadas operativas de ventas de la empresa en línea.",
          "Se compone de una única clave primaria alfanumérica y réplicas exactas de las tablas operativas OLTP sin requerir transformaciones de limpieza de datos en disco."
        ],
        "correct": 1,
        "feedback": "Una tabla de hechos modela un evento o proceso del negocio y contiene medidas numéricas aditivas/semiaditivas junto a claves foráneas que conectan con las dimensiones (tiempo, producto, región) formando el esquema estrella canónico.",
        "reference": "Luis Joyanes Aguilar · Inteligencia de negocios y analítica de datos (Cap. 4: Modelado Dimensional y Procesamiento Analítico en Línea)"
      },
      {
        "id": "sim-master-q50",
        "number": 50,
        "moduleRef": "Procesamiento de Datos · Luis Joyanes Aguilar",
        "text": "En el procesamiento masivo de datos para Inteligencia de Negocios y Big Data según Luis Joyanes, ¿cuál es la justificación técnica del cambio de paradigma de ETL a ELT?",
        "options": [
          "Suprime permanentemente la fase de extracción leyendo directamente los pulsos electromagnéticos de los discos duros mediante controladores nativos de bajo nivel del sistema anfitrión.",
          "Exige que todas las transformaciones matemáticas se ejecuten exclusivamente en el navegador web del usuario final antes de enviarse al repositorio centralizado de la organización corporativa.",
          "Carga primero los datos crudos en el destino aprovechando el procesamiento paralelo masivo del Data Warehouse moderno para transformarlos in-situ según la demanda analítica.",
          "Elimina la necesidad de definir esquemas de datos o políticas de gobernanza permitiendo que cualquier usuario ejecute borrados irreversibles en producción comercial de la empresa."
        ],
        "correct": 2,
        "feedback": "En las arquitecturas modernas de Big Data y Cloud Data Warehouses, se cargan los datos en su estado crudo directamente en el repositorio (Extract-Load) y se aprovecha el motor de procesamiento distribuido del destino (MPP) para transformarlos (Transform) bajo demanda.",
        "reference": "Luis Joyanes Aguilar · Inteligencia de negocios y analítica de datos (Cap. 5: Integración de Datos: De ETL a ELT en Big Data)"
      }
    ]
  }
];
});
