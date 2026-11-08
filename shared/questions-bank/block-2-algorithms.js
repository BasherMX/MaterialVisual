/**
 * Material Visual · Banco Maestro Canónico de Reactivos
 * BLOQUE II: FUNDAMENTOS DE PROGRAMACIÓN & ALGORITMOS
 * (Joyanes Aguilar, Osvaldo Cairó, Noback, Dathan/Ramnath, MIT 6.006, Cardona)
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
      root.MATERIAL_BANK.registerBlock('bloque-2', questions);
    }
    root.MATERIAL_BLOCK_2 = questions;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return [
    {
      "id": "q-b2-001",
      "blockId": "bloque-2",
      "topic": "Algoritmos · Notación Asintótica & Complejidad",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Qué cota asintótica formal describe la notación Big-O (O) en el análisis de algoritmos?",
      "correctPool": [
        "Una cota superior asintótica (límite superior del crecimiento).",
        "El límite superior asintótico del tiempo o espacio en el peor caso."
      ],
      "distractorPool": [
        "Una cota inferior asintótica estricta (límite inferior de ejecución).",
        "Una cota asintótica ajustada que coincide exactamente con Theta.",
        "El tiempo exacto de reloj medido en nanosegundos por la CPU.",
        "El número total de llamadas recursivas en la pila del sistema operativo.",
        "La tasa porcentual de aciertos en la memoria caché del procesador."
      ],
      "feedback": "La notación Big-O define un límite superior asintótico: f(n) = O(g(n)) significa que f(n) está acotada superiormente por un múltiplo constante de g(n) para valores de n suficientemente grandes.",
      "reference": "Luis Joyanes Aguilar & MIT 6.006 · Introducción a los Algoritmos (Cormen et al., Cap. 3)"
    },
    {
      "id": "q-b2-002",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Matrices & Memoria Cairó",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "Considere una matriz bidimensional M de tamaño 10 filas x 20 columnas almacenada en memoria contigua en orden de fila mayor (Row-Major Order), con dirección base 1000 y cada elemento ocupa 4 bytes. Suponiendo índices base 0, ¿cuál es la dirección de memoria exacta del elemento M[4][7]?",
      "correctPool": [
        "Dirección 1348 (calculada mediante 1000 + (4 * 20 + 7) * 4 = 1000 + 87 * 4 = 1348).",
        "Dirección 1348 aplicando la fórmula Base + (i * Columnas + j) * TamañoElemento."
      ],
      "distractorPool": [
        "Dirección 1296 calculando la fórmula de columna mayor por equivocación.",
        "Dirección 1088 sumando linealmente los índices sin multiplicar por columnas.",
        "Dirección 1420 aplicando índices base 1 en lugar de base 0.",
        "Dirección 1188 multiplicando filas por el número total de renglones.",
        "Dirección 1500 asumiendo un direccionamiento disperso con punteros dobles."
      ],
      "feedback": "En Row-Major (base 0): Dir(M[i][j]) = Base + (i * N_columnas + j) * Bytes = 1000 + (4 * 20 + 7) * 4 = 1000 + (80 + 7) * 4 = 1000 + 87 * 4 = 1000 + 348 = 1348.",
      "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 2: Arreglos y Direccionamiento)"
    },
    {
      "id": "q-b2-003",
      "blockId": "bloque-2",
      "topic": "Árboles Binarios de Búsqueda · Árboles AVL",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En un Árbol AVL, ¿cuál es la condición matemática estricta que debe satisfacer el Factor de Equilibrio (FE) de todo nodo para considerarse balanceado?",
      "correctPool": [
        "El factor de equilibrio FE = Altura(Subárbol Derecho) - Altura(Subárbol Izquierdo) debe pertenecer al conjunto {-1, 0, 1}.",
        "La diferencia de altura entre su subárbol derecho y su subárbol izquierdo debe ser como máximo de una unidad."
      ],
      "distractorPool": [
        "El factor de equilibrio debe ser estrictamente 0 en todos los nodos internos del árbol.",
        "La altura del subárbol izquierdo debe duplicar exactamente la altura del subárbol derecho.",
        "La suma de las claves de los hijos izquierdos debe ser menor que la clave del nodo raíz.",
        "El número de nodos en cada nivel debe ser siempre una potencia par de dos menos uno.",
        "La profundidad de todas las hojas externas debe coincidir sin admitir ninguna discrepancia."
      ],
      "feedback": "Un Árbol AVL es un árbol binario de búsqueda autobalanceado donde para cada nodo, la diferencia de alturas de sus subárboles (FE) es -1, 0 o +1. Si se vuelve -2 o +2, se aplican rotaciones para restaurar el equilibrio.",
      "reference": "Luis Joyanes Aguilar · Estructuras de Datos en C++ (Cap. 13: Árboles Equilibrados)"
    },
    {
      "id": "q-b2-004",
      "blockId": "bloque-2",
      "topic": "Árboles Binarios · Rotaciones AVL",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Al insertar un nodo en el subárbol derecho del hijo izquierdo de un nodo crítico con FE = -2, ¿qué tipo de rotación se requiere para restaurar el balance AVL?",
      "correctPool": [
        "Rotación Doble Izquierda-Derecha (LR / Doble a la Derecha).",
        "Rotación compuesta Izquierda-Derecha (Left-Right Rotation)."
      ],
      "distractorPool": [
        "Rotación Simple a la Derecha (LL / Simple Derecha).",
        "Rotación Simple a la Izquierda (RR / Simple Izquierda).",
        "Rotación Doble Derecha-Izquierda (RL / Doble a la Izquierda).",
        "Rotación Cíclica de Tres Vías sin reestructuración de punteros.",
        "División de nodo (Split) típica de un Árbol B de orden 3."
      ],
      "feedback": "Cuando el desbalance ocurre en la rama 'Izquierda-Derecha' (hijo izquierdo cargado a la derecha, FE del padre = -2 y FE del hijo = +1), se aplica una rotación doble Izquierda-Derecha (LR): primero rotación simple a la izquierda sobre el hijo y luego rotación simple a la derecha sobre el padre.",
      "reference": "Luis Joyanes Aguilar · Estructuras de Datos en C++ & MIT 6.006"
    },
    {
      "id": "q-b2-005",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Grafos · BFS vs DFS",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Qué estructura de datos subyacente y qué propiedad de camino distinguen a la Búsqueda en Anchura (BFS) frente a la Búsqueda en Profundidad (DFS)?",
      "correctPool": [
        "BFS utiliza una Cola (FIFO) y garantiza encontrar el camino con menor número de aristas en grafos no ponderados.",
        "BFS se auxilia de una Cola procesando vértices por niveles para hallar la distancia mínima en saltos."
      ],
      "distractorPool": [
        "BFS utiliza una Pila (LIFO) y garantiza encontrar los ciclos negativos en grafos con pesos dirigidos.",
        "BFS emplea una Cola de Prioridad con montículo binario para minimizar la suma de pesos cuadráticos.",
        "BFS requiere una Lista Doblemente Enlazada para recorrer exclusivamente los nodos con grado impar.",
        "BFS opera mediante backtracking recursivo forzando el retorno inmediato al alcanzar una hoja.",
        "BFS exige que el grafo sea un árbol libre acíclico sin componentes fuertemente conexos."
      ],
      "feedback": "BFS utiliza una estructura de datos Cola (FIFO), explora nivel por nivel y garantiza la ruta más corta (menor número de aristas) en grafos no ponderados. DFS utiliza una Pila (LIFO o recursión) explorando en profundidad.",
      "reference": "MIT 6.006 · Introduction to Algorithms & Joyanes Aguilar (Cap. 14: Grafos)"
    },
    {
      "id": "q-b2-006",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Caminos Mínimos · Dijkstra",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "¿Cuál es la restricción fundamental sobre las aristas para que el algoritmo de Dijkstra garantice una solución óptima?",
      "correctPool": [
        "Todas las aristas deben tener pesos no negativos (>= 0).",
        "El grafo no debe contener aristas con pesos negativos."
      ],
      "distractorPool": [
        "El grafo debe ser estrictamente acíclico y bipartito.",
        "Todas las aristas deben tener pesos enteros pares.",
        "El número de vértices no debe superar al número de aristas.",
        "El grafo no debe contener aristas dirigidas (debe ser no dirigido).",
        "Debe existir al menos un ciclo euleriano comprobado."
      ],
      "feedback": "Dijkstra asume que una vez que un nodo es extraído de la cola de prioridad con la distancia mínima acumulada, su costo es definitivo (propiedad voraz/greedy). Si existen pesos negativos, este supuesto falla y se requiere Bellman-Ford.",
      "reference": "MIT 6.006 & Joyanes Aguilar · Algoritmos y Estructuras de Datos"
    },
    {
      "id": "q-b2-007",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Ordenamiento · Cotas Inferiores",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es la cota inferior asintótica teórica en el peor caso para cualquier algoritmo de ordenamiento basado en comparaciones de elementos?",
      "correctPool": [
        "Omega(n log n).",
        "Omega(n log2 n)."
      ],
      "distractorPool": [
        "Omega(n).",
        "Omega(n^2).",
        "Omega(log n).",
        "Omega(n!).",
        "Omega(2^n)."
      ],
      "feedback": "El modelo de árbol de decisión demuestra que un árbol con n! hojas debe tener una altura de al menos log2(n!) = Omega(n log n). Por ende, ningún algoritmo basado en comparaciones puede tener un peor caso inferior a Omega(n log n).",
      "reference": "MIT 6.006 · Lecture Notes on Sorting & Cormen et al. (Cap. 8)"
    },
    {
      "id": "q-b2-008",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Montículos (Heaps)",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En un Min-Heap binario que almacena 'n' elementos, ¿cuál es la complejidad temporal de la operación Extract-Min?",
      "correctPool": [
        "O(log n).",
        "O(log2 n)."
      ],
      "distractorPool": [
        "O(1).",
        "O(n).",
        "O(n log n).",
        "O(n^2).",
        "O(log^2 n)."
      ],
      "feedback": "Extraer el mínimo toma O(1) para acceder a la raíz, pero restaurar la propiedad de montículo mediante sift-down / heapify toma un tiempo proporcional a la altura del árbol binario completo, que es O(log n).",
      "reference": "Joyanes Aguilar · Estructuras de Datos en C++ (Cap. 11: Montículos)"
    },
    {
      "id": "q-b2-009",
      "blockId": "bloque-2",
      "topic": "Técnicas de Diseño · Greedy vs Programación Dinámica",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Cuál es la distinción teórica esencial entre un algoritmo Greedy (Voraz) y la Programación Dinámica (Dynamic Programming)?",
      "correctPool": [
        "Greedy toma la mejor opción local en cada paso sin reconsiderar decisiones; DP evalúa todos los subproblemas solapados de manera óptima.",
        "Greedy realiza elecciones voraces locales irrevocables; DP almacena soluciones de subproblemas superpuestos para garantizar el óptimo global."
      ],
      "distractorPool": [
        "Greedy requiere obligatoriamente recursión con memoización; DP utiliza exclusivamente iteraciones con pilas LIFO.",
        "Greedy solo opera sobre estructuras no lineales como grafos; DP es exclusivo para arreglos unidimensionales ordenados.",
        "Greedy resuelve problemas sin subestructura óptima; DP exige que los subproblemas sean independientes y no se superpongan.",
        "Greedy siempre encuentra el óptimo global en problemas NP-completos; DP produce únicamente aproximaciones heurísticas.",
        "Greedy consume memoria exponencial O(2^n); DP minimiza el uso de CPU forzando una complejidad O(1)."
      ],
      "feedback": "Greedy toma decisiones locales óptimas en cada paso con la esperanza de que conduzcan a un óptimo global, sin retroceder ni resolver subproblemas exhaustivamente. DP requiere subestructura óptima y subproblemas superpuestos, explorando las combinaciones mediante memoización o tabulación.",
      "reference": "MIT 6.006 & Joyanes Aguilar · Introducción a los Algoritmos (Cormen et al., Caps. 15 y 16)"
    },
    {
      "id": "q-b2-010",
      "blockId": "bloque-2",
      "topic": "Algoritmos · Teorema Maestro",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Considere la ecuación de recurrencia T(n) = 4T(n/2) + O(n), que describe la división de un problema en 4 subproblemas de tamaño n/2 con costo lineal de combinación. Aplicando el Teorema Maestro, ¿cuál es la solución asintótica de T(n)?",
      "correctPool": [
        "Theta(n^2) (Caso 1 del Teorema Maestro, dado que log_b(a) = log_2(4) = 2 y f(n) = O(n^1) es polinomialmente menor).",
        "Theta(n^2) puesto que el trabajo en las hojas del árbol domina asintóticamente a la función de combinación f(n)."
      ],
      "distractorPool": [
        "Theta(n log n) aplicando erróneamente el Caso 2 del Teorema Maestro.",
        "Theta(n) asumiendo que el costo de combinación lineal predomina.",
        "Theta(n^3) sumando las dimensiones de los subproblemas paralelos.",
        "Theta(2^n) concluyendo equivocadamente que la complejidad es exponencial.",
        "Theta(log n) asumiendo que el árbol de recursión se balancea asintóticamente."
      ],
      "feedback": "En T(n) = aT(n/b) + f(n): a = 4, b = 2, f(n) = n. Calculamos n^(log_b a) = n^(log_2 4) = n^2. Como f(n) = O(n^(2 - epsilon)) para epsilon = 1, aplica el Caso 1: T(n) = Theta(n^(log_b a)) = Theta(n^2).",
      "reference": "MIT 6.006 & Cormen et al. · Introducción a los Algoritmos (Cap. 4: Divide y Vencerás)"
    },
    {
      "id": "q-b2-011",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Tablas Hash & Colisiones",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "Al resolver colisiones en una Tabla Hash mediante Encadenamiento Separado (Separate Chaining), ¿cuál es el peor caso temporal de búsqueda si todas las claves generan el mismo valor hash?",
      "correctPool": [
        "O(n) lineal, al degenerar la cubeta en una lista enlazada.",
        "O(n) debido a que todos los elementos quedan encadenados en una única lista."
      ],
      "distractorPool": [
        "O(1) constante por la propiedad directa de la función hash.",
        "O(log n) balanceando automáticamente la cubeta con un árbol.",
        "O(n log n) por el costo de reordenar la tabla completa.",
        "O(n^2) por el cálculo cuadrático de las direcciones secundarias.",
        "O(0) al producirse un bloqueo inmediato por desbordamiento."
      ],
      "feedback": "En el peor caso de colisión total con separate chaining, todas las 'n' entradas van a la misma cubeta, transformándose en una lista enlazada simple cuya búsqueda requiere O(n). En promedio, con una buena función hash, el tiempo es O(1 + alfa).",
      "reference": "Joyanes Aguilar · Estructuras de Datos en C++ (Cap. 12: Dispersión / Hashing)"
    },
    {
      "id": "q-b2-012",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Grafos · Ordenamiento Topológico",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Qué condición estructural debe cumplir obligatoriamente un grafo para que sea posible obtener un Ordenamiento Topológico?",
      "correctPool": [
        "Debe ser un Grafo Dirigido Acíclico (DAG - Directed Acyclic Graph).",
        "Debe ser dirigido y no contener ningún ciclo."
      ],
      "distractorPool": [
        "Debe ser un grafo conexo no dirigido ponderado positivamente.",
        "Debe poseer un número par de vértices con grados simétricos.",
        "Debe ser un grafo plano con representación matricial ortogonal.",
        "Debe incluir al menos un ciclo hamiltoniano completo.",
        "Debe ser un árbol binario completo estrictamente balanceado."
      ],
      "feedback": "El ordenamiento topológico es una ordenación lineal de los vértices tal que para cada arista dirigida u -> v, u aparece antes que v. Solo puede existir si el grafo es dirigido y no contiene ciclos (DAG).",
      "reference": "MIT 6.006 & Joyanes Aguilar · Algoritmos y Grafos"
    },
    {
      "id": "q-b2-013",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Pilas & Notación Polaca",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "Al evaluar una expresión matemática escrita en Notación Polaca Inversa (Postfija) como '5 3 + 2 *', ¿qué estructura de datos se utiliza canónicamente para el cálculo?",
      "correctPool": [
        "Una Pila (Stack / LIFO).",
        "Una Pila (LIFO)."
      ],
      "distractorPool": [
        "Una Cola (Queue / FIFO).",
        "Un Árbol Binario de Búsqueda.",
        "Un Grafo Bipartito Acíclico.",
        "Una Tabla Hash Abierta.",
        "Un Montículo Binario."
      ],
      "feedback": "La evaluación de expresiones postfijas (RPN) se realiza con una Pila: se recorre de izquierda a derecha; si es operando se apila; si es operador se desapilan los dos operandos superiores, se calcula y se apila el resultado.",
      "reference": "Osvaldo Cairó & Luis Joyanes Aguilar · Estructuras de Datos (Cap. 3: Pilas y Colas)"
    },
    {
      "id": "q-b2-014",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Grafos · Árbol de Expansión Mínima (MST)",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Al construir un Árbol de Expansión Mínima (MST) con el algoritmo de Kruskal, ¿qué estructura de datos auxiliar permite verificar de forma casi lineal si añadir una arista formaría un ciclo?",
      "correctPool": [
        "Estructura de Conjuntos Disjuntos (Disjoint-Set / Union-Find con compresión de caminos).",
        "Union-Find (Disjoint Set Union) para gestionar las componentes conexas."
      ],
      "distractorPool": [
        "Pila de llamadas recursivas con ordenamiento topológico de vértices.",
        "Tabla Hash distribuida con sondeo cuadrático de colisiones.",
        "Árbol B+ con encadenamiento de hojas en memoria secundaria.",
        "Matriz de adyacencia dispersa con multiplicación booleana.",
        "Lista circular doblemente enlazada con punteros centinela."
      ],
      "feedback": "El algoritmo de Kruskal ordena las aristas por peso y las agrega si no forman ciclos. Para comprobar y unir conjuntos en tiempo casi constante O(alpha(V)), utiliza la estructura Disjoint-Set (Union-Find) con unión por rango y compresión de caminos.",
      "reference": "MIT 6.006 & Cormen et al. · Introducción a los Algoritmos (Cap. 23: MST)"
    },
    {
      "id": "q-b2-015",
      "blockId": "bloque-2",
      "topic": "Algoritmos · Divide y Vencerás vs Programación Dinámica",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cuál de los siguientes algoritmos **NO** fundamenta su resolución en el paradigma de Divide y Vencerás (Divide and Conquer)?",
      "correctPool": [
        "Algoritmo de Dijkstra para caminos mínimos en grafos ponderados.",
        "Algoritmo de Kruskal para árboles de expansión mínima."
      ],
      "distractorPool": [
        "Merge Sort (Ordenamiento por Mezcla).",
        "Quick Sort (Ordenamiento Rápido con partición de Hoare).",
        "Búsqueda Binaria en arreglos ordenados.",
        "Multiplicación rápida de enteros grandes de Karatsuba.",
        "Multiplicación matricial rápida de Strassen."
      ],
      "feedback": "Dijkstra y Kruskal son algoritmos Voraces (Greedy), no de Divide y Vencerás. Merge Sort, Quick Sort, Búsqueda Binaria y Karatsuba dividen el problema en subproblemas disjuntos, los resuelven y combinan.",
      "reference": "MIT 6.006 & Joyanes Aguilar · Algoritmos y Estructuras de Datos"
    },
    {
      "id": "q-b2-016",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Árboles B & B+",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Cuál es la ventaja estructural clave de un Árbol B+ frente a un Árbol B tradicional en el contexto de indexación en sistemas de bases de datos?",
      "correctPool": [
        "En el Árbol B+ todos los registros de datos residen en las hojas y éstas están encadenadas secuencialmente, agilizando escaneos de rango.",
        "El B+ concentra los datos en las hojas con punteros secuenciales enlazados, maximizando el número de claves por página en nodos internos."
      ],
      "distractorPool": [
        "En el Árbol B+ cada nodo interno almacena obligatoriamente una copia completa de la tabla para evitar lecturas de disco.",
        "El Árbol B+ suprime los punteros a subárboles utilizando direccionamiento por hash uniforme en memoria secundaria.",
        "En el Árbol B+ la altura del árbol crece de forma lineal proporcional al número total de tuplas insertadas.",
        "El Árbol B+ garantiza un balanceo perfecto sin necesidad de realizar particiones de páginas al desbordar.",
        "En el Árbol B+ las lecturas aleatorias de registros individuales requieren siempre un recorrido en profundidad O(n)."
      ],
      "feedback": "En un Árbol B+, los nodos internos solo contienen claves de enrutamiento (lo que permite un abanico o fan-out enorme y menor altura), mientras que todas las claves y datos residen en las hojas, que están enlazadas secuencialmente como lista doble, haciendo los escaneos por rango (ORDER BY, BETWEEN) sumamente veloces.",
      "reference": "Catherine M. Ricardo & Joyanes Aguilar · Bases de Datos y Estructuras de Datos"
    },
    {
      "id": "q-b2-017",
      "blockId": "bloque-2",
      "topic": "Algoritmos · Detección de Ciclos",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "Al aplicar Búsqueda en Profundidad (DFS) sobre un grafo dirigido, ¿la presencia de qué tipo de arista en el árbol DFS evidencia la existencia de un ciclo?",
      "correctPool": [
        "Una Arista hacia Atrás (Back Edge).",
        "Una Arista de Retroceso (Back Edge)."
      ],
      "distractorPool": [
        "Una Arista de Árbol (Tree Edge).",
        "Una Arista hacia Adelante (Forward Edge).",
        "Una Arista Cruzada (Cross Edge).",
        "Una Arista de Corte (Bridge).",
        "Una Arista Centinela (Sentinel Edge)."
      ],
      "feedback": "En DFS sobre grafos dirigidos, un grafo tiene un ciclo si y solo si contiene al menos una Arista hacia Atrás (Back Edge), es decir, una arista que apunta a un ancestro que actualmente está en proceso de exploración (nodo gris).",
      "reference": "MIT 6.006 & Joyanes Aguilar · Algoritmos y Grafos (Cormen et al., Cap. 22)"
    },
    {
      "id": "q-b2-018",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Matrices Dispersas Cairó",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Una matriz cuadrada de 1000x1000 almacena datos científicos donde solo 500 elementos son distintos de cero (matriz dispersa). Según Cairó, ¿cuál es la técnica de representación más eficiente en memoria para evitar el desperdicio del 99.95% del espacio?",
      "correctPool": [
        "Representación por tripletes (Fila, Columna, Valor) mediante listas enlazadas ortogonales o arreglos comprimidos (CSR/COO).",
        "Arreglo de tripletas ordenadas por coordenadas o listas multilinked de elementos no nulos."
      ],
      "distractorPool": [
        "Almacenamiento lineal en orden de columna mayor reservando 1,000,000 de enteros en memoria fija.",
        "Vector de bits de presencia complementado con un árbol AVL de profundidad fija igual a 1000.",
        "Tabla hash estática sin manejo de colisiones mapeando el producto cartesiano de los índices.",
        "Matriz triangular superior simétrica rellenando las posiciones vacías con valores nulos continuos.",
        "Compresión con algoritmo Huffman aplicada exclusivamente a los ceros de la memoria virtual."
      ],
      "feedback": "Para matrices dispersas (sparse matrices), Cairó detalla que almacenar un arreglo contiguo tradicional desperdicia memoria masivamente. La técnica formal consiste en representar solo los elementos no nulos mediante tripletas (i, j, valor) en listas ortogonales o formatos comprimidos (COO / CSR).",
      "reference": "Osvaldo Cairó · Estructuras de Datos (Cap. 2: Arreglos y Matrices Dispersas)"
    },
    {
      "id": "q-b2-019",
      "blockId": "bloque-2",
      "topic": "Algoritmos · Complejidad Espacial",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Cuál es la complejidad espacial auxiliar del algoritmo de ordenamiento Merge Sort implementado sobre arreglos estándar?",
      "correctPool": [
        "O(n) espacio auxiliar.",
        "O(n) memoria auxiliar."
      ],
      "distractorPool": [
        "O(1) memoria in-place.",
        "O(log n) memoria en pila.",
        "O(n^2) memoria de matriz.",
        "O(n log n) memoria heap.",
        "O(2^n) memoria de árbol."
      ],
      "feedback": "A diferencia de Quick Sort o Heap Sort, el Merge Sort clásico sobre arreglos requiere O(n) espacio auxiliar para almacenar temporalmente los elementos durante el proceso de combinación (merge).",
      "reference": "MIT 6.006 & Joyanes Aguilar · Introducción a los Algoritmos"
    },
    {
      "id": "q-b2-020",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Colas de Prioridad",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "Al implementar una Cola de Prioridad sobre un arreglo que representa un Montículo Binario (Heap), para un nodo en el índice 'i' (base 1), ¿cuál es el índice de su hijo izquierdo?",
      "correctPool": [
        "2 * i.",
        "El índice 2i."
      ],
      "distractorPool": [
        "2 * i + 1.",
        "i / 2.",
        "i + 2.",
        "2^i.",
        "i - 1."
      ],
      "feedback": "En una representación basada en arreglos con índice base 1: para el nodo en posición i, su hijo izquierdo está en 2i, su hijo derecho en 2i + 1, y su padre en floor(i / 2).",
      "reference": "Joyanes Aguilar · Estructuras de Datos en C++ & Cairó"
    },
    {
      "id": "q-b2-021",
      "blockId": "bloque-2",
      "topic": "Árboles Binarios · Recorridos Canónicos Joyanes",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "Al recorrer un Árbol Binario de Búsqueda (BST), ¿qué tipo de recorrido visita las claves en orden estrictamente ascendente?",
      "correctPool": [
        "Recorrido In-order (Inorden).",
        "Recorrido en Inorden (In-order)."
      ],
      "distractorPool": [
        "Recorrido Pre-order (Preorden).",
        "Recorrido Post-order (Postorden).",
        "Recorrido por Niveles (Level-order).",
        "Recorrido Topológico en Grafos.",
        "Recorrido en Zigzag por Niveles."
      ],
      "feedback": "Por la definición del BST (claves del subárbol izquierdo < raíz < claves del subárbol derecho), el recorrido In-order (visitar izquierdo, luego raíz, luego derecho) procesa las claves en orden ascendente ordenado.",
      "reference": "Luis Joyanes Aguilar · Estructuras de Datos en C++ (Cap. 10: Árboles Binarios)"
    },
    {
      "id": "q-b2-022",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Grafos · Bellman-Ford",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "¿Qué capacidad analítica posee el algoritmo de Bellman-Ford que supera las restricciones del algoritmo de Dijkstra?",
      "correctPool": [
        "Admite aristas con pesos negativos y es capaz de detectar la existencia de ciclos negativos alcanzables desde el origen.",
        "Procesa aristas con pesos negativos y reporta si el grafo contiene ciclos de costo negativo."
      ],
      "distractorPool": [
        "Reduce la complejidad temporal a tiempo constante O(1) en grafos densos bipartitos.",
        "Calcula el ordenamiento topológico en grafos que contienen ciclos no dirigidos pares.",
        "Construye automáticamente un árbol AVL balanceado con las distancias de los vértices.",
        "Opera exclusivamente sobre matrices booleanas sin requerir memoria secundaria.",
        "Garantiza encontrar el camino hamiltoniano más largo en tiempo polinomial estricto."
      ],
      "feedback": "A diferencia de Dijkstra (que falla ante pesos negativos), Bellman-Ford relaja todas las aristas |V| - 1 veces, soportando pesos negativos y detectando ciclos negativos si en la |V|-ésima iteración alguna arista aún puede relajarse. Complejidad: O(V * E).",
      "reference": "MIT 6.006 & Cormen et al. · Introducción a los Algoritmos (Cap. 24: Single-Source Shortest Paths)"
    },
    {
      "id": "q-b2-023",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Grafos · Floyd-Warshall",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es la complejidad temporal del algoritmo de Programación Dinámica de Floyd-Warshall para encontrar los caminos mínimos entre todos los pares de vértices?",
      "correctPool": [
        "Theta(V^3) operaciones.",
        "Theta(V^3) cúbica."
      ],
      "distractorPool": [
        "Theta(V^2) cuadrática.",
        "Theta(V log V) logarítmica.",
        "Theta(V * E^2) cúbica de aristas.",
        "Theta(2^V) exponencial.",
        "Theta(V + E) lineal."
      ],
      "feedback": "Floyd-Warshall utiliza 3 ciclos anidados que iteran sobre todos los vértices como intermediarios k, i, j para actualizar la matriz de distancias: D[i][j] = min(D[i][j], D[i][k] + D[k][j]). Su complejidad es Theta(V^3).",
      "reference": "MIT 6.006 & Cormen et al. · Algoritmos (Cap. 25: All-Pairs Shortest Paths)"
    },
    {
      "id": "q-b2-024",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Matrices Triangulares Cairó",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "Para almacenar una matriz triangular inferior T de dimensiones n x n (donde todos los elementos arriba de la diagonal principal son cero), ¿cuántas posiciones de memoria se requieren si se comprimen en un arreglo lineal según Cairó?",
      "correctPool": [
        "n * (n + 1) / 2 elementos.",
        "(n^2 + n) / 2 elementos."
      ],
      "distractorPool": [
        "n^2 / 2 elementos.",
        "n * (n - 1) / 2 elementos.",
        "2 * n - 1 posiciones.",
        "n^2 - n posiciones.",
        "(n + 1)^2 / 4 elementos."
      ],
      "feedback": "En una matriz triangular inferior de n x n, la fila 0 tiene 1 elemento no nulo, la fila 1 tiene 2, ..., y la fila n-1 tiene n. La suma total es 1 + 2 + ... + n = n(n + 1) / 2, reduciendo el almacenamiento a casi la mitad.",
      "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 2: Matrices Especiales)"
    },
    {
      "id": "q-b2-025",
      "blockId": "bloque-2",
      "topic": "Diseño de Algoritmos · Problema de la Mochila",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Por qué la variante de la Mochila Fraccionaria (Fractional Knapsack) puede resolverse con un algoritmo Greedy, mientras que la Mochila 0/1 (0/1 Knapsack) requiere Programación Dinámica?",
      "correctPool": [
        "Porque en la fraccionaria la elección voraz por densidad de valor/peso es óptima; en 0/1 la indivisibilidad exige evaluar combinaciones superpuestas.",
        "Porque la fraccionaria permite fraccionar ítems para saturar la capacidad; en 0/1 la indivisibilidad impide que las decisiones locales aseguren el óptimo."
      ],
      "distractorPool": [
        "Porque la fraccionaria no exhibe subestructura óptima pero sí superposición; en 0/1 se cumple la propiedad de elección voraz pura.",
        "Porque en la fraccionaria el peso de los elementos siempre es potencia de dos; en 0/1 los pesos pueden adoptar valores fraccionarios arbitrarios.",
        "Porque la fraccionaria solo admite conjuntos previamente ordenados por mezcla; en 0/1 el espacio de búsqueda es determinista en O(log n).",
        "Porque en la fraccionaria se puede retroceder en decisiones mediante Backtracking; en 0/1 toda decisión se memoriza en una tabla hash abierta.",
        "Porque la fraccionaria requiere resolver caminos mínimos en grafos dirigidos; en 0/1 se descompone la capacidad en factores primos continuos."
      ],
      "feedback": "En la mochila fraccionaria podemos tomar partes de artículos, ordenándolos vorazmente por valor/peso (O(n log n)). En la mochila 0/1 (tomar todo o nada), una elección voraz local puede dejar un hueco inutilizable que impida alcanzar el valor máximo global, requiriendo explorar combinaciones con programación dinámica en tiempo pseudo-polinomial O(n*W).",
      "reference": "MIT 6.006 & Joyanes Aguilar · Algoritmos y Complejidad"
    },
    {
      "id": "q-b2-026",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Cadenas · Algoritmo KMP",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "¿Cuál es la función matemática del arreglo pi (tabla de prefijos) en el algoritmo de búsqueda de subcadenas Knuth-Morris-Pratt (KMP)?",
      "correctPool": [
        "Determinar cuántos caracteres del patrón saltar sin retroceder en el texto tras una discrepancia.",
        "Almacenar la longitud del prefijo propio más largo que también es sufijo para evitar reevaluaciones."
      ],
      "distractorPool": [
        "Calcular la firma criptográfica SHA-256 del texto de entrada.",
        "Ordenar alfabéticamente las palabras del diccionario en tiempo lineal.",
        "Balancear el factor de equilibrio del árbol de sufijos en modo kernel.",
        "Contar el número de vocales y consonantes en la cadena principal.",
        "Detectar si el grafo de estados contiene aristas hacia atrás con ciclos."
      ],
      "feedback": "La tabla pi (función prefijo) de KMP almacena la longitud del prefijo propio más largo que coincide con un sufijo del patrón hasta cada posición. Permite que al fallar una coincidencia, el puntero del texto nunca retroceda, logrando búsqueda en tiempo lineal O(n + m).",
      "reference": "MIT 6.006 & Cormen et al. · Introducción a los Algoritmos (Cap. 32: String Matching)"
    },
    {
      "id": "q-b2-027",
      "blockId": "bloque-2",
      "topic": "Árboles Equilibrados · Árboles Rojo-Negro",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En un Árbol Rojo-Negro (Red-Black Tree), ¿cuál de las siguientes propiedades es **OBLIGATORIA** según su definición formal?",
      "correctPool": [
        "Si un nodo es rojo, entonces sus dos hijos deben ser negros (no pueden coexistir dos rojos consecutivos).",
        "Todo camino desde la raíz hasta cualquier hoja nula contiene el mismo número de nodos negros."
      ],
      "distractorPool": [
        "La raíz del árbol debe ser forzosamente de color rojo en todo momento.",
        "Todos los nodos hoja deben almacenar claves con valores numéricos pares.",
        "El factor de equilibrio de cada nodo debe pertenecer al conjunto {-1, 0, 1}.",
        "El subárbol derecho debe contener exactamente el doble de nodos que el izquierdo.",
        "Los nodos negros no pueden tener hijos de color negro bajo ninguna condición."
      ],
      "feedback": "Propiedades de Árboles Rojo-Negro: 1) Todo nodo es rojo o negro. 2) La raíz es negra. 3) Todas las hojas nulas (NIL) son negras. 4) Si un nodo es rojo, sus hijos son negros (no hay dos rojos juntos). 5) Todo camino simple a una hoja NIL contiene el mismo número de nodos negros (altura negra).",
      "reference": "MIT 6.006 & Joyanes Aguilar · Estructuras de Datos Avanzadas"
    },
    {
      "id": "q-b2-028",
      "blockId": "bloque-2",
      "topic": "Estructuras de Datos · Listas Doblemente Enlazadas Cairó",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En una Lista Doblemente Enlazada con punteros a la Cabeza (Head) y Cola (Tail), ¿cuál es la complejidad temporal para insertar un nuevo nodo al final?",
      "correctPool": [
        "O(1) constante.",
        "O(1) tiempo constante."
      ],
      "distractorPool": [
        "O(n) tiempo lineal.",
        "O(log n) logarítmico.",
        "O(n^2) cuadrático.",
        "O(n log n) lineal-logarítmico.",
        "O(1/n) asintótica."
      ],
      "feedback": "Al disponer de un puntero directo a Tail, insertar al final solo requiere crear el nodo, enlazar tail.next = nuevo, nuevo.prev = tail, y actualizar tail = nuevo, operando en tiempo estrictamente constante O(1).",
      "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 4: Listas Enlazadas)"
    },
    {
      "id": "q-b2-029",
      "blockId": "bloque-2",
      "topic": "Algoritmos de Ordenamiento · Counting Sort",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Bajo qué premisa fundamental el algoritmo Counting Sort es capaz de ordenar 'n' elementos en tiempo O(n + k), superando la cota Omega(n log n)?",
      "correctPool": [
        "Porque no compara elementos entre sí; asume que las claves son enteros en un rango acotado [0, k].",
        "Porque no se basa en comparaciones, contando frecuencias directas de claves enteras en un rango finito."
      ],
      "distractorPool": [
        "Porque divide el arreglo recursivamente en cuatro subproblemas paralelos.",
        "Porque almacena los datos en un montículo binario con extracción en O(1).",
        "Porque descarta los elementos duplicados antes de ejecutar la mezcla.",
        "Porque utiliza la instrucción de microcódigo Interlocked del procesador.",
        "Porque requiere que los elementos estén previamente ordenados al revés."
      ],
      "feedback": "Counting Sort supera la cota de Omega(n log n) porque no es un algoritmo basado en comparaciones. Utiliza las claves como índices en un arreglo de conteo de tamaño k. Su complejidad es O(n + k), siendo lineal cuando k = O(n).",
      "reference": "MIT 6.006 & Cormen et al. · Introducción a los Algoritmos (Cap. 8: Sorting in Linear Time)"
    },
    {
      "id": "q-b2-030",
      "blockId": "bloque-2",
      "topic": "Análisis de Algoritmos · Análisis Amortizado",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "Al duplicar la capacidad de un Arreglo Dinámico (Dynamic Array / List) cada vez que se llena, una inserción individual ocasional cuesta O(n) al tener que copiar todos los elementos. ¿Cuál es el Costo Amortizado por inserción a lo largo de una secuencia de 'n' operaciones?",
      "correctPool": [
        "O(1) amortizado.",
        "O(1) costo amortizado."
      ],
      "distractorPool": [
        "O(log n) costo amortizado.",
        "O(n) costo amortizado.",
        "O(n^2) costo amortizado.",
        "O(1) en peor caso estricto.",
        "O(sqrt(n)) costo amortizado."
      ],
      "feedback": "Mediante el método de agregación o contable: duplicar el tamaño ocurre en tamaños 1, 2, 4, 8, ..., 2^k. El costo total de copias tras n inserciones es 1 + 2 + 4 + ... + n < 2n = O(n). Al dividir el trabajo total O(n) entre las n operaciones, el costo amortizado por inserción es O(1).",
      "reference": "MIT 6.006 & Joyanes Aguilar · Análisis Amortizado (Cormen et al., Cap. 17)"
    }
  ];
});
