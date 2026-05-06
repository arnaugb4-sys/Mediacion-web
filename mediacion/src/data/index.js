// src/data/mediadores.js
export const mediadores = [
  {
    id: 1,
    nombre: "Ana Beltrán",
    iniciales: "AB",
    especialidad: "Mediación familiar y civil",
    experiencia: "12 años",
    idiomas: ["Castellano", "Catalán"],
    disponibilidad: "Alta",
    ubicacion: "Barcelona",
    modalidad: ["Presencial", "Telemática", "Híbrida"],
    valoracion: 5,
    descripcion: "Mediadora especializada en conflictos familiares complejos y acuerdos parentales.",
    color: "bg-institutional-700",
  },
  {
    id: 2,
    nombre: "Carlos Medina",
    iniciales: "CM",
    especialidad: "Mediación mercantil y consumo",
    experiencia: "8 años",
    idiomas: ["Castellano", "Inglés"],
    disponibilidad: "Media",
    ubicacion: "Madrid",
    modalidad: ["Telemática"],
    valoracion: 4,
    descripcion: "Experto en resolución de controversias empresariales, consumo y contratación.",
    color: "bg-blue-700",
  },
  {
    id: 3,
    nombre: "Laura Sánchez",
    iniciales: "LS",
    especialidad: "Mediación vecinal y comunitaria",
    experiencia: "6 años",
    idiomas: ["Castellano"],
    disponibilidad: "Alta",
    ubicacion: "Valencia",
    modalidad: ["Presencial", "Híbrida"],
    valoracion: 3.5,
    descripcion: "Especialista en conflictos de convivencia, comunidades de propietarios y relaciones vecinales.",
    color: "bg-teal-700",
  },
  {
    id: 4,
    nombre: "Pere Planes",
    iniciales: "PP",
    especialidad: "Mediación civil, mercantil y digital",
    experiencia: "10 años",
    idiomas: ["Castellano", "Catalán", "Inglés"],
    disponibilidad: "Alta",
    ubicacion: "Girona",
    modalidad: ["Telemática", "Híbrida"],
    valoracion: 5,
    descripcion: "Mediador acreditado con experiencia en procedimientos digitales y gestión documental.",
    color: "bg-indigo-800",
  },
];

export const fasesMediacion = [
  {
    numero: 1,
    titulo: "Solicitud inicial",
    icono: "📋",
    descripcion: "La parte interesada presenta la solicitud de mediación a través de la plataforma. Se identifican las partes, el tipo de conflicto y los datos esenciales del caso. La plataforma confirma la recepción y genera un número de expediente.",
    duracion: "1-3 días hábiles",
  },
  {
    numero: 2,
    titulo: "Aceptación de las partes",
    icono: "🤝",
    descripcion: "Todas las partes implicadas deben manifestar su voluntad de participar voluntariamente en la mediación. Se informa de los derechos y obligaciones, la confidencialidad del procedimiento y la posibilidad de abandonarlo en cualquier momento.",
    duracion: "2-5 días hábiles",
  },
  {
    numero: 3,
    titulo: "Designación del mediador",
    icono: "👤",
    descripcion: "Se designa al mediador acreditado correspondiente, verificando su imparcialidad respecto a las partes. El mediador acepta el encargo y puede declarar cualquier circunstancia que pudiera comprometer su neutralidad.",
    duracion: "1-2 días hábiles",
  },
  {
    numero: 4,
    titulo: "Sesión informativa",
    icono: "💬",
    descripcion: "El mediador celebra una sesión informativa con las partes, explicando el proceso, sus fases, las reglas de la mediación, el carácter voluntario y confidencial del procedimiento, y respondiendo a las dudas iniciales.",
    duracion: "1 sesión (1-2 horas)",
  },
  {
    numero: 5,
    titulo: "Aportación documental",
    icono: "📁",
    descripcion: "Las partes aportan la documentación relevante para el caso. La plataforma asistida por IA organiza, clasifica y resume la información para facilitar el trabajo del mediador, sin emitir valoraciones jurídicas.",
    duracion: "3-7 días hábiles",
  },
  {
    numero: 6,
    titulo: "Sesiones conjuntas o privadas",
    icono: "🗣️",
    descripcion: "El mediador celebra sesiones conjuntas con todas las partes o caucus (sesiones privadas) según lo requiera el proceso. Se trabaja sobre los intereses subyacentes y se exploran alternativas de acuerdo.",
    duracion: "Variable (varias sesiones)",
  },
  {
    numero: 7,
    titulo: "Generación de propuestas",
    icono: "💡",
    descripcion: "Las partes, con el apoyo del mediador, elaboran propuestas de acuerdo. La IA puede asistir técnicamente en la identificación de puntos de convergencia, sin proponer ni valorar jurídicamente las soluciones.",
    duracion: "Variable",
  },
  {
    numero: 8,
    titulo: "Eventual acuerdo",
    icono: "✅",
    descripcion: "Si las partes alcanzan un acuerdo, este se redacta formalmente. Puede elevarse a escritura pública notarial o, cuando proceda, solicitarse su homologación judicial para obtener fuerza ejecutiva.",
    duracion: "1-5 días hábiles",
  },
  {
    numero: 9,
    titulo: "Cierre del expediente",
    icono: "🏛️",
    descripcion: "Se cierra el expediente de mediación, documentando el resultado. Si no se alcanzó acuerdo, queda constancia del intento de mediación. Toda la documentación queda protegida bajo confidencialidad.",
    duracion: "1-2 días hábiles",
  },
];

export const faqData = [
  {
    pregunta: "¿Es obligatoria la mediación?",
    respuesta: "No. La mediación se basa en el principio de voluntariedad. Ninguna de las partes puede ser obligada a participar ni a permanecer en el procedimiento. Sin embargo, en algunos ámbitos puede ser requisito previo intentar la mediación antes de acudir a los tribunales.",
  },
  {
    pregunta: "¿Puedo abandonar el procedimiento?",
    respuesta: "Sí. Cualquiera de las partes puede abandonar el procedimiento de mediación en cualquier momento, sin necesidad de justificación. El mediador dejará constancia del intento de mediación.",
  },
  {
    pregunta: "¿Quién elige al mediador?",
    respuesta: "El mediador puede ser elegido de común acuerdo por las partes o asignado por la plataforma según criterios de especialidad, disponibilidad, idioma y modalidad. Siempre puede declararse causa de abstención si existe conflicto de intereses.",
  },
  {
    pregunta: "¿La IA decide el conflicto?",
    respuesta: "No. La inteligencia artificial actúa exclusivamente como asistente técnico del mediador: organiza documentación, detecta coincidencias y discrepancias, e identifica posibles puntos de acuerdo. La decisión sobre el procedimiento corresponde siempre al mediador acreditado.",
  },
  {
    pregunta: "¿Qué ocurre si se alcanza un acuerdo?",
    respuesta: "El acuerdo se documenta por escrito. Las partes pueden elevarlo a escritura pública ante notario para dotarlo de fuerza ejecutiva, o solicitar su homologación judicial cuando proceda según la normativa aplicable.",
  },
  {
    pregunta: "¿Puedo aportar documentación?",
    respuesta: "Sí. La plataforma permite la aportación de documentación en formato digital de forma segura. Toda la documentación queda protegida por el deber de confidencialidad del procedimiento.",
  },
  {
    pregunta: "¿La mediación es confidencial?",
    respuesta: "Sí. Todo lo tratado en la mediación es estrictamente confidencial. El mediador no puede ser llamado a declarar sobre lo conocido en el procedimiento. Esta confidencialidad se extiende a las partes y a todos los intervinientes.",
  },
];

export const expedientes = [
  {
    id: "MED-2026-001",
    tipo: "Mediación familiar",
    estado: "En tramitación",
    fecha: "02/05/2026",
    partes: "M. García vs. J. García",
  },
  {
    id: "MED-2026-002",
    tipo: "Mediación mercantil",
    estado: "Pendiente documentación",
    fecha: "04/05/2026",
    partes: "Inversiones Marítimas S.L. vs. Transportes Costa S.A.",
  },
];

export const mensajesBandeja = [
  {
    id: 1,
    asunto: "Nueva solicitud de mediación recibida",
    fecha: "06/05/2026 — 08:15",
    leido: false,
    texto: "Se ha recibido una nueva solicitud de mediación familiar. La parte solicitante ha completado el formulario inicial. Pendiente de revisión y aceptación.",
  },
  {
    id: 2,
    asunto: "Documentación pendiente de revisión",
    fecha: "05/05/2026 — 16:42",
    leido: false,
    texto: "El expediente MED-2026-002 cuenta con nueva documentación aportada por la parte requerida. Por favor, revise los archivos adjuntos.",
  },
  {
    id: 3,
    asunto: "Parte solicitante ha confirmado disponibilidad",
    fecha: "05/05/2026 — 11:20",
    leido: true,
    texto: "La parte solicitante del expediente MED-2026-001 ha confirmado su disponibilidad para la sesión informativa del 12 de mayo.",
  },
];

export const sesionesCalendario = [
  {
    id: 1,
    titulo: "Sesión informativa",
    fecha: "12 de mayo",
    hora: "10:00",
    expediente: "MED-2026-001",
    modalidad: "Telemática",
  },
  {
    id: 2,
    titulo: "Reunión privada (caucus)",
    fecha: "14 de mayo",
    hora: "16:30",
    expediente: "MED-2026-001",
    modalidad: "Telemática",
  },
  {
    id: 3,
    titulo: "Mediación telemática",
    fecha: "18 de mayo",
    hora: "11:00",
    expediente: "MED-2026-002",
    modalidad: "Telemática",
  },
];

export const registroAccesos = [
  { fecha: "06/05/2026", hora: "09:32", accion: "Pere Planes accedió al expediente MED-2026-001", tipo: "acceso" },
  { fecha: "06/05/2026", hora: "09:45", accion: "Se añadió documentación inicial al expediente MED-2026-001", tipo: "modificacion" },
  { fecha: "06/05/2026", hora: "10:10", accion: "Se modificaron datos de la parte solicitante", tipo: "modificacion" },
  { fecha: "06/05/2026", hora: "10:25", accion: "Se generó resumen asistido por IA", tipo: "ia" },
  { fecha: "06/05/2026", hora: "10:40", accion: "Se programó sesión informativa para el 12 de mayo", tipo: "agenda" },
  { fecha: "05/05/2026", hora: "15:18", accion: "Pere Planes accedió al expediente MED-2026-002", tipo: "acceso" },
  { fecha: "05/05/2026", hora: "15:30", accion: "Se recibió documentación de la parte requerida", tipo: "modificacion" },
];

export const noticiasActualidad = [
  {
    id: 1,
    categoria: "Blog",
    titulo: "La mediación digital como herramienta de acceso a la justicia",
    fecha: "3 de mayo de 2026",
    extracto: "Las plataformas digitales de mediación permiten acercar los mecanismos de resolución alternativa de conflictos a ciudadanos que anteriormente encontraban barreras de acceso geográficas, económicas o de tiempo.",
  },
  {
    id: 2,
    categoria: "Nota de prensa",
    titulo: "Nuevos entornos seguros para procedimientos extrajudiciales",
    fecha: "28 de abril de 2026",
    extracto: "El Ministerio de Justicia impulsa la adopción de entornos digitales seguros para la tramitación de procedimientos extrajudiciales, con especial énfasis en la protección de datos y la trazabilidad de las actuaciones.",
  },
  {
    id: 3,
    categoria: "Publicación periódica",
    titulo: "La inteligencia artificial como apoyo técnico al mediador",
    fecha: "20 de abril de 2026",
    extracto: "Un análisis sobre cómo los sistemas de IA pueden asistir al mediador en la organización de la información, la detección de puntos de acuerdo y la generación de propuestas, sin sustituir en ningún caso la intervención profesional.",
  },
  {
    id: 4,
    categoria: "Blog",
    titulo: "Mediación y eIDAS: garantías de identificación electrónica",
    fecha: "15 de abril de 2026",
    extracto: "La identificación electrónica de las partes conforme al Reglamento eIDAS constituye un elemento esencial para asegurar la validez jurídica de los acuerdos alcanzados en procedimientos de mediación digital.",
  },
];
