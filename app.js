const NAV_ITEMS = [
  {label:'Inicio',href:'pag.html',icon:'🏠'},
  {label:'Aula Extendida',href:'pag2.html',icon:'📚'}
];

const QUOTES = [
  {t:'Cada oportunidad que ignoras hoy, alguien más la está aprovechando ahora.',a:'— Equipo Próximo'},
  {t:'No esperes el momento perfecto. Toma el momento y hazlo perfecto.',a:'— Zoey Sayward'},
  {t:'Tu futuro no es lo que te pase — es lo que decides hacer con lo que te pasa.',a:'— Equipo Próximo'},
  {t:'El éxito no llega a quienes esperan — llega a quienes se mueven antes de estar listos.',a:'— Equipo Próximo'},
  {t:'Una pequeña acción hoy vale más que mil planes para mañana.',a:'— Equipo Próximo'},
];

const QUESTIONS = [
  {opts:[
    {icon:'💻',title:'Explorar tecnología y código',desc:'Armar cosas, automatizar, crear apps o jugar con datos'},
    {icon:'🎨',title:'Diseñar y crear visualmente',desc:'Editar fotos, hacer branding, dibujar interfaces'},
    {icon:'📣',title:'Comunicar y conectar personas',desc:'Redes sociales, eventos, escribir, convencer'},
    {icon:'🔬',title:'Investigar y analizar datos',desc:'Entender patrones, sacar conclusiones, hacer informes'},
  ]},
  {opts:[
    {icon:'🧩',title:'Lo desarmo y entiendo cómo funciona',desc:'Me gusta saber el porqué antes de actuar'},
    {icon:'⚡',title:'Me lanzo a probar y aprendo en el camino',desc:'El error es parte del proceso para mí'},
    {icon:'🤝',title:'Pregunto y trabajo con otros',desc:'El equipo siempre sabe más que uno solo'},
    {icon:'📋',title:'Busco un método o tutorial',desc:'Prefiero seguir pasos probados'},
  ]},
  {opts:[
    {icon:'🌍',title:'Haber creado algo que usa mucha gente',desc:'Impacto a escala, aunque no los conozca'},
    {icon:'💰',title:'Tener independencia económica real',desc:'No depender de un jefe ni de un horario fijo'},
    {icon:'🧠',title:'Haber aprendido algo difícil',desc:'El crecimiento personal es mi mayor motivador'},
    {icon:'❤️',title:'Haber ayudado a alguien directamente',desc:'Ver el cambio en personas concretas'},
  ]},
  {opts:[
    {icon:'🏠',title:'Desde casa con libertad total',desc:'Mi cuarto, mi horario, mi ritmo'},
    {icon:'🏢',title:'En una empresa con equipo y estructura',desc:'Colaboración, aprendizaje de colegas, rutina'},
    {icon:'🌐',title:'En mi propio negocio o startup',desc:'Construir algo mío, aunque sea pequeño'},
    {icon:'🎪',title:'En eventos, lugares diferentes, viajando',desc:'Variedad, gente nueva, experiencias'},
  ]},
  {opts:[
    {icon:'🤖',title:'Programar o configurar sistemas inteligentes',desc:'IA, automatización, bases de datos'},
    {icon:'🎬',title:'Crear contenido visual o audiovisual',desc:'Videos, diseño, fotografía, animación'},
    {icon:'📝',title:'Escribir — artículos, guiones, posts',desc:'Comunicar ideas con palabras con claridad'},
    {icon:'📊',title:'Analizar números y hacer visualizaciones',desc:'Dashboards, modelos, estadística'},
  ]},
  {opts:[
    {icon:'🎥',title:'Viendo videos y tomando notas',desc:'YouTube, Udemy, Coursera me encantan'},
    {icon:'🛠',title:'Construyendo un proyecto real',desc:'Aprendo haciendo, no leyendo'},
    {icon:'👥',title:'Con alguien que me guíe en vivo',desc:'Mentor, tutor, bootcamp presencial'},
    {icon:'📖',title:'Leyendo docs y artículos a fondo',desc:'Me gusta entender bien antes de hacer'},
  ]},
  {opts:[
    {icon:'🚀',title:'Fundé mi startup tech o de impacto social',desc:'CEO de algo que creé desde cero'},
    {icon:'💼',title:'Trabajo en una gran tech o multinacional',desc:'Google, Rappi, Mercado Libre, startup internacional'},
    {icon:'🎓',title:'Estudio una carrera universitaria completa',desc:'Ingeniería, diseño, ciencias, negocios'},
    {icon:'🌱',title:'Soy freelance y vivo del conocimiento',desc:'Cursos, consultoría, mis propios proyectos'},
  ]},
];

const PROFILE_MAP = [
  ['tech','creative','entrepreneur','analyst'],
  ['analyst','entrepreneur','creative','tech'],
  ['entrepreneur','creative','analyst','tech'],
  ['creative','tech','entrepreneur','analyst'],
  ['entrepreneur','analyst','creative','tech'],
  ['tech','analyst','creative','entrepreneur'],
  ['entrepreneur','tech','analyst','creative'],
];

const PROFILES = {
  tech:{icon:'🤖',title:'Perfil Tecnológico — Creador Digital',sub:'Tienes una mente analítica, te apasiona entender cómo funcionan los sistemas y disfrutas construir soluciones. El mundo tech — IA, programación, datos — es tu territorio natural.',traits:[{n:'Pensamiento analítico',v:92,c:'#0F7A5A'},{n:'Orientación técnica',v:88,c:'#059669'},{n:'Autonomía',v:78,c:'#3B82F6'},{n:'Resolución de problemas',v:84,c:'#8B5CF6'}],recs:[{e:'🤖',t:'Machine Learning con Python — Coursera (Andrew Ng)',d:'El curso de IA más recomendado del mundo · Certificado Google'},{e:'💻',t:'Microtrabajo: Automatización con Python',d:'$85K · Remoto · Tarea puntual · Sin experiencia previa'},{e:'🎓',t:'Beca SENA — Técnico en Sistemas',d:'Gratuita · Presencial Medellín · Inicia en junio'}]},
  creative:{icon:'🎨',title:'Perfil Creativo — Comunicador Visual',sub:'Tu fortaleza es transformar ideas en experiencias visuales y mensajes que conectan. El diseño, la comunicación digital y el storytelling son donde brillas de forma natural.',traits:[{n:'Creatividad visual',v:94,c:'#8B5CF6'},{n:'Comunicación',v:88,c:'#F59E0B'},{n:'Empatía con usuarios',v:80,c:'#EC4899'},{n:'Pensamiento conceptual',v:75,c:'#0F7A5A'}],recs:[{e:'🎨',t:'Diseño UX/UI para No Diseñadores — Google',d:'Certificado Google · 6 meses · Coursera · Auditoría gratis'},{e:'📸',t:'Microtrabajo: Fotógrafo de Producto',d:'$95K · Envigado · Sesión única · Flexible'},{e:'📱',t:'Ruta: Marketing Digital + Emprendimiento',d:'3 cursos · Udemy · Desde $15 USD'}]},
  entrepreneur:{icon:'🚀',title:'Perfil Emprendedor — Lanzador de Ideas',sub:'Tienes energía para crear, asumir riesgos y construir cosas propias. Tu motivación no es el dinero — es la libertad y el impacto. El emprendimiento tech e innovación social son tu cancha.',traits:[{n:'Iniciativa propia',v:95,c:'#F59E0B'},{n:'Tolerancia al riesgo',v:82,c:'#EF4444'},{n:'Visión estratégica',v:76,c:'#0F7A5A'},{n:'Liderazgo',v:79,c:'#8B5CF6'}],recs:[{e:'🚀',t:'Lean Startup y Emprendimiento — MIT OpenCourseWare',d:'Gratuito · MIT · Online · Autoaprendizaje'},{e:'💡',t:'Beca: Festival de Emprendimiento Joven Medellín',d:'3 mayo · Parque Explora · Convocatoria abierta'},{e:'🛠',t:'Microtrabajo: Community Manager',d:'$60K · Remoto · Construye portafolio real'}]},
  analyst:{icon:'📊',title:'Perfil Analítico — Estratega de Datos',sub:'Ves patrones donde otros ven caos. Tu fortaleza es convertir información en decisiones. Data Science, IA, finanzas y consultoría son caminos naturales para ti.',traits:[{n:'Pensamiento crítico',v:90,c:'#3B82F6'},{n:'Análisis cuantitativo',v:86,c:'#0F7A5A'},{n:'Atención al detalle',v:82,c:'#8B5CF6'},{n:'Rigor metodológico',v:78,c:'#F59E0B'}],recs:[{e:'📊',t:'Data Science con Python — IBM · Coursera',d:'Certificado profesional · 10 cursos · Auditoría gratis'},{e:'📈',t:'Microtrabajo: Analista de Encuestas Digitales',d:'$30K · Remoto · Resultados en 1h'},{e:'🤖',t:'Deep Learning Specialization — deeplearning.ai (Ng)',d:'5 cursos · Certificado · Fundamentos de IA'}]},
};

const JOBS = [
  {id:1,emoji:'💻',title:'Moderador de Contenido',company:'MediaLab Medellín',zone:'Medellín',mode:'Remoto',pay:'$45K',period:'por tarea',hours:'2h',pts:30,diff:1,why:'Ideal si tienes buen criterio y te gusta navegar redes.'},
  {id:2,emoji:'🎨',title:'Diseñador de Redes Sociales',company:'Tienda Natura · El Poblado',zone:'Medellín',mode:'Presencial',pay:'$80K',period:'por proyecto',hours:'4h',pts:50,diff:2,why:'Perfecto si eres creativo. Suma portafolio real.'},
  {id:3,emoji:'📊',title:'Encuestador Digital',company:'Datavoz S.A.',zone:'Medellín',mode:'Remoto',pay:'$30K',period:'por encuesta',hours:'1h',pts:20,diff:1,why:'La forma más rápida de ganar tu primer dinero.'},
  {id:4,emoji:'🎪',title:'Asistente de Eventos',company:'EventosPro · Laureles',zone:'Medellín',mode:'Presencial',pay:'$120K',period:'día completo',hours:'8h',pts:80,diff:3,why:'Gana en un día lo que otros en una semana.'},
  {id:5,emoji:'📸',title:'Fotógrafo de Producto',company:'Moda Local · Envigado',zone:'Envigado',mode:'Presencial',pay:'$95K',period:'por sesión',hours:'3h',pts:60,diff:2,why:'Desarrolla habilidades visuales y construye portafolio.'},
  {id:6,emoji:'🖊️',title:'Redactor de Contenido',company:'AgenciaDigital360',zone:'Bello',mode:'Remoto',pay:'$55K',period:'por artículo',hours:'3h',pts:35,diff:1,why:'Tu entrada al marketing digital si te gusta escribir.'},
];

const OPPS = [
  {emoji:'🎓',type:'Beca',name:'Beca Ser Pilo Paga 2025',detail:'Cierre: 15 mayo · Hasta $42M/año',cls:'opp-v'},
  {emoji:'🤖',type:'Curso gratuito',name:'Intro a la IA — Google Activate',detail:'10h · Certificado · Online',cls:'opp-b'},
  {emoji:'🤝',type:'Voluntariado',name:'Cruz Roja Colombiana',detail:'Fines de semana · Laureles',cls:'opp-e'},
  {emoji:'⚡',type:'Formación técnica',name:'SENA — Técnico en Sistemas',detail:'Gratuito · 6 meses · Presencial',cls:'opp-a'},
  {emoji:'🎭',type:'Evento juvenil',name:'Festival de Emprendimiento Joven',detail:'3 mayo · Parque Explora',cls:'opp-r'},
  {emoji:'🧭',type:'Orientación',name:'Sesión vocacional gratuita',detail:'Online · Cupos limitados',cls:'opp-t'},
];

const COURSES = [
  {emoji:'🤖',name:'Machine Learning — Stanford / Coursera',org:'Andrew Ng · Curso más tomado en el mundo · Auditoría gratis',pct:67,bg:'#EFF6FF',why:'El fundamento real de la IA. Te abre puertas globales.',badge:'badge-coursera',plat:'Coursera'},
  {emoji:'🔥',name:'Practical Deep Learning for Coders',org:'fast.ai · Jeremy Howard · Hands-on desde cero',pct:40,bg:'#FFF7ED',why:'Aprende IA construyendo proyectos reales desde el primer día.',badge:'badge-fast',plat:'fast.ai'},
  {emoji:'🧠',name:'Deep Learning Specialization',org:'deeplearning.ai · Andrew Ng · 5 cursos',pct:88,bg:'#ECFDF5',why:'La especialización de IA más completa y reconocida del mundo.',badge:'badge-deepl',plat:'deeplearning.ai'},
  {emoji:'🚀',name:'Python Bootcamp: De Cero a Héroe',org:'Udemy · Jose Portilla · 500k estudiantes',pct:55,bg:'#F5F3FF',why:'El lenguaje #1 para IA, datos y automatización.',badge:'badge-udemy',plat:'Udemy'},
  {emoji:'📊',name:'Data Science Profesional con Python — IBM',org:'Coursera · IBM · Certificado profesional',pct:30,bg:'#EFF6FF',why:'Convierte datos en decisiones. Alta demanda laboral.',badge:'badge-coursera',plat:'Coursera'},
  {emoji:'🏛️',name:'Introduction to Computing & Programming',org:'Georgia Tech · Online Master of Science · edX',pct:0,bg:'#FEF3C7',why:'Base sólida de computación de una de las mejores universidades del mundo.',badge:'badge-gatech',plat:'Georgia Tech'},
  {emoji:'🌐',name:'The Missing Semester — MIT',org:'MIT · Herramientas reales del mundo tech',pct:20,bg:'#FFF1F2',why:'Lo que no te enseñan en ninguna carrera pero todos los devs usan.',badge:'badge-mit',plat:'MIT'},
  {emoji:'🤗',name:'NLP con Transformers — Hugging Face',org:'Hugging Face · Cursos gratuitos · Estado del arte',pct:0,bg:'#FFFBEB',why:'El futuro del lenguaje natural y los LLMs. Gratis y actualizado.',badge:'badge-hugging',plat:'Hugging Face'},
  {emoji:'💡',name:'Emprendimiento e Innovación — Google',org:'Platzi × Google Activate · Español · Gratis',pct:72,bg:'#ECFDF5',why:'Valida tu idea, arma tu MVP y consigue tu primer cliente.',badge:'badge-platzi',plat:'Platzi'},
  {emoji:'📈',name:'Marketing Digital & E-Commerce',org:'Google Activate · Certificado Google · 40h',pct:45,bg:'#EFF6FF',why:'Habilidad en demanda: empresas pagan bien por esto.',badge:'badge-google',plat:'Google'},
];

const ACTIVITIES = [
  {dot:'#10B981',text:'Completaste test vocacional',pts:'+25 pts',time:'Hace 2 horas'},
  {dot:'#3B82F6',text:'Avanzaste 20% en ML con Python',pts:'',time:'Ayer · 4:30 PM'},
  {dot:'#F59E0B',text:'Aplicaste a beca Ser Pilo Paga',pts:'',time:'Ayer · 10:15 AM'},
];

let selectedZone = 'Todos';
let selectedMode = 'Todos';

function initApp() {
  initNav();
  initBurger();
  setActiveNav();
  initPage();
}

function initNav() {
  const desktopNav = document.getElementById('desktopNav');
  const mobileNav = document.getElementById('mobileNav');
  const mobileMenu = document.getElementById('mobileMenu');
  if (desktopNav) {
    desktopNav.innerHTML = NAV_ITEMS.map(item => `<button class="nav-btn" data-href="${item.href}">${item.icon} ${item.label}</button>`).join('');
    desktopNav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => window.location.href = btn.dataset.href));
  }
  if (mobileNav) {
    mobileNav.innerHTML = NAV_ITEMS.map(item => `<button class="mob-nav-btn" data-href="${item.href}"><span class="mob-nav-icon">${item.icon}</span>${item.label}</button>`).join('');
    mobileNav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => window.location.href = btn.dataset.href));
  }
  if (mobileMenu) {
    mobileMenu.innerHTML = NAV_ITEMS.map(item => `<button class="nav-btn" data-href="${item.href}">${item.icon} ${item.label}</button>`).join('');
    mobileMenu.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => window.location.href = btn.dataset.href));
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

function initPage() {
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
  }
  if (document.getElementById('aula-tabs')) {
    aulaTab('clases');
  }
  const modal = document.getElementById('modal-clase');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) cerrarModal();
    });
  }
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
  const formatter = new Intl.DateTimeFormat('es-CO', { weekday:'long', day:'numeric', month:'long' });
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
  const score = {tech:0,creative:0,entrepreneur:0,analyst:0};
  for (let i = 1; i <= 7; i += 1) {
    const selected = document.querySelector(`#q${i}opts .voc-opt.selected`);
    if (selected) {
      const profile = selected.dataset.profile;
      if (profile) score[profile] += 1;
    }
  }
  const profileKey = Object.entries(score).sort((a,b) => b[1] - a[1])[0][0] || 'tech';
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
      <div class="voc-trait"><div class="voc-trait-name">${trait.n}</div><div class="voc-trait-bar"><div class="voc-trait-fill" style="width:${trait.v}%;background:${trait.c}"></div></div></div>
    `).join('');
  }
  if (recs) {
    recs.innerHTML = profile.recs.map(item => `
      <div class="voc-rec-item"><div class="voc-rec-emoji">${item.e}</div><div class="voc-rec-body"><strong>${item.t}</strong><span>${item.d}</span></div></div>
    `).join('');
  }
  showStep(8);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderJobFilters() {
  renderPillGroup('zonePills', ['Todos','Medellín','Envigado','Bello','Rionegro'], selectedZone, value => {
    selectedZone = value;
    renderJobs();
  });
  renderPillGroup('modePills', ['Todos','Remoto','Presencial'], selectedMode, value => {
    selectedMode = value;
    renderJobs();
  });
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
      <div class="job-footer"><div class="diff-dots">${Array.from({ length: 3 }, (_, i) => `<span class="diff-dot ${i < job.diff ? 'dd-on' : 'dd-off'}"></span>`).join('')}</div><span class="diff-label">${job.hours}</span></div>
    </div>
  `).join('');
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
  list.innerHTML = ACTIVITIES.map(activity => `
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

function aulaTab(tab) {
  ['clases','tutorias','materias'].forEach(t => {
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

window.addEventListener('DOMContentLoaded', initApp);
