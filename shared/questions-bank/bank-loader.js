/**
 * Material Visual · Cargador y Registro Maestro del Banco de Reactivos
 * Unifica los 6 Bloques Canónicos de Reactivos en una API homogénea.
 * Compatible con entornos Browser (Window) y Servidor (Node.js).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    const b1 = require('./block-1-projects.js');
    const b2 = require('./block-2-algorithms.js');
    const b3 = require('./block-3-engineering.js');
    const b4 = require('./block-4-platforms.js');
    const b5 = require('./block-5-databases.js');
    const b6 = require('./block-6-bi.js');
    module.exports = factory([b1, b2, b3, b4, b5, b6], root);
  } else {
    root.MATERIAL_BANK = factory(null, root);
  }
})(typeof self !== 'undefined' ? self : (typeof window !== 'undefined' ? window : this), function (nodeBlocks, rootScope) {
  'use strict';

  const globalScope = rootScope || (typeof self !== 'undefined' ? self : (typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this)));
  const blockRegistry = {};

  const BANK_METADATA = [
    {
      id: 'bloque-1',
      title: 'Bloque I · Gestión de Proyectos',
      theme: 'Marion E. Haynes · Alcance, Costo, Tiempo, EDT y Validación',
      shortName: 'Gestión Proyectos',
      badge: 'B1 · Haynes'
    },
    {
      id: 'bloque-2',
      title: 'Bloque II · Fundamentos & Algoritmos',
      theme: 'Joyanes, Cairó, MIT 6.006, Noback · Big-O, Árboles, Grafos y Memoria',
      shortName: 'Algoritmos & ED',
      badge: 'B2 · Algoritmos'
    },
    {
      id: 'bloque-3',
      title: 'Bloque III · Ingeniería de Software & Calidad',
      theme: 'Pressman, Sommerville, Toledo · Requerimientos, Testing y Métricas',
      shortName: 'Ing. Software',
      badge: 'B3 · Software Eng'
    },
    {
      id: 'bloque-4',
      title: 'Bloque IV · Plataformas .NET 8, Android & Web',
      theme: 'Price, Griffiths, MDN · Concurrencia, Ciclos de Vida, REST y gRPC',
      shortName: 'Plataformas & Web',
      badge: 'B4 · .NET/Android/Web'
    },
    {
      id: 'bloque-5',
      title: 'Bloque V · Bases de Datos Relacionales & Físicas',
      theme: 'Catherine Ricardo, Mercedes Marqués, Andy Oppel · Normalización, ACID e Índices',
      shortName: 'Bases de Datos',
      badge: 'B5 · Relacional & SQL'
    },
    {
      id: 'bloque-6',
      title: 'Bloque VI · Business Intelligence & DWH',
      theme: 'Luis Joyanes Aguilar · Arquitectura Kimball/Inmon, Modelado Dimensional y ETL',
      shortName: 'BI & DWH',
      badge: 'B6 · BI Joyanes'
    }
  ];

  function registerBlock(blockId, questions) {
    if (!blockId || !Array.isArray(questions)) return;
    blockRegistry[blockId] = questions;
  }

  function syncFromGlobalScope() {
    if (!globalScope) return;
    for (let i = 1; i <= 6; i++) {
      const bId = 'bloque-' + i;
      if (!blockRegistry[bId]) {
        const globalVar = globalScope['MATERIAL_BLOCK_' + i];
        if (Array.isArray(globalVar) && globalVar.length > 0) {
          registerBlock(bId, globalVar);
        }
      }
    }
  }

  // Si se invocó desde Node con los bloques precargados
  if (Array.isArray(nodeBlocks)) {
    nodeBlocks.forEach((blockQuestions, idx) => {
      const bId = 'bloque-' + (idx + 1);
      registerBlock(bId, blockQuestions);
    });
  } else {
    syncFromGlobalScope();
  }

  function getAllQuestions() {
    syncFromGlobalScope();
    let all = [];
    Object.keys(blockRegistry).forEach(bId => {
      all = all.concat(blockRegistry[bId]);
    });
    return all;
  }

  function getQuestionsByBlock(blockId) {
    syncFromGlobalScope();
    return blockRegistry[blockId] || [];
  }

  function getBlocksMetadata() {
    syncFromGlobalScope();
    return BANK_METADATA.map(meta => {
      const count = (blockRegistry[meta.id] || []).length;
      return Object.assign({}, meta, { questionCount: count });
    });
  }

  return {
    registerBlock: registerBlock,
    getAllQuestions: getAllQuestions,
    getQuestionsByBlock: getQuestionsByBlock,
    getBlocksMetadata: getBlocksMetadata,
    registry: blockRegistry,
    metadata: BANK_METADATA
  };
});
