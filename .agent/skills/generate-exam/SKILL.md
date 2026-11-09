---
name: generate-exam
description: >-
  Genera reactivos y exámenes técnicos de certificación y arquitectura de software con
  rigor psicométrico estricto, taxonomía balanceada de longitudes y apego doctrinal sin sesgos.
---

# Skill: Generador de Reactivos y Exámenes Técnicos de Alta Exigencia

Esta guía define el protocolo estandarizado para diseñar, redactar y calibrar bancos de preguntas de opción múltiple (4 opciones: A, B, C, D) para evaluaciones técnicas de arquitectura de sistemas, ingeniería de software, bases de datos, algoritmos y gestión de proyectos.

---

## 1. Principios Psicométricos y Reglas de Oro

### A. Simetría Estricta Intra-Inciso (Anti-Length Bias)
* **Regla:** Dentro de un mismo reactivo, las 4 opciones (A, B, C y D) deben tener **exactamente la misma extensión visual y sintáctica** (mismo número aproximado de palabras y estructura gramatical paralela).
* **Prohibición:** La respuesta correcta **jamás** debe ser más larga, explicativa o detallada que los distractores. El evaluado no debe poder adivinar la respuesta correcta por ser la opción más elaborada.

### B. Distribución Balanceada de Longitudes y Complejidad (Taxonomía de 4 Niveles)
No todos los reactivos deben tener opciones kilométricas ni todos deben ser ultracortos. Un banco de reactivos balanceado debe distribuir su composición en 4 niveles psicométricos:

1. **Nivel 1: Opciones Cortas y Directas (~30% del examen):**
   * Respuestas concisas (1 a 5 palabras por inciso), directas al grano, evaluando terminología, cotas asintóticas, tipos de lecturas anómalas o estados de ciclo de vida.
   * *Ejemplo de opciones:*
     - A) Lecturas Sucias (Dirty Reads)
     - B) Lecturas No Repetibles (Non-Repeatable Reads)
     - C) Lecturas Fantasma (Phantom Reads)
     - D) Bloqueos Mutuos (Deadlocks)

2. **Nivel 2: Opciones Medianas (~35% del examen):**
   * Respuestas de 1 a 2 líneas por inciso, describiendo el *cómo* o el *por qué* de un componente o directiva técnica.
   * *Ejemplo:* Explicación de cómo interactúa el Preflight de CORS, por qué `AsSplitQuery()` previene la explosión cartesiana, o el criterio de inmutabilidad de un *Value Object*.

3. **Nivel 3: Opciones Detalladas / Escenarios (~15-20% del examen):**
   * Opciones elaboradas (2 a 3 líneas por inciso) que presentan compensaciones arquitectónicas completas (*trade-offs*) para resolver un incidente de producción.

4. **Nivel 4: Opciones con Trampa por Negación o Detalle Sutil (~15-20% del examen):**
   * Respuestas de estructura altamente simétrica que alteran una sola palabra clave, invierten la lógica técnica o confrontan modificadores sutiles (ej. *explícita vs implícita*, *antes vs después*, *requiere vs no requiere*). Obligan al evaluado a leer con rigor minucioso.
   * *Ejemplo de opciones:*
     - A) Requiere confirmación explícita del usuario antes de ejecutar la transacción
     - B) No requiere confirmación explícita del usuario antes de ejecutar la transacción
     - C) Requiere confirmación implícita del usuario después de ejecutar la transacción
     - D) No requiere confirmación implícita del usuario después de ejecutar la transacción

### C. Planteamiento Técnico Directo vs Referencia Doctrinal
* **Evitar la sobre-mención de autores:** No iniciar todas las preguntas con "Según el autor X en su libro Y...". Redactar el planteamiento técnico de forma directa, universal y formal:
  - *Evitar:* "En el libro de Federico Toledo, ¿cuál es la distinción causal entre Error, Defecto y Falla?"
  - *Preferir:* "En la disciplina formal de pruebas de software, ¿cuál es la distinción en la cadena causal entre un Error, un Defecto (Bug) y una Falla?"
* **¿Cuándo SÍ mencionar al autor o norma?** Únicamente cuando la definición, fórmula matemática o taxonomía dependa intrínsecamente de su doctrina o nomenclatura específica:
  - *Fórmula de la Complejidad Ciclomática de Thomas McCabe ($V(G) = E - N + 2P$)*.
  - *Las 3 Reglas de Oro de Theo Mandel para diseño de interfaces*.
  - *El Modelo en Espiral de Barry Boehm*.
  - *La taxonomía de requerimientos del estándar IEEE 830 / ISO 29148*.
  - *La definición de objetivos de proyecto y validación según Marion E. Haynes*.

### D. Distractores Verosímiles y Doctrinales (Anti-Absurdo)
* Los distractores **deben utilizar terminología real y canónica** de la bibliografía oficial, pero aplicada a un propósito, fase o contexto incorrecto (ej. confundir un `Mutex` con un `SemaphoreSlim`, o una `Lectura No Repetible` con una `Lectura Fantasma`).
* **Prohibido:** Distractores absurdos, frases chistosas, negaciones obvias ("No sirve para nada") o inventar nombres de tecnologías ficticias.
* **Prohibido:** Opciones comodín como "Todas las anteriores", "Ninguna de las anteriores", "A y B son correctas".

### E. Prohibición de Pistas Gramaticales
* Mantener neutralidad de género gramatical y número entre el planteamiento y las opciones (evitar que la pregunta termine en "la..." y solo una opción empiece en femenino).

---

## 2. Tipologías Avanzadas de Reactivos

Para enriquecer los exámenes y medir competencias prácticas y analíticas, incorporar las siguientes 5 tipologías:

### Tipología 1: Fragmentos de Código & Debugging (Code Snippets & Trace)
Presenta un bloque de código breve (C# 12, SQL, pseudocódigo) y evalúa su comportamiento en runtime, contención de concurrencia o plan de ejecución:
```json
{
  "id": "q-code-interlocked",
  "difficulty": "medium",
  "text": "Considere el siguiente fragmento de código ejecutado concurrentemente por 10 hilos en C#:\n\nint x = 0;\nParallel.For(0, 1000, _ => { x++; });\n\n¿Cuál es la razón técnica por la cual el valor final de 'x' no está garantizado que sea 1000?",
  "options": [
    "La instrucción x++ no es atómica; se descompone en 3 pasos de CPU (leer, incrementar, almacenar).",
    "El recolector de basura (GC) suspende la memoria heap forzando el reinicio del hilo en ejecución.",
    "El compilador JIT desactiva automáticamente la memoria caché L2 en métodos multihilo no estáticos.",
    "La directiva Parallel.For serializa internamente las tareas bloqueando la asignación del registro."
  ],
  "correct": 0,
  "feedback": "La operación x++ es un ciclo Read-Modify-Write que requiere tres instrucciones máquina. Para garantizar atomicidad a nivel de hardware se requiere Interlocked.Increment(ref x).",
  "reference": "Jeffrey Richter · CLR via C# & Mark J. Price"
}
```

### Tipología 2: Discriminación Excepcional ("¿Cuál NO...?" / "EXCEPTO")
Evalúa la atención al detalle y límites doctrinales. La palabra negativa debe escribirse obligatoriamente en **MAYÚSCULAS Y NEGRITAS**:
```json
{
  "id": "q-except-acid",
  "difficulty": "easy",
  "text": "¿Cuál de las siguientes afirmaciones **NO** corresponde a una de las propiedades ACID en un motor de base de datos relacional?",
  "options": [
    "Atomicidad: Garantiza que todas las operaciones de la transacción se completan o ninguna tiene efecto.",
    "Consistencia: Asegura que la transacción lleve a la base de datos de un estado válido a otro estado válido.",
    "Disponibilidad: Obliga a que el clúster continúe respondiendo consultas aunque se pierda el 90% de los nodos.",
    "Durabilidad: Asegura que los cambios confirmados persistan incluso ante una falla de energía catastrófica."
  ],
  "correct": 2,
  "feedback": "La 'Disponibilidad' es un atributo del Teorema CAP o de alta disponibilidad (SLA), pero NO forma parte de la sigla ACID (Atomicidad, Consistencia, Aislamiento/Isolation, Durabilidad).",
  "reference": "Catherine M. Ricardo · Bases de Datos"
}
```

### Tipología 3: Secuencia y Ordenamiento Procedural
Evalúa el conocimiento de ciclos de vida, pipelines y flujos de ejecución rigurosos:
```json
{
  "id": "q-sequence-android",
  "difficulty": "medium",
  "text": "¿Cuál es la secuencia cronológica exacta de callbacks que ejecuta el sistema operativo Android al minimizar una Activity activa presionando el botón Home?",
  "options": [
    "onPause() ➔ onStop()",
    "onStop() ➔ onDestroy()",
    "onResume() ➔ onPause()",
    "onRestart() ➔ onStart()"
  ],
  "correct": 0,
  "feedback": "Al minimizar una Activity, primero pierde el foco (onPause) y cuando deja de ser visible por completo se invoca onStop. La Activity no se destruye (onDestroy) a menos que el usuario la finalice o falte memoria.",
  "reference": "Dawn Griffiths · Head First Android Development"
}
```

### Tipología 4: Relación de Columnas (Matching)
Evalúa múltiples conceptos interconectados en un solo reactivo con formato conciso:
```json
{
  "id": "q-match-sync",
  "difficulty": "hard",
  "text": "Relacione cada primitiva de concurrencia con su característica técnica fundamental:\n\n1. Interlocked\n2. Monitor (lock)\n3. Mutex\n\na. Transición a modo Kernel que permite sincronización entre diferentes procesos del SO.\nb. Primitiva híbrida ligera en user-mode con cláusula try-finally para el mismo proceso.\nc. Instrucción atómica a nivel de microcódigo de CPU sin bloqueo de subprocesos.\n\n¿Cuál es la combinación correcta?",
  "options": [
    "1c, 2b, 3a",
    "1a, 2b, 3c",
    "1b, 2a, 3c",
    "1c, 2a, 3b"
  ],
  "correct": 0,
  "feedback": "Interlocked opera a nivel hardware (LOCK CMPXCHG), Monitor maneja exclusión mutua en user-mode dentro del mismo proceso, y Mutex envuelve un handle nativo del SO para exclusión entre procesos.",
  "reference": "Mark J. Price · Apps and Services with .NET 8"
}
```

### Tipología 5: Calibración por Nivel de Dificultad Dinámica (`difficulty`)
Todo reactivo debe incluir el atributo `difficulty` con uno de los siguientes tres valores:
* `"easy"`: Reactivos conceptuales directos, definiciones y fórmulas canónicas básicas.
* `"medium"`: Relaciones de causa-efecto, análisis de pipelines y diferencias entre tecnologías afines.
* `"hard"`: Casos situacionales, cálculo matemático de cotas/métricas, y detección de anomalías sutiles en código o transacciones.

---

## 3. Formato de Salida Universal

### Formato A: JSON Canónico (Para `shared/exams-data.js` o Ingesta JSON)
```json
{
  "id": "q-serializable-phantom",
  "number": 1,
  "difficulty": "medium",
  "moduleRef": "Bases de Datos · Transacciones ACID",
  "text": "¿Qué fenómeno de lectura anómala previene el nivel de aislamiento Serializable frente a Repeatable Read en un DBMS relacional?",
  "options": [
    "Lecturas Sucias (Dirty Reads)",
    "Lecturas No Repetibles (Non-Repeatable Reads)",
    "Lecturas Fantasma (Phantom Reads)",
    "Bloqueos Mutuos (Deadlocks)"
  ],
  "correct": 2,
  "feedback": "Doctrina ANSI SQL: Repeatable Read previene lecturas sucias y no repetibles sobre filas existentes, pero permite la inserción concurrente de nuevas tuplas que coincidan con el predicado del WHERE (Lecturas Fantasma). Solo Serializable previene fantasmas mediante cerrojos de rango (Range Locks).",
  "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 9: Control de Concurrencia)"
}
```

### Formato B: Texto / Markdown Rápido (Para Ingesta en Editor Web)
```markdown
# Examen de Concurrencia y Transacciones
[CONFIG] tiempo: 60 | minimo: 80 | retro_inmediata: false | barajar: true

1. ¿Qué fenómeno de lectura anómala previene el nivel de aislamiento Serializable frente a Repeatable Read en un DBMS relacional?
A) Lecturas Sucias (Dirty Reads)
B) Lecturas No Repetibles (Non-Repeatable Reads)
*C) Lecturas Fantasma (Phantom Reads)
D) Bloqueos Mutuos (Deadlocks)
[FEEDBACK] Repeatable Read bloquea filas existentes pero no previene inserciones concurrentes (fantasmas). Serializable impone Range Locks para evitarlo.
[REF] Catherine M. Ricardo · Bases de Datos
```

---

## 4. Checklist de Calidad Pre-Publicación (Auditoría de 7 Puntos)

Antes de entregar cualquier batería de reactivos, verificar:

- [ ] **1. Simetría Intra-Inciso:** ¿Tienen los 4 incisos de cada pregunta la misma longitud aproximada y estructura gramatical paralela?
- [ ] **2. Distribución de Longitud (40-40-20):** ¿Hay un balance saludable de reactivos cortos, medianos y situacionales?
- [ ] **3. Neutralidad Doctrinal:** ¿Se redactaron los planteamientos directos sin saturar de nombres de autores innecesarios?
- [ ] **4. Verosimilitud:** ¿Son los distractores conceptos reales de la disciplina que representan confusiones habituales?
- [ ] **5. Formato de Negativas:** En reactivos de exclusión, ¿está la palabra escrita como **`NO`** o **`EXCEPTO`**?
- [ ] **6. Justificación Completa:** ¿Explica el `feedback` claramente por qué la clave es correcta y por qué no aplican los distractores?
- [ ] **7. Cero Sesgo Posicional:** ¿Están las claves balanceadas uniformemente entre las opciones A, B, C y D (o barajadas criptográficamente)?
