import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, RotateCcw } from 'lucide-react';

const tiposControversia = [
  { id: 'familiar', label: 'Familiar', icon: '👨‍👩‍👧', desc: 'Conflictos en el ámbito de la familia' },
  { id: 'civil', label: 'Civil', icon: '⚖️', desc: 'Obligaciones, contratos, derechos reales' },
  { id: 'mercantil', label: 'Mercantil', icon: '🏢', desc: 'Empresas, socios y contratación' },
  { id: 'vecinal', label: 'Vecinal', icon: '🏠', desc: 'Comunidades de propietarios y vecinos' },
  { id: 'consumo', label: 'Consumo', icon: '🛒', desc: 'Consumidores y empresas' },
  { id: 'laboral', label: 'Laboral', icon: '💼', desc: 'Relaciones laborales y empresa' },
  { id: 'comunitaria', label: 'Comunitaria', icon: '🌍', desc: 'Comunidad y convivencia social' },
  { id: 'otros', label: 'Otros', icon: '📋', desc: 'Otros tipos de conflictos' },
];

const preguntas = [
  { id: 'voluntariedad', texto: '¿Las partes aceptan voluntariamente participar en una mediación?' },
  { id: 'relacion', texto: '¿Existe una relación previa entre las partes?' },
  { id: 'urgencia', texto: '¿El conflicto requiere una solución urgente?' },
  { id: 'judicial', texto: '¿Hay medidas judiciales en curso?' },
  { id: 'riesgo', texto: '¿Existe riesgo para alguna de las partes?' },
  { id: 'asesoria', texto: '¿Necesita asesoramiento jurídico previo?' },
  { id: 'documentacion', texto: '¿Tiene documentación relacionada con el conflicto?' },
];

export default function IdentificarPage({ onBack }) {
  const [etapa, setEtapa] = useState('seleccion'); // seleccion | evaluacion | resultado
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
  const [respuestas, setRespuestas] = useState({});

  const handleSelectTipo = (id) => {
    setTipoSeleccionado(id);
    setEtapa('evaluacion');
  };

  const handleRespuesta = (id, valor) => {
    setRespuestas(prev => ({ ...prev, [id]: valor }));
  };

  const todasRespondidas = preguntas.every(p => respuestas[p.id] !== undefined);

  const handleEvaluar = () => {
    setEtapa('resultado');
  };

  const handleReset = () => {
    setEtapa('seleccion');
    setTipoSeleccionado(null);
    setRespuestas({});
  };

  const tipoLabel = tiposControversia.find(t => t.id === tipoSeleccionado)?.label;

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-institutional-600 mb-6 transition-colors">
          <ArrowLeft size={15} /> Volver al inicio
        </button>

        {etapa === 'seleccion' && (
          <div className="animate-slide-up">
            <span className="label-badge mb-3">Evaluación inicial</span>
            <h1 className="section-title mt-2 mb-2">Identificar tipo de mediación</h1>
            <p className="section-subtitle mb-8">
              Seleccione el tipo de controversia que desea someter a mediación para iniciar la evaluación orientativa inicial.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tiposControversia.map((tipo) => (
                <button
                  key={tipo.id}
                  onClick={() => handleSelectTipo(tipo.id)}
                  className="card card-hover p-4 text-left flex flex-col items-start gap-2 group"
                >
                  <span className="text-2xl">{tipo.icon}</span>
                  <span className="font-display font-semibold text-institutional-800 text-base group-hover:text-institutional-600 transition-colors">{tipo.label}</span>
                  <span className="text-xs text-gray-400 font-body leading-relaxed">{tipo.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {etapa === 'evaluacion' && (
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-6">
              <button onClick={() => setEtapa('seleccion')} className="text-gray-400 hover:text-institutional-600 transition-colors">
                <ArrowLeft size={18} />
              </button>
              <div>
                <span className="label-badge">Mediación {tipoLabel}</span>
                <h1 className="section-title mt-1 mb-0">Evaluación orientativa inicial</h1>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-6 space-y-5">
              {preguntas.map((pregunta, idx) => (
                <div key={pregunta.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-gray-50 last:border-0">
                  <p className="text-sm font-body text-gray-700 leading-relaxed flex-1">
                    <span className="font-semibold text-institutional-600 mr-1.5">{idx + 1}.</span>
                    {pregunta.texto}
                  </p>
                  <div className="flex gap-2 flex-shrink-0">
                    {['Sí', 'No', 'NS/NC'].map((opcion) => (
                      <button
                        key={opcion}
                        onClick={() => handleRespuesta(pregunta.id, opcion)}
                        className={`px-3.5 py-1.5 text-xs font-body font-semibold rounded-sm border transition-all duration-150
                          ${respuestas[pregunta.id] === opcion
                            ? 'bg-institutional-700 text-white border-institutional-700'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-institutional-400 hover:text-institutional-600'
                          }`}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleEvaluar}
                disabled={!todasRespondidas}
                className={`flex items-center gap-2 px-8 py-3 font-body font-semibold text-sm rounded-sm transition-all duration-150
                  ${todasRespondidas
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'}`}
              >
                Ver evaluación orientativa
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {etapa === 'resultado' && (
          <div className="animate-slide-up">
            <h1 className="section-title mb-6">Resultado de la evaluación orientativa</h1>

            <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-6 mb-5">
              <div className="flex items-start gap-3 mb-5">
                <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="font-display font-semibold text-institutional-800 text-lg">
                    Tipo de conflicto: Mediación {tipoLabel}
                  </h2>
                  <p className="text-sm text-gray-500 font-body mt-1">Evaluación completada el {new Date().toLocaleDateString('es-ES')}</p>
                </div>
              </div>

              <div className="space-y-2.5 mb-5">
                {preguntas.map((p) => (
                  <div key={p.id} className="flex items-center justify-between text-sm font-body py-2 border-b border-gray-50">
                    <span className="text-gray-600">{p.texto}</span>
                    <span className={`font-semibold text-xs px-2 py-0.5 rounded-sm ${respuestas[p.id] === 'Sí' ? 'bg-green-100 text-green-700' : respuestas[p.id] === 'No' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-500'}`}>
                      {respuestas[p.id]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="alert-info">
                <p className="text-sm font-body text-institutional-700 leading-relaxed">
                  Esta primera evaluación tiene carácter meramente orientativo y no supone la admisión definitiva
                  del asunto. La admisión corresponderá siempre al mediador acreditado o, en su caso, al órgano
                  gestor de la plataforma.
                </p>
              </div>
            </div>

            <div className="alert-warning mb-6">
              <div className="flex items-start gap-2.5">
                <AlertTriangle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-body text-amber-800 leading-relaxed">
                  La plataforma puede orientar sobre la adecuación inicial del conflicto a mediación, sus posibles
                  límites legales y la conveniencia de asesoramiento jurídico previo, pero no sustituye el criterio
                  profesional del mediador ni el asesoramiento jurídico.
                </p>
              </div>
            </div>

            <button onClick={handleReset} className="flex items-center gap-2 btn-outline text-sm">
              <RotateCcw size={14} /> Nueva evaluación
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
