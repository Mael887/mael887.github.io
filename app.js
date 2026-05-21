
// ─── Source: js/data.js ───
const NAV_ITEMS = [
  { label: 'Inicio', href: 'pag.html', icon: '🏠' },
  { label: 'Aula Extendida', href: 'pag2.html', icon: '📚' }
];

const QUOTES = [
  { t: 'Cada oportunidad que ignoras hoy, alguien más la está aprovechando ahora.', a: '— Equipo Próximo' },
  { t: 'No esperes el momento perfecto. Toma el momento y hazlo perfecto.', a: '— Zoey Sayward' },
  { t: 'Tu futuro no es lo que te pase — es lo que decides hacer con lo que te pasa.', a: '— Equipo Próximo' },
  { t: 'El éxito no llega a quienes esperan — llega a quienes se mueven antes de estar listos.', a: '— Equipo Próximo' },
  { t: 'Una pequeña acción hoy vale más que mil planes para mañana.', a: '— Equipo Próximo' },
];

const QUESTIONS = [
  {
    opts: [
      { icon: '💻', title: 'Explorar tecnología y código', desc: 'Armar cosas, automatizar, crear apps o jugar con datos' },
      { icon: '🎨', title: 'Diseñar y crear visualmente', desc: 'Editar fotos, hacer branding, dibujar interfaces' },
      { icon: '📣', title: 'Comunicar y conectar personas', desc: 'Redes sociales, eventos, escribir, convencer' },
      { icon: '🔬', title: 'Investigar y analizar datos', desc: 'Entender patrones, sacar conclusiones, hacer informes' },
    ]
  },
  {
    opts: [
      { icon: '🧩', title: 'Lo desarmo y entiendo cómo funciona', desc: 'Me gusta saber el porqué antes de actuar' },
      { icon: '⚡', title: 'Me lanzo a probar y aprendo en el camino', desc: 'El error es parte del proceso para mí' },
      { icon: '🤝', title: 'Pregunto y trabajo con otros', desc: 'El equipo siempre sabe más que uno solo' },
      { icon: '📋', title: 'Busco un método o tutorial', desc: 'Prefiero seguir pasos probados' },
    ]
  },
  {
    opts: [
      { icon: '🌍', title: 'Haber creado algo que usa mucha gente', desc: 'Impacto a escala, aunque no los conozca' },
      { icon: '💰', title: 'Tener independencia económica real', desc: 'No depender de un jefe ni de un horario fijo' },
      { icon: '🧠', title: 'Haber aprendido algo difícil', desc: 'El crecimiento personal es mi mayor motivador' },
      { icon: '❤️', title: 'Haber ayudado a alguien directamente', desc: 'Ver el cambio en personas concretas' },
    ]
  },
  {
    opts: [
      { icon: '🏠', title: 'Desde casa con libertad total', desc: 'Mi cuarto, mi horario, mi ritmo' },
      { icon: '🏢', title: 'En una empresa con equipo y estructura', desc: 'Colaboración, aprendizaje de colegas, rutina' },
      { icon: '🌐', title: 'En mi propio negocio o startup', desc: 'Construir algo mío, aunque sea pequeño' },
      { icon: '🎪', title: 'En eventos, lugares diferentes, viajando', desc: 'Variedad, gente nueva, experiencias' },
    ]
  },
  {
    opts: [
      { icon: '🤖', title: 'Programar o configurar sistemas inteligentes', desc: 'IA, automatización, bases de datos' },
      { icon: '🎬', title: 'Crear contenido visual o audiovisual', desc: 'Videos, diseño, fotografía, animación' },
      { icon: '📝', title: 'Escribir — artículos, guiones, posts', desc: 'Comunicar ideas con palabras con claridad' },
      { icon: '📊', title: 'Analizar números y hacer visualizaciones', desc: 'Dashboards, modelos, estadística' },
    ]
  },
  {
    opts: [
      { icon: '🎥', title: 'Viendo videos y tomando notas', desc: 'YouTube, Udemy, Coursera me encantan' },
      { icon: '🛠', title: 'Construyendo un proyecto real', desc: 'Aprendo haciendo, no leyendo' },
      { icon: '👥', title: 'Con alguien que me guíe en vivo', desc: 'Mentor, tutor, bootcamp presencial' },
      { icon: '📖', title: 'Leyendo docs y artículos a fondo', desc: 'Me gusta entender bien antes de hacer' },
    ]
  },
  {
    opts: [
      { icon: '🚀', title: 'Fundé mi startup tech o de impacto social', desc: 'CEO de algo que creé desde cero' },
      { icon: '💼', title: 'Trabajo en una gran tech o multinacional', desc: 'Google, Rappi, Mercado Libre, startup internacional' },
      { icon: '🎓', title: 'Estudio una carrera universitaria completa', desc: 'Ingeniería, diseño, ciencias, negocios' },
      { icon: '🌱', title: 'Soy freelance y vivo del conocimiento', desc: 'Cursos, consultoría, mis propios proyectos' },
    ]
  },
];

const PROFILE_MAP = [
  ['tech', 'creative', 'entrepreneur', 'analyst'],
  ['analyst', 'entrepreneur', 'creative', 'tech'],
  ['entrepreneur', 'creative', 'analyst', 'tech'],
  ['creative', 'tech', 'entrepreneur', 'analyst'],
  ['entrepreneur', 'analyst', 'creative', 'tech'],
  ['tech', 'analyst', 'creative', 'entrepreneur'],
  ['entrepreneur', 'tech', 'analyst', 'creative'],
];

const PROFILES = {
  tech: { icon: '🤖', title: 'Perfil Tecnológico — Creador Digital', sub: 'Tienes una mente analítica, te apasiona entender cómo funcionan los sistemas y disfrutas construir soluciones. El mundo tech — IA, programación, datos — es tu territorio natural.', traits: [{ n: 'Pensamiento analítico', v: 92, c: '#0F7A5A' }, { n: 'Orientación técnica', v: 88, c: '#059669' }, { n: 'Autonomía', v: 78, c: '#3B82F6' }, { n: 'Resolución de problemas', v: 84, c: '#8B5CF6' }], recs: [{ e: '🤖', t: 'Machine Learning con Python — Coursera (Andrew Ng)', d: 'El curso de IA más recomendado del mundo · Certificado Google' }, { e: '💻', t: 'Microtrabajo: Automatización con Python', d: '$85K · Remoto · Tarea puntual · Sin experiencia previa' }, { e: '🎓', t: 'Beca SENA — Técnico en Sistemas', d: 'Gratuita · Presencial Medellín · Inicia en junio' }] },
  creative: { icon: '🎨', title: 'Perfil Creativo — Comunicador Visual', sub: 'Tu fortaleza es transformar ideas en experiencias visuales y mensajes que conectan. El diseño, la comunicación digital y el storytelling son donde brillas de forma natural.', traits: [{ n: 'Creatividad visual', v: 94, c: '#8B5CF6' }, { n: 'Comunicación', v: 88, c: '#F59E0B' }, { n: 'Empatía con usuarios', v: 80, c: '#EC4899' }, { n: 'Pensamiento conceptual', v: 75, c: '#0F7A5A' }], recs: [{ e: '🎨', t: 'Diseño UX/UI para No Diseñadores — Google', d: 'Certificado Google · 6 meses · Coursera · Auditoría gratis' }, { e: '📸', t: 'Microtrabajo: Fotógrafo de Producto', d: '$95K · Envigado · Sesión única · Flexible' }, { e: '📱', t: 'Ruta: Marketing Digital + Emprendimiento', d: '3 cursos · Udemy · Desde $15 USD' }] },
  entrepreneur: { icon: '🚀', title: 'Perfil Emprendedor — Lanzador de Ideas', sub: 'Tienes energía para crear, asumir riesgos y construir cosas propias. Tu motivación no es el dinero — es la libertad y el impacto. El emprendimiento tech e innovación social son tu cancha.', traits: [{ n: 'Iniciativa propia', v: 95, c: '#F59E0B' }, { n: 'Tolerancia al riesgo', v: 82, c: '#EF4444' }, { n: 'Visión estratégica', v: 76, c: '#0F7A5A' }, { n: 'Liderazgo', v: 79, c: '#8B5CF6' }], recs: [{ e: '🚀', t: 'Lean Startup y Emprendimiento — MIT OpenCourseWare', d: 'Gratuito · MIT · Online · Autoaprendizaje' }, { e: '💡', t: 'Beca: Festival de Emprendimiento Joven Medellín', d: '3 mayo · Parque Explora · Convocatoria abierta' }, { e: '🛠', t: 'Microtrabajo: Community Manager', d: '$60K · Remoto · Construye portafolio real' }] },
  analyst: { icon: '📊', title: 'Perfil Analítico — Estratega de Datos', sub: 'Ves patrones donde otros ven caos. Tu fortaleza es convertir información en decisiones. Data Science, IA, finanzas y consultoría son caminos naturales para ti.', traits: [{ n: 'Pensamiento crítico', v: 90, c: '#3B82F6' }, { n: 'Análisis cuantitativo', v: 86, c: '#0F7A5A' }, { n: 'Atención al detalle', v: 82, c: '#8B5CF6' }, { n: 'Rigor metodológico', v: 78, c: '#F59E0B' }], recs: [{ e: '📊', t: 'Data Science con Python — IBM · Coursera', d: 'Certificado profesional · 10 cursos · Auditoría gratis' }, { e: '📈', t: 'Microtrabajo: Analista de Encuestas Digitales', d: '$30K · Remoto · Resultados en 1h' }, { e: '🤖', t: 'Deep Learning Specialization — deeplearning.ai (Ng)', d: '5 cursos · Certificado · Fundamentos de IA' }] },
};

const JOBS = [
  { id: 1, emoji: '💻', title: 'Moderador de Contenido', company: 'MediaLab Medellín', zone: 'Medellín', mode: 'Remoto', pay: '$45K', period: 'por tarea', hours: '2h', pts: 30, diff: 1, why: 'Ideal si tienes buen criterio y te gusta navegar redes.' },
  { id: 2, emoji: '🎨', title: 'Diseñador de Redes Sociales', company: 'Tienda Natura · El Poblado', zone: 'Medellín', mode: 'Presencial', pay: '$80K', period: 'por proyecto', hours: '4h', pts: 50, diff: 2, why: 'Perfecto si eres creativo. Suma portafolio real.' },
  { id: 3, emoji: '📊', title: 'Encuestador Digital', company: 'Datavoz S.A.', zone: 'Medellín', mode: 'Remoto', pay: '$30K', period: 'por encuesta', hours: '1h', pts: 20, diff: 1, why: 'La forma más rápida de ganar tu primer dinero.' },
  { id: 4, emoji: '🎪', title: 'Asistente de Eventos', company: 'EventosPro · Laureles', zone: 'Medellín', mode: 'Presencial', pay: '$120K', period: 'día completo', hours: '8h', pts: 80, diff: 3, why: 'Gana en un día lo que otros en una semana.' },
  { id: 5, emoji: '📸', title: 'Fotógrafo de Producto', company: 'Moda Local · Envigado', zone: 'Envigado', mode: 'Presencial', pay: '$95K', period: 'por sesión', hours: '3h', pts: 60, diff: 2, why: 'Desarrolla habilidades visuales y construye portafolio.' },
  { id: 6, emoji: '🖊️', title: 'Redactor de Contenido', company: 'AgenciaDigital360', zone: 'Bello', mode: 'Remoto', pay: '$55K', period: 'por artículo', hours: '3h', pts: 35, diff: 1, why: 'Tu entrada al marketing digital si te gusta escribir.' },
];

const OPPS = [
  { emoji: '🎓', type: 'Beca', name: 'Beca Ser Pilo Paga 2025', detail: 'Cierre: 15 mayo · Hasta $42M/año', cls: 'opp-v' },
  { emoji: '🤖', type: 'Curso gratuito', name: 'Intro a la IA — Google Activate', detail: '10h · Certificado · Online', cls: 'opp-b' },
  { emoji: '🤝', type: 'Voluntariado', name: 'Cruz Roja Colombiana', detail: 'Fines de semana · Laureles', cls: 'opp-e' },
  { emoji: '⚡', type: 'Formación técnica', name: 'SENA — Técnico en Sistemas', detail: 'Gratuito · 6 meses · Presencial', cls: 'opp-a' },
  { emoji: '🎭', type: 'Evento juvenil', name: 'Festival de Emprendimiento Joven', detail: '3 mayo · Parque Explora', cls: 'opp-r' },
  { emoji: '🧭', type: 'Orientación', name: 'Sesión vocacional gratuita', detail: 'Online · Cupos limitados', cls: 'opp-t' },
];

const COURSES = [
  { emoji: '🤖', name: 'Machine Learning — Stanford / Coursera', org: 'Andrew Ng · Curso más tomado en el mundo · Auditoría gratis', pct: 67, bg: '#EFF6FF', why: 'El fundamento real de la IA. Te abre puertas globales.', badge: 'badge-coursera', plat: 'Coursera' },
  { emoji: '🔥', name: 'Practical Deep Learning for Coders', org: 'fast.ai · Jeremy Howard · Hands-on desde cero', pct: 40, bg: '#FFF7ED', why: 'Aprende IA construyendo proyectos reales desde el primer día.', badge: 'badge-fast', plat: 'fast.ai' },
  { emoji: '🧠', name: 'Deep Learning Specialization', org: 'deeplearning.ai · Andrew Ng · 5 cursos', pct: 88, bg: '#ECFDF5', why: 'La especialización de IA más completa y reconocida del mundo.', badge: 'badge-deepl', plat: 'deeplearning.ai' },
  { emoji: '🚀', name: 'Python Bootcamp: De Cero a Héroe', org: 'Udemy · Jose Portilla · 500k estudiantes', pct: 55, bg: '#F5F3FF', why: 'El lenguaje #1 para IA, datos y automatización.', badge: 'badge-udemy', plat: 'Udemy' },
  { emoji: '📊', name: 'Data Science Profesional con Python — IBM', org: 'Coursera · IBM · Certificado profesional', pct: 30, bg: '#EFF6FF', why: 'Convierte datos en decisiones. Alta demanda laboral.', badge: 'badge-coursera', plat: 'Coursera' },
  { emoji: '🏛️', name: 'Introduction to Computing & Programming', org: 'Georgia Tech · Online Master of Science · edX', pct: 0, bg: '#FEF3C7', why: 'Base sólida de computación de una de las mejores universidades del mundo.', badge: 'badge-gatech', plat: 'Georgia Tech' },
  { emoji: '🌐', name: 'The Missing Semester — MIT', org: 'MIT · Herramientas reales del mundo tech', pct: 20, bg: '#FFF1F2', why: 'Lo que no te enseñan en ninguna carrera pero todos los devs usan.', badge: 'badge-mit', plat: 'MIT' },
  { emoji: '🤗', name: 'NLP con Transformers — Hugging Face', org: 'Hugging Face · Cursos gratuitos · Estado del arte', pct: 0, bg: '#FFFBEB', why: 'El futuro del lenguaje natural y los LLMs. Gratis y actualizado.', badge: 'badge-hugging', plat: 'Hugging Face' },
  { emoji: '💡', name: 'Emprendimiento e Innovación — Google', org: 'Platzi × Google Activate · Español · Gratis', pct: 72, bg: '#ECFDF5', why: 'Valida tu idea, arma tu MVP y consigue tu primer cliente.', badge: 'badge-platzi', plat: 'Platzi' },
  { emoji: '📈', name: 'Marketing Digital & E-Commerce', org: 'Google Activate · Certificado Google · 40h', pct: 45, bg: '#EFF6FF', why: 'Habilidad en demanda: empresas pagan bien por esto.', badge: 'badge-google', plat: 'Google' },
];

const ACTIVITIES = [
  { dot: '#10B981', text: 'Completaste test vocacional', pts: '+25 pts', time: 'Hace 2 horas' },
  { dot: '#3B82F6', text: 'Avanzaste 20% en ML con Python', pts: '', time: 'Ayer · 4:30 PM' },
  { dot: '#F59E0B', text: 'Aplicaste a beca Ser Pilo Paga', pts: '', time: 'Ayer · 10:15 AM' },
];

const DEFAULT_STATE = {
  xp: 1380,
  level: 4,
  streak: 7,
  profileCompletion: 60,
  userInterests: [],
  vocProfile: null,
  appliedJobs: [],     // IDs of applied jobs
  completedJobs: [],   // IDs of completed jobs
  courseProgress: {
    'Machine Learning — Stanford / Coursera': 67,
    'Practical Deep Learning for Coders': 40,
    'Deep Learning Specialization': 88,
    'Python Bootcamp: De Cero a Héroe': 55,
    'Data Science Profesional con Python — IBM': 30,
    'Introduction to Computing & Programming': 0,
    'The Missing Semester — MIT': 20,
    'NLP con Transformers — Hugging Face': 0,
    'Emprendimiento e Innovación — Google': 72,
    'Marketing Digital & E-Commerce': 45
  },
  activities: [
    { dot: '#10B981', text: 'Completaste test vocacional', pts: '+25 pts', time: 'Hace 2 horas' },
    { dot: '#3B82F6', text: 'Avanzaste 20% en ML con Python', pts: '', time: 'Ayer · 4:30 PM' },
    { dot: '#F59E0B', text: 'Aplicaste a beca Ser Pilo Paga', pts: '', time: 'Ayer · 10:15 AM' }
  ],
  tutorings: [], // scheduled session details
  tutors: [],    // user-added tutors (custom)
  dailyTasks: {
    perfil: false,
    vocational: false,
    microjob: false,
    map: false
  },
  weeklyObjectivesChecked: {
    mateClase: true,
    tutoriaCompletada: true,
    quizEnviado: true,
    repasarFisica: false,
    agendarTutoria: false
  },
  theme: 'light' // 'light' or 'dark'
};

// ─── Source: js/state.js ───

let state = { ...DEFAULT_STATE };

let onStateChangeCallback = null;
function registerStateChangeListener(callback) {
  onStateChangeCallback = callback;
}

function loadState() {
  const saved = localStorage.getItem('proximo_state');
  if (saved) {
    try {
      state = JSON.parse(saved);
      // Merge with default in case of schema updates
      for (let key in DEFAULT_STATE) {
        if (state[key] === undefined) {
          state[key] = DEFAULT_STATE[key];
        }
      }
    } catch (e) {
      console.error("Error loading state from localStorage", e);
      state = { ...DEFAULT_STATE };
    }
  }
  applyTheme();
}

function saveState() {
  localStorage.setItem('proximo_state', JSON.stringify(state));
  if (onStateChangeCallback) {
    onStateChangeCallback();
  }
}

function applyTheme() {
  if (state.theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveState();
  playClickSound();
}

let showToastCallback = null;
function registerShowToast(callback) {
  showToastCallback = callback;
}

function addXP(amount, activityText) {
  state.xp += amount;

  let newLevel = state.level;
  if (state.xp >= 1500 && state.level < 5) {
    newLevel = 5;
    state.dailyTasks.perfil = true;
  }

  const now = new Date();
  const timeStr = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }) + " · Hoy";
  state.activities.unshift({
    dot: '#10B981',
    text: activityText,
    pts: `+${amount} pts`,
    time: timeStr
  });

  if (state.activities.length > 8) {
    state.activities.pop();
  }

  if (newLevel > state.level) {
    state.level = newLevel;
    playLevelUpSound();
    if (showToastCallback) showToastCallback(`¡Subiste al Nivel ${newLevel}! 🎉`);
  } else {
    playSuccessSound();
    if (showToastCallback) showToastCallback(`+${amount} XP: ${activityText}`);
  }

  saveState();
}

// ─── Source: js/audio.js ───
function playClickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    console.log("AudioContext blocked or unsupported", e);
  }
}

function playSuccessSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'triangle';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
    osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.start();
    osc.stop(now + 0.4);
  } catch (e) {
    console.log("AudioContext blocked or unsupported", e);
  }
}

function playLevelUpSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;

    const frequencies = [261.63, 329.63, 392.00, 523.25];
    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = index % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.05);
      osc.frequency.setValueAtTime(freq * 2, now + 0.2 + index * 0.05);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.start();
      osc.stop(now + 0.5);
    });
  } catch (e) {
    console.log("AudioContext blocked or unsupported", e);
  }
}

// ─── Source: js/ui.js ───

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderPillGroup(containerId, items, activeValue, onClick) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => `<button type="button" class="pill${item === activeValue ? ' active' : ''}" data-value="${item}">${item}</button>`).join('');
  container.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    onClick(btn.dataset.value);
    renderPillGroup(containerId, items, btn.dataset.value, onClick);
  }));
}

function renderQuote() {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  const quoteText = document.getElementById('quoteText');
  const quoteAuthor = document.getElementById('quoteAuthor');
  if (quoteText) quoteText.textContent = quote.t;
  if (quoteAuthor) quoteAuthor.textContent = quote.a;
}

function renderDate() {
  const welcomeDate = document.getElementById('welcomeDate');
  if (!welcomeDate) return;
  const today = new Date();
  const formatter = new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });
  welcomeDate.textContent = `Hoy es ${formatter.format(today)}`;
}

function renderTimer() {
  const D = document.getElementById('timerD');
  const H = document.getElementById('timerH');
  const M = document.getElementById('timerM');
  if (!D || !H || !M) return;
  D.textContent = '02';
  H.textContent = '14';
  M.textContent = '37';
}

function renderOpps() {
  const grid = document.getElementById('oppsGrid');
  if (!grid) return;
  grid.innerHTML = OPPS.map(opp => `
    <div class="opp-card ${opp.cls}">
      <div class="opp-emoji">${opp.emoji}</div>
      <div class="opp-type">${opp.type}</div>
      <div class="opp-name">${opp.name}</div>
      <div class="opp-detail">${opp.detail}</div>
    </div>
  `).join('');
}

function renderCourses() {
  const list = document.getElementById('coursesList');
  if (!list) return;
  list.innerHTML = COURSES.map(course => `
    <div class="course-item" style="background:${course.bg}">
      <div class="course-thumb">${course.emoji}</div>
      <div class="course-info">
        <div class="course-name">${course.name}</div>
        <div class="course-org">${course.org}</div>
        <div class="course-why">${course.why}</div>
      </div>
      <div class="course-right">
        <div class="course-pct">${course.pct}%</div>
        <div class="course-bar-track"><div class="course-bar-fill" style="width:${course.pct}%;"></div></div>
        <span class="course-platform-badge ${course.badge}">${course.plat}</span>
      </div>
    </div>
  `).join('');
}

function renderActivities() {
  const list = document.getElementById('activityList');
  if (!list) return;
  list.innerHTML = state.activities.map(activity => `
    <div class="act-item">
      <span class="act-dot" style="background:${activity.dot}"></span>
      <div>
        <div class="act-text">${activity.text}</div>
        <div class="act-time">${activity.time}</div>
      </div>
      <div class="act-pts">${activity.pts}</div>
    </div>
  `).join('');
}

function updateUIFromState() {
  // Update header XP
  const xpChips = document.querySelectorAll('.xp-chip');
  xpChips.forEach(chip => {
    chip.innerHTML = `${state.xp.toLocaleString()} XP <em>· Niv.${state.level}</em>`;
  });

  // Welcome section changes (for page 1)
  const welcomeAvatar = document.querySelector('.welcome-avatar');
  if (welcomeAvatar) {
    if (state.vocProfile && PROFILES[state.vocProfile]) {
      welcomeAvatar.textContent = PROFILES[state.vocProfile].icon;
    } else {
      welcomeAvatar.textContent = 'SC';
    }
  }

  const welcomeRight = document.querySelector('.welcome-right');
  if (welcomeRight) {
    const badgeA = welcomeRight.querySelector('.w-badge-a');
    if (badgeA) {
      const levelNames = { 4: 'Explorador', 5: 'Innovador' };
      badgeA.textContent = `⭐ Nivel ${state.level} — ${levelNames[state.level] || 'Explorador'}`;
    }
    const streakBadge = welcomeRight.querySelector('.w-badge-g');
    if (streakBadge) {
      streakBadge.textContent = `🔥 ${state.streak} días de racha`;
    }
    const onboardPct = welcomeRight.querySelector('.onboard-pct');
    if (onboardPct) {
      onboardPct.textContent = `${state.profileCompletion}%`;
    }
    const onboardFill = welcomeRight.querySelector('.onboard-fill');
    if (onboardFill) {
      onboardFill.style.width = `${state.profileCompletion}%`;
    }
  }

  // Update Daily Tasks Card (Missions)
  const heroTasks = document.querySelector('.hero-tasks');
  if (heroTasks) {
    const taskList = [
      { name: 'Perfil completado', done: state.profileCompletion >= 100 },
      { name: 'Test vocacional', done: state.vocProfile !== null },
      { name: '1 microtrabajo', done: state.dailyTasks.microjob },
      { name: 'Explorar mapa', done: state.dailyTasks.map }
    ];
    heroTasks.innerHTML = taskList.map(task => `
      <div class="hero-task ${task.done ? 'done' : 'todo'}">
        <div class="task-dot ${task.done ? 'done' : 'todo'}">
          ${task.done ? '<svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>' : ''}
        </div>
        ${task.name}
      </div>
    `).join('');
  }

  // Update Level Progress Card
  const progCard = document.querySelector('.prog-card');
  if (progCard) {
    const levelCircle = progCard.querySelector('.level-circle');
    if (levelCircle) levelCircle.textContent = state.level;
    const levelName = progCard.querySelector('.level-name');
    if (levelName) {
      const levelNames = { 4: 'Explorador', 5: 'Innovador' };
      levelName.textContent = levelNames[state.level] || 'Explorador';
    }
    const levelPtsLbl = progCard.querySelector('.level-pts-lbl');
    if (levelPtsLbl) {
      levelPtsLbl.textContent = `${state.xp.toLocaleString()} / 1.500 pts`;
    }
    const ptsBig = progCard.querySelector('.pts-big');
    if (ptsBig) ptsBig.textContent = state.xp.toLocaleString();

    const targetXP = 1500;
    const pct = Math.min(100, Math.round((state.xp / targetXP) * 100));
    const progPct = progCard.querySelector('.prog-pct');
    if (progPct) progPct.textContent = `${pct}%`;
    const progFill = progCard.querySelector('.prog-fill');
    if (progFill) progFill.style.width = `${pct}%`;

    const milestone = progCard.querySelector('.prog-milestone');
    if (milestone) {
      if (state.level >= 5) {
        milestone.innerHTML = '✦ ¡Has alcanzado el nivel máximo disponible! 🚀';
      } else {
        const remaining = targetXP - state.xp;
        milestone.innerHTML = `✦ Te faltan ${remaining} pts para Nivel 5 — Innovador`;
      }
    }

    const achievements = progCard.querySelector('.achievements');
    if (achievements) {
      achievements.innerHTML = `
        <div class="ach earned"><span class="ach-emoji">🚀</span><span class="ach-name">Primer trabajo</span></div>
        <div class="ach earned"><span class="ach-emoji">📚</span><span class="ach-name">Aprendiz</span></div>
        <div class="ach earned"><span class="ach-emoji">🔥</span><span class="ach-name">Racha 7d</span></div>
        <div class="ach ${state.level >= 5 ? 'earned' : 'ach-fade'}">
          <span class="ach-emoji">🌟</span>
          <span class="ach-name">Niv. 5</span>
          ${state.level < 5 ? '<span class="ach-lock">🔒</span>' : ''}
        </div>
      `;
    }
  }

  // Update Activity List
  renderActivities();

  // Update Weekly objectives on page 2
  const pageAula = document.getElementById('page-aula');
  if (pageAula) {
    let checkedCount = 0;
    for (let key in state.weeklyObjectivesChecked) {
      if (state.weeklyObjectivesChecked[key]) checkedCount++;
    }

    const pctSpan = pageAula.querySelector('.prog-card span[style*="color:#047857;"], .prog-card span[style*="font-size:13px"]');
    if (pctSpan) {
      const pct = Math.round((checkedCount / 5) * 100);
      pctSpan.textContent = `${pct}%`;
    }
    const progBarFill = pageAula.querySelector('.prog-card div[style*="background:linear-gradient(90deg,#059669,#34D399)"], .prog-card div[style*="background:linear-gradient"]');
    if (progBarFill) {
      const pct = Math.round((checkedCount / 5) * 100);
      progBarFill.style.width = `${pct}%`;
    }

    const objectivesTitleSub = pageAula.querySelector('.prog-card p[style*="color:#6B7280;"], .prog-card p[style*="font-size:12px"]');
    if (objectivesTitleSub) {
      objectivesTitleSub.textContent = `${checkedCount} de 5 objetivos completados`;
    }

    const badgesContainer = pageAula.querySelector('.prog-card div[style*="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;"]');
    if (badgesContainer) {
      const bList = [
        { key: 'mateClase', text: 'Ver clase de Mate' },
        { key: 'tutoriaCompletada', text: 'Tutoría completada' },
        { key: 'quizEnviado', text: 'Quiz enviado' },
        { key: 'repasarFisica', text: 'Repasar Física' },
        { key: 'agendarTutoria', text: 'Agendar tutoría' }
      ];
      badgesContainer.innerHTML = bList.map(item => {
        const done = state.weeklyObjectivesChecked[item.key];
        if (done) {
          return `<span style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:20px;padding:4px 12px;font-size:12px;color:#047857;font-weight:500;">✅ ${item.text}</span>`;
        } else {
          return `<span style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:20px;padding:4px 12px;font-size:12px;color:#9CA3AF;font-weight:500;">⬜ ${item.text}</span>`;
        }
      }).join('');
    }
  }

  // Update courses list progress
  const coursesList = document.getElementById('coursesList');
  if (coursesList) {
    COURSES.forEach(c => {
      if (state.courseProgress[c.name] !== undefined) {
        c.pct = state.courseProgress[c.name];
      }
    });
    renderCourses();
  }

  // Update jobs count
  renderJobs();
}

// ─── Source: js/jobs.js ───

let selectedZone = 'Todos';
let selectedMode = 'Todos';


function renderJobFilters() {
  renderPillGroup('zonePills', ['Todos', 'Medellín', 'Envigado', 'Bello', 'Rionegro'], selectedZone, value => {
    selectedZone = value;
    renderJobs();
  });
  renderPillGroup('modePills', ['Todos', 'Remoto', 'Presencial'], selectedMode, value => {
    selectedMode = value;
    renderJobs();
  });
}

function renderJobs() {
  const grid = document.getElementById('jobsGrid');
  const counter = document.getElementById('jobsCount');
  if (!grid) return;
  const filtered = JOBS.filter(job => {
    const zoneMatch = selectedZone === 'Todos' || job.zone === selectedZone;
    const modeMatch = selectedMode === 'Todos' || job.mode === selectedMode;
    return zoneMatch && modeMatch;
  });
  if (counter) counter.textContent = `${filtered.length} oportunidades para tu perfil`;
  grid.innerHTML = filtered.map(job => `
    <div class="job-card">
      <div class="job-emoji-wrap">${job.emoji}</div>
      <div class="job-pay-amount">${job.pay}</div>
      <div class="job-pay-period">${job.period}</div>
      <div class="job-title">${job.title}</div>
      <div class="job-company">${job.company} · ${job.mode}</div>
      <div class="job-value-prop">${job.why}</div>
      <div class="tags"><span class="tag tag-g">${job.zone}</span><span class="tag tag-b">${job.mode}</span></div>
      <div class="job-footer">
        <div class="diff-dots">${Array.from({ length: 3 }, (_, i) => `<span class="diff-dot ${i < job.diff ? 'dd-on' : 'dd-off'}"></span>`).join('')}</div>
        <span class="diff-label">${job.hours}</span>
      </div>
    </div>
  `).join('');
}

// ─── Source: js/vocational.js ───

function renderVocOptions() {
  QUESTIONS.forEach((question, index) => {
    const step = index + 1;
    const container = document.getElementById(`q${step}opts`);
    if (!container) return;
    container.innerHTML = question.opts.map((option, optionIndex) => `
      <button type="button" class="voc-opt" onclick="selectOption(this, ${step})" data-profile="${PROFILE_MAP[index][optionIndex]}">
        <span class="voc-opt-icon">${option.icon}</span>
        <span class="voc-opt-body"><strong>${option.title}</strong>${option.desc}</span>
      </button>
    `).join('');
  });
}

function selectOption(btn, step) {
  const options = btn.parentElement.querySelectorAll('.voc-opt');
  options.forEach(opt => opt.classList.remove('selected'));
  btn.classList.add('selected');
  const nextButton = document.getElementById(`q${step}next`);
  if (nextButton) nextButton.disabled = false;
}

function showStep(step) {
  document.querySelectorAll('.voc-step').forEach(el => el.classList.remove('active'));
  const nextStep = document.getElementById(`vstep-${step}`);
  if (nextStep) nextStep.classList.add('active');
  const progress = document.getElementById('vocProg');
  if (progress) {
    progress.style.width = `${Math.round((step / 8) * 100)}%`;
  }
}

function vocNext() {
  const active = document.querySelector('.voc-step.active');
  if (!active) return;
  if (active.id === 'vstep-0') {
    showStep(1);
    return;
  }
  const step = Number(active.id.split('-')[1]);
  if (step < 7) showStep(step + 1);
}

function vocBack(step) {
  showStep(step - 1);
}

function openVoc() {
  const overlay = document.getElementById('voc-overlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  resetVoc();
  showStep(0);
}

function closeVoc() {
  const overlay = document.getElementById('voc-overlay');
  if (!overlay) return;
  overlay.style.display = 'none';
}

function retakeVoc() {
  openVoc();
}

function resetVoc() {
  document.querySelectorAll('.voc-opt.selected').forEach(el => el.classList.remove('selected'));
  QUESTIONS.forEach((_, index) => {
    const step = index + 1;
    const nextButton = document.getElementById(`q${step}next`);
    if (nextButton) nextButton.disabled = true;
  });
}

function vocCalc() {
  const score = { tech: 0, creative: 0, entrepreneur: 0, analyst: 0 };
  for (let i = 1; i <= 7; i += 1) {
    const selected = document.querySelector(`#q${i}opts .voc-opt.selected`);
    if (selected) {
      const profile = selected.dataset.profile;
      if (profile) score[profile] += 1;
    }
  }
  const profileKey = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0] || 'tech';
  const profile = PROFILES[profileKey] || PROFILES.tech;

  const icon = document.getElementById('vocResIcon');
  const title = document.getElementById('vocResTitle');
  const sub = document.getElementById('vocResSub');
  const traits = document.getElementById('vocTraits');
  const recs = document.getElementById('vocRecsList');

  if (icon) icon.textContent = profile.icon;
  if (title) title.textContent = profile.title;
  if (sub) sub.textContent = profile.sub;
  if (traits) {
    traits.innerHTML = profile.traits.map(trait => `
      <div class="voc-trait">
        <div class="voc-trait-name">${trait.n}</div>
        <div class="voc-trait-bar">
          <div class="voc-trait-fill" style="width:${trait.v}%;background:${trait.c}"></div>
        </div>
      </div>
    `).join('');
  }
  if (recs) {
    recs.innerHTML = profile.recs.map(item => `
      <div class="voc-rec-item">
        <div class="voc-rec-emoji">${item.e}</div>
        <div class="voc-rec-body"><strong>${item.t}</strong><span>${item.d}</span></div>
      </div>
    `).join('');
  }

  // Save profile to state
  const isFirstTime = !state.vocProfile;
  state.vocProfile = profileKey;

  if (isFirstTime) {
    addXP(25, 'Completaste el test vocacional');
  } else {
    saveState();
  }

  showStep(8);
}

// ─── Source: js/aula.js ───
function aulaTab(tab) {
  ['clases', 'tutorias', 'materias'].forEach(t => {
    const section = document.getElementById('aula-' + t);
    if (section) section.style.display = t === tab ? 'block' : 'none';
    const btn = document.getElementById('tab-' + t);
    if (btn) {
      btn.style.background = t === tab ? '#fff' : 'transparent';
      btn.style.color = t === tab ? '#047857' : '#6B7280';
      btn.style.boxShadow = t === tab ? '0 1px 4px rgba(0,0,0,.08)' : 'none';
    }
  });
}

function filtrarClase(btn, materia) {
  const parent = btn.parentElement;
  if (!parent) return;
  parent.querySelectorAll('button').forEach(b => {
    b.style.background = '#fff';
    b.style.borderColor = '#E5E7EB';
    b.style.color = '#374151';
    b.style.borderWidth = '1px';
    b.style.fontWeight = '500';
  });
  btn.style.background = '#ECFDF5';
  btn.style.borderColor = '#059669';
  btn.style.color = '#047857';
  btn.style.borderWidth = '1.5px';
  btn.style.fontWeight = '600';
  document.querySelectorAll('#clases-grid .clase-card').forEach(card => {
    card.style.display = materia === 'Todas' || card.dataset.materia === materia ? 'block' : 'none';
  });
}

function verClase(btn) {
  const card = btn.closest('.clase-card');
  if (!card) return;
  const titulo = card.querySelector('h3').textContent;
  const modal = document.getElementById('modal-clase');
  const modalTitle = document.getElementById('modal-titulo');
  if (modalTitle) modalTitle.textContent = titulo;
  if (modal) modal.style.display = 'flex';
  setTimeout(() => {
    const progress = document.getElementById('video-progress');
    if (progress) progress.style.width = '35%';
  }, 300);
}

function cerrarModal() {
  const modal = document.getElementById('modal-clase');
  if (!modal) return;
  modal.style.display = 'none';
  const progress = document.getElementById('video-progress');
  if (progress) progress.style.width = '0%';
}

function filtrarMateriaTab(materia) {
  aulaTab('clases');
  setTimeout(() => {
    const btn = Array.from(document.querySelectorAll('[onclick*="filtrarClase"]')).find(b => b.textContent.trim() === materia);
    if (btn) filtrarClase(btn, materia);
  }, 50);
}

// ─── Source: js/interests.js ───

const ALL_INTERESTS = [
  { icon: '💻', label: 'Programación' },
  { icon: '🎨', label: 'Diseño' },
  { icon: '📊', label: 'Datos y Analytics' },
  { icon: '🤖', label: 'Inteligencia Artificial' },
  { icon: '📣', label: 'Marketing Digital' },
  { icon: '🎬', label: 'Contenido y Video' },
  { icon: '🚀', label: 'Emprendimiento' },
  { icon: '🌍', label: 'Impacto Social' },
  { icon: '💰', label: 'Finanzas' },
  { icon: '🤝', label: 'Voluntariado' },
  { icon: '🎓', label: 'Becas y Estudios' },
  { icon: '🎮', label: 'Videojuegos y Gaming' },
];

function openInterestsModal() {
  const modal = document.getElementById('modal-interests');
  if (!modal) return;
  populateInterestsGrid();
  modal.style.display = 'flex';
}

function closeInterestsModal(event) {
  const modal = document.getElementById('modal-interests');
  if (!modal) return;
  // Close only if clicking overlay background or close button
  if (!event || event.target === modal || event.currentTarget.classList.contains('modal-close-btn')) {
    modal.style.display = 'none';
  }
}

function saveInterests() {
  const selected = Array.from(document.querySelectorAll('#interestsGrid .interest-chip.selected'))
    .map(chip => chip.dataset.label);

  if (selected.length === 0) {
    showToast('Selecciona al menos un interés 👆');
    return;
  }

  const isFirstTime = state.userInterests.length === 0;
  state.userInterests = selected;

  if (isFirstTime) {
    // Award +40% profile completion for first time
    const oldCompletion = state.profileCompletion;
    state.profileCompletion = Math.min(100, oldCompletion + 40);
    showToast(`¡Intereses guardados! +40% perfil 🎉`);
  } else {
    showToast(`¡Intereses actualizados! (${selected.length} seleccionados)`);
  }

  saveState();
  closeInterestsModal({ target: null });
}

function populateInterestsGrid() {
  const grid = document.getElementById('interestsGrid');
  if (!grid) return;
  grid.innerHTML = ALL_INTERESTS.map(item => {
    const isSelected = state.userInterests.includes(item.label);
    return `
      <div
        class="interest-chip${isSelected ? ' selected' : ''}"
        data-label="${item.label}"
        onclick="this.classList.toggle('selected')"
        style="display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:12px;
               border:1.5px solid ${isSelected ? '#059669' : '#E5E7EB'};
               background:${isSelected ? '#ECFDF5' : '#fff'};
               color:${isSelected ? '#047857' : '#374151'};
               font-size:13px;font-weight:${isSelected ? '600' : '500'};
               cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;"
        onmouseover="this.style.borderColor='#059669';this.style.background='#F0FDF4'"
        onmouseout="this.style.borderColor=this.classList.contains('selected')?'#059669':'#E5E7EB';
                    this.style.background=this.classList.contains('selected')?'#ECFDF5':'#fff'">
        <span>${item.icon}</span>
        <span>${item.label}</span>
      </div>
    `;
  }).join('');
}

// ─── Source: js/main.js ───

// ── Wire up state callbacks (avoid circular imports) ──────────────────────
registerStateChangeListener(updateUIFromState);
registerShowToast(showToast);

// ── Expose functions needed by inline HTML event handlers ─────────────────
window.toggleTheme = toggleTheme;
window.showToast = showToast;
window.addXP = addXP;

// Vocational test
window.selectOption = selectOption;
window.vocNext = vocNext;
window.vocBack = vocBack;
window.vocCalc = vocCalc;
window.openVoc = openVoc;
window.closeVoc = closeVoc;
window.retakeVoc = retakeVoc;

// Aula Extendida
window.aulaTab = aulaTab;
window.filtrarClase = filtrarClase;
window.verClase = verClase;
window.cerrarModal = cerrarModal;
window.filtrarMateriaTab = filtrarMateriaTab;

// Modals
window.openInterestsModal = openInterestsModal;
window.closeInterestsModal = closeInterestsModal;
window.saveInterests = saveInterests;
window.closeGeneralModal = closeGeneralModal;

// ── General modal ─────────────────────────────────────────────────────────
function closeGeneralModal(event) {
  const modal = document.getElementById('modal-general');
  if (!modal) return;
  if (!event || event.target === modal || event.currentTarget.classList.contains('modal-close-btn')) {
    modal.style.display = 'none';
  }
}

// ── Nav rendering ─────────────────────────────────────────────────────────
function initNav() {
  const desktopNav = document.getElementById('desktopNav');
  const mobileNav = document.getElementById('mobileNav');
  const mobileMenu = document.getElementById('mobileMenu');

  const desktopHtml = NAV_ITEMS.map(item =>
    `<button class="nav-btn" data-href="${item.href}">${item.icon} ${item.label}</button>`
  ).join('');

  const mobileHtml = NAV_ITEMS.map(item =>
    `<button class="mob-nav-btn" data-href="${item.href}"><span class="mob-nav-icon">${item.icon}</span>${item.label}</button>`
  ).join('');

  if (desktopNav) {
    desktopNav.innerHTML = desktopHtml;
    desktopNav.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', () => window.location.href = btn.dataset.href)
    );
  }
  if (mobileMenu) {
    mobileMenu.innerHTML = desktopHtml;
    mobileMenu.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', () => window.location.href = btn.dataset.href)
    );
  }
  if (mobileNav) {
    mobileNav.innerHTML = mobileHtml;
    mobileNav.querySelectorAll('button').forEach(btn =>
      btn.addEventListener('click', () => window.location.href = btn.dataset.href)
    );
  }
}

function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'pag.html';
  document.querySelectorAll('.nav-btn, .mob-nav-btn').forEach(btn => {
    if (btn.dataset.href && btn.dataset.href.endsWith(current)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function initBurger() {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
}

// ── Page-specific init ────────────────────────────────────────────────────
function initPage() {
  // Page 1 (pag.html)
  if (document.getElementById('quoteText')) {
    renderQuote();
    renderDate();
    renderTimer();
    renderJobFilters();
    renderJobs();
    renderOpps();
    renderCourses();
    renderActivities();
    renderVocOptions();

    // Wire onboard-cta to interests modal
    const onboardCta = document.querySelector('.onboard-cta');
    if (onboardCta && !onboardCta.getAttribute('onclick')) {
      onboardCta.addEventListener('click', openInterestsModal);
    }
  }

  // Page 2 (pag2.html)
  if (document.getElementById('aula-tabs')) {
    aulaTab('clases');
  }

  // Clase modal backdrop click
  const modalClase = document.getElementById('modal-clase');
  if (modalClase) {
    modalClase.addEventListener('click', function (e) {
      if (e.target === this) cerrarModal();
    });
  }
}

// ── App entry point ───────────────────────────────────────────────────────
function initApp() {
  loadState();
  initNav();
  initBurger();
  setActiveNav();
  initPage();
  updateUIFromState();
}

window.addEventListener('DOMContentLoaded', initApp);