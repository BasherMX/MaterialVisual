/**
 * Material Visual · Banco Maestro Canónico de Reactivos
 * BLOQUE I: GESTIÓN DE PROYECTOS (Marion E. Haynes)
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
      root.MATERIAL_BANK.registerBlock('bloque-1', questions);
    }
    root.MATERIAL_BLOCK_1 = questions;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return [
  {
    "id": "q-b1-001",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "Según Marion E. Haynes, ¿cuáles son los tres factores fundamentales que configuran las restricciones interdependientes de todo proyecto?",
    "correctPool": [
      "Alcance, Costo y Tiempo.",
      "Costo, Tiempo y Alcance."
    ],
    "distractorPool": [
      "Calidad, Riesgo y Personal.",
      "Tecnología, Presupuesto y Ventas.",
      "Patrocinio, Cronograma y Métricas.",
      "Capacitación, Infraestructura y Servidores.",
      "Diseño, Codificación y Pruebas."
    ],
    "feedback": "Doctrina Marion E. Haynes: La triple restricción tradicional establece que un proyecto se encuentra delimitado por el alcance definido, el presupuesto asignado (costo) y el calendario límite (tiempo). Cualquier variación en uno afecta inevitablemente a los otros.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1, pp. 4-8)"
  },
  {
    "id": "q-b1-002",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "Al formular los objetivos formales de un proyecto conforme a la metodología de Haynes, ¿cuál es el criterio metodológico para asegurar su formulación adecuada?",
    "correctPool": [
      "Debe enunciar con claridad el resultado cuantificable, costo límite y fecha final sin prescribir los métodos cotidianos.",
      "Debe delimitar específicamente el qué se debe lograr (alcance, tiempo y costo) sin microgestionar el cómo técnico."
    ],
    "distractorPool": [
      "Debe detallar cronológicamente todas las subtareas diarias y los diagramas de flujo operativos individuales del equipo.",
      "Debe redactarse de forma abierta y cualitativa para admitir cambios continuos de alcance sin acuerdos de patrocinadores.",
      "Debe concentrarse prioritariamente en el organigrama administrativo general omitiendo las restricciones de calendario.",
      "Debe exigir la contratación inmediata de servicios en la nube para hospedar los repositorios de código fuente del sistema.",
      "Debe suprimir la estimación de costos económicos delegando la aprobación presupuestal a la fase final de despliegue."
    ],
    "feedback": "Haynes estipula que un objetivo de proyecto efectivo define el resultado esperado (qué), el costo admisible y la fecha de terminación, pero sin dictar cómo los especialistas ejecutan sus actividades técnicas diarias.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1, pp. 9-16)"
  },
  {
    "id": "q-b1-003",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Cuál es la función primordial de la Estructura de Desglose del Trabajo (WBS/EDT) dentro de la planificación de sistemas según Marion E. Haynes?",
    "correctPool": [
      "Descomponer jerárquicamente el alcance del proyecto en paquetes de trabajo manejables para asignar responsables y costos.",
      "Subdividir las entregas globales en elementos terminales delimitados que permitan estimar esfuerzos y controlar avances."
    ],
    "distractorPool": [
      "Calcular matemáticamente las holguras libres de la red PERT para determinar de forma automática la ruta crítica.",
      "Registrar exclusivamente las excepciones no controladas de la arquitectura de software durante las pruebas de integración.",
      "Sustituir el acta de constitución formal del proyecto transfiriendo la responsabilidad legal al patrocinador principal.",
      "Monitorear la tasa de errores de compilación de los módulos desplegados en los servidores de integración continua.",
      "Modelar las transacciones ACID y las relaciones entre entidades dentro del esquema físico de la base de datos."
    ],
    "feedback": "La EDT/WBS es una descomposición jerárquica orientada a entregables de todo el trabajo que el equipo debe ejecutar para lograr los objetivos. Permite definir paquetes de trabajo con costos, tiempos y responsabilidades claras.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2, pp. 21-35)"
  },
  {
    "id": "q-b1-004",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "En una Estructura de Desglose del Trabajo (WBS/EDT), ¿cómo se denomina al nivel jerárquico más bajo que permite asignar presupuesto y responsables?",
    "correctPool": [
      "Paquete de Trabajo (Work Package).",
      "Entregable Terminal o Paquete de Trabajo."
    ],
    "distractorPool": [
      "Hito de Control Estratégico.",
      "Actividad Crítica Asintótica.",
      "Cuenta Contable General.",
      "Subproyecto Independiente.",
      "Módulo de Compilación."
    ],
    "feedback": "El nivel inferior de una EDT es el Paquete de Trabajo (Work Package), el cual representa una unidad de trabajo discreta con duración, costo, recursos y responsable asignado.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2, pp. 28-32)"
  },
  {
    "id": "q-b1-005",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Un proyecto de software con fecha de entrega inaplazable presenta un atraso de dos semanas. El líder técnico evalúa dos técnicas de compresión del cronograma: Crashing (Intensificación) y Fast-tracking (Ejecución Rápida). De acuerdo con las mejores prácticas de gestión, ¿cuál es la compensación metodológica inherente a cada una?",
    "correctPool": [
      "El Crashing incrementa los costos al sumar recursos a tareas críticas, mientras el Fast-tracking eleva el riesgo al solapar fases secuenciales.",
      "La Intensificación eleva el gasto presupuestal por horas extra, mientras la Ejecución Rápida eleva el riesgo de retrabajos por paralelismo forzado."
    ],
    "distractorPool": [
      "El Crashing anula el alcance funcional del proyecto, mientras el Fast-tracking reduce el costo unitario duplicando los ciclos de pruebas.",
      "El Crashing convierte tareas concurrentes en secuenciales, mientras el Fast-tracking congela el código fuente para eliminar dependencias.",
      "El Crashing delega el proyecto a proveedores externos, mientras el Fast-tracking recalcula la ruta crítica eliminando las holguras libres.",
      "El Crashing exige reescribir la arquitectura técnica, mientras el Fast-tracking sustituye la red PERT por una matriz RACI de responsabilidades.",
      "El Crashing extiende la duración total del proyecto, mientras el Fast-tracking reduce el margen de holgura total a valores negativos permanentes."
    ],
    "feedback": "Crashing aporta recursos adicionales a las actividades críticas, lo cual incrementa el costo financiero. Fast-tracking ejecuta en paralelo actividades que normalmente se harían en secuencia, aumentando el riesgo de retrabajo y defectos.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 58-64)"
  },
  {
    "id": "q-b1-006",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "En el análisis de redes de cronograma mediante el Método de la Ruta Crítica (CPM), ¿cómo se define formalmente la Ruta Crítica del proyecto?",
    "correctPool": [
      "Es la secuencia de actividades dependientes de mayor duración que determina la fecha más temprana de finalización del proyecto.",
      "Es la trayectoria continua más larga de la red cuya holgura total es cero e indica la duración mínima posible del proyecto."
    ],
    "distractorPool": [
      "Es el conjunto de tareas secundarias que disponen de mayor margen de holgura libre para absorber retrasos operativos del equipo.",
      "Es el promedio ponderado de los caminos paralelos calculado a través de la distribución probabilística Beta de tres puntos.",
      "Es la cadena de actividades administrativas que consumen más del cincuenta por ciento del presupuesto financiero asignado.",
      "Es el ordenamiento topológico de los componentes técnicos que no poseen restricciones de precedencia en la matriz de trazabilidad.",
      "Es el ciclo de iteraciones ágiles cuyo objetivo prioritario consiste en refactorizar la deuda técnica acumulada en producción."
    ],
    "feedback": "La Ruta Crítica es la secuencia más larga de actividades en la red de un proyecto. Representa la menor cantidad de tiempo en la que se puede completar el proyecto; sus actividades tienen holgura total cero.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 45-54)"
  },
  {
    "id": "q-b1-007",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "En la técnica de estimación PERT de tres puntos, si el tiempo optimista es 4 días, el más probable es 7 días y el pesimista es 16 días, ¿cuál es la duración esperada calculada?",
    "correctPool": [
      "8 días (calculado mediante (4 + 4(7) + 16) / 6).",
      "8 días mediante la fórmula de distribución Beta."
    ],
    "distractorPool": [
      "9 días mediante promedio aritmético simple.",
      "7 días adoptando el valor más probable.",
      "10 días sumando los valores extremos.",
      "6 días dividiendo entre cuatro factores.",
      "12 días aplicando una desviación estándar."
    ],
    "feedback": "Fórmula PERT Beta: TE = (O + 4M + P) / 6 = (4 + 4(7) + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 días.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 50-55)"
  },
  {
    "id": "q-b1-008",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "trap",
    "text": "En la Matriz de Asignación de Responsabilidades RACI según las mejores prácticas de gestión de proyectos, ¿cuál es el principio formal que rige la asignación del rol 'Accountable' (Rendición de Cuentas) en cada paquete de trabajo?",
    "correctPool": [
      "Requiere asignarse exactamente a una sola persona con autoridad final para responder por el entregable.",
      "Exige asignarse estrictamente a una sola persona con autoridad final para responder por el entregable."
    ],
    "distractorPool": [
      "No requiere asignarse a una sola persona, pudiendo compartirse la autoridad final entre múltiples líderes técnicos.",
      "Requiere asignarse obligatoriamente a todo el equipo ejecutor para compartir la autoridad final del entregable.",
      "No requiere asignarse a una persona del proyecto, delegando la autoridad final al usuario final del sistema.",
      "Requiere asignarse exactamente a una sola persona sin autoridad para responder por el entregable.",
      "No requiere confirmación explícita del rol antes de iniciar la ejecución técnica del entregable."
    ],
    "feedback": "Doctrina RACI formal: Por cada tarea o paquete de trabajo debe existir exactamente un único 'Accountable' (A). Asignar más de uno diluye la responsabilidad ('cuando todos son responsables, nadie es responsable'). En contraste, el rol 'Responsible' (R) sí puede asignarse a varias personas que ejecutan la labor.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2, pp. 24-28)"
  },
  {
    "id": "q-b1-009",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Cuál de las siguientes actividades **NO** corresponde a una función metodológica atribuida a la etapa de Cierre del Proyecto según Haynes?",
    "correctPool": [
      "Descomponer los paquetes de trabajo de la EDT para calcular la duración esperada de las actividades de desarrollo.",
      "Definir el acta de constitución y negociar el alcance base con el patrocinador para mitigar la holgura negativa."
    ],
    "distractorPool": [
      "Obtener la aceptación formal y firmada de los entregables del sistema por parte del cliente o patrocinador.",
      "Documentar las lecciones aprendidas registrando los aciertos y las desviaciones operativas para proyectos futuros.",
      "Liberar y reasignar formalmente los recursos materiales, licencias y personal del equipo de trabajo asignado.",
      "Archivar la documentación técnica, los manuales de usuario y el código fuente en los repositorios definitivos.",
      "Evaluar el desempeño integral del equipo y cerrar formalmente los contratos vigentes con proveedores de servicios."
    ],
    "feedback": "Descomponer paquetes de trabajo y negociar el alcance base corresponden a la fase de Planificación y Definición inicial del proyecto, jamás a la fase de Cierre.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1 y Cap. 3)"
  },
  {
    "id": "q-b1-010",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "En el cronograma de un sistema, la actividad B tiene una duración de 5 días, su inicio más temprano (ES) es el día 10 y su finalización más tardía admisible (LF) es el día 22. ¿Cuál es su Holgura Total (Total Float)?",
    "correctPool": [
      "7 días (calculada mediante LF - EF = 22 - 15 = 7 días).",
      "7 días (calculada mediante LS - ES = 17 - 10 = 7 días)."
    ],
    "distractorPool": [
      "12 días (calculada sumando duración e inicio temprano).",
      "5 días (asumiendo erróneamente que iguala a su duración).",
      "2 días (calculada restando el inicio tardío y la duración).",
      "17 días (adoptando directamente el inicio tardío admisible).",
      "0 días (concluyendo erróneamente que está en la ruta crítica)."
    ],
    "feedback": "ES = 10, Duración = 5 ➔ EF = 10 + 5 = 15. Si LF = 22, entonces LS = 22 - 5 = 17. Holgura Total = LF - EF = 22 - 15 = 7 días (o LS - ES = 17 - 10 = 7 días).",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 48-52)"
  },
  {
    "id": "q-b1-011",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "easy",
    "lengthType": "trap",
    "text": "En la técnica de cronograma de proyectos de Marion E. Haynes, ¿qué característica temporal y de recursos distingue ontológicamente a un 'Hito' (Milestone) frente a una 'Actividad' ordinaria?",
    "correctPool": [
      "Posee duración estrictamente igual a cero días y no consume recursos de trabajo en el proyecto.",
      "Tiene duración estrictamente igual a cero días y no consume recursos presupuestales en el proyecto."
    ],
    "distractorPool": [
      "Posee duración estrictamente mayor a cero días y no consume recursos de trabajo en el proyecto.",
      "Posee duración estrictamente igual a cero días y consume recursos intensivos de trabajo en el proyecto.",
      "No posee duración fija en el cronograma y consume recursos ilimitados de trabajo en el proyecto.",
      "Tiene duración estrictamente mayor a cero días y consume recursos moderados de trabajo en el proyecto.",
      "No tiene duración registrable en el cronograma y requiere asignación obligatoria de personal técnico."
    ],
    "feedback": "Doctrina Marion E. Haynes: Un hito (milestone) es un evento significativo de control en el proyecto que marca la culminación de un entregable o fase clave. Por definición metodológica, representa un punto en el tiempo: tiene duración 0 (cero) y no consume recursos ni esfuerzo.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1, pp. 10-14)"
  },
  {
    "id": "q-b1-012",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Durante la fase de ejecución, un patrocinador solicita incorporar un módulo analítico de reportería que no estaba contemplado en el alcance inicial. Según Haynes, ¿cuál es la conducta metodológica rigurosa que debe adoptar el director del proyecto?",
    "correctPool": [
      "Evaluar el impacto de la solicitud en costo, tiempo y calidad antes de someterla al proceso formal de control de cambios.",
      "Analizar formalmente el impacto en la triple restricción y presentar la evaluación al comité de cambios para su aprobación."
    ],
    "distractorPool": [
      "Aceptar de inmediato la solicitud e instruir al equipo técnico a trabajar horas extras sin ajustar la fecha de entrega final.",
      "Rechazar terminantemente la solicitud argumentando que la EDT no puede ser modificada bajo ninguna circunstancia metodológica.",
      "Implementar el módulo de manera informal en ramas de prueba sin actualizar la documentación de requerimientos del sistema.",
      "Detener la ejecución completa del proyecto hasta que concluya una nueva auditoría contable de las inversiones realizadas.",
      "Transferir la responsabilidad de entrega al equipo de infraestructura para que ellos asuman el retraso en el despliegue."
    ],
    "feedback": "Cualquier solicitud de cambio de alcance debe procesarse formalmente evaluando su impacto integral en tiempo, costo, calidad y riesgos, documentándolo y sometiéndolo a aprobación de los patrocinadores mediante el control de cambios.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2 y Cap. 3)"
  },
  {
    "id": "q-b1-013",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "De acuerdo con Haynes, ¿cuál es el atributo indispensable que distingue a un 'Proyecto' frente a las 'Operaciones' continuas de una organización?",
    "correctPool": [
      "Su carácter temporal y la creación de un resultado único.",
      "Tener principio y fin definidos con un producto o servicio único."
    ],
    "distractorPool": [
      "Su naturaleza repetitiva orientada a sostener el negocio diario.",
      "La ausencia de restricciones presupuestales o financieras.",
      "La ejecución indefinida a través de contratos de arrendamiento.",
      "La subordinación exclusiva al departamento de recursos humanos.",
      "La aplicación obligatoria de metodologías de desarrollo en cascada."
    ],
    "feedback": "Un proyecto es un esfuerzo temporal emprendido para crear un producto, servicio o resultado único. Las operaciones, en contraste, son continuas y repetitivas para mantener el negocio.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1, pp. 2-5)"
  },
  {
    "id": "q-b1-014",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "En el análisis PERT, ¿cuál es la fórmula matemática utilizada para calcular la Varianza (V) de una actividad a partir de sus estimaciones optimista (O) y pesimista (P)?",
    "correctPool": [
      "V = ((P - O) / 6)^2.",
      "V = (P - O)^2 / 36."
    ],
    "distractorPool": [
      "V = (P + 4M + O) / 6.",
      "V = (P - O) / 6.",
      "V = (P - M)^2 / 36.",
      "V = ((P + O) / 2)^2.",
      "V = (P - O)^2 / 6."
    ],
    "feedback": "La desviación estándar de una actividad en PERT es sigma = (P - O) / 6. La varianza es el cuadrado de la desviación estándar: V = ((P - O) / 6)^2 = (P - O)^2 / 36.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 52-56)"
  },
  {
    "id": "q-b1-015",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "trap",
    "text": "Al construir la Estructura de Desglose del Trabajo (WBS/EDT) de acuerdo con la doctrina de Haynes, ¿cuál es el postulado formal de la denominada 'Regla del 100%'?",
    "correctPool": [
      "La suma del trabajo en los niveles hijos debe equivaler exactamente al 100% del trabajo de su nodo padre sin omitir nada ni incluir trabajo extra.",
      "El total del trabajo en los paquetes subordinados debe representar exactamente el 100% del entregable padre sin omitir nada ni incluir trabajo extra."
    ],
    "distractorPool": [
      "La suma del trabajo en los niveles hijos no requiere equivaler al 100% del nodo padre, admitiendo trabajo extra fuera del alcance.",
      "La suma del trabajo en los niveles hijos debe equivaler a más del 100% del nodo padre para incorporar holguras ocultas de tiempo.",
      "El total del trabajo en los paquetes subordinados debe equivaler a menos del 100% del entregable padre para reservar presupuesto de contingencia.",
      "La suma del trabajo en los niveles hijos no requiere alcanzar el 100% del nodo padre antes de la fase de cierre formal del proyecto.",
      "El total del trabajo en los paquetes subordinados debe representar exactamente el 100% del tiempo cronológico del proyecto sin considerar costos."
    ],
    "feedback": "Doctrina WBS / Haynes: La Regla del 100% establece que la EDT debe incluir el 100% del trabajo definido en el alcance y nada más (sin omitir entregables requeridos ni agregar 'Gold Plating'). Los elementos hijos deben sumar exactamente el 100% del elemento padre.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2, pp. 18-22)"
  },
  {
    "id": "q-b1-016",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "scenario",
    "text": "Durante la fase de planificación de un proyecto, el equipo identifica que los requerimientos de fases posteriores son preliminares y se requiere una técnica de desglose progresivo a medida que se esclarece el alcance. Según Marion E. Haynes, ¿qué técnica formal describe esta práctica?",
    "correctPool": [
      "Planificación por ondas sucesivas (Rolling Wave Planning), detallando a corto plazo y manteniendo en alto nivel el trabajo futuro.",
      "Planificación gradual en ondas sucesivas, descomponiendo con granularidad fina las tareas inmediatas y postergando el desglose de fases lejanas."
    ],
    "distractorPool": [
      "Estimación ascendente forzada (Bottom-Up), obligando al equipo a cotizar al nivel de horas cada entregable futuro del proyecto.",
      "Nivelación de recursos por heurística, recalculando los plazos exclusivamente cuando la asignación de personal sobrepasa el límite.",
      "Compresión acelerada (Fast-Tracking), iniciando todas las fases de desarrollo simultáneamente sin importar la falta de especificación.",
      "Estimación paramétrica estadística, derivando la totalidad de los costos a partir de proyectos históricos de bases de datos relacionales.",
      "Asignación de holgura total cero, forzando a que todas las actividades del cronograma pertenezcan formalmente a la ruta crítica."
    ],
    "feedback": "La Planificación por Ondas Sucesivas (Rolling Wave Planning) es una técnica de elaboración progresiva donde el trabajo que debe realizarse a corto plazo se planifica en detalle en los niveles inferiores de la WBS, mientras que el trabajo a más largo plazo se mantiene a un nivel más general hasta disponer de mayor información.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Planificación del Alcance y WBS)"
  },
  {
    "id": "q-b1-017",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "En el marco de la gestión de riesgos en proyectos según Haynes, ¿cuál es la definición formal de 'Riesgo'?",
    "correctPool": [
      "Un evento incierto que, de ocurrir, produce un efecto positivo o negativo en los objetivos.",
      "Una condición probabilística futura capaz de alterar el alcance, costo o tiempo del proyecto."
    ],
    "distractorPool": [
      "Un problema presente y confirmado que detiene la compilación del software.",
      "Un error de sintaxis identificado durante las revisiones de código estático.",
      "La renuncia irrevocable y definitiva del patrocinador principal del proyecto.",
      "La disminución programada de los honorarios profesionales del equipo.",
      "Una auditoría obligatoria programada con anticipación en el acta constitutiva."
    ],
    "feedback": "Un riesgo de proyecto es un evento o condición incierta que, si se produce, tiene un efecto positivo (oportunidad) o negativo (amenaza) en uno o más objetivos del proyecto (tiempo, costo, alcance o calidad).",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1, pp. 16-19)"
  },
  {
    "id": "q-b1-018",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Qué herramienta gráfica utiliza barras horizontales sobre un eje de tiempo para ilustrar el cronograma y dependencias de actividades según Haynes?",
    "correctPool": [
      "El Diagrama de Barras de Gantt.",
      "El Gráfico de Cronograma de Gantt."
    ],
    "distractorPool": [
      "El Diagrama de Ishikawa de Causa-Efecto.",
      "El Histograma de Frecuencias Acumuladas de Pareto.",
      "El Diagrama de Entidad-Relación Conceptual.",
      "El Gráfico de Dispersión y Correlación Lineal.",
      "La Matriz de Trazabilidad de Clases UML."
    ],
    "feedback": "El Diagrama de Gantt es la herramienta gráfica por excelencia para ilustrar la programación temporal de tareas mediante barras horizontales, facilitando el seguimiento del estado de avance.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2 y Cap. 3)"
  },
  {
    "id": "q-b1-019",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "medium",
    "text": "¿Cuál es la diferencia metodológica entre la Holgura Libre (Free Float) y la Holgura Total (Total Float) en una red de actividades?",
    "correctPool": [
      "La Holgura Libre no afecta el inicio temprano de sus sucesoras; la Holgura Total no retrasa la fecha fin del proyecto.",
      "La Libre es el margen antes de retrasar a la actividad siguiente; la Total es el margen antes de retrasar el proyecto global."
    ],
    "distractorPool": [
      "La Holgura Libre se calcula sobre la ruta crítica; la Holgura Total se mide únicamente en tareas fuera del cronograma.",
      "La Holgura Libre representa tiempo no remunerado; la Holgura Total equivale a la reserva de contingencia económica.",
      "La Holgura Libre se mide en horas de esfuerzo; la Holgura Total corresponde a la duración calendario en días hábiles.",
      "La Holgura Libre depende de los patrocinadores; la Holgura Total es definida libremente por los desarrolladores.",
      "La Holgura Libre solo existe en redes PERT; la Holgura Total es exclusiva del diagrama de Gantt estático."
    ],
    "feedback": "Holgura Total es la cantidad de tiempo que una actividad puede retrasarse sin demorar la fecha final del proyecto. Holgura Libre es la cantidad de tiempo que una actividad puede demorarse sin afectar la fecha más temprana de inicio de ninguna actividad sucesora.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 50-54)"
  },
  {
    "id": "q-b1-020",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "trap",
    "text": "En la optimización de plazos según Marion E. Haynes, ¿cuál es la distinción operativa y de riesgo entre la técnica de 'Fast-Tracking' (Ejecución Rápida) y 'Crashing' (Intensificación)?",
    "correctPool": [
      "Fast-Tracking ejecuta actividades en paralelo incrementando el riesgo de retrabajo; Crashing asigna más recursos incrementando el costo financiero.",
      "Fast-Tracking solapa actividades en paralelo elevando el riesgo operativo; Crashing inyecta más recursos elevando el costo presupuestal."
    ],
    "distractorPool": [
      "Fast-Tracking asigna más recursos incrementando el costo financiero; Crashing ejecuta actividades en paralelo incrementando el riesgo de retrabajo.",
      "Fast-Tracking no incrementa el riesgo de retrabajo al paralelizar; Crashing no incrementa el costo financiero al agregar recursos.",
      "Fast-Tracking ejecuta actividades en serie disminuyendo el riesgo operativo; Crashing retira recursos técnicos disminuyendo el costo presupuestal.",
      "Fast-Tracking requiere autorización presupuestal adicional obligatoria; Crashing no requiere aprobación de recursos para comprimir el cronograma.",
      "Fast-Tracking no altera la secuencia del grafo de dependencias; Crashing altera obligatoriamente la ruta crítica sin modificar presupuestos."
    ],
    "feedback": "Doctrina Haynes (Compresión del Cronograma): Fast-Tracking solapa fases que normalmente se harían secuenciales (aumenta el riesgo de retrabajo por cambios imprevistos sin costo directo inicial); Crashing asigna más recursos (horas extra, equipo adicional) a la ruta crítica, logrando comprimir a expensas de mayor costo financiero.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 48-54)"
  },
  {
    "id": "q-b1-021",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "Al estimar costos en la fase de planeación, ¿qué diferencia a la Estimación Paramétrica de la Estimación Análoga según la metodología de Haynes?",
    "correctPool": [
      "La paramétrica utiliza relaciones estadísticas entre datos históricos y variables cuantitativas (ej. costo por punto de función); la análoga se basa en el juicio de proyectos pasados similares.",
      "La paramétrica calcula costos mediante algoritmos matemáticos y métricas unitarias; la análoga utiliza la experiencia directa de proyectos anteriores de escala comparable."
    ],
    "distractorPool": [
      "La paramétrica se basa en la suma detallada de cada tarea individual (Bottom-Up); la análoga utiliza el promedio ponderado de tres puntos (PERT).",
      "La paramétrica requiere descomponer el trabajo hasta el nivel de actividades; la análoga calcula el costo basándose en una regresión lineal multivariable.",
      "La paramétrica se limita a estimaciones preliminares de orden de magnitud; la análoga proporciona el presupuesto definitivo con margen de error mínimo.",
      "La paramétrica es cualitativa y la define el patrocinador; la análoga es cuantitativa y la audita un comité de control de cambios externo.",
      "La paramétrica calcula el costo exclusivamente con base en cotizaciones de proveedores; la análoga utiliza la suma de todas las horas hombre registradas en la WBS."
    ],
    "feedback": "La estimación análoga utiliza valores de proyectos anteriores similares (juicio de expertos, rápida pero menos precisa). La estimación paramétrica utiliza relaciones estadísticas entre datos históricos y variables del proyecto (ej. costo por metro cuadrado, horas por punto de función) para calcular costos o duraciones.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Estimación de Costos)"
  },
  {
    "id": "q-b1-022",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "¿Qué artefacto acompaña formalmente a la EDT/WBS para detallar los entregables, responsables, criterios de aceptación e hitos de cada paquete de trabajo?",
    "correctPool": [
      "El Diccionario de la EDT (WBS Dictionary).",
      "El Diccionario de la Estructura de Desglose del Trabajo."
    ],
    "distractorPool": [
      "La Matriz de Complejidad Ciclomática.",
      "El Registro de Errores Estáticos SonarQube.",
      "El Catálogo de Servicios Web RESTful.",
      "El Plan de Recuperación ante Desastres DRP.",
      "La Tabla de Hechos Desnormalizada."
    ],
    "feedback": "El Diccionario de la EDT es el documento complementario que proporciona información detallada y comprensiva de cada componente de la EDT (código del paquete, descripción del trabajo, responsables, supuestos, restricciones y criterios de aceptación).",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2, pp. 30-34)"
  },
  {
    "id": "q-b1-023",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Al optimizar el cronograma de un sistema con restricciones de personal especializado, ¿cuál es la diferencia operativa entre la Nivelación de Recursos (Resource Leveling) y el Suavizado de Recursos (Resource Smoothing)?",
    "correctPool": [
      "La Nivelación puede alterar la ruta crítica y aplazar la fecha final al ajustar recursos limitados; el Suavizado redistribuye cargas solo dentro de las holguras sin mover la fecha final.",
      "La Nivelación subordina el cronograma a la disponibilidad estricta pudiendo extender la entrega; el Suavizado redistribuye tareas sin modificar la ruta crítica ni posponer la fecha final."
    ],
    "distractorPool": [
      "La Nivelación aplica compresión (crashing) agregando personal; el Suavizado aplica ejecución rápida (fast-tracking) paralelizando actividades que eran originalmente secuenciales.",
      "La Nivelación elimina la holgura libre de todas las tareas; el Suavizado transfiere los riesgos técnicos a proveedores externos mediante la suscripción de contratos de precio fijo.",
      "La Nivelación se aplica exclusivamente a entregables de la ruta crítica; el Suavizado se ejecuta únicamente en actividades que presentan márgenes de holgura negativa extrema.",
      "La Nivelación ajusta estimaciones mediante la distribución Beta; el Suavizado recalcula el presupuesto agregando márgenes fijos del diez por ciento en cada tarea.",
      "La Nivelación incrementa los recursos en la línea base de costos; el Suavizado reduce el alcance funcional prescindiendo formalmente de las pruebas de integración del sistema."
    ],
    "feedback": "Resource Leveling ajusta fechas de inicio y fin ante recursos limitados, lo que a menudo alarga la ruta crítica y extiende la fecha final del proyecto. Resource Smoothing redistribuye actividades únicamente dentro de sus márgenes de holgura libre y total, sin alterar la ruta crítica ni posponer la fecha de culminación.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 62-66)"
  },
  {
    "id": "q-b1-024",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "trap",
    "text": "En la programación matemática de proyectos mediante CPM/PERT, ¿cuál es la diferencia formal entre la 'Holgura Libre' y la 'Holgura Total' de una actividad técnica?",
    "correctPool": [
      "La Holgura Libre permite retrasar una tarea sin postergar el inicio temprano de sus sucesoras; la Holgura Total permite retrasarla sin postergar la fecha final del proyecto.",
      "La Holgura Libre mide el retraso admisible sin afectar el inicio temprano de las tareas sucesoras; la Holgura Total mide el retraso admisible sin afectar la fecha final del proyecto."
    ],
    "distractorPool": [
      "La Holgura Libre permite retrasar una tarea sin postergar la fecha final del proyecto; la Holgura Total permite retrasarla sin postergar a sus sucesoras.",
      "La Holgura Libre no permite retrasar ninguna actividad del proyecto; la Holgura Total permite retrasar indefinidamente la fecha final de entrega.",
      "La Holgura Libre requiere que la actividad pertenezca a la ruta crítica; la Holgura Total prohíbe que la actividad pertenezca a la ruta crítica.",
      "La Holgura Libre mide el retraso admisible afectando el inicio de las sucesoras; la Holgura Total mide el retraso admisible afectando la fecha de entrega.",
      "La Holgura Libre no depende de las fechas tempranas de las sucesoras; la Holgura Total no depende de la fecha tardía de finalización del proyecto."
    ],
    "feedback": "Doctrina Haynes (Cálculo de Holguras en CPM): Holgura Libre = Inicio Más Temprano de la Sucesora - Fin Más Temprano de la actividad (no impacta a las inmediatas siguientes). Holgura Total = Fin Más Tardío - Fin Más Temprano (retraso máximo permisible sin alterar la fecha comprometida de entrega del proyecto).",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 42-47)"
  },
  {
    "id": "q-b1-025",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "Al definir la precedencia de tareas en una red PERT/CPM, ¿cómo se clasifica una dependencia impuesta por la naturaleza física del trabajo (ej. no se puede probar código que no ha sido escrito)?",
    "correctPool": [
      "Dependencia Obligatoria o Lógica Dura (Hard Logic).",
      "Dependencia Obligatoria (Mandatory Dependency)."
    ],
    "distractorPool": [
      "Dependencia Discrecional o Lógica Blanda (Soft Logic).",
      "Dependencia Externa no controlable.",
      "Dependencia Asintótica de Recursos.",
      "Dependencia Probabilística Estocástica.",
      "Dependencia Contractual de Proveedor."
    ],
    "feedback": "Dependencias Obligatorias (Lógica Dura): requeridas por la naturaleza física inherente del trabajo. Dependencias Discrecionales (Lógica Blanda): basadas en mejores prácticas o preferencias del equipo.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3, pp. 42-46)"
  },
  {
    "id": "q-b1-026",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "Al priorizar los riesgos de un proyecto en una matriz cualitativa según Haynes, ¿cuáles son las dos dimensiones cardinales empleadas para calcular la severidad del riesgo?",
    "correctPool": [
      "Probabilidad de ocurrencia e Impacto en los objetivos del proyecto.",
      "La Probabilidad del evento multiplicada por la magnitud del Impacto (P x I)."
    ],
    "distractorPool": [
      "Costo financiero total y Complejidad ciclomática de McCabe.",
      "Duración en días de calendario y Número de desarrolladores asignados.",
      "Tasa de fallas POFOD y Cobertura de pruebas unitarias de software.",
      "Holgura total de la ruta crítica y Margen de ganancia contractual.",
      "Antigüedad del patrocinador y Número de revisiones en el repositorio."
    ],
    "feedback": "La priorización cualitativa de riesgos evalúa la Probabilidad de que el evento ocurra y el Impacto (consecuencias en alcance, tiempo, costo o calidad) si llegase a manifestarse (P x I).",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1, pp. 16-19)"
  },
  {
    "id": "q-b1-027",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1 & 2",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "En la gestión de las comunicaciones y el control de interesados de un proyecto según Marion E. Haynes, ¿cuál es la fórmula matemática que determina el número total de canales de comunicación posibles entre N miembros del equipo?",
    "correctPool": [
      "Canales = N * (N - 1) / 2.",
      "C = [N(N - 1)] / 2."
    ],
    "distractorPool": [
      "Canales = N * (N + 1) / 2.",
      "Canales = N^2 - N + 1.",
      "Canales = (N - 1)! / 2.",
      "Canales = 2^N - N.",
      "Canales = N * (N - 2) / 3."
    ],
    "feedback": "La fórmula clásica de canales de comunicación es C = N(N - 1) / 2, donde N representa el número de partes interesadas o integrantes del equipo. Esta relación demuestra cómo la complejidad de la comunicación crece de forma cuadrática conforme se incrementa el tamaño del equipo de proyecto.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1: Organización y Comunicación del Equipo)"
  },
  {
    "id": "q-b1-028",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 2",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "¿Cómo se denominan las reservas monetarias calculadas para cubrir los 'riesgos desconocidos' o imprevistos no identificados en el proyecto?",
    "correctPool": [
      "Reserva de Gestión (Management Reserve).",
      "Reserva de Gestión (para imprevistos)."
    ],
    "distractorPool": [
      "Reserva de Contingencia (Contingency Reserve).",
      "Reserva Operativa de Riesgos Identificados.",
      "Cojín de Protección del Cronograma (Buffer).",
      "Cuenta de Control Terminal de la EDT.",
      "Presupuesto de Amortización Contractual."
    ],
    "feedback": "La Reserva de Contingencia cubre riesgos conocidos identificados en el registro de riesgos. La Reserva de Gestión cubre riesgos desconocidos ('desconocidos-desconocidos') y no forma parte de la línea base de costos, requiriendo autorización del patrocinador para su uso.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Presupuestos y Reservas)"
  },
  {
    "id": "q-b1-029",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 3",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Un desarrollador líder renuncia intempestivamente durante la semana de mayor carga del sprint. El equipo decide transferir las tareas no críticas al siguiente ciclo y reasignar las críticas a los dos ingenieros senior restantes. ¿Qué tipo de respuesta ante riesgos se ha implementado?",
    "correctPool": [
      "Mitigación del impacto del riesgo mediante redistribución operativa de prioridades.",
      "Mitigación de riesgos (reducción de la probabilidad o impacto en los entregables críticos)."
    ],
    "distractorPool": [
      "Transferencia del riesgo contratando una póliza de seguro de vida corporativa.",
      "Evasión total del riesgo cancelando formalmente el contrato con el cliente.",
      "Aceptación pasiva del riesgo sin modificar el cronograma ni las asignaciones.",
      "Explotación de una oportunidad incrementando los requerimientos de alcance.",
      "Compartición del riesgo creando una alianza comercial estratégica con la competencia."
    ],
    "feedback": "Mitigar un riesgo implica emprender acciones tempranas para reducir la probabilidad o el impacto sobre los objetivos del proyecto. Reasignar recursos a las tareas críticas y diferir las secundarias reduce las consecuencias del atraso.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1 y Cap. 3)"
  },
  {
    "id": "q-b1-030",
    "blockId": "bloque-1",
    "topic": "Gestión de Proyectos · Haynes Cap. 1",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "Al culminar satisfactoriamente un proyecto, ¿cuál es el documento formal mediante el cual el cliente o patrocinador acredita la recepción de los entregables?",
    "correctPool": [
      "Acta de Aceptación Formal y Cierre de Entregables.",
      "Acta de Cierre y Aceptación Definitiva del Proyecto."
    ],
    "distractorPool": [
      "Acta de Constitución del Proyecto (Project Charter).",
      "Matriz de Trazabilidad de Requerimientos IEEE.",
      "Diagrama de Gantt de Línea Base Inicial.",
      "Solicitud de Cambio Aprobada en Comité.",
      "Diccionario de la Estructura de Desglose del Trabajo."
    ],
    "feedback": "El Acta de Cierre y Aceptación Formal es el documento oficial suscrito por el patrocinador o cliente que certifica la conformidad y recepción definitiva de los productos del proyecto, permitiendo el cierre administrativo.",
    "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1: Cierre del Proyecto)"
  }
];
});
