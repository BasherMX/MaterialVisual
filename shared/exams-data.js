/**
 * Material Visual · Banco Canónico de Exámenes Integradores de Arquitectura e Ingeniería
 * Provee evaluaciones formales de opción múltiple estructuradas conforme a la bibliografía oficial.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MATERIAL_EXAMS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    {
      "id": "examen-control-si-no-30",
      "title": "Examen de Control y Verificación Técnica · 30 Reactivos SI / NO",
      "badge": "CONTROL VERIFICACIÓN",
      "category": "Prueba de Calibración",
      "description": "Examen sintético de 30 reactivos con 3 opciones 'NO' y 1 opción 'SI' (la correcta) para verificar al 100% la exactitud del motor de calificación, el barajado dinámico y la descarga del reporte.",
      "author": "Control de Calidad del Simulador",
      "version": "1.0",
      "timeLimitMinutes": 15,
      "passingScore": 80,
      "immediateFeedback": false,
      "shuffleOptions": true,
      "shuffleQuestions": false,
      "totalQuestions": 30,
      "questions": [
            {
                  "id": "test-sino-q01",
                  "number": 1,
                  "moduleRef": "Control-01",
                  "text": "Reactivo de Prueba #1: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #1, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q02",
                  "number": 2,
                  "moduleRef": "Control-02",
                  "text": "Reactivo de Prueba #2: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #2, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q03",
                  "number": 3,
                  "moduleRef": "Control-03",
                  "text": "Reactivo de Prueba #3: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #3, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q04",
                  "number": 4,
                  "moduleRef": "Control-04",
                  "text": "Reactivo de Prueba #4: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #4, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q05",
                  "number": 5,
                  "moduleRef": "Control-05",
                  "text": "Reactivo de Prueba #5: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #5, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q06",
                  "number": 6,
                  "moduleRef": "Control-06",
                  "text": "Reactivo de Prueba #6: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #6, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q07",
                  "number": 7,
                  "moduleRef": "Control-07",
                  "text": "Reactivo de Prueba #7: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #7, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q08",
                  "number": 8,
                  "moduleRef": "Control-08",
                  "text": "Reactivo de Prueba #8: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #8, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q09",
                  "number": 9,
                  "moduleRef": "Control-09",
                  "text": "Reactivo de Prueba #9: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #9, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q10",
                  "number": 10,
                  "moduleRef": "Control-10",
                  "text": "Reactivo de Prueba #10: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #10, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q11",
                  "number": 11,
                  "moduleRef": "Control-11",
                  "text": "Reactivo de Prueba #11: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #11, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q12",
                  "number": 12,
                  "moduleRef": "Control-12",
                  "text": "Reactivo de Prueba #12: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #12, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q13",
                  "number": 13,
                  "moduleRef": "Control-13",
                  "text": "Reactivo de Prueba #13: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #13, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q14",
                  "number": 14,
                  "moduleRef": "Control-14",
                  "text": "Reactivo de Prueba #14: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #14, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q15",
                  "number": 15,
                  "moduleRef": "Control-15",
                  "text": "Reactivo de Prueba #15: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #15, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q16",
                  "number": 16,
                  "moduleRef": "Control-16",
                  "text": "Reactivo de Prueba #16: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #16, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q17",
                  "number": 17,
                  "moduleRef": "Control-17",
                  "text": "Reactivo de Prueba #17: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #17, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q18",
                  "number": 18,
                  "moduleRef": "Control-18",
                  "text": "Reactivo de Prueba #18: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #18, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q19",
                  "number": 19,
                  "moduleRef": "Control-19",
                  "text": "Reactivo de Prueba #19: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #19, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q20",
                  "number": 20,
                  "moduleRef": "Control-20",
                  "text": "Reactivo de Prueba #20: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #20, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q21",
                  "number": 21,
                  "moduleRef": "Control-21",
                  "text": "Reactivo de Prueba #21: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #21, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q22",
                  "number": 22,
                  "moduleRef": "Control-22",
                  "text": "Reactivo de Prueba #22: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #22, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q23",
                  "number": 23,
                  "moduleRef": "Control-23",
                  "text": "Reactivo de Prueba #23: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #23, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q24",
                  "number": 24,
                  "moduleRef": "Control-24",
                  "text": "Reactivo de Prueba #24: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #24, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q25",
                  "number": 25,
                  "moduleRef": "Control-25",
                  "text": "Reactivo de Prueba #25: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #25, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q26",
                  "number": 26,
                  "moduleRef": "Control-26",
                  "text": "Reactivo de Prueba #26: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #26, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q27",
                  "number": 27,
                  "moduleRef": "Control-27",
                  "text": "Reactivo de Prueba #27: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 2,
                  "feedback": "En el reactivo #27, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción C).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q28",
                  "number": 28,
                  "moduleRef": "Control-28",
                  "text": "Reactivo de Prueba #28: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        }
                  ],
                  "correct": 3,
                  "feedback": "En el reactivo #28, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción D).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q29",
                  "number": 29,
                  "moduleRef": "Control-29",
                  "text": "Reactivo de Prueba #29: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 0,
                  "feedback": "En el reactivo #29, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción A).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            },
            {
                  "id": "test-sino-q30",
                  "number": 30,
                  "moduleRef": "Control-30",
                  "text": "Reactivo de Prueba #30: Selecciona la opción afirmativa ('SI'). Todas las demás opciones indican 'NO'.",
                  "options": [
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "SI",
                              "isCorrect": true
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        },
                        {
                              "text": "NO",
                              "isCorrect": false
                        }
                  ],
                  "correct": 1,
                  "feedback": "En el reactivo #30, la opción correcta es inequívocamente 'SI' (ubicación inicial: opción B).",
                  "reference": "Banco de Prueba y Calibración Técnica"
            }
      ]
},
    {
      "id": "simulacro-maestro-50-preguntas",
      "title": "Simulacro Maestro Nacional · 50 Reactivos de Certificación en Desarrollo & Arquitectura",
      "badge": "SIMULACRO MAESTRO 50Q",
      "category": "Evaluación Integral de Jefatura",
      "description": "Evaluación exhaustiva de 50 reactivos de opción múltiple con simetría estricta anti-sesgo y rigor doctrinal absoluto, cubriendo las 6 áreas canónicas de la bibliografía oficial: Gestión de Proyectos (Haynes), Fundamentos de Programación y Algoritmos, Ingeniería de Software (SWEBOK v4/Sommerville), Plataformas Móviles/Web/.NET 8, Bases de Datos Relacionales y Business Intelligence (Joyanes).",
      "author": "Comité Técnico de Evaluación & Arquitectura de Software",
      "version": "3.0",
      "timeLimitMinutes": 120,
      "passingScore": 80,
      "immediateFeedback": false,
      "shuffleOptions": true,
      "shuffleQuestions": true,
      "totalQuestions": 50,
      "questions": [
            {
                  "id": "sim-master-q01",
                  "number": 1,
                  "moduleRef": "Gestión de Proyectos · Haynes Cap. 1",
                  "text": "De acuerdo con Marion E. Haynes en Administración de Proyectos, al definir los objetivos formales de un proyecto de desarrollo de software, ¿cuál es el criterio metodológico para asegurar que un objetivo esté adecuadamente formulado?",
                  "options": [
                        "Debe enunciar con claridad el resultado final esperado cuantificable, el costo límite admisible y la fecha de terminación sin prescribir los métodos de implementación.",
                        "Debe detallar cronológicamente todas las subtareas del cronograma diario, los diagramas de flujo operativos y la asignación específica de los recursos humanos individuales del equipo.",
                        "Debe redactarse de forma abierta y cualitativa para admitir cambios continuos de alcance durante el ciclo de vida sin necesidad de acuerdos con patrocinadores del proyecto.",
                        "Debe concentrarse prioritariamente en la justificación presupuestal contable y en el organigrama administrativo general omitiendo las restricciones temporales del entregable del sistema en producción."
                  ],
                  "correct": 0,
                  "feedback": "Haynes estipula que un objetivo de proyecto efectivo debe ser específico, medible, delimitar el costo (recursos) y el tiempo límite, enfocándose en 'qué' se debe lograr y no en dictar 'cómo' el equipo técnico ejecuta cada actividad cotidiana.",
                  "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 1: Definición del Proyecto, pp. 1-15)"
            },
            {
                  "id": "sim-master-q02",
                  "number": 2,
                  "moduleRef": "Gestión de Proyectos · Haynes Cap. 2",
                  "text": "Según la metodología de planeación de proyectos de Marion E. Haynes, ¿cuál es la función primordial de la Estructura de Desglose del Trabajo (WBS/EDT) dentro de la planificación de sistemas?",
                  "options": [
                        "Identificar la secuencia matemática de holguras libres y totales sobre el grafo PERT para calcular automáticamente la fecha de entrega del proyecto.",
                        "Descomponer jerárquicamente el alcance global del proyecto en paquetes de trabajo manejables y medibles para asignar responsabilidades claras y costear con precisión.",
                        "Sustituir la matriz de asignación de responsabilidades mediante la programación directa de las rutinas de código en el repositorio del equipo técnico.",
                        "Registrar exclusivamente los costos indirectos de infraestructura y nómina operativa para emitir reportes contables periódicos hacia la dirección financiera de la organización."
                  ],
                  "correct": 1,
                  "feedback": "La EDT/WBS descompone el trabajo en entregables y paquetes de trabajo de menor granularidad jerárquica. Esto permite planear tiempos, estimar costos reales y asignar responsabilidades operativas sin ambigüedades.",
                  "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Planeación del Proyecto, pp. 16-30)"
            },
            {
                  "id": "sim-master-q03",
                  "number": 3,
                  "moduleRef": "Gestión de Proyectos · Haynes Cap. 2",
                  "text": "Al estimar la duración de las actividades individuales en el cronograma de un proyecto de tecnología, ¿qué principio defiende Marion E. Haynes para prevenir distorsiones en los plazos?",
                  "options": [
                        "Establecer plazos arbitrariamente agresivos calculados por el patrocinador ejecutivo para forzar una mayor productividad operativa en los desarrolladores del equipo técnico asignado.",
                        "Duplicar de manera preventiva la duración de cada tarea técnica para generar holguras artificiales ocultas a la supervisión de la administración del proyecto informático.",
                        "Involucrar directamente en la estimación a las personas responsables de ejecutar la actividad para obtener compromisos realistas basados en su experiencia técnica cotidiana.",
                        "Tomar de forma exclusiva los promedios teóricos de la industria prescindiendo del historial empírico y del perfil de destreza de los desarrolladores asignados al proyecto."
                  ],
                  "correct": 2,
                  "feedback": "Haynes enfatiza que la persona que realizará la tarea o el especialista técnico directo es quien mejor conoce la complejidad y variables reales, fomentando el compromiso personal y la precisión en el estimado.",
                  "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Estimación de Tiempos, pp. 22-28)"
            },
            {
                  "id": "sim-master-q04",
                  "number": 4,
                  "moduleRef": "Gestión de Proyectos · Haynes Cap. 3",
                  "text": "De acuerdo con Marion E. Haynes en el Capítulo 3 sobre control y seguimiento, ¿cuál es el mecanismo idóneo para validar los entregables intermedios y prevenir la insatisfacción del cliente?",
                  "options": [
                        "Entregar el sistema terminado en una única fase final para evitar interrupciones en la concentración técnica de los ingenieros del equipo de desarrollo de software.",
                        "Modificar informalmente el alcance en cada sesión de trabajo sin registrar los impactos en el presupuesto financiero ni en la fecha límite acordada del proyecto.",
                        "Delegar la validación funcional exclusivamente al personal contable de la organización basándose en los recibos de pago del proyecto de software desarrollado.",
                        "Realizar revisiones formales periódicas de avance con criterios de aceptación pactados por escrito antes de iniciar la construcción del siguiente paquete de trabajo técnico."
                  ],
                  "correct": 3,
                  "feedback": "El control efectivo exige retroalimentación continua con el cliente/patrocinador mediante hitos formales de revisión y criterios de aceptación contractuales claros, evitando discrepancias tardías y costosas al final del ciclo.",
                  "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3: Control del Proyecto, pp. 31-43)"
            },
            {
                  "id": "sim-master-q05",
                  "number": 5,
                  "moduleRef": "Gestión de Proyectos · Haynes Cap. 2",
                  "text": "En la técnica de Ruta Crítica (CPM) aplicada al cronograma de un proyecto de ingeniería, ¿cómo se define matemáticamente el camino crítico dentro de la red de precedencias?",
                  "options": [
                        "La secuencia de actividades conectadas que posee una holgura total igual a cero y determina la duración mínima absoluta para concluir el proyecto completo.",
                        "El conjunto de tareas que demandan el mayor consumo de presupuesto financiero independientemente de su posición secuencial en la red de actividades del sistema informático.",
                        "El subconjunto de actividades que pueden retrasarse indefinidamente sin modificar las fechas tempranas de inicio de las tareas sucesoras directas del plan de trabajo.",
                        "La ruta de mayor longitud geométrica en el diagrama de Gantt calculada exclusivamente a partir del número total de recursos humanos involucrados en la entrega técnica."
                  ],
                  "correct": 0,
                  "feedback": "La ruta crítica es la cadena continua más larga de actividades dependientes cuya holgura total es cero. Cualquier retraso en una actividad crítica traslada idéntico retraso a la fecha de finalización global del proyecto.",
                  "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 2: Redes y Ruta Crítica, pp. 25-30)"
            },
            {
                  "id": "sim-master-q06",
                  "number": 6,
                  "moduleRef": "Gestión de Proyectos · Haynes Cap. 3",
                  "text": "Ante una desviación imprevista en el cronograma que amenaza la fecha de entrega acordada, ¿cuál es la primera medida de gestión técnica que recomienda Marion E. Haynes?",
                  "options": [
                        "Autorizar horas extras ilimitadas para todo el departamento sin analizar si las actividades demoradas pertenecen a rutas con holgura disponible en la red.",
                        "Analizar la causa de la desviación en la ruta crítica y evaluar reasignaciones internas antes de renegociar plazos o alcances con los patrocinadores.",
                        "Cancelar de inmediato los módulos de pruebas unitarias y de integración para recortar el tiempo restante de despliegue en los servidores de producción.",
                        "Ocultar la desviación en los informes ejecutivos hasta que finalice el trimestre fiscal para evitar sanciones administrativas del comité directivo de la organización."
                  ],
                  "correct": 1,
                  "feedback": "El control riguroso exige analizar la causa de la variación, verificar si afecta la ruta crítica y estudiar opciones correctivas internas (como compresión de cronograma o balanceo de recursos) antes de alterar compromisos basales.",
                  "reference": "Marion E. Haynes · Administración de Proyectos (Cap. 3: Acciones Correctivas, pp. 36-42)"
            },
            {
                  "id": "sim-master-q07",
                  "number": 7,
                  "moduleRef": "Programación Orientada a Objetos · Matthias Noback",
                  "text": "En el diseño orientado a objetos avanzado expuesto por Matthias Noback, ¿cuál es la distinción formal fundamental entre un Objeto de Valor (Value Object) y una Entidad (Entity)?",
                  "options": [
                        "Un Value Object posee identidad única generada por la base de datos, mientras una Entidad representa exclusivamente un tipo de dato primitivo inmutable del sistema.",
                        "Un Value Object hereda obligatoriamente de una clase abstracta del sistema, mientras una Entidad implementa interfaces de serialización de mensajes de red distribuida en producción.",
                        "Un Value Object es inmutable y su igualdad semántica depende de sus valores constitutivos, mientras una Entidad posee identidad persistente y ciclo de vida mutable.",
                        "Un Value Object contiene métodos para orquestar servicios de infraestructura, mientras una Entidad solo contiene métodos estáticos de validación matemática de tipos del dominio."
                  ],
                  "correct": 2,
                  "feedback": "Noback estipula que los Value Objects son inmutables y dos instancias con los mismos atributos son idénticas e intercambiables. Por contraste, una Entidad se distingue por su identidad única (ID) a lo largo del tiempo, aun si sus datos cambian.",
                  "reference": "Matthias Noback · Object Design Style Guide (Cap. 2: Creating Services and Value Objects, pp. 25-50)"
            },
            {
                  "id": "sim-master-q08",
                  "number": 8,
                  "moduleRef": "Programación Orientada a Objetos · Dathan & Ramnath",
                  "text": "En la arquitectura orientada a objetos de Dathan & Ramnath, ¿qué principio de diseño se transgrede cuando una subclase debilita las poscondiciones o rechaza parámetros válidos del tipo base?",
                  "options": [
                        "El Principio de Sustitución de Liskov (LSP), al quebrantar los contratos del tipo base impidiendo que las subclases sean intercambiables de forma transparente.",
                        "El Principio de Responsabilidad Única (SRP), al concentrar múltiples motivos de modificación funcional dentro de una misma jerarquía de clases polimórficas del sistema.",
                        "El Principio de Inversión de Dependencias (DIP), al obligar a los módulos de alto nivel a depender de bibliotecas de bajo nivel del sistema anfitrión.",
                        "El Principio de Segregación de Interfaces (ISP), al forzar a los clientes a depender de métodos que nunca son invocados en tiempo de ejecución."
                  ],
                  "correct": 0,
                  "feedback": "El principio LSP (Liskov Substitution Principle) exige que cualquier objeto de una clase derivada pueda sustituir a un objeto de la clase base sin que el programa experimente anomalías o viole contratos esperados.",
                  "reference": "Brahma Dathan & Sarnath Ramnath · Object-Oriented Analysis, Design and Implementation (Cap. 4: Inheritance and Subtyping)"
            },
            {
                  "id": "sim-master-q09",
                  "number": 9,
                  "moduleRef": "Patrones de Diseño · Dathan & Ramnath / Noback",
                  "text": "Al estructurar subsistemas desacoplados, ¿cuál es la diferencia de intencionalidad estructural entre el patrón Decorator y el patrón Adapter según el catálogo clásico de software?",
                  "options": [
                        "Decorator altera la estructura interna de la base de datos relacional, mientras Adapter asegura la creación de una única instancia compartida por proceso en memoria.",
                        "Decorator agrega dinámicamente responsabilidades adicionales a un objeto manteniendo su misma interfaz, mientras Adapter convierte una interfaz existente en otra requerida por el cliente.",
                        "Decorator transforma tipos de datos primitivos en cadenas JSON, mientras Adapter encapsula llamadas asíncronas para balancear la carga de solicitudes HTTP entrantes del servidor.",
                        "Decorator permite desacoplar los productores de mensajes de los consumidores, mientras Adapter construye grafos de objetos complejos mediante constructores fluidos escalonados de software."
                  ],
                  "correct": 1,
                  "feedback": "Decorator añade comportamientos a un componente sin alterar su contrato de interfaz (transparente para el invocador). Adapter adapta una interfaz preexistente para hacerla compatible con un cliente con requerimientos incompatibles.",
                  "reference": "Dathan & Ramnath · Object-Oriented Analysis and Design (Cap. 9: Structural Patterns)"
            },
            {
                  "id": "sim-master-q10",
                  "number": 10,
                  "moduleRef": "Estructuras de Datos · Osvaldo Cairó & Silvia Guardati",
                  "text": "En la teoría de estructuras de datos de Cairó y Guardati, ¿cuál es la compensación de rendimiento fundamental al seleccionar una Lista Doblemente Enlazada frente a un Arreglo Dinámico?",
                  "options": [
                        "La lista garantiza acceso por índice en tiempo O(1) constante, pero exige duplicar el búfer de memoria cada vez que se satura la capacidad física asignada.",
                        "La lista consume menor memoria total al prescindir de punteros de enlace, pero impide realizar recorridos bidireccionales sobre la colección de elementos ordenados en memoria.",
                        "La lista permite inserciones y eliminaciones en tiempo O(1) conociendo el nodo pero sacrifica acceso aleatorio O(1) y penaliza la localidad de caché del hardware.",
                        "La lista almacena todos sus nodos en posiciones físicamente contiguas de memoria, optimizando la lectura en bloque desde los registros internos del microprocesador del equipo."
                  ],
                  "correct": 2,
                  "feedback": "Las listas enlazadas facilitan la inserción y borrado local en O(1) mediante reasignación de punteros, pero carecen de indexación directa O(1) y sufren fragmentación de memoria (pérdida de 'cache locality') frente a arreglos contiguos.",
                  "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 2: Listas Doblemente Enlazadas, pp. 65-88)"
            },
            {
                  "id": "sim-master-q11",
                  "number": 11,
                  "moduleRef": "Estructuras de Datos · Cairó & Guardati",
                  "text": "De acuerdo con Cairó y Guardati, ¿qué condición define formalmente a un árbol binario balanceado AVL y qué operación restaura el balance tras una inserción Izquierda-Derecha (LR)?",
                  "options": [
                        "El número de hojas izquierdas iguala al de derechas; ante cualquier desbalance se reconstruye el árbol completo mediante un recorrido en preorden determinista.",
                        "Cada nodo interno posee obligatoriamente dos hijos activos; ante un desbalance de +2 se elimina de forma preventiva el nodo recién ingresado al subárbol.",
                        "La profundidad máxima es siempre log₂(n); ante un desbalance se transforma el árbol en una lista enlazada simple ordenada por clave alfabética en memoria.",
                        "La diferencia de alturas entre subárboles no excede 1 en ningún nodo; ante desbalance Izquierda-Derecha se ejecuta una rotación doble compuesta (LR)."
                  ],
                  "correct": 3,
                  "feedback": "En un árbol AVL, para todo nodo el factor de equilibrio (altura subárbol izquierdo menos derecho) debe ser -1, 0 o +1. El caso zig-zag Izquierda-Derecha exige una doble rotación: rotación simple a la izquierda en el hijo y luego derecha en la raíz.",
                  "reference": "Osvaldo Cairó & Silvia Guardati · Estructuras de Datos (Cap. 5: Árboles Balanceados AVL, pp. 210-235)"
            },
            {
                  "id": "sim-master-q12",
                  "number": 12,
                  "moduleRef": "Estructuras de Datos · Luis Joyanes Aguilar",
                  "text": "Al representar una matriz bidimensional M[F, C] en memoria contigua lineal, ¿cuál es la fórmula de direccionamiento canónica para ubicar el elemento M[i, j] en orden mayor por filas (Row-Major)?",
                  "options": [
                        "Dir(M[i, j]) = DirBase + [ i * TotalColumnas + j ] * TamañoElemento, indexando contiguamente las filas completas en la memoria RAM del ordenador.",
                        "Dir(M[i, j]) = DirBase + [ j * TotalFilas + i ] * TamañoElemento, indexando secuencialmente las columnas completas una tras otra en el espacio lineal asignado.",
                        "Dir(M[i, j]) = DirBase + [ (i + j) * 2 ] * TamañoElemento, dispersando las celdas pares en direcciones ascendentes e impares en descendentes de memoria principal.",
                        "Dir(M[i, j]) = DirBase + [ i * j * TotalColumnas ] * TamañoElemento, requiriendo una tabla hash interna para calcular la posición física en el ordenador."
                  ],
                  "correct": 0,
                  "feedback": "En orden por filas (Row-Major, estándar en C/C++, C#, Java), para alcanzar el elemento [i, j] se deben saltar 'i' filas completas (cada una de longitud 'TotalColumnas') más el desplazamiento 'j' de la columna, multiplicado por los bytes del tipo.",
                  "reference": "Luis Joyanes Aguilar · Fundamentos de Programación (Cap. 8: Arreglos Multidimensionales, pp. 280-295)"
            },
            {
                  "id": "sim-master-q13",
                  "number": 13,
                  "moduleRef": "Estructuras de Datos · MIT Introduction to Algorithms",
                  "text": "En el análisis de montículos binarios (Binary Heaps) para colas de prioridad en MIT 6.006, ¿cuál es la cota asintótica temporal de la operación de extracción del valor mínimo (extract-min)?",
                  "options": [
                        "Complejidad O(1), pues la operación se limita a remover el elemento de la cima del montículo sin requerir ninguna reorganización en los subárboles subyacentes.",
                        "Complejidad O(log n), dado que la raíz es reemplazada por el último elemento y se restaura el invariante de montículo descendiendo (sift-down).",
                        "Complejidad O(n), debido a que se debe ejecutar una búsqueda lineal secuencial sobre todos los nodos del montículo para identificar el nuevo mínimo absoluto.",
                        "Complejidad O(n log n), ya que es necesario ordenar nuevamente todo el arreglo contiguo aplicando el algoritmo recursivo de Merge Sort sobre los nodos."
                  ],
                  "correct": 1,
                  "feedback": "La raíz se lee en O(1), pero al extraerla se coloca el último nodo en la raíz y se aplica el procedimiento de hundimiento (sift-down / heapify) a lo largo de la altura del árbol binario completo, demandando O(log n).",
                  "reference": "MIT OpenCourseWare 6.006 · Introduction to Algorithms (Unit 2: Priority Queues and Heaps)"
            },
            {
                  "id": "sim-master-q14",
                  "number": 14,
                  "moduleRef": "Análisis de Algoritmos · Cardona Torres / Gómez Fuentes",
                  "text": "Al resolver la relación de recurrencia T(n) = 4T(n/2) + O(n) correspondiente a un algoritmo de Divide y Vencerás mediante el Teorema Maestro, ¿cuál es la cota asintótica estricta obtenida?",
                  "options": [
                        "O(n log n), dado que el trabajo de combinación lineal de los datos iguala asintóticamente a la profundidad del árbol de llamadas recursivas del programa.",
                        "O(log n), debido a que el tamaño de la entrada se divide entre dos en cada paso reduciendo exponencialmente el espacio de búsqueda del problema.",
                        "O(n²), puesto que el costo computacional de los subproblemas domina polinomialmente sobre el trabajo de división y recombinación lineal del algoritmo analizado en ejecución.",
                        "O(n³), ya que cada llamada genera cuatro bifurcaciones simultáneas que se multiplican iterativamente por la profundidad completa del montículo de datos procesados."
                  ],
                  "correct": 2,
                  "feedback": "En el Teorema Maestro, a = 4, b = 2, f(n) = O(n). El valor log_b(a) = log_2(4) = 2. Como f(n) = O(n¹) es polinomialmente menor que n^(log_b(a)) = n², aplica el Caso 1, resultando en T(n) = Θ(n²).",
                  "reference": "Cardona Torres et al. · Análisis de algoritmos para Ingeniería de Sistemas (Cap. 3: Recurrencias y Teorema Maestro)"
            },
            {
                  "id": "sim-master-q15",
                  "number": 15,
                  "moduleRef": "Análisis de Algoritmos · Ayala de la Vega / MIT",
                  "text": "En el análisis comparativo entre algoritmos de ordenamiento, ¿cuál es la diferencia crítica de estabilidad y requerimientos de memoria auxiliar entre Mergesort y Quicksort estándar in-place?",
                  "options": [
                        "Mergesort es inestable y requiere O(1) de memoria auxiliar, mientras Quicksort es completamente estable consumiendo O(n²) de espacio temporal en disco duro del equipo.",
                        "Mergesort opera siempre en tiempo O(n²) en el peor caso, mientras Quicksort estándar garantiza O(n log n) de manera estricta e incondicional en memoria del sistema.",
                        "Mergesort clasifica los elementos exclusivamente in-place sin búferes temporales, mientras Quicksort duplica toda la memoria del sistema en cada partición recursiva ejecutada en runtime.",
                        "Mergesort es estable y requiere O(n) espacio auxiliar para su mezcla, mientras Quicksort in-place requiere O(log n) de pila pero no garantiza estabilidad."
                  ],
                  "correct": 3,
                  "feedback": "Mergesort preserva el orden relativo de claves idénticas (es estable) a costa de O(n) memoria auxiliar para la mezcla. Quicksort particiona in-place en O(log n) espacio de pila pero los intercambios no preservan el orden relativo original.",
                  "reference": "Joel Ayala de la Vega · Introducción al análisis de Algoritmos (Cap. 4: Algoritmos de Ordenamiento, pp. 85-112)"
            },
            {
                  "id": "sim-master-q16",
                  "number": 16,
                  "moduleRef": "Análisis de Algoritmos · Cardona / MIT",
                  "text": "Al calcular rutas de costo mínimo en un grafo dirigido ponderado, ¿en qué circunstancia técnica estricta es obligatorio seleccionar el algoritmo de Bellman-Ford en lugar de Dijkstra?",
                  "options": [
                        "Cuando el grafo contiene aristas con pesos negativos, ya que Dijkstra asume vorazmente distancias no decrecientes y produce resultados matemáticamente incorrectos en ejecución.",
                        "Cuando el grafo es acíclico y no ponderado, pues Dijkstra solo puede procesar grafos que posean ciclos continuos orientados a la derecha en la matriz.",
                        "Cuando la cantidad total de vértices supera diez millones de nodos, debido a que Bellman-Ford posee una menor complejidad temporal asintótica en ejecución de ciclos.",
                        "Cuando se requiere calcular el árbol de expansión mínima de Kruskal en lugar de las trayectorias mínimas desde un nodo origen específico del grafo computacional."
                  ],
                  "correct": 0,
                  "feedback": "Dijkstra es un algoritmo voraz que asume que agregar una arista nunca reducirá la distancia acumulada. Si existen pesos negativos, las distancias calculadas previamente fallan, obligando a usar Bellman-Ford que relaja todas las aristas |V|-1 veces.",
                  "reference": "Sergio A. Cardona Torres · Análisis de algoritmos para Ingeniería de Sistemas (Cap. 5: Algoritmos sobre Grafos)"
            },
            {
                  "id": "sim-master-q17",
                  "number": 17,
                  "moduleRef": "Ingeniería de Requerimientos · Vazquez & Simões",
                  "text": "De acuerdo con Carlos E. Vazquez y Guilherme S. Simões en Ingeniería de Requisitos, ¿cuál es la distinción formal entre una Regla de Negocio y un Requerimiento Funcional de software?",
                  "options": [
                        "Una regla de negocio describe la secuencia de clics que realiza el usuario en la interfaz gráfica para enviar una solicitud al servidor web corporativo.",
                        "Una regla de negocio define una directriz o política corporativa intrínseca que existe independientemente de si se automatiza en un sistema informático de la institución.",
                        "Un requerimiento funcional establece las restricciones de latencia de red y consumo de memoria RAM toleradas por el hardware en los servidores de producción de software.",
                        "Una regla de negocio es un diagrama de despliegue que describe la asignación física de componentes de red en los centros de datos corporativos distribuidos del sistema."
                  ],
                  "correct": 1,
                  "feedback": "Las reglas de negocio son políticas, normativas o fórmulas propias del negocio que rigen aun sin sistemas de software. Un requerimiento funcional describe las capacidades automatizadas que el software debe proveer para dar soporte a dichas reglas.",
                  "reference": "Carlos Eduardo Vazquez & Guilherme Siqueira Simões · Ingeniería de Requisitos: Software Orientado al Negocio (Cap. 3: Tipología de Requisitos)"
            },
            {
                  "id": "sim-master-q18",
                  "number": 18,
                  "moduleRef": "Ingeniería de Software · SWEBOK v4 / Pressman",
                  "text": "Conforme a la Guía SWEBOK v4 y Roger S. Pressman, ¿qué propiedad formal asegura que un requisito de software sea catalogado como técnicamente 'verificable'?",
                  "options": [
                        "Su redacción mediante un lenguaje informal amplio que permita a los programadores interpretar libremente la lógica de negocio del sistema informático corporativo.",
                        "La aprobación unánime de los diseñadores gráficos sin necesidad de someter el enunciado a pruebas de aceptación en ambientes de homologación técnica del software.",
                        "La existencia de un procedimiento o prueba determinista, finita y económicamente factible mediante la cual una persona o máquina confirme su cumplimiento.",
                        "La inclusión obligatoria de fragmentos de código fuente en C# o Java directamente dentro de la especificación técnica de requerimientos del sistema evaluado."
                  ],
                  "correct": 2,
                  "feedback": "Un requerimiento es verificable si y solo si existe un proceso finito, determinista y rentable mediante el cual una persona o máquina pueda certificar inequívocamente que el software satisface la condición pactada.",
                  "reference": "IEEE Computer Society · SWEBOK Guide v4.0 (Software Requirements Knowledge Area, Section 4.2)"
            },
            {
                  "id": "sim-master-q19",
                  "number": 19,
                  "moduleRef": "Ingeniería de Requerimientos · Vazquez & Simões / Sommerville",
                  "text": "En el análisis contemporáneo de requisitos, ¿cuál es la diferencia metodológica esencial entre una Especificación de Caso de Uso y una Historia de Usuario ágil?",
                  "options": [
                        "El caso de uso especifica exclusivamente métricas de rendimiento de la red; la historia de usuario describe el modelo de datos relacional de la entidad del sistema.",
                        "La historia de usuario requiere contratos formales de diseño en lenguaje matemático; el caso de uso es una nota manuscrita informal sin rigor técnico ni validación.",
                        "El caso de uso se compila directamente en lenguaje ensamblador nativo; la historia de usuario solo se valida mediante auditorías contables externas periódicas de la empresa.",
                        "El caso de uso documenta flujos principales y alternos de interacción exhaustivos; la historia de usuario es un recordatorio conversacional con criterios de aceptación."
                  ],
                  "correct": 3,
                  "feedback": "Los Casos de Uso (UML) detallan flujos de eventos paso a paso (camino básico, alternos y excepciones). Las Historias de Usuario capturan la necesidad del usuario de forma sintética (Como/Quiero/Para) sirviendo como recordatorio para dialogar y probar.",
                  "reference": "Ian Sommerville · Ingeniería de Software (Cap. 4: Ingeniería de Requisitos, pp. 90-115)"
            },
            {
                  "id": "sim-master-q20",
                  "number": 20,
                  "moduleRef": "Diseño de Sistemas · Ian Sommerville",
                  "text": "Según Ian Sommerville en Ingeniería de Software, ¿cuál es la principal compensación (trade-off) al adoptar una arquitectura de microservicios frente a un monolito modular?",
                  "options": [
                        "Permite escalabilidad y despliegue independiente por servicio a cambio de una mayor complejidad operativa, consistencia eventual y latencia de red interservicio en producción.",
                        "Elimina totalmente la necesidad de bases de datos persistentes garantizando que todas las transacciones ocurran en memoria compartida a costo cero de hardware del sistema.",
                        "Asegura transacciones ACID atómicas inmediatas y sincronización trivial entre componentes eliminando cualquier posible falla de partición de red distribuida en los servidores corporativos.",
                        "Reduce el número total de repositorios de código y suprime la necesidad de herramientas de observabilidad, trazas distribuidas o registros centralizados del sistema informático."
                  ],
                  "correct": 0,
                  "feedback": "Los microservicios desacoplan los ciclos de despliegue y permiten escalar dominios de forma aislada, pero introducen los desafíos de sistemas distribuidos: latencia de red, fallas parciales, trazabilidad compleja y consistencia eventual.",
                  "reference": "Ian Sommerville · Ingeniería de Software (Cap. 6: Arquitectura de Software, pp. 145-170)"
            },
            {
                  "id": "sim-master-q21",
                  "number": 21,
                  "moduleRef": "Diseño de Sistemas · Pressman / Sommerville",
                  "text": "En el diseño de arquitectura de software, ¿cuál de los siguientes enunciados representa la aplicación paradigmática del principio de 'Alta Cohesión y Bajo Acoplamiento'?",
                  "options": [
                        "Una clase única de gran tamaño que ejecuta cálculos matemáticos, renderiza pantallas, gestiona conexiones a base de datos y envía correos electrónicos a los usuarios finales.",
                        "Un módulo enfocado exclusivamente en procesar pagos con tarjeta que expone una interfaz abstracta mínima y desconoce los detalles de facturación contable del sistema corporativo.",
                        "Dos subsistemas que comparten variables globales en memoria estática y modifican directamente sus estructuras internas sin utilizar métodos encapsulados del módulo de software institucional.",
                        "Un controlador web que instancia directamente conexiones JDBC hacia doce servidores remotos diferentes sin pasar por interfaces de repositorio desacopladas del sistema de aplicaciones."
                  ],
                  "correct": 1,
                  "feedback": "Alta cohesión significa que todos los elementos internos del módulo colaboran hacia un único propósito funcional bien delimitado. Bajo acoplamiento significa que sus dependencias con módulos externos son mínimas y mediadas por abstracciones.",
                  "reference": "Roger S. Pressman · Ingeniería del Software: Un enfoque práctico (Cap. 12: Diseño a Nivel de Componentes)"
            },
            {
                  "id": "sim-master-q22",
                  "number": 22,
                  "moduleRef": "Modelado del Sistema · Ian Sommerville Cap. 5",
                  "text": "De acuerdo con Ian Sommerville en el Capítulo 5 de Ingeniería de Software, ¿cuáles son los tres modelos formales que integran el estándar de Executable UML (xUML)?",
                  "options": [
                        "Diagramas de Casos de Uso narrativos, Diagramas de Secuencia parciales y Diagramas de Componentes físicos orientados al despliegue en servidor corporativo.",
                        "Diagramas de Actividades de proceso, Diagramas de Despliegue de red y Diagramas de Paquetes jerárquicos de código en el repositorio del proyecto informático.",
                        "Modelos de Dominio para los límites, Modelos de Clases para la estructura estática y Máquinas de Estados finitas para el comportamiento computable.",
                        "Modelos Entidad-Relación lógicos, Diagramas de Flujo de Datos estructurados y Diccionarios de Almacenamiento de variables globales en disco del servidor."
                  ],
                  "correct": 2,
                  "feedback": "Sommerville detalla que para que un modelo UML sea ejecutable y traducible a código por compiladores MDA, se requieren tres modelos formales estrictos: Modelos de Dominio, Modelos de Clases y Modelos de Estados (State Machines).",
                  "reference": "Ian Sommerville · Ingeniería de Software (Cap. 5: Modelado del Sistema, Sección 5.4: Executable UML)"
            },
            {
                  "id": "sim-master-q23",
                  "number": 23,
                  "moduleRef": "Pruebas de Sistemas · Federico Toledo",
                  "text": "En la disciplina formal de pruebas expuesta por Federico Toledo, ¿cuál es la distinción rigurosa en la cadena causal entre un Error, un Defecto (Bug) y una Falla?",
                  "options": [
                        "La falla es la equivocación mental del analista; el error es la caída del servidor web; el defecto es la falta de memoria física en hardware corporativo.",
                        "El defecto es la queja registrada por el usuario final; el error es la prueba automatizada que falla; la falla es la reescritura de la especificación técnica.",
                        "Son términos conceptualmente idénticos que pueden usarse indistintamente sin ninguna diferenciación de origen ni momento de manifestación durante el ciclo de vida del software en producción.",
                        "El error es una equivocación humana del programador; el defecto es la manifestación incorrecta en el código; la falla es el comportamiento anómalo observable en ejecución."
                  ],
                  "correct": 3,
                  "feedback": "Cadena causal canónica del ISTQB y Toledo: Una persona comete un ERROR (mental); este produce un DEFECTO (bug estático en el código o documento); al ejecutarse el software con el defecto, este se manifiesta externamente como una FALLA.",
                  "reference": "Federico Toledo · Introducción a las pruebas de Sistemas de Información (Cap. 1: Conceptos Básicos de Testing)"
            },
            {
                  "id": "sim-master-q24",
                  "number": 24,
                  "moduleRef": "Pruebas de Software · Federico Toledo / Pressman",
                  "text": "Al aplicar la técnica de análisis de caja blanca de Thomas McCabe, ¿qué aspecto fundamental del código determina la métrica de Complejidad Ciclomática V(G)?",
                  "options": [
                        "Determina el número límite de caminos lógicos linealmente independientes que deben ser ejecutados obligatoriamente para lograr una cobertura total de ramas en pruebas unitarias.",
                        "Calcula el número exacto de milisegundos que tardará en ejecutarse una consulta SQL sobre un motor de base de datos relacional en producción corporativa de sistemas.",
                        "Estima la cantidad de líneas de código fuente duplicadas que deben ser eliminadas durante una refactorización de arquitectura orientada a microservicios del sistema de software.",
                        "Mide el porcentaje de memoria RAM que la máquina virtual asignará dinámicamente al montículo durante la ejecución de tareas concurrentes de fondo en el servidor de aplicaciones."
                  ],
                  "correct": 0,
                  "feedback": "La complejidad ciclomática V(G) = E - N + 2P mide el número de caminos linealmente independientes del grafo de flujo de control. Define la cota mínima de casos de prueba necesarios para garantizar cobertura completa de ramas/decisiones.",
                  "reference": "Roger S. Pressman · Ingeniería del Software: Un enfoque práctico (Cap. 19: Pruebas de Software: Técnicas de Caja Blanca)"
            },
            {
                  "id": "sim-master-q25",
                  "number": 25,
                  "moduleRef": "Pruebas de Software · Federico Toledo",
                  "text": "En el diseño de casos de prueba de caja negra según Federico Toledo, ¿por qué es indispensable combinar el análisis de valores límite con la partición equivalente?",
                  "options": [
                        "Porque las técnicas de partición equivalente solo aplican al código ensamblador y los valores límite analizan exclusivamente los esquemas relacionales de la base de datos.",
                        "Porque la experiencia demuestra que la mayor concentración de fallas ocurre en las fronteras exactas y transiciones de las clases de equivalencia evaluadas.",
                        "Debido a que la partición equivalente calcula la velocidad del procesador y los valores límite verifican la seguridad criptográfica del protocolo TLS en la red corporativa.",
                        "Para reducir a cero el tiempo de compilación del sistema y evitar la ejecución de pruebas de integración entre los diferentes microservicios desplegados en producción."
                  ],
                  "correct": 1,
                  "feedback": "La partición en clases de equivalencia asume homogeneidad dentro de cada rango, pero los errores humanos en condiciones de bifurcación (< vs <=, > vs >=) hacen que la mayoría de los bugs residan en los límites de los intervalos.",
                  "reference": "Federico Toledo · Introducción a las pruebas de Sistemas de Información (Cap. 4: Diseño de Pruebas de Caja Negra)"
            },
            {
                  "id": "sim-master-q26",
                  "number": 26,
                  "moduleRef": "Modelos de Ciclo de Vida · Pressman / Sommerville",
                  "text": "¿Cuál es la diferencia crítica en la filosofía de gestión de proyectos que distingue al Modelo en Espiral de Barry Boehm del Modelo en Cascada clásico?",
                  "options": [
                        "El Modelo en Cascada entrega incrementos funcionales desplegables cada dos semanas, mientras Espiral prohíbe cualquier retroalimentación antes de dos años de desarrollo en producción.",
                        "El Modelo en Espiral prescinde de especificaciones técnicas y diseño formal, mientras Cascada solo se aplica en proyectos de desarrollo web ágiles y modernos.",
                        "El Modelo en Espiral es guiado por la evaluación continua de riesgos iterativos, mientras Cascada asume fases lineales secuenciales sin retrocesos en ejecución.",
                        "Cascada requiere que los desarrolladores trabajen en equipos multidisciplinarios autogestionados, mientras Espiral depende exclusivamente de auditores contables externos de la organización corporativa institucional."
                  ],
                  "correct": 2,
                  "feedback": "El Modelo en Espiral combina iteración incremental con un cuadrante formal y sistemático de análisis y resolución de riesgos técnicos y económicos en cada vuelta de la espiral, a diferencia de la linealidad rígida de Cascada.",
                  "reference": "Ian Sommerville · Ingeniería de Software (Cap. 2: Procesos de Software, pp. 38-48)"
            },
            {
                  "id": "sim-master-q27",
                  "number": 27,
                  "moduleRef": "Procesos de Software · Sommerville / González Pérez",
                  "text": "Dentro del Rational Unified Process (RUP), ¿cuál es el objetivo fundamental de la fase de Elaboración en comparación con la fase de Inicio?",
                  "options": [
                        "Desarrollar la totalidad del código fuente de producción y redactar los manuales de usuario definitivos para el despliegue general ante los clientes corporativos.",
                        "Realizar exclusivamente la justificación financiera del negocio y fijar el presupuesto contable sin examinar ningún requisito técnico de la solución de software desarrollada.",
                        "Migrar los datos heredados a servidores en producción y capacitar al personal de soporte técnico en la atención de incidencias telefónicas de usuarios operativos.",
                        "Establecer la línea base de la arquitectura del software, mitigar los riesgos técnicos de mayor impacto y construir un ejecutable arquitectónico validado en pruebas."
                  ],
                  "correct": 3,
                  "feedback": "La fase de Elaboración en RUP tiene como meta central definir la arquitectura base ejecutable, resolver los riesgos técnicos críticos y estabilizar la especificación de requerimientos antes de la construcción masiva.",
                  "reference": "Pedro Pablo González Pérez et al. · Fundamentos de Ingeniería de Software (Cap. 2: Metodologías y Ciclos de Vida)"
            },
            {
                  "id": "sim-master-q28",
                  "number": 28,
                  "moduleRef": "Programación Móvil · Head First Android / Tomás Gironés",
                  "text": "En el ciclo de vida de una Activity en Android, ¿qué método de retrollamada (callback) se ejecuta inmediatamente cuando la actividad pierde el foco pero sigue parcialmente visible?",
                  "options": [
                        "onPause(), momento en el cual la actividad debe pausar animaciones costosas, liberar la cámara o persistir cambios no guardados antes de ceder la CPU.",
                        "onStop(), método donde la interfaz sigue completamente interactiva recibiendo eventos táctiles del usuario mientras se ejecutan tareas intensivas de fondo en el dispositivo.",
                        "onDestroy(), retrollamada que garantiza que la actividad nunca será eliminada de la memoria RAM del dispositivo bajo condiciones de baja batería en el equipo móvil.",
                        "onRestart(), evento que se dispara exclusivamente cuando el sistema operativo descarga la aplicación para liberar espacio en el almacenamiento interno flash del teléfono celular."
                  ],
                  "correct": 0,
                  "feedback": "onPause() se ejecuta cuando la Activity entra en segundo plano parcial (por ejemplo, si aparece un diálogo semi-transparente o split-screen). Debe pausar operaciones que consuman CPU y liberar periféricos de uso exclusivo.",
                  "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 3: The Activity Lifecycle)"
            },
            {
                  "id": "sim-master-q29",
                  "number": 29,
                  "moduleRef": "Programación Móvil · Head First Android / Gironés",
                  "text": "Al ocurrir un cambio de configuración en Android (como la rotación de pantalla), ¿cuál es el propósito de utilizar un componente ViewModel junto con StateFlow?",
                  "options": [
                        "Serializar de manera obligatoria todas las vistas XML hacia una base de datos SQLite antes de que la tarjeta de video renderice la nueva orientación física.",
                        "Retener los datos del estado de la interfaz en memoria sobreviviendo a la destrucción y recreación de la Activity sin repetir llamadas a servicios de red.",
                        "Forzar la ejecución síncrona de las solicitudes HTTP en el hilo principal de la interfaz para evitar desincronizaciones en la vista de usuario presentada en pantalla.",
                        "Solicitar permisos de localización en tiempo de ejecución al sistema operativo cada vez que la pantalla cambia de resolución o de orientación física en uso cotidiano."
                  ],
                  "correct": 1,
                  "feedback": "El ciclo de vida del ViewModel está desacoplado del ciclo de vida efímero de la Activity: sobrevive a la rotación de pantalla, reteniendo los datos de negocio y flujos observables sin reiniciar costosas peticiones.",
                  "reference": "Jesús Tomás Gironés · El Gran Libro de Android (Cap. 6: Arquitectura de Componentes Jetpack)"
            },
            {
                  "id": "sim-master-q30",
                  "number": 30,
                  "moduleRef": "Programación Móvil · Head First Android / Gironés",
                  "text": "De acuerdo con las directrices de arquitectura oficial de Android, ¿por qué WorkManager es la biblioteca estándar para tareas en segundo plano diferibles y persistentes?",
                  "options": [
                        "Porque mantiene un hilo en segundo plano ejecutándose de forma continua e ininterrumpida sin importar el estado de suspensión Doze del procesador del teléfono móvil.",
                        "Debido a que renderiza directamente animaciones vectoriales complejas sobre el hilo principal de la pantalla sin consumir memoria compartida de la GPU integrada del dispositivo.",
                        "Porque garantiza la ejecución de la tarea si la app se cierra o el dispositivo se reinicia, respetando restricciones de red y optimización de batería.",
                        "Ya que sustituye por completo a las bases de datos relacionales locales gestionando transacciones ACID concurrentes en memoria de acceso aleatorio flash rápida del sistema."
                  ],
                  "correct": 2,
                  "feedback": "WorkManager almacena las solicitudes de trabajo en una base de datos SQLite interna. Si la app se cierra o el celular se apaga, el sistema operativo garantiza que la tarea se reanudará cuando se satisfagan las condiciones (ej. red Wi-Fi y carga).",
                  "reference": "Dawn Griffiths & David Griffiths · Head First Android Development (Cap. 14: Background Work with WorkManager)"
            },
            {
                  "id": "sim-master-q31",
                  "number": 31,
                  "moduleRef": "Programación Web · MDN / Javascript.info",
                  "text": "En el modelo de concurrencia y Event Loop de JavaScript en navegadores modernos, ¿cómo se gestiona la prioridad de ejecución entre Microtasks y Macrotasks?",
                  "options": [
                        "Las macrotareas interrumpen inmediatamente cualquier microtarea en ejecución asignando un hilo de procesador nativo dedicado a cada temporizador configurado en memoria del navegador.",
                        "Ambas colas se ejecutan en orden estrictamente alternado uno a uno garantizando tiempos de respuesta idénticos para promesas y eventos del mouse del usuario.",
                        "Las promesas se encolan en la pila de llamadas (Call Stack) del sistema operativo ejecutándose antes de que se compile el código fuente JavaScript del navegador.",
                        "Las microtareas (como las promesas resueltas) se vacían completamente de su cola antes de que el motor tome la siguiente macrotarea (como setTimeout) de la cola."
                  ],
                  "correct": 3,
                  "feedback": "En cada ciclo del Event Loop de JavaScript, tras finalizar una tarea síncrona o macrotarea, el motor vacía por completo toda la cola de Microtasks (Promises, queueMicrotask) antes de procesar la siguiente macrotarea de la Task Queue.",
                  "reference": "Javascript.info · El Tutorial de JavaScript Moderno (Parte 1: Event Loop: microtasks y macrotasks)"
            },
            {
                  "id": "sim-master-q32",
                  "number": 32,
                  "moduleRef": "Programación Web · MDN Web Docs",
                  "text": "Al diseñar aplicaciones web seguras según los estándares de MDN, ¿cuál es la función de Content Security Policy (CSP) en comparación con Cross-Origin Resource Sharing (CORS)?",
                  "options": [
                        "CSP restringe las fuentes seguras de scripts, estilos e imágenes para mitigar ataques XSS; CORS habilita o deniega peticiones HTTP asíncronas entre distintos orígenes web.",
                        "CSP cifra las contraseñas en tránsito mediante certificados SSL; CORS compila el código TypeScript a JavaScript antes de que lo descargue el cliente remoto en el navegador.",
                        "CSP gestiona el balanceo de carga en servidores de aplicaciones; CORS previene inyecciones de SQL en motores de bases de datos relacionales corporativas conectadas al sistema.",
                        "CSP sustituye a las cookies de sesión mediante tokens JWT; CORS permite almacenar datos ilimitados en el LocalStorage del navegador del usuario final de la aplicación."
                  ],
                  "correct": 0,
                  "feedback": "CSP restringe qué recursos (scripts, estilos, conexiones) puede cargar o ejecutar el navegador para prevenir ataques XSS y de inyección. CORS define encabezados que permiten o restringen peticiones fetch/XHR cross-origin entre dominios distintos.",
                  "reference": "MDN Web Docs · Guía de Seguridad Web: HTTP Headers (CSP & CORS)"
            },
            {
                  "id": "sim-master-q33",
                  "number": 33,
                  "moduleRef": "Programación Web · Jakarta EE 10 / Java Persistence",
                  "text": "En la especificación Jakarta Persistence (JPA), ¿cuál es el estado de una entidad cuando sus cambios en memoria ya no son rastreados activamente por el EntityManager?",
                  "options": [
                        "Estado Nuevo (Transient), donde la entidad está sincronizada directamente con la tabla física y cualquier mutación se escribe de inmediato en disco del servidor.",
                        "Estado Desconectado (Detached), donde la entidad posee un identificador de clave primaria pero ya no forma parte del contexto de persistencia activo del gestor.",
                        "Estado Administrado (Managed), donde la entidad ha sido purgada de la memoria RAM tras dispararse una excepción fatal de concurrencia optimista en el hilo.",
                        "Estado Removido (Removed), donde la entidad continúa existiendo permanentemente en la base de datos sin poder eliminarse bajo ninguna instrucción SQL relacional del sistema."
                  ],
                  "correct": 1,
                  "feedback": "En JPA, una entidad pasa a estado Detached al cerrarse el EntityManager, limpiarse el contexto (clear) o desconectarse explícitamente (detach). Tiene clave primaria pero el ORM no propaga sus mutaciones automáticamente a la BD.",
                  "reference": "Jakarta EE Tutorial 10 · Jakarta Persistence: Entity Lifecycle and Persistence Context"
            },
            {
                  "id": "sim-master-q34",
                  "number": 34,
                  "moduleRef": "Plataforma .NET 8 · Mark J. Price",
                  "text": "En ASP.NET Core (.NET 8), ¿cuál es la ventaja arquitectónica principal de las Minimal APIs frente a los controladores MVC tradicionales según Mark J. Price?",
                  "options": [
                        "Permiten compilar directamente en ensamblador nativo x86 eliminando la máquina virtual Common Language Runtime (CLR) y el recolector de basura de memoria en runtime del host.",
                        "Soportan exclusivamente conexiones TCP binarias suprimiendo la compatibilidad con solicitudes HTTP/1.1 y encabezados estándar de transferencia de texto web estructurado para clientes móviles.",
                        "Reducen el overhead de invocación, asignan menos memoria al omitir la sobrecarga del pipeline de filtros MVC y optimizan el rendimiento para microservicios ligeros.",
                        "Reemplazan la inyección de dependencias centralizada mediante la creación manual de variables estáticas compartidas entre todos los hilos del proceso del servidor web institucional."
                  ],
                  "correct": 2,
                  "feedback": "Las Minimal APIs de .NET 8 mapean endpoints directamente sobre rutas ligeras sin instanciar la pesada infraestructura de ControllerActionInvoker ni el pipeline de filtros de MVC, reduciendo asignaciones de memoria y latencia.",
                  "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 2: Building Web Services with Minimal APIs)"
            },
            {
                  "id": "sim-master-q35",
                  "number": 35,
                  "moduleRef": "Plataforma .NET 8 · Mark J. Price",
                  "text": "En el contenedor de Inyección de Dependencias nativo de ASP.NET Core en .NET 8, ¿cuál es el comportamiento exacto de un servicio registrado con ciclo de vida Scoped?",
                  "options": [
                        "Se crea una nueva instancia cada vez que se solicita el servicio en cualquier constructor o método, sin importar el contexto de la llamada en el servidor.",
                        "Se crea una única instancia la primera vez que se solicita y se conserva viva indefinidamente para toda la vida del proceso de la aplicación en memoria.",
                        "Se destruye y recrea la instancia cada vez que el recolector de basura ejecuta una compactación de Generación 2 en la memoria RAM del servidor de aplicaciones.",
                        "Se crea una única instancia por cada solicitud HTTP entrante, compartiéndose entre todos los componentes y servicios resueltos dentro del alcance de dicha petición web."
                  ],
                  "correct": 3,
                  "feedback": "Un servicio Scoped comparte la misma instancia a través de todos los componentes inyectados dentro de una misma solicitud HTTP (scope). Al concluir la respuesta, el contenedor desecha automáticamente todas las instancias creadas en ese ámbito.",
                  "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 1: Modern .NET Architecture & Dependency Injection)"
            },
            {
                  "id": "sim-master-q36",
                  "number": 36,
                  "moduleRef": "Plataforma .NET 8 · Mark J. Price",
                  "text": "Al ejecutar consultas de solo lectura de alto volumen con Entity Framework Core en .NET 8, ¿por qué es recomendable invocar el método AsNoTracking()?",
                  "options": [
                        "Desactiva el ChangeTracker interno de la sesión, disminuyendo notablemente el consumo de memoria RAM y acelerando la velocidad de recuperación de datos de lectura.",
                        "Obliga al motor de base de datos a bloquear todas las tablas en modo exclusivo para evitar lecturas sucias durante transacciones concurrentes de red distribuida corporativa.",
                        "Transforma automáticamente las consultas LINQ en llamadas asíncronas gRPC hacia un clúster de servidores de almacenamiento distribuido en la nube privada de la organización.",
                        "Genera una copia física de la base de datos completa en el almacenamiento local del cliente antes de deserializar los registros en memoria principal del host evaluado."
                  ],
                  "correct": 0,
                  "feedback": "AsNoTracking() le indica a EF Core que no cree snapshots ni rastree los objetos devueltos en su ChangeTracker interno. Esto ahorra memoria significativa y ciclos de CPU en operaciones de reporte o lectura pura.",
                  "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 3: Managing Relational Data with Entity Framework Core)"
            },
            {
                  "id": "sim-master-q37",
                  "number": 37,
                  "moduleRef": "Plataforma .NET 8 · Mark J. Price",
                  "text": "De acuerdo con Mark J. Price, ¿cuáles son los fundamentos tecnológicos que otorgan a gRPC una eficiencia de red significativamente superior a REST sobre JSON?",
                  "options": [
                        "Emplea compresión de texto plano sobre túneles UDP garantizando que los paquetes perdidos en la red se ignoren sin penalizar el rendimiento del host de aplicaciones corporativas.",
                        "Utiliza serialización binaria fuertemente tipada con Protocol Buffers y multiplexa transmisiones bidireccionales sobre una única conexión persistente HTTP/2 en la capa de transporte de red.",
                        "Transfiere scripts en lenguaje C# compilados dinámicamente que se ejecutan directamente en la memoria de los enrutadores de red intermedios del conmutador centralizado del sistema.",
                        "Suprime el uso de certificados criptográficos TLS permitiendo transmitir transacciones bancarias en texto plano a máxima velocidad de hardware disponible en la red corporativa institucional."
                  ],
                  "correct": 1,
                  "feedback": "gRPC utiliza HTTP/2 para enviar múltiples peticiones sobre un único socket TCP de forma multiplexada (sin bloqueo head-of-line) y serializa contratos fuertemente tipados en binario compacto con Protobuf, superando el peso del JSON textual.",
                  "reference": "Mark J. Price · Apps and Services with .NET 8 (Cap. 5: Building Fast and Compact Network Services with gRPC)"
            },
            {
                  "id": "sim-master-q38",
                  "number": 38,
                  "moduleRef": "Bases de Datos · Catherine Ricardo / Andy Oppel",
                  "text": "En la arquitectura canónica ANSI/SPARC de tres niveles para DBMS (doctrina Oppel y Ricardo), ¿qué nivel garantiza la independencia física de datos y cómo la logra?",
                  "options": [
                        "El Nivel Externo (Vistas), al compilar los procedimientos almacenados en microcódigo para suprimir la necesidad de esquemas de tablas relacionales en disco local del servidor.",
                        "El Nivel Conceptual (Lógico), al almacenar exclusivamente los diagramas entidad-relación en memoria caché sin interactuar con los dispositivos de almacenamiento masivo del centro de datos.",
                        "El Nivel Interno (Físico), al aislar los métodos de acceso a disco e indexación permitiendo modificar el almacenamiento sin alterar el esquema conceptual lógico del sistema.",
                        "El Nivel de Red (Transporte), al encriptar las conexiones TCP entre los clientes y el servidor para prevenir accesos no autorizados a las bases de datos corporativas institucionales."
                  ],
                  "correct": 2,
                  "feedback": "La independencia física de datos es la capacidad de modificar el esquema interno (estructuras de disco, índices, particionamiento) sin tener que modificar el esquema conceptual ni las aplicaciones de los usuarios.",
                  "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 1: Arquitectura y Modelos de Datos, pp. 10-25)"
            },
            {
                  "id": "sim-master-q39",
                  "number": 39,
                  "moduleRef": "Bases de Datos · Catherine Ricardo",
                  "text": "En la teoría formal del Modelo Entidad-Relación de Catherine M. Ricardo, ¿qué condición estructural caracteriza a una Entidad Débil y cómo se identifica en el esquema relacional?",
                  "options": [
                        "Posee múltiples claves subrogadas auto-incrementables y puede existir de forma independiente sin asociarse a ninguna otra tabla del sistema relacional corporativo de la institución evaluada.",
                        "Almacena exclusivamente atributos derivados calculados en tiempo de ejecución por consultas SQL mediante el uso de vistas temporales indexadas en disco del motor corporativo de datos.",
                        "Se representa mediante un rectángulo de línea simple y no admite la definición de restricciones de integridad referencial ni eliminación en cascada de registros del sistema de información.",
                        "Su existencia depende de una entidad fuerte propietaria y carece de clave primaria propia, requiriendo un discriminador más la clave foránea identificadora en el diseño."
                  ],
                  "correct": 3,
                  "feedback": "Una entidad débil no posee atributos suficientes para conformar una clave primaria por sí misma; depende existencialmente de una entidad padre (fuerte) y se identifica mediante la clave de esta unida a su discriminador o clave parcial.",
                  "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 2: El Modelo Entidad-Vínculo, pp. 35-60)"
            },
            {
                  "id": "sim-master-q40",
                  "number": 40,
                  "moduleRef": "Diseño Lógico de Bases de Datos · Mercedes Marques",
                  "text": "Al realizar el diseño lógico relacional según Mercedes Marques, ¿cuál es la regla de transformación formal estricta para una relación Muchos a Muchos (N:M)?",
                  "options": [
                        "Se genera una nueva relación (tabla de unión) cuya clave primaria compuesta está formada por las claves foráneas que referencian a las entidades participantes.",
                        "Se propaga la clave primaria de cualquiera de las entidades como clave foránea en la otra, permitiendo valores nulos en los atributos compartidos del esquema relacional.",
                        "Se fusionan ambas entidades en una sola tabla desnormalizada almacenando arreglos repetitivos delimitados por comas en una única columna de texto plano del motor relacional.",
                        "Se crea una vista materializada que bloquea permanentemente las actualizaciones concurrentes de registros en ambas tablas para evitar inconsistencias de red local en el clúster."
                  ],
                  "correct": 0,
                  "feedback": "Una interrelación N:M no puede mapearse directamente agregando una foránea sin violar la 1FN (grupos repetitivos). Exige crear una tabla intermedia cuya clave primaria compuesta esté formada por las claves foráneas de ambas entidades.",
                  "reference": "Mercedes Marques · Bases de datos (Cap. 3: Paso del Modelo Conceptual al Lógico Relacional, pp. 75-92)"
            },
            {
                  "id": "sim-master-q41",
                  "number": 41,
                  "moduleRef": "Normalización de Bases de Datos · Marques / Ricardo",
                  "text": "En la teoría formal de normalización, ¿qué requisito indispensable debe cumplirse para que una relación en Primera Forma Normal (1FN) alcance la Segunda Forma Normal (2FN)?",
                  "options": [
                        "Todos los atributos determinantes deben ser obligatoriamente superclaves candidatas, eliminando cualquier tipo de dependencia funcional no trivial del diseño relacional de la tabla.",
                        "Todos los atributos no clave deben depender funcionalmente de manera completa de la clave primaria, eliminando dependencias parciales en claves compuestas del esquema relacional.",
                        "No deben existir dependencias funcionales transitivas entre los atributos no clave respecto a la clave primaria definida en el esquema relacional de la tabla corporativa.",
                        "Todos los atributos multivaluados deben almacenarse en cadenas binarias comprimidas dentro del mismo registro para ahorrar espacio físico en disco del servidor relacional."
                  ],
                  "correct": 1,
                  "feedback": "2FN exige que la tabla esté en 1FN y que ningún atributo no clave tenga dependencia parcial respecto a una parte de la clave primaria. Si la clave es compuesta, ningún campo no clave puede depender de un subconjunto de ella.",
                  "reference": "Mercedes Marques · Bases de datos (Cap. 4: Teoría de la Normalización, pp. 95-120)"
            },
            {
                  "id": "sim-master-q42",
                  "number": 42,
                  "moduleRef": "Normalización de Bases de Datos · Ricardo / Marques",
                  "text": "Al normalizar un esquema relacional a Tercera Forma Normal (3FN), ¿qué anomalía estructural se subsana y cuál es el procedimiento formal de descomposición?",
                  "options": [
                        "Se eliminan los valores nulos reemplazándolos por ceros o cadenas vacías directamente en los archivos de datos físicos del servidor corporativo de la institución evaluada.",
                        "Se descompone la tabla en tantas relaciones unitarias como columnas existan en el diseño para suprimir el uso de claves primarias compuestas en las transacciones del sistema.",
                        "Se eliminan las dependencias transitivas (A -> B y B -> C) extrayendo B y C a una relación separada donde B actúa como clave primaria referenciada.",
                        "Se sustituyen las claves foráneas por índices de dispersión hash en memoria para acelerar la velocidad de consulta en transacciones concurrentes del sistema informático."
                  ],
                  "correct": 2,
                  "feedback": "3FN prohíbe las dependencias funcionales transitivas entre atributos que no son clave (un atributo no clave determina a otro no clave). Se subsana extrayendo los campos implicados a una nueva tabla donde el determinante sea clave primaria.",
                  "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Normalización y Diseño de Esquemas Relacionales, pp. 180-210)"
            },
            {
                  "id": "sim-master-q43",
                  "number": 43,
                  "moduleRef": "Normalización de Bases de Datos · Catherine Ricardo",
                  "text": "Según Catherine M. Ricardo, ¿en qué circunstancia técnica específica una relación que ya cumple con la 3FN viola la Forma Normal de Boyce-Codd (BCNF)?",
                  "options": [
                        "Cuando una tabla relacional contiene más de tres claves foráneas que apuntan a entidades de catálogos generales con menos de diez registros en total en disco.",
                        "Cuando se definen índices agrupados (clustered) sobre columnas alfanuméricas que admiten valores nulos en el motor de base de datos relacional institucional de la empresa.",
                        "Cuando todos los determinantes del esquema son superclaves estrictas y no existen atributos derivados ni dependencias multivaluadas en el diseño relacional del sistema corporativo.",
                        "Cuando existe una dependencia funcional X -> Y donde X no es una superclave candidata, presentándose habitualmente en tablas con claves compuestas solapadas en su estructura."
                  ],
                  "correct": 3,
                  "feedback": "BCNF es más estricta que 3FN: para toda dependencia funcional X -> Y no trivial, X debe ser forzosamente una superclave. En 3FN se permite que Y sea parte de una clave candidata; BCNF elimina esta concesión en tablas con claves solapadas.",
                  "reference": "Catherine M. Ricardo · Bases de Datos (Cap. 6: Forma Normal de Boyce-Codd, pp. 200-208)"
            },
            {
                  "id": "sim-master-q44",
                  "number": 44,
                  "moduleRef": "Diseño Físico de Bases de Datos · Marques / Ricardo",
                  "text": "En el diseño físico de bases de datos de Mercedes Marques, ¿por qué los índices en Árbol B+ son la estructura predeterminada preferida sobre los índices Hash?",
                  "options": [
                        "Porque mantienen los datos ordenados en sus hojas enlazadas soportando eficientemente consultas por rango (BETWEEN, <, >), mientras Hash solo soporta igualdad exacta O(1).",
                        "Porque los índices Hash consumen el triple de memoria caché y no permiten consultar registros individuales mediante comparaciones de igualdad estricta (=) en sentencias SQL del motor.",
                        "Debido a que los árboles B+ eliminan la necesidad de almacenar punteros en disco ejecutando búsquedas aleatorias sin costo de entrada/salida físico en el subsistema de almacenamiento.",
                        "Ya que las estructuras Hash sufren desbalanceo de alturas requiriendo rotaciones dobles continuas para mantener su factor de equilibrio en memoria RAM principal del servidor relacional."
                  ],
                  "correct": 0,
                  "feedback": "Las tablas hash ofrecen búsquedas puntuales O(1) pero carecen de noción de orden (las funciones hash dispersan pseudo-aleatoriamente las claves). Los Árboles B+ tienen todas las hojas enlazadas secuencialmente, facilitando lecturas por rango.",
                  "reference": "Mercedes Marques · Bases de datos (Cap. 6: Almacenamiento e Indexación Física de Datos, pp. 160-185)"
            },
            {
                  "id": "sim-master-q45",
                  "number": 45,
                  "moduleRef": "Diseño Físico de Bases de Datos · Marques / Oppel",
                  "text": "¿Cuál es la diferencia física de almacenamiento entre un Índice Agrupado (Clustered) y un Índice No Agrupado (Non-Clustered) en un motor relacional?",
                  "options": [
                        "El índice agrupado se almacena en memoria RAM volátil; el no agrupado se graba permanentemente en archivos planos del sistema operativo anfitrión del servidor corporativo.",
                        "El agrupado define el orden físico de las filas en disco (uno por tabla); el no agrupado crea una estructura separada con punteros a las filas.",
                        "Una tabla admite hasta doscientos índices agrupados físicos, pero los motores relacionales restringen los no agrupados a un límite estricto de uno solo por tabla.",
                        "El índice agrupado solo admite búsquedas por expresiones regulares; el no agrupado procesa exclusivamente comparaciones numéricas de números enteros sin signo en las consultas del motor."
                  ],
                  "correct": 1,
                  "feedback": "En un índice agrupado (clustered), el nivel hoja del árbol son las propias páginas de datos de la tabla, determinando su secuencia física en disco. Por eso solo puede existir uno por tabla. Los no agrupados son estructuras separadas con punteros al dato.",
                  "reference": "Andy Oppel · Fundamentos de Bases de datos (Cap. 8: Estructuras Físicas e Índices)"
            },
            {
                  "id": "sim-master-q46",
                  "number": 46,
                  "moduleRef": "Bases de Datos · Andy Oppel",
                  "text": "De acuerdo con Andy Oppel, ¿cuál es la función del Optimizador Basado en Costos (CBO) del motor de bases de datos al recibir una sentencia SQL declarativa?",
                  "options": [
                        "Modifica el diseño de las tablas en disco creando automáticamente nuevas claves foráneas y normalizando las relaciones a Tercera Forma Normal en producción corporativa.",
                        "Convierte las consultas relacionales en procedimientos almacenados compilados en C# eliminando la necesidad de verificar la sintaxis de la instrucción recibida en el servidor.",
                        "Evalúa múltiples planes de ejecución posibles estimando operaciones de E/S y CPU mediante estadísticas del catálogo, seleccionando el plan de menor costo proyectado.",
                        "Ejecuta la consulta secuencialmente en todas las combinaciones de índices posibles guardando en disco el resultado de la alternativa más rápida para su posterior uso operativo."
                  ],
                  "correct": 2,
                  "feedback": "El Optimizador Basado en Costos (CBO) genera múltiples árboles de operadores algebraicos relacionales y consulta las estadísticas de distribución de datos (histogramas, número de páginas) para elegir el plan con menor uso estimado de E/S y CPU.",
                  "reference": "Andy Oppel · Fundamentos de Bases de datos (Cap. 10: Procesamiento y Optimización de Consultas)"
            },
            {
                  "id": "sim-master-q47",
                  "number": 47,
                  "moduleRef": "Transacciones y Concurrencia · Andy Oppel / Ricardo",
                  "text": "En el control de concurrencia y transacciones ACID en un DBMS, ¿qué fenómeno de lectura anómala previene el nivel Serializable frente a Repeatable Read?",
                  "options": [
                        "Previene las Lecturas Sucias (Dirty Reads), evitando que una transacción lea datos modificados por otra transacción antes de que ocurra el Rollback correspondiente en la sesión de trabajo.",
                        "Previene las Lecturas No Repetibles, garantizando que el valor de una fila leída previamente no cambie si se vuelve a consultar en la misma transacción activa del sistema.",
                        "Previene los Bloqueos Mutuos (Deadlocks), obligando al procesador del servidor a cancelar inmediatamente todas las solicitudes HTTP entrantes del sistema web en producción corporativa de software.",
                        "Previene las Lecturas Fantasma (Phantom Reads), impidiendo que transacciones concurrentes inserten o eliminen filas que cumplan el predicado de una consulta activa en la base de datos."
                  ],
                  "correct": 3,
                  "feedback": "Repeatable Read bloquea las filas leídas, impidiendo su modificación por otros, pero no bloquea la inserción de nuevas filas en el rango de búsqueda (Lectura Fantasma). Serializable utiliza bloqueos de rango o multiversión (MVCC) para evitar fantasmas.",
                  "reference": "Andy Oppel · Fundamentos de Bases de datos (Cap. 9: Control de Transacciones y Bloqueos ACID)"
            },
            {
                  "id": "sim-master-q48",
                  "number": 48,
                  "moduleRef": "Business Intelligence · Luis Joyanes Aguilar",
                  "text": "En la doctrina de Inteligencia de Negocios de Luis Joyanes Aguilar, ¿cuál es la discrepancia arquitectónica central entre el enfoque de Bill Inmon y el de Ralph Kimball?",
                  "options": [
                        "Inmon propone un Data Warehouse centralizado y normalizado (Top-Down); Kimball plantea la integración modular de Data Marts dimensionales (Bottom-Up) para el análisis analítico corporativo.",
                        "Inmon defiende el uso exclusivo de bases de datos NoSQL basadas en grafos; Kimball propone almacenar todos los datos corporativos en hojas de cálculo planas distribuidas.",
                        "Inmon prescinde por completo de procesos de extracción y carga (ETL); Kimball exige que los almacenes de datos se ejecuten en tiempo real en microservicios ligeros.",
                        "Inmon se enfoca exclusivamente en la minería de textos en redes sociales; Kimball se limita al archivo histórico de nóminas contables de la organización comercial."
                  ],
                  "correct": 0,
                  "feedback": "Inmon propone la arquitectura 'Top-Down': un Data Warehouse corporativo central normalizado (3FN) que luego alimenta data marts departamentales. Kimball defiende 'Bottom-Up': modelado dimensional directo (estrella/copo de nieve) integrado por dimensiones conformadas.",
                  "reference": "Luis Joyanes Aguilar · Inteligencia de negocios y analítica de datos (Cap. 3: Almacenes de Datos y Data Marts, pp. 85-115)"
            },
            {
                  "id": "sim-master-q49",
                  "number": 49,
                  "moduleRef": "Modelado Dimensional · Luis Joyanes Aguilar",
                  "text": "Al diseñar un modelo dimensional para análisis OLAP según Luis Joyanes, ¿qué elementos estructuran una Tabla de Hechos y cuál es su relación con las Dimensiones?",
                  "options": [
                        "Almacena exclusivamente atributos descriptivos textuales normalizados en Tercera Forma Normal sin contener ninguna métrica numérica de desempeño empresarial de la organización analizada de software.",
                        "Contiene métricas cuantitativas del negocio y claves foráneas que apuntan a tablas de dimensiones desnormalizadas formando un Esquema en Estrella de alto rendimiento en consultas.",
                        "Agrupa los procedimientos almacenados de actualización de inventarios bloqueando las consultas de lectura analítica durante las jornadas operativas de ventas de la empresa en línea.",
                        "Se compone de una única clave primaria alfanumérica y réplicas exactas de las tablas operativas OLTP sin requerir transformaciones de limpieza de datos en disco."
                  ],
                  "correct": 1,
                  "feedback": "Una tabla de hechos modela un evento o proceso del negocio y contiene medidas numéricas aditivas/semiaditivas junto a claves foráneas que conectan con las dimensiones (tiempo, producto, región) formando el esquema estrella canónico.",
                  "reference": "Luis Joyanes Aguilar · Inteligencia de negocios y analítica de datos (Cap. 4: Modelado Dimensional y Procesamiento Analítico en Línea)"
            },
            {
                  "id": "sim-master-q50",
                  "number": 50,
                  "moduleRef": "Procesamiento de Datos · Luis Joyanes Aguilar",
                  "text": "En el procesamiento masivo de datos para Inteligencia de Negocios y Big Data según Luis Joyanes, ¿cuál es la justificación técnica del cambio de paradigma de ETL a ELT?",
                  "options": [
                        "Suprime permanentemente la fase de extracción leyendo directamente los pulsos electromagnéticos de los discos duros mediante controladores nativos de bajo nivel del sistema anfitrión.",
                        "Exige que todas las transformaciones matemáticas se ejecuten exclusivamente en el navegador web del usuario final antes de enviarse al repositorio centralizado de la organización corporativa.",
                        "Carga primero los datos crudos en el destino aprovechando el procesamiento paralelo masivo del Data Warehouse moderno para transformarlos in-situ según la demanda analítica.",
                        "Elimina la necesidad de definir esquemas de datos o políticas de gobernanza permitiendo que cualquier usuario ejecute borrados irreversibles en producción comercial de la empresa."
                  ],
                  "correct": 2,
                  "feedback": "En las arquitecturas modernas de Big Data y Cloud Data Warehouses, se cargan los datos en su estado crudo directamente en el repositorio (Extract-Load) y se aprovecha el motor de procesamiento distribuido del destino (MPP) para transformarlos (Transform) bajo demanda.",
                  "reference": "Luis Joyanes Aguilar · Inteligencia de negocios y analítica de datos (Cap. 5: Integración de Datos: De ETL a ELT en Big Data)"
            }
      ]
},
    {
      id: "examen-integrador-tech-2026",
      title: "Examen Integrador Profesional · Ciencias de la Computación & Arquitectura de Sistemas",
      badge: "EXAMEN INTEGRAL OFICIAL",
      category: "Evaluación Integral",
      description: "30 reactivos de alta exigencia técnica que abarcan los 30 módulos formativos de la plataforma: algoritmos, bases de datos relacionales, arquitectura backend en .NET 8, concurrencia de hardware, métricas de confiabilidad, gestión de proyectos (Haynes) y modelado formal (Sommerville / Cairó).",
      author: "Comité Técnico de Arquitectura de Software",
      version: "2.4",
      timeLimitMinutes: 60,
      passingScore: 80,
      immediateFeedback: false,
      shuffleOptions: true,
      shuffleQuestions: false,
      totalQuestions: 30,
      questions: [
        // 1. Módulo 01: Big O
        {
          id: "tech-q01",
          number: 1,
          moduleRef: "01",
          text: "Al analizar la complejidad computacional temporal en el peor de los casos (Worst Case) de un algoritmo recursivo que divide el problema en dos mitades y realiza una recombinación lineal de los elementos (como Merge Sort), ¿cuál es la notación asintótica estricta correspondiente según el Teorema Maestro?",
          options: [
            "O(n log n)",
            "O(n²)",
            "O(log n)",
            "O(2ⁿ)"
          ],
          correct: 0,
          feedback: "La recurrencia clásica de Divide y Vencerás T(n) = 2T(n/2) + O(n) produce una complejidad temporal estricta de O(n log n). El árbol de recursión tiene una profundidad de log₂(n) niveles y en cada nivel se procesan exactamente n elementos durante la mezcla.",
          reference: "Donald Knuth & Thomas H. Cormen (Introduction to Algorithms)"
        },
        // 2. Módulo 02: Greedy vs D&C
        {
          id: "tech-q02",
          number: 2,
          moduleRef: "02",
          text: "En la resolución del clásico problema de la Mochila (Knapsack Problem), ¿bajo qué condición matemática estricta garantiza un enfoque voraz (Greedy) la obtención de la solución óptima global?",
          options: [
            "Únicamente cuando los elementos son divisibles y pueden fraccionarse en partes continuas (Problema de la Mochila Fraccionaria).",
            "Siempre, tanto en la variante discreta 0/1 como en la fraccionaria, ordenando por peso absoluto.",
            "Solo si la capacidad de la mochila es un número primo mayor que el total de elementos.",
            "Cuando se aplica una estrategia de ordenamiento basada en el menor costo computacional de memoria RAM."
          ],
          correct: 0,
          feedback: "El algoritmo voraz (Greedy) solo garantiza el óptimo global en la Mochila Fraccionaria, ordenando por valor específico (valor/peso). En la Mochila 0/1 (elementos enteros indivisibles), la elección voraz local puede dejar espacio desaprovechado, requiriendo Programación Dinámica.",
          reference: "Cormen, Leiserson, Rivest & Stein (Algoritmos)"
        },
        // 3. Módulo 03: Árboles AVL
        {
          id: "tech-q03",
          number: 3,
          moduleRef: "03",
          text: "En un árbol binario de búsqueda balanceado AVL, tras insertar un nodo en el subárbol derecho del hijo izquierdo de la raíz provocando un factor de equilibrio de -2 (o desbalance Izquierda-Derecha), ¿qué operación de reestructuración matemática restaura el invariante AVL?",
          options: [
            "Rotación Doble Izquierda-Derecha (LR): una rotación simple a la izquierda en el hijo izquierdo, seguida de una rotación simple a la derecha en la raíz desbalanceada.",
            "Rotación Simple a la Derecha (RR) directamente sobre la raíz del árbol.",
            "Una reconstrucción completa del árbol mediante recorrido en anchura (BFS).",
            "Eliminación inmediata del nodo recién insertado para prevenir la asimetría de memoria."
          ],
          correct: 0,
          feedback: "El caso Izquierda-Derecha (LR) es una discrepancia zig-zag no lineal. Se resuelve mediante una Rotación Doble: primero se rota a la izquierda el hijo izquierdo para transformar el desbalance en un caso puro Izquierda-Izquierda (LL), y luego se rota a la derecha la raíz desbalanceada.",
          reference: "Georgy Adelson-Velsky & Evgenii Landis (Árboles AVL)"
        },
        // 4. Módulo 04: Grafos BFS vs DFS
        {
          id: "tech-q04",
          number: 4,
          moduleRef: "04",
          text: "Si se requiere determinar el camino más corto en número de aristas entre dos vértices dentro de un grafo no ponderado, ¿cuál es el algoritmo de exploración óptimo y qué estructura de datos requiere?",
          options: [
            "Búsqueda en Anchura (BFS), utilizando una estructura de datos de Cola (FIFO) para explorar los vértices nivel por nivel.",
            "Búsqueda en Profundidad (DFS), empleando una estructura de Pila (LIFO) recursiva.",
            "El algoritmo de Bellman-Ford, utilizando un montículo binario de mínimos.",
            "Recorrido post-orden en un árbol de expansión mínima utilizando una tabla hash de dispersión."
          ],
          correct: 0,
          feedback: "BFS (Breadth-First Search) visita sistemáticamente todos los vértices a distancia k antes de avanzar a los de distancia k+1 gracias a la disciplina FIFO de una Cola, garantizando encontrar la ruta más corta en aristas. DFS no garantiza la ruta mínima.",
          reference: "Robert Sedgewick (Algorithms) & Cormen"
        },
        // 5. Módulo 05: ANSI/SPARC 3 Niveles
        {
          id: "tech-q05",
          number: 5,
          moduleRef: "05",
          text: "Dentro de la arquitectura canónica ANSI/SPARC de tres niveles para DBMS (doctrina Oppel), ¿qué nivel define la estructura lógica global de toda la base de datos para la comunidad de usuarios, ocultando los detalles físicos de almacenamiento en disco?",
          options: [
            "Nivel Conceptual (o Lógico).",
            "Nivel Interno (o Físico).",
            "Nivel Externo (Vistas de Usuario).",
            "Nivel de Transporte de Red (TDS)."
          ],
          correct: 0,
          feedback: "El Nivel Conceptual describe todas las entidades, relaciones, restricciones de integridad y tipos de datos de forma global y agnóstica al hardware. El Nivel Externo son las vistas particulares de cada usuario, y el Nivel Interno detalla la organización física de archivos y punteros en disco.",
          reference: "Andy Oppel (Bases de Datos) & Estándar ANSI/X3/SPARC"
        },
        // 6. Módulo 06: Modelado Conceptual ERD
        {
          id: "tech-q06",
          number: 6,
          moduleRef: "06",
          text: "En el diseño conceptual de bases de datos mediante Diagramas Entidad-Relación (ERD), ¿qué caracteriza formalmente a una 'Entidad Débil' y cómo se representa en la notación canónica de Peter Chen?",
          options: [
            "Es una entidad cuya existencia depende de una entidad fuerte propietaria y carece de clave primaria propia; se representa con un rectángulo con doble borde.",
            "Es una tabla que contiene columnas con valores nulos; se dibuja con una elipse con línea punteada.",
            "Es una relación N:M que ha sido desnormalizada; se ilustra con un rombo sin líneas de cardinalidad.",
            "Es un atributo multivaluado que se almacena en memoria caché externa."
          ],
          correct: 0,
          feedback: "En la notación de Chen, una Entidad Débil (Weak Entity) no puede identificarse por sus propios atributos y depende de una entidad dominante mediante una relación de identificación (rombo doble). Su clave parcial (discriminador) se subraya con línea discontinua.",
          reference: "Peter Chen (The Entity-Relationship Model) & Elmasri-Navathe"
        },
        // 7. Módulo 07: Normalización
        {
          id: "tech-q07",
          number: 7,
          moduleRef: "07",
          text: "Una tabla relacional ya se encuentra en Primera Forma Normal (1FN) y posee una clave primaria compuesta por dos atributos (A, B). Si un atributo no clave C depende funcionalmente únicamente de A (A ➔ C), ¿qué anomalía formal se presenta y cómo se alcanza la Segunda Forma Normal (2FN)?",
          options: [
            "Presenta una Dependencia Parcial; para alcanzar 2FN se debe descomponer la tabla separando el atributo dependiente (A, C) en una nueva relación.",
            "Presenta una Dependencia Transitiva; para alcanzar 2FN se debe crear un índice agrupado sobre B.",
            "Presenta una Dependencia Multivaluada; se resuelve convirtiendo el campo C en una clave foránea hacia la tabla maestra.",
            "La tabla ya cumple 2FN automáticamente porque carece de grupos repetitivos."
          ],
          correct: 0,
          feedback: "La 2FN prohíbe las dependencias funcionales parciales: todo atributo no clave debe depender de la totalidad de la clave primaria, no de una fracción de ella. La solución consiste en proyectar {A, C} en una relación independiente.",
          reference: "Edgar F. Codd (A Relational Model of Data for Large Shared Data Banks)"
        },
        // 8. Módulo 08: Sublenguajes SQL
        {
          id: "tech-q08",
          number: 8,
          moduleRef: "08",
          text: "En la taxonomía formal del estándar SQL ANSI/ISO, ¿cuál es la diferencia técnica de ejecución y registro transaccional entre las sentencias 'DELETE FROM Clientes;' y 'TRUNCATE TABLE Clientes;'?",
          options: [
            "'DELETE' es una operación DML que evalúa fila por fila y registra cada eliminación individualmente en el archivo WAL/log de transacciones; 'TRUNCATE' es DDL, desasigna páginas de datos de forma masiva y es mínimamente registrada.",
            "'TRUNCATE' pertenece a DCL y solo puede ser invocado por el usuario administrador 'sa'; 'DELETE' pertenece a TCL.",
            "'DELETE' elimina la definición de la tabla del diccionario de datos; 'TRUNCATE' solo oculta las filas temporalmente.",
            "Ambas sentencias son idénticas en rendimiento y consumo de memoria del motor relacional."
          ],
          correct: 0,
          feedback: "DELETE es DML: dispara triggers de eliminación, valida constraints por fila y genera un volumen masivo de log. TRUNCATE es DDL: no dispara triggers row-level, desasigna directamente las extensiones de almacenamiento y restablece las columnas identity a su semilla original.",
          reference: "C.J. Date & Guía de Motores Relacionales SQL"
        },
        // 9. Módulo 09: ACID & Axiomas de Armstrong
        {
          id: "tech-q09",
          number: 9,
          moduleRef: "09",
          text: "Dentro del conjunto canónico de los Axiomas de Armstrong para inferir dependencias funcionales en bases de datos relacionales, ¿qué establece la regla de 'Aumento' (Augmentation)?",
          options: [
            "Si X ➔ Y se cumple en una relación, entonces XZ ➔ YZ se cumple para cualquier conjunto de atributos Z.",
            "Si X ➔ Y y Y ➔ Z se cumplen, entonces X ➔ Z se cumple obligatoriamente.",
            "Si Y es un subconjunto de X (Y ⊆ X), entonces X ➔ Y es una dependencia trivial.",
            "Si X ➔ Y y X ➔ Z, entonces X ➔ YZ representa la suma de cardinalidades de la tabla."
          ],
          correct: 0,
          feedback: "Los tres axiomas primarios de William W. Armstrong son: Reflexividad (si Y ⊆ X, entonces X ➔ Y), Aumento (si X ➔ Y, entonces XZ ➔ YZ) y Transitividad (si X ➔ Y y Y ➔ Z, entonces X ➔ Z).",
          reference: "William W. Armstrong (1974) & Raghu Ramakrishnan"
        },
        // 10. Módulo 10: Índices & B+ Tree
        {
          id: "tech-q10",
          number: 10,
          moduleRef: "10",
          text: "¿Cuál es la característica arquitectónica de almacenamiento que diferencia a un Índice Agrupado (Clustered Index) de un Índice No Agrupado (Non-Clustered Index) en un motor relacional como SQL Server o PostgreSQL?",
          options: [
            "En el Índice Agrupado, las páginas hoja del árbol B+ contienen físicamente las filas completas de datos de la tabla, ordenadas físicamente según la clave del índice; solo puede existir uno por tabla.",
            "El Índice Agrupado almacena los datos en la memoria RAM y se borra al reiniciar el servidor.",
            "Pueden crearse hasta 255 índices agrupados independientes por cada tabla relacional.",
            "El Índice No Agrupado ordena físicamente el disco duro mediante desfragmentación magnética."
          ],
          correct: 0,
          feedback: "Una tabla solo puede tener un único orden físico, por lo que solo admite un Clustered Index (cuyas hojas son los datos reales). Los índices No Agrupados son estructuras auxiliares cuyos nodos hoja contienen punteros lógicos (clave clustered o RID) hacia la fila correspondiente.",
          reference: "Microsoft SQL Server Storage Internals & Ramakrishnan"
        },
        // 11. Módulo 11: HTTP Semantics RFC 9110
        {
          id: "tech-q11",
          number: 11,
          moduleRef: "11",
          text: "De acuerdo con el estándar RFC 9110 (HTTP Semantics), ¿cuál de los siguientes métodos de petición se define formalmente como 'Idempotente pero NO Seguro'?",
          options: [
            "PUT (o DELETE)",
            "GET",
            "POST",
            "HEAD"
          ],
          correct: 0,
          feedback: "Un método es seguro si no altera el estado del servidor (ej. GET, HEAD, OPTIONS). Un método es idempotente si múltiples peticiones idénticas producen exactamente el mismo efecto final en el servidor. PUT y DELETE modifican el estado (no son seguros) pero son idempotentes.",
          reference: "IETF RFC 9110: HTTP Semantics"
        },
        // 12. Módulo 12: Modelo de Madurez de Richardson
        {
          id: "tech-q12",
          number: 12,
          moduleRef: "12",
          text: "En el Modelo de Madurez de Richardson para APIs REST, ¿qué capacidad técnica distingue a una API que alcanza el Nivel 3 ('La Gloria de REST') frente a una de Nivel 2?",
          options: [
            "La incorporación de Controles Hipermediales como el Motor del Estado de la Aplicación (HATEOAS), incluyendo enlaces dinámicos ('_links') en las respuestas JSON.",
            "El uso estricto de verbos HTTP estándar (GET, POST, PUT, DELETE) con códigos de estado HTTP 2xx/4xx/5xx.",
            "La sustitución obligatoria de JSON por Protocol Buffers binarios de gRPC.",
            "La inclusión de autenticación multifactor biométrica en la cabecera Authorization."
          ],
          correct: 0,
          feedback: "Nivel 0: El pantano de POX (una sola URI, solo POST). Nivel 1: Recursos con URIs individuales. Nivel 2: Verbos HTTP semánticos y códigos de estado. Nivel 3: HATEOAS (Hypermedia As The Engine Of Application State), donde la respuesta guía al cliente sobre qué acciones puede realizar a continuación.",
          reference: "Leonard Richardson & Martin Fowler"
        },
        // 13. Módulo 13: POO & Despacho Dinámico
        {
          id: "tech-q13",
          number: 13,
          moduleRef: "13",
          text: "En el paradigma de Programación Orientada a Objetos implementado en la máquina virtual CLR de .NET, ¿a través de qué estructura en memoria se resuelve en tiempo de ejecución la invocación de un método sobreescrito ('override') mediante polimorfismo dinámico?",
          options: [
            "A través de la Tabla de Métodos Virtuales (vtable o MethodTable) asociada al Type Handle del objeto en el Heap.",
            "Mediante un bucle secuencial que inspecciona el código fuente C# con Reflection en cada llamada.",
            "Por medio del Stack Frame del hilo que copia el código binario en memoria caché L2.",
            "Directamente en tiempo de compilación mediante ligadura estática (Early Binding) en el ensamblado."
          ],
          correct: 0,
          feedback: "Cuando un método es virtual/override, el compilador emite la instrucción IL 'callvirt'. En runtime, el CLR consulta el puntero al MethodTable (vtable) del objeto real en el Heap para invocar la dirección de memoria de la implementación derivada concreta (despacho dinámico).",
          reference: "CLR via C# (Jeffrey Richter)"
        },
        // 14. Módulo 14: Patrones de Diseño GoF
        {
          id: "tech-q14",
          number: 14,
          moduleRef: "14",
          text: "Si se requiere permitir que un objeto altere su comportamiento dinámicamente cuando su estado interno cambia, de modo que parezca haber cambiado de clase (eliminando largas cadenas anidadas de 'switch' o 'if-else'), ¿qué patrón de diseño GoF es el indicado?",
          options: [
            "State (Comportamiento)",
            "Strategy (Comportamiento)",
            "Adapter (Estructural)",
            "Singleton (Creacional)"
          ],
          correct: 0,
          feedback: "El patrón State encapsula cada estado posible en una clase derivada independiente con la misma interfaz. El objeto contexto delega las operaciones al objeto estado actual, el cual puede transicionar el contexto hacia otro estado en runtime de forma limpia.",
          reference: "Gang of Four (Design Patterns: Elements of Reusable Object-Oriented Software)"
        },
        // 15. Módulo 15: Theo Mandel UI/UX
        {
          id: "tech-q15",
          number: 15,
          moduleRef: "15",
          text: "¿Cuáles son las Tres Reglas de Oro para el diseño de interfaces humano-computadora formuladas por Theo Mandel y citadas en la ingeniería de software?",
          options: [
            "1) Dar el control al usuario; 2) Reducir la carga de memoria del usuario; 3) Hacer la interfaz consistente.",
            "1) Minimizar el código JavaScript; 2) Maximizar el contraste cromático; 3) Prohibir el uso del ratón.",
            "1) Cargar en menos de 1 segundo; 2) Utilizar tipografía Serif; 3) Solicitar contraseña en cada pantalla.",
            "1) Forzar flujos lineales obligatorios; 2) Ocultar opciones avanzadas; 3) Automatizar el cierre de sesión cada 2 minutos."
          ],
          correct: 0,
          feedback: "Theo Mandel estipula: 1) Place the user in control (acciones reversibles, navegación flexible), 2) Reduce the user's memory load (reconocimiento sobre recuerdo, valores por omisión) y 3) Make the interface consistent (coherencia visual, terminológica y de comportamiento).",
          reference: "Theo Mandel (The Elements of User Interface Design)"
        },
        // 16. Módulo 16: Triángulo de Hierro & Brooks
        {
          id: "tech-q16",
          number: 16,
          moduleRef: "16",
          text: "¿Qué postula la célebre Ley de Brooks sobre la gestión de cronogramas en proyectos de ingeniería de software con retrasos?",
          options: [
            "'Agregar personal a un proyecto de software con retraso lo retrasa aún más' (Adding manpower to a late software project makes it later).",
            "'El costo de desarrollo de software se duplica cada 18 meses independientemente del tamaño del equipo'.",
            "'Todo defecto detectado en producción cuesta exactamente 10 veces más que en la fase de requerimientos'.",
            "'El tiempo de entrega es directamente proporcional al número de líneas de código escritas por día'."
          ],
          correct: 0,
          feedback: "Fred Brooks demostró que el costo de comunicación, la curva de aprendizaje y la necesidad de que los desarrolladores senior capaciten a los nuevos integrantes detrae tiempo del avance técnico, amplificando el retraso original.",
          reference: "Fred Brooks (The Mythical Man-Month)"
        },
        // 17. Módulo 17: EDT / WBS Regla del 100%
        {
          id: "tech-q17",
          number: 17,
          moduleRef: "17",
          text: "En la gestión del alcance según Marion E. Haynes y el PMI, ¿en qué consiste la 'Regla del 100%' al construir la Estructura de Descomposición del Trabajo (EDT / WBS)?",
          options: [
            "La EDT debe incluir el 100% de todo el trabajo definido por el alcance del proyecto y nada más; la suma del trabajo de los niveles hijos debe ser exactamente el 100% del nivel padre.",
            "Cada paquete de trabajo debe tener una probabilidad de éxito del 100% antes de iniciarse la codificación.",
            "El 100% de los programadores debe estar asignado a una tarea de la ruta crítica de forma continua.",
            "El presupuesto debe pagarse al 100% al momento de aprobar el acta de constitución del proyecto."
          ],
          correct: 0,
          feedback: "La regla del 100% es el principio rector de la EDT: no puede omitir ningún entregable requerido (evita olvidar trabajo necesario) y no puede contener nada fuera del alcance acordado (evita el Scope Creep o corrupción del alcance).",
          reference: "Marion E. Haynes (Project Management) & PMBOK Guide"
        },
        // 18. Módulo 18: Inyección de Dependencias & C# 12
        {
          id: "tech-q18",
          number: 18,
          moduleRef: "18",
          text: "En el contenedor de Inyección de Dependencias de ASP.NET Core, ¿qué grave patología arquitectónica ocurre si un servicio registrado como 'Singleton' recibe inyectado en su constructor a un servicio registrado con ciclo de vida 'Scoped'?",
          options: [
            "Dependencia Cautiva (Captive Dependency): la instancia Scoped queda capturada de por vida en la memoria por el Singleton, provocando colisiones multihilo y fugas de memoria con DbContext.",
            "Excepción inmediata de StackOverflowException al compilar el proyecto en modo Release.",
            "El contenedor IoC degrada el Singleton a ciclo de vida Transient automáticamente en runtime.",
            "La base de datos cancela todas las conexiones TCP activas por violación de seguridad."
          ],
          correct: 0,
          feedback: "Un Singleton nunca muere mientras la app esté viva. Al recibir un Scoped (diseñado para vivir solo durante una solicitud HTTP), ese Scoped jamás se libera ni se invoca su Dispose(), provocando que múltiples solicitudes concurrentes compartan la misma instancia no thread-safe (ej. DbContext).",
          reference: "Microsoft Dependency Injection Guidelines & Mark J. Price"
        },
        // 19. Módulo 19: EF Core & Northwind
        {
          id: "tech-q19",
          number: 19,
          moduleRef: "19",
          text: "Al ejecutar consultas paralelas con 'Task.WhenAll' sobre Entity Framework Core, ¿por qué es mandatorio utilizar 'IDbContextFactory<TContext>' en lugar de inyectar una única instancia de 'DbContext'?",
          options: [
            "Porque 'DbContext' no es thread-safe y su conexión subyacente y StateManager colapsan lanzando InvalidOperationException si dos hilos operan concurrentemente sobre él.",
            "Porque 'IDbContextFactory' compila las consultas a código máquina nativo eliminando el tiempo de conexión a SQL Server.",
            "Porque SQL Server prohíbe abrir más de un socket de red por cada servidor físico.",
            "Porque Task.WhenAll solo admite métodos síncronos que no utilicen el operador await."
          ],
          correct: 0,
          feedback: "DbContext es una unidad de trabajo ligera diseñada para un solo hilo de ejecución. IDbContextFactory permite fabricar instancias independientes y efímeras con 'await using var ctx = factory.CreateDbContextAsync()', logrando concurrencia real sin colisiones.",
          reference: "Entity Framework Core Team & Mark J. Price"
        },
        // 20. Módulo 20: gRPC & Streaming
        {
          id: "tech-q20",
          number: 20,
          moduleRef: "20",
          text: "¿Qué característica de HTTP/2 permite a gRPC transmitir cientos de solicitudes remotas concurrentes en ambas direcciones sin sufrir el problema de Bloqueo de Cabeza de Línea (Head-of-Line Blocking) a nivel de aplicación que aqueja a HTTP/1.1?",
          options: [
            "La multiplexación de tramas binarias (Frames) intercaladas en múltiples flujos (Streams) independientes sobre una única conexión TCP persistente.",
            "La compresión GZIP obligatoria de los paquetes TCP a nivel de tarjeta de red física.",
            "La apertura de 100 conexiones TCP paralelas por cada usuario autenticado.",
            "El cambio automático de protocolo a UDP plano cuando el tráfico excede 1 Gbps."
          ],
          correct: 0,
          feedback: "En HTTP/1.1, cada conexión TCP procesa una solicitud a la vez. En HTTP/2, los mensajes se dividen en frames binarios con identificador de stream, permitiendo entrelazar paquetes de peticiones y respuestas en una sola conexión TCP sin bloquearse mutuamente.",
          reference: "CNCF & gRPC Architecture Guide"
        },
        // 21. Módulo 21: GraphQL Over/Under-fetching
        {
          id: "tech-q21",
          number: 21,
          moduleRef: "21",
          text: "En el diseño de interfaces de servicios web, ¿qué patología de red define el término 'Under-fetching' y cómo la resuelve formalmente GraphQL?",
          options: [
            "Ocurre cuando un endpoint REST devuelve información insuficiente, forzando al cliente a encadenar múltiples peticiones de red sucesivas (problema N+1); GraphQL lo resuelve permitiendo consultar todo el grafo de relaciones en un único Query.",
            "Ocurre cuando el servidor envía megabytes de datos innecesarios que el cliente descarta.",
            "Ocurre cuando se agota la memoria del servidor de base de datos debido a un ataque DDoS.",
            "Ocurre cuando el tiempo de espera (timeout) de la solicitud HTTP expira antes de 30 segundos."
          ],
          correct: 0,
          feedback: "Over-fetching es recibir datos de más; Under-fetching es recibir datos de menos (ej. obtener una orden en /orders/1 y luego tener que llamar a /customers/5 y a /products/10). GraphQL permite especificar en una sola solicitud toda la jerarquía requerida.",
          reference: "GraphQL Foundation & Lee Byron"
        },
        // 22. Módulo 22: JWT RFC 7519
        {
          id: "tech-q22",
          number: 22,
          moduleRef: "22",
          text: "Respecto a la seguridad criptográfica del estándar JSON Web Token (RFC 7519), ¿cuál es la distinción fundamental entre un token firmado (JWS) y un token cifrado (JWE)?",
          options: [
            "En un JWS (JSON Web Signature) el payload viaja codificado en Base64Url y es legible en texto plano por cualquiera que intercepte el token; la firma solo garantiza autenticidad e integridad, no confidencialidad.",
            "En un JWS el payload está cifrado militarmente con AES-256 y nadie sin la clave privada puede leer su contenido.",
            "Un JWE no contiene cabecera ni firma criptográfica y solo funciona en redes locales.",
            "JWS solo puede ser firmado con contraseñas de menos de 8 caracteres alfanuméricos."
          ],
          correct: 0,
          feedback: "¡Trampa clásica de examen! Base64Url NO es cifrado; es una simple codificación de caracteres. Un JWS garantiza que el token no ha sido alterado (integridad) y que proviene del emisor legítimo (autenticidad), pero cualquiera puede decodificarlo. Para confidencialidad se requiere JWE.",
          reference: "IETF RFC 7519 (JSON Web Token) & RFC 7516 (JWE)"
        },
        // 23. Módulo 23: IEEE 610.12 (Error, Defecto, Falla)
        {
          id: "tech-q23",
          number: 23,
          moduleRef: "23",
          text: "De acuerdo con el estándar IEEE 610.12 y la ingeniería de software formal, ¿cuál es la relación causal precisa entre Error, Defecto (Bug) y Falla?",
          options: [
            "El Error es la equivocación mental humana; ésta introduce un Defecto estático en el código o documento; el cual, al ejecutarse bajo ciertas condiciones dinámicas, detona una Falla observable en el sistema.",
            "El Defecto es la acción del programador; la Falla es la línea de código; y el Error es la caída del servidor.",
            "Error, Defecto y Falla son sinónimos absolutos que pueden utilizarse indistintamente según el marco ágil.",
            "Una Falla solo puede ser provocada por interrupciones de energía eléctrica en el centro de datos."
          ],
          correct: 0,
          feedback: "Cadena causal formal: Human Error (mental) ➔ Inyecta un Fault/Defect (estático en artefacto) ➔ Que al ejecutarse produce una Failure (comportamiento externo dinámico incorrecto). Un defecto puede permanecer latente durante años si la entrada nunca lo ejecuta.",
          reference: "IEEE Standard 610.12 & ISO/IEC/IEEE 24765"
        },
        // 24. Módulo 24: Métricas de Confiabilidad SRE
        {
          id: "tech-q24",
          number: 24,
          moduleRef: "24",
          text: "Si un sistema bancario de misión crítica tiene un objetivo de disponibilidad del 99.99% ('cuatro nueves') en un año calendario continuo (365 días), ¿cuál es el tiempo máximo acumulado de inactividad permitido (Downtime Error Budget)?",
          options: [
            "Aproximadamente 52.6 minutos al año.",
            "Aproximadamente 8.76 horas al año.",
            "Exactamente 3.65 días al año.",
            "Cero segundos de inactividad tolerados."
          ],
          correct: 0,
          feedback: "Cálculo matemático: 365 días × 24 h/día × 60 min/hora = 525,600 minutos al año. Con 99.99% de disponibilidad, el margen de indisponibilidad es 0.01% (0.0001): 525,600 × 0.0001 = 52.56 minutos (menos de una hora al año). 99.9% permitiría 8.76 horas.",
          reference: "Google Site Reliability Engineering (SRE) & Ian Sommerville"
        },
        // 25. Módulo 25: Concurrencia de Bajo Nivel
        {
          id: "tech-q25",
          number: 25,
          moduleRef: "25",
          text: "Respecto al manejo de eventos en C# en entornos multihilo, ¿por qué es una mala práctica invocar los delegados de un evento dentro de un bloque 'lock (_syncRoot)'?",
          options: [
            "Porque invoca código externo desconocido con el cerrojo retenido; si un suscriptor intenta adquirir otro bloqueo o sincronizarse con un hilo llamador, se produce un riesgo crítico de inversión de bloqueos y Deadlock.",
            "Porque el recolector de basura suspende automáticamente la ejecución de delegados dentro de bloques lock.",
            "Porque la clase MulticastDelegate lanza System.ExecutionEngineException al recibir más de un suscriptor.",
            "Porque los eventos en C# solo pueden dispararse en aplicaciones de consola monohilo."
          ],
          correct: 0,
          feedback: "Nunca debes llamar a código foráneo o desconocido manteniendo un cerrojo (lock) adquirido. Si un suscriptor bloquea esperando otro recurso, o hace Invoke en el hilo de UI que a su vez espera el lock, el sistema colapsa en un Deadlock irrecuperable. La regla es copiar la referencia y disparar fuera del lock.",
          reference: "Framework Design Guidelines (Kwalina & Abrams) & Richter"
        },
        // 26. Módulo 26: BackgroundService & Resiliencia
        {
          id: "tech-q26",
          number: 26,
          moduleRef: "26",
          text: "En un servicio en segundo plano de .NET 8 que hereda de 'BackgroundService', ¿cuál es el mecanismo estándar para responder adecuadamente a una señal de apagado ordenado (Graceful Shutdown) enviada por el Host (SIGTERM)?",
          options: [
            "Monitorear periódicamente 'stoppingToken.IsCancellationRequested' y pasar el 'stoppingToken' a todas las operaciones asíncronas para abortar bucles limpiamente.",
            "Invocar 'Thread.CurrentThread.Abort()' para forzar la detención instantánea del proceso.",
            "Registrar un bloque 'try-catch' que capture 'OutOfMemoryException' y reinicie el contenedor.",
            "Utilizar 'GC.Collect(2, GCCollectionMode.Forced)' cada 500 milisegundos."
          ],
          correct: 0,
          feedback: "BackgroundService expone 'ExecuteAsync(CancellationToken stoppingToken)'. Ante un apagado (SIGTERM/Ctrl+C), el Host cancela el token. El servicio debe respetar la cancelación cooperativa en sus métodos asíncronos para permitir guardar estado antes del límite de tiempo (HostOptions.ShutdownTimeout).",
          reference: "Microsoft.Extensions.Hosting Documentation & Mark J. Price"
        },
        // 27. Módulo 27: Estimación PERT & Validación Haynes
        {
          id: "tech-q27",
          number: 27,
          moduleRef: "27",
          text: "De acuerdo con las fórmulas matemáticas canónicas de PERT (distribución Beta) expuestas por Marion E. Haynes, si una tarea tiene tiempo optimista To = 4 días, más probable Tm = 7 días y pesimista Tp = 16 días, ¿cuál es su Tiempo Esperado (Te) y su Varianza (σ²)?",
          options: [
            "Te = 8 días; Varianza (σ²) = 4 días².",
            "Te = 9 días; Varianza (σ²) = 2 días².",
            "Te = 7 días; Varianza (σ²) = 12 días².",
            "Te = 8.5 días; Varianza (σ²) = 16 días²."
          ],
          correct: 0,
          feedback: "Cálculo formal de PERT: Te = (To + 4Tm + Tp) / 6 = (4 + 4(7) + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 días. Desviación estándar σ = (Tp - To) / 6 = (16 - 4) / 6 = 12 / 6 = 2 días. Varianza σ² = (2)² = 4 días².",
          reference: "Marion E. Haynes (Administración de Proyectos) & PMI"
        },
        // 28. Módulo 28: Direccionamiento Matrices Cairó
        {
          id: "tech-q28",
          number: 28,
          moduleRef: "28",
          text: "Sea una matriz bidimensional A[4 x 6] con almacenamiento en base 1, alojada en memoria RAM a partir de la dirección base POSINI = 2000. Si cada elemento ocupa w = 4 bytes (tipo int) y se almacena en Orden por Renglones (Row-Major Order), según las fórmulas de Osvaldo Cairó, ¿cuál es la dirección física de A[3, 5]?",
          options: [
            "2064",
            "2056",
            "2072",
            "2048"
          ],
          correct: 0,
          feedback: "Fórmula de Cairó (Row-Major Base 1): LOC(A[i, j]) = POSINI + [ n * (i - 1) + (j - 1) ] * w. Con m=4, n=6, POSINI=2000, w=4, i=3, j=5: Desplazamiento = [6 * (3 - 1) + (5 - 1)] * 4 = [6 * 2 + 4] * 4 = [12 + 4] * 4 = 16 celdas * 4 bytes = 64 bytes. LOC = 2000 + 64 = 2064.",
          reference: "Osvaldo Cairó (Estructuras de Datos, McGraw-Hill)"
        },
        // 29. Módulo 29: Executable UML Sommerville
        {
          id: "tech-q29",
          number: 29,
          moduleRef: "29",
          text: "De acuerdo con Ian Sommerville (Cap. 5: Modelado del Sistema), ¿cuáles son los TRES modelos indispensables que constituyen el subconjunto formal estricto de Executable UML (xUML) para que un diseño pueda compilarse directamente a código ejecutable?",
          options: [
            "Modelos de Dominio, Modelos de Clases y Modelos de Estados (State Machines).",
            "Diagramas de Casos de Uso, Diagramas de Secuencia y Diagramas de Componentes.",
            "Diagramas de Actividad, Diagramas de Despliegue y Diagramas de Paquetes.",
            "Diagramas de Entidad-Relación, Diagramas DFD y Diccionario de Datos."
          ],
          correct: 0,
          feedback: "Sommerville establece la regla canónica: Modelos de Dominio (delimitan límites y entidades del mundo real) + Modelos de Clases (definen estructura estática de tipos y asociaciones) + Modelos de Estados (definen semántica dinámica ejecutable del ciclo de vida) = Código Ejecutable. Casos de Uso y Secuencia son excluidos por falta de determinismo computable.",
          reference: "Ian Sommerville (Ingeniería de Software, Cap. 5)"
        },
        // 30. Módulo 30 / Transversal: SWEBOK v4 & Web
        {
          id: "tech-q30",
          number: 30,
          moduleRef: "23/20",
          text: "Al contrastar técnicas de calidad de software según SWEBOK v4 y arquitecturas de comunicación en ASP.NET Core, ¿cuál de las siguientes afirmaciones es TÉCNICAMENTE CORRECTA?",
          options: [
            "En SWEBOK v4, el 'Smoke Testing' es un filtro de verificación rápida de compilación que rechaza de inmediato (fail-fast) un build inestable; paralelamente, en ASP.NET Core, 'SignalR' es la herramienta adecuada para empujar eventos en tiempo real a navegadores web con fallback automático a SSE y Long Polling.",
            "'Monkey Testing' es un proceso determinista de pruebas de aceptación formal ejecutado exclusivamente por usuarios finales en auditorías contables.",
            "'gRPC JSON Transcoding' es un framework de streaming pub/sub diseñado para sustituir a SignalR en navegadores web.",
            "'Smoke Testing' solo puede ejecutarse en producción después de que los clientes reportan caídas del sistema."
          ],
          correct: 0,
          feedback: "La afirmación A sintetiza dos conceptos fundamentales de la guía oficial: Smoke Testing es la prueba superficial estructurada que frena builds defectuosos en CI/CD antes de QA formal; y SignalR es la abstracción de alto nivel para comunicación bidireccional en navegadores que gestiona automáticamente WebSockets con fallback a Server-Sent Events o Long Polling.",
          reference: "SWEBOK v4 (Software Testing) & ASP.NET Core Architecture Team"
        }
      ]
    }
  ];
});

