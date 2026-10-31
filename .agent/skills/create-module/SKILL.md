---
name: create-module
description: >-
  Crea e integra nuevos módulos didácticos interactivos en la plataforma MaterialVisual
  garantizando reutilización de estilos, catálogo centralizado y navegación dinámica.
---

# Create Module Skill · MaterialVisual

Usa esta guía paso a paso cada vez que se solicite un nuevo módulo interactivo. Asegura siempre **interactividad de estudio didáctica** y **diseño Mobile-First**.

## Principios Clave a Implementar
1. **Interactividad Didáctica Activa:** Diseñado para que el usuario aprenda experimentando. Incluye simulador visual en vivo, presets de casos típicos/fallos, consola de auditoría explicativa y quiz formativo con retroalimentación detallada.
2. **Mobile-First Estricto:** Compatible desde 320px de ancho. Grids colapsables a 1 columna en móvil, touch targets cómodos (>= 44px), tablas y árboles con scroll táctil protegido.

---

## Procedimiento de 5 Pasos

### 1. Creación del Archivo HTML
Crea el archivo en `modulos/<XX>-<slug>.html` utilizando la plantilla base:
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título del Módulo | Laboratorio Interactivo</title>
    <meta name="description" content="Descripción concisa del módulo..." />
    <link rel="stylesheet" href="../shared/theme.css" />
    <style>
      /* Estilos específicos de este simulador */
      .content-panel { display: none; animation: fadeIn 0.3s ease; }
      .content-panel.active { display: block; }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

      /* Responsive Mobile-First específico del módulo */
      @media (max-width: 768px) {
        .custom-grid { grid-template-columns: 1fr !important; }
        .custom-controls { flex-direction: column; align-items: stretch; }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <a href="../index.html" class="btn-back-index"><span>←</span> Volver al Índice Principal</a>
      <header>
        <div>
          <p class="eyebrow">Categoría · Subtítulo</p>
          <h1>Título Principal</h1>
        </div>
        <p class="intro">Descripción introductoria clara y pedagógica...</p>
      </header>

      <!-- Pestañas de Navegación -->
      <nav class="nav-tabs" aria-label="Secciones del módulo">
        <!-- Botones con switchTab() con min-height táctil -->
      </nav>

      <!-- Secciones de Contenido (5 Pestañas Didácticas):
           1. Teoría & Taxonomía
           2. Simulador Interactivo Reactivo en Vivo
           3. Casos de Estudio / Discrepancias / Duelos
           4. Calculadora / Banco de Pruebas Cuantitativo
           5. Laboratorio de Diagnóstico (Quiz formativo)
      -->

      <footer class="global-footer">
        Material Didáctico e Interactivo · MaterialVisual
      </footer>
    </main>

    <script>
      // Lógica de simulación interactiva reactiva y quiz
    </script>
    <script src="../shared/modules-data.js"></script>
    <script src="../shared/nav.js"></script>
  </body>
</html>
```

### 2. Registrar en `shared/modules-data.js`
Añade la nueva entrada al array `MATERIAL_MODULES`:
```javascript
{
  id: "<XX>",
  slug: "<slug>",
  filename: "<XX>-<slug>.html",
  theme: "theme-<cyan|gold|green|coral|purple|blue|amber>",
  category: "<Estructuras & Algoritmos|Bases de Datos|Arquitectura & Web|Diseño & UI/UX|Gestión de Proyectos>",
  badge: "<XX> · <Etiqueta>",
  title: "<Título Principal>",
  desc: "<Descripción concisa de 1 o 2 líneas>",
  features: [
    "<Característica 1>",
    "<Característica 2>",
    "<Característica 3>"
  ],
  btnId: "btn-goto-<nombre>"
}
```

### 3. Actualizar `index.html` y `README.md`
- Añade el enlace `<a href="modulos/<XX>-<slug>.html">` en el bloque `<noscript>` de `index.html`.
- Añade la viñeta con el número y título en `README.md`.

### 4. Validar Sintaxis y Responsividad
Ejecuta la validación sintáctica de JavaScript:
```powershell
node -e "const fs = require('fs'); const content = fs.readFileSync('./modulos/<XX>-<slug>.html', 'utf8'); const m = content.match(/<script>([\s\S]*?)<\/script>/); if (m) new Function(m[1]);"
```

### 5. Confirmar y Desplegar
```powershell
git add .
git commit -m "feat: agregar modulo <XX> (<titulo>)"
git push origin main
```
