import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, CheckCircle, CreditCard, Smartphone,
  Key, FileSignature, HelpCircle, Bot, Upload, Loader, X, Sparkles,
  AlertTriangle, ChevronRight, User, Users
} from 'lucide-react';

const metodoIdentificacion = [
  { id: 'certificado', icon: CreditCard, label: 'Certificado digital', desc: 'FNMT u otro certificado reconocido' },
  { id: 'dnie', icon: Smartphone, label: 'DNI electrónico', desc: 'Identificación con DNIe y lector' },
  { id: 'clave', icon: Key, label: 'Cl@ve', desc: 'Sistema Cl@ve del Gobierno de España' },
  { id: 'firma', icon: FileSignature, label: 'Firma electrónica', desc: 'Sistemas de firma electrónica avanzada' },
  { id: 'otro', icon: HelpCircle, label: 'Otro sistema admitido', desc: 'Otros sistemas reconocidos por eIDAS' },
];

const resultadosIA = [
  { titulo: 'Coincidencias detectadas', desc: 'Ambas partes coinciden en la necesidad de regular el uso del bien común y fijar criterios de convivencia.', color: 'border-green-200 bg-green-50', icon: '✅' },
  { titulo: 'Discrepancias principales', desc: 'Discrepancia en los plazos propuestos por cada parte y en la distribución de gastos de mantenimiento.', color: 'border-orange-200 bg-orange-50', icon: '⚠️' },
  { titulo: 'Intereses identificados', desc: 'Parte A: estabilidad y certeza jurídica. Parte B: flexibilidad operativa y reducción de costes a corto plazo.', color: 'border-blue-200 bg-blue-50', icon: '🔍' },
  { titulo: 'Posibles puntos de acuerdo', desc: 'Establecimiento de un periodo de prueba de 3 meses con revisión posterior y protocolo de comunicación formalizado.', color: 'border-teal-200 bg-teal-50', icon: '🤝' },
  { titulo: 'Lagunas informativas', desc: 'Se detecta ausencia de documentación acreditativa sobre el valor actual del bien y sobre compromisos verbales previos.', color: 'border-yellow-200 bg-yellow-50', icon: '📋' },
  { titulo: 'Alternativas de solución sugeridas', desc: 'Mediación en dos fases: acuerdo provisional inmediato + revisión en 90 días. Posible arbitraje en caso de desacuerdo persistente.', color: 'border-purple-200 bg-purple-50', icon: '💡' },
];

export default function IniciarMediacion({ onBack }) {
  const [etapa, setEtapa] = useState('partes'); // partes | datos | ia
  const [metodoSel, setMetodoSel] = useState(null);
  const [metodoAnimado, setMetodoAnimado] = useState(null);
  const [analizando, setAnalizando] = useState(false);
  const [resultados, setResultados] = useState(false);
  const [texto, setTexto] = useState('');
  const [form, setForm] = useState({
    solicitante: '', requerida: '', tipoConflicto: '', hechos: '',
    pretensiones: '', intereses: '', limites: '', antecedentes: '', observaciones: '',
  });

  const handleMetodoClick = (id) => {
    setMetodoAnimado(id);
    setMetodoSel(id);
    setTimeout(() => setMetodoAnimado(null), 600);
  };

  const handleAnalizar = () => {
    setAnalizando(true);
    setTimeout(() => { setAnalizando(false); setResultados(true); }, 2000);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-institutional-600 mb-6 transition-colors">
          <ArrowLeft size={15} /> Volver al panel
        </button>

        {/* Stepper */}
        <div className="flex items-center gap-2 mb-8">
          {[
            { id: 'partes', label: 'Registrar partes' },
            { id: 'datos', label: 'Datos del caso' },
            { id: 'ia', label: 'IA Med·IA·ción' },
          ].map((step, i) => {
            const idx = ['partes', 'datos', 'ia'].indexOf(etapa);
            const stepIdx = i;
            const activo = etapa === step.id;
            const completado = stepIdx < idx;
            return (
              <React.Fragment key={step.id}>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-body font-semibold transition-all duration-150
                  ${activo ? 'bg-institutional-700 text-white' : completado ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                  {completado ? <CheckCircle size={13} /> : <span className="w-4 text-center">{i + 1}</span>}
                  <span className="hidden sm:inline">{step.label}</span>
                </div>
                {i < 2 && <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />}
              </React.Fragment>
            );
          })}
        </div>

        {/* ETAPA: PARTES */}
        {etapa === 'partes' && (
          <div className="animate-slide-up">
            <h1 className="section-title mb-2">Registrar las partes</h1>
            <p className="section-subtitle mb-6">
              El sistema exige mecanismos fiables de autenticación electrónica. Podrán utilizarse medios como
              certificado digital, DNI electrónico, Cl@ve u otros sistemas admitidos por la normativa aplicable.
            </p>

            {/* Auth methods */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {metodoIdentificacion.map(({ id, icon: Icon, label, desc }) => (
                <button
                  key={id}
                  onClick={() => handleMetodoClick(id)}
                  className={`card p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 cursor-pointer
                    ${metodoSel === id ? 'border-institutional-500 bg-institutional-50 shadow-md' : 'hover:border-institutional-300 hover:bg-gray-50'}
                    ${metodoAnimado === id ? 'scale-95' : 'scale-100'}`}
                >
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all duration-200
                    ${metodoSel === id ? 'bg-institutional-700 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Icon size={18} />
                  </div>
                  <span className={`text-xs font-body font-semibold leading-tight ${metodoSel === id ? 'text-institutional-700' : 'text-gray-600'}`}>{label}</span>
                  {metodoSel === id && (
                    <span className="text-xs font-body text-green-600 font-semibold">✓ Seleccionado</span>
                  )}
                </button>
              ))}
            </div>

            {metodoSel && (
              <div className="alert-info mb-6 animate-fade-in">
                <p className="text-xs font-body text-institutional-700">
                  <span className="font-semibold">Modo demostración:</span> La opción "{metodoIdentificacion.find(m => m.id === metodoSel)?.label}" ha sido seleccionada.
                  En el entorno real, este paso iniciaría el flujo de autenticación correspondiente.
                </p>
              </div>
            )}

            <div className="bg-white border border-gray-100 rounded-sm p-5 mb-6">
              <p className="text-sm font-body text-gray-600 leading-relaxed">
                El sistema de firma electrónica debe garantizar la identidad del firmante y la integridad del
                documento, en línea con el modelo de servicios de confianza previsto por el{' '}
                <span className="font-semibold text-institutional-700">Reglamento eIDAS</span>. Esta identificación
                refuerza la seguridad jurídica, reduce riesgos de suplantación de identidad y facilita la
                trazabilidad de todas las actuaciones.
              </p>
            </div>

            <div className="flex justify-end">
              <button onClick={() => setEtapa('datos')} className="btn-primary flex items-center gap-2">
                Siguiente: Datos del caso <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ETAPA: DATOS */}
        {etapa === 'datos' && (
          <div className="animate-slide-up">
            <h1 className="section-title mb-2">Datos esenciales del caso</h1>
            <p className="section-subtitle mb-6">
              La información estructurada permite reducir errores derivados de documentación incompleta o
              desordenada y facilita el trabajo técnico del mediador.
            </p>

            <div className="bg-white border border-gray-100 rounded-sm shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Parte solicitante *</label>
                  <input name="solicitante" value={form.solicitante} onChange={handleChange} className="input-field" placeholder="Nombre completo o razón social" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Parte requerida *</label>
                  <input name="requerida" value={form.requerida} onChange={handleChange} className="input-field" placeholder="Nombre completo o razón social" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Tipo de conflicto *</label>
                  <select name="tipoConflicto" value={form.tipoConflicto} onChange={handleChange} className="select-field">
                    <option value="">Seleccione el tipo de conflicto</option>
                    {['Familiar', 'Civil', 'Mercantil', 'Vecinal', 'Consumo', 'Laboral', 'Comunitaria', 'Otros'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Hechos relevantes</label>
                  <textarea name="hechos" value={form.hechos} onChange={handleChange} className="textarea-field" rows={3} placeholder="Descripción objetiva de los hechos..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Pretensiones</label>
                  <textarea name="pretensiones" value={form.pretensiones} onChange={handleChange} className="textarea-field" rows={2} placeholder="¿Qué solicita cada parte?" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Intereses principales</label>
                  <textarea name="intereses" value={form.intereses} onChange={handleChange} className="textarea-field" rows={2} placeholder="¿Qué necesidades subyacen al conflicto?" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Límites de negociación</label>
                  <textarea name="limites" value={form.limites} onChange={handleChange} className="textarea-field" rows={2} placeholder="Aspectos no negociables para cada parte..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Antecedentes</label>
                  <textarea name="antecedentes" value={form.antecedentes} onChange={handleChange} className="textarea-field" rows={2} placeholder="Intentos previos de resolución, contexto..." />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Observaciones del mediador</label>
                  <textarea name="observaciones" value={form.observaciones} onChange={handleChange} className="textarea-field" rows={2} placeholder="Notas internas del mediador (confidenciales)..." />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <button onClick={() => setEtapa('partes')} className="btn-outline flex items-center gap-2">
                <ArrowLeft size={15} /> Anterior
              </button>
              <button onClick={() => setEtapa('ia')} className="btn-primary flex items-center gap-2">
                Continuar con IA <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ETAPA: IA */}
        {etapa === 'ia' && (
          <div className="animate-slide-up">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-institutional-700 rounded-sm flex items-center justify-center flex-shrink-0">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-semibold text-institutional-800">
                  IA de Med·<strong>IA</strong>·ción
                </h1>
                <p className="text-sm font-body text-gray-500 mt-0.5">Asistente técnico del mediador</p>
              </div>
            </div>

            {/* Role disclaimer */}
            <div className="alert-warning mb-5">
              <div className="flex items-start gap-2.5">
                <AlertTriangle size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs font-body text-amber-800 leading-relaxed">
                  La IA de Med·<strong>IA</strong>·ción actúa exclusivamente como asistente técnico del mediador. Su función es
                  ordenar información, detectar coincidencias y discrepancias, clasificar intereses, identificar puntos de posible acuerdo,
                  resumir documentación, advertir de lagunas informativas y sugerir alternativas de solución.{' '}
                  <strong>No adopta decisiones, no sustituye al mediador y no valora jurídicamente el resultado del procedimiento.</strong>
                </p>
              </div>
            </div>

            {/* Upload / input area */}
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-sm p-6 mb-5 hover:border-institutional-300 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Upload size={16} className="text-gray-400" />
                <span className="text-xs font-body text-gray-400 font-semibold uppercase tracking-wider">Documentación</span>
              </div>
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="textarea-field border-0 p-0 focus:ring-0 text-sm"
                rows={5}
                placeholder="Adjuntar o arrastrar documentación pertinente para iniciar proceso de Med·IA·ción, escribir especificaciones..."
              />
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-body">Formatos admitidos: PDF, DOC, DOCX, JPG, PNG</span>
                <button className="btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5">
                  <Upload size={12} /> Seleccionar archivo
                </button>
              </div>
            </div>

            {/* Analizar button */}
            {!resultados && (
              <button
                onClick={handleAnalizar}
                disabled={analizando}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-sm font-body font-semibold text-sm transition-all duration-200 mb-5
                  ${analizando ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'btn-primary'}`}
              >
                {analizando ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Analizando documentación...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Analizar documentación
                  </>
                )}
              </button>
            )}

            {/* Resultados simulados */}
            {resultados && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm font-body font-semibold text-green-700">Análisis preliminar generado en modo demostración</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                  {resultadosIA.map(({ titulo, desc, color, icon }) => (
                    <div key={titulo} className={`border rounded-sm p-4 ${color} animate-slide-up`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span>{icon}</span>
                        <h3 className="font-display font-semibold text-gray-800 text-sm">{titulo}</h3>
                      </div>
                      <p className="text-xs font-body text-gray-600 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => setResultados(false)} className="btn-outline text-xs flex items-center gap-1.5">
                  <X size={12} /> Nuevo análisis
                </button>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <button onClick={() => setEtapa('datos')} className="btn-outline flex items-center gap-2">
                <ArrowLeft size={15} /> Anterior
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
