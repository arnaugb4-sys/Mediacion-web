import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, Info, Shield } from 'lucide-react';
import { fasesMediacion } from '../data/index';

export default function FasesPage({ onBack }) {
  const [faseActiva, setFaseActiva] = useState(null);

  const toggle = (num) => setFaseActiva(faseActiva === num ? null : num);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-institutional-600 mb-6 transition-colors">
          <ArrowLeft size={15} /> Volver al inicio
        </button>

        <span className="label-badge mb-3">Procedimiento</span>
        <h1 className="section-title mt-2 mb-2">Fases de la mediación</h1>

        {/* Intro text */}
        <div className="alert-info mb-6">
          <div className="flex items-start gap-2.5">
            <Info size={15} className="text-institutional-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm font-body text-institutional-700 leading-relaxed">
              Antes de iniciar formalmente el procedimiento, las partes pueden visualizar las fases principales
              de la mediación. Este esquema permite comprender el contenido, duración aproximada, consecuencias
              y derechos asociados a cada etapa.
            </p>
          </div>
        </div>

        {/* Phases timeline */}
        <div className="space-y-3 mb-8">
          {fasesMediacion.map((fase) => (
            <div key={fase.numero} className={`phase-card ${faseActiva === fase.numero ? 'active' : ''}`}
              onClick={() => toggle(fase.numero)}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-sm flex items-center justify-center text-sm font-display font-bold flex-shrink-0 transition-all duration-150
                    ${faseActiva === fase.numero ? 'bg-institutional-700 text-white' : 'bg-institutional-100 text-institutional-700'}`}>
                    {fase.numero}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{fase.icono}</span>
                    <span className="font-display font-semibold text-institutional-800">{fase.titulo}</span>
                  </div>
                </div>
                {faseActiva === fase.numero
                  ? <ChevronDown size={16} className="text-institutional-500 flex-shrink-0" />
                  : <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />}
              </div>

              {faseActiva === fase.numero && (
                <div className="mt-4 ml-13 pl-14 animate-slide-down">
                  <p className="text-sm font-body text-gray-600 leading-relaxed mb-3">{fase.descripcion}</p>
                  <div className="flex items-center gap-1.5 text-xs font-body text-institutional-500">
                    <span className="font-semibold">Duración estimada:</span>
                    <span>{fase.duracion}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pre-acceptance information */}
        <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield size={18} className="text-institutional-500 mt-0.5 flex-shrink-0" />
            <h2 className="font-display font-semibold text-institutional-800 text-lg">
              Información previa a la aceptación
            </h2>
          </div>
          <p className="text-sm font-body text-gray-600 leading-relaxed">
            Antes de la aceptación definitiva, la plataforma informa de las consecuencias jurídicas de iniciar
            un procedimiento de mediación, especialmente en relación con la <strong>voluntariedad</strong>,
            la <strong>confidencialidad</strong>, la <strong>imparcialidad del mediador</strong>, la posibilidad
            de <strong>abandonar el procedimiento</strong>, los efectos del acuerdo alcanzado y, en su caso,
            su eventual <strong>elevación a escritura pública u homologación</strong> cuando proceda.
          </p>
          <p className="text-sm font-body text-gray-600 leading-relaxed mt-3">
            Esta información previa resulta imprescindible para asegurar un consentimiento informado, libre y consciente.
          </p>
        </div>
      </div>
    </div>
  );
}
