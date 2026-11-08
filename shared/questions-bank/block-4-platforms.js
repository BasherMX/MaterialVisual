/**
 * Material Visual · Banco Maestro Canónico de Reactivos
 * BLOQUE IV: PLATAFORMAS DE PROGRAMACIÓN & WEB
 * (.NET 8 / C# 12, Android, JavaScript Concurrente, REST, gRPC)
 * (Mark J. Price, Dawn Griffiths, MDN Web Docs, Microsoft Learn)
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
      root.MATERIAL_BANK.registerBlock('bloque-4', questions);
    }
    root.MATERIAL_BLOCK_4 = questions;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  return [
    {
      "id": "q-b4-001",
      "blockId": "bloque-4",
      "topic": "Concurrencia .NET · Primitivas de Sincronización Price",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Considere el siguiente fragmento de código ejecutado concurrentemente por 10 hilos en C#:\n\nint x = 0;\nParallel.For(0, 1000, _ => { x++; });\n\n¿Cuál es la razón técnica por la cual el valor final de 'x' no está garantizado que sea 1000?",
      "correctPool": [
        "La instrucción x++ no es atómica; se descompone en 3 pasos de CPU (leer, incrementar, almacenar) produciendo una condición de carrera.",
        "La operación x++ es un ciclo Read-Modify-Write que requiere tres instrucciones máquina susceptibles de intercalación de hilos."
      ],
      "distractorPool": [
        "El recolector de basura (GC) suspende la memoria heap forzando el reinicio del hilo en ejecución.",
        "El compilador JIT desactiva automáticamente la memoria caché L2 en métodos multihilo no estáticos.",
        "La directiva Parallel.For serializa internamente las tareas bloqueando la asignación del registro.",
        "El runtime de .NET convierte los enteros primitivos a tipos inmutables por referencia en paralelo.",
        "La memoria virtual del sistema operativo reasigna la página de memoria perdiendo las escrituras."
      ],
      "feedback": "La operación x++ no es atómica a nivel de hardware; involucra cargar el valor de la memoria a un registro, incrementarlo y reescribirlo. Al haber múltiples hilos simultáneos sin sincronización, ocurre una condición de carrera (Race Condition). Se debe usar Interlocked.Increment(ref x).",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 14: Multithreading and Concurrency)"
    },
    {
      "id": "q-b4-002",
      "blockId": "bloque-4",
      "topic": "Concurrencia .NET · Primitivas Interlocked vs Mutex",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Relacione cada primitiva de concurrencia en .NET con su característica técnica fundamental:\n\n1. Interlocked\n2. Monitor (sentencia lock)\n3. Mutex\n\na. Primitiva pesada que envuelve un handle del kernel del sistema operativo permitiendo sincronización entre distintos procesos.\nb. Primitiva híbrida ligera en modo usuario con paso a kernel solo en contención para el mismo proceso.\nc. Instrucciones atómicas directas a nivel de microcódigo de CPU sin bloqueo de subprocesos.\n\n¿Cuál es la combinación correcta?",
      "correctPool": [
        "1c, 2b, 3a",
        "1c, 2b, 3a."
      ],
      "distractorPool": [
        "1a, 2b, 3c",
        "1b, 2a, 3c",
        "1c, 2a, 3b",
        "1b, 2c, 3a",
        "1a, 2c, 3b"
      ],
      "feedback": "Interlocked opera con instrucciones atómicas de CPU (LOCK CMPXCHG) sin bloqueos; Monitor (lock) opera en user-mode con sincronización interna en el mismo proceso; Mutex es un objeto del kernel del SO que cruza límites de proceso.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 14: Sincronización de Hilos)"
    },
    {
      "id": "q-b4-003",
      "blockId": "bloque-4",
      "topic": "Arquitectura Android · Ciclo de Vida Activity Griffiths",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es la secuencia cronológica exacta de callbacks que ejecuta el sistema operativo Android al minimizar una Activity activa presionando el botón Home?",
      "correctPool": [
        "onPause() ➔ onStop().",
        "onPause() y luego onStop()."
      ],
      "distractorPool": [
        "onStop() ➔ onDestroy().",
        "onResume() ➔ onPause().",
        "onRestart() ➔ onStart().",
        "onDestroy() ➔ onCreate().",
        "onSaveInstanceState() ➔ onDestroy()."
      ],
      "feedback": "Al enviar una Activity a segundo plano (Home): primero pierde el foco de interacción (onPause), y en cuanto queda totalmente oculta para el usuario se invoca onStop. La Activity NO se destruye (onDestroy) mientras siga viva en la memoria del sistema.",
      "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 3: The Activity Lifecycle)"
    },
    {
      "id": "q-b4-004",
      "blockId": "bloque-4",
      "topic": "JavaScript · Event Loop & Microtareas",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Considere el siguiente fragmento de JavaScript ejecutado en un navegador moderno:\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n\n¿Cuál es la secuencia exacta de salida en la consola y cuál es su justificación técnica?",
      "correctPool": [
        "1, 4, 3, 2 (el código sincrónico se ejecuta primero, luego se vacía por completo la cola de microtareas y finalmente la cola de macrotareas).",
        "1, 4, 3, 2 debido a que las microtareas (Promise) tienen prioridad absoluta sobre los callbacks de temporizadores (setTimeout)."
      ],
      "distractorPool": [
        "1, 2, 3, 4 (el temporizador con retraso 0 se ejecuta inmediatamente después del primer log sincrónico).",
        "1, 3, 2, 4 (las promesas se resuelven antes de continuar con la siguiente línea del hilo principal).",
        "1, 4, 2, 3 (los temporizadores se procesan antes que los manejadores de promesas en la cola de tareas).",
        "4, 1, 3, 2 (el compilador JIT de V8 reordena los llamados sincrónicos optimizando las promesas).",
        "1, 3, 4, 2 (las microtareas interrumpen el flujo de ejecución sincrónico del call stack en runtime)."
      ],
      "feedback": "Secuencia del Event Loop: 1) Ejecución sincrónica en Call Stack: imprime '1' y luego '4'. 2) Se revisa la Microtask Queue: la promesa imprime '3'. 3) Solo tras vaciar las microtareas, el Event Loop toma el siguiente macrotask de la Callback Queue: el callback de setTimeout imprime '2'. Salida: 1, 4, 3, 2.",
      "reference": "MDN Web Docs · In depth: Microtasks and the JavaScript runtime environment"
    },
    {
      "id": "q-b4-005",
      "blockId": "bloque-4",
      "topic": "Arquitectura REST · Modelo de Madurez de Richardson",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En el Modelo de Madurez de Richardson para servicios web RESTful, ¿qué elemento arquitectónico define el Nivel 3 (la cúspide de REST)?",
      "correctPool": [
        "HATEOAS (Hypermedia As The Engine Of Application State), donde las respuestas contienen enlaces navegables a acciones posteriores.",
        "Hipermedios como motor del estado de la aplicación, guiando al cliente sobre qué transiciones puede realizar a continuación."
      ],
      "distractorPool": [
        "El uso de URIs específicas orientadas a recursos independientes en lugar de un único endpoint común.",
        "La adopción rigurosa de los verbos HTTP estándar (GET, POST, PUT, DELETE) con códigos de estado semánticos.",
        "La serialización binaria de los mensajes mediante Protocol Buffers sobre conexiones multiplexadas HTTP/2.",
        "La firma criptográfica de cada payload JSON mediante claves asimétricas RSA de 4096 bits.",
        "La eliminación de la capa de transporte TCP en favor del protocolo QUIC basado en UDP."
      ],
      "feedback": "Nivel 0: The Swamp of POX (un solo URI y método POST). Nivel 1: Recursos (múltiples URIs). Nivel 2: Verbos HTTP (GET, POST, PUT, DELETE y códigos de estado). Nivel 3: HATEOAS (Controles Hipermedia incrustados que guían la navegación del cliente).",
      "reference": "Leonard Richardson & Martin Fowler · Richardson Maturity Model & Mark J. Price"
    },
    {
      "id": "q-b4-006",
      "blockId": "bloque-4",
      "topic": "EF Core 8 · Optimización de Consultas Price",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Al ejecutar una consulta de solo lectura masiva en Entity Framework Core 8 para generar un reporte estadístico, ¿qué método de LINQ debe aplicarse para maximizar el rendimiento y reducir drásticamente el consumo de memoria en el servidor?",
      "correctPool": [
        ".AsNoTracking(), desactivando el rastreador de cambios (Change Tracker) en el DbContext.",
        ".AsNoTracking() para evitar que el DbContext guarde instantáneas de entidades en memoria."
      ],
      "distractorPool": [
        ".AsSplitQuery(), forzando una única consulta cartesiana con producto cruzado de índices.",
        ".Include(), cargando ávidamente todos los grafos de navegación de manera anticipada.",
        ".ToList(), materializando de inmediato los registros en el subproceso secundario del pool.",
        ".UseLazyLoadingProxies(), delegando la carga diferida a la llamada del recolector de basura.",
        ".IgnoreAutoIncludes(), forzando a la base de datos a reconstruir los índices en cada consulta."
      ],
      "feedback": "AsNoTracking() le indica a EF Core que no cree instantáneas ni rastree cambios sobre las entidades devueltas en el Change Tracker. Para consultas de solo lectura, esto ahorra memoria y tiempo de CPU sustancialmente.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 10: Entity Framework Core)"
    },
    {
      "id": "q-b4-007",
      "blockId": "bloque-4",
      "topic": "Protocolos de Red · gRPC vs REST",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Qué características de transporte y serialización convierten a gRPC en un protocolo de altísimo rendimiento para comunicación entre microservicios?",
      "correctPool": [
        "Transporte sobre HTTP/2 binario multiplexado y serialización con Protocol Buffers.",
        "Uso de HTTP/2 con compresión de cabeceras HPACK y payloads binarios con Protobuf."
      ],
      "distractorPool": [
        "Transporte sobre WebSockets unidireccionales y serialización con esquemas XML SOAP.",
        "Transporte en datagramas UDP puros y codificación en texto JSON Base64.",
        "Transporte sobre HTTP/1.1 persistente con pipelining y serialización en YAML.",
        "Transporte mediante túneles SSH cifrados y mensajes codificados en ASN.1.",
        "Transporte sobre colas MSMQ locales y serialización nativa de .NET BinaryFormatter."
      ],
      "feedback": "gRPC utiliza HTTP/2 como protocolo de transporte (soporta multiplexación en una sola conexión TCP, streaming bidireccional y compresión de cabeceras HPACK) y Protocol Buffers (Protobuf) como lenguaje de definición de interfaz binario fuertemente tipado.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 8: gRPC Services)"
    },
    {
      "id": "q-b4-008",
      "blockId": "bloque-4",
      "topic": "Seguridad Web · Autenticación JWT",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuáles son las tres partes delimitadas por puntos (.) que componen la estructura estándar de un JSON Web Token (JWT)?",
      "correctPool": [
        "Header, Payload y Signature.",
        "Header, Claims y Signature."
      ],
      "distractorPool": [
        "Issuer, Subject y Audience.",
        "Algorithm, Timestamp y Hash.",
        "Certificate, Token y Checksum.",
        "Client_id, Scope y Redirect_uri.",
        "Nonce, Salt y Ciphertext."
      ],
      "feedback": "Un JWT consta de 3 partes separadas por puntos: 1) Header (tipo de token y algoritmo de firma), 2) Payload (conjunto de claims o datos del usuario), y 3) Signature (firma criptográfica calculada con la clave secreta o privada).",
      "reference": "RFC 7519 & MDN Web Docs · JSON Web Tokens"
    },
    {
      "id": "q-b4-009",
      "blockId": "bloque-4",
      "topic": "Arquitectura Web · Mecanismo CORS MDN",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Al emitir una petición HTTP desde un navegador con método PUT y una cabecera personalizada 'X-Tenant-ID', ¿qué solicitud previa envía automáticamente el navegador antes de la petición principal?",
      "correctPool": [
        "Una solicitud de verificación previa (Preflight Request) utilizando el método HTTP OPTIONS.",
        "Una petición previa de sondeo con método OPTIONS para comprobar los permisos de origen cruzado."
      ],
      "distractorPool": [
        "Una solicitud de validación de certificados con el método HTTP HEAD.",
        "Una llamada de autenticación silenciosa utilizando el verbo HTTP POST.",
        "Una consulta de metadatos al registro DNS mediante el protocolo UDP.",
        "Una solicitud de negociación de contenido utilizando el método HTTP TRACE.",
        "Una verificación de estado de salud utilizando el endpoint GET /health."
      ],
      "feedback": "Cuando una petición de origen cruzado no es 'simple' (por usar métodos como PUT/DELETE o cabeceras personalizadas no estándar), el navegador emite obligatoriamente una petición Preflight con el método OPTIONS para validar que el servidor autorice el origen y las cabeceras.",
      "reference": "MDN Web Docs · Cross-Origin Resource Sharing (CORS)"
    },
    {
      "id": "q-b4-010",
      "blockId": "bloque-4",
      "topic": "C# 12 & .NET 8 · Constructores Primarios Price",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En C# 12 (.NET 8), ¿cuál es la sintaxis formal de un 'Constructor Primario' (Primary Constructor) en una clase?",
      "correctPool": [
        "public class Servicio(IRepositorio repo, ILogger logger) { ... }",
        "class Servicio(IRepositorio repo, ILogger logger) { ... }"
      ],
      "distractorPool": [
        "public class Servicio : constructor(IRepositorio repo) { ... }",
        "public class Servicio[IRepositorio repo] { ... }",
        "public class Servicio { init(IRepositorio repo); }",
        "public class Servicio -> (IRepositorio repo) { ... }",
        "public class Servicio with (IRepositorio repo) { ... }"
      ],
      "feedback": "C# 12 extendió los constructores primarios (antes exclusivos de records) a cualquier clase o estructura: public class MiClase(int id, string nombre) { ... }. Los parámetros quedan en el ámbito de toda la clase.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 & Microsoft C# 12 Documentation"
    },
    {
      "id": "q-b4-011",
      "blockId": "bloque-4",
      "topic": "Resiliencia .NET · Biblioteca Polly Price",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "En un microservicio de pagos en .NET 8, un servicio externo dependiente comienza a responder con fallas intermitentes del 80%. Para evitar saturar al proveedor y colapsar los hilos locales, se implementa una estrategia de 'Circuit Breaker' con Polly. ¿Cuál es el comportamiento técnico del circuito en estado 'Abierto' (Open)?",
      "correctPool": [
        "Interrumpe de inmediato las llamadas entrantes arrojando una excepción inmediata sin intentar invocar el servicio remoto durante un tiempo predefinido.",
        "Bloquea y cortocircuita las solicitudes de inmediato en local, protegiendo al servicio remoto hasta que concluya el periodo de enfriamiento."
      ],
      "distractorPool": [
        "Encola todas las peticiones en memoria RAM de manera indefinida hasta que el servicio dependiente se recupere.",
        "Redirige automáticamente el tráfico a una base de datos relacional local descartando las excepciones.",
        "Duplica el número de hilos de conexión concurrentes para forzar la recepción exitosa de la respuesta.",
        "Degrada las peticiones convirtiendo los métodos POST en consultas GET de solo lectura.",
        "Reinicia el proceso del sistema operativo para limpiar los sockets TCP huérfanos del contenedor."
      ],
      "feedback": "El patrón Circuit Breaker tiene 3 estados: Closed (operación normal), Open (falla recurrente superó el umbral; todas las llamadas fallan inmediatamente sin tocar la red) y Half-Open (tras un tiempo de enfriamiento, permite unas pocas llamadas de prueba para verificar si el servicio se recuperó).",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 12: Resilient Services with Polly)"
    },
    {
      "id": "q-b4-012",
      "blockId": "bloque-4",
      "topic": "Arquitectura Android · ViewModel & StateFlow Griffiths",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cuál es la razón arquitectónica fundamental para almacenar el estado de la interfaz en un Jetpack 'ViewModel' en lugar de mantenerlo dentro de una Activity en Android?",
      "correctPool": [
        "El ViewModel sobrevive a los cambios de configuración (como la rotación de pantalla) evitando la pérdida de estado y recálculos innecesarios.",
        "El ViewModel persiste en memoria cuando la Activity se destruye y recrea por configuración de rotación o idioma."
      ],
      "distractorPool": [
        "El ViewModel ejecuta el renderizado de gráficos directamente en el chip de la GPU sin usar la CPU.",
        "El ViewModel tiene acceso directo a los registros del hardware de red saltándose los permisos del manifiesto.",
        "El ViewModel impide que el usuario cierre la aplicación presionando el botón de retroceso.",
        "El ViewModel cifra automáticamente en hardware los campos de texto ingresados por el usuario.",
        "El ViewModel reemplaza al compilador Kotlin convirtiendo el código en bytecode de Dalvik estático."
      ],
      "feedback": "Cuando ocurre un cambio de configuración (como rotar la pantalla), Android destruye y recrea la Activity. El ViewModel está diseñado arquitectónicamente para sobrevivir a estas transiciones, preservando los datos de la interfaz sin requerir recargas de red o base de datos.",
      "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 5: Architecture Components)"
    },
    {
      "id": "q-b4-013",
      "blockId": "bloque-4",
      "topic": "HTTP & Códigos de Estado · REST RFC 9110",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Qué código de estado HTTP debe responder formalmente una API RESTful al procesar con éxito una solicitud POST que creó satisfactoriamente un nuevo recurso en la base de datos?",
      "correctPool": [
        "201 Created.",
        "Código 201 Created."
      ],
      "distractorPool": [
        "200 OK.",
        "204 No Content.",
        "202 Accepted.",
        "301 Moved Permanently.",
        "304 Not Modified."
      ],
      "feedback": "Doctrina REST y RFC 9110: Cuando una solicitud POST da como resultado la creación exitosa de un recurso, el servidor DEBE responder con el código 201 Created, habitualmente acompañado por la cabecera Location que contiene la URI del nuevo recurso.",
      "reference": "RFC 9110 HTTP Semantics & Mark J. Price"
    },
    {
      "id": "q-b4-014",
      "blockId": "bloque-4",
      "topic": "EF Core 8 · Explosión Cartesiana & Split Queries",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "Al consultar una entidad principal que incluye tres colecciones relacionadas uno-a-muchos (ej. Pedido.Include(p => p.Detalles).Include(p => p.Pagos).Include(p => p.Envios)), ¿qué problema genera EF Core por defecto y cómo se soluciona?",
      "correctPool": [
        "Genera una explosión cartesiana en una única consulta SQL gigantesca; se soluciona aplicando .AsSplitQuery() para ejecutar consultas separadas.",
        "Provoca duplicación cartesiana masiva de filas en el JOIN único; se corrige con .AsSplitQuery() para dividir en queries independientes."
      ],
      "distractorPool": [
        "Provoca un bloqueo mutuo (deadlock) permanente en el motor relacional; se resuelve utilizando transacciones distribuidas.",
        "Genera una excepción de desbordamiento de pila en el runtime de .NET; se soluciona deshabilitando el recolector de basura.",
        "Corrompe los índices agrupados de la tabla principal; se resuelve reconstruyendo las estadísticas con DBCC CHECKDB.",
        "Convierte automáticamente los valores numéricos a cadenas de texto nulas; se corrige aplicando .AsNoTrackingWithIdentityResolution().",
        "Produce un ciclo infinito de consultas recursivas N+1; se soluciona forzando el uso exclusivo de procedimientos almacenados."
      ],
      "feedback": "Por defecto, EF Core une múltiples colecciones en una sola sentencia SQL con varios LEFT JOINs, produciendo una explosión cartesiana (duplicación exponencial de filas transmitidas). Usar AsSplitQuery() divide la carga en múltiples sentencias SQL independientes por colección, optimizando la red y memoria.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 10: Performance in EF Core)"
    },
    {
      "id": "q-b4-015",
      "blockId": "bloque-4",
      "topic": "Seguridad Web · Cookies HttpOnly y SameSite",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "Al almacenar un token de sesión o autenticación en una Cookie en el navegador, ¿qué directivas de cabecera mitigan respectivamente los ataques de Cross-Site Scripting (XSS) y Cross-Site Request Forgery (CSRF)?",
      "correctPool": [
        "HttpOnly impide el acceso a la cookie vía JavaScript ante XSS; SameSite restringe el envío en peticiones de origen cruzado ante CSRF.",
        "HttpOnly neutraliza el robo del token por inyección de scripts XSS; SameSite bloquea el reenvío involuntario en sitios externos ante CSRF."
      ],
      "distractorPool": [
        "Secure previene la manipulación de scripts en el cliente; Domain restringe el acceso a la cookie ante ataques de intermediario MITM.",
        "Path=/ neutraliza los ataques de CSRF en rutas hijas; Max-Age bloquea la ejecución de código JavaScript malicioso en el navegador.",
        "Content-Security-Policy cifra el contenido de la cookie; CORS rechaza las solicitudes no autorizadas dirigidas al motor de base de datos.",
        "X-Frame-Options impide la lectura de la cookie en el cliente; Strict-Transport-Security restringe el envío de formularios en navegadores.",
        "Access-Control-Allow-Credentials invalida los scripts inyectados; WebSockets cierra automáticamente las sesiones no autenticadas."
      ],
      "feedback": "HttpOnly impide que scripts en el navegador (document.cookie) puedan leer la cookie, protegiendo contra robo de sesiones vía XSS. SameSite (Strict o Lax) controla si la cookie se adjunta en solicitudes que se originan desde sitios de terceros, neutralizando ataques CSRF.",
      "reference": "MDN Web Docs · Using HTTP cookies & OWASP Top 10"
    },
    {
      "id": "q-b4-016",
      "blockId": "bloque-4",
      "topic": "Concurrencia .NET · SemaphoreSlim vs lock",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Por qué la sentencia 'lock' de C# no puede ser utilizada para sincronizar una sección crítica que contiene una llamada asincrónica 'await'?",
      "correctPool": [
        "Porque lock se basa en el thread-affinity de Monitor y await puede reanudar la ejecución en un hilo distinto del pool.",
        "Porque Monitor exige que el mismo hilo que adquirió el bloqueo lo libere, mientras que await puede cambiar de hilo."
      ],
      "distractorPool": [
        "Porque el compilador de C# bloquea la generación de archivos ejecutables cuando detecta tipos asincrónicos.",
        "Porque la memoria stack se sobrescribe cuando una tarea asincrónica entra en estado faulted.",
        "Porque lock desactiva las optimizaciones de microcódigo del CPU impidiendo la asincronía.",
        "Porque las tareas asincrónicas en .NET se ejecutan obligatoriamente en modo kernel del sistema.",
        "Porque lock está reservado exclusivamente para estructuras de datos de tipo LinkedList."
      ],
      "feedback": "La sentencia lock (Monitor.Enter/Exit) requiere afinidad de hilo: el subproceso que toma el bloqueo debe ser quien lo suelte. Como await puede suspender la tarea y reanudarla en otro hilo del ThreadPool, lock(obj) dentro de código con await genera un error de compilación. Para escenarios async se debe usar SemaphoreSlim.WaitAsync().",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 14: Asynchronous Synchronization)"
    },
    {
      "id": "q-b4-017",
      "blockId": "bloque-4",
      "topic": "Arquitectura Android · Servicios Griffiths",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "En Android, ¿qué tipo de Service debe mostrar obligatoriamente una notificación persistente al usuario para asegurar que el sistema no lo destruya ante escasez de memoria?",
      "correctPool": [
        "Foreground Service (Servicio en Primer Plano).",
        "Servicio en Primer Plano (Foreground Service)."
      ],
      "distractorPool": [
        "Background Service silencioso.",
        "Bound Service sin interfaz de cliente.",
        "IntentService en cola de prioridad.",
        "JobScheduler diferido del sistema.",
        "BroadcastReceiver dinámico en memoria."
      ],
      "feedback": "Un Foreground Service realiza operaciones que son perceptibles por el usuario (ej. reproducción de audio, navegación GPS) y debe mostrar una notificación continua no cancelable para advertir al usuario y recibir la máxima prioridad contra el terminador de procesos de Android.",
      "reference": "Dawn Griffiths · Head First Android Development (Cap. 10: Background Services)"
    },
    {
      "id": "q-b4-018",
      "blockId": "bloque-4",
      "topic": "GraphQL vs REST · Problemas de Recuperación",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Qué término técnico describe el escenario donde un cliente REST debe emitir múltiples solicitudes secuenciales para obtener datos relacionados que un endpoint no incluyó?",
      "correctPool": [
        "Sub-recuperación (Under-fetching).",
        "Under-fetching (datos insuficientes)."
      ],
      "distractorPool": [
        "Sobre-recuperación (Over-fetching).",
        "Explosión Cartesiana (Cartesian Query).",
        "Problema de Consultas N+1 (N+1 Query).",
        "Envenenamiento de Caché (Cache Poisoning).",
        "Lectura Fantasma (Phantom Read)."
      ],
      "feedback": "Over-fetching ocurre cuando la API devuelve más datos de los necesarios. Under-fetching ocurre cuando un endpoint no devuelve suficientes datos, obligando al cliente a realizar peticiones HTTP adicionales (problema N+1 en APIs).",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 9: GraphQL APIs)"
    },
    {
      "id": "q-b4-019",
      "blockId": "bloque-4",
      "topic": "JavaScript · Web Workers & Multihilo",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "¿Cuál es el mecanismo formal de comunicación que utiliza un Web Worker para intercambiar datos con el hilo principal de JavaScript?",
      "correctPool": [
        "Paso de mensajes asincrónicos mediante postMessage() y el evento onmessage.",
        "Paso de mensajes mediante postMessage y serialización estructurada."
      ],
      "distractorPool": [
        "Variables globales compartidas protegidas por un semáforo mutex de CPU.",
        "Punteros de memoria compartidos mediante la sintaxis de referencias ref de C#.",
        "Llamadas síncronas a funciones estáticas exportadas en el objeto Window.",
        "Acceso directo y concurrente a los elementos del árbol DOM de la página.",
        "Interrupciones vectoriales de hardware disparadas por el navegador."
      ],
      "feedback": "Los Web Workers operan en un hilo completamente aislado y no tienen acceso al DOM ni a variables globales compartidas. La comunicación con el hilo principal se realiza exclusivamente mediante paso de mensajes usando postMessage() y el manejador onmessage, utilizando el algoritmo de clonación estructurada.",
      "reference": "MDN Web Docs · Using Web Workers"
    },
    {
      "id": "q-b4-020",
      "blockId": "bloque-4",
      "topic": "Arquitectura Web · Verbos HTTP e Idempotencia",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "¿Cuál de los siguientes métodos HTTP es formalmente **NO IDEMPOTENTE** según la especificación RFC 9110?",
      "correctPool": [
        "POST.",
        "El método POST."
      ],
      "distractorPool": [
        "GET.",
        "PUT.",
        "DELETE.",
        "HEAD.",
        "OPTIONS."
      ],
      "feedback": "Un método es idempotente si la ejecución repetida de solicitudes idénticas produce el mismo resultado en el estado del servidor. GET, PUT, DELETE, HEAD y OPTIONS son idempotentes. POST no es idempotente: invocarlo 5 veces creará 5 registros independientes.",
      "reference": "RFC 9110 HTTP Semantics & MDN Web Docs"
    },
    {
      "id": "q-b4-021",
      "blockId": "bloque-4",
      "topic": "C# 12 & .NET 8 · Pattern Matching Avanzado Price",
      "difficulty": "medium",
      "lengthType": "scenario",
      "text": "Considere la siguiente expresión en C# 12:\n\nstring Eval(int[] arr) => arr is [1, .., 9] ? \"Match\" : \"No\";\n\n¿Qué tipo de coincidencia de patrones (Pattern Matching) se está utilizando y qué arreglos son aceptados?",
      "correctPool": [
        "Un List Pattern con operador slice (..); valida que el primer elemento sea 1 y el último sea 9 con longitud mínima de dos.",
        "Un Patrón de Lista con descarte intermedio (..); acepta arreglos que inicien en 1 y terminen en 9 sin importar los elementos centrales."
      ],
      "distractorPool": [
        "Un patrón relacional; solo acepta arreglos que contengan exactamente dos elementos numéricos continuos en memoria.",
        "Un patrón de tipo posicional; solo acepta arreglos bidimensionales cuyos índices pares sumen un valor mayor a diez.",
        "Un operador de desreferencia nula; lanza una excepción si el arreglo contiene más de cinco elementos enteros consecutivos.",
        "Un patrón de tupla estática; exige que los elementos del arreglo se encuentren previamente ordenados en forma ascendente.",
        "Un patrón de propiedades compilado; solo acepta arreglos inmutables creados a través de expresiones LINQ en runtime."
      ],
      "feedback": "Los List Patterns (introducidos en C# 11 y consolidados en C# 12) permiten hacer coincidir arreglos o listas. El patrón [1, .., 9] verifica que el primer elemento sea 1, que haya cero o más elementos en medio (operador de segmento / slice '..'), y que el último elemento sea 9.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 2: C# Language Features)"
    },
    {
      "id": "q-b4-022",
      "blockId": "bloque-4",
      "topic": "Arquitectura Android · Intents Griffiths",
      "difficulty": "easy",
      "lengthType": "short",
      "text": "En Android, ¿qué distingue a un Intent Explícito de un Intent Implícito?",
      "correctPool": [
        "El Explícito especifica la clase exacta del componente a ejecutar; el Implícito declara una acción general para que el SO encuentre una app compatible.",
        "El Explícito define el componente destinatario por su nombre de clase; el Implícito delega la resolución al sistema según filtros de acción."
      ],
      "distractorPool": [
        "El Explícito viaja cifrado mediante certificados SSL; el Implícito viaja en texto plano.",
        "El Explícito se utiliza para segundo plano; el Implícito es exclusivo de la interfaz gráfica.",
        "El Explícito solo transmite cadenas de texto; el Implícito transmite archivos binarios grandes.",
        "El Explícito no requiere permisos en el manifiesto; el Implícito exige permisos de superusuario.",
        "El Explícito se ejecuta en la GPU; el Implícito se ejecuta en la memoria caché del procesador."
      ],
      "feedback": "Intent Explícito: especifica exactamente el componente (ej. Intent(this, DetalleActivity::class.java)). Intent Implícito: declara una acción abstracta (ej. ACTION_VIEW con una URI http://...), permitiendo que el sistema operativo pregunte al usuario con qué app abrir el recurso mediante Intent Filters.",
      "reference": "Dawn Griffiths · Head First Android Development (Cap. 4: Intents)"
    },
    {
      "id": "q-b4-023",
      "blockId": "bloque-4",
      "topic": "JavaScript · Clausuras y Ámbito Léxico MDN",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Qué es una Clausura (Closure) en JavaScript y qué capacidad le confiere a una función interna?",
      "correctPool": [
        "Es la combinación de una función y el entorno léxico en el que fue declarada, permitiéndole acceder a variables de su función externa incluso tras haber finalizado su ejecución.",
        "Es la referencia viva que una función interna mantiene sobre el ámbito de su función contenedora después de que ésta retornó."
      ],
      "distractorPool": [
        "Es un método nativo del navegador que suspende la ejecución del Call Stack para liberar memoria RAM.",
        "Es un objeto JSON inmutable que previene modificaciones en las propiedades del prototipo global.",
        "Es un hilo secundario del motor V8 que ejecuta operaciones criptográficas en segundo plano.",
        "Es una excepción no controlada arrojada cuando se accede a una variable con valor null o undefined.",
        "Es una directiva de optimización del compilador JIT que convierte código interpretado en bytecode estático."
      ],
      "feedback": "Una clausura (closure) es la conjunción de una función y el ámbito léxico dentro del cual se creó. Permite a la función interna recordar y acceder a las variables y argumentos de su función padre, aun después de que la función padre haya retornado y salido de la pila de llamadas.",
      "reference": "MDN Web Docs · JavaScript Closures & Scope"
    },
    {
      "id": "q-b4-024",
      "blockId": "bloque-4",
      "topic": "EF Core 8 · Concurrencia e IDbContextFactory Price",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "En un servicio en segundo plano (BackgroundService) o en una aplicación Blazor Server que maneja múltiples subprocesos concurrentes, ¿por qué inyectar directamente una instancia de DbContext genera excepciones de concurrencia y cuál es la solución canónica en .NET 8?",
      "correctPool": [
        "DbContext no es seguro para subprocesos (thread-safe); la solución es inyectar IDbContextFactory<T> y crear una instancia efímera de DbContext por cada unidad de trabajo o hilo.",
        "DbContext no tolera llamadas simultáneas paralelas; se debe registrar e inyectar IDbContextFactory<T> para instanciar contextos aislados por operación."
      ],
      "distractorPool": [
        "DbContext solo funciona en arquitecturas de 32 bits; se soluciona migrando a microservicios gRPC con Protobuf.",
        "DbContext bloquea el recolector de basura de .NET; se soluciona invocando GC.Collect() tras cada consulta LINQ.",
        "DbContext prohíbe el uso de la directiva await; se debe forzar la sincronía llamando a .GetAwaiter().GetResult().",
        "DbContext corrompe los archivos LDF del motor relacional; se soluciona activando transacciones distribuidas 2PC.",
        "DbContext solo admite diez conexiones activas; se resuelve duplicando el número de puertos HTTP del servidor."
      ],
      "feedback": "En EF Core, una instancia de DbContext NO es thread-safe; si dos tareas o hilos la utilizan concurrentemente (como ocurre en Blazor Server o BackgroundServices paralelos), se arroja InvalidOperationException. La solución arquitectónica recomendada es registrar AddDbContextFactory<MiContexto>() e inyectar IDbContextFactory para crear y destruir instancias dedicadas de corta duración.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 10: High-Concurrency EF Core)"
    },
    {
      "id": "q-b4-025",
      "blockId": "bloque-4",
      "topic": "Seguridad Web · Content Security Policy (CSP)",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿Cómo mitiga la cabecera HTTP 'Content-Security-Policy' (CSP) los ataques de inyección de scripts maliciosos (XSS) en aplicaciones web?",
      "correctPool": [
        "Restringe los orígenes autorizados desde donde el navegador puede cargar recursos y bloquea la ejecución de scripts en línea no autorizados.",
        "Define una lista blanca de orígenes válidos para scripts y deshabilita JavaScript en línea salvo que posean un nonce criptográfico válido."
      ],
      "distractorPool": [
        "Cifra los paquetes de red mediante cifrado asimétrico en la capa de transporte antes de transmitirlos a través de la tarjeta de red.",
        "Convierte automáticamente las credenciales de formularios en tokens firmados antes de que la petición HTTP llegue al servidor.",
        "Obliga al navegador a renderizar exclusivamente vistas estáticas precompiladas deshabilitando el motor de renderizado dinámico.",
        "Inspecciona y sanitiza las sentencias SQL en el backend para prevenir ataques de inyección a nivel de controlador de base de datos.",
        "Valida la cadena de confianza del certificado SSL del cliente verificando la entidad emisora en el almacén de claves del sistema."
      ],
      "feedback": "Content-Security-Policy (CSP) es una cabecera de seguridad HTTP que permite a los operadores del sitio declarar qué recursos (scripts, CSS, imágenes, fuentes, conexiones fetch) tienen permiso de cargarse y ejecutarse, bloqueando scripts inline (eval, onclick, <script>) a menos que lleven un 'nonce' o 'hash' válido, frustrando ataques XSS.",
      "reference": "MDN Web Docs · Content Security Policy (CSP) & OWASP"
    },
    {
      "id": "q-b4-026",
      "blockId": "bloque-4",
      "topic": "Arquitectura Android · Jetpack Compose Griffiths",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "En Jetpack Compose, ¿qué mecanismo describe el proceso mediante el cual el runtime vuelve a ejecutar las funciones composables cuyos datos de entrada han cambiado para actualizar la interfaz?",
      "correctPool": [
        "Recomposición (Recomposition), ejecutando de forma inteligente solo las funciones cuyos estados observables se alteraron.",
        "Recomposición inteligente (Smart Recomposition) que omite los composables cuyos parámetros permanecieron estables."
      ],
      "distractorPool": [
        "Recolección de basura de vistas infladas en el árbol XML del layout.",
        "Recreación obligatoria de la Activity completa destruyendo el ViewModel.",
        "Sondeo asincrónico mediante llamadas HTTP periódicas cada quinientos milisegundos.",
        "Serialización en memoria secundaria utilizando el convertidor TypeConverter de Room.",
        "Compilación JIT de bytecode de Dalvik forzada por el manejador de notificaciones."
      ],
      "feedback": "La Recomposición es el proceso en Jetpack Compose donde el framework re-ejecuta las funciones composables que leen un estado que acaba de cambiar. Compose optimiza este proceso (recomposición inteligente), recalculando solo los componentes necesarios y omitiendo aquellos cuyos parámetros no cambiaron.",
      "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 12: Jetpack Compose)"
    },
    {
      "id": "q-b4-027",
      "blockId": "bloque-4",
      "topic": "Concurrencia .NET · Canales System.Threading.Channels",
      "difficulty": "hard",
      "lengthType": "medium",
      "text": "¿Cuál es la ventaja de utilizar un Canal con Límite (Bounded Channel) frente a uno sin límite (Unbounded Channel) en un patrón Productor-Consumidor en .NET 8?",
      "correctPool": [
        "Proporciona control de contrapresión (Backpressure), impidiendo que los productores saturen la memoria si producen más rápido de lo procesado.",
        "Aplica contrapresión al limitar la cola en memoria, suspendiendo al escritor de forma asincrónica hasta que se libere capacidad."
      ],
      "distractorPool": [
        "Elimina la necesidad de utilizar la palabra clave async en todos los métodos de consumo simplificando la pila de llamadas.",
        "Persiste automáticamente los mensajes en el motor de base de datos relacional sin necesidad de ejecutar sentencias SQL adicionales.",
        "Garantiza que todos los hilos del procesador ejecuten las tareas bajo el nivel de aislamiento Serializable de transacciones.",
        "Reduce la latencia de procesamiento asignando automáticamente afinidad de núcleo de CPU dedicado a cada tarea consumidora.",
        "Duplica la velocidad de serialización en memoria al omitir la verificación de tipos de datos en tiempo de ejecución."
      ],
      "feedback": "System.Threading.Channels.Channel.CreateBounded<T>(capacidad) fija un límite de elementos en el canal. Si el canal se llena, ChannelWriter.WriteAsync suspende de manera asincrónica al productor (backpressure), evitando el agotamiento de memoria si el productor es más rápido que el consumidor.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 14: High-Performance Pipelines)"
    },
    {
      "id": "q-b4-028",
      "blockId": "bloque-4",
      "topic": "Protocolos Web · Server-Sent Events vs WebSockets MDN",
      "difficulty": "medium",
      "lengthType": "medium",
      "text": "¿En qué escenario arquitectónico es preferible utilizar Server-Sent Events (SSE) en lugar de WebSockets?",
      "correctPool": [
        "Cuando la comunicación requiere únicamente flujo unidireccional del servidor al cliente (ej. cotizaciones bursátiles o notificaciones en vivo) sobre HTTP estándar.",
        "Cuando el flujo de datos es estrictamente del servidor hacia el cliente, aprovechando la infraestructura HTTP existente, reconexión nativa y simplicidad de firewalls."
      ],
      "distractorPool": [
        "Cuando se requiere comunicación bidireccional continua de baja latencia como en videojuegos multijugador.",
        "Cuando el servidor debe transmitir archivos binarios masivos de video sin compresión.",
        "Cuando el cliente no dispone de un navegador web moderno y opera mediante comandos telnet.",
        "Cuando es obligatorio el uso del protocolo de transporte UDP para saltarse la capa TCP.",
        "Cuando se requiere la firma de mensajes con claves asimétricas RSA en cada paquete enviado."
      ],
      "feedback": "Server-Sent Events (SSE) es un estándar web sobre HTTP unidireccional (servidor -> cliente) con Content-Type: text/event-stream. Es más simple que WebSockets, soporta reconexión automática nativa en navegadores (EventSource), funciona con HTTP/2 sin túneles complejos y atraviesa firewalls corporativos con facilidad.",
      "reference": "MDN Web Docs · Server-sent events & WebSockets"
    },
    {
      "id": "q-b4-029",
      "blockId": "bloque-4",
      "topic": "Arquitectura Android · Persistencia con Room Griffiths",
      "difficulty": "medium",
      "lengthType": "short",
      "text": "En la biblioteca de persistencia Room de Android, ¿qué anotación permite almacenar un tipo de dato no primitivo (como una lista de objetos o Date) convirtiéndolo a un tipo compatible con SQLite?",
      "correctPool": [
        "@TypeConverter en métodos estáticos.",
        "@TypeConverter (y @TypeConverters)."
      ],
      "distractorPool": [
        "@Entity (definición de entidad).",
        "@Dao (definición de acceso).",
        "@PrimaryKey (clave primaria).",
        "@Embedded (objeto anidado).",
        "@ForeignKey (clave foránea)."
      ],
      "feedback": "Room solo persiste tipos primitivos nativos de SQLite. Para persistir tipos complejos (como java.util.Date o listas), se utiliza @TypeConverter en métodos estáticos que convierten de tipo complejo a primitivo (ej. Date a Long) y viceversa.",
      "reference": "Dawn Griffiths · Head First Android Development (Cap. 8: Room Persistence Library)"
    },
    {
      "id": "q-b4-030",
      "blockId": "bloque-4",
      "topic": "Servicios .NET · BackgroundService & CancellationToken Price",
      "difficulty": "hard",
      "lengthType": "scenario",
      "text": "Al implementar un servicio en segundo plano heredando de 'BackgroundService' en .NET 8, ¿cuál es el patrón canónico para asegurar un apagado ordenado (Graceful Shutdown) del host?",
      "correctPool": [
        "Comprobar periódicamente stoppingToken.IsCancellationRequested dentro del ciclo y pasar stoppingToken a todas las llamadas asincrónicas (ej. await Task.Delay(ms, stoppingToken)).",
        "Respetar el CancellationToken proporcionado en ExecuteAsync, pasándolo a las operaciones await y permitiendo que OperationCanceledException termine limpiamente la tarea."
      ],
      "distractorPool": [
        "Invocar Environment.Exit(0) tan pronto como se reciba la primera señal de apagado del sistema operativo.",
        "Bloquear el hilo principal indefinidamente ignorando la señal de cancelación hasta finalizar todas las tareas pendientes.",
        "Forzar el reinicio de la máquina virtual descartando el contexto de inyección de dependencias.",
        "Eliminar los archivos binarios compilados de la carpeta bin para impedir nuevas ejecuciones.",
        "Registrar el servicio como Transient en lugar de Singleton en el contenedor IServiceCollection."
      ],
      "feedback": "Para soportar Graceful Shutdown en BackgroundService, el método ExecuteAsync recibe un stoppingToken. Se debe verificar periódicamente stoppingToken.IsCancellationRequested y pasar dicho token a todos los métodos asincrónicos (Task.Delay, DbContext, etc.). Al solicitarse el apagado, la cancelación interrumpe limpiamente las esperas sin dejar operaciones a medias.",
      "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 11: Background Services and Hosted Services)"
    }
  ];
});
