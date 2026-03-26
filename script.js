const questions = [
  {
    text: '¿En un funeral, si de repente a alguien se le escapa un pedo sonoro y con eco, miras al suelo fingiendo que analizas la veta del mármol?',
    weight: 5,
  },
  {
    text: '¿Si te pasan un vídeo de contenido “picante” por error en el grupo de WhatsApp de la familia, decides no contestar, indignado?',
    weight: 6,
  },
  {
    text: '¿Vas por la calle, ves a una pareja dándose el lote y llegas a pensar que igual es un intento de reanimación y te planteas llamar a una ambulancia?',
    weight: 7,
  },
  {
    text: '¿Recurres al uso de tacos y palabrotas en una conversación normal solo si te martilleas un dedo, y además pides perdón después?',
    weight: 5,
  },
  {
    text: '¿En una cena, si alguien empieza a contar un chiste verde de los que harían sonrojar a una estatua, te levantas para ir al baño hasta que acabe?',
    weight: 7,
  },
  {
    text: '¿Defiendes la libertad total pero te escandalizas si alguien no usa servilleta?',
    weight: 8,
  },
  {
    text: '¿Piensas que las proporciones de las estatuas clásicas son “perfectas”?',
    weight: 8,
  },
  {
    text: '¿Has sentido la necesidad de bajar el volumen cuando en una serie empiezan a gemir… aunque estés solo en casa?',
    weight: 6,
  },
  {
    text: '¿Crees que no tienes prejuicios, pero en situaciones de presión te brota el “¡Por favor, un poco de respeto!”?',
    weight: 9,
  },
  {
    text: '¿Si un amigo aparece en una cena formal con una camiseta incómoda o inapropiada, evitas presentarlo a otros por vergüenza?',
    weight: 7,
  },
  {
    text: '¿Has pensado “esto se está yendo de madre” en una conversación que en realidad iba sobre croquetas?',
    weight: 7,
  },
  {
    text: '¿Si un amigo tuyo aparece en una cena formal con una camiseta con una imagen hiperrealista de una colonoscopia, sientes vergüenza ajena y evitas presentárselo a nadie?',
    weight: 6,
  },
  {
    text: '¿En el gimnasio, si en las duchas hay un señor de 80 años paseándose totalmente desnudo mientras se seca los pies con el secador de manos común, piensas que “un poco de pudor y decoro no vendrían mal en este centro”?',
    weight: 8,
  },
  {
    text: '¿Si estás viendo una película con tus padres y aparece una escena de sexo explícito de 5 minutos con gemidos en Dolby Surround, te levantas a la cocina a por algo que no necesitas?',
    weight: 5,
  },
  {
    text: '¿Si un amigo “graciosillo” te regala un libro de colorear titulado “Mandala-Potorros: Encuentra tu paz interior pintando genitales”, te ríes forzadamente, dices “qué loco estás” y lo guardas en el cajón de los calcetines “por si acaso” (pero con la puerta cerrada con llave)?',
    weight: 6,
  },
  {
    text: '¿Te incomoda tanto ver a alguien comiendo un plátano de forma sugerente que apartas la mirada automáticamente?',
    weight: 8,
  },
  {
    text: '¿Alguna vez has dicho algo así como “Es una fresca”?',
    weight: 8,
  },
  {
    text: '¿Después de hacer este test has pensado “Esto es un poco vulgar, ¿no?”?',
    weight: 9,
  },
];

const scoreMap = {
  sí: 1,
  a_veces: 0.55,
  no: 0,
};

const resultBands = [
  {
    maxRatio: 0.14,
    title: 'Liberal de boquilla',
    category: 'Libertino de sofá',
    description:
      'Dices que "el cuerpo es natural" y que "hay que ser libre", pero si ves a tu vecino en calzoncillos bajando la basura, llamas al administrador. Tienes un pudor residual que te sale por los poros en cuanto la situación se pone mínimamente "marrana"',
  },
  {
    maxRatio: 0.28,
    title: 'Pudoroso asintomático',
    category: 'Casto en diferido',
    description:
      'En el fondo te gustaría pintar mandalas para adultos, pero te preocupa que el espíritu de tu abuela te vigile desde el cuadro del pasillo.',
  },
  {
    maxRatio: 0.42,
    title: 'Hipócrita de guante blanco',
    category: 'Doble moral deluxe',
    description:
      'No eres un santo, pero te encanta que los demás piensen que sí. Te escandalizas en público pero en privado buscas en Google cosas que harían temblar al mismísimo Marqués de Sade. Eres el típico que dice "¡Qué horror!" mientras se pone las gafas para ver mejor el desastre. Tu mojigatería es de postureo, pero el juicio final te pillará con el historial del navegador sin borrar.',
  },
  {
    maxRatio: 0.58,
    title: 'Mojigato de closet',
    category: 'Guardián del decoro',
    description:
      'Vas de moderno por la vida, usas zapatillas de marca y dices "tío" cada tres frases, pero el libro de los potorros te ha provocado un microinfarto.',
  },
  {
    maxRatio: 0.74,
    title: 'Fetichista de la moral',
    category: 'Comisario del decoro',
    description:
      'Eres un "bienqueda" con un censor interno que trabaja horas extra.',
  },
  {
    maxRatio: 0.89,
    title: 'Censor del mes',
    category: 'Inspector de la moral',
    description:
      '“Eres tan almidonado que si te sientas rápido, te rompes. Tu hábitat natural es una junta de vecinos donde se discute el grosor permitido de las cortinas. Para ti, el desmadre empieza en cuanto alguien sonríe con demasiados dientes.”',
  },
  {
    maxRatio: 1,
    title: 'Fósil viviente',
    category: 'Inquisidor sel siglo XV',
    description:
      'Eres tan mojigato que pides permiso para desnudarte delante del espejo. Tu nivel de puritanismo es capaz de detener una orgía a tres kilómetros de distancia solo con tu mirada de reprobación. Probablemente creas que el reggaetón es una invocación satánica y que las rodillas descubiertas son pecado. ¡Suéltate un poco, que la vida son dos días y ya llevas uno!',
  },
];

const form = document.getElementById('amargometro-form');
const template = document.getElementById('question-template');
const startButton = document.getElementById('start-test');
const submitButton = document.getElementById('submit-test');
const resetButton = document.getElementById('reset-test');
const meterBar = document.getElementById('meter-bar');
const meterMax = document.getElementById('meter-max');
const scoreValue = document.getElementById('score-value');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultCategoryName = document.getElementById('result-category-name');
const shareStatus = document.getElementById('share-status');
const quizStatus = document.getElementById('quiz-status');
const deviceHint = document.getElementById('device-hint');
const root = document.documentElement;

const totalMaxScore = questions.reduce((sum, question) => sum + question.weight, 0);
meterMax.textContent = totalMaxScore;

let currentDeviceProfile = 'desktop';
let lastCalculatedResult = null;
const testUrl = window.location.origin + window.location.pathname;

function buildShareText() {
  if (!lastCalculatedResult) {
    return '';
  }

  return `Mi resultado en el Amargómetro Supremo: ${lastCalculatedResult.title} (${lastCalculatedResult.category}) con ${lastCalculatedResult.score}/${totalMaxScore} puntos. Haz el test aquí: ${testUrl}`;
}

async function copyShareTextToClipboard(text) {
  if (!navigator.clipboard?.writeText) {
    return false;
  }

  await navigator.clipboard.writeText(text);
  return true;
}

function updateShareStatus(message) {
  if (shareStatus) {
    shareStatus.textContent = message;
  }
}

async function shareResult(platform) {
  const text = buildShareText();
  if (!text) {
    updateShareStatus('Primero calcula tu resultado para poder compartirlo junto con el enlace al test.');
    return;
  }

  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(testUrl);

  if (platform === 'instagram') {
    try {
      const copied = await copyShareTextToClipboard(text);
      updateShareStatus(
        copied
          ? 'Texto copiado para Instagram. Ahora pégalo en tu historia o publicación e incluye el enlace del test.'
          : 'No pudimos copiar automáticamente. Copia el texto manualmente y compártelo en Instagram con el enlace del test.',
      );
    } catch {
      updateShareStatus('No pudimos copiar automáticamente. Copia el texto manualmente y compártelo en Instagram con el enlace del test.');
    }

    window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
    return;
  }

  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
  };

  const targetUrl = shareUrls[platform];

  if (!targetUrl) {
    return;
  }

  window.open(targetUrl, '_blank', 'noopener,noreferrer');
  updateShareStatus('Ventana de compartir abierta con tu resultado y el enlace al test.');
}

questions.forEach((question, index) => {
  const clone = template.content.cloneNode(true);
  const article = clone.querySelector('.question-card');
  const name = `question-${index}`;

  article.dataset.index = String(index);
  article.hidden = false;

  article.querySelector('.question-tag').textContent = `Pregunta ${index + 1}`;
  article.querySelector('.question-text').textContent = question.text;

  clone.querySelectorAll('input').forEach((input) => {
    input.name = name;
    input.setAttribute('aria-label', `${question.text} - ${input.value}`);
  });

  form.appendChild(clone);
});

const questionCards = [...form.querySelectorAll('.question-card')];
const lastResultBand = resultBands[resultBands.length - 1];

function getSelectedValue(index) {
  return form.querySelector(`input[name="question-${index}"]:checked`)?.value;
}

function detectDeviceProfile() {
  const hasTouch = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
  const isNarrowViewport = window.matchMedia('(max-width: 760px)').matches;
  return hasTouch || isNarrowViewport ? 'mobile' : 'desktop';
}

function applyDeviceProfile() {
  currentDeviceProfile = detectDeviceProfile();
  root.dataset.device = currentDeviceProfile;

  if (deviceHint) {
    deviceHint.textContent = '';
    deviceHint.hidden = true;
  }

  if (submitButton) {
    submitButton.textContent =
      currentDeviceProfile === 'mobile' ? 'Calcular puntuación' : 'Calcular mi puntuación amarga';
  }
}

function updateQuestionStates() {
  const firstUnansweredIndex = questionCards.findIndex((_, index) => !getSelectedValue(index));
  const answeredCount = questionCards.filter((_, index) => Boolean(getSelectedValue(index))).length;
  const isComplete = firstUnansweredIndex === -1;

  questionCards.forEach((card, index) => {
    const answered = Boolean(getSelectedValue(index));
    const isCurrent = !isComplete && index === firstUnansweredIndex;

    card.hidden = false;
    card.classList.toggle('is-answered', answered);
    card.classList.toggle('is-current', isCurrent);
  });

  submitButton.disabled = !isComplete;

  if (quizStatus) {
    quizStatus.hidden = false;
    quizStatus.innerHTML = isComplete
      ? '<strong>Listo.</strong> Ya puedes pulsar el botón para calcular tu puntuación y ver tu categoría de amargura.'
      : `<strong>Progreso:</strong> llevas ${answeredCount} de ${questions.length} respuestas. Completa todas antes de pulsar calcular.`;
  }
}

function animateValue(targetScore) {
  const duration = currentDeviceProfile === 'mobile' ? 900 : 1400;
  const start = performance.now();
  const initialValue = Number(scoreValue.textContent) || 0;

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(initialValue + (targetScore - initialValue) * eased);
    scoreValue.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function scrollToQuestion(index) {
  const nextCard = questionCards[index];

  if (!nextCard) {
    return;
  }

  nextCard.scrollIntoView({
    behavior: currentDeviceProfile === 'mobile' ? 'auto' : 'smooth',
    block: 'start',
  });
}

function calculateResult() {
  const unanswered = questions.findIndex((_, index) => !getSelectedValue(index));

  if (unanswered !== -1) {
    updateQuestionStates();
    resultCategoryName.textContent = 'Diagnóstico bloqueado';
    resultTitle.textContent = 'Te has dejado preguntas sin responder, alma de cántaro.';
    resultDescription.textContent = `Completa la pregunta ${unanswered + 1} para que podamos juzgarte con datos y no solo por intuición.`;
    scrollToQuestion(unanswered);
    return;
  }

  let score = 0;

  questions.forEach((question, index) => {
    const value = getSelectedValue(index);
    score += Math.round(question.weight * scoreMap[value]);
  });

  const ratio = score / totalMaxScore;
  const band = resultBands.find((item) => ratio <= item.maxRatio) || lastResultBand;

  lastCalculatedResult = {
    score,
    title: band.title,
    category: band.category,
  };

  meterBar.style.width = `${ratio * 100}%`;
  animateValue(score);
  resultCategoryName.textContent = band.category;
  resultTitle.textContent = band.title;
  resultDescription.textContent = band.description;
  updateShareStatus('');
  document.querySelector('.result').scrollIntoView({
    behavior: currentDeviceProfile === 'mobile' ? 'auto' : 'smooth',
    block: 'start',
  });
}

form.addEventListener('change', (event) => {
  const target = event.target;

  if (!(target instanceof HTMLInputElement) || target.type !== 'radio') {
    return;
  }

  updateQuestionStates();
});

startButton?.addEventListener('click', () => {
  scrollToQuestion(0);
  form.querySelector('input')?.focus({ preventScroll: true });
});

submitButton.addEventListener('click', calculateResult);

resetButton.addEventListener('click', () => {
  form.reset();
  lastCalculatedResult = null;
  meterBar.style.width = '0%';
  scoreValue.textContent = '0';
  resultCategoryName.textContent = 'Pendiente de diagnóstico';
  resultTitle.textContent = 'Responde el test, criatura.';
  resultDescription.textContent = 'Cuando termines, te diremos si eres un rayo de sol o una auditoría con piernas.';
  updateShareStatus('');
  updateQuestionStates();
  window.scrollTo({ top: 0, behavior: currentDeviceProfile === 'mobile' ? 'auto' : 'smooth' });
});

document.querySelectorAll('.share-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const platform = button.getAttribute('data-platform');

    if (!platform) {
      return;
    }

    shareResult(platform);
  });
});

applyDeviceProfile();
updateQuestionStates();
window.addEventListener('resize', applyDeviceProfile, { passive: true });
