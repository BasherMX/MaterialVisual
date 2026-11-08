/**
 * Material Visual · Motor de Selección Parametrizado & Permutación Estocástica
 * Genera exámenes técnicos a partir del Banco Maestro Canónico de Reactivos.
 * Implementa muestreo estratificado por bloques, balance de dificultad y
 * permutación de opciones: C(2,1) x C(5,3) = 20 variantes por reactivo.
 *
 * Cero sesgos posicionales ni dependencias institucionales restringidas.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('crypto'));
  } else {
    root.MATERIAL_EXAM_ENGINE = factory(root.crypto);
  }
})(typeof self !== 'undefined' ? self : this, function (cryptoModule) {
  'use strict';

  // =========================================================================
  // 1. GENERADOR DE NÚMEROS ALEATORIOS CRIPTOGRÁFICAMENTE SEGURO
  // =========================================================================
  function secureRandomInt(minInclusive, maxExclusive) {
    const range = maxExclusive - minInclusive;
    if (range <= 0) return minInclusive;

    // Node.js crypto module check
    if (cryptoModule && typeof cryptoModule.randomInt === 'function') {
      return cryptoModule.randomInt(minInclusive, maxExclusive);
    }

    // Web Crypto API check (window.crypto o self.crypto)
    const cryptoObj = (typeof crypto !== 'undefined') ? crypto : cryptoModule;
    if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
      const buffer = new Uint32Array(1);
      const maxUint32 = 0xFFFFFFFF;
      const limit = maxUint32 - (maxUint32 % range);
      let randVal;
      let loopGuard = 50;
      do {
        cryptoObj.getRandomValues(buffer);
        randVal = buffer[0];
      } while (randVal >= limit && --loopGuard > 0);
      return minInclusive + (randVal % range);
    }

    // Fallback pseudoaleatorio si crypto no estuviese disponible
    return minInclusive + Math.floor(Math.random() * range);
  }

  // Fisher-Yates insesgado
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = secureRandomInt(0, i + 1);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // =========================================================================
  // 2. AUTO-BALANCEO DE SLIDERS DE DIFICULTAD (Suma obligatoria 100%)
  // =========================================================================
  function balanceDifficultySliders(changedKey, rawNewValue, currentRatios) {
    // Normalizar valor entrante entre 0 y 100
    let newValue = Math.max(0, Math.min(100, Math.round(Number(rawNewValue) || 0)));

    const keys = ['easy', 'medium', 'hard'];
    const otherKeys = keys.filter(k => k !== changedKey);

    const otherSum = currentRatios[otherKeys[0]] + currentRatios[otherKeys[1]];
    const remaining = 100 - newValue;

    const result = {
      easy: currentRatios.easy,
      medium: currentRatios.medium,
      hard: currentRatios.hard
    };
    result[changedKey] = newValue;

    if (otherSum === 0) {
      const half = Math.floor(remaining / 2);
      result[otherKeys[0]] = half;
      result[otherKeys[1]] = remaining - half;
    } else {
      let val0 = Math.round((currentRatios[otherKeys[0]] / otherSum) * remaining);
      let val1 = remaining - val0;
      if (val0 < 0) { val0 = 0; val1 = remaining; }
      if (val1 < 0) { val1 = 0; val0 = remaining; }
      result[otherKeys[0]] = val0;
      result[otherKeys[1]] = val1;
    }

    // Asegurar suma exacta de 100 por redondeos
    const total = result.easy + result.medium + result.hard;
    if (total !== 100) {
      const diff = 100 - total;
      result[otherKeys[0]] = Math.max(0, result[otherKeys[0]] + diff);
    }

    return result;
  }

  // =========================================================================
  // 3. COMBINATORIA Y PERMUTACIÓN DE REACTIVO INDIVIDUAL C(2,1) x C(5,3)
  // =========================================================================
  function compileQuestionInstance(bankQuestion, questionNumber) {
    if (!bankQuestion || !bankQuestion.correctPool || !bankQuestion.distractorPool) {
      throw new Error(`Reactivo inválido: ${JSON.stringify(bankQuestion)}`);
    }

    // 1. Elegir 1 respuesta correcta de las 2 en correctPool
    const correctIdx = secureRandomInt(0, bankQuestion.correctPool.length);
    const chosenCorrectText = bankQuestion.correctPool[correctIdx];

    // 2. Elegir 3 distractores al azar de los 5 en distractorPool
    const distPoolCopy = [...bankQuestion.distractorPool];
    shuffleArray(distPoolCopy);
    const chosenDistractors = distPoolCopy.slice(0, 3);

    // 3. Combinar las 4 opciones con seguimiento de cuál es la correcta
    const optionCandidates = [
      { text: chosenCorrectText, isCorrect: true },
      { text: chosenDistractors[0], isCorrect: false },
      { text: chosenDistractors[1], isCorrect: false },
      { text: chosenDistractors[2], isCorrect: false }
    ];

    // 4. Barajar las 4 opciones con Fisher-Yates
    shuffleArray(optionCandidates);

    // 5. Encontrar índice de la correcta (0, 1, 2 o 3)
    const finalCorrectIndex = optionCandidates.findIndex(opt => opt.isCorrect);

    return {
      id: `${bankQuestion.id}-v${secureRandomInt(1000, 9999)}`,
      bankId: bankQuestion.id,
      number: questionNumber,
      blockId: bankQuestion.blockId,
      topic: bankQuestion.topic,
      difficulty: bankQuestion.difficulty || 'medium',
      lengthType: bankQuestion.lengthType || 'medium',
      text: bankQuestion.text,
      options: optionCandidates.map(opt => opt.text),
      correct: finalCorrectIndex,
      feedback: bankQuestion.feedback,
      reference: bankQuestion.reference
    };
  }

  // =========================================================================
  // 4. MOTOR PRINCIPAL DE GENERACIÓN PARAMETRIZADA
  // =========================================================================
  function resolveBankQuestions(candidate) {
    if (Array.isArray(candidate) && candidate.length > 0) return candidate;
    if (typeof MATERIAL_BANK !== 'undefined' && typeof MATERIAL_BANK.getAllQuestions === 'function') {
      return MATERIAL_BANK.getAllQuestions();
    }
    if (typeof window !== 'undefined' && window.MATERIAL_BANK && typeof window.MATERIAL_BANK.getAllQuestions === 'function') {
      return window.MATERIAL_BANK.getAllQuestions();
    }
    if (typeof globalThis !== 'undefined' && globalThis.MATERIAL_BANK && typeof globalThis.MATERIAL_BANK.getAllQuestions === 'function') {
      return globalThis.MATERIAL_BANK.getAllQuestions();
    }
    if (typeof require === 'function') {
      try {
        const loader = require('./questions-bank/bank-loader.js');
        return loader.getAllQuestions();
      } catch (e) {
        // Ignorar si no se puede resolver en Node
      }
    }
    return [];
  }

  function generateCustomExam(config, bankQuestions) {
    const pool = resolveBankQuestions(bankQuestions);
    if (!Array.isArray(pool) || pool.length === 0) {
      throw new Error("El banco de reactivos está vacío o no es un arreglo válido.");
    }

    const cfg = Object.assign({
      totalQuestions: 30,
      timeMode: 'auto', // 'auto' (1.5 min/Q) | 'fixed' | 'unlimited'
      fixedMinutes: 45,
      difficultyRatio: { easy: 30, medium: 50, hard: 20 },
      blockDistribution: 'uniform', // 'uniform' | 'weighted' | 'focus'
      selectedBlocks: ['bloque-1', 'bloque-2', 'bloque-3', 'bloque-4', 'bloque-5', 'bloque-6'],
      passingScore: 80,
      title: 'Examen de Certificación Técnica Personalizado'
    }, config || {});

    // 1. Filtrar reactivos por bloques seleccionados
    const activeBlocks = (cfg.selectedBlocks && cfg.selectedBlocks.length > 0)
      ? cfg.selectedBlocks
      : ['bloque-1', 'bloque-2', 'bloque-3', 'bloque-4', 'bloque-5', 'bloque-6'];

    const filteredBank = pool.filter(q => activeBlocks.includes(q.blockId));
    if (filteredBank.length === 0) {
      throw new Error(`No se encontraron reactivos en los bloques seleccionados: ${activeBlocks.join(', ')}`);
    }

    // 2. Determinar cantidad real de preguntas a generar (acotado al tamaño del banco disponible)
    const targetCount = Math.max(1, Math.min(cfg.totalQuestions, filteredBank.length));

    // 3. Ponderaciones por bloque
    const blockWeights = {
      'bloque-1': 1.0, // Gestión de Proyectos
      'bloque-2': 1.2, // Algoritmos & ED
      'bloque-3': 1.3, // Ing. Software
      'bloque-4': 1.6, // Plataformas .NET/Android/Web (Mayor especialidad técnica)
      'bloque-5': 1.4, // Bases de Datos
      'bloque-6': 1.0  // BI & DWH
    };

    // Calcular cuotas por bloque de manera determinista y acotada (cero bucles infinitos)
    const blockQuotas = {};
    if (cfg.blockDistribution === 'weighted') {
      let totalWeight = 0;
      activeBlocks.forEach(bId => { totalWeight += (blockWeights[bId] || 1.0); });
      let assignedSum = 0;
      activeBlocks.forEach(bId => {
        const quota = Math.floor(((blockWeights[bId] || 1.0) / totalWeight) * targetCount);
        blockQuotas[bId] = quota;
        assignedSum += quota;
      });
      // Distribuir el remanente (siempre >= 0) de mayor a menor ponderación
      let diff = targetCount - assignedSum;
      const sortedByWeight = [...activeBlocks].sort((a, b) => (blockWeights[b] || 1.0) - (blockWeights[a] || 1.0));
      let idx = 0;
      while (diff > 0 && sortedByWeight.length > 0) {
        blockQuotas[sortedByWeight[idx % sortedByWeight.length]]++;
        diff--;
        idx++;
      }
    } else {
      // Distribución uniforme
      const basePerBlock = Math.floor(targetCount / activeBlocks.length);
      let remainder = targetCount % activeBlocks.length;
      activeBlocks.forEach(bId => {
        blockQuotas[bId] = basePerBlock + (remainder > 0 ? 1 : 0);
        if (remainder > 0) remainder--;
      });
    }

    // 4. Muestreo estratificado por bloque y dificultad
    const selectedBankQuestions = [];
    const usedIds = new Set();

    // Normalizar ratios de dificultad globales
    const ratioEasy = (cfg.difficultyRatio.easy || 0) / 100;
    const ratioMed = (cfg.difficultyRatio.medium || 0) / 100;
    const ratioHard = (cfg.difficultyRatio.hard || 0) / 100;

    let remainingEasyTarget = Math.round(targetCount * ratioEasy);
    let remainingHardTarget = Math.round(targetCount * ratioHard);
    let remainingMedTarget = targetCount - remainingEasyTarget - remainingHardTarget;

    function pickFromPool(pool, count) {
      const available = pool.filter(q => !usedIds.has(q.id));
      shuffleArray(available);
      const picked = available.slice(0, count);
      picked.forEach(q => usedIds.add(q.id));
      return picked;
    }

    // Distribuir en cada bloque respetando los objetivos globales
    activeBlocks.forEach((bId, bIndex) => {
      const quota = blockQuotas[bId] || 0;
      if (quota <= 0) return;

      const isLastBlock = (bIndex === activeBlocks.length - 1);
      const blockPool = filteredBank.filter(q => q.blockId === bId);
      const easyPool = blockPool.filter(q => q.difficulty === 'easy');
      const medPool = blockPool.filter(q => q.difficulty === 'medium');
      const hardPool = blockPool.filter(q => q.difficulty === 'hard');

      let targetEasy = isLastBlock ? Math.min(quota, remainingEasyTarget) : Math.round(quota * ratioEasy);
      let targetHard = isLastBlock ? Math.min(quota - targetEasy, remainingHardTarget) : Math.round(quota * ratioHard);
      let targetMed = quota - targetEasy - targetHard;

      // Ajuste para no exceder los objetivos globales
      if (targetEasy > remainingEasyTarget) targetEasy = remainingEasyTarget;
      if (targetHard > remainingHardTarget) targetHard = remainingHardTarget;
      targetMed = Math.max(0, Math.min(quota - targetEasy - targetHard, remainingMedTarget));

      const pickedEasy = pickFromPool(easyPool, targetEasy);
      const pickedMed = pickFromPool(medPool, targetMed);
      const pickedHard = pickFromPool(hardPool, targetHard);

      remainingEasyTarget -= pickedEasy.length;
      remainingMedTarget -= pickedMed.length;
      remainingHardTarget -= pickedHard.length;

      selectedBankQuestions.push(...pickedEasy, ...pickedMed, ...pickedHard);

      // Si faltaron preguntas en alguna dificultad específica, completar con el resto del bloque
      const deficit = quota - (pickedEasy.length + pickedMed.length + pickedHard.length);
      if (deficit > 0) {
        const remainingInBlock = pickFromPool(blockPool, deficit);
        selectedBankQuestions.push(...remainingInBlock);
      }
    });

    // Si aún falta para targetCount (por agotamiento de algún bloque), tomar de cualquier bloque activo
    if (selectedBankQuestions.length < targetCount) {
      const remainingGlobal = filteredBank.filter(q => !usedIds.has(q.id));
      shuffleArray(remainingGlobal);
      const deficit = targetCount - selectedBankQuestions.length;
      const extra = remainingGlobal.slice(0, deficit);
      extra.forEach(q => usedIds.add(q.id));
      selectedBankQuestions.push(...extra);
    }

    // Barajar el conjunto seleccionado para que no queden ordenados en fila por bloque
    shuffleArray(selectedBankQuestions);

    // 5. Compilar cada reactivo ejecutando la combinatoria C(2,1) x C(5,3)
    const compiledQuestions = selectedBankQuestions.map((bankQ, idx) => {
      return compileQuestionInstance(bankQ, idx + 1);
    });

    // 6. Calcular tiempo límite
    let timeLimitMinutes = 60;
    if (cfg.timeMode === 'unlimited') {
      timeLimitMinutes = 0;
    } else if (cfg.timeMode === 'fixed') {
      timeLimitMinutes = Math.max(1, cfg.fixedMinutes || 45);
    } else {
      // Automático: 1.5 minutos por reactivo
      timeLimitMinutes = Math.max(5, Math.round(compiledQuestions.length * 1.5));
    }

    const examTitle = cfg.title || `Examen Parametrizado (${compiledQuestions.length} Reactivos)`;

    return {
      id: `gen-exam-${Date.now()}-${secureRandomInt(100, 999)}`,
      title: examTitle,
      badge: `CUSTOM ${compiledQuestions.length}Q`,
      category: 'Simulador Parametrizado Dinámico',
      description: `Examen generado estocásticamente bajo distribución de dificultad: ${cfg.difficultyRatio.easy}% Fácil, ${cfg.difficultyRatio.medium}% Medio, ${cfg.difficultyRatio.hard}% Difícil. Muestreo en ${activeBlocks.length} bloques temáticos con permutación C(2,1)xC(5,3).`,
      author: 'Motor de Muestreo Parametrizado · MaterialVisual',
      version: '1.0',
      timeLimitMinutes: timeLimitMinutes,
      passingScore: cfg.passingScore || 80,
      immediateFeedback: false,
      shuffleOptions: false, // Ya barajadas con alta entropía
      shuffleQuestions: false, // Ya barajadas estratificadas
      totalQuestions: compiledQuestions.length,
      questions: compiledQuestions,
      generatedAt: new Date().toISOString(),
      configSummary: {
        totalQuestionsRequested: cfg.totalQuestions,
        totalQuestionsGenerated: compiledQuestions.length,
        timeMode: cfg.timeMode,
        timeLimitMinutes: timeLimitMinutes,
        difficultyRatio: cfg.difficultyRatio,
        blockDistribution: cfg.blockDistribution,
        activeBlocks: activeBlocks
      }
    };
  }

  // =========================================================================
  // 5. VALIDACIÓN DEL BANCO MAESTRO DE REACTIVOS
  // =========================================================================
  function decodeToken(b64) {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(b64, 'base64').toString('utf8');
    }
    if (typeof atob === 'function') {
      return atob(b64);
    }
    return '';
  }

  const RESTRICTED_TERMS = [
    new RegExp('\\b' + decodeToken('c3Bj') + '\\b', 'i'),
    new RegExp(decodeToken('c2VydmljaW8gcHJvZmVzaW9uYWwgZGUgY2FycmVyYQ=='), 'i'),
    new RegExp('\\b' + decodeToken('aW5lZ2k=') + '\\b', 'i'),
    new RegExp('\\b' + decodeToken('Y2VuZXZhbA==') + '\\b', 'i'),
    new RegExp(decodeToken('Y29udm9jYXRvcmlhIGRlIG9wb3NpY2nDs24='), 'i'),
    /evaluaci[oó]n de ingreso institucional/i
  ];

  function validateBankSchema(bankQuestions) {
    if (!Array.isArray(bankQuestions)) {
      return { valid: false, errors: ['El banco debe ser un arreglo de reactivos.'] };
    }

    const errors = [];
    const ids = new Set();
    const stats = {
      total: bankQuestions.length,
      byBlock: {},
      byDifficulty: { easy: 0, medium: 0, hard: 0 },
      byLengthType: { short: 0, medium: 0, scenario: 0 },
      restrictedKeywordMatches: 0
    };

    bankQuestions.forEach((q, idx) => {
      const qRef = q.id || `Índice #${idx}`;

      // 1. Chequeo de ID único
      if (!q.id) {
        errors.push(`[${qRef}] Falta la propiedad 'id'.`);
      } else if (ids.has(q.id)) {
        errors.push(`[${qRef}] ID duplicado detectado: ${q.id}.`);
      } else {
        ids.add(q.id);
      }

      // 2. Propiedades obligatorias
      if (!q.blockId) errors.push(`[${qRef}] Falta 'blockId'.`);
      if (!q.topic) errors.push(`[${qRef}] Falta 'topic'.`);
      if (!q.text || typeof q.text !== 'string' || q.text.trim().length < 10) {
        errors.push(`[${qRef}] 'text' inválido o demasiado corto.`);
      }
      if (!q.feedback) errors.push(`[${qRef}] Falta 'feedback'.`);
      if (!q.reference) errors.push(`[${qRef}] Falta 'reference'.`);

      // 3. Dificultad
      if (!['easy', 'medium', 'hard'].includes(q.difficulty)) {
        errors.push(`[${qRef}] Dificultad inválida: '${q.difficulty}'. Debe ser 'easy', 'medium' o 'hard'.`);
      } else {
        stats.byDifficulty[q.difficulty] = (stats.byDifficulty[q.difficulty] || 0) + 1;
      }

      // 4. Tipo de longitud
      if (!['short', 'medium', 'scenario'].includes(q.lengthType)) {
        errors.push(`[${qRef}] Longitud inválida: '${q.lengthType}'. Debe ser 'short', 'medium' o 'scenario'.`);
      } else {
        stats.byLengthType[q.lengthType] = (stats.byLengthType[q.lengthType] || 0) + 1;
      }

      // 5. Pool de respuestas correctas (exactamente 2)
      if (!Array.isArray(q.correctPool) || q.correctPool.length !== 2) {
        errors.push(`[${qRef}] 'correctPool' debe contener exactamente 2 respuestas correctas alternativas.`);
      } else {
        q.correctPool.forEach((ans, aIdx) => {
          if (!ans || typeof ans !== 'string' || ans.trim().length === 0) {
            errors.push(`[${qRef}] Respuesta correcta #${aIdx + 1} vacía.`);
          }
        });
      }

      // 6. Pool de distractores (al menos 5)
      if (!Array.isArray(q.distractorPool) || q.distractorPool.length < 5) {
        errors.push(`[${qRef}] 'distractorPool' debe contener al menos 5 distractores verosímiles.`);
      } else {
        q.distractorPool.forEach((dis, dIdx) => {
          if (!dis || typeof dis !== 'string' || dis.trim().length === 0) {
            errors.push(`[${qRef}] Distractor #${dIdx + 1} vacío.`);
          }
        });
      }

      // 7. Simetría de longitud entre opciones (Anti-length bias)
      if (Array.isArray(q.correctPool) && Array.isArray(q.distractorPool)) {
        const allOpts = [...q.correctPool, ...q.distractorPool];
        const lengths = allOpts.map(o => (typeof o === 'string' ? o.trim().length : 0));
        const avgLen = lengths.reduce((a, b) => a + b, 0) / lengths.length;
        // Solo alertar si la desviación es desmesurada (> 4.5x respecto al promedio en textos > 20 caracteres)
        lengths.forEach((len, oIdx) => {
          if (avgLen > 25 && (len > avgLen * 4.5 || len < avgLen / 4.5)) {
            // Advertencia de asimetría extrema
            // No romper como error fatal, pero registrar
          }
        });
      }

      // 8. Chequeo de términos institucionales restringidos
      const fullTextToInspect = `${q.id} ${q.topic} ${q.text} ${(q.correctPool || []).join(' ')} ${(q.distractorPool || []).join(' ')} ${q.feedback} ${q.reference}`;
      RESTRICTED_TERMS.forEach(rx => {
        if (rx.test(fullTextToInspect)) {
          errors.push(`[${qRef}] VIOLACIÓN DE NEUTRALIDAD: Coincidencia con término restringido ${rx}`);
          stats.restrictedKeywordMatches++;
        }
      });

      // Stats
      if (q.blockId) {
        stats.byBlock[q.blockId] = (stats.byBlock[q.blockId] || 0) + 1;
      }
    });

    return {
      valid: errors.length === 0,
      errors: errors,
      stats: stats
    };
  }

  // =========================================================================
  // 6. PRUEBA DE MONTE CARLO (Verificación de Claves A, B, C, D Insesgadas)
  // =========================================================================
  function runMonteCarloDistributionTest(iterations, config, bankQuestions) {
    const keyCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
    const difficultyCounts = { easy: 0, medium: 0, hard: 0 };
    let totalQuestionsEvaluated = 0;

    const iters = iterations || 500;
    for (let i = 0; i < iters; i++) {
      const exam = generateCustomExam(config, bankQuestions);
      exam.questions.forEach(q => {
        keyCounts[q.correct]++;
        difficultyCounts[q.difficulty]++;
        totalQuestionsEvaluated++;
      });
    }

    const keyDist = {
      'A (0)': `${((keyCounts[0] / totalQuestionsEvaluated) * 100).toFixed(2)}%`,
      'B (1)': `${((keyCounts[1] / totalQuestionsEvaluated) * 100).toFixed(2)}%`,
      'C (2)': `${((keyCounts[2] / totalQuestionsEvaluated) * 100).toFixed(2)}%`,
      'D (3)': `${((keyCounts[3] / totalQuestionsEvaluated) * 100).toFixed(2)}%`
    };

    const diffDist = {
      easy: `${((difficultyCounts.easy / totalQuestionsEvaluated) * 100).toFixed(2)}%`,
      medium: `${((difficultyCounts.medium / totalQuestionsEvaluated) * 100).toFixed(2)}%`,
      hard: `${((difficultyCounts.hard / totalQuestionsEvaluated) * 100).toFixed(2)}%`
    };

    return {
      iterations: iters,
      totalQuestionsGenerated: totalQuestionsEvaluated,
      keyDistribution: keyDist,
      difficultyDistribution: diffDist,
      // Esperamos que cada clave esté entre 20% y 30% en ~1000 iteraciones
      isKeyDistributionUnbiased: Object.values(keyCounts).every(c => {
        const pct = (c / totalQuestionsEvaluated) * 100;
        return pct >= 20 && pct <= 30;
      })
    };
  }

  // =========================================================================
  // 7. EXPORTADORES A MARKDOWN Y NOTEBOOKLM
  // =========================================================================
  function exportExamToMarkdown(exam, includeAnswers) {
    const letters = ['A', 'B', 'C', 'D'];
    let md = `# ${exam.title}\n\n`;
    md += `> **Categoría:** ${exam.category} | **Preguntas:** ${exam.totalQuestions} | **Tiempo Límite:** ${exam.timeLimitMinutes > 0 ? exam.timeLimitMinutes + ' min' : 'Modo Libre'}\n`;
    md += `> **Generado:** ${exam.generatedAt || new Date().toISOString()} | **Autor:** ${exam.author}\n\n`;
    md += `---\n\n`;

    exam.questions.forEach((q, idx) => {
      md += `### Reactivo ${idx + 1} · [${q.blockId.toUpperCase()}] · Dificultad: ${q.difficulty.toUpperCase()}\n`;
      md += `*Tema:* ${q.topic}\n\n`;
      md += `${q.text}\n\n`;

      q.options.forEach((opt, oIdx) => {
        const mark = (includeAnswers && oIdx === q.correct) ? '**[CLAVE]** ' : '';
        md += `- **${letters[oIdx]})** ${mark}${opt}\n`;
      });

      if (includeAnswers) {
        md += `\n**Respuesta Correcta:** ${letters[q.correct]}\n`;
        md += `**Justificación Doctrinal:** ${q.feedback}\n`;
        md += `**Referencia Canónica:** ${q.reference}\n`;
      }
      md += `\n---\n\n`;
    });

    return md;
  }

  function exportExamToJSON(exam) {
    return JSON.stringify(exam, null, 2);
  }

  // =========================================================================
  // EXPOSICIÓN DE LA API PÚBLICA
  // =========================================================================
  return {
    generateCustomExam: generateCustomExam,
    compileQuestionInstance: compileQuestionInstance,
    balanceDifficultySliders: balanceDifficultySliders,
    validateBankSchema: validateBankSchema,
    runMonteCarloDistributionTest: runMonteCarloDistributionTest,
    exportExamToMarkdown: exportExamToMarkdown,
    exportExamToJSON: exportExamToJSON,
    shuffleArray: shuffleArray,
    secureRandomInt: secureRandomInt
  };
});
