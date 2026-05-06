import React, { useState, useRef, useEffect } from 'react';
import { Shield, ChevronDown, UserCheck, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const BrandName = ({ size = 'normal' }) => {
  const sizeClass = size === 'large' ? 'text-5xl md:text-7xl' : size === 'medium' ? 'text-2xl' : 'text-xl';
  return (
    <span className={`font-display font-semibold tracking-tight gradient-title ${sizeClass}`}>
      Med·<strong>IA</strong>·ción
    </span>
  );
};

export default function Header({ onNavigate, currentView, isLoggedIn }) {
  const [actualidadOpen, setActualidadOpen] = useState(false);
  const [infoCiudadanoOpen, setInfoCiudadanoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const actualidadRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (actualidadRef.current && !actualidadRef.current.contains(e.target)) setActualidadOpen(false);
      if (infoRef.current && !infoRef.current.contains(e.target)) setInfoCiudadanoOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Institutional stripe */}
      <div className="header-stripe text-white py-1.5 px-4 md:px-8 flex items-center gap-3 text-xs font-body tracking-wider">
        <Shield size={12} className="opacity-70" />
        <span className="opacity-90">GOBIERNO DE ESPAÑA</span>
        <span className="opacity-40 mx-1">|</span>
        <span className="opacity-70">Ministerio de Justicia</span>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src={logoImg}
              alt="Logo de Med IA ción"
              className="h-8 w-auto object-contain"
              style={{ maxWidth: 120 }}
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Fases */}
            <button
              onClick={() => onNavigate('fases')}
              className={`px-4 py-2 text-sm font-body font-medium rounded-sm transition-all duration-150
                ${currentView === 'fases' ? 'text-institutional-700 bg-institutional-50' : 'text-gray-600 hover:text-institutional-700 hover:bg-gray-50'}`}
            >
              Fases de la mediación
            </button>

            {/* Actualidad dropdown */}
            <div ref={actualidadRef} className="relative">
              <button
                onMouseEnter={() => setActualidadOpen(true)}
                onClick={() => setActualidadOpen(!actualidadOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-body font-medium rounded-sm transition-all duration-150
                  ${actualidadOpen ? 'text-institutional-700 bg-institutional-50' : 'text-gray-600 hover:text-institutional-700 hover:bg-gray-50'}`}
              >
                Actualidad
                <ChevronDown size={14} className={`transition-transform duration-150 ${actualidadOpen ? 'rotate-180' : ''}`} />
              </button>
              {actualidadOpen && (
                <div className="dropdown-menu" onMouseLeave={() => setActualidadOpen(false)}>
                  {['Notas de prensa', 'Blog', 'Publicaciones periódicas'].map((item) => (
                    <button key={item} className="dropdown-item w-full text-left"
                      onClick={() => { onNavigate('actualidad', item); setActualidadOpen(false); }}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información al ciudadano dropdown */}
            <div ref={infoRef} className="relative">
              <button
                onMouseEnter={() => setInfoCiudadanoOpen(true)}
                onClick={() => setInfoCiudadanoOpen(!infoCiudadanoOpen)}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-body font-medium rounded-sm transition-all duration-150
                  ${infoCiudadanoOpen ? 'text-institutional-700 bg-institutional-50' : 'text-gray-600 hover:text-institutional-700 hover:bg-gray-50'}`}
              >
                Información al ciudadano
                <ChevronDown size={14} className={`transition-transform duration-150 ${infoCiudadanoOpen ? 'rotate-180' : ''}`} />
              </button>
              {infoCiudadanoOpen && (
                <div className="dropdown-menu" onMouseLeave={() => setInfoCiudadanoOpen(false)}>
                  {['Consecuencias legales', 'Preguntas frecuentes', 'Servicios online', 'Contacto'].map((item) => (
                    <button key={item} className="dropdown-item w-full text-left"
                      onClick={() => { onNavigate('ciudadano', item); setInfoCiudadanoOpen(false); }}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <button
                onClick={() => onNavigate('dashboard')}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-institutional-700 text-white text-sm font-body font-medium rounded-sm hover:bg-institutional-800 transition-all duration-150"
              >
                <UserCheck size={15} />
                Panel del mediador
              </button>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="hidden md:flex items-center gap-2 px-4 py-2 border border-institutional-400 text-institutional-700 text-sm font-body font-medium rounded-sm hover:bg-institutional-50 transition-all duration-150"
              >
                <UserCheck size={15} />
                Acceso mediador
              </button>
            )}
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white animate-slide-down">
            <div className="px-4 py-3 space-y-1">
              {[
                { label: 'Fases de la mediación', view: 'fases' },
                { label: 'Notas de prensa', view: 'actualidad', sub: 'Notas de prensa' },
                { label: 'Blog', view: 'actualidad', sub: 'Blog' },
                { label: 'Consecuencias legales', view: 'ciudadano', sub: 'Consecuencias legales' },
                { label: 'Preguntas frecuentes', view: 'ciudadano', sub: 'Preguntas frecuentes' },
                { label: 'Contacto', view: 'ciudadano', sub: 'Contacto' },
              ].map((item) => (
                <button key={item.label}
                  className="block w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-institutional-50 rounded-sm"
                  onClick={() => { onNavigate(item.view, item.sub); setMobileMenuOpen(false); }}>
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-100">
                {isLoggedIn ? (
                  <button onClick={() => { onNavigate('dashboard'); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 bg-institutional-700 text-white text-sm font-medium rounded-sm">
                    <UserCheck size={15} /> Panel del mediador
                  </button>
                ) : (
                  <button onClick={() => { onNavigate('login'); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2.5 border border-institutional-400 text-institutional-700 text-sm font-medium rounded-sm">
                    <UserCheck size={15} /> Acceso mediador
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export { BrandName };
