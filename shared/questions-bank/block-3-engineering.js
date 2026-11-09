/**
 * Material Visual · Banco Maestro Canónico de Reactivos
 * BLOQUE III: INGENIERÍA DE SOFTWARE & CALIDAD
 * (Roger S. Pressman, Ian Sommerville, Federico Toledo, Vazquez & Simões, SWEBOK v4)
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
      root.MATERIAL_BANK.registerBlock('bloque-3', questions);
    }
    root.MATERIAL_BLOCK_3 = questions;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return [
  {
    "id": "q-b3-001",
    "blockId": "bloque-3",
    "topic": "Pruebas de Software · Cadena Causal Toledo",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "En la disciplina formal de pruebas de software expuesta por Federico Toledo, ¿cuál es la distinción causal exacta entre Error, Defecto (Bug) y Falla?",
    "correctPool": [
      "El Error es la equivocación humana; el Defecto es la imperfección estática en el código; la Falla es la manifestación dinámica en ejecución.",
      "Un Error humano introduce un Defecto en el software, el cual puede desencadenar una Falla visible durante la operación del sistema."
    ],
    "distractorPool": [
      "El Defecto es la equivocación del programador; la Falla es el reporte en el repositorio; el Error es el bloqueo del sistema operativo.",
      "La Falla es la discrepancia de requerimientos; el Error es la excepción no controlada; el Defecto es la pérdida física de datos.",
      "El Error ocurre únicamente en producción; el Defecto se detecta en la arquitectura; la Falla es una métrica de confiabilidad POFOD.",
      "El Defecto es la causa raíz administrativa; la Falla es el costo del retrabajo; el Error es la omisión en el acta de constitución.",
      "La Falla es una prueba unitaria fallida; el Error es un valor nulo en base de datos; el Defecto es la deuda técnica acumulada."
    ],
    "feedback": "Cadena causal de Toledo y el estándar IEEE/ISTQB: Una persona comete un Error (equivocación conceptual o mental), lo que genera un Defecto o Bug (manifestación estática en el código o documento), que al ejecutarse bajo ciertas condiciones provoca una Falla (comportamiento observable incorrecto en tiempo de ejecución).",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas de Información (Cap. 1: Conceptos Fundamentales)"
  },
  {
    "id": "q-b3-002",
    "blockId": "bloque-3",
    "topic": "Ingeniería de Software · Verificación vs Validación Boehm",
    "difficulty": "medium",
    "lengthType": "trap",
    "text": "De acuerdo con el axioma clásico formulado por Barry Boehm en ingeniería de software, ¿cuál es la distinción formal entre 'Verificación' y 'Validación'?",
    "correctPool": [
      "Verificación responde a '¿Estamos construyendo el producto correctamente?'; Validación responde a '¿Estamos construyendo el producto correcto?'.",
      "Verificación evalúa si el producto cumple las especificaciones de diseño; Validación evalúa si el producto satisface las necesidades reales del usuario."
    ],
    "distractorPool": [
      "Verificación responde a '¿Estamos construyendo el producto correcto?'; Validación responde a '¿Estamos construyendo el producto correctamente?'.",
      "Verificación no requiere confrontar las especificaciones técnicas; Validación no requiere consultar las necesidades del cliente final.",
      "Verificación se ejecuta exclusivamente después del despliegue en producción; Validación se ejecuta exclusivamente antes del análisis de requisitos.",
      "Verificación mide la satisfacción subjetiva del usuario final; Validación mide el cumplimiento normativo de la sintaxis del código fuente.",
      "Verificación no produce artefactos de pruebas documentados; Validación prohíbe la participación de los usuarios finales en los ensayos."
    ],
    "feedback": "Doctrina Barry Boehm / Sommerville: Verificación confirma que el software fue construido conforme a sus especificaciones técnicas de diseño ('correctamente'). Validación confirma que el software resuelve las necesidades reales y expectativas del usuario en su entorno operativo ('el producto correcto').",
    "reference": "Barry W. Boehm · Software Engineering Economics (Prentice Hall, pp. 37-40)"
  },
  {
    "id": "q-b3-003",
    "blockId": "bloque-3",
    "topic": "Métricas de Software · Complejidad Ciclomática McCabe",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Al calcular la Complejidad Ciclomática de Thomas McCabe sobre un grafo de flujo de control G que cuenta con 14 aristas (E), 10 nodos (N) y un único componente conexo (P = 1), ¿cuál es el valor de V(G) y qué representa?",
    "correctPool": [
      "V(G) = 6 (mediante E - N + 2P = 14 - 10 + 2 = 6), y representa el número máximo de caminos linealmente independientes.",
      "V(G) = 6, determinando la cota superior del número de casos de prueba necesarios para cobertura de caminos básicos."
    ],
    "distractorPool": [
      "V(G) = 4 (mediante E - N = 14 - 10 = 4), representando únicamente los predicados simples del grafo de flujo.",
      "V(G) = 8 (mediante E - N + 4P = 14 - 10 + 4 = 8), definiendo el número de bucles cerrados en la estructura.",
      "V(G) = 12 (mediante E - 2P = 14 - 2 = 12), representando el total de regiones acotadas más los nodos de salida.",
      "V(G) = 2 (mediante N - 8P = 10 - 8 = 2), determinando erróneamente que solo existen dos caminos de ejecución.",
      "V(G) = 24 (mediante E + N = 14 + 10 = 24), calculando la suma de aristas y nodos de decisión en el módulo."
    ],
    "feedback": "Fórmula de McCabe: V(G) = E - N + 2P. Con E = 14, N = 10, P = 1: V(G) = 14 - 10 + 2(1) = 6. Representa el número de caminos independientes en la base y define el número mínimo de pruebas para cobertura de caminos.",
    "reference": "Roger S. Pressman · Ingeniería del Software: Un Enfoque Práctico (Cap. 19: Pruebas de Caja Blanca)"
  },
  {
    "id": "q-b3-004",
    "blockId": "bloque-3",
    "topic": "Técnicas de Pruebas · Caja Negra & Valores Límite",
    "difficulty": "medium",
    "lengthType": "scenario",
    "text": "Un campo de texto en un módulo de nómina acepta valores enteros para la edad entre 18 y 65 años inclusive. Al aplicar la técnica de Análisis de Valores Límite (Boundary Value Analysis) con prueba de dos valores por frontera, ¿cuál es el conjunto exacto de valores que deben evaluarse?",
    "correctPool": [
      "17, 18, 65, 66 (valores inmediatamente fuera y dentro de cada frontera).",
      "{17, 18} para el límite inferior y {65, 66} para el límite superior."
    ],
    "distractorPool": [
      "18, 40, 65 (valores mínimo, medio y máximo dentro del rango válido).",
      "0, 18, 65, 100 (valores arbitrarios dentro y fuera de la escala).",
      "19, 20, 63, 64 (valores internos adyacentes omitiendo las fronteras).",
      "1, 17, 66, 99 (valores que violan deliberadamente la regla de negocio).",
      "18 y 65 exclusivamente sin comprobar los límites exteriores no válidos."
    ],
    "feedback": "El análisis de valores límite evalúa los extremos de las clases de equivalencia: justo en el límite válido (18 y 65) y justo cruzando la frontera no válida (17 y 66).",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas & Pressman"
  },
  {
    "id": "q-b3-005",
    "blockId": "bloque-3",
    "topic": "Confiabilidad del Software · Métricas Sommerville",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "¿Qué métrica de confiabilidad cuantifica la probabilidad de que un sistema falle cuando un usuario emite una solicitud de servicio específica?",
    "correctPool": [
      "POFOD (Probability of Failure on Demand).",
      "Probabilidad de Falla bajo Demanda (POFOD)."
    ],
    "distractorPool": [
      "ROCOF (Rate of Occurrence of Failures).",
      "MTTF (Mean Time To Failure).",
      "MTTR (Mean Time To Repair).",
      "AVAIL (Disponibilidad en Estado Estacionario).",
      "KLOC (Miles de Líneas de Código Fuente)."
    ],
    "feedback": "POFOD (Probability of Failure on Demand) es la probabilidad de que el sistema falle cuando se le hace una petición de servicio. Es fundamental en sistemas de protección crítica donde las demandas son poco frecuentes pero críticas (ej. sistema de parada de emergencia).",
    "reference": "Ian Sommerville · Ingeniería del Software (Cap. 11: Confiabilidad y Seguridad)"
  },
  {
    "id": "q-b3-006",
    "blockId": "bloque-3",
    "topic": "Modelos de Proceso · Modelo en Espiral Boehm",
    "difficulty": "medium",
    "lengthType": "trap",
    "text": "En la taxonomía de ciclos de vida de ingeniería de software, ¿qué característica metodológica fundamental distingue al Modelo en Espiral de Barry Boehm frente al Modelo en Cascada?",
    "correctPool": [
      "Incorpora una fase formal y explícita de análisis y mitigación de riesgos antes de comprometer cada ciclo de desarrollo.",
      "Exige una etapa formal y explícita de análisis y resolución de riesgos antes de avanzar hacia cada ciclo de desarrollo."
    ],
    "distractorPool": [
      "No incorpora una fase formal de análisis y mitigación de riesgos antes de comprometer cada ciclo de desarrollo.",
      "Incorpora una fase formal de codificación exhaustiva antes de evaluar los riesgos y viabilidad del sistema informático.",
      "No admite la iteración progresiva de prototipos, exigiendo congelar todos los requisitos antes del diseño preliminar.",
      "Exige eliminar las fases de diseño arquitectónico resolviendo los riesgos exclusivamente durante las pruebas de producción.",
      "No permite la participación de los patrocinadores del proyecto durante las evaluaciones de riesgo de las espirales."
    ],
    "feedback": "Doctrina Barry Boehm (A Spiral Model of Software Development and Enhancement): El modelo en espiral introduce la gestión continua y formal de riesgos como el eje motor que gobierna cada ciclo iterativo antes de comprometer esfuerzos o costos mayores de codificación.",
    "reference": "Barry W. Boehm · A Spiral Model of Software Development and Enhancement (IEEE Computer, pp. 61-72)"
  },
  {
    "id": "q-b3-007",
    "blockId": "bloque-3",
    "topic": "Metodologías de Desarrollo · Proceso Unificado RUP",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "¿Cuál es la secuencia cronológica canónica de las 4 fases fundamentales del Proceso Unificado de Desarrollo (RUP)?",
    "correctPool": [
      "Inception ➔ Elaboration ➔ Construction ➔ Transition.",
      "Inicio (Inception) ➔ Elaboración ➔ Construcción ➔ Transición."
    ],
    "distractorPool": [
      "Análisis ➔ Diseño ➔ Implementación ➔ Mantenimiento.",
      "Planificación ➔ Ejecución ➔ Monitoreo ➔ Cierre.",
      "Exploración ➔ Iteración ➔ Liberación ➔ Retrospectiva.",
      "Requerimientos ➔ Arquitectura ➔ Pruebas ➔ Despliegue.",
      "Concepción ➔ Modelado ➔ Verificación ➔ Validación."
    ],
    "feedback": "RUP se estructura en 4 fases secuenciales en el tiempo: Inicio (Inception: visión y alcance), Elaboración (Elaboration: arquitectura base y mitigación de riesgos), Construcción (Construction: desarrollo integral del producto) y Transición (Transition: despliegue al usuario).",
    "reference": "Ian Sommerville & Pressman · Ingeniería del Software"
  },
  {
    "id": "q-b3-008",
    "blockId": "bloque-3",
    "topic": "Diseño de Interfaces · 3 Reglas de Oro Theo Mandel",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Cuál de los siguientes principios **NO** forma parte de las Tres Reglas de Oro de Theo Mandel para el diseño de interfaces de usuario?",
    "correctPool": [
      "Maximizar el número de componentes gráficos interactivos en una sola pantalla para evitar la paginación.",
      "Priorizar la estética visual saturada por encima del tiempo de respuesta del sistema en navegadores."
    ],
    "distractorPool": [
      "Dar el control al usuario (Place the user in control).",
      "Reducir la carga de memoria del usuario (Reduce the user's memory load).",
      "Hacer que la interfaz sea consistente (Make the interface consistent).",
      "Permitir la personalización del entorno operativo sin alterar la coherencia.",
      "Proporcionar retroalimentación clara y oportuna ante cada acción del operador."
    ],
    "feedback": "Las 3 Reglas de Oro de Theo Mandel (adoptadas por Pressman) son: 1) Dar el control al usuario, 2) Reducir la carga de memoria del usuario, y 3) Hacer la interfaz consistente. Saturar la pantalla con componentes viola la reducción de carga cognitiva.",
    "reference": "Theo Mandel · The Elements of UI Design & Roger S. Pressman (Cap. 12: Diseño de la Interfaz)"
  },
  {
    "id": "q-b3-009",
    "blockId": "bloque-3",
    "topic": "Ingeniería de Requerimientos · IEEE 830 / ISO 29148",
    "difficulty": "easy",
    "lengthType": "trap",
    "text": "Conforme a los estándares de ingeniería de requerimientos IEEE 830 e ISO 29148, ¿cuál es la distinción conceptual entre un Requerimiento Funcional y uno No Funcional?",
    "correctPool": [
      "El Requerimiento Funcional describe qué debe hacer el sistema (servicios y conductas); el No Funcional describe restricciones y cualidades de calidad sobre cómo debe operar.",
      "El Requerimiento Funcional define las operaciones y respuestas del sistema; el No Funcional define los atributos de calidad, rendimiento y restricciones operativas."
    ],
    "distractorPool": [
      "El Requerimiento Funcional describe restricciones y cualidades sobre cómo debe operar; el No Funcional describe qué debe hacer el sistema.",
      "El Requerimiento Funcional no requiere validación formal con el usuario; el No Funcional no requiere medición cuantitativa en pruebas.",
      "El Requerimiento Funcional se redacta exclusivamente en lenguaje de máquina; el No Funcional se formula exclusivamente como código fuente ejecutable.",
      "El Requerimiento Funcional describe exclusivamente costos presupuestales del software; el No Funcional describe las interfaces gráficas de usuario.",
      "El Requerimiento Funcional no puede verificarse mediante casos de prueba; el No Funcional prohíbe el uso de métricas objetivas de desempeño."
    ],
    "feedback": "Doctrina IEEE 830 / ISO 29148: Los requerimientos funcionales expresan los servicios, cómputos y transformaciones de datos que el software debe proveer (el 'qué'). Los no funcionales establecen las propiedades emergentes y restricciones (rendimiento, seguridad, disponibilidad, portabilidad - el 'cómo').",
    "reference": "IEEE Std 830-1998 · IEEE Recommended Practice for Software Requirements Specifications (pp. 4-12)"
  },
  {
    "id": "q-b3-010",
    "blockId": "bloque-3",
    "topic": "Métricas de Confiabilidad · Disponibilidad y MTBF",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Un servidor de aplicaciones web presenta un Tiempo Medio Hasta el Fallo (MTTF) de 990 horas y un Tiempo Medio de Reparación (MTTR) de 10 horas. ¿Cuál es su Disponibilidad (Availability) teórica en estado estacionario?",
    "correctPool": [
      "99.0% (calculada mediante MTTF / (MTTF + MTTR) = 990 / 1000 = 0.99).",
      "99.0% dividiendo el tiempo operativo entre el tiempo total del ciclo medio entre fallas (MTBF)."
    ],
    "distractorPool": [
      "90.0% calculando la relación simple entre MTTR y MTTF.",
      "99.9% asumiendo una tasa de fallas ROCOF constante sin tiempo de recuperación.",
      "85.0% restando el tiempo de reparación del porcentaje base unitario.",
      "98.0% duplicando el margen de indisponibilidad por mantenimiento preventivo.",
      "95.0% aplicando la distribución de Poisson para diez transacciones por hora."
    ],
    "feedback": "MTBF = MTTF + MTTR = 990 + 10 = 1000 horas. Disponibilidad = MTTF / MTBF = 990 / 1000 = 0.99 (99.0%).",
    "reference": "Ian Sommerville · Ingeniería del Software (Cap. 11: Confiabilidad del Software)"
  },
  {
    "id": "q-b3-011",
    "blockId": "bloque-3",
    "topic": "Técnicas de Pruebas · Caja Blanca & Cobertura",
    "difficulty": "hard",
    "lengthType": "scenario",
    "text": "Considere el siguiente fragmento condicional:\n\nif (A && B) { X(); } else { Y(); }\n\n¿Por qué la Cobertura de Sentencias (Statement Coverage) al 100% no garantiza que la lógica booleana esté libre de defectos?",
    "correctPool": [
      "Porque ejecutar una sola prueba con A=true y B=true cubre la rama X() al 100% de sentencias pero ignora por completo la rama Y().",
      "Porque la cobertura de sentencias es la más débil; una sola prueba puede visitar todas las instrucciones sin probar las ramas falsas."
    ],
    "distractorPool": [
      "Porque la cobertura de sentencias exige que el código esté compilado en modo Release sin optimizaciones del JIT.",
      "Porque la complejidad ciclomática de McCabe prohíbe el uso de operadores lógicos de cortocircuito en producción.",
      "Porque la cobertura de sentencias únicamente es aplicable a ciclos iterativos while y for pero no a sentencias if.",
      "Porque el recolector de basura suspende los hilos de prueba falseando los resultados de las expresiones booleanas.",
      "Porque las pruebas de caja blanca no pueden inspeccionar el flujo de control sin un depurador interactivo conectado."
    ],
    "feedback": "La cobertura de sentencias solo verifica que cada instrucción se haya ejecutado al menos una vez. Con un caso de prueba donde A=true y B=true, se ejecuta X(); la cobertura de sentencias de ese bloque es 100%, pero la rama else jamas se probó, ni se evaluaron las combinaciones de A y B (cobertura de ramas y condiciones).",
    "reference": "Federico Toledo & Roger S. Pressman · Pruebas de Caja Blanca"
  },
  {
    "id": "q-b3-012",
    "blockId": "bloque-3",
    "topic": "Metodologías Ágiles · Criterios INVEST",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "En la redacción de Historias de Usuario para metodologías ágiles, ¿qué significa la letra 'V' en el acrónimo nemotécnico INVEST de Bill Wake?",
    "correctPool": [
      "Valiosa (Valuable para el cliente o usuario del negocio).",
      "Valiosa (debe aportar valor tangible al negocio)."
    ],
    "distractorPool": [
      "Verificable por medio de pruebas unitarias automáticas.",
      "Variable para admitir cambios continuos de alcance.",
      "Vinculada a la arquitectura de microservicios.",
      "Validada previamente por el departamento contable.",
      "Virtualizada en contenedores de despliegue continuo."
    ],
    "feedback": "INVEST: Independent (Independiente), Negotiable (Negociable), Valuable (Valiosa para el usuario/negocio), Estimable (Estimable), Small (Pequeña), Testable (Comprobable/Testeable).",
    "reference": "Mike Cohn & Ian Sommerville · Desarrollo Ágil de Software"
  },
  {
    "id": "q-b3-013",
    "blockId": "bloque-3",
    "topic": "Pruebas de Software · Niveles de Prueba V-Model",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "En el Modelo en V de pruebas de software, ¿con qué artefacto de ingeniería de requerimientos se corresponde directamente el nivel de Pruebas de Aceptación?",
    "correctPool": [
      "Con los Requerimientos del Usuario y Necesidades de Negocio.",
      "Con la especificación inicial de requerimientos del cliente."
    ],
    "distractorPool": [
      "Con el diseño detallado de clases y algoritmos de bajo nivel.",
      "Con la arquitectura de componentes y contratos de interfaces de red.",
      "Con el plan de despliegue físico en servidores de contingencia.",
      "Con el esquema relacional de tablas en tercera forma normal.",
      "Con la matriz de complejidad ciclomática de métodos estáticos."
    ],
    "feedback": "En el Modelo en V: Pruebas Unitarias <-> Diseño Detallado; Pruebas de Integración <-> Diseño Arquitectónico; Pruebas de Sistema <-> Requerimientos del Sistema; Pruebas de Aceptación <-> Requerimientos del Usuario / Análisis de Negocio.",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas & Sommerville"
  },
  {
    "id": "q-b3-014",
    "blockId": "bloque-3",
    "topic": "Calidad de Software · Modelo ISO/IEC 25010",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "De acuerdo con el estándar de calidad de producto software ISO/IEC 25010, ¿cuál de las siguientes subcaracterísticas pertenece a la característica de 'Mantenibilidad'?",
    "correctPool": [
      "Modularidad, Reusabilidad, Analizabilidad, Modificabilidad y Comprobabilidad (Testability).",
      "Modificabilidad y Comprobabilidad (facilidad con que el software puede ser depurado y modificado)."
    ],
    "distractorPool": [
      "Latencia de respuesta, Rendimiento de吞吐量 y Uso de memoria física del servidor.",
      "Confidencialidad, Integridad, No repudio y Autenticidad de los certificados criptográficos.",
      "Adecuación funcional, Corrección de cálculos aritméticos y Pertinencia de las operaciones.",
      "Tolerancia a fallas, Recuperabilidad ante caídas de energía y Disponibilidad continua.",
      "Capacidad de aprendizaje, Reconocimiento de la interfaz y Accesibilidad ergonómica universal."
    ],
    "feedback": "ISO/IEC 25010 descompone la Mantenibilidad en 5 subcaracterísticas: Modularidad, Reusabilidad, Analizabilidad, Modificabilidad y Capacidad para ser probado (Testability).",
    "reference": "Roger S. Pressman & ISO/IEC 25010 Software Product Quality Model"
  },
  {
    "id": "q-b3-015",
    "blockId": "bloque-3",
    "topic": "Pruebas de Software · Partición de Equivalencia",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "¿Cuál es el postulado fundamental de la técnica de Partición de Clases de Equivalencia en pruebas de caja negra?",
    "correctPool": [
      "Si un caso de prueba de una clase detecta un defecto, cualquier otro valor de la misma clase produciría el mismo efecto.",
      "Dividir el dominio de entrada en clases donde todos los valores se comportan equivalentemente ante la lógica."
    ],
    "distractorPool": [
      "Obligar al evaluador a probar cada valor numérico individualmente para agotar el espacio muestral.",
      "Verificar que el código fuente no contenga variables no inicializadas mediante análisis estático.",
      "Reordenar las clases en un árbol B+ para optimizar el tiempo de compilación de las suites de prueba.",
      "Restringir las pruebas exclusivamente a las excepciones de tipo NullReferenceException en runtime.",
      "Medir la velocidad de ejecución de las instrucciones de máquina en el microcódigo del CPU."
    ],
    "feedback": "La partición de equivalencia divide el dominio de entrada en clases válidas e inválidas bajo la premisa de que todos los miembros de una clase son tratados de manera equivalente por el software; probar un valor representativo es suficiente.",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas (Cap. 4)"
  },
  {
    "id": "q-b3-016",
    "blockId": "bloque-3",
    "topic": "Ingeniería de Requerimientos · Reglas de Negocio Vazquez & Simões",
    "difficulty": "hard",
    "lengthType": "medium",
    "text": "Según la doctrina de Vazquez & Simões en Ingeniería de Requisitos, ¿cuál es la diferencia ontológica entre una Regla de Negocio y un Requisito de Software?",
    "correctPool": [
      "La Regla de Negocio existe independientemente de si hay software o no; el Requisito de Software describe cómo el sistema automatiza o hace cumplir dicha regla.",
      "La Regla de Negocio rige las políticas organizacionales de la empresa; el Requisito define el comportamiento y funciones de la herramienta digital."
    ],
    "distractorPool": [
      "La Regla de Negocio es una directiva técnica de configuración del servidor web; el Requisito es el contrato firmado con el proveedor.",
      "La Regla de Negocio es redactada exclusivamente por los desarrolladores backend; el Requisito es elaborado por los diseñadores gráficos.",
      "La Regla de Negocio desaparece al finalizar el proyecto; el Requisito de Software permanece inmutable en la base de datos.",
      "La Regla de Negocio solo aplica a sistemas financieros transaccionales; el Requisito se aplica a portales de comercio electrónico.",
      "La Regla de Negocio define la estructura física de índices relacionales; el Requisito establece el plan de contingencia eléctrica."
    ],
    "feedback": "Vazquez & Simões enfatizan: Las Reglas de Negocio son políticas, directrices o restricciones de la organización (existen en el negocio aunque se trabaje con papel y lápiz). Los Requisitos de Software son las capacidades que el sistema digital debe poseer para soportar o automatizar dichas reglas.",
    "reference": "Carlos Vazquez & Guilherme Siqueira Simões · Engenharia de Requisitos (Cap. 3)"
  },
  {
    "id": "q-b3-017",
    "blockId": "bloque-3",
    "topic": "Diseño de Software · Acoplamiento vs Cohesión",
    "difficulty": "medium",
    "lengthType": "trap",
    "text": "En los principios de diseño de software modular expuestos por Pressman y Sommerville, ¿cuál es el objetivo arquitectónico deseable respecto a la Cohesión y al Acoplamiento?",
    "correctPool": [
      "Se busca maximizar la Cohesión interna de cada módulo y minimizar el Acoplamiento externo entre los diferentes módulos.",
      "Se procura lograr una alta Cohesión dentro de cada componente y un bajo Acoplamiento entre los distintos componentes del sistema."
    ],
    "distractorPool": [
      "Se busca minimizar la Cohesión interna de cada módulo y maximizar el Acoplamiento externo entre los diferentes módulos.",
      "Se busca maximizar tanto la Cohesión interna de cada módulo como el Acoplamiento externo entre los diferentes módulos.",
      "Se busca minimizar tanto la Cohesión interna de cada módulo como el Acoplamiento externo entre los diferentes módulos.",
      "No se requiere alta Cohesión interna siempre que todos los módulos compartan variables globales en memoria.",
      "Se procura eliminar por completo la Cohesión en los servicios web maximizando las dependencias directas entre clases."
    ],
    "feedback": "Doctrina de Arquitectura de Software (Pressman / Sommerville): El principio cardinal del diseño modular es 'Alta Cohesión y Bajo Acoplamiento'. Los elementos dentro de un módulo deben estar estrechamente vinculados a un único propósito funcional, y la interdependencia con otros módulos debe ser mínima para facilitar mantenibilidad y reusabilidad.",
    "reference": "Roger S. Pressman · Ingeniería del Software: Un Enfoque Práctico (Cap. 8: Conceptos de Diseño, pp. 215-230)"
  },
  {
    "id": "q-b3-018",
    "blockId": "bloque-3",
    "topic": "Gestión de Configuración · Línea Base (Baseline)",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Qué constituye formalmente una 'Línea Base' (Baseline) en la Gestión de Configuración del Software según Pressman y SWEBOK?",
    "correctPool": [
      "Una especificación o producto de trabajo revisado y formalmente acordado que solo puede modificarse mediante control formal de cambios.",
      "Un estado formalmente congelado de un artefacto que actúa como base para desarrollos posteriores."
    ],
    "distractorPool": [
      "La rama temporal de un desarrollador en el repositorio Git antes de hacer pull request.",
      "El respaldo nocturno en cinta magnética de las tablas del motor de base de datos.",
      "El número mínimo de líneas de código fuente requeridas para desplegar a preproducción.",
      "Una plantilla vacía de casos de uso sin aprobación por el analista de negocios.",
      "El entorno de desarrollo local configurado con certificados SSL autofirmados."
    ],
    "feedback": "Una Línea Base (Baseline) es una especificación o producto que ha sido revisado y acordado formalmente, sirviendo como fundamento para fases posteriores y que solo puede cambiarse a través de un procedimiento formal de control de cambios.",
    "reference": "Roger S. Pressman & SWEBOK v4 · Software Configuration Management"
  },
  {
    "id": "q-b3-019",
    "blockId": "bloque-3",
    "topic": "Pruebas de Software · Pruebas de Regresión",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "¿Cuál es el objetivo principal de ejecutar Pruebas de Regresión tras aplicar una corrección de defectos o refactorización?",
    "correctPool": [
      "Asegurar que los cambios o correcciones no hayan introducido nuevos defectos en partes del sistema que antes funcionaban.",
      "Verificar que la funcionalidad existente no se haya visto afectada negativamente por modificaciones recientes."
    ],
    "distractorPool": [
      "Medir la velocidad de transferencia de paquetes de red bajo condiciones de ataque distribuido.",
      "Reescribir automáticamente los manuales de usuario para reflejar las nuevas clases agregadas.",
      "Comprobar si el código nuevo cumple con los estándares ortográficos de la documentación técnica.",
      "Eliminar los datos históricos de auditoría de la base de datos para recuperar espacio en disco.",
      "Verificar que los contratos de compra de licencias de desarrollo continúen vigentes."
    ],
    "feedback": "Las pruebas de regresión se ejecutan tras modificar el software (corrección de bugs, nuevas funciones o refactorización) para asegurar que los cambios no provocaron efectos secundarios adversos (regresiones) en funcionalidades preexistentes.",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas & Sommerville"
  },
  {
    "id": "q-b3-020",
    "blockId": "bloque-3",
    "topic": "Modelado de Sistemas · Diagramas de Estado UML",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "En el modelado dinámico según Sommerville, ¿qué elemento representa una transición entre dos estados en una Máquina de Estados UML?",
    "correctPool": [
      "Un Evento disparador con una condición de guarda opcional y una acción asociada.",
      "Un Evento externo que satisface una guarda y produce un cambio de estado."
    ],
    "distractorPool": [
      "Un hilo del sistema operativo que invoca un método constructor estático.",
      "Una relación de herencia entre una clase abstracta y su implementación concreta.",
      "Un paquete de red HTTP serializado mediante el protocolo gRPC con Protobuf.",
      "Una columna foránea que referencia la clave primaria de una tabla de hechos.",
      "Una reserva presupuestal para compensar la holgura negativa de la ruta crítica."
    ],
    "feedback": "En una máquina de estados UML, una transición es el paso de un estado a otro provocado por un Evento, que puede evaluarse mediante una Condición de Guarda [guarda] y ejecutar una Acción /acción.",
    "reference": "Ian Sommerville · Ingeniería del Software (Cap. 5: Modelado del Sistema)"
  },
  {
    "id": "q-b3-021",
    "blockId": "bloque-3",
    "topic": "Pruebas de Software · Pruebas de Regresión Toledo",
    "difficulty": "easy",
    "lengthType": "trap",
    "text": "En la estrategia formal de aseguramiento de calidad del software, ¿cuál es el propósito técnico exclusivo de las 'Pruebas de Regresión' (Regression Testing)?",
    "correctPool": [
      "Verificar que las modificaciones recientes de código o corrección de bugs no hayan introducido nuevos defectos en componentes previamente funcionales.",
      "Comprobar que los cambios o extensiones de software no hayan degradado ni afectado negativamente funcionalidades previas que operaban con éxito."
    ],
    "distractorPool": [
      "Verificar que el nuevo código compile sin errores sin importar si afecta componentes previamente funcionales del sistema.",
      "No verificar componentes previamente funcionales, concentrándose exclusivamente en medir el rendimiento bajo estrés del servidor.",
      "Comprobar que el sistema falle intencionalmente al introducir parámetros fuera de los rangos válidos en la interfaz gráfica.",
      "No ejecutar pruebas automatizadas previas, delegando la detección de fallas al reporte de incidentes en producción.",
      "Verificar exclusivamente que los manuales de usuario reflejen los cambios sin requerir la reejecución de casos de prueba."
    ],
    "feedback": "Doctrina Federico Toledo (Introducción a las Pruebas de Sistemas de Información): Las pruebas de regresión se enfocan específicamente en asegurar que el código no haya sufrido un retroceso ('regresión') de calidad en funcionalidades existentes tras agregar código nuevo o corregir defectos.",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas de Información (Cap. 4: Tipos de Prueba, pp. 68-74)"
  },
  {
    "id": "q-b3-022",
    "blockId": "bloque-3",
    "topic": "Diseño de Software · Cohesión y Acoplamiento Pressman",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "En el diseño arquitectónico de software según Pressman, ¿cuál es el estándar óptimo que debe perseguirse entre módulos?",
    "correctPool": [
      "Alta Cohesión y Bajo Acoplamiento.",
      "Maximizar la cohesión interna y minimizar el acoplamiento externo."
    ],
    "distractorPool": [
      "Baja Cohesión y Alto Acoplamiento.",
      "Alta Cohesión y Alto Acoplamiento.",
      "Baja Cohesión y Bajo Acoplamiento.",
      "Acoplamiento Global sin Cohesión.",
      "Cohesión Temporal con Acoplamiento por Contenido."
    ],
    "feedback": "Alta Cohesión significa que los elementos dentro de un módulo están estrechamente relacionados y enfocados en un único propósito claro. Bajo Acoplamiento significa que los módulos tienen mínimas dependencias entre sí, facilitando la mantenibilidad, pruebas y reusabilidad.",
    "reference": "Roger S. Pressman · Ingeniería del Software: Un Enfoque Práctico (Cap. 9: Conceptos de Diseño)"
  },
  {
    "id": "q-b3-023",
    "blockId": "bloque-3",
    "topic": "Arquitectura de Software · Principios SOLID",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Qué postula formalmente el Principio de Sustitución de Liskov (LSP) formulado por Barbara Liskov dentro de los principios SOLID?",
    "correctPool": [
      "Los objetos de una subclase deben poder sustituir a los objetos de su clase base sin alterar la corrección del programa.",
      "Una clase derivada debe poder reemplazar a su clase padre sin romper el comportamiento esperado por los clientes."
    ],
    "distractorPool": [
      "Cada clase debe tener una única razón para cambiar y estar aislada en un archivo independiente.",
      "Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones.",
      "Las entidades de software deben estar abiertas a la modificación de código y cerradas a la extensión.",
      "Los clientes no deben ser forzados a depender de métodos e interfaces que no utilizan.",
      "Toda variable local debe tiparse obligatoriamente mediante inferencia estática con la palabra reservada var."
    ],
    "feedback": "El Principio de Sustitución de Liskov (LSP) establece que si S es subtipo de T, los objetos de tipo T pueden ser sustituidos por objetos de tipo S sin que se altere ninguna propiedad deseable del programa (corrección, invariantes, precondiciones y poscondiciones).",
    "reference": "Robert C. Martin & Roger S. Pressman · Ingeniería del Software"
  },
  {
    "id": "q-b3-024",
    "blockId": "bloque-3",
    "topic": "Gestión de Calidad · Revisiones Fagan",
    "difficulty": "hard",
    "lengthType": "medium",
    "text": "En una Inspección Formal de Software según el método de Michael Fagan, ¿cuál es el rol y objetivo del 'Moderador' durante la reunión de inspección?",
    "correctPool": [
      "Liderar la sesión, mantener el ritmo productivo enfocado en encontrar defectos (no en buscar soluciones) y asegurar la objetividad.",
      "Gestionar la reunión para descubrir defectos de forma imparcial sin derivar en discusiones sobre diseño alternativo."
    ],
    "distractorPool": [
      "Escribir las líneas de código faltantes en vivo durante la reunión de inspección técnica.",
      "Defender la autoría del código refutando las objeciones de los inspectores externos.",
      "Firmar los cheques presupuestales para la contratación de herramientas de pruebas automáticas.",
      "Monitorear los registros de log del servidor de producción mediante llamadas RESTful.",
      "Asignar las calificaciones salariales de los programadores según el número de errores encontrados."
    ],
    "feedback": "En la Inspección de Fagan, el Moderador es la figura clave: guía la reunión, vela por que el equipo se concentre en identificar anomalías (sin juzgar al autor ni ponerse a rediseñar soluciones durante la sesión) y decide si el artefacto pasa o requiere reinspección.",
    "reference": "Michael Fagan & Roger S. Pressman · Ingeniería del Software (Cap. 16: Revisiones Técnicas)"
  },
  {
    "id": "q-b3-025",
    "blockId": "bloque-3",
    "topic": "Ingeniería de Software · Deuda Técnica Cunningham",
    "difficulty": "medium",
    "lengthType": "short",
    "text": "¿Cómo definió Ward Cunningham el concepto de 'Deuda Técnica' (Technical Debt) en el desarrollo de software?",
    "correctPool": [
      "El costo futuro derivado de adoptar soluciones rápidas o atajos de diseño en lugar de enfoques robustos.",
      "El trabajo acumulado de refactorización necesario para corregir atajos tomados para acelerar entregas tempranas."
    ],
    "distractorPool": [
      "El balance contable negativo originado por la compra de licencias de bases de datos.",
      "La indemnización económica que debe pagarse al cliente ante retrasos en la ruta crítica.",
      "El número total de horas extra no remuneradas adeudadas a los desarrolladores de software.",
      "El espacio de almacenamiento consumido por los respaldos en cinta magnética en el servidor.",
      "La penalización por violar los axiomas de transitividad en el modelo relacional de datos."
    ],
    "feedback": "Ward Cunningham introdujo la metáfora de la Deuda Técnica: acelerar una entrega tomando atajos de diseño es como pedir un préstamo financiero. Se obtiene velocidad inicial, pero se acumulan intereses (dificultad de mantenimiento y mayor tasa de bugs) hasta que se pague el principal mediante refactorización.",
    "reference": "Ward Cunningham & Ian Sommerville · Ingeniería del Software"
  },
  {
    "id": "q-b3-026",
    "blockId": "bloque-3",
    "topic": "Pruebas de Software · Smoke Testing vs Sanity Testing",
    "difficulty": "medium",
    "lengthType": "medium",
    "text": "¿Cuál es la diferencia metodológica entre una Prueba de Humo (Smoke Test) y una Prueba de Cordura (Sanity Test)?",
    "correctPool": [
      "Smoke Test verifica de forma amplia y superficial que la compilación es estable; Sanity Test valida de forma estrecha y profunda un defecto corregido.",
      "Smoke Test comprueba la estabilidad global básica del nuevo build; Sanity Test confirma que un componente específico reparado no generó regresiones inmediatas."
    ],
    "distractorPool": [
      "Smoke Test comprueba el rendimiento bajo concurrencia extrema; Sanity Test evalúa la usabilidad visual y accesibilidad según lineamientos de diseño.",
      "Smoke Test se enfoca exclusivamente en la cobertura de rutas de código; Sanity Test ejecuta pruebas de penetración contra vulnerabilidades de inyección.",
      "Smoke Test valida la integridad transaccional de la base de datos; Sanity Test inspecciona la arquitectura física de los servidores de producción.",
      "Smoke Test se ejecuta únicamente al finalizar el proyecto; Sanity Test se lleva a cabo diariamente durante la etapa de recopilación de requerimientos.",
      "Smoke Test evalúa la compatibilidad con navegadores antiguos; Sanity Test mide la complejidad ciclomática del código en el pipeline de compilación."
    ],
    "feedback": "Smoke Testing (Build Verification Test) es amplio y superficial: verifica que las funciones vitales del sistema compilan y responden para justificar iniciar pruebas más profundas. Sanity Testing es estrecho y profundo: se enfoca en una funcionalidad o bug corregido recientemente para confirmar que la corrección funciona antes de pruebas completas de regresión.",
    "reference": "Federico Toledo · Introducción a las Pruebas de Sistemas & Pressman"
  },
  {
    "id": "q-b3-027",
    "blockId": "bloque-3",
    "topic": "Ingeniería de Requerimientos · Formato Gherkin",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "En el Desarrollo Guiado por Comportamiento (BDD) y especificación de criterios de aceptación, ¿cuál es la estructura canónica de una cláusula Gherkin?",
    "correctPool": [
      "Given-When-Then (Dado-Cuando-Entonces).",
      "Dado-Cuando-Entonces (Given-When-Then)."
    ],
    "distractorPool": [
      "Arrange-Act-Assert (Organizar-Actuar-Afirmar).",
      "Setup-Execute-Verify (Configurar-Ejecutar-Verificar).",
      "Plan-Do-Check (Planear-Hacer-Verificar).",
      "Input-Process-Output (Entrada-Proceso-Salida).",
      "Before-Action-After (Antes-Acción-Después)."
    ],
    "feedback": "Gherkin estructura los escenarios de comportamiento en: Given (contexto inicial previo), When (la acción o evento que ocurre) y Then (el resultado o efecto esperado observable).",
    "reference": "Ian Sommerville & Vazquez & Simões · Ingeniería de Requerimientos"
  },
  {
    "id": "q-b3-028",
    "blockId": "bloque-3",
    "topic": "Despliegue Continuo · Estrategias de Liberación",
    "difficulty": "hard",
    "lengthType": "medium",
    "text": "Al desplegar un sistema crítico a producción, ¿en qué consiste la estrategia de Despliegue Canario (Canary Deployment)?",
    "correctPool": [
      "En enrutar inicialmente un pequeño porcentaje del tráfico real de usuarios (ej. 5%) a la nueva versión para monitorear anomalías antes del despliegue masivo.",
      "En liberar la nueva versión gradualmente a un subconjunto reducido de usuarios reales, mitigando el impacto de fallas antes de la adopción total."
    ],
    "distractorPool": [
      "En apagar los servidores principales durante el fin de semana para reinstalar el sistema operativo desde cero.",
      "En ejecutar todas las transacciones bajo el nivel de aislamiento Serializable durante las primeras dos semanas.",
      "En compilar el código fuente sin pruebas unitarias para acelerar la entrega a los patrocinadores.",
      "En mantener dos entornos idénticos (Azul y Verde) alternando el enrutador DNS de forma instantánea al 100%.",
      "En enviar un correo de notificación a todos los clientes antes de actualizar la base de datos relacional."
    ],
    "feedback": "Canary Deployment expone la nueva versión a un porcentaje diminuto de tráfico real (como un canario en una mina). Si las métricas de error y rendimiento son estables, el porcentaje de tráfico se incrementa progresivamente hasta alcanzar el 100%. Si hay fallos, se revierte afectando a muy pocos usuarios.",
    "reference": "Ian Sommerville · Ingeniería del Software (Cap. 9: Entrega y Despliegue de Software)"
  },
  {
    "id": "q-b3-029",
    "blockId": "bloque-3",
    "topic": "Arquitectura de Software · Patrón Puertos y Adaptadores",
    "difficulty": "medium",
    "lengthType": "scenario",
    "text": "¿Cuál es la premisa central del Patrón de Arquitectura Hexagonal (Puertos y Adaptadores de Alistair Cockburn)?",
    "correctPool": [
      "Aislar la lógica de dominio central de los detalles externos (bases de datos, UI, frameworks) mediante interfaces (puertos) e implementaciones concretas (adaptadores).",
      "Desacoplar el núcleo de negocio de la infraestructura tecnológica mediante puertos independientes y adaptadores intercambiables."
    ],
    "distractorPool": [
      "Dividir el código obligatoriamente en seis capas físicas que residan en servidores independientes.",
      "Sustituir las relaciones de base de datos relacionales por estructuras de grafos hexagonales.",
      "Permitir que la interfaz gráfica interactúe directamente con las tablas físicas de la base de datos.",
      "Obligar a que todos los métodos devuelvan colecciones serializadas mediante el protocolo Protobuf.",
      "Restringir las pruebas unitarias a métodos que posean una complejidad ciclomática menor a tres."
    ],
    "feedback": "La Arquitectura Hexagonal (Ports & Adapters) sitúa el dominio en el centro, rodeado de 'Puertos' (interfaces que definen los contratos requeridos o provistos). Los 'Adaptadores' traducen las interacciones externas (controladores HTTP, repositorios de BD, mensajería) hacia y desde los puertos, permitiendo sustituir la infraestructura sin tocar el dominio.",
    "reference": "Alistair Cockburn & Roger S. Pressman · Arquitectura de Software"
  },
  {
    "id": "q-b3-030",
    "blockId": "bloque-3",
    "topic": "Estimación Ágil · Planning Poker & Fibonacci",
    "difficulty": "easy",
    "lengthType": "short",
    "text": "¿Por qué en la técnica de Planning Poker se utilizan valores basados en la escala de Fibonacci (1, 2, 3, 5, 8, 13, 21...) para estimar puntos de historia?",
    "correctPool": [
      "Porque a mayor tamaño del ítem, mayor es la incertidumbre, evitando debates estériles sobre diferencias mínimas.",
      "Para reflejar que la incertidumbre de estimación crece proporcionalmente con la magnitud de la tarea."
    ],
    "distractorPool": [
      "Porque los procesadores de computadora operan internamente en potencias de Fibonacci.",
      "Porque permite calcular directamente la ruta crítica del cronograma en el grafo PERT.",
      "Para obligar a los desarrolladores a entregar software en múltiplos exactos de semanas laborales.",
      "Porque es un requisito formal impuesto por el estándar ISO/IEC 25010 de calidad.",
      "Para calcular automáticamente el factor de equilibrio de las rotaciones AVL en el sprint."
    ],
    "feedback": "La secuencia de Fibonacci (o escala modificada) refleja el principio de Weber-Fechner: a medida que los ítems son más grandes, la incertidumbre aumenta y resulta imposible distinguir diferencias sutiles (ej. entre 20 y 21 horas). Forzar saltos mayores (8 a 13 a 21) acelera el consenso y refleja la realidad del esfuerzo relativo.",
    "reference": "Mike Cohn & Ian Sommerville · Desarrollo Ágil de Software"
  }
];
});
