import React from 'react';
import { Scale, Search, Shield, FileText, CheckCircle } from 'lucide-react';

export default function HomePage({ onNavigate }) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-5 leading-tight">
            <span className="gradient-title">Med·<strong>IA</strong>·ción</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-institutional-600 font-medium mb-4 tracking-wide">
            Plataforma oficial de mediación digital asistida por inteligencia artificial
          </p>

          <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Un punto de acceso claro, intuitivo y accesible para ciudadanos, consumidores, empresas
            y profesionales que desean iniciar, comprender o gestionar un procedimiento de mediación.
          </p>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('identificar')}
              className="btn-primary flex items-center justify-center gap-2.5 text-base px-10 py-4"
            >
              <Scale size={18} />
              Identificar tipo de mediación
            </button>
            <button
              onClick={() => onNavigate('mediadores')}
              className="btn-secondary flex items-center justify-center gap-2.5 text-base px-10 py-4"
            >
              <Search size={18} />
              Encontrar a tu mediador
            </button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Shield, title: 'Confidencial', desc: 'Todo el procedimiento está protegido por estricta confidencialidad.' },
              { icon: CheckCircle, title: 'Voluntario', desc: 'La participación es libre y puede interrumpirse en cualquier momento.' },
              { icon: FileText, title: 'Seguro jurídicamente', desc: 'Identificación electrónica conforme a eIDAS y trazabilidad de actuaciones.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card card-hover p-5 text-left">
                <div className="w-9 h-9 rounded-sm bg-institutional-50 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-institutional-600" />
                </div>
                <h3 className="font-display font-semibold text-institutional-800 text-base mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal notice */}
      <section className="bg-gray-50 border-t border-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-body text-gray-400 leading-relaxed">
            <span className="font-medium text-gray-500">Aviso legal:</span>{' '}
            Este prototipo muestra una plataforma de mediación digital asistida por IA con fines demostrativos.
            Las decisiones relativas a la admisión, desarrollo y cierre del procedimiento corresponden siempre al
            mediador acreditado o al órgano competente. La asistencia algorítmica no sustituye la intervención
            profesional ni el asesoramiento jurídico.
          </p>
        </div>
      </section>
    </div>
  );
}
