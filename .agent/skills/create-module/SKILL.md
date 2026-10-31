---
name: create-module
description: >-
  Crea e integra nuevos módulos didácticos interactivos en la plataforma MaterialVisual
  garantizando reutilización de estilos, catálogo centralizado y navegación dinámica.
---

# Create Module Skill · MaterialVisual

Usa esta guía paso a paso cada vez que se solicite un nuevo módulo interactivo.

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
      /* Solo estilos específicos de este simulador o visualizador */
      .content-panel { display: none; animation: fadeIn 0.3s ease; }
      .content-panel.active { display: block; }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
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
        <p class="intro">Descripción introductoria...</p>
      </header>

      <!-- Pestañas de Navegación -->
      <nav class="nav-tabs" aria-label="Secciones del módulo">
        <!-- Botones con switchTab() -->
      </nav>

      <!-- Secciones de Contenido: Teoría, Simulador, Análisis, Calculadora, Quiz -->

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
  desc: "<Descripción de 1 o 2 líneas>",
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

### 4. Validar Sintaxis
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
