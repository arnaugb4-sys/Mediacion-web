import React, { useState } from 'react';
import { MapPin, Star, Globe, Clock, Monitor, CheckCircle, ArrowLeft, Filter } from 'lucide-react';
import { mediadores } from '../data/index';

function StarRating({ value }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= value ? 'text-yellow-400' : star - 0.5 <= value ? 'text-yellow-300' : 'text-gray-200'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1.5 text-xs text-gray-500 font-body">({value})</span>
    </div>
  );
}

const disponibilidadColor = {
  'Alta': 'bg-green-100 text-green-700',
  'Media': 'bg-yellow-100 text-yellow-700',
  'Baja': 'bg-red-100 text-red-700',
};

export default function MediadoresPage({ onBack }) {
  const [solicitudEnviada, setSolicitudEnviada] = useState(null);

  const handleSolicitar = (id) => {
    setSolicitudEnviada(id);
    setTimeout(() => setSolicitudEnviada(null), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-institutional-600 mb-5 transition-colors">
            <ArrowLeft size={15} /> Volver al inicio
          </button>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="label-badge mb-3">Registro de mediadores</span>
              <h1 className="section-title mt-2">Encontrar a tu mediador</h1>
              <p className="section-subtitle max-w-2xl">
                La selección del mediador atiende a criterios de formación específica, experiencia, especialidad,
                idioma, disponibilidad, modalidad y criterios cualitativos, no solo a la proximidad geográfica.
              </p>
            </div>
          </div>
        </div>

        {/* Mediador cards */}
        <div className="space-y-5">
          {mediadores.map((med) => (
            <div key={med.id} className="card p-0 overflow-hidden animate-slide-up">
              <div className="p-6 flex flex-col md:flex-row gap-5">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-sm ${med.color} flex items-center justify-center text-white font-display font-semibold text-xl shadow-sm`}>
                    {med.iniciales}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h2 className="font-display text-xl font-semibold text-institutional-800">{med.nombre}</h2>
                      <p className="text-sm font-body text-institutional-600 font-medium mt-0.5">{med.especialidad}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <StarRating value={med.valoracion} />
                    </div>
                  </div>

                  <p className="text-sm font-body text-gray-500 mt-2 leading-relaxed">{med.descripcion}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-body">
                      <Clock size={13} className="text-institutional-400" />
                      <span>{med.experiencia}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-body">
                      <MapPin size={13} className="text-institutional-400" />
                      <span>{med.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-body">
                      <Globe size={13} className="text-institutional-400" />
                      <span>{med.idiomas.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-body">
                      <Monitor size={13} className="text-institutional-400" />
                      <span>{med.modalidad.join(', ')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs font-body text-gray-500">Disponibilidad:</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-sm font-body ${disponibilidadColor[med.disponibilidad]}`}>
                      {med.disponibilidad}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0 flex flex-col justify-center items-end gap-2">
                  {solicitudEnviada === med.id ? (
                    <div className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-sm p-3 max-w-xs animate-fade-in">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs font-body text-green-700">
                        Solicitud enviada. La admisión definitiva quedará sujeta a revisión profesional.
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleSolicitar(med.id)}
                      className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap"
                    >
                      Solicitar mediador
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selection criteria note */}
        <div className="mt-8 alert-info">
          <p className="text-sm font-body text-institutional-700 leading-relaxed">
            <span className="font-semibold">Criterios de selección:</span> La asignación de mediador atiende a criterios
            de formación específica, experiencia previa, especialidad, idioma, disponibilidad, modalidad de actuación y
            criterios cualitativos. La admisión definitiva del expediente quedará en todo caso sujeta a revisión profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
