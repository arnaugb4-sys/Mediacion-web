import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-institutional-900 text-institutional-200 py-10 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="bg-white inline-block p-3 rounded-sm mb-3">
              <img src={logoImg} alt="Logo de Med IA ción" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-xs leading-relaxed text-institutional-300 max-w-sm">
              Plataforma oficial de mediación digital asistida por inteligencia artificial.
              Gobierno de España — Ministerio de Justicia.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-institutional-400 mb-3 font-body">Plataforma</h4>
            <ul className="space-y-2">
              {[
                { label: 'Fases de la mediación', view: 'fases' },
                { label: 'Identificar tipo', view: 'identificar' },
                { label: 'Encontrar mediador', view: 'mediadores' },
                { label: 'Acceso mediador', view: 'login' },
              ].map(({ label, view }) => (
                <li key={label}>
                  <button onClick={() => onNavigate(view)}
                    className="text-xs font-body text-institutional-300 hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-institutional-400 mb-3 font-body">Información</h4>
            <ul className="space-y-2">
              {[
                { label: 'Consecuencias legales', view: 'ciudadano', sub: 'Consecuencias legales' },
                { label: 'Preguntas frecuentes', view: 'ciudadano', sub: 'Preguntas frecuentes' },
                { label: 'Servicios online', view: 'ciudadano', sub: 'Servicios online' },
                { label: 'Contacto', view: 'ciudadano', sub: 'Contacto' },
              ].map(({ label, view, sub }) => (
                <li key={label}>
                  <button onClick={() => onNavigate(view, sub)}
                    className="text-xs font-body text-institutional-300 hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-institutional-800 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs font-body text-institutional-500">
            © 2026 Gobierno de España. Med·<strong>IA</strong>·ción — Prototipo demostrativo.
          </p>
          <p className="text-xs font-body text-institutional-500">
            Accesibilidad · Aviso legal · Protección de datos · Política de cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
