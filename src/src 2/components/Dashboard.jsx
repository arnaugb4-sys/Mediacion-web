import React, { useState } from 'react';
import {
  LayoutDashboard, FileText, User, Inbox, Calendar, Video,
  Plus, Eye, CheckCircle, ChevronRight, Bell, LogOut, X, Clock,
  Activity, Shield, AlertCircle, History
} from 'lucide-react';
import { expedientes, mensajesBandeja, sesionesCalendario, registroAccesos } from '../data/index';
import IniciarMediacion from './IniciarMediacion';
import logoImg from '../assets/logo.png';
import perePlanesImg from '../assets/pere-planes.jpg';

const modalidadIcon = { 'Telemática': '💻', 'Presencial': '🏛️', 'Híbrida': '🔄' };

function TabButton({ icon: Icon, label, active, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-4 py-3 text-sm font-body font-medium rounded-sm transition-all duration-150 relative
        ${active ? 'bg-institutional-700 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-institutional-700'}`}
    >
      <Icon size={16} />
      <span className="hidden md:inline">{label}</span>
      {badge > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
          {badge}
        </span>
      )}
    </button>
  );
}

export default function Dashboard({ onLogout }) {
  const [tab, setTab] = useState('inicio');
  const [iniciarMediacion, setIniciarMediacion] = useState(false);
  const [reunionModal, setReunionModal] = useState(false);
  const [videoSala, setVideoSala] = useState(null);
  const [registroModal, setRegistroModal] = useState(false);
  const [mensajeAbierto, setMensajeAbierto] = useState(null);
  const [mensajesLeidos, setMensajesLeidos] = useState(new Set());

  const noLeidos = mensajesBandeja.filter(m => !m.leido && !mensajesLeidos.has(m.id)).length;

  if (iniciarMediacion) {
    return <IniciarMediacion onBack={() => setIniciarMediacion(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Dashboard header */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo de Med IA ción" className="h-7 w-auto object-contain" />
            <div className="hidden md:block w-px h-5 bg-gray-200" />
            <span className="hidden md:block text-sm font-body text-gray-500">Panel del mediador</span>
          </div>

          <div className="flex items-center gap-1">
            <button onClick={() => setRegistroModal(true)}
              className="p-2 text-gray-400 hover:text-institutional-600 hover:bg-institutional-50 rounded-sm transition-all duration-150"
              title="Registro de accesos">
              <History size={16} />
            </button>
            <button onClick={() => setTab('bandeja')}
              className="relative p-2 text-gray-400 hover:text-institutional-600 hover:bg-institutional-50 rounded-sm transition-all duration-150">
              <Bell size={16} />
              {noLeidos > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>
            <button onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-body text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-sm transition-all duration-150">
              <LogOut size={15} />
              <span className="hidden md:inline">Salir</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="flex-shrink-0">
            <div className="flex md:flex-col gap-1">
              <TabButton icon={LayoutDashboard} label="Inicio" active={tab === 'inicio'} onClick={() => setTab('inicio')} />
              <TabButton icon={FileText} label="En trámite" active={tab === 'tramite'} onClick={() => setTab('tramite')} />
              <TabButton icon={User} label="Mi perfil" active={tab === 'usuario'} onClick={() => setTab('usuario')} />
              <TabButton icon={Inbox} label="Bandeja" active={tab === 'bandeja'} onClick={() => setTab('bandeja')} badge={noLeidos} />
              <TabButton icon={Calendar} label="Calendario" active={tab === 'calendario'} onClick={() => setTab('calendario')} />
              <TabButton icon={Video} label="Reuniones" active={tab === 'reuniones'} onClick={() => setTab('reuniones')} />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* INICIO */}
            {tab === 'inicio' && (
              <div className="animate-fade-in">
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div>
                      <h1 className="font-display text-2xl font-semibold text-institutional-800">
                        Bienvenido, Pere Planes
                      </h1>
                      <p className="text-sm font-body text-gray-500 mt-1">
                        {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                    <img
                      src={perePlanesImg}
                      alt="Pere Planes"
                      className="w-14 h-14 rounded-sm object-cover shadow-sm flex-shrink-0"
                    />
                  </div>
                </div>

                {/* Iniciar mediación — big CTA */}
                <button
                  onClick={() => setIniciarMediacion(true)}
                  className="w-full bg-institutional-700 hover:bg-institutional-800 text-white p-6 rounded-sm shadow-md hover:shadow-lg
                    transition-all duration-200 text-left mb-6 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                        <Plus size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-white">Iniciar mediación</h2>
                        <p className="text-institutional-200 text-sm font-body mt-0.5">Registrar partes y abrir nuevo expediente</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </button>

                {/* Quick stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: 'Expedientes activos', valor: expedientes.length, color: 'text-institutional-700' },
                    { label: 'Mensajes nuevos', valor: noLeidos, color: 'text-red-600' },
                    { label: 'Sesiones esta semana', valor: 3, color: 'text-teal-600' },
                    { label: 'Acuerdos alcanzados', valor: 8, color: 'text-green-600' },
                  ].map(({ label, valor, color }) => (
                    <div key={label} className="card p-4 text-center">
                      <span className={`font-display text-3xl font-bold ${color}`}>{valor}</span>
                      <p className="text-xs font-body text-gray-500 mt-1">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent expedientes */}
                <div className="card p-0 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="font-display font-semibold text-institutional-800">Expedientes recientes</h3>
                    <button onClick={() => setTab('tramite')} className="text-xs font-body text-institutional-500 hover:text-institutional-700">Ver todos →</button>
                  </div>
                  {expedientes.map((exp) => (
                    <div key={exp.id} className="px-5 py-4 border-b border-gray-50 last:border-0 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div>
                        <p className="text-sm font-body font-semibold text-institutional-700">{exp.id}</p>
                        <p className="text-xs text-gray-500 font-body">{exp.tipo} — {exp.partes}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-sm font-medium ${exp.estado === 'En tramitación' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {exp.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EN TRÁMITE */}
            {tab === 'tramite' && (
              <div className="animate-fade-in">
                <h2 className="section-title mb-5">Expedientes en trámite</h2>
                <div className="space-y-3">
                  {expedientes.map((exp) => (
                    <div key={exp.id} className="card p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <FileText size={15} className="text-institutional-400" />
                            <span className="font-body font-semibold text-institutional-700 text-sm">{exp.id}</span>
                          </div>
                          <h3 className="font-display font-semibold text-institutional-800">{exp.tipo}</h3>
                          <p className="text-sm font-body text-gray-500 mt-0.5">{exp.partes}</p>
                          <p className="text-xs font-body text-gray-400 mt-1">Iniciado: {exp.fecha}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-sm font-medium font-body ${exp.estado === 'En tramitación' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {exp.estado}
                          </span>
                          <button className="btn-outline text-xs py-1.5 px-3">Ver expediente</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* USUARIO */}
            {tab === 'usuario' && (
              <div className="animate-fade-in">
                <h2 className="section-title mb-5">Mi perfil profesional</h2>
                <div className="card p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-sm bg-indigo-800 flex items-center justify-center text-white font-display font-semibold text-2xl">
                      PP
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-institutional-800">Pere Planes</h3>
                      <span className="label-badge mt-1">Mediador acreditado</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Nombre completo', valor: 'Pere Planes' },
                      { label: 'N.º de colegiado', valor: 'MED-2026-7421' },
                      { label: 'Perfil', valor: 'Mediador acreditado' },
                      { label: 'Especialidad', valor: 'Civil, mercantil y digital' },
                      { label: 'Idiomas', valor: 'Castellano, Catalán, Inglés' },
                      { label: 'Modalidad', valor: 'Telemática e híbrida' },
                      { label: 'Ubicación', valor: 'Girona' },
                      { label: 'Disponibilidad', valor: 'Alta' },
                    ].map(({ label, valor }) => (
                      <div key={label} className="border border-gray-100 rounded-sm p-3">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-body mb-0.5">{label}</p>
                        <p className="text-sm font-body text-institutional-800 font-medium">{valor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* BANDEJA */}
            {tab === 'bandeja' && (
              <div className="animate-fade-in">
                <h2 className="section-title mb-5">Bandeja de entrada</h2>
                <div className="space-y-3">
                  {mensajesBandeja.map((msg) => {
                    const leido = msg.leido || mensajesLeidos.has(msg.id);
                    return (
                      <div key={msg.id} className={`card p-5 cursor-pointer ${!leido ? 'border-l-4 border-l-institutional-500' : ''}`}
                        onClick={() => { setMensajeAbierto(msg); setMensajesLeidos(prev => new Set([...prev, msg.id])); }}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            {!leido && <div className="w-2 h-2 rounded-full bg-institutional-500 mt-1.5 flex-shrink-0 animate-pulse-soft" />}
                            <div>
                              <p className={`text-sm font-body ${!leido ? 'font-semibold text-institutional-800' : 'font-medium text-gray-700'}`}>{msg.asunto}</p>
                              <p className="text-xs text-gray-400 font-body mt-0.5">{msg.fecha}</p>
                            </div>
                          </div>
                          <ChevronRight size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CALENDARIO */}
            {tab === 'calendario' && (
              <div className="animate-fade-in">
                <h2 className="section-title mb-5">Agenda de sesiones</h2>
                <div className="space-y-3">
                  {sesionesCalendario.map((sesion) => (
                    <div key={sesion.id} className="card p-5 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-institutional-50 rounded-sm flex flex-col items-center justify-center">
                        <Calendar size={16} className="text-institutional-600 mb-0.5" />
                        <span className="text-xs font-bold text-institutional-700 font-body">{sesion.hora}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-institutional-800">{sesion.titulo}</h3>
                        <p className="text-sm text-gray-500 font-body">{sesion.fecha} — {sesion.hora}</p>
                        <p className="text-xs text-gray-400 font-body mt-0.5">{sesion.expediente}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-sm font-body font-medium ${sesion.modalidad === 'Telemática' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {modalidadIcon[sesion.modalidad]} {sesion.modalidad}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* REUNIONES */}
            {tab === 'reuniones' && (
              <div className="animate-fade-in">
                <h2 className="section-title mb-2">Reuniones y modalidades</h2>
                <p className="section-subtitle mb-6">
                  La mediación podrá desarrollarse de forma presencial, telemática o híbrida, en función
                  de la naturaleza del conflicto, la disponibilidad de las partes y el criterio técnico del mediador.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: '🏛️', titulo: 'Presencial', desc: 'Sesiones en sede física con presencia de todas las partes.' },
                    { icon: '💻', titulo: 'Telemática', desc: 'La plataforma integra un sistema propio de videoconferencia para la mediación, sin necesidad de herramientas externas.' },
                    { icon: '🔄', titulo: 'Híbrida', desc: 'Combinación de sesiones presenciales y telemáticas según la disponibilidad de las partes.' },
                  ].map(({ icon, titulo, desc }) => (
                    <div key={titulo} className="card p-5">
                      <span className="text-3xl mb-3 block">{icon}</span>
                      <h3 className="font-display font-semibold text-institutional-800 text-base mb-1">{titulo}</h3>
                      <p className="text-xs font-body text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-display font-semibold text-institutional-700 mb-3">Opciones de reunión</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Generar una videollamada para la mediación', action: 'video' },
                    { label: 'Concertar una cita para mediar', action: 'cita' },
                    { label: 'Modelo híbrido', action: 'hibrido' },
                  ].map(({ label, action }) => (
                    <button key={action}
                      onClick={() => setReunionModal(action)}
                      className="w-full card p-4 text-left flex items-center justify-between hover:border-institutional-300 hover:bg-institutional-50 transition-all duration-150 group">
                      <div className="flex items-center gap-3">
                        <Video size={16} className="text-institutional-400 group-hover:text-institutional-600" />
                        <span className="font-body font-medium text-institutional-700 group-hover:text-institutional-800 text-sm">{label}</span>
                      </div>
                      <ChevronRight size={15} className="text-gray-300 group-hover:text-institutional-400" />
                    </button>
                  ))}
                </div>

                {videoSala && (
                  <div className="mt-5 bg-institutional-800 text-white p-5 rounded-sm animate-fade-in">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-soft" />
                          <span className="text-xs font-body text-green-300 font-semibold uppercase tracking-wider">Sala activa</span>
                        </div>
                        <h3 className="font-display font-semibold text-white text-lg">Sala de videomediación generada</h3>
                        <p className="text-institutional-200 text-sm font-body mt-1">Enlace seguro:</p>
                        <code className="text-sm font-mono text-yellow-300 mt-0.5 block">mediacion.local/sala/MED-2026-001</code>
                      </div>
                      <button onClick={() => setVideoSala(null)} className="text-white/50 hover:text-white">
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal mensaje */}
      {mensajeAbierto && (
        <div className="modal-overlay" onClick={() => setMensajeAbierto(null)}>
          <div className="modal-content p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <h2 className="font-display font-semibold text-institutional-800 text-lg">{mensajeAbierto.asunto}</h2>
              <button onClick={() => setMensajeAbierto(null)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <p className="text-xs font-body text-gray-400 mb-4">{mensajeAbierto.fecha}</p>
            <p className="text-sm font-body text-gray-700 leading-relaxed">{mensajeAbierto.texto}</p>
          </div>
        </div>
      )}

      {/* Modal reunión */}
      {reunionModal && (
        <div className="modal-overlay" onClick={() => setReunionModal(null)}>
          <div className="modal-content p-6 max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <h2 className="font-display font-semibold text-institutional-800">
                {reunionModal === 'video' ? 'Generar videollamada' : reunionModal === 'cita' ? 'Concertar cita' : 'Modelo híbrido'}
              </h2>
              <button onClick={() => setReunionModal(null)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            {reunionModal === 'video' ? (
              <div>
                <p className="text-sm font-body text-gray-600 mb-4">
                  La plataforma integra un sistema propio de videoconferencia para la mediación, sin necesidad de acudir a herramientas externas.
                </p>
                <button onClick={() => { setVideoSala(true); setReunionModal(null); setTab('reuniones'); }}
                  className="btn-primary w-full flex items-center justify-center gap-2">
                  <Video size={16} /> Generar sala segura
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm font-body text-gray-500 mb-4">Funcionalidad disponible en la versión completa de la plataforma.</p>
                <div className="alert-info">
                  <p className="text-xs font-body text-institutional-700">Esta opción se habilitará en el despliegue oficial de la plataforma.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal registro accesos */}
      {registroModal && (
        <div className="modal-overlay" onClick={() => setRegistroModal(false)}>
          <div className="modal-content p-6 max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 className="font-display font-semibold text-institutional-800 text-lg">Registro de accesos y modificaciones del expediente</h2>
              <button onClick={() => setRegistroModal(false)} className="text-gray-400 hover:text-gray-600"><X size={18} /></button>
            </div>
            <p className="text-xs font-body text-gray-500 mb-5">
              La trazabilidad permite reforzar la confianza de las partes, facilitar auditorías internas y detectar eventuales usos indebidos del sistema.
            </p>
            <div className="space-y-2">
              {registroAccesos.map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-xs font-body p-3 bg-gray-50 rounded-sm">
                  <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${r.tipo === 'acceso' ? 'bg-institutional-400' : r.tipo === 'ia' ? 'bg-purple-400' : r.tipo === 'agenda' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                  <div className="flex-1">
                    <span className="text-gray-400">{r.fecha} — {r.hora} —</span>
                    <span className="text-gray-700 ml-1">{r.accion}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
