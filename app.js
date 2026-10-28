/* global QUESTIONS */
(() => {
  const PER_QUIZ = 10;
  const SECONDS = 20;
  const BEST_KEY = 'js-quiz-best';

  const $ = (id) => document.getElementById(id);
  const screens = { start: $('start-screen'), quiz: $('quiz-screen'), result: $('result-screen') };

  let questions = [];
  let index = 0;
  let score = 0;
  let answers = [];
  let timeLeft = SECONDS;
  let timer = null;

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function show(name) {
    Object.entries(screens).forEach(([key, el]) => (el.hidden = key !== name));
  }

  function readBest() {
    try {
      return Number(localStorage.getItem(BEST_KEY)) || 0;
    } catch {
      return 0;
    }
  }

  function renderBest() {
    const best = readBest();
    $('best').textContent = best ? `Best score: ${best} / ${PER_QUIZ}` : '';
  }

  function start() {
    // Pick 10 random questions and shuffle each question's choices (keeping track of the right one)
    questions = shuffle(QUESTIONS)
      .slice(0, PER_QUIZ)
      .map((q) => {
        const order = shuffle(q.choices.map((_, i) => i));
        return { ...q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) };
      });
    index = 0;
    score = 0;
    answers = [];
    show('quiz');
    ask();
  }

  function ask() {
    const q = questions[index];
    $('progress').textContent = `Question ${index + 1} / ${PER_QUIZ}`;
    $('bar').style.width = `${(index / PER_QUIZ) * 100}%`;
    $('question').textContent = q.q;
    $('feedback').textContent = '';
    $('next').hidden = true;

    const box = $('answers');
    box.innerHTML = '';
    q.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = choice;
      btn.addEventListener('click', () => answer(i));
      box.appendChild(btn);
    });

    timeLeft = SECONDS;
    $('timer').textContent = timeLeft;
    $('timer').classList.remove('urgent');
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft -= 1;
      $('timer').textContent = timeLeft;
      if (timeLeft <= 5) $('timer').classList.add('urgent');
      if (timeLeft <= 0) answer(null);
    }, 1000);
  }

  function answer(choice) {
    clearInterval(timer);
    const q = questions[index];
    const correct = choice === q.answer;
    if (correct) score += 1;
    answers.push({ q, choice, correct });

    [...$('answers').children].forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === choice) btn.classList.add('wrong');
    });

    $('feedback').textContent = choice === null ? `Time's up! ${q.why}` : correct ? `Correct. ${q.why}` : `Not quite. ${q.why}`;
    $('next').hidden = false;
    $('next').textContent = index === PER_QUIZ - 1 ? 'See results' : 'Next';
    $('next').focus();
  }

  function next() {
    index += 1;
    if (index < PER_QUIZ) ask();
    else finish();
  }

  function finish() {
    $('bar').style.width = '100%';
    $('score').textContent = score;
    const ratio = score / PER_QUIZ;
    $('verdict').textContent =
      ratio === 1 ? 'Perfect score!' : ratio >= 0.7 ? 'Solid JavaScript knowledge.' : ratio >= 0.4 ? 'Not bad, keep practising.' : 'Time to open the MDN docs!';

    const best = readBest();
    if (score > best) {
      try {
        localStorage.setItem(BEST_KEY, String(score));
      } catch {
        /* ignore */
      }
      $('verdict').textContent += ' New personal best!';
    }

    const review = $('review');
    review.innerHTML = '';
    answers.forEach(({ q, choice, correct }) => {
      const li = document.createElement('li');
      li.className = correct ? 'ok' : 'ko';
      li.innerHTML = `<strong>${q.q}</strong><br>${
        correct ? 'You answered correctly.' : `Your answer: ${choice === null ? '—' : q.choices[choice]} · Correct: ${q.choices[q.answer]}`
      }`;
      review.appendChild(li);
    });
    show('result');
  }

  $('start').addEventListener('click', start);
  $('next').addEventListener('click', next);
  $('restart').addEventListener('click', () => {
    renderBest();
    show('start');
  });
  document.addEventListener('keydown', (e) => {
    if (screens.quiz.hidden) return;
    const n = Number(e.key);
    if (n >= 1 && n <= 4 && !$('answers').children[n - 1]?.disabled) $('answers').children[n - 1].click();
    if (e.key === 'Enter' && !$('next').hidden) next();
  });

  renderBest();
  show('start');
})();
