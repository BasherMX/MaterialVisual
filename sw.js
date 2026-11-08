/**
 * Material Visual · Service Worker
 * Provee funcionamiento Offline y Caché Resiliente para toda la plataforma.
 * Estrategia: Cache First con Stale-While-Revalidate para recursos estáticos.
 */
const CACHE_NAME = 'material-visual-cache-v6';

const STATIC_PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './shared/theme.css',
  './shared/nav.js',
  './shared/modules-data.js',
  './shared/exams-data.js',
  './shared/flashcards-data.js',
  './shared/exam-generator-engine.js',
  './shared/questions-bank/bank-loader.js',
  './shared/questions-bank/block-1-projects.js',
  './shared/questions-bank/block-2-algorithms.js',
  './shared/questions-bank/block-3-engineering.js',
  './shared/questions-bank/block-4-platforms.js',
  './shared/questions-bank/block-5-databases.js',
  './shared/questions-bank/block-6-bi.js',
  './shared/plantilla-examen.json',
  './shared/simulacro-maestro-50.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './modulos/simulador-examenes.html',
  './modulos/anki-arena.html',
  './modulos/01-complejidades-computacionales.html',
  './modulos/02-algoritmos-greedy-divide-venceras.html',
  './modulos/03-arboles-avl-autobalanceo.html',
  './modulos/04-bfs-dfs-recorridos-interactivos.html',
  './modulos/05-arquitectura-ansi-sparc-tres-niveles.html',
  './modulos/06-modelado-conceptual-erd-diagramas.html',
  './modulos/07-normalizacion-bases-datos.html',
  './modulos/08-taxonomia-sublenguajes-sql-ddl-dml-dcl-tcl.html',
  './modulos/09-acid-y-axiomas-de-armstrong.html',
  './modulos/10-diseno-fisico-indices-arbol-b-plus.html',
  './modulos/11-metodos-http-y-codigos-de-estado.html',
  './modulos/12-modelo-madurez-richardson-rest.html',
  './modulos/13-programacion-orientada-objetos.html',
  './modulos/14-patrones-diseno-gof.html',
  './modulos/15-reglas-oro-theo-mandel-ui-ux.html',
  './modulos/16-triangulo-de-hierro-gestion-proyectos.html',
  './modulos/17-edt-wbs-descomposicion-trabajo.html',
  './modulos/18-inyeccion-dependencias-constructores-primarios-csharp.html',
  './modulos/19-efcore-concurrencia-dbcontextfactory-optimizacion.html',
  './modulos/20-grpc-patrones-comunicacion-streaming.html',
  './modulos/21-graphql-over-under-fetching-hotchocolate.html',
  './modulos/22-jwt-autenticacion-tokens-seguridad.html',
  './modulos/23-ingenieria-software-error-defecto-falla-verificacion-validacion.html',
  './modulos/24-ingenieria-software-metricas-confiabilidad-rocof-pofod-mttf-kloc.html',
  './modulos/25-concurrencia-bajo-nivel-interlocked-monitor-primitivas-sincronizacion.html',
  './modulos/26-servicios-segundo-plano-resiliencia-polly-cache-dotnet.html',
  './modulos/27-estimacion-pert-ruta-critica-validacion-haynes.html',
  './modulos/28-direccionamiento-memoria-matrices-cairo.html',
  './modulos/29-modelado-sistema-executable-uml-sommerville.html',
  './modulos/30-estructuras-indexacion-arbol-bplus-vs-hash.html',
  './modulos/31-ingenieria-requerimientos-reglas-negocio.html',
  './modulos/32-tecnicas-pruebas-caja-negra-blanca.html',
  './modulos/33-arquitectura-android-componentes-ciclo-vida.html',
  './modulos/34-javascript-concurrente-event-loop-web-security.html',
  './modulos/35-modelos-procesos-espiral-boehm-rup.html',
  './modulos/36-business-intelligence-data-warehouse-etl.html'
];

// Instalación: Precaché de activos vitales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_PRECACHE).catch((err) => {
        console.warn('Advertencia en precache SW:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activación: Purgar cachés viejas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network First para documentos HTML; Stale-While-Revalidate para activos estáticos
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Ignorar métodos no GET o esquemas extraños (chrome-extension, etc.)
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  const isHtml = req.headers.get('accept') && req.headers.get('accept').includes('text/html');

  if (isHtml) {
    // Para navegación HTML: Network First con fallback a caché (asegura ver siempre la última versión online)
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const resClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, resClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(req).then((cached) => cached || caches.match('./index.html'));
        })
    );
    return;
  }

  // Para activos estáticos (CSS, JS, iconos, JSON): Cache First con revalidación en segundo plano
  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      const fetchPromise = fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const resClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, resClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
