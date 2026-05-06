import React, { useState } from 'react';
import { UserCheck, Eye, EyeOff, Shield, AlertCircle, Lock } from 'lucide-react';
import { BrandName } from './Header';
import logoImg from '../assets/logo.png';

export default function LoginPage({ onLogin, onBack }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (usuario === 'pere.planes@mediador.es' && password === 'Justiciero2026') {
        onLogin();
      } else {
        setError('Credenciales incorrectas. Acceso reservado a mediadores acreditados.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      {/* Header institutional stripe */}
      <div className="w-full max-w-md mb-8 text-center">
        <img src={logoImg} alt="Logo de Med IA ción" className="h-12 w-auto mx-auto mb-5 object-contain" />
        <div className="flex items-center justify-center gap-2 mb-2">
          <Lock size={14} className="text-institutional-500" />
          <span className="text-xs font-body text-institutional-500 tracking-widest uppercase">Acceso seguro</span>
        </div>
        <h1 className="font-display text-2xl font-semibold text-institutional-800 mb-1">
          Acceso profesional del mediador
        </h1>
        <p className="text-sm font-body text-gray-500">Acceso reservado a profesionales acreditados</p>
      </div>

      {/* Login card */}
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-sm shadow-lg p-8">
        {/* eIDAS notice */}
        <div className="flex items-start gap-2.5 bg-institutional-50 border border-institutional-100 rounded-sm p-3.5 mb-6">
          <Shield size={15} className="text-institutional-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs font-body text-institutional-700 leading-relaxed">
            Este acceso está protegido. La identificación profesional está sujeta a habilitación previa
            en el registro de mediadores acreditados.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-body font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Usuario (correo electrónico)
            </label>
            <input
              type="email"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="input-field"
              placeholder="usuario@mediador.es"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-body font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pr-11"
                placeholder="••••••••••"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-sm p-3 animate-fade-in">
              <AlertCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-body text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Verificando credenciales...
              </>
            ) : (
              <>
                <UserCheck size={17} />
                Iniciar sesión
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-gray-100 text-center">
          <p className="text-xs font-body text-gray-400 leading-relaxed">
            Si no dispone de acceso, contacte con el órgano gestor de la plataforma
            para solicitar su habilitación como mediador acreditado.
          </p>
        </div>
      </div>

      <button onClick={onBack} className="mt-6 text-sm font-body text-gray-500 hover:text-institutional-600 transition-colors">
        ← Volver a la página principal
      </button>
    </div>
  );
}
