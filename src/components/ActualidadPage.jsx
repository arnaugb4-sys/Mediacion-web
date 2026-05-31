import React from 'react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { noticiasActualidad } from '../data/index';

const categoriaColor = {
  'Blog': 'bg-blue-100 text-blue-700',
  'Nota de prensa': 'bg-institutional-100 text-institutional-700',
  'Publicaciones periódicas': 'bg-teal-100 text-teal-700',
};

export default function ActualidadPage({ subvista, onBack }) {
  const filtradas = subvista
    ? noticiasActualidad.filter(n => {
        if (subvista === 'Notas de prensa') return n.categoria === 'Nota de prensa';
        if (subvista === 'Blog') return n.categoria === 'Blog';
        if (subvista === 'Publicaciones periódicas') return n.categoria === 'Publicaciones periódicas';
        return true;
      })
    : noticiasActualidad;

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-institutional-600 mb-6 transition-colors">
          <ArrowLeft size={15} /> Volver al inicio
        </button>
        <span className="label-badge mb-3">Actualidad</span>
        <h1 className="section-title mt-2 mb-6">{subvista || 'Todas las noticias'}</h1>

        <div className="space-y-4">
          {filtradas.length === 0 && (
            <div className="card p-8 text-center text-gray-400 font-body text-sm">
              No hay publicaciones en esta categoría por el momento.
            </div>
          )}
          {filtradas.map((noticia) => (
            <div key={noticia.id} className="card card-hover p-6 cursor-pointer">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-sm font-body ${categoriaColor[noticia.categoria] || 'bg-gray-100 text-gray-600'}`}>
                  {noticia.categoria}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-400 font-body">
                  <Calendar size={11} />
                  <span>{noticia.fecha}</span>
                </div>
              </div>
              <h2 className="font-display font-semibold text-institutional-800 text-lg mb-2 leading-tight">{noticia.titulo}</h2>
              <p className="text-sm font-body text-gray-500 leading-relaxed">{noticia.extracto}</p>
              <button className="mt-3 text-xs font-body font-semibold text-institutional-600 hover:text-institutional-800 transition-colors">
                Leer más →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
