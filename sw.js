/**
 * Material Visual · Service Worker
 * Provee funcionamiento Offline y Caché Resiliente para toda la plataforma.
 * Estrategia: Cache First con Stale-While-Revalidate para recursos estáticos.
 */
const CACHE_NAME = 'material-visual-cache-v3';

const STATIC_PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './shared/theme.css',
  './shared/nav.js',
  './shared/modules-data.js',
  './shared/exams-data.js',
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
  './modulos/30-estructuras-indexacion-arbol-bplus-vs-hash.html'
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

// Fetch: Stale-While-Revalidate con Fallback a Caché
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Ignorar métodos no GET o esquemas extraños (chrome-extension, etc.)
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

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
        .catch(() => {
          // Si falla la red y no hay caché, retornar fallback offline si es HTML
          if (cachedResponse) return cachedResponse;
          if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });

      return cachedResponse || fetchPromise;
    })
  );
});
