import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle, Send, FileText, Search, Calendar, User, Mail, Phone } from 'lucide-react';
import { faqData } from '../data/index';

function ConsequenciasLegales() {
  return (
    <div className="space-y-4">
      <p className="text-sm font-body text-gray-600 leading-relaxed mb-5">
        Antes de iniciar un procedimiento de mediación, es importante conocer las principales consecuencias y garantías jurídicas del proceso.
      </p>
      {[
        { titulo: 'Voluntariedad', texto: 'La participación en la mediación es voluntaria. Ninguna parte puede ser obligada a iniciar ni continuar el procedimiento. En cualquier momento puede manifestarse la voluntad de no continuar.' },
        { titulo: 'Confidencialidad', texto: 'Todo lo tratado en la mediación es estrictamente confidencial. El mediador no podrá ser llamado a declarar sobre lo conocido durante el procedimiento. Esta obligación se extiende a las partes y a todos los intervinientes.' },
        { titulo: 'Imparcialidad del mediador', texto: 'El mediador actúa con absoluta neutralidad e imparcialidad respecto a las partes. Debe declarar cualquier circunstancia que pudiera comprometer su independencia o generar conflicto de intereses.' },
        { titulo: 'Posibilidad de abandono', texto: 'Cualquiera de las partes puede abandonar el procedimiento de mediación en cualquier momento, sin necesidad de justificación. El mediador dejará constancia del intento realizado.' },
        { titulo: 'Efectos del acuerdo', texto: 'Si las partes alcanzan un acuerdo, este tiene eficacia vinculante para quienes lo suscriben. Su incumplimiento puede tener consecuencias jurídicas según la normativa aplicable.' },
        { titulo: 'Elevación a escritura pública', texto: 'El acuerdo alcanzado puede elevarse a escritura pública ante notario para dotarlo de fuerza ejecutiva, facilitando su cumplimiento coercitivo en caso de incumplimiento.' },
        { titulo: 'Homologación judicial', texto: 'En determinados supuestos previstos por la normativa aplicable, el acuerdo de mediación puede ser homologado judicialmente, otorgándole el mismo valor que una sentencia judicial.' },
      ].map(({ titulo, texto }) => (
        <div key={titulo} className="card p-4">
          <h3 className="font-display font-semibold text-institutional-700 text-base mb-1.5">{titulo}</h3>
          <p className="text-sm font-body text-gray-600 leading-relaxed">{texto}</p>
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  const [abierta, setAbierta] = useState(null);
  return (
    <div className="space-y-2">
      {faqData.map((item, i) => (
        <div key={i} className="card overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-4 text-left gap-3"
            onClick={() => setAbierta(abierta === i ? null : i)}
          >
            <span className="font-body font-semibold text-institutional-800 text-sm">{item.pregunta}</span>
            {abierta === i ? <ChevronUp size={16} className="text-institutional-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-300 flex-shrink-0" />}
          </button>
          {abierta === i && (
            <div className="px-4 pb-4 pt-0 animate-slide-down">
              <p className="text-sm font-body text-gray-600 leading-relaxed">{item.respuesta}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ServiciosOnline({ onNavigate }) {
  const servicios = [
    { icon: FileText, titulo: 'Solicitud de mediación', desc: 'Inicia un nuevo procedimiento de mediación' },
    { icon: Search, titulo: 'Consulta de expediente', desc: 'Accede al estado de tu expediente activo' },
    { icon: FileText, titulo: 'Aportación documental', desc: 'Sube documentación a un expediente existente' },
    { icon: User, titulo: 'Acceso profesional', desc: 'Área reservada a mediadores acreditados' },
    { icon: Calendar, titulo: 'Agenda de sesiones', desc: 'Consulta las próximas sesiones programadas' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {servicios.map(({ icon: Icon, titulo, desc }) => (
        <div key={titulo} className="card card-hover p-5 cursor-pointer" onClick={() => {}}>
          <div className="w-10 h-10 rounded-sm bg-institutional-50 flex items-center justify-center mb-3">
            <Icon size={18} className="text-institutional-600" />
          </div>
          <h3 className="font-display font-semibold text-institutional-800 text-base mb-1">{titulo}</h3>
          <p className="text-xs font-body text-gray-500">{desc}</p>
        </div>
      ))}
    </div>
  );
}

function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };
  return (
    <div className="max-w-lg">
      {enviado ? (
        <div className="alert-success flex items-start gap-2.5 animate-fade-in">
          <CheckCircle size={18} className="text-green-600 mt-0.5" />
          <p className="text-sm font-body text-green-700">Consulta registrada en modo demostración.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Nombre</label>
              <input name="nombre" value={form.nombre} onChange={handleChange} className="input-field" placeholder="Su nombre" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} className="input-field" placeholder="correo@ejemplo.es" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Asunto</label>
            <input name="asunto" value={form.asunto} onChange={handleChange} className="input-field" placeholder="Motivo de la consulta" required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Mensaje</label>
            <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className="textarea-field" rows={4} placeholder="Describa su consulta..." required />
          </div>
          <button type="submit" className="btn-primary flex items-center gap-2">
            <Send size={15} /> Enviar consulta
          </button>
        </form>
      )}
    </div>
  );
}

const seccionTitulos = {
  'Consecuencias legales': 'Consecuencias y garantías jurídicas de la mediación',
  'Preguntas frecuentes': 'Preguntas frecuentes',
  'Servicios online': 'Servicios online',
  'Contacto': 'Contacto',
};

export default function CiudadanoPage({ subvista, onBack }) {
  const titulo = seccionTitulos[subvista] || 'Información al ciudadano';

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-institutional-600 mb-6 transition-colors">
          <ArrowLeft size={15} /> Volver al inicio
        </button>
        <span className="label-badge mb-3">Información al ciudadano</span>
        <h1 className="section-title mt-2 mb-6">{titulo}</h1>

        {subvista === 'Consecuencias legales' && <ConsequenciasLegales />}
        {subvista === 'Preguntas frecuentes' && <FAQ />}
        {subvista === 'Servicios online' && <ServiciosOnline />}
        {subvista === 'Contacto' && <Contacto />}
      </div>
    </div>
  );
}
