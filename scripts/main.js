
const CONFIG = {
  gasEndpoint:
    "https://script.google.com/macros/s/AKfycbxGQfzpUBnEHia315NkYT04Z5PuUMzN-QV56U1Qk60Jdy_OlfwcaWWNr5XGXcZDpTmn/exec",
  betaFallbackUrl: "https://beta.kedrix.tech/",
  defaultTrialDays: 14,
};

const TRANSLATIONS = {
  it: {
    htmlLang: "it",
    pageTitle: "Kedrix PFE - Beta Privata",
    metaDescription: "Kedrix PFE trasforma lo stipendio in controllo finanziario quotidiano. Accedi alla beta privata.",
    ogTitle: "Kedrix PFE - Beta Privata",
    ogDescription: "Il tuo stipendio definisce la tua realtà finanziaria. Accedi alla beta privata di Kedrix PFE.",
    skipLink: "Vai al contenuto",
    brandSub: "PFE · Beta Privata",
    navWhy: "Perché conta",
    navFlow: "Flusso prodotto",
    navBeta: "Accedi alla beta",
    heroEyebrow: "Decision intelligence per la finanza personale",
    heroTitle: "Il tuo stipendio definisce la tua realtà finanziaria.",
    heroText: "Kedrix PFE ti offre una vista operativa in tempo reale su entrate, costi fissi, spese variabili, budget giornaliero e chiarezza finanziaria, senza il rumore delle classiche app di budgeting.",
    heroPrimary: "Entra nella Beta Privata",
    heroSecondary: "Scopri il flusso prodotto",
    heroProof1: "Logica centrata sulle entrate",
    heroProof2: "Chiarezza tra fisse e variabili",
    heroProof3: "Intelligenza sul budget giornaliero",
    betaAccessLabel: "Accesso beta privata",
    metricCurrentCycle: "Ciclo attuale",
    metricCurrentCycleStrong: "Stipendio → prossimo stipendio",
    metricCurrentCycleText: "Controllo basato sul ciclo reale di pagamento",
    metricDailyBudget: "Budget giornaliero",
    metricDailyBudgetStrong: "Dinamico e contestuale",
    metricDailyBudgetText: "Quanto puoi davvero spendere oggi",
    metricWorkflow: "Flusso beta",
    metricWorkflowStrong: "Richiesta → Licenza → Apri app",
    metricWorkflowText: "Flusso di accesso integrato per la beta privata",
    dashboardLabel: "Segnale Kedrix",
    dashboardTitle: "Controllo ciclo stipendio",
    dashboardPill: "Beta live",
    signal1Title: "Modello guidato dalle entrate",
    signal1Text: "Costruito attorno al momento in cui i soldi arrivano davvero.",
    signal2Title: "Layer decisionale pulito",
    signal2Text: "Capisci peso fisso, pressione variabile e margine giornaliero utilizzabile.",
    signal3Title: "Accesso beta rapido",
    signal3Text: "Richiedi accesso, ricevi il tester ID e apri subito la beta.",
    whyEyebrow: "Perché Kedrix PFE",
    whyTitle: "Pensata per il controllo finanziario, non per un budgeting generico.",
    pillar1Title: "Controllo entrate",
    pillar1Text: "Il tuo mese finanziario parte dallo stipendio, quindi l'app misura la realtà da stipendio a stipendio.",
    pillar2Title: "Chiarezza fisse vs variabili",
    pillar2Text: "Separa gli impegni strutturali dalle decisioni quotidiane per vedere cosa è già allocato e cosa è ancora flessibile.",
    pillar3Title: "Intelligenza budget giornaliero",
    pillar3Text: "Trasforma il denaro residuo e i giorni residui in un numero giornaliero davvero utilizzabile.",
    flowEyebrow: "Flusso prodotto",
    flowTitle: "Dalle entrate agli insight in cinque passaggi chiari.",
    flowText: "Segui un onboarding premium orientato alla chiarezza: prima entrate, poi impegni, poi budget giornaliero, con le decisioni sempre in vista.",
    step1Title: "Entrate",
    step1Text: "Parti dalle entrate reali per definire il ciclo finanziario attivo.",
    step2Title: "Fisse",
    step2Text: "Chiarisci gli impegni ricorrenti prima di misurare la reale capacità di spesa.",
    step3Title: "Variabili",
    step3Text: "Traccia la pressione quotidiana reale dopo aver mappato i costi strutturali.",
    step4Title: "Budget",
    step4Text: "Trasforma il saldo residuo in un segnale di budget giornaliero utilizzabile.",
    step5Title: "Insights",
    step5Text: "Trasforma i dati in interpretazione con un flusso pensato per decidere.",
    privateBetaEyebrow: "Accesso beta privata",
    privateBetaTitle: "Richiedi accesso con un flusso pulito.",
    privateBetaText: "Accedi alla beta privata per provare Kedrix PFE prima del lancio e sbloccare l'ingresso diretto con il tuo tester ID.",
    guideTitle: "Mini guida dopo l'attivazione",
    guide1: "Apri l'app",
    guide2: "Inserisci la tua email",
    guide3: "Inserisci il tuo tester ID",
    guide4: "Inizia a usare Kedrix PFE",
    labelName: "Nome",
    labelEmail: "Email",
    commitmentText: "Ho capito che si tratta di una beta privata e accetto di fornire feedback.",
    submitDefault: "Entra nella Beta Privata",
    submitLoading: "Creazione accesso in corso...",
    statusValidation: "Compila tutti i campi richiesti.",
    statusSubmitting: "Invio della richiesta beta in corso...",
    statusSuccess: "Accesso creato correttamente.",
    statusError: "Si è verificato un problema durante la creazione dell'accesso. Riprova tra poco.",
    successBadge: "Beta attiva",
    successTitle: "Il tuo accesso è pronto.",
    testerIdLabel: "Tester ID",
    expiryLabel: "Scadenza",
    copy: "Copia",
    copied: "Copiato",
    copyFailed: "Copia fallita",
    openBeta: "Apri Beta",
    pendingExpiryLabel: "14 giorni dall'attivazione",
    dateLocale: "it-IT",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Kedrix PFE - Private Beta",
    metaDescription: "Kedrix PFE turns salary data into daily financial control. Join the private beta.",
    ogTitle: "Kedrix PFE - Private Beta",
    ogDescription: "Your salary defines your financial reality. Join Kedrix PFE private beta.",
    skipLink: "Skip to content",
    brandSub: "PFE · Private Beta",
    navWhy: "Why it matters",
    navFlow: "Product flow",
    navBeta: "Join beta",
    heroEyebrow: "Decision intelligence for personal finance",
    heroTitle: "Your salary defines your financial reality.",
    heroText: "Kedrix PFE gives you a live operating view of income, fixed costs, variable spending, daily budget and financial clarity, without the noise of classic budgeting apps.",
    heroPrimary: "Join Private Beta",
    heroSecondary: "See product flow",
    heroProof1: "Income-first logic",
    heroProof2: "Fixed vs variable clarity",
    heroProof3: "Daily budget intelligence",
    betaAccessLabel: "Private beta access",
    metricCurrentCycle: "Current cycle",
    metricCurrentCycleStrong: "Salary → next salary",
    metricCurrentCycleText: "Control based on real pay cycle",
    metricDailyBudget: "Daily budget",
    metricDailyBudgetStrong: "Dynamic and contextual",
    metricDailyBudgetText: "What you can really spend today",
    metricWorkflow: "Beta workflow",
    metricWorkflowStrong: "Request → License → Open app",
    metricWorkflowText: "Integrated access flow for private beta",
    dashboardLabel: "Kedrix signal",
    dashboardTitle: "Salary cycle control",
    dashboardPill: "Live beta",
    signal1Title: "Income-led model",
    signal1Text: "Built around the moment money actually arrives.",
    signal2Title: "Clean decision layer",
    signal2Text: "Understand fixed load, variable pressure and usable daily margin.",
    signal3Title: "Fast beta access",
    signal3Text: "Request, receive tester ID and open the beta immediately.",
    whyEyebrow: "Why Kedrix PFE",
    whyTitle: "Built for financial control, not generic budgeting.",
    pillar1Title: "Income control",
    pillar1Text: "Your financial month starts from salary, so the app measures reality from salary to salary.",
    pillar2Title: "Fixed vs variable clarity",
    pillar2Text: "Separate structural commitments from daily decisions so you see what is already allocated and what is still flexible.",
    pillar3Title: "Daily budget intelligence",
    pillar3Text: "Convert remaining money and remaining days into an actionable daily number you can use immediately.",
    flowEyebrow: "Product flow",
    flowTitle: "From income to insight in five clear steps.",
    flowText: "Follow a premium onboarding flow focused on clarity: income first, commitments second, daily budget third, decisions always visible.",
    step1Title: "Income",
    step1Text: "Start from real income events to define the active financial cycle.",
    step2Title: "Fixed costs",
    step2Text: "Clarify recurring commitments before measuring available spending power.",
    step3Title: "Variable spending",
    step3Text: "Track real day-to-day pressure after structural costs are mapped.",
    step4Title: "Budget",
    step4Text: "Transform the remaining balance into a usable daily budget signal.",
    step5Title: "Insights",
    step5Text: "Turn data into interpretation with a product flow designed for decisions.",
    privateBetaEyebrow: "Private beta access",
    privateBetaTitle: "Request access in one clean flow.",
    privateBetaText: "Join the private beta to test Kedrix PFE early and unlock direct access with your tester ID.",
    guideTitle: "Mini guide after activation",
    guide1: "Open the app",
    guide2: "Enter your email",
    guide3: "Enter your tester ID",
    guide4: "Start using Kedrix PFE",
    labelName: "Name",
    labelEmail: "Email",
    commitmentText: "I understand this is a private beta and I agree to provide feedback.",
    submitDefault: "Join Private Beta",
    submitLoading: "Creating access...",
    statusValidation: "Please complete all required fields.",
    statusSubmitting: "Submitting your beta request...",
    statusSuccess: "Access created successfully.",
    statusError: "Something went wrong while creating access. Please try again in a moment.",
    successBadge: "Beta enabled",
    successTitle: "Your access is ready.",
    testerIdLabel: "Tester ID",
    expiryLabel: "Expiry",
    copy: "Copy",
    copied: "Copied",
    copyFailed: "Copy failed",
    openBeta: "Open Beta",
    pendingExpiryLabel: "14 days from activation",
    dateLocale: "en-US",
  },
  es: {
    htmlLang: "es",
    pageTitle: "Kedrix PFE - Beta Privada",
    metaDescription: "Kedrix PFE convierte el salario en control financiero diario. Accede a la beta privada.",
    ogTitle: "Kedrix PFE - Beta Privada",
    ogDescription: "Tu salario define tu realidad financiera. Accede a la beta privada de Kedrix PFE.",
    skipLink: "Ir al contenido",
    brandSub: "PFE · Beta Privada",
    navWhy: "Por qué importa",
    navFlow: "Flujo del producto",
    navBeta: "Acceder a la beta",
    heroEyebrow: "Decision intelligence para finanzas personales",
    heroTitle: "Tu salario define tu realidad financiera.",
    heroText: "Kedrix PFE te da una vista operativa en tiempo real de ingresos, costes fijos, gastos variables, presupuesto diario y claridad financiera, sin el ruido de las apps clásicas de presupuesto.",
    heroPrimary: "Entrar en la Beta Privada",
    heroSecondary: "Ver flujo del producto",
    heroProof1: "Lógica centrada en ingresos",
    heroProof2: "Claridad entre fijos y variables",
    heroProof3: "Inteligencia del presupuesto diario",
    betaAccessLabel: "Acceso beta privada",
    metricCurrentCycle: "Ciclo actual",
    metricCurrentCycleStrong: "Salario → próximo salario",
    metricCurrentCycleText: "Control basado en el ciclo real de pago",
    metricDailyBudget: "Presupuesto diario",
    metricDailyBudgetStrong: "Dinámico y contextual",
    metricDailyBudgetText: "Lo que realmente puedes gastar hoy",
    metricWorkflow: "Flujo beta",
    metricWorkflowStrong: "Solicitud → Licencia → Abrir app",
    metricWorkflowText: "Flujo de acceso integrado para la beta privada",
    dashboardLabel: "Señal Kedrix",
    dashboardTitle: "Control del ciclo salarial",
    dashboardPill: "Beta activa",
    signal1Title: "Modelo guiado por ingresos",
    signal1Text: "Diseñado alrededor del momento en que el dinero realmente entra.",
    signal2Title: "Capa de decisión limpia",
    signal2Text: "Entiende carga fija, presión variable y margen diario utilizable.",
    signal3Title: "Acceso beta rápido",
    signal3Text: "Solicita acceso, recibe tu tester ID y abre la beta al instante.",
    whyEyebrow: "Por qué Kedrix PFE",
    whyTitle: "Diseñada para control financiero, no para un presupuesto genérico.",
    pillar1Title: "Control de ingresos",
    pillar1Text: "Tu mes financiero empieza con el salario, por eso la app mide la realidad de salario a salario.",
    pillar2Title: "Claridad fijos vs variables",
    pillar2Text: "Separa compromisos estructurales de decisiones diarias para ver qué ya está asignado y qué sigue siendo flexible.",
    pillar3Title: "Inteligencia del presupuesto diario",
    pillar3Text: "Convierte el dinero restante y los días restantes en una cifra diaria accionable.",
    flowEyebrow: "Flujo del producto",
    flowTitle: "De ingresos a insights en cinco pasos claros.",
    flowText: "Sigue un onboarding premium centrado en claridad: primero ingresos, luego compromisos, después presupuesto diario y decisiones siempre visibles.",
    step1Title: "Ingresos",
    step1Text: "Empieza por los ingresos reales para definir el ciclo financiero activo.",
    step2Title: "Fijos",
    step2Text: "Aclara los compromisos recurrentes antes de medir la capacidad real de gasto.",
    step3Title: "Variables",
    step3Text: "Sigue la presión diaria real después de mapear los costes estructurales.",
    step4Title: "Presupuesto",
    step4Text: "Convierte el saldo restante en una señal útil de presupuesto diario.",
    step5Title: "Insights",
    step5Text: "Convierte datos en interpretación con un flujo pensado para decidir.",
    privateBetaEyebrow: "Acceso beta privada",
    privateBetaTitle: "Solicita acceso con un flujo limpio.",
    privateBetaText: "Accede a la beta privada para probar Kedrix PFE antes del lanzamiento y entrar directamente con tu tester ID.",
    guideTitle: "Mini guía después de la activación",
    guide1: "Abre la app",
    guide2: "Introduce tu email",
    guide3: "Introduce tu tester ID",
    guide4: "Empieza a usar Kedrix PFE",
    labelName: "Nombre",
    labelEmail: "Email",
    commitmentText: "Entiendo que se trata de una beta privada y acepto proporcionar feedback.",
    submitDefault: "Entrar en la Beta Privada",
    submitLoading: "Creando acceso...",
    statusValidation: "Completa todos los campos obligatorios.",
    statusSubmitting: "Enviando tu solicitud beta...",
    statusSuccess: "Acceso creado correctamente.",
    statusError: "Se produjo un problema al crear el acceso. Inténtalo de nuevo en unos momentos.",
    successBadge: "Beta activa",
    successTitle: "Tu acceso está listo.",
    testerIdLabel: "Tester ID",
    expiryLabel: "Vencimiento",
    copy: "Copiar",
    copied: "Copiado",
    copyFailed: "Copia fallida",
    openBeta: "Abrir Beta",
    pendingExpiryLabel: "14 días desde la activación",
    dateLocale: "es-ES",
  },
  fr: {
    htmlLang: "fr",
    pageTitle: "Kedrix PFE - Bêta Privée",
    metaDescription: "Kedrix PFE transforme le salaire en contrôle financier quotidien. Accédez à la bêta privée.",
    ogTitle: "Kedrix PFE - Bêta Privée",
    ogDescription: "Votre salaire définit votre réalité financière. Accédez à la bêta privée de Kedrix PFE.",
    skipLink: "Aller au contenu",
    brandSub: "PFE · Bêta Privée",
    navWhy: "Pourquoi c'est important",
    navFlow: "Parcours produit",
    navBeta: "Accéder à la bêta",
    heroEyebrow: "Decision intelligence pour la finance personnelle",
    heroTitle: "Votre salaire définit votre réalité financière.",
    heroText: "Kedrix PFE vous donne une vue opérationnelle en temps réel sur revenus, coûts fixes, dépenses variables, budget quotidien et clarté financière, sans le bruit des applications de budget classiques.",
    heroPrimary: "Rejoindre la Bêta Privée",
    heroSecondary: "Voir le parcours produit",
    heroProof1: "Logique centrée sur les revenus",
    heroProof2: "Clarté fixes vs variables",
    heroProof3: "Intelligence du budget quotidien",
    betaAccessLabel: "Accès bêta privée",
    metricCurrentCycle: "Cycle actuel",
    metricCurrentCycleStrong: "Salaire → prochain salaire",
    metricCurrentCycleText: "Contrôle basé sur le vrai cycle de paie",
    metricDailyBudget: "Budget quotidien",
    metricDailyBudgetStrong: "Dynamique et contextuel",
    metricDailyBudgetText: "Ce que vous pouvez vraiment dépenser aujourd'hui",
    metricWorkflow: "Flux bêta",
    metricWorkflowStrong: "Demande → Licence → Ouvrir l'app",
    metricWorkflowText: "Flux d'accès intégré pour la bêta privée",
    dashboardLabel: "Signal Kedrix",
    dashboardTitle: "Contrôle du cycle salarial",
    dashboardPill: "Bêta active",
    signal1Title: "Modèle centré sur le revenu",
    signal1Text: "Conçu autour du moment où l'argent arrive vraiment.",
    signal2Title: "Couche de décision claire",
    signal2Text: "Comprenez charge fixe, pression variable et marge quotidienne utilisable.",
    signal3Title: "Accès bêta rapide",
    signal3Text: "Demandez l'accès, recevez votre tester ID et ouvrez la bêta immédiatement.",
    whyEyebrow: "Pourquoi Kedrix PFE",
    whyTitle: "Conçue pour le contrôle financier, pas pour un budget générique.",
    pillar1Title: "Contrôle des revenus",
    pillar1Text: "Votre mois financier commence avec le salaire, donc l'app mesure la réalité de salaire à salaire.",
    pillar2Title: "Clarté fixes vs variables",
    pillar2Text: "Séparez les engagements structurels des décisions quotidiennes pour voir ce qui est déjà alloué et ce qui reste flexible.",
    pillar3Title: "Intelligence du budget quotidien",
    pillar3Text: "Transformez l'argent restant et les jours restants en un chiffre quotidien exploitable.",
    flowEyebrow: "Parcours produit",
    flowTitle: "Des revenus aux insights en cinq étapes claires.",
    flowText: "Suivez un onboarding premium centré sur la clarté : revenus d'abord, engagements ensuite, budget quotidien ensuite, décisions toujours visibles.",
    step1Title: "Revenus",
    step1Text: "Commencez par les revenus réels pour définir le cycle financier actif.",
    step2Title: "Fixes",
    step2Text: "Clarifiez les engagements récurrents avant de mesurer la vraie capacité de dépense.",
    step3Title: "Variables",
    step3Text: "Suivez la pression quotidienne réelle après avoir cartographié les coûts structurels.",
    step4Title: "Budget",
    step4Text: "Transformez le solde restant en un signal de budget quotidien utilisable.",
    step5Title: "Insights",
    step5Text: "Transformez les données en interprétation avec un flux conçu pour décider.",
    privateBetaEyebrow: "Accès bêta privée",
    privateBetaTitle: "Demandez l'accès avec un flux propre.",
    privateBetaText: "Rejoignez la bêta privée pour tester Kedrix PFE en avant-première et accéder directement avec votre tester ID.",
    guideTitle: "Mini guide après activation",
    guide1: "Ouvrez l'app",
    guide2: "Saisissez votre email",
    guide3: "Saisissez votre tester ID",
    guide4: "Commencez à utiliser Kedrix PFE",
    labelName: "Nom",
    labelEmail: "Email",
    commitmentText: "Je comprends qu'il s'agit d'une bêta privée et j'accepte de fournir un retour.",
    submitDefault: "Rejoindre la Bêta Privée",
    submitLoading: "Création de l'accès...",
    statusValidation: "Veuillez remplir tous les champs requis.",
    statusSubmitting: "Envoi de votre demande bêta...",
    statusSuccess: "Accès créé avec succès.",
    statusError: "Un problème est survenu lors de la création de l'accès. Réessayez dans un instant.",
    successBadge: "Bêta activée",
    successTitle: "Votre accès est prêt.",
    testerIdLabel: "Tester ID",
    expiryLabel: "Expiration",
    copy: "Copier",
    copied: "Copié",
    copyFailed: "Copie échouée",
    openBeta: "Ouvrir la Bêta",
    pendingExpiryLabel: "14 jours après activation",
    dateLocale: "fr-FR",
  },
};

function detectLocale() {
  const lang = (navigator.language || document.documentElement.lang || "it").toLowerCase();
  if (lang.startsWith("it")) return "it";
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("fr")) return "fr";
  return "en";
}

const locale = detectLocale();
const t = TRANSLATIONS[locale];

document.documentElement.lang = t.htmlLang;

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setAttr(selector, attr, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

function applyTranslations() {
  document.title = t.pageTitle;
  setAttr('meta[name="description"]', 'content', t.metaDescription);
  setAttr('meta[property="og:title"]', 'content', t.ogTitle);
  setAttr('meta[property="og:description"]', 'content', t.ogDescription);

  setText('.skip-link', t.skipLink);
  setText('.brand-text span', t.brandSub);
  setText('.topnav a[href="#value"]', t.navWhy);
  setText('.topnav a[href="#onboarding"]', t.navFlow);
  setText('.topnav a[href="#beta"]', t.navBeta);

  setText('#hero .eyebrow', t.heroEyebrow);
  setText('#hero h1', t.heroTitle);
  setText('#hero .hero-text', t.heroText);
  setText('.hero-actions .btn-primary', t.heroPrimary);
  setText('.hero-actions .btn-secondary', t.heroSecondary);
  const proofs = document.querySelectorAll('.hero-proof li');
  if (proofs[0]) proofs[0].textContent = t.heroProof1;
  if (proofs[1]) proofs[1].textContent = t.heroProof2;
  if (proofs[2]) proofs[2].textContent = t.heroProof3;
  setText('.hero-panel-head span:last-child', t.betaAccessLabel);
  setText('.dashboard-label', t.dashboardLabel);
  setText('.dashboard-header strong', t.dashboardTitle);
  setText('.dashboard-pill', t.dashboardPill);

  const metrics = document.querySelectorAll('.metric-card');
  const metricValues = [
    [t.metricCurrentCycle, t.metricCurrentCycleStrong, t.metricCurrentCycleText],
    [t.metricDailyBudget, t.metricDailyBudgetStrong, t.metricDailyBudgetText],
    [t.metricWorkflow, t.metricWorkflowStrong, t.metricWorkflowText],
  ];
  metrics.forEach((card, index) => {
    const vals = metricValues[index];
    if (!vals) return;
    const p = card.querySelector('p');
    const strong = card.querySelector('strong');
    const span = card.querySelector('span');
    if (p) p.textContent = vals[0];
    if (strong) strong.textContent = vals[1];
    if (span) span.textContent = vals[2];
  });

  const signalCards = document.querySelectorAll('.signal-card');
  const signalValues = [
    [t.signal1Title, t.signal1Text],
    [t.signal2Title, t.signal2Text],
    [t.signal3Title, t.signal3Text],
  ];
  signalCards.forEach((card, index) => {
    const vals = signalValues[index];
    if (!vals) return;
    const strong = card.querySelector('strong');
    const p = card.querySelector('p');
    if (strong) strong.textContent = vals[0];
    if (p) p.textContent = vals[1];
  });

  setText('#value .eyebrow', t.whyEyebrow);
  setText('#value h2', t.whyTitle);
  const pillars = document.querySelectorAll('.feature-card');
  const pillarValues = [
    [t.pillar1Title, t.pillar1Text],
    [t.pillar2Title, t.pillar2Text],
    [t.pillar3Title, t.pillar3Text],
  ];
  pillars.forEach((card, index) => {
    const vals = pillarValues[index];
    if (!vals) return;
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    if (h3) h3.textContent = vals[0];
    if (p) p.textContent = vals[1];
  });

  setText('#onboarding .eyebrow', t.flowEyebrow);
  setText('#onboarding h2', t.flowTitle);
  setText('#onboarding .section-intro.wide p:last-child', t.flowText);
  const steps = document.querySelectorAll('.onboarding-card');
  const stepVals = [
    [t.step1Title, t.step1Text],
    [t.step2Title, t.step2Text],
    [t.step3Title, t.step3Text],
    [t.step4Title, t.step4Text],
    [t.step5Title, t.step5Text],
  ];
  steps.forEach((card, index) => {
    const vals = stepVals[index];
    if (!vals) return;
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    if (h3) h3.textContent = vals[0];
    if (p) p.textContent = vals[1];
  });

  setText('#beta .eyebrow', t.privateBetaEyebrow);
  setText('#beta .beta-copy h2', t.privateBetaTitle);
  setText('#beta .beta-copy > p', t.privateBetaText);
  setText('.mini-guide h3', t.guideTitle);
  const guideItems = document.querySelectorAll('.mini-guide li');
  [t.guide1, t.guide2, t.guide3, t.guide4].forEach((value, index) => {
    if (guideItems[index]) guideItems[index].textContent = value;
  });

  setText('label[for="name"]', t.labelName);
  setText('label[for="email"]', t.labelEmail);
  setText('.checkbox-row span', t.commitmentText);
  setText('#submit-button', t.submitDefault);
  setText('.badge', t.successBadge);
  setText('.success-head h3', t.successTitle);
  setText('.result-grid div:nth-child(1) dt', t.testerIdLabel);
  setText('.result-grid div:nth-child(2) dt', t.expiryLabel);
  setText('#copy-id', t.copy);
  setText('#open-beta', t.openBeta);
}

applyTranslations();

const betaForm = document.querySelector("#beta-form");
const submitButton = document.querySelector("#submit-button");
const formStatus = document.querySelector("#form-status");
const successPanel = document.querySelector("#success-panel");
const testerIdNode = document.querySelector("#tester-id");
const expiryDateNode = document.querySelector("#expiry-date");
const openBetaButton = document.querySelector("#open-beta");
const copyIdButton = document.querySelector("#copy-id");

const setStatus = (message, type = "") => {
  formStatus.textContent = message;
  formStatus.className = "form-status";
  if (type) formStatus.classList.add(`is-${type}`);
};

function formatExpiry(dateInput) {
  if (!dateInput) return "";
  const date = new Date(dateInput);
  if (Number.isNaN(date.getTime())) return String(dateInput);
  return new Intl.DateTimeFormat(t.dateLocale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function fallbackExpiryFromNow() {
  const date = new Date();
  date.setDate(date.getDate() + CONFIG.defaultTrialDays);
  return formatExpiry(date.toISOString());
}

const normalizeResponse = (payload) => {
  const testerId =
    payload.testerId || payload.tester_id || payload.licenseKey || payload.license_key || "-";

  const rawExpiry = payload.expiry || payload.expiration || payload.expires_at || payload.expiry_date || "";
  const expiry = !rawExpiry || String(rawExpiry).toLowerCase() === "pending"
    ? fallbackExpiryFromNow()
    : formatExpiry(rawExpiry);

  const appUrl = "https://beta.kedrix.tech/";

  return { testerId, expiry, appUrl };
};

const postToBackend = async (body) => {
  const response = await fetch(CONFIG.gasEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Backend error: ${response.status}`);
  }

  return response.json();
};

betaForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!betaForm.reportValidity()) {
    setStatus(t.statusValidation, "error");
    return;
  }

  const formData = new FormData(betaForm);
  const payload = {
    action: "register_beta_request",
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    commitment: Boolean(formData.get("commitment")),
    source: `landing_private_beta_${locale}`,
  };

  try {
    submitButton.disabled = true;
    submitButton.textContent = t.submitLoading;
    setStatus(t.statusSubmitting, "");

    const raw = await postToBackend(payload);
    const normalized = normalizeResponse(raw);

    testerIdNode.textContent = normalized.testerId;
    expiryDateNode.textContent = normalized.expiry || t.pendingExpiryLabel;
    openBetaButton.href = normalized.appUrl;
    openBetaButton.target = "_blank";
    openBetaButton.rel = "noopener noreferrer";
    successPanel.hidden = false;
    setStatus(t.statusSuccess, "success");

    successPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error(error);
    setStatus(t.statusError, "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t.submitDefault;
  }
});

copyIdButton?.addEventListener("click", async () => {
  const value = testerIdNode.textContent?.trim();
  if (!value || value === "-") return;

  try {
    await navigator.clipboard.writeText(value);
    copyIdButton.textContent = t.copied;
    setTimeout(() => {
      copyIdButton.textContent = t.copy;
    }, 1800);
  } catch (error) {
    console.error(error);
    copyIdButton.textContent = t.copyFailed;
    setTimeout(() => {
      copyIdButton.textContent = t.copy;
    }, 1800);
  }
});
