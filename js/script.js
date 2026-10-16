const app = document.getElementById("app");
const IMG = "assets/images/";
const SITE = "https://site.lejour.com.br/ana-e-michele";

const questions = [
  ["Como a Mi e a Paulinha se conheceram?", ["Trilha", "Evento corporativo", "Tinder", "Amigos em comum"], 2, "Tinder. A gente começa a história num “match” online e traz o amor para ser parte do que vivemos no mundo real.", "resposta-1.jpg"],
  ["Em que ano Paulinha e Mi se conheceram?", ["2022", "2023", "2024", "2025"], 1, "2023. Mas pra gente, 3 anos se tornou uma vida. Que agora ganha um novo episódio pra termos mais uma temporada incrível.", "resposta-2.jpg"],
  ["Qual país a Mi sonha em conhecer?", ["Londres", "Estados Unidos", "Suíça", "Itália"], 3, "E o sonho só é bom quando se planeja. Por isso, em breve, vamos tirá-lo do papel.", "resposta-3.jpg"],
  ["Qual país a Paulinha sonha em conhecer?", ["Chile", "Argentina", "Estados Unidos", "Paraguai"], 2, "No dia que eu tirar foto elegantérrima na Times Square, apenas comentem: Ela desejou isso!", "resposta-4.jpg"],
  ["Para onde será a nossa viagem de lua-de-mel?", ["Disney", "Fernando de Noronha", "San Andreas", "Contagem das Abóboras"], 2, "San Andreas. E depois de nós, o GTA será a segunda coisa mais memorável daquele lugar.", "resposta-5.jpg"],
  ["Para onde foi a primeira viagem que fizemos juntas?", ["Nova Lima", "Macacos", "Floripa", "Catas Altas"], 3, "Catas Altas. E a gente recomenda o aconchego mineiro sempre que quiser dar um up no amor.", "resposta-6.jpg"],
  ["Em qual praia foi feito o pedido de casamento?", ["Pontal de Maracaípe", "Canasvieiras", "Copacabana", "Búzios"], 0, "Pontal do Maracaípe: Pernambuco testemunhou esse capítulo da história. Nossos planos incluem permitir que façamos muito mais check-in do amor que decidimos compartilhar.", "resposta-7.jpg"]
];

const results = {
  low: {
    img: "r1.jpg",
    text: "Eita, passou meio longe. Ou será que estamos muito misteriosas? Pra descobrir, é só confirmar sua presença e vir comemorar com a gente!"
  },
  mid: {
    img: "r2.jpg",
    text: "Passou pertinho mas não gabaritou. Então podemos pedir algo muito importante: Que confirme sua presença já!"
  },
  top: {
    img: "r3.jpg",
    text: "Quem acerta tudo já é de casa. Então esperamos que já tenha confirmado presença porque depois de nós duas, você é a pessoa mais importante do evento!"
  }
};

const ICONS = {
  redo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 1 0 7.73 10h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>',
  exit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 17l1.41-1.41L8.83 13H20v-2H8.83l2.58-2.59L10 7l-5 5 5 5zM4 5h8V3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H4V5z"/></svg>',
  gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7h-2.18A3 3 0 0 0 12 5.17 3 3 0 0 0 6.18 7H4a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2zm-5-2a1 1 0 1 1 0 2h-2.2A1 1 0 0 1 15 5zM9 5a1 1 0 0 1 1 1 1 1 0 0 1-1 1H8a1 1 0 0 1 1-2zm2 15H6v-7h5v7zm0-9H4V9h7v2zm7 9h-5v-7h5v7zm2-9h-7V9h7v2z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
};

let index = 0, score = 0, countdownTimer = null;

function typeText(el, text, onComplete) {
  el.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i++] || "";
    if (i >= text.length) {
      clearInterval(t);
      if (onComplete) onComplete();
    }
  }, 25);
}

function home() {
  clearInterval(countdownTimer);
  index = 0;
  score = 0;
  app.innerHTML = `
    <div class="screen cover">
      <img src="${IMG}tela-inicial.jpg" alt="Match com o casal">
      <button id="start">INICIAR</button>
    </div>`;
  document.getElementById("start").onclick = question;
}

function question() {
  const [q, opts] = questions[index];
  app.innerHTML = `
    <div class="screen question">
      <h2>${q}</h2>
      <div class="options"></div>
    </div>`;
  const box = app.querySelector(".options");
  opts.forEach((o, i) => {
    const b = document.createElement("button");
    b.textContent = o;
    b.onclick = () => choose(i, b, box);
    box.appendChild(b);
  });
}

function choose(i, btn, box) {
  const correct = questions[index][2];
  const buttons = box.querySelectorAll("button");
  buttons.forEach(b => (b.disabled = true));
  if (i === correct) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    buttons[correct].classList.add("correct");
  }
  setTimeout(answer, 1000);
}

function answer() {
  const text = questions[index][3];
  const img = questions[index][4];
  app.innerHTML = `
    <div class="screen answer" style="background-image:url('${IMG}${img}')">
      <div class="top-content">
        <p class="text"></p>
        <button class="confirm" style="visibility:hidden">${index === questions.length - 1 ? "VER RESULTADO" : "PRÓXIMA"}</button>
      </div>
    </div>`;
  const p = app.querySelector(".text");
  const btn = app.querySelector(".confirm");
  typeText(p, text, () => (btn.style.visibility = "visible"));
  btn.onclick = () => {
    index++;
    index < questions.length ? question() : loading();
  };
}

function loading() {
  let seconds = 5;
  app.innerHTML = `
    <div class="screen loading">
      <video src="${IMG}loading.mp4" autoplay muted playsinline loop></video>
      <div class="loading-info">
        <p class="loading-label">Carregando seu resultado…</p>
        <p class="loading-count" id="count">${seconds}</p>
      </div>
    </div>`;
  const video = app.querySelector("video");
  const p = video.play();
  if (p && p.catch) p.catch(() => {});
  const count = document.getElementById("count");
  clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdownTimer);
      result();
    } else {
      count.textContent = seconds;
    }
  }, 1000);
}

function result() {
  const r = score >= 7 ? results.top : score >= 5 ? results.mid : results.low;
  app.innerHTML = `
    <div class="screen result" style="background-image:url('${IMG}${r.img}')">
      <p class="text result-text">${r.text}</p>
      <div class="actions">
        <button class="icon-btn" id="redo" aria-label="Refazer" title="Refazer">${ICONS.redo}</button>
        <div class="actions-center">
          <a class="icon-btn" href="${SITE}#lista-de-presentes" target="_blank" rel="noopener" aria-label="Lista de presentes" title="Lista de presentes">${ICONS.gift}</a>
          <a class="icon-btn" href="${SITE}#confirmacao-de-presenca" target="_blank" rel="noopener" aria-label="Confirmar presença" title="Confirmar presença">${ICONS.check}</a>
        </div>
        <a class="icon-btn" href="${SITE}" target="_blank" rel="noopener" aria-label="Sair" title="Sair">${ICONS.exit}</a>
      </div>
    </div>`;
  document.getElementById("redo").onclick = home;
}

home();